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
a[c]=function(){a[c]=function(){A.kb(b)}
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
if(a[b]!==s)A.kc(b)
a[b]=r}var q=a[b]
a[c]=function(){return q}
return q}}function makeConstList(a){a.immutable$list=Array
a.fixed$length=Array
return a}function convertToFastObject(a){function t(){}t.prototype=a
new t()
return a}function convertAllToFastObject(a){for(var s=0;s<a.length;++s)convertToFastObject(a[s])}var y=0
function instanceTearOffGetter(a,b){var s=null
return a?function(c){if(s===null)s=A.fU(b)
return new s(c,this)}:function(){if(s===null)s=A.fU(b)
return new s(this,null)}}function staticTearOffGetter(a){var s=null
return function(){if(s===null)s=A.fU(a).prototype
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
a(hunkHelpers,v,w,$)}var A={fH:function fH(){},
k(){return $},
iH(a){return new A.bj("Field '"+a+"' has not been initialized.")},
hp(a,b){a=a+b&536870911
a=a+((a&524287)<<10)&536870911
return a^a>>>6},
iX(a){a=a+((a&67108863)<<3)&536870911
a^=a>>>11
return a+((a&16383)<<15)&536870911},
cW(a,b,c){return a},
ha(){return new A.aT("No element")},
iC(){return new A.aT("Too many elements")},
bj:function bj(a){this.a=a},
eG:function eG(){},
b9:function b9(){},
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
aA:function aA(a,b,c){this.a=a
this.b=b
this.$ti=c},
bB:function bB(a,b,c){this.a=a
this.b=b
this.$ti=c},
i_(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
k2(a,b){var s
if(b!=null){s=b.x
if(s!=null)return s}return t.da.b(a)},
r(a){var s
if(typeof a=="string")return a
if(typeof a=="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
s=J.c2(a)
return s},
bt(a){var s,r=$.hi
if(r==null)r=$.hi=Symbol("identityHashCode")
s=a[r]
if(s==null){s=Math.random()*0x3fffffff|0
a[r]=s}return s},
bu(a,b){var s,r=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(r==null)return null
if(3>=r.length)return A.f(r,3)
s=r[3]
if(s!=null)return parseInt(a,10)
if(r[2]!=null)return parseInt(a,16)
return null},
x(a){var s,r
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return null
s=parseFloat(a)
if(isNaN(s)){r=B.i.d3(a)
if(r==="NaN"||r==="+NaN"||r==="-NaN")return s
return null}return s},
eE(a){return A.iM(a)},
iM(a){var s,r,q,p,o
if(a instanceof A.v)return A.L(A.aj(a),null)
s=J.b2(a)
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
return String.fromCharCode((B.f.af(s,10)|55296)>>>0,s&1023|56320)}throw A.e(A.eF(a,0,1114111,null,null))},
R(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
iT(a){return a.b?A.R(a).getUTCFullYear()+0:A.R(a).getFullYear()+0},
iR(a){return a.b?A.R(a).getUTCMonth()+1:A.R(a).getMonth()+1},
iN(a){return a.b?A.R(a).getUTCDate()+0:A.R(a).getDate()+0},
iO(a){return a.b?A.R(a).getUTCHours()+0:A.R(a).getHours()+0},
iQ(a){return a.b?A.R(a).getUTCMinutes()+0:A.R(a).getMinutes()+0},
iS(a){return a.b?A.R(a).getUTCSeconds()+0:A.R(a).getSeconds()+0},
iP(a){return a.b?A.R(a).getUTCMilliseconds()+0:A.R(a).getMilliseconds()+0},
f(a,b){if(a==null)J.c1(a)
throw A.e(A.bZ(a,b))},
bZ(a,b){var s,r="index"
if(!A.hK(b))return new A.a4(!0,b,r,null)
s=A.S(J.c1(a))
if(b<0||b>=s)return A.fF(b,a,r,null,s)
return A.iU(b,r)},
e(a){var s,r
if(a==null)a=new A.cj()
s=new Error()
s.dartException=a
r=A.kd
if("defineProperty" in Object){Object.defineProperty(s,"message",{get:r})
s.name=""}else s.toString=r
return s},
kd(){return J.c2(this.dartException)},
aF(a){throw A.e(a)},
cY(a){throw A.e(A.aL(a))},
a8(a){var s,r,q,p,o,n
a=A.k9(a.replace(String({}),"$receiver$"))
s=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(s==null)s=A.w([],t.s)
r=s.indexOf("\\$arguments\\$")
q=s.indexOf("\\$argumentsExpr\\$")
p=s.indexOf("\\$expr\\$")
o=s.indexOf("\\$method\\$")
n=s.indexOf("\\$receiver\\$")
return new A.eJ(a.replace(new RegExp("\\\\\\$arguments\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$argumentsExpr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$expr\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$method\\\\\\$","g"),"((?:x|[^x])*)").replace(new RegExp("\\\\\\$receiver\\\\\\$","g"),"((?:x|[^x])*)"),r,q,p,o,n)},
eK(a){return function($expr$){var $argumentsExpr$="$arguments$"
try{$expr$.$method$($argumentsExpr$)}catch(s){return s.message}}(a)},
hr(a){return function($expr$){try{$expr$.$method$}catch(s){return s.message}}(a)},
fI(a,b){var s=b==null,r=s?null:b.method
return new A.ci(a,r,s?null:b.receiver)},
ak(a){if(a==null)return new A.eD(a)
if(typeof a!=="object")return a
if("dartException" in a)return A.aE(a,a.dartException)
return A.jN(a)},
aE(a,b){if(t.R.b(b))if(b.$thrownJsError==null)b.$thrownJsError=a
return b},
jN(a){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e=null
if(!("message" in a))return a
s=a.message
if("number" in a&&typeof a.number=="number"){r=a.number
q=r&65535
if((B.f.af(r,16)&8191)===10)switch(q){case 438:return A.aE(a,A.fI(A.r(s)+" (Error "+q+")",e))
case 445:case 5007:p=A.r(s)
return A.aE(a,new A.bs(p+" (Error "+q+")",e))}}if(a instanceof TypeError){o=$.i2()
n=$.i3()
m=$.i4()
l=$.i5()
k=$.i8()
j=$.i9()
i=$.i7()
$.i6()
h=$.ib()
g=$.ia()
f=o.aq(s)
if(f!=null)return A.aE(a,A.fI(A.F(s),f))
else{f=n.aq(s)
if(f!=null){f.method="call"
return A.aE(a,A.fI(A.F(s),f))}else{f=m.aq(s)
if(f==null){f=l.aq(s)
if(f==null){f=k.aq(s)
if(f==null){f=j.aq(s)
if(f==null){f=i.aq(s)
if(f==null){f=l.aq(s)
if(f==null){f=h.aq(s)
if(f==null){f=g.aq(s)
p=f!=null}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0}else p=!0
if(p){A.F(s)
return A.aE(a,new A.bs(s,f==null?e:f.method))}}}return A.aE(a,new A.cx(typeof s=="string"?s:""))}if(a instanceof RangeError){if(typeof s=="string"&&s.indexOf("call stack")!==-1)return new A.bx()
s=function(b){try{return String(b)}catch(d){}return null}(a)
return A.aE(a,new A.a4(!1,e,e,typeof s=="string"?s.replace(/^RangeError:\s*/,""):s))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof s=="string"&&s==="too much recursion")return new A.bx()
return a},
aD(a){var s
if(a==null)return new A.bN(a)
s=a.$cachedTrace
if(s!=null)return s
return a.$cachedTrace=new A.bN(a)},
hW(a){if(a==null||typeof a!="object")return J.cZ(a)
else return A.bt(a)},
k1(a,b,c,d,e,f){t.Y.a(a)
switch(A.S(b)){case 0:return a.$0()
case 1:return a.$1(c)
case 2:return a.$2(c,d)
case 3:return a.$3(c,d,e)
case 4:return a.$4(c,d,e,f)}throw A.e(new A.eV("Unsupported number of arguments for wrapped closure"))},
aC(a,b){var s
if(a==null)return null
s=a.$identity
if(!!s)return s
s=function(c,d,e){return function(f,g,h,i){return e(c,d,f,g,h,i)}}(a,b,A.k1)
a.$identity=s
return s},
iu(a2){var s,r,q,p,o,n,m,l,k,j,i=a2.co,h=a2.iS,g=a2.iI,f=a2.nDA,e=a2.aI,d=a2.fs,c=a2.cs,b=d[0],a=c[0],a0=i[b],a1=a2.fT
a1.toString
s=h?Object.create(new A.co().constructor.prototype):Object.create(new A.aI(null,null).constructor.prototype)
s.$initialize=s.constructor
if(h)r=function static_tear_off(){this.$initialize()}
else r=function tear_off(a3,a4){this.$initialize(a3,a4)}
s.constructor=r
r.prototype=s
s.$_name=b
s.$_target=a0
q=!h
if(q)p=A.h7(b,a0,g,f)
else{s.$static_name=b
p=a0}s.$S=A.iq(a1,h,g)
s[a]=p
for(o=p,n=1;n<d.length;++n){m=d[n]
if(typeof m=="string"){l=i[m]
k=m
m=l}else k=""
j=c[n]
if(j!=null){if(q)m=A.h7(k,m,g,f)
s[j]=m}if(n===e)o=m}s.$C=o
s.$R=a2.rC
s.$D=a2.dV
return r},
iq(a,b,c){if(typeof a=="number")return a
if(typeof a=="string"){if(b)throw A.e("Cannot compute signature for static tearoff.")
return function(d,e){return function(){return e(this,d)}}(a,A.io)}throw A.e("Error in functionType of tearoff")},
ir(a,b,c,d){var s=A.h6
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,s)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,s)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,s)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,s)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,s)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,s)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,s)}},
h7(a,b,c,d){var s,r
if(c)return A.it(a,b,d)
s=b.length
r=A.ir(s,d,a,b)
return r},
is(a,b,c,d){var s=A.h6,r=A.ip
switch(b?-1:a){case 0:throw A.e(new A.cm("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,r,s)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,r,s)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,r,s)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,r,s)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,r,s)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,r,s)
default:return function(e,f,g){return function(){var q=[g(this)]
Array.prototype.push.apply(q,arguments)
return e.apply(f(this),q)}}(d,r,s)}},
it(a,b,c){var s,r
if($.h4==null)$.h4=A.h3("interceptor")
if($.h5==null)$.h5=A.h3("receiver")
s=b.length
r=A.is(s,c,a,b)
return r},
fU(a){return A.iu(a)},
io(a,b){return A.fj(v.typeUniverse,A.aj(a.a),b)},
h6(a){return a.a},
ip(a){return a.b},
h3(a){var s,r,q,p=new A.aI("receiver","interceptor"),o=J.hb(Object.getOwnPropertyNames(p),t.X)
for(s=o.length,r=0;r<s;++r){q=o[r]
if(p[q]===a)return q}throw A.e(A.d2("Field name "+a+" not found.",null))},
fT(a){if(a==null)A.jO("boolean expression must not be null")
return a},
jO(a){throw A.e(new A.cz(a))},
kb(a){throw A.e(new A.c9(a))},
jU(a){return v.getIsolateTag(a)},
kR(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
k4(a){var s,r,q,p,o,n=A.F($.hS.$1(a)),m=$.fq[n]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fw[n]
if(s!=null)return s
r=v.interceptorsByTag[n]
if(r==null){q=A.hG($.hP.$2(a,n))
if(q!=null){m=$.fq[q]
if(m!=null){Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}s=$.fw[q]
if(s!=null)return s
r=v.interceptorsByTag[q]
n=q}}if(r==null)return null
s=r.prototype
p=n[0]
if(p==="!"){m=A.fx(s)
$.fq[n]=m
Object.defineProperty(a,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
return m.i}if(p==="~"){$.fw[n]=s
return s}if(p==="-"){o=A.fx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}if(p==="+")return A.hX(a,s)
if(p==="*")throw A.e(A.cw(n))
if(v.leafTags[n]===true){o=A.fx(s)
Object.defineProperty(Object.getPrototypeOf(a),v.dispatchPropertyName,{value:o,enumerable:false,writable:true,configurable:true})
return o.i}else return A.hX(a,s)},
hX(a,b){var s=Object.getPrototypeOf(a)
Object.defineProperty(s,v.dispatchPropertyName,{value:J.fZ(b,s,null,null),enumerable:false,writable:true,configurable:true})
return b},
fx(a){return J.fZ(a,!1,null,!!a.$ich)},
k6(a,b,c){var s=b.prototype
if(v.leafTags[a]===true)return A.fx(s)
else return J.fZ(s,c,null,null)},
jZ(){if(!0===$.fY)return
$.fY=!0
A.k_()},
k_(){var s,r,q,p,o,n,m,l
$.fq=Object.create(null)
$.fw=Object.create(null)
A.jY()
s=v.interceptorsByTag
r=Object.getOwnPropertyNames(s)
if(typeof window!="undefined"){window
q=function(){}
for(p=0;p<r.length;++p){o=r[p]
n=$.hZ.$1(o)
if(n!=null){m=A.k6(o,s[o],n)
if(m!=null){Object.defineProperty(n,v.dispatchPropertyName,{value:m,enumerable:false,writable:true,configurable:true})
q.prototype=n}}}}for(p=0;p<r.length;++p){o=r[p]
if(/^[A-Za-z_]/.test(o)){l=s[o]
s["!"+o]=l
s["~"+o]=l
s["-"+o]=l
s["+"+o]=l
s["*"+o]=l}}},
jY(){var s,r,q,p,o,n,m=B.C()
m=A.b0(B.D,A.b0(B.E,A.b0(B.r,A.b0(B.r,A.b0(B.F,A.b0(B.G,A.b0(B.H(B.q),m)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){s=dartNativeDispatchHooksTransformer
if(typeof s=="function")s=[s]
if(s.constructor==Array)for(r=0;r<s.length;++r){q=s[r]
if(typeof q=="function")m=q(m)||m}}p=m.getTag
o=m.getUnknownTag
n=m.prototypeForTag
$.hS=new A.ft(p)
$.hP=new A.fu(o)
$.hZ=new A.fv(n)},
b0(a,b){return a(b)||b},
k9(a){if(/[[\]{}()*+?.\\^$|]/.test(a))return a.replace(/[[\]{}()*+?.\\^$|]/g,"\\$&")
return a},
be:function be(){},
aP:function aP(a,b){this.a=a
this.$ti=b},
eJ:function eJ(a,b,c,d,e,f){var _=this
_.a=a
_.b=b
_.c=c
_.d=d
_.e=e
_.f=f},
bs:function bs(a,b){this.a=a
this.b=b},
ci:function ci(a,b,c){this.a=a
this.b=b
this.c=c},
cx:function cx(a){this.a=a},
eD:function eD(a){this.a=a},
bN:function bN(a){this.a=a
this.b=null},
G:function G(){},
c5:function c5(){},
c6:function c6(){},
cu:function cu(){},
co:function co(){},
aI:function aI(a,b){this.a=a
this.b=b},
cm:function cm(a){this.a=a},
cz:function cz(a){this.a=a},
bi:function bi(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
ew:function ew(a,b){var _=this
_.a=a
_.b=b
_.d=_.c=null},
bk:function bk(a,b){this.a=a
this.$ti=b},
bl:function bl(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
ft:function ft(a){this.a=a},
fu:function fu(a){this.a=a},
fv:function fv(a){this.a=a},
kc(a){return A.aF(new A.bj("Field '"+a+"' has been assigned during initialization."))},
j3(a){var s=new A.eT(a)
return s.b=s},
a(a,b){if(a===$)throw A.e(A.iH(b))
return a},
eT:function eT(a){this.a=a
this.b=null},
hl(a,b){var s=b.c
return s==null?b.c=A.fP(a,b.y,!0):s},
hk(a,b){var s=b.c
return s==null?b.c=A.bQ(a,"ar",[b.y]):s},
hm(a){var s=a.x
if(s===6||s===7||s===8)return A.hm(a.y)
return s===11||s===12},
iW(a){return a.at},
b1(a){return A.cT(v.typeUniverse,a,!1)},
k0(a,b){var s,r,q,p,o
if(a==null)return null
s=b.z
r=a.as
if(r==null)r=a.as=new Map()
q=b.at
p=r.get(q)
if(p!=null)return p
o=A.a9(v.typeUniverse,a.y,s,0)
r.set(q,o)
return o},
a9(a,b,a0,a1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c=b.x
switch(c){case 5:case 1:case 2:case 3:case 4:return b
case 6:s=b.y
r=A.a9(a,s,a0,a1)
if(r===s)return b
return A.hC(a,r,!0)
case 7:s=b.y
r=A.a9(a,s,a0,a1)
if(r===s)return b
return A.fP(a,r,!0)
case 8:s=b.y
r=A.a9(a,s,a0,a1)
if(r===s)return b
return A.hB(a,r,!0)
case 9:q=b.z
p=A.bY(a,q,a0,a1)
if(p===q)return b
return A.bQ(a,b.y,p)
case 10:o=b.y
n=A.a9(a,o,a0,a1)
m=b.z
l=A.bY(a,m,a0,a1)
if(n===o&&l===m)return b
return A.fN(a,n,l)
case 11:k=b.y
j=A.a9(a,k,a0,a1)
i=b.z
h=A.jK(a,i,a0,a1)
if(j===k&&h===i)return b
return A.hA(a,j,h)
case 12:g=b.z
a1+=g.length
f=A.bY(a,g,a0,a1)
o=b.y
n=A.a9(a,o,a0,a1)
if(f===g&&n===o)return b
return A.fO(a,n,f,!0)
case 13:e=b.y
if(e<a1)return b
d=a0[e-a1]
if(d==null)return b
return d
default:throw A.e(A.d3("Attempted to substitute unexpected RTI kind "+c))}},
bY(a,b,c,d){var s,r,q,p,o=b.length,n=A.fk(o)
for(s=!1,r=0;r<o;++r){q=b[r]
p=A.a9(a,q,c,d)
if(p!==q)s=!0
n[r]=p}return s?n:b},
jL(a,b,c,d){var s,r,q,p,o,n,m=b.length,l=A.fk(m)
for(s=!1,r=0;r<m;r+=3){q=b[r]
p=b[r+1]
o=b[r+2]
n=A.a9(a,o,c,d)
if(n!==o)s=!0
l.splice(r,3,q,p,n)}return s?l:b},
jK(a,b,c,d){var s,r=b.a,q=A.bY(a,r,c,d),p=b.b,o=A.bY(a,p,c,d),n=b.c,m=A.jL(a,n,c,d)
if(q===r&&o===p&&m===n)return b
s=new A.cG()
s.a=q
s.b=o
s.c=m
return s},
w(a,b){a[v.arrayRti]=b
return a},
fV(a){var s=a.$S
if(s!=null){if(typeof s=="number")return A.jV(s)
return a.$S()}return null},
hT(a,b){var s
if(A.hm(b))if(a instanceof A.G){s=A.fV(a)
if(s!=null)return s}return A.aj(a)},
aj(a){var s
if(a instanceof A.v){s=a.$ti
return s!=null?s:A.fQ(a)}if(Array.isArray(a))return A.ai(a)
return A.fQ(J.b2(a))},
ai(a){var s=a[v.arrayRti],r=t.ce
if(s==null)return r
if(s.constructor!==r.constructor)return r
return s},
a3(a){var s=a.$ti
return s!=null?s:A.fQ(a)},
fQ(a){var s=a.constructor,r=s.$ccache
if(r!=null)return r
return A.jv(a,s)},
jv(a,b){var s=a instanceof A.G?a.__proto__.__proto__.constructor:b,r=A.jk(v.typeUniverse,s.name)
b.$ccache=r
return r},
jV(a){var s,r=v.types,q=r[a]
if(typeof q=="string"){s=A.cT(v.typeUniverse,q,!1)
r[a]=s
return s}return q},
fX(a){var s=a instanceof A.G?A.fV(a):null
return A.fW(s==null?A.aj(a):s)},
fW(a){var s,r,q,p=a.w
if(p!=null)return p
s=a.at
r=s.replace(/\*/g,"")
if(r===s)return a.w=new A.cR(a)
q=A.cT(v.typeUniverse,r,!0)
p=q.w
return a.w=p==null?q.w=new A.cR(q):p},
ke(a){return A.fW(A.cT(v.typeUniverse,a,!1))},
ju(a){var s,r,q,p,o=this
if(o===t.K)return A.aY(o,a,A.jz)
if(!A.ab(o))if(!(o===t._))s=!1
else s=!0
else s=!0
if(s)return A.aY(o,a,A.jC)
s=o.x
r=s===6?o.y:o
if(r===t.bL)q=A.hK
else if(r===t.cb||r===t.H)q=A.jy
else if(r===t.N)q=A.jA
else q=r===t.y?A.fm:null
if(q!=null)return A.aY(o,a,q)
if(r.x===9){p=r.y
if(r.z.every(A.k3)){o.r="$i"+p
if(p==="O")return A.aY(o,a,A.jx)
return A.aY(o,a,A.jB)}}else if(s===7)return A.aY(o,a,A.js)
return A.aY(o,a,A.jq)},
aY(a,b,c){a.b=c
return a.b(b)},
jt(a){var s,r=this,q=A.jp
if(!A.ab(r))if(!(r===t._))s=!1
else s=!0
else s=!0
if(s)q=A.jo
else if(r===t.K)q=A.jn
else{s=A.c_(r)
if(s)q=A.jr}r.a=q
return r.a(a)},
fn(a){var s,r=a.x
if(!A.ab(a))if(!(a===t._))if(!(a===t.I))if(r!==7)s=r===8&&A.fn(a.y)||a===t.P||a===t.T
else s=!0
else s=!0
else s=!0
else s=!0
return s},
jq(a){var s=this
if(a==null)return A.fn(s)
return A.B(v.typeUniverse,A.hT(a,s),null,s,null)},
js(a){if(a==null)return!0
return this.y.b(a)},
jB(a){var s,r=this
if(a==null)return A.fn(r)
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b2(a)[s]},
jx(a){var s,r=this
if(a==null)return A.fn(r)
if(typeof a!="object")return!1
if(Array.isArray(a))return!0
s=r.r
if(a instanceof A.v)return!!a[s]
return!!J.b2(a)[s]},
jp(a){var s,r=this
if(a==null){s=A.c_(r)
if(s)return a}else if(r.b(a))return a
A.hH(a,r)},
jr(a){var s=this
if(a==null)return a
else if(s.b(a))return a
A.hH(a,s)},
hH(a,b){throw A.e(A.hz(A.ht(a,A.hT(a,b),A.L(b,null))))},
hR(a,b,c,d){var s=null
if(A.B(v.typeUniverse,a,s,b,s))return a
throw A.e(A.hz("The type argument '"+A.L(a,s)+"' is not a subtype of the type variable bound '"+A.L(b,s)+"' of type variable '"+c+"' in '"+d+"'."))},
ht(a,b,c){var s=A.cc(a)
return s+": type '"+A.L(b==null?A.aj(a):b,null)+"' is not a subtype of type '"+c+"'"},
hz(a){return new A.bP("TypeError: "+a)},
K(a,b){return new A.bP("TypeError: "+A.ht(a,null,b))},
jz(a){return a!=null},
jn(a){if(a!=null)return a
throw A.e(A.K(a,"Object"))},
jC(a){return!0},
jo(a){return a},
fm(a){return!0===a||!1===a},
j(a){if(!0===a)return!0
if(!1===a)return!1
throw A.e(A.K(a,"bool"))},
kI(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.K(a,"bool"))},
kH(a){if(!0===a)return!0
if(!1===a)return!1
if(a==null)return a
throw A.e(A.K(a,"bool?"))},
jm(a){if(typeof a=="number")return a
throw A.e(A.K(a,"double"))},
kK(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.K(a,"double"))},
kJ(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.K(a,"double?"))},
hK(a){return typeof a=="number"&&Math.floor(a)===a},
S(a){if(typeof a=="number"&&Math.floor(a)===a)return a
throw A.e(A.K(a,"int"))},
kM(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.K(a,"int"))},
kL(a){if(typeof a=="number"&&Math.floor(a)===a)return a
if(a==null)return a
throw A.e(A.K(a,"int?"))},
jy(a){return typeof a=="number"},
bV(a){if(typeof a=="number")return a
throw A.e(A.K(a,"num"))},
kO(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.K(a,"num"))},
kN(a){if(typeof a=="number")return a
if(a==null)return a
throw A.e(A.K(a,"num?"))},
jA(a){return typeof a=="string"},
F(a){if(typeof a=="string")return a
throw A.e(A.K(a,"String"))},
kP(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.K(a,"String"))},
hG(a){if(typeof a=="string")return a
if(a==null)return a
throw A.e(A.K(a,"String?"))},
jH(a,b){var s,r,q
for(s="",r="",q=0;q<a.length;++q,r=", ")s+=r+A.L(a[q],b)
return s},
hI(a4,a5,a6){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3=", "
if(a6!=null){s=a6.length
if(a5==null){a5=A.w([],t.s)
r=null}else r=a5.length
q=a5.length
for(p=s;p>0;--p)B.b.B(a5,"T"+(q+p))
for(o=t.X,n=t._,m="<",l="",p=0;p<s;++p,l=a3){k=a5.length
j=k-1-p
if(!(j>=0))return A.f(a5,j)
m=B.i.bU(m+l,a5[j])
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
if(l===9){p=A.jM(a.y)
o=a.z
return o.length>0?p+("<"+A.jH(o,b)+">"):p}if(l===11)return A.hI(a,b,null)
if(l===12)return A.hI(a.y,b,a.z)
if(l===13){n=a.y
m=b.length
n=m-1-n
if(!(n>=0&&n<m))return A.f(b,n)
return b[n]}return"?"},
jM(a){var s=v.mangledGlobalNames[a]
if(s!=null)return s
return"minified:"+a},
jl(a,b){var s=a.tR[b]
for(;typeof s=="string";)s=a.tR[s]
return s},
jk(a,b){var s,r,q,p,o,n=a.eT,m=n[b]
if(m==null)return A.cT(a,b,!1)
else if(typeof m=="number"){s=m
r=A.bR(a,5,"#")
q=A.fk(s)
for(p=0;p<s;++p)q[p]=r
o=A.bQ(a,b,q)
n[b]=o
return o}else return m},
ji(a,b){return A.hD(a.tR,b)},
jh(a,b){return A.hD(a.eT,b)},
cT(a,b,c){var s,r=a.eC,q=r.get(b)
if(q!=null)return q
s=A.hx(A.hv(a,null,b,c))
r.set(b,s)
return s},
fj(a,b,c){var s,r,q=b.Q
if(q==null)q=b.Q=new Map()
s=q.get(c)
if(s!=null)return s
r=A.hx(A.hv(a,b,c,!0))
q.set(c,r)
return r},
jj(a,b,c){var s,r,q,p=b.as
if(p==null)p=b.as=new Map()
s=c.at
r=p.get(s)
if(r!=null)return r
q=A.fN(a,b,c.x===10?c.z:[c])
p.set(s,q)
return q},
ah(a,b){b.a=A.jt
b.b=A.ju
return b},
bR(a,b,c){var s,r,q=a.eC.get(c)
if(q!=null)return q
s=new A.Y(null,null)
s.x=b
s.at=c
r=A.ah(a,s)
a.eC.set(c,r)
return r},
hC(a,b,c){var s,r=b.at+"*",q=a.eC.get(r)
if(q!=null)return q
s=A.jf(a,b,r,c)
a.eC.set(r,s)
return s},
jf(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.ab(b))r=b===t.P||b===t.T||s===7||s===6
else r=!0
if(r)return b}q=new A.Y(null,null)
q.x=6
q.y=b
q.at=c
return A.ah(a,q)},
fP(a,b,c){var s,r=b.at+"?",q=a.eC.get(r)
if(q!=null)return q
s=A.je(a,b,r,c)
a.eC.set(r,s)
return s},
je(a,b,c,d){var s,r,q,p
if(d){s=b.x
if(!A.ab(b))if(!(b===t.P||b===t.T))if(s!==7)r=s===8&&A.c_(b.y)
else r=!0
else r=!0
else r=!0
if(r)return b
else if(s===1||b===t.I)return t.P
else if(s===6){q=b.y
if(q.x===8&&A.c_(q.y))return q
else return A.hl(a,b)}}p=new A.Y(null,null)
p.x=7
p.y=b
p.at=c
return A.ah(a,p)},
hB(a,b,c){var s,r=b.at+"/",q=a.eC.get(r)
if(q!=null)return q
s=A.jc(a,b,r,c)
a.eC.set(r,s)
return s},
jc(a,b,c,d){var s,r,q
if(d){s=b.x
if(!A.ab(b))if(!(b===t._))r=!1
else r=!0
else r=!0
if(r||b===t.K)return b
else if(s===1)return A.bQ(a,"ar",[b])
else if(b===t.P||b===t.T)return t.bc}q=new A.Y(null,null)
q.x=8
q.y=b
q.at=c
return A.ah(a,q)},
jg(a,b){var s,r,q=""+b+"^",p=a.eC.get(q)
if(p!=null)return p
s=new A.Y(null,null)
s.x=13
s.y=b
s.at=q
r=A.ah(a,s)
a.eC.set(q,r)
return r},
cS(a){var s,r,q,p=a.length
for(s="",r="",q=0;q<p;++q,r=",")s+=r+a[q].at
return s},
jb(a){var s,r,q,p,o,n=a.length
for(s="",r="",q=0;q<n;q+=3,r=","){p=a[q]
o=a[q+1]?"!":":"
s+=r+p+o+a[q+2].at}return s},
bQ(a,b,c){var s,r,q,p=b
if(c.length>0)p+="<"+A.cS(c)+">"
s=a.eC.get(p)
if(s!=null)return s
r=new A.Y(null,null)
r.x=9
r.y=b
r.z=c
if(c.length>0)r.c=c[0]
r.at=p
q=A.ah(a,r)
a.eC.set(p,q)
return q},
fN(a,b,c){var s,r,q,p,o,n
if(b.x===10){s=b.y
r=b.z.concat(c)}else{r=c
s=b}q=s.at+(";<"+A.cS(r)+">")
p=a.eC.get(q)
if(p!=null)return p
o=new A.Y(null,null)
o.x=10
o.y=s
o.z=r
o.at=q
n=A.ah(a,o)
a.eC.set(q,n)
return n},
hA(a,b,c){var s,r,q,p,o,n=b.at,m=c.a,l=m.length,k=c.b,j=k.length,i=c.c,h=i.length,g="("+A.cS(m)
if(j>0){s=l>0?",":""
g+=s+"["+A.cS(k)+"]"}if(h>0){s=l>0?",":""
g+=s+"{"+A.jb(i)+"}"}r=n+(g+")")
q=a.eC.get(r)
if(q!=null)return q
p=new A.Y(null,null)
p.x=11
p.y=b
p.z=c
p.at=r
o=A.ah(a,p)
a.eC.set(r,o)
return o},
fO(a,b,c,d){var s,r=b.at+("<"+A.cS(c)+">"),q=a.eC.get(r)
if(q!=null)return q
s=A.jd(a,b,c,r,d)
a.eC.set(r,s)
return s},
jd(a,b,c,d,e){var s,r,q,p,o,n,m,l
if(e){s=c.length
r=A.fk(s)
for(q=0,p=0;p<s;++p){o=c[p]
if(o.x===1){r[p]=o;++q}}if(q>0){n=A.a9(a,b,r,0)
m=A.bY(a,c,r,0)
return A.fO(a,n,m,c!==m)}}l=new A.Y(null,null)
l.x=12
l.y=b
l.z=c
l.at=d
return A.ah(a,l)},
hv(a,b,c,d){return{u:a,e:b,r:c,s:[],p:0,n:d}},
hx(a){var s,r,q,p,o,n,m,l,k,j,i,h=a.r,g=a.s
for(s=h.length,r=0;r<s;){q=h.charCodeAt(r)
if(q>=48&&q<=57)r=A.j6(r+1,q,h,g)
else if((((q|32)>>>0)-97&65535)<26||q===95||q===36)r=A.hw(a,r,h,g,!1)
else if(q===46)r=A.hw(a,r,h,g,!0)
else{++r
switch(q){case 44:break
case 58:g.push(!1)
break
case 33:g.push(!0)
break
case 59:g.push(A.ag(a.u,a.e,g.pop()))
break
case 94:g.push(A.jg(a.u,g.pop()))
break
case 35:g.push(A.bR(a.u,5,"#"))
break
case 64:g.push(A.bR(a.u,2,"@"))
break
case 126:g.push(A.bR(a.u,3,"~"))
break
case 60:g.push(a.p)
a.p=g.length
break
case 62:p=a.u
o=g.splice(a.p)
A.fM(a.u,a.e,o)
a.p=g.pop()
n=g.pop()
if(typeof n=="string")g.push(A.bQ(p,n,o))
else{m=A.ag(p,a.e,n)
switch(m.x){case 11:g.push(A.fO(p,m,o,a.n))
break
default:g.push(A.fN(p,m,o))
break}}break
case 38:A.j7(a,g)
break
case 42:p=a.u
g.push(A.hC(p,A.ag(p,a.e,g.pop()),a.n))
break
case 63:p=a.u
g.push(A.fP(p,A.ag(p,a.e,g.pop()),a.n))
break
case 47:p=a.u
g.push(A.hB(p,A.ag(p,a.e,g.pop()),a.n))
break
case 40:g.push(a.p)
a.p=g.length
break
case 41:p=a.u
l=new A.cG()
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
A.fM(a.u,a.e,o)
a.p=g.pop()
l.a=o
l.b=k
l.c=j
g.push(A.hA(p,A.ag(p,a.e,g.pop()),l))
break
case 91:g.push(a.p)
a.p=g.length
break
case 93:o=g.splice(a.p)
A.fM(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-1)
break
case 123:g.push(a.p)
a.p=g.length
break
case 125:o=g.splice(a.p)
A.j9(a.u,a.e,o)
a.p=g.pop()
g.push(o)
g.push(-2)
break
default:throw"Bad character "+q}}}i=g.pop()
return A.ag(a.u,a.e,i)},
j6(a,b,c,d){var s,r,q=b-48
for(s=c.length;a<s;++a){r=c.charCodeAt(a)
if(!(r>=48&&r<=57))break
q=q*10+(r-48)}d.push(q)
return a},
hw(a,b,c,d,e){var s,r,q,p,o,n,m=b+1
for(s=c.length;m<s;++m){r=c.charCodeAt(m)
if(r===46){if(e)break
e=!0}else{if(!((((r|32)>>>0)-97&65535)<26||r===95||r===36))q=r>=48&&r<=57
else q=!0
if(!q)break}}p=c.substring(b,m)
if(e){s=a.u
o=a.e
if(o.x===10)o=o.y
n=A.jl(s,o.y)[p]
if(n==null)A.aF('No "'+p+'" in "'+A.iW(o)+'"')
d.push(A.fj(s,o,n))}else d.push(p)
return m},
j7(a,b){var s=b.pop()
if(0===s){b.push(A.bR(a.u,1,"0&"))
return}if(1===s){b.push(A.bR(a.u,4,"1&"))
return}throw A.e(A.d3("Unexpected extended operation "+A.r(s)))},
ag(a,b,c){if(typeof c=="string")return A.bQ(a,c,a.sEA)
else if(typeof c=="number")return A.j8(a,b,c)
else return c},
fM(a,b,c){var s,r=c.length
for(s=0;s<r;++s)c[s]=A.ag(a,b,c[s])},
j9(a,b,c){var s,r=c.length
for(s=2;s<r;s+=3)c[s]=A.ag(a,b,c[s])},
j8(a,b,c){var s,r,q=b.x
if(q===10){if(c===0)return b.y
s=b.z
r=s.length
if(c<=r)return s[c-1]
c-=r
b=b.y
q=b.x}else if(c===0)return b
if(q!==9)throw A.e(A.d3("Indexed base must be an interface type"))
s=b.z
if(c<=s.length)return s[c-1]
throw A.e(A.d3("Bad index "+c+" for "+b.l(0)))},
B(a,b,c,d,e){var s,r,q,p,o,n,m,l,k,j
if(b===d)return!0
if(!A.ab(d))if(!(d===t._))s=!1
else s=!0
else s=!0
if(s)return!0
r=b.x
if(r===4)return!0
if(A.ab(b))return!1
if(b.x!==1)s=!1
else s=!0
if(s)return!0
q=r===13
if(q)if(A.B(a,c[b.y],c,d,e))return!0
p=d.x
s=b===t.P||b===t.T
if(s){if(p===8)return A.B(a,b,c,d.y,e)
return d===t.P||d===t.T||p===7||p===6}if(d===t.K){if(r===8)return A.B(a,b.y,c,d,e)
if(r===6)return A.B(a,b.y,c,d,e)
return r!==7}if(r===6)return A.B(a,b.y,c,d,e)
if(p===6){s=A.hl(a,d)
return A.B(a,b,c,s,e)}if(r===8){if(!A.B(a,b.y,c,d,e))return!1
return A.B(a,A.hk(a,b),c,d,e)}if(r===7){s=A.B(a,t.P,c,d,e)
return s&&A.B(a,b.y,c,d,e)}if(p===8){if(A.B(a,b,c,d.y,e))return!0
return A.B(a,b,c,A.hk(a,d),e)}if(p===7){s=A.B(a,b,c,t.P,e)
return s||A.B(a,b,c,d.y,e)}if(q)return!1
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
if(!A.B(a,k,c,j,e)||!A.B(a,j,e,k,c))return!1}return A.hJ(a,b.y,c,d.y,e)}if(p===11){if(b===t.g)return!0
if(s)return!1
return A.hJ(a,b,c,d,e)}if(r===9){if(p!==9)return!1
return A.jw(a,b,c,d,e)}return!1},
hJ(a3,a4,a5,a6,a7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2
if(!A.B(a3,a4.y,a5,a6.y,a7))return!1
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
if(!A.B(a3,p[h],a7,g,a5))return!1}for(h=0;h<m;++h){g=l[h]
if(!A.B(a3,p[o+h],a7,g,a5))return!1}for(h=0;h<i;++h){g=l[m+h]
if(!A.B(a3,k[h],a7,g,a5))return!1}f=s.c
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
if(!A.B(a3,e[a+2],a7,g,a5))return!1
break}}for(;b<d;){if(f[b+1])return!1
b+=3}return!0},
jw(a,b,c,d,e){var s,r,q,p,o,n,m,l=b.y,k=d.y
for(;l!==k;){s=a.tR[l]
if(s==null)return!1
if(typeof s=="string"){l=s
continue}r=s[k]
if(r==null)return!1
q=r.length
p=q>0?new Array(q):v.typeUniverse.sEA
for(o=0;o<q;++o)p[o]=A.fj(a,b,r[o])
return A.hF(a,p,null,c,d.z,e)}n=b.z
m=d.z
return A.hF(a,n,null,c,m,e)},
hF(a,b,c,d,e,f){var s,r,q,p=b.length
for(s=0;s<p;++s){r=b[s]
q=e[s]
if(!A.B(a,r,d,q,f))return!1}return!0},
c_(a){var s,r=a.x
if(!(a===t.P||a===t.T))if(!A.ab(a))if(r!==7)if(!(r===6&&A.c_(a.y)))s=r===8&&A.c_(a.y)
else s=!0
else s=!0
else s=!0
else s=!0
return s},
k3(a){var s
if(!A.ab(a))if(!(a===t._))s=!1
else s=!0
else s=!0
return s},
ab(a){var s=a.x
return s===2||s===3||s===4||s===5||a===t.X},
hD(a,b){var s,r,q=Object.keys(b),p=q.length
for(s=0;s<p;++s){r=q[s]
a[r]=b[r]}},
fk(a){return a>0?new Array(a):v.typeUniverse.sEA},
Y:function Y(a,b){var _=this
_.a=a
_.b=b
_.w=_.r=_.c=null
_.x=0
_.at=_.as=_.Q=_.z=_.y=null},
cG:function cG(){this.c=this.b=this.a=null},
cR:function cR(a){this.a=a},
cE:function cE(){},
bP:function bP(a){this.a=a},
j_(){var s,r,q={}
if(self.scheduleImmediate!=null)return A.jP()
if(self.MutationObserver!=null&&self.document!=null){s=self.document.createElement("div")
r=self.document.createElement("span")
q.a=null
new self.MutationObserver(A.aC(new A.eQ(q),1)).observe(s,{childList:true})
return new A.eP(q,s,r)}else if(self.setImmediate!=null)return A.jQ()
return A.jR()},
j0(a){self.scheduleImmediate(A.aC(new A.eR(t.M.a(a)),0))},
j1(a){self.setImmediate(A.aC(new A.eS(t.M.a(a)),0))},
j2(a){A.fJ(B.M,t.M.a(a))},
fJ(a,b){return A.ja(a.a/1000|0,b)},
ja(a,b){var s=new A.cQ()
s.c8(a,b)
return s},
d4(a,b){var s=A.cW(a,"error",t.K)
return new A.b6(s,b==null?A.h2(a):b)},
h2(a){var s
if(t.R.b(a)){s=a.gaW()
if(s!=null)return s}return B.K},
fK(a,b){var s,r,q
for(s=t.c;r=a.a,(r&4)!==0;)a=s.a(a.c)
if((r&24)!==0){q=b.aX()
b.b7(a)
A.aX(b,q)}else{q=t.F.a(b.c)
b.a=b.a&1|4
b.c=a
a.bC(q)}},
aX(a,a0){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c={},b=c.a=a
for(s=t.n,r=t.F,q=t.d;!0;){p={}
o=b.a
n=(o&16)===0
m=!n
if(a0==null){if(m&&(o&1)===0){l=s.a(b.c)
A.fo(l.a,l.b)}return}p.a=a0
k=a0.a
for(b=a0;k!=null;b=k,k=j){b.a=null
A.aX(c.a,b)
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
A.fo(i.a,i.b)
return}f=$.A
if(f!==g)$.A=g
else f=null
b=b.c
if((b&15)===8)new A.f5(p,c,m).$0()
else if(n){if((b&1)!==0)new A.f4(p,i).$0()}else if((b&2)!==0)new A.f3(c,p).$0()
if(f!=null)$.A=f
b=p.c
if(q.b(b)){o=p.a.$ti
o=o.i("ar<2>").b(b)||!o.z[1].b(b)}else o=!1
if(o){q.a(b)
e=p.a.b
if((b.a&24)!==0){d=r.a(e.c)
e.c=null
a0=e.aY(d)
e.a=b.a&30|e.a&1
e.c=b.c
c.a=b
continue}else A.fK(b,e)
return}}e=p.a.b
d=r.a(e.c)
e.c=null
a0=e.aY(d)
b=p.b
o=p.c
if(!b){e.$ti.c.a(o)
e.a=8
e.c=o}else{s.a(o)
e.a=e.a&1|16
e.c=o}c.a=e
b=e}},
jF(a,b){var s=t.C
if(s.b(a))return s.a(a)
s=t.v
if(s.b(a))return s.a(a)
throw A.e(A.h1(a,"onError",u.c))},
jE(){var s,r
for(s=$.aZ;s!=null;s=$.aZ){$.bX=null
r=s.b
$.aZ=r
if(r==null)$.bW=null
s.a.$0()}},
jJ(){$.fR=!0
try{A.jE()}finally{$.bX=null
$.fR=!1
if($.aZ!=null)$.h_().$1(A.hQ())}},
hN(a){var s=new A.cA(a),r=$.bW
if(r==null){$.aZ=$.bW=s
if(!$.fR)$.h_().$1(A.hQ())}else $.bW=r.b=s},
jI(a){var s,r,q,p=$.aZ
if(p==null){A.hN(a)
$.bX=$.bW
return}s=new A.cA(a)
r=$.bX
if(r==null){s.b=p
$.aZ=$.bX=s}else{q=r.b
s.b=q
$.bX=r.b=s
if(q==null)$.bW=s}},
ka(a){var s=null,r=$.A
if(B.h===r){A.b_(s,s,B.h,a)
return}A.b_(s,s,r,t.M.a(r.bd(a)))},
hq(a,b){var s=$.A
if(s===B.h)return A.fJ(a,t.M.a(b))
return A.fJ(a,t.M.a(s.bd(b)))},
fo(a,b){A.jI(new A.fp(a,b))},
hL(a,b,c,d,e){var s,r=$.A
if(r===c)return d.$0()
$.A=c
s=r
try{r=d.$0()
return r}finally{$.A=s}},
hM(a,b,c,d,e,f,g){var s,r=$.A
if(r===c)return d.$1(e)
$.A=c
s=r
try{r=d.$1(e)
return r}finally{$.A=s}},
jG(a,b,c,d,e,f,g,h,i){var s,r=$.A
if(r===c)return d.$2(e,f)
$.A=c
s=r
try{r=d.$2(e,f)
return r}finally{$.A=s}},
b_(a,b,c,d){t.M.a(d)
if(B.h!==c)d=c.bd(d)
A.hN(d)},
eQ:function eQ(a){this.a=a},
eP:function eP(a,b,c){this.a=a
this.b=b
this.c=c},
eR:function eR(a){this.a=a},
eS:function eS(a){this.a=a},
cQ:function cQ(){this.b=null},
fi:function fi(a,b){this.a=a
this.b=b},
b6:function b6(a,b){this.a=a
this.b=b},
bD:function bD(){},
bC:function bC(a,b){this.a=a
this.$ti=b},
bO:function bO(a,b){this.a=a
this.$ti=b},
bG:function bG(a,b,c,d,e){var _=this
_.a=null
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
E:function E(a,b){var _=this
_.a=0
_.b=a
_.c=null
_.$ti=b},
eW:function eW(a,b){this.a=a
this.b=b},
f2:function f2(a,b){this.a=a
this.b=b},
eZ:function eZ(a){this.a=a},
f_:function f_(a){this.a=a},
f0:function f0(a,b,c){this.a=a
this.b=b
this.c=c},
eY:function eY(a,b){this.a=a
this.b=b},
f1:function f1(a,b){this.a=a
this.b=b},
eX:function eX(a,b,c){this.a=a
this.b=b
this.c=c},
f5:function f5(a,b,c){this.a=a
this.b=b
this.c=c},
f6:function f6(a){this.a=a},
f4:function f4(a,b){this.a=a
this.b=b},
f3:function f3(a,b){this.a=a
this.b=b},
cA:function cA(a){this.a=a
this.b=null},
bz:function bz(){},
eH:function eH(a,b){this.a=a
this.b=b},
eI:function eI(a,b){this.a=a
this.b=b},
cp:function cp(){},
cq:function cq(){},
bT:function bT(){},
fp:function fp(a,b){this.a=a
this.b=b},
cL:function cL(){},
f9:function f9(a,b){this.a=a
this.b=b},
fa:function fa(a,b,c){this.a=a
this.b=b
this.c=c},
he(a,b){return new A.bi(a.i("@<0>").aH(b).i("bi<1,2>"))},
ex(a){return new A.bH(a.i("bH<0>"))},
fL(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s},
iB(a,b,c){var s,r
if(A.fS(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}s=A.w([],t.s)
B.b.B($.T,a)
try{A.jD(a,s)}finally{if(0>=$.T.length)return A.f($.T,-1)
$.T.pop()}r=A.ho(b,t.bi.a(s),", ")+c
return r.charCodeAt(0)==0?r:r},
fG(a,b,c){var s,r
if(A.fS(a))return b+"..."+c
s=new A.cr(b)
B.b.B($.T,a)
try{r=s
r.a=A.ho(r.a,a,", ")}finally{if(0>=$.T.length)return A.f($.T,-1)
$.T.pop()}s.a+=c
r=s.a
return r.charCodeAt(0)==0?r:r},
fS(a){var s,r
for(s=$.T.length,r=0;r<s;++r)if(a===$.T[r])return!0
return!1},
jD(a,b){var s,r,q,p,o,n,m,l=a.gan(a),k=0,j=0
while(!0){if(!(k<80||j<3))break
if(!l.T())return
s=A.r(l.gU())
B.b.B(b,s)
k+=s.length+2;++j}if(!l.T()){if(j<=5)return
if(0>=b.length)return A.f(b,-1)
r=b.pop()
if(0>=b.length)return A.f(b,-1)
q=b.pop()}else{p=l.gU();++j
if(!l.T()){if(j<=4){B.b.B(b,A.r(p))
return}r=A.r(p)
if(0>=b.length)return A.f(b,-1)
q=b.pop()
k+=r.length+2}else{o=l.gU();++j
for(;l.T();p=o,o=n){n=l.gU();++j
if(j>100){while(!0){if(!(k>75&&j>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2;--j}B.b.B(b,"...")
return}}q=A.r(p)
r=A.r(o)
k+=r.length+q.length+4}}if(j>b.length+2){k+=5
m="..."}else m=null
while(!0){if(!(k>80&&b.length>3))break
if(0>=b.length)return A.f(b,-1)
k-=b.pop().length+2
if(m==null){k+=5
m="..."}}if(m!=null)B.b.B(b,m)
B.b.B(b,q)
B.b.B(b,r)},
hf(a,b){var s,r,q=A.ex(b)
for(s=a.length,r=0;r<a.length;a.length===s||(0,A.cY)(a),++r)q.B(0,b.a(a[r]))
return q},
hg(a){var s,r={}
if(A.fS(a))return"{...}"
s=new A.cr("")
try{B.b.B($.T,a)
s.a+="{"
r.a=!0
a.b_(0,new A.ez(r,s))
s.a+="}"}finally{if(0>=$.T.length)return A.f($.T,-1)
$.T.pop()}r=s.a
return r.charCodeAt(0)==0?r:r},
bH:function bH(a){var _=this
_.a=0
_.f=_.e=_.d=_.c=_.b=null
_.r=0
_.$ti=a},
cI:function cI(a){this.a=a
this.c=this.b=null},
bI:function bI(a,b,c){var _=this
_.a=a
_.b=b
_.d=_.c=null
_.$ti=c},
bm:function bm(){},
H:function H(){},
bp:function bp(){},
ez:function ez(a,b){this.a=a
this.b=b},
I:function I(){},
aw:function aw(){},
bL:function bL(){},
bJ:function bJ(){},
bU:function bU(){},
ev:function ev(){},
iz(a){if(a instanceof A.G)return a.l(0)
return"Instance of '"+A.eE(a)+"'"},
iA(a,b){a=A.e(a)
if(a==null)a=t.K.a(a)
a.stack=b.l(0)
throw a
throw A.e("unreachable")},
iJ(a,b,c,d){var s,r=J.iD(a,d)
if(a!==0&&!0)for(s=0;s<a;++s)r[s]=b
return r},
ey(a,b,c){var s=A.iI(a,c)
return s},
iI(a,b){var s,r
if(Array.isArray(a))return A.w(a.slice(0),b.i("C<0>"))
s=A.w([],b.i("C<0>"))
for(r=J.c0(a);r.T();)B.b.B(s,r.gU())
return s},
ho(a,b,c){var s=J.c0(b)
if(!s.T())return a
if(c.length===0){do a+=A.r(s.gU())
while(s.T())}else{a+=A.r(s.gU())
for(;s.T();)a=a+c+A.r(s.gU())}return a},
iv(){return new A.aM(Date.now(),!1)},
iw(a){var s=Math.abs(a),r=a<0?"-":""
if(s>=1000)return""+a
if(s>=100)return r+"0"+s
if(s>=10)return r+"00"+s
return r+"000"+s},
ix(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},
ca(a){if(a>=10)return""+a
return"0"+a},
cc(a){if(typeof a=="number"||A.fm(a)||a==null)return J.c2(a)
if(typeof a=="string")return JSON.stringify(a)
return A.iz(a)},
d3(a){return new A.b5(a)},
d2(a,b){return new A.a4(!1,null,b,a)},
h1(a,b,c){return new A.a4(!0,a,b,c)},
iU(a,b){return new A.bv(null,null,!0,a,b,"Value not in range")},
eF(a,b,c,d,e){return new A.bv(b,c,!0,a,d,"Invalid value")},
iV(a,b,c){if(0>a||a>c)throw A.e(A.eF(a,0,c,"start",null))
if(b!=null){if(a>b||b>c)throw A.e(A.eF(b,a,c,"end",null))
return b}return c},
fF(a,b,c,d,e){var s=A.S(e==null?J.c1(b):e)
return new A.ce(s,!0,a,c,"Index out of range")},
a2(a){return new A.cy(a)},
cw(a){return new A.cv(a)},
by(a){return new A.aT(a)},
aL(a){return new A.c7(a)},
iL(a,b){var s,r=a.gS(a)
b=A.bt(b)
s=$.id()
return A.iX(A.hp(A.hp(s,r),b))},
aM:function aM(a,b){this.a=a
this.b=b},
aO:function aO(a){this.a=a},
u:function u(){},
b5:function b5(a){this.a=a},
af:function af(){},
cj:function cj(){},
a4:function a4(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.d=d},
bv:function bv(a,b,c,d,e,f){var _=this
_.e=a
_.f=b
_.a=c
_.b=d
_.c=e
_.d=f},
ce:function ce(a,b,c,d,e){var _=this
_.f=a
_.a=b
_.b=c
_.c=d
_.d=e},
cy:function cy(a){this.a=a},
cv:function cv(a){this.a=a},
aT:function aT(a){this.a=a},
c7:function c7(a){this.a=a},
ck:function ck(){},
bx:function bx(){},
c9:function c9(a){this.a=a},
eV:function eV(a){this.a=a},
t:function t(){},
N:function N(){},
D:function D(){},
v:function v(){},
cN:function cN(){},
cr:function cr(a){this.a=a},
c8(a,b){var s,r,q,p=!0,o=!0
b=b
r=document.createEvent("CustomEvent")
r.toString
s=t.h.a(r)
s._dartDetail=b
if(t.j.b(b)||t.f.b(b)||typeof b=="string"||typeof b=="number")try{b=new A.fe([],[]).aG(b)
J.fA(s,a,p,o,b)}catch(q){J.fA(s,a,p,o,null)}else J.fA(s,a,p,o,null)
return s},
iy(a,b,c){var s,r=document.body
r.toString
s=t.ba
s=new A.aA(new A.J(B.p.ao(r,a,b,c)),s.i("M(H.E)").a(new A.ep()),s.i("aA<H.E>"))
return t.Q.a(s.gaJ(s))},
ba(a){var s,r,q="element tag unavailable"
try{s=J.b3(a)
s.gbR(a)
q=s.gbR(a)}catch(r){}return q},
c(a,b,c,d,e){var s=A.hO(new A.eU(c),t.B),r=s!=null
if(r&&!0){t.E.a(s)
if(r)J.ih(a,b,s,!1)}return new A.cF(a,b,s,!1,e.i("cF<0>"))},
hu(a){var s=document.createElement("a")
s.toString
s=new A.cM(s,t.at.a(window.location))
s=new A.aB(s)
s.c6(a)
return s},
j4(a,b,c,d){t.Q.a(a)
A.F(b)
A.F(c)
t.G.a(d)
return!0},
j5(a,b,c,d){var s,r,q,p,o
t.Q.a(a)
A.F(b)
A.F(c)
s=t.G.a(d).a
r=s.a
B.z.scM(r,c)
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
hy(){var s=t.N,r=A.hf(B.u,s),q=A.w(["TEMPLATE"],t.s),p=t.bm.a(new A.fh())
s=new A.cP(r,A.ex(s),A.ex(s),A.ex(s),null)
s.c7(null,new A.V(B.u,p,t.cw),q,null)
return s},
hO(a,b){var s=$.A
if(s===B.h)return a
return s.cv(a,b)},
z(a){return document.querySelector(a)},
h:function h(){},
aG:function aG(){},
c3:function c3(){},
aH:function aH(){},
am:function am(){},
aJ:function aJ(){},
an:function an(){},
b7:function b7(){},
a_:function a_(){},
b8:function b8(){},
em:function em(){},
ao:function ao(){},
aN:function aN(){},
ap:function ap(){},
en:function en(){},
cb:function cb(){},
eo:function eo(){},
q:function q(){},
ep:function ep(){},
b:function b(){},
o:function o(){},
cd:function cd(){},
bc:function bc(){},
as:function as(){},
bd:function bd(){},
au:function au(){},
bn:function bn(){},
Q:function Q(){},
J:function J(a){this.a=a},
i:function i(){},
bq:function bq(){},
cn:function cn(){},
ax:function ax(){},
bA:function bA(){},
cs:function cs(){},
ct:function ct(){},
aU:function aU(){},
ay:function ay(){},
a7:function a7(){},
a1:function a1(){},
aV:function aV(){},
eL:function eL(a){this.a=a},
aW:function aW(){},
bK:function bK(){},
cB:function cB(){},
cD:function cD(a){this.a=a},
fE:function fE(a,b){this.a=a
this.$ti=b},
bF:function bF(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
bE:function bE(a,b,c,d){var _=this
_.a=a
_.b=b
_.c=c
_.$ti=d},
cF:function cF(a,b,c,d,e){var _=this
_.b=a
_.c=b
_.d=c
_.e=d
_.$ti=e},
eU:function eU(a){this.a=a},
aB:function aB(a){this.a=a},
a0:function a0(){},
br:function br(a){this.a=a},
eB:function eB(a){this.a=a},
eA:function eA(a,b,c){this.a=a
this.b=b
this.c=c},
bM:function bM(){},
fb:function fb(){},
fc:function fc(){},
cP:function cP(a,b,c,d,e){var _=this
_.e=a
_.a=b
_.b=c
_.c=d
_.d=e},
fh:function fh(){},
cO:function cO(){},
aq:function aq(a,b,c){var _=this
_.a=a
_.b=b
_.c=-1
_.d=null
_.$ti=c},
cM:function cM(a,b){this.a=a
this.b=b},
bS:function bS(a){this.a=a
this.b=0},
fl:function fl(a){this.a=a},
cC:function cC(){},
cJ:function cJ(){},
cK:function cK(){},
cU:function cU(){},
cV:function cV(){},
fd:function fd(){},
ff:function ff(a,b){this.a=a
this.b=b},
fg:function fg(a,b){this.a=a
this.b=b},
eM:function eM(){},
eO:function eO(a,b){this.a=a
this.b=b},
fe:function fe(a,b){this.a=a
this.b=b},
eN:function eN(a,b){this.a=a
this.b=b
this.c=!1},
hY(a,b){var s=new A.E($.A,b.i("E<0>")),r=new A.bC(s,b.i("bC<0>"))
a.then(A.aC(new A.fy(r,b),1),A.aC(new A.fz(r),1))
return s},
eC:function eC(a){this.a=a},
fy:function fy(a,b){this.a=a
this.b=b},
fz:function fz(a){this.a=a},
hV(a,b,c){A.hR(c,t.H,"T","min")
return Math.min(c.a(a),c.a(b))},
hU(a,b,c){A.hR(c,t.H,"T","max")
return Math.max(c.a(a),c.a(b))},
f7:function f7(){},
aR:function aR(){},
d:function d(){},
l(a,b,c){var s=new A.d_(a,b,c)
s.c4(a,b,c)
return s},
d_:function d_(a,b,c){var _=this
_.a=a
_.c=_.b=0
_.d=b
_.e=c
_.f=1
_.r=""
_.w=$
_.x=0
_.y=1},
d0:function d0(a){this.a=a},
d1:function d1(a){this.a=a},
c4:function c4(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9){var _=this
_.a=$
_.b=a
_.k2=_.k1=_.db=$
_.ai=b
_.a3=c
_.a4=d
_.ac=e
_.a5=f
_.a_=g
_.O=h
_.P=i
_.a6=j
_.G=k
_.ad=l
_.am=m
_.a7=n
_.a8=o
_.V=p
_.Y=q
_.aj=r
_.a9=s
_.aD=a0
_.aE=a1
_.R=a2
_.Z=a3
_.p=a4
_.q=a5
_.D=a6
_.aT=a7
_.bL=a8
_.bM=a9
_.aw=!1},
d5:function d5(a){this.a=a},
d6:function d6(a){this.a=a},
d7:function d7(a){this.a=a},
d8:function d8(a){this.a=a},
d9:function d9(a){this.a=a},
da:function da(a){this.a=a},
db:function db(a){this.a=a},
dc:function dc(a){this.a=a},
dd:function dd(a){this.a=a},
de:function de(a){this.a=a},
df:function df(a){this.a=a},
dg:function dg(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6){var _=this
_.f=_.e=_.d=_.c=_.b=_.a=0
_.r=1
_.x=_.w=$
_.ag=a
_.ah=b
_.ak=c
_.H=d
_.I=e
_.J=f
_.M=g
_.L=h
_.N=i
_.a0=j
_.X=k
_.a1=l
_.al=m
_.a2=n
_.aZ=_.av="butt"
_.u=o
_.v=p
_.A=q
_.ai=r
_.a3=s
_.a4=a0
_.ac=a1
_.a5=a2
_.a_=a3
_.O=a4
_.P=a5
_.a6=a6
_.G=a7
_.ad=a8
_.am=a9
_.a7=b0
_.a8=b1
_.V=b2
_.Y=b3
_.aj=b4
_.a9=b5
_.aD=!1
_.aE=0
_.R="C1"
_.Z="L1"
_.p=b6
_.q=0
_.D=""},
dh:function dh(a){this.a=a},
di:function di(a){this.a=a},
dj:function dj(a){this.a=a},
dv:function dv(a){this.a=a},
dG:function dG(a){this.a=a},
dR:function dR(a){this.a=a},
e1:function e1(a){this.a=a},
eb:function eb(a){this.a=a},
ec:function ec(a){this.a=a},
ed:function ed(a){this.a=a},
ee:function ee(a){this.a=a},
dk:function dk(a){this.a=a},
dl:function dl(a){this.a=a},
dm:function dm(a){this.a=a},
dn:function dn(a){this.a=a},
dp:function dp(a){this.a=a},
dq:function dq(a){this.a=a},
dr:function dr(a){this.a=a},
ds:function ds(a){this.a=a},
dt:function dt(a){this.a=a},
du:function du(a){this.a=a},
dw:function dw(a){this.a=a},
dx:function dx(a){this.a=a},
dy:function dy(a){this.a=a},
dz:function dz(a){this.a=a},
dA:function dA(a){this.a=a},
dB:function dB(a){this.a=a},
dC:function dC(a){this.a=a},
dD:function dD(a){this.a=a},
dE:function dE(a){this.a=a},
dF:function dF(a){this.a=a},
dH:function dH(a){this.a=a},
dI:function dI(a){this.a=a},
dJ:function dJ(a){this.a=a},
dK:function dK(a){this.a=a},
dL:function dL(a){this.a=a},
dM:function dM(a){this.a=a},
dN:function dN(a){this.a=a},
dO:function dO(a){this.a=a},
dP:function dP(a){this.a=a},
dQ:function dQ(a){this.a=a},
dS:function dS(a){this.a=a},
dT:function dT(a){this.a=a},
dU:function dU(a){this.a=a},
dV:function dV(a){this.a=a},
dW:function dW(a){this.a=a},
dX:function dX(a){this.a=a},
dY:function dY(a){this.a=a},
dZ:function dZ(a){this.a=a},
e_:function e_(a){this.a=a},
e0:function e0(a){this.a=a},
e2:function e2(a){this.a=a},
e3:function e3(a){this.a=a},
e4:function e4(a){this.a=a},
e5:function e5(a){this.a=a},
e6:function e6(a){this.a=a},
e7:function e7(a){this.a=a},
e8:function e8(a){this.a=a},
e9:function e9(a){this.a=a},
ea:function ea(a){this.a=a},
m(a,b,c){var s=new A.ef()
s.c5(a,b,c)
return s},
ef:function ef(){this.a=$},
eg:function eg(a){this.a=a},
eh:function eh(a){this.a=a},
ei:function ei(a){this.a=a},
ej:function ej(a){this.a=a},
ek:function ek(a){this.a=a},
fC(a,b,c){var s=new A.el(a,b,c)
s.aL()
s.at=""
return s},
el:function el(a,b,c){var _=this
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
aK:function aK(){},
bb:function bb(a,b,c){this.a=a
this.b=b
this.c=c},
eq:function eq(a){this.a=a},
er:function er(a){this.a=a},
es:function es(a){this.a=a},
et:function et(){},
bw:function bw(a,b,c){this.a=a
this.b=b
this.c=c},
k5(){var s=document.querySelector("#title")
if(s!=null)J.il(s,"Bezier Curves Big Circus")
s=$.i0()
$.hE.b=s
$.hE.toString
s.cP()}},J={
fZ(a,b,c,d){return{i:a,p:b,e:c,x:d}},
fs(a){var s,r,q,p,o,n=a[v.dispatchPropertyName]
if(n==null)if($.fY==null){A.jZ()
n=a[v.dispatchPropertyName]}if(n!=null){s=n.p
if(!1===s)return n.i
if(!0===s)return a
r=Object.getPrototypeOf(a)
if(s===r)return n.i
if(n.e===r)throw A.e(A.cw("Return interceptor for "+A.r(s(a,n))))}q=a.constructor
if(q==null)p=null
else{o=$.f8
if(o==null)o=$.f8=v.getIsolateTag("_$dart_js")
p=q[o]}if(p!=null)return p
p=A.k4(a)
if(p!=null)return p
if(typeof a=="function")return B.R
s=Object.getPrototypeOf(a)
if(s==null)return B.v
if(s===Object.prototype)return B.v
if(typeof q=="function"){o=$.f8
if(o==null)o=$.f8=v.getIsolateTag("_$dart_js")
Object.defineProperty(q,o,{value:B.o,enumerable:false,writable:true,configurable:true})
return B.o}return B.o},
iD(a,b){if(a<0||a>4294967295)throw A.e(A.eF(a,0,4294967295,"length",null))
return J.iE(new Array(a),b)},
iE(a,b){return J.hb(A.w(a,b.i("C<0>")),b)},
hb(a,b){a.fixed$length=Array
return a},
hd(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},
iF(a,b){var s,r
for(s=a.length;b<s;){r=B.i.b8(a,b)
if(r!==32&&r!==13&&!J.hd(r))break;++b}return b},
iG(a,b){var s,r
for(;b>0;b=s){s=b-1
r=B.i.bH(a,s)
if(r!==32&&r!==13&&!J.hd(r))break}return b},
b2(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.bg.prototype
return J.cg.prototype}if(typeof a=="string")return J.at.prototype
if(a==null)return J.bh.prototype
if(typeof a=="boolean")return J.cf.prototype
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a6.prototype
return a}if(a instanceof A.v)return a
return J.fs(a)},
cX(a){if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a6.prototype
return a}if(a instanceof A.v)return a
return J.fs(a)},
fr(a){if(a==null)return a
if(a.constructor==Array)return J.C.prototype
if(typeof a!="object"){if(typeof a=="function")return J.a6.prototype
return a}if(a instanceof A.v)return a
return J.fs(a)},
jS(a){if(typeof a=="number")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.az.prototype
return a},
jT(a){if(typeof a=="string")return J.at.prototype
if(a==null)return a
if(!(a instanceof A.v))return J.az.prototype
return a},
b3(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.a6.prototype
return a}if(a instanceof A.v)return a
return J.fs(a)},
Z(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.b2(a).ar(a,b)},
ie(a,b){if(typeof b==="number")if(a.constructor==Array||typeof a=="string"||A.k2(a,a[v.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.cX(a).ae(a,b)},
ig(a,b,c){return J.fr(a).E(a,b,c)},
ih(a,b,c,d){return J.b3(a).cb(a,b,c,d)},
fA(a,b,c,d,e){return J.b3(a).cj(a,b,c,d,e)},
ii(a,b){return J.fr(a).aN(a,b)},
ij(a){return J.b3(a).gcu(a)},
cZ(a){return J.b2(a).gS(a)},
c0(a){return J.fr(a).gan(a)},
c1(a){return J.cX(a).gF(a)},
h0(a){return J.b3(a).cX(a)},
ik(a,b){return J.b3(a).sck(a,b)},
il(a,b){return J.b3(a).sbS(a,b)},
fB(a){return J.jS(a).W(a)},
im(a){return J.jT(a).d2(a)},
c2(a){return J.b2(a).l(a)},
bf:function bf(){},
cf:function cf(){},
bh:function bh(){},
P:function P(){},
ae:function ae(){},
cl:function cl(){},
az:function az(){},
a6:function a6(){},
C:function C(a){this.$ti=a},
eu:function eu(a){this.$ti=a},
b4:function b4(a,b,c){var _=this
_.a=a
_.b=b
_.c=0
_.d=null
_.$ti=c},
aQ:function aQ(){},
bg:function bg(){},
cg:function cg(){},
at:function at(){}},B={}
var w=[A,J,B]
var $={}
A.fH.prototype={}
J.bf.prototype={
ar(a,b){return a===b},
gS(a){return A.bt(a)},
l(a){return"Instance of '"+A.eE(a)+"'"}}
J.cf.prototype={
l(a){return String(a)},
gS(a){return a?519018:218159},
$iM:1}
J.bh.prototype={
ar(a,b){return null==b},
l(a){return"null"},
gS(a){return 0},
$iD:1}
J.P.prototype={}
J.ae.prototype={
gS(a){return 0},
l(a){return String(a)},
$ihc:1}
J.cl.prototype={}
J.az.prototype={}
J.a6.prototype={
l(a){var s=a[$.i1()]
if(s==null)return this.c2(a)
return"JavaScript function for "+J.c2(s)},
$ia5:1}
J.C.prototype={
B(a,b){A.ai(a).c.a(b)
if(!!a.fixed$length)A.aF(A.a2("add"))
a.push(b)},
cR(a,b){var s,r=A.iJ(a.length,"",!1,t.N)
for(s=0;s<a.length;++s)this.E(r,s,A.r(a[s]))
return r.join(b)},
bP(a,b){var s,r,q
A.ai(a).i("1(1,1)").a(b)
s=a.length
if(s===0)throw A.e(A.ha())
if(0>=s)return A.f(a,0)
r=a[0]
for(q=1;q<s;++q){r=b.$2(r,a[q])
if(s!==a.length)throw A.e(A.aL(a))}return r},
aN(a,b){if(!(b>=0&&b<a.length))return A.f(a,b)
return a[b]},
bF(a,b){var s,r
A.ai(a).i("M(1)").a(b)
s=a.length
for(r=0;r<s;++r){if(A.fT(b.$1(a[r])))return!0
if(a.length!==s)throw A.e(A.aL(a))}return!1},
ab(a,b){var s
for(s=0;s<a.length;++s)if(J.Z(a[s],b))return!0
return!1},
l(a){return A.fG(a,"[","]")},
gan(a){return new J.b4(a,a.length,A.ai(a).i("b4<1>"))},
gS(a){return A.bt(a)},
gF(a){return a.length},
ae(a,b){if(!(b>=0&&b<a.length))throw A.e(A.bZ(a,b))
return a[b]},
E(a,b,c){A.S(b)
A.ai(a).c.a(c)
if(!!a.immutable$list)A.aF(A.a2("indexed set"))
if(!(b>=0&&b<a.length))throw A.e(A.bZ(a,b))
a[b]=c},
$it:1,
$iO:1}
J.eu.prototype={}
J.b4.prototype={
gU(){var s=this.d
return s==null?this.$ti.c.a(s):s},
T(){var s,r=this,q=r.a,p=q.length
if(r.b!==p)throw A.e(A.cY(q))
s=r.c
if(s>=p){r.sbz(null)
return!1}r.sbz(q[s]);++r.c
return!0},
sbz(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
J.aQ.prototype={
W(a){var s
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){s=a<0?Math.ceil(a):Math.floor(a)
return s+0}throw A.e(A.a2(""+a+".toInt()"))},
be(a){var s,r
if(a>=0){if(a<=2147483647){s=a|0
return a===s?s:s+1}}else if(a>=-2147483648)return a|0
r=Math.ceil(a)
if(isFinite(r))return r
throw A.e(A.a2(""+a+".ceil()"))},
bN(a){var s,r
if(a>=0){if(a<=2147483647)return a|0}else if(a>=-2147483648){s=a|0
return a===s?s:s-1}r=Math.floor(a)
if(isFinite(r))return r
throw A.e(A.a2(""+a+".floor()"))},
aa(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw A.e(A.a2(""+a+".round()"))},
l(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gS(a){var s,r,q,p,o=a|0
if(a===o)return o&536870911
s=Math.abs(a)
r=Math.log(s)/0.6931471805599453|0
q=Math.pow(2,r)
p=s<1?s/q:q/s
return((p*9007199254740992|0)+(p*3542243181176521|0))*599197+r*1259&536870911},
aR(a,b){var s=a%b
if(s===0)return 0
if(s>0)return s
return s+b},
bD(a,b){return(a|0)===a?a/b|0:this.cr(a,b)},
cr(a,b){var s=a/b
if(s>=-2147483648&&s<=2147483647)return s|0
if(s>0){if(s!==1/0)return Math.floor(s)}else if(s>-1/0)return Math.ceil(s)
throw A.e(A.a2("Result of truncating division is "+A.r(s)+": "+A.r(a)+" ~/ "+b))},
af(a,b){var s
if(a>0)s=this.cq(a,b)
else{s=b>31?31:b
s=a>>s>>>0}return s},
cq(a,b){return b>31?0:a>>>b},
$iW:1,
$iy:1}
J.bg.prototype={$iaa:1}
J.cg.prototype={}
J.at.prototype={
bH(a,b){if(b<0)throw A.e(A.bZ(a,b))
if(b>=a.length)A.aF(A.bZ(a,b))
return a.charCodeAt(b)},
b8(a,b){if(b>=a.length)throw A.e(A.bZ(a,b))
return a.charCodeAt(b)},
bU(a,b){return a+b},
bZ(a,b){var s=b.length
if(s>a.length)return!1
return b===a.substring(0,s)},
bo(a,b,c){return a.substring(b,A.iV(b,c,a.length))},
d2(a){return a.toLowerCase()},
d3(a){var s,r,q,p=a.trim(),o=p.length
if(o===0)return p
if(this.b8(p,0)===133){s=J.iF(p,1)
if(s===o)return""}else s=0
r=o-1
q=this.bH(p,r)===133?J.iG(p,r):o
if(s===0&&q===o)return p
return p.substring(s,q)},
bV(a,b){var s,r
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw A.e(B.J)
for(s=a,r="";!0;){if((b&1)===1)r=s+r
b=b>>>1
if(b===0)break
s+=s}return r},
cT(a,b,c){var s=b-a.length
if(s<=0)return a
return this.bV(c,s)+a},
l(a){return a},
gS(a){var s,r,q
for(s=a.length,r=0,q=0;q<s;++q){r=r+a.charCodeAt(q)&536870911
r=r+((r&524287)<<10)&536870911
r^=r>>6}r=r+((r&67108863)<<3)&536870911
r^=r>>11
return r+((r&16383)<<15)&536870911},
gF(a){return a.length},
$ihh:1,
$in:1}
A.bj.prototype={
l(a){return"LateInitializationError: "+this.a}}
A.eG.prototype={}
A.b9.prototype={}
A.U.prototype={
gan(a){var s=this
return new A.av(s,s.gF(s),s.$ti.i("av<U.E>"))},
b4(a,b){return this.c1(0,this.$ti.i("M(U.E)").a(b))}}
A.av.prototype={
gU(){var s=this.d
return s==null?this.$ti.c.a(s):s},
T(){var s,r=this,q=r.a,p=J.cX(q),o=p.gF(q)
if(r.b!==o)throw A.e(A.aL(q))
s=r.c
if(s>=o){r.sbp(null)
return!1}r.sbp(p.aN(q,s));++r.c
return!0},
sbp(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
A.V.prototype={
gF(a){return J.c1(this.a)},
aN(a,b){return this.b.$1(J.ii(this.a,b))}}
A.aA.prototype={
gan(a){return new A.bB(J.c0(this.a),this.b,this.$ti.i("bB<1>"))}}
A.bB.prototype={
T(){var s,r
for(s=this.a,r=this.b;s.T();)if(A.fT(r.$1(s.gU())))return!0
return!1},
gU(){return this.a.gU()}}
A.be.prototype={
ar(a,b){if(b==null)return!1
return b instanceof A.be&&this.a.ar(0,b.a)&&A.fX(this)===A.fX(b)},
gS(a){return A.iL(this.a,A.fX(this))},
l(a){var s=B.b.cR([A.fW(this.$ti.c)],", ")
return this.a.l(0)+" with "+("<"+s+">")}}
A.aP.prototype={
$2(a,b){return this.a.$1$2(a,b,this.$ti.z[0])},
$S(){return A.k0(A.fV(this.a),this.$ti)}}
A.eJ.prototype={
aq(a){var s,r,q=this,p=new RegExp(q.a).exec(a)
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
A.bs.prototype={
l(a){var s=this.b
if(s==null)return"NoSuchMethodError: "+this.a
return"NoSuchMethodError: method not found: '"+s+"' on null"}}
A.ci.prototype={
l(a){var s,r=this,q="NoSuchMethodError: method not found: '",p=r.b
if(p==null)return"NoSuchMethodError: "+r.a
s=r.c
if(s==null)return q+p+"' ("+r.a+")"
return q+p+"' on '"+s+"' ("+r.a+")"}}
A.cx.prototype={
l(a){var s=this.a
return s.length===0?"Error":"Error: "+s}}
A.eD.prototype={
l(a){return"Throw of null ('"+(this.a===null?"null":"undefined")+"' from JavaScript)"}}
A.bN.prototype={
l(a){var s,r=this.b
if(r!=null)return r
r=this.a
s=r!==null&&typeof r==="object"?r.stack:null
return this.b=s==null?"":s},
$iaS:1}
A.G.prototype={
l(a){var s=this.constructor,r=s==null?null:s.name
return"Closure '"+A.i_(r==null?"unknown":r)+"'"},
$ia5:1,
gd5(){return this},
$C:"$1",
$R:1,
$D:null}
A.c5.prototype={$C:"$0",$R:0}
A.c6.prototype={$C:"$2",$R:2}
A.cu.prototype={}
A.co.prototype={
l(a){var s=this.$static_name
if(s==null)return"Closure of unknown static method"
return"Closure '"+A.i_(s)+"'"}}
A.aI.prototype={
ar(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof A.aI))return!1
return this.$_target===b.$_target&&this.a===b.a},
gS(a){return(A.hW(this.a)^A.bt(this.$_target))>>>0},
l(a){return"Closure '"+this.$_name+"' of "+("Instance of '"+A.eE(this.a)+"'")}}
A.cm.prototype={
l(a){return"RuntimeError: "+this.a}}
A.cz.prototype={
l(a){return"Assertion failed: "+A.cc(this.a)}}
A.bi.prototype={
gF(a){return this.a},
gaI(){return new A.bk(this,this.$ti.i("bk<1>"))},
ae(a,b){var s,r,q,p,o=null
if(typeof b=="string"){s=this.b
if(s==null)return o
r=s[b]
q=r==null?o:r.b
return q}else if(typeof b=="number"&&(b&0x3fffffff)===b){p=this.c
if(p==null)return o
r=p[b]
q=r==null?o:r.b
return q}else return this.cQ(b)},
cQ(a){var s,r,q=this.d
if(q==null)return null
s=q[J.cZ(a)&0x3fffffff]
r=this.bO(s,a)
if(r<0)return null
return s[r].b},
E(a,b,c){var s,r,q,p,o,n,m=this,l=m.$ti
l.c.a(b)
l.z[1].a(c)
if(typeof b=="string"){s=m.b
m.bq(s==null?m.b=m.bb():s,b,c)}else if(typeof b=="number"&&(b&0x3fffffff)===b){r=m.c
m.bq(r==null?m.c=m.bb():r,b,c)}else{q=m.d
if(q==null)q=m.d=m.bb()
p=J.cZ(b)&0x3fffffff
o=q[p]
if(o==null)q[p]=[m.b6(b,c)]
else{n=m.bO(o,b)
if(n>=0)o[n].b=c
else o.push(m.b6(b,c))}}},
b_(a,b){var s,r,q=this
q.$ti.i("~(1,2)").a(b)
s=q.e
r=q.r
for(;s!=null;){b.$2(s.a,s.b)
if(r!==q.r)throw A.e(A.aL(q))
s=s.c}},
bq(a,b,c){var s,r=this.$ti
r.c.a(b)
r.z[1].a(c)
s=a[b]
if(s==null)a[b]=this.b6(b,c)
else s.b=c},
c9(){this.r=this.r+1&1073741823},
b6(a,b){var s=this,r=s.$ti,q=new A.ew(r.c.a(a),r.z[1].a(b))
if(s.e==null)s.e=s.f=q
else{r=s.f
r.toString
q.d=r
s.f=r.c=q}++s.a
s.c9()
return q},
bO(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1},
l(a){return A.hg(this)},
bb(){var s=Object.create(null)
s["<non-identifier-key>"]=s
delete s["<non-identifier-key>"]
return s}}
A.ew.prototype={}
A.bk.prototype={
gF(a){return this.a.a},
gan(a){var s=this.a,r=new A.bl(s,s.r,this.$ti.i("bl<1>"))
r.c=s.e
return r}}
A.bl.prototype={
gU(){return this.d},
T(){var s,r=this,q=r.a
if(r.b!==q.r)throw A.e(A.aL(q))
s=r.c
if(s==null){r.sbr(null)
return!1}else{r.sbr(s.a)
r.c=s.c
return!0}},
sbr(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
A.ft.prototype={
$1(a){return this.a(a)},
$S:14}
A.fu.prototype={
$2(a,b){return this.a(a,b)},
$S:15}
A.fv.prototype={
$1(a){return this.a(A.F(a))},
$S:16}
A.eT.prototype={}
A.Y.prototype={
i(a){return A.fj(v.typeUniverse,this,a)},
aH(a){return A.jj(v.typeUniverse,this,a)}}
A.cG.prototype={}
A.cR.prototype={
l(a){return A.L(this.a,null)}}
A.cE.prototype={
l(a){return this.a}}
A.bP.prototype={$iaf:1}
A.eQ.prototype={
$1(a){var s=this.a,r=s.a
s.a=null
r.$0()},
$S:4}
A.eP.prototype={
$1(a){var s,r
this.a.a=t.M.a(a)
s=this.b
r=this.c
s.firstChild?s.removeChild(r):s.appendChild(r)},
$S:17}
A.eR.prototype={
$0(){this.a.$0()},
$S:5}
A.eS.prototype={
$0(){this.a.$0()},
$S:5}
A.cQ.prototype={
c8(a,b){if(self.setTimeout!=null)this.b=self.setTimeout(A.aC(new A.fi(this,b),0),a)
else throw A.e(A.a2("`setTimeout()` not found."))},
bG(){if(self.setTimeout!=null){var s=this.b
if(s==null)return
self.clearTimeout(s)
this.b=null}else throw A.e(A.a2("Canceling a timer."))},
$iiY:1}
A.fi.prototype={
$0(){this.a.b=null
this.b.$0()},
$S:2}
A.b6.prototype={
l(a){return A.r(this.a)},
$iu:1,
gaW(){return this.b}}
A.bD.prototype={
bI(a){var s
A.cW(a,"error",t.K)
if((this.a.a&30)!==0)throw A.e(A.by("Future already completed"))
s=A.h2(a)
this.aA(a,s)}}
A.bC.prototype={
aA(a,b){this.a.cc(a,b)}}
A.bO.prototype={
aA(a,b){this.a.aA(a,b)}}
A.bG.prototype={
cS(a){if((this.c&15)!==6)return!0
return this.b.b.bg(t.bG.a(this.d),a.a,t.y,t.K)},
cL(a){var s,r=this,q=r.e,p=null,o=t.z,n=t.K,m=a.a,l=r.b.b
if(t.C.b(q))p=l.d_(q,m,a.b,o,n,t.l)
else p=l.bg(t.v.a(q),m,o,n)
try{o=r.$ti.i("2/").a(p)
return o}catch(s){if(t.b7.b(A.ak(s))){if((r.c&1)!==0)throw A.e(A.d2("The error handler of Future.then must return a value of the returned future's type","onError"))
throw A.e(A.d2("The error handler of Future.catchError must return a value of the future's type","onError"))}else throw s}}}
A.E.prototype={
bT(a,b,c){var s,r,q,p=this.$ti
p.aH(c).i("1/(2)").a(a)
s=$.A
if(s===B.h){if(b!=null&&!t.C.b(b)&&!t.v.b(b))throw A.e(A.h1(b,"onError",u.c))}else{c.i("@<0/>").aH(p.c).i("1(2)").a(a)
if(b!=null)b=A.jF(b,s)}r=new A.E(s,c.i("E<0>"))
q=b==null?1:3
this.bt(new A.bG(r,q,a,b,p.i("@<1>").aH(c).i("bG<1,2>")))
return r},
bh(a,b){return this.bT(a,null,b)},
cp(a){this.a=this.a&1|16
this.c=a},
b7(a){this.a=a.a&30|this.a&1
this.c=a.c},
bt(a){var s,r=this,q=r.a
if(q<=3){a.a=t.F.a(r.c)
r.c=a}else{if((q&4)!==0){s=t.c.a(r.c)
if((s.a&24)===0){s.bt(a)
return}r.b7(s)}A.b_(null,null,r.b,t.M.a(new A.eW(r,a)))}},
bC(a){var s,r,q,p,o,n,m=this,l={}
l.a=a
if(a==null)return
s=m.a
if(s<=3){r=t.F.a(m.c)
m.c=a
if(r!=null){q=a.a
for(p=a;q!=null;p=q,q=o)o=q.a
p.a=r}}else{if((s&4)!==0){n=t.c.a(m.c)
if((n.a&24)===0){n.bC(a)
return}m.b7(n)}l.a=m.aY(a)
A.b_(null,null,m.b,t.M.a(new A.f2(l,m)))}},
aX(){var s=t.F.a(this.c)
this.c=null
return this.aY(s)},
aY(a){var s,r,q
for(s=a,r=null;s!=null;r=s,s=q){q=s.a
s.a=r}return r},
ce(a){var s,r,q,p=this
p.a^=2
try{a.bT(new A.eZ(p),new A.f_(p),t.P)}catch(q){s=A.ak(q)
r=A.aD(q)
A.ka(new A.f0(p,s,r))}},
bw(a){var s,r=this,q=r.$ti
q.i("1/").a(a)
s=r.aX()
q.c.a(a)
r.a=8
r.c=a
A.aX(r,s)},
bx(a){var s,r=this
r.$ti.c.a(a)
s=r.aX()
r.a=8
r.c=a
A.aX(r,s)},
aA(a,b){var s
t.l.a(b)
s=this.aX()
this.cp(A.d4(a,b))
A.aX(this,s)},
bu(a){var s=this.$ti
s.i("1/").a(a)
if(s.i("ar<1>").b(a)){this.cf(a)
return}this.cd(s.c.a(a))},
cd(a){var s=this
s.$ti.c.a(a)
s.a^=2
A.b_(null,null,s.b,t.M.a(new A.eY(s,a)))},
cf(a){var s=this,r=s.$ti
r.i("ar<1>").a(a)
if(r.b(a)){if((a.a&16)!==0){s.a^=2
A.b_(null,null,s.b,t.M.a(new A.f1(s,a)))}else A.fK(a,s)
return}s.ce(a)},
cc(a,b){this.a^=2
A.b_(null,null,this.b,t.M.a(new A.eX(this,a,b)))},
$iar:1}
A.eW.prototype={
$0(){A.aX(this.a,this.b)},
$S:2}
A.f2.prototype={
$0(){A.aX(this.b,this.a.a)},
$S:2}
A.eZ.prototype={
$1(a){var s,r,q,p=this.a
p.a^=2
try{p.bx(p.$ti.c.a(a))}catch(q){s=A.ak(q)
r=A.aD(q)
p.aA(s,r)}},
$S:4}
A.f_.prototype={
$2(a,b){this.a.aA(t.K.a(a),t.l.a(b))},
$S:18}
A.f0.prototype={
$0(){this.a.aA(this.b,this.c)},
$S:2}
A.eY.prototype={
$0(){this.a.bx(this.b)},
$S:2}
A.f1.prototype={
$0(){A.fK(this.b,this.a)},
$S:2}
A.eX.prototype={
$0(){this.a.aA(this.b,this.c)},
$S:2}
A.f5.prototype={
$0(){var s,r,q,p,o,n,m=this,l=null
try{q=m.a.a
l=q.b.b.cZ(t.O.a(q.d),t.z)}catch(p){s=A.ak(p)
r=A.aD(p)
q=m.c&&t.n.a(m.b.a.c).a===s
o=m.a
if(q)o.c=t.n.a(m.b.a.c)
else o.c=A.d4(s,r)
o.b=!0
return}if(l instanceof A.E&&(l.a&24)!==0){if((l.a&16)!==0){q=m.a
q.c=t.n.a(l.c)
q.b=!0}return}if(t.d.b(l)){n=m.b.a
q=m.a
q.c=l.bh(new A.f6(n),t.z)
q.b=!1}},
$S:2}
A.f6.prototype={
$1(a){return this.a},
$S:19}
A.f4.prototype={
$0(){var s,r,q,p,o,n,m,l
try{q=this.a
p=q.a
o=p.$ti
n=o.c
m=n.a(this.b)
q.c=p.b.b.bg(o.i("2/(1)").a(p.d),m,o.i("2/"),n)}catch(l){s=A.ak(l)
r=A.aD(l)
q=this.a
q.c=A.d4(s,r)
q.b=!0}},
$S:2}
A.f3.prototype={
$0(){var s,r,q,p,o,n,m=this
try{s=t.n.a(m.a.a.c)
p=m.b
if(p.a.cS(s)&&p.a.e!=null){p.c=p.a.cL(s)
p.b=!1}}catch(o){r=A.ak(o)
q=A.aD(o)
p=t.n.a(m.a.a.c)
n=m.b
if(p.a===r)n.c=p
else n.c=A.d4(r,q)
n.b=!0}},
$S:2}
A.cA.prototype={}
A.bz.prototype={
gF(a){var s,r,q=this,p={},o=new A.E($.A,t.aQ)
p.a=0
s=A.a3(q)
r=s.i("~(1)?").a(new A.eH(p,q))
t.Z.a(new A.eI(p,o))
A.c(q.a,q.b,r,!1,s.c)
return o}}
A.eH.prototype={
$1(a){A.a3(this.b).c.a(a);++this.a.a},
$S(){return A.a3(this.b).i("~(1)")}}
A.eI.prototype={
$0(){this.b.bw(this.a.a)},
$S:2}
A.cp.prototype={}
A.cq.prototype={}
A.bT.prototype={$ihs:1}
A.fp.prototype={
$0(){var s=this.a,r=this.b
A.cW(s,"error",t.K)
A.cW(r,"stackTrace",t.l)
A.iA(s,r)},
$S:2}
A.cL.prototype={
d0(a){var s,r,q
t.M.a(a)
try{if(B.h===$.A){a.$0()
return}A.hL(null,null,this,a,t.o)}catch(q){s=A.ak(q)
r=A.aD(q)
A.fo(t.K.a(s),t.l.a(r))}},
d1(a,b,c){var s,r,q
c.i("~(0)").a(a)
c.a(b)
try{if(B.h===$.A){a.$1(b)
return}A.hM(null,null,this,a,b,t.o,c)}catch(q){s=A.ak(q)
r=A.aD(q)
A.fo(t.K.a(s),t.l.a(r))}},
bd(a){return new A.f9(this,t.M.a(a))},
cv(a,b){return new A.fa(this,b.i("~(0)").a(a),b)},
cZ(a,b){b.i("0()").a(a)
if($.A===B.h)return a.$0()
return A.hL(null,null,this,a,b)},
bg(a,b,c,d){c.i("@<0>").aH(d).i("1(2)").a(a)
d.a(b)
if($.A===B.h)return a.$1(b)
return A.hM(null,null,this,a,b,c,d)},
d_(a,b,c,d,e,f){d.i("@<0>").aH(e).aH(f).i("1(2,3)").a(a)
e.a(b)
f.a(c)
if($.A===B.h)return a.$2(b,c)
return A.jG(null,null,this,a,b,c,d,e,f)}}
A.f9.prototype={
$0(){return this.a.d0(this.b)},
$S:2}
A.fa.prototype={
$1(a){var s=this.c
return this.a.d1(this.b,s.a(a),s)},
$S(){return this.c.i("~(0)")}}
A.bH.prototype={
gan(a){var s=this,r=new A.bI(s,s.r,A.a3(s).i("bI<1>"))
r.c=s.e
return r},
gF(a){return this.a},
ab(a,b){var s,r
if(b!=="__proto__"){s=this.b
if(s==null)return!1
return t.L.a(s[b])!=null}else{r=this.cg(b)
return r}},
cg(a){var s=this.d
if(s==null)return!1
return this.bA(s[this.by(a)],a)>=0},
B(a,b){var s,r,q=this
A.a3(q).c.a(b)
if(typeof b=="string"&&b!=="__proto__"){s=q.b
return q.bs(s==null?q.b=A.fL():s,b)}else if(typeof b=="number"&&(b&1073741823)===b){r=q.c
return q.bs(r==null?q.c=A.fL():r,b)}else return q.ca(b)},
ca(a){var s,r,q,p=this
A.a3(p).c.a(a)
s=p.d
if(s==null)s=p.d=A.fL()
r=p.by(a)
q=s[r]
if(q==null)s[r]=[p.bc(a)]
else{if(p.bA(q,a)>=0)return!1
q.push(p.bc(a))}return!0},
bs(a,b){A.a3(this).c.a(b)
if(t.L.a(a[b])!=null)return!1
a[b]=this.bc(b)
return!0},
cl(){this.r=this.r+1&1073741823},
bc(a){var s,r=this,q=new A.cI(A.a3(r).c.a(a))
if(r.e==null)r.e=r.f=q
else{s=r.f
s.toString
q.c=s
r.f=s.b=q}++r.a
r.cl()
return q},
by(a){return J.cZ(a)&1073741823},
bA(a,b){var s,r
if(a==null)return-1
s=a.length
for(r=0;r<s;++r)if(J.Z(a[r].a,b))return r
return-1}}
A.cI.prototype={}
A.bI.prototype={
gU(){var s=this.d
return s==null?this.$ti.c.a(s):s},
T(){var s=this,r=s.c,q=s.a
if(s.b!==q.r)throw A.e(A.aL(q))
else if(r==null){s.sbv(null)
return!1}else{s.sbv(s.$ti.i("1?").a(r.a))
s.c=r.b
return!0}},
sbv(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
A.bm.prototype={$it:1,$iO:1}
A.H.prototype={
gan(a){return new A.av(a,this.gF(a),A.aj(a).i("av<H.E>"))},
aN(a,b){return this.ae(a,b)},
l(a){return A.fG(a,"[","]")}}
A.bp.prototype={}
A.ez.prototype={
$2(a,b){var s,r=this.a
if(!r.a)this.b.a+=", "
r.a=!1
r=this.b
s=r.a+=A.r(a)
r.a=s+": "
r.a+=A.r(b)},
$S:20}
A.I.prototype={
b_(a,b){var s,r,q,p=A.a3(this)
p.i("~(I.K,I.V)").a(b)
for(s=J.c0(this.gaI()),p=p.i("I.V");s.T();){r=s.gU()
q=this.ae(0,r)
b.$2(r,q==null?p.a(q):q)}},
gF(a){return J.c1(this.gaI())},
l(a){return A.hg(this)},
$ibo:1}
A.aw.prototype={
aB(a,b){var s
for(s=J.c0(A.a3(this).i("t<aw.E>").a(b));s.T();)this.B(0,s.gU())},
l(a){return A.fG(this,"{","}")}}
A.bL.prototype={$it:1,$ihn:1}
A.bJ.prototype={}
A.bU.prototype={}
A.ev.prototype={
cC(a){var s,r,q,p,o=A.w([],t.s),n=a.length
for(s=0,r=0,q=0;q<n;++q,r=p){p=B.i.b8(a,q)
if(p!==13){if(p!==10)continue
if(r===13){s=q+1
continue}}B.b.B(o,B.i.bo(a,s,q))
s=q+1}if(s<n)B.b.B(o,B.i.bo(a,s,n))
return o}}
A.aM.prototype={
ar(a,b){if(b==null)return!1
return b instanceof A.aM&&this.a===b.a&&this.b===b.b},
gS(a){var s=this.a
return(s^B.f.af(s,30))&1073741823},
l(a){var s=this,r=A.iw(A.iT(s)),q=A.ca(A.iR(s)),p=A.ca(A.iN(s)),o=A.ca(A.iO(s)),n=A.ca(A.iQ(s)),m=A.ca(A.iS(s)),l=A.ix(A.iP(s)),k=r+"-"+q
if(s.b)return k+"-"+p+" "+o+":"+n+":"+m+"."+l+"Z"
else return k+"-"+p+" "+o+":"+n+":"+m+"."+l}}
A.aO.prototype={
ar(a,b){if(b==null)return!1
return b instanceof A.aO&&this.a===b.a},
gS(a){return B.f.gS(this.a)},
l(a){var s,r,q,p=this.a,o=p%36e8,n=B.f.bD(o,6e7)
o%=6e7
s=n<10?"0":""
r=B.f.bD(o,1e6)
q=r<10?"0":""
return""+(p/36e8|0)+":"+s+n+":"+q+r+"."+B.i.cT(B.f.l(o%1e6),6,"0")}}
A.u.prototype={
gaW(){return A.aD(this.$thrownJsError)}}
A.b5.prototype={
l(a){var s=this.a
if(s!=null)return"Assertion failed: "+A.cc(s)
return"Assertion failed"}}
A.af.prototype={}
A.cj.prototype={
l(a){return"Throw of null."}}
A.a4.prototype={
gba(){return"Invalid argument"+(!this.a?"(s)":"")},
gb9(){return""},
l(a){var s=this,r=s.c,q=r==null?"":" ("+r+")",p=s.d,o=p==null?"":": "+p,n=s.gba()+q+o
if(!s.a)return n
return n+s.gb9()+": "+A.cc(s.b)}}
A.bv.prototype={
gba(){return"RangeError"},
gb9(){var s,r=this.e,q=this.f
if(r==null)s=q!=null?": Not less than or equal to "+A.r(q):""
else if(q==null)s=": Not greater than or equal to "+A.r(r)
else if(q>r)s=": Not in inclusive range "+A.r(r)+".."+A.r(q)
else s=q<r?": Valid value range is empty":": Only valid value is "+A.r(r)
return s}}
A.ce.prototype={
gba(){return"RangeError"},
gb9(){if(A.S(this.b)<0)return": index must not be negative"
var s=this.f
if(s===0)return": no indices are valid"
return": index should be less than "+s},
gF(a){return this.f}}
A.cy.prototype={
l(a){return"Unsupported operation: "+this.a}}
A.cv.prototype={
l(a){return"UnimplementedError: "+this.a}}
A.aT.prototype={
l(a){return"Bad state: "+this.a}}
A.c7.prototype={
l(a){var s=this.a
if(s==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+A.cc(s)+"."}}
A.ck.prototype={
l(a){return"Out of Memory"},
gaW(){return null},
$iu:1}
A.bx.prototype={
l(a){return"Stack Overflow"},
gaW(){return null},
$iu:1}
A.c9.prototype={
l(a){return"Reading static variable '"+this.a+"' during its initialization"}}
A.eV.prototype={
l(a){return"Exception: "+this.a}}
A.t.prototype={
b4(a,b){var s=A.a3(this)
return new A.aA(this,s.i("M(t.E)").a(b),s.i("aA<t.E>"))},
gF(a){var s,r=this.gan(this)
for(s=0;r.T();)++s
return s},
gaJ(a){var s,r=this.gan(this)
if(!r.T())throw A.e(A.ha())
s=r.gU()
if(r.T())throw A.e(A.iC())
return s},
l(a){return A.iB(this,"(",")")}}
A.N.prototype={}
A.D.prototype={
gS(a){return A.v.prototype.gS.call(this,this)},
l(a){return"null"}}
A.v.prototype={$iv:1,
ar(a,b){return this===b},
gS(a){return A.bt(this)},
l(a){return"Instance of '"+A.eE(this)+"'"},
toString(){return this.l(this)}}
A.cN.prototype={
l(a){return""},
$iaS:1}
A.cr.prototype={
gF(a){return this.a.length},
l(a){var s=this.a
return s.charCodeAt(0)==0?s:s}}
A.h.prototype={}
A.aG.prototype={
scM(a,b){a.href=b},
l(a){var s=String(a)
s.toString
return s},
$iaG:1}
A.c3.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.aH.prototype={$iaH:1}
A.am.prototype={$iam:1}
A.aJ.prototype={$iaJ:1}
A.an.prototype={
saU(a,b){a.height=b},
saV(a,b){a.width=b},
cs(a,b,c){var s=a.toDataURL(b,c)
s.toString
return s},
$ian:1}
A.b7.prototype={
scI(a,b){a.fillStyle=b},
sc_(a,b){a.strokeStyle=b},
$ib7:1}
A.a_.prototype={
gF(a){return a.length}}
A.b8.prototype={
gF(a){var s=a.length
s.toString
return s}}
A.em.prototype={}
A.ao.prototype={
gm(a){var s,r=a._dartDetail
if(r!=null)return r
r=a.detail
s=new A.eN([],[])
s.c=!0
return s.aG(r)},
cj(a,b,c,d,e){return a.initCustomEvent(b,!0,!0,e)},
$iao:1}
A.aN.prototype={$iaN:1}
A.ap.prototype={}
A.en.prototype={
l(a){var s=String(a)
s.toString
return s}}
A.cb.prototype={
cF(a,b){var s=a.createHTMLDocument(b)
s.toString
return s}}
A.eo.prototype={
gF(a){var s=a.length
s.toString
return s}}
A.q.prototype={
gcu(a){return new A.cD(a)},
l(a){var s=a.localName
s.toString
return s},
ao(a,b,c,d){var s,r,q,p
if(c==null){s=$.h9
if(s==null){s=A.w([],t.i)
r=new A.br(s)
B.b.B(s,A.hu(null))
B.b.B(s,A.hy())
$.h9=r
d=r}else d=s
s=$.h8
if(s==null){s=new A.bS(d)
$.h8=s
c=s}else{s.a=d
c=s}}if($.ad==null){s=document
r=s.implementation
r.toString
r=B.L.cF(r,"")
$.ad=r
r=r.createRange()
r.toString
$.fD=r
r=$.ad.createElement("base")
t.w.a(r)
s=s.baseURI
s.toString
r.href=s
$.ad.head.appendChild(r).toString}s=$.ad
if(s.body==null){r=s.createElement("body")
B.P.scw(s,t.b.a(r))}s=$.ad
if(t.b.b(a)){s=s.body
s.toString
q=s}else{s.toString
r=a.tagName
r.toString
q=s.createElement(r)
$.ad.body.appendChild(q).toString}s="createContextualFragment" in window.Range.prototype
s.toString
if(s){s=a.tagName
s.toString
s=!B.b.ab(B.U,s)}else s=!1
if(s){$.fD.selectNodeContents(q)
s=$.fD
s=s.createContextualFragment(b)
s.toString
p=s}else{J.ik(q,b)
s=$.ad.createDocumentFragment()
s.toString
for(;r=q.firstChild,r!=null;)s.appendChild(r).toString
p=s}if(q!==$.ad.body)J.h0(q)
c.bm(p)
document.adoptNode(p).toString
return p},
cE(a,b,c){return this.ao(a,b,c,null)},
t(a,b){this.sbS(a,null)
a.appendChild(this.ao(a,b,null,null)).toString},
cY(a){var s,r=(a.requestFullscreen||a.webkitRequestFullscreen).call(a)
if(r!=null)return A.hY(r,t.o)
s=new A.E($.A,t.d4)
s.bu(null)
return s},
sck(a,b){a.innerHTML=b},
gbR(a){var s=a.tagName
s.toString
return s},
$iq:1}
A.ep.prototype={
$1(a){return t.Q.b(t.A.a(a))},
$S:21}
A.b.prototype={$ib:1}
A.o.prototype={
cb(a,b,c,d){return a.addEventListener(b,A.aC(t.E.a(c),1),!1)},
$io:1}
A.cd.prototype={
gF(a){return a.length}}
A.bc.prototype={
scw(a,b){a.body=b}}
A.as.prototype={
saU(a,b){a.height=b},
sbn(a,b){a.src=b},
saV(a,b){a.width=b},
$ias:1}
A.bd.prototype={
sK(a,b){a.checked=b},
$ihj:1}
A.au.prototype={$iau:1}
A.bn.prototype={
l(a){var s=String(a)
s.toString
return s},
$ibn:1}
A.Q.prototype={$iQ:1}
A.J.prototype={
gaJ(a){var s=this.a,r=s.childNodes.length
if(r===0)throw A.e(A.by("No elements"))
if(r>1)throw A.e(A.by("More than one element"))
s=s.firstChild
s.toString
return s},
aB(a,b){var s,r,q,p,o
t.cH.a(b)
s=b.a
r=this.a
if(s!==r)for(q=s.childNodes.length,p=0;p<q;++p){o=s.firstChild
o.toString
r.appendChild(o).toString}return},
E(a,b,c){var s,r
A.S(b)
t.A.a(c)
s=this.a
r=s.childNodes
if(!(b>=0&&b<r.length))return A.f(r,b)
s.replaceChild(c,r[b]).toString},
gan(a){var s=this.a.childNodes
return new A.aq(s,s.length,A.aj(s).i("aq<a0.E>"))},
gF(a){return this.a.childNodes.length},
ae(a,b){var s=this.a.childNodes
if(!(b>=0&&b<s.length))return A.f(s,b)
return s[b]}}
A.i.prototype={
cX(a){var s=a.parentNode
if(s!=null)s.removeChild(a).toString},
l(a){var s=a.nodeValue
return s==null?this.c0(a):s},
sbS(a,b){a.textContent=b},
$ii:1}
A.bq.prototype={
gF(a){var s=a.length
s.toString
return s},
ae(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw A.e(A.fF(b,a,null,null,null))
s=a[b]
s.toString
return s},
E(a,b,c){A.S(b)
t.A.a(c)
throw A.e(A.a2("Cannot assign element of immutable List."))},
aN(a,b){if(!(b<a.length))return A.f(a,b)
return a[b]},
$ich:1,
$it:1,
$iO:1}
A.cn.prototype={
gF(a){return a.length}}
A.ax.prototype={$iax:1}
A.bA.prototype={
ao(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.b5(a,b,c,d)
s=A.iy("<table>"+b+"</table>",c,d)
r=document.createDocumentFragment()
r.toString
new A.J(r).aB(0,new A.J(s))
return r}}
A.cs.prototype={
ao(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.b5(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new A.J(B.x.ao(r,b,c,d))
r=new A.J(r.gaJ(r))
new A.J(s).aB(0,new A.J(r.gaJ(r)))
return s}}
A.ct.prototype={
ao(a,b,c,d){var s,r="createContextualFragment" in window.Range.prototype
r.toString
if(r)return this.b5(a,b,c,d)
r=document
s=r.createDocumentFragment()
s.toString
r=r.createElement("table")
r.toString
r=new A.J(B.x.ao(r,b,c,d))
new A.J(s).aB(0,new A.J(r.gaJ(r)))
return s}}
A.aU.prototype={$iaU:1}
A.ay.prototype={
sb3(a,b){a.value=b},
$iay:1}
A.a7.prototype={$ia7:1}
A.a1.prototype={}
A.aV.prototype={
gbE(a){var s=new A.E($.A,t.aa),r=t.J.a(new A.eL(new A.bO(s,t.d1)))
this.ci(a)
r=A.hO(r,t.H)
r.toString
this.cm(a,r)
return s},
cm(a,b){var s=a.requestAnimationFrame(A.aC(t.J.a(b),1))
s.toString
return s},
ci(a){var s=!!(a.requestAnimationFrame&&a.cancelAnimationFrame)
s.toString
if(s)return;(function(b){var r=["ms","moz","webkit","o"]
for(var q=0;q<r.length&&!b.requestAnimationFrame;++q){b.requestAnimationFrame=b[r[q]+"RequestAnimationFrame"]
b.cancelAnimationFrame=b[r[q]+"CancelAnimationFrame"]||b[r[q]+"CancelRequestAnimationFrame"]}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)}}
A.eL.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.i("1/?").a(A.bV(a))
s=s.a
if((s.a&30)!==0)A.aF(A.by("Future already completed"))
s.bw(r.i("1/").a(a))},
$S:6}
A.aW.prototype={$iaW:1}
A.bK.prototype={
gF(a){var s=a.length
s.toString
return s},
ae(a,b){var s=b>>>0!==b||b>=a.length
s.toString
if(s)throw A.e(A.fF(b,a,null,null,null))
s=a[b]
s.toString
return s},
E(a,b,c){A.S(b)
t.A.a(c)
throw A.e(A.a2("Cannot assign element of immutable List."))},
aN(a,b){if(!(b<a.length))return A.f(a,b)
return a[b]},
$ich:1,
$it:1,
$iO:1}
A.cB.prototype={
b_(a,b){var s,r,q,p,o,n
t.aV.a(b)
for(s=this.gaI(),r=s.length,q=this.a,p=0;p<s.length;s.length===r||(0,A.cY)(s),++p){o=s[p]
n=q.getAttribute(o)
b.$2(o,n==null?A.F(n):n)}},
gaI(){var s,r,q,p,o,n,m=this.a.attributes
m.toString
s=A.w([],t.s)
for(r=m.length,q=t.x,p=0;p<r;++p){if(!(p<m.length))return A.f(m,p)
o=q.a(m[p])
if(o.namespaceURI==null){n=o.name
n.toString
B.b.B(s,n)}}return s}}
A.cD.prototype={
ae(a,b){return this.a.getAttribute(A.F(b))},
gF(a){return this.gaI().length}}
A.fE.prototype={}
A.bF.prototype={}
A.bE.prototype={}
A.cF.prototype={}
A.eU.prototype={
$1(a){return this.a.$1(t.B.a(a))},
$S:0}
A.aB.prototype={
c6(a){var s
if($.cH.a===0){for(s=0;s<262;++s)$.cH.E(0,B.T[s],A.jW())
for(s=0;s<12;++s)$.cH.E(0,B.n[s],A.jX())}},
aM(a){return $.ic().ab(0,A.ba(a))},
aC(a,b,c){var s=$.cH.ae(0,A.ba(a)+"::"+b)
if(s==null)s=$.cH.ae(0,"*::"+b)
if(s==null)return!1
return A.j(s.$4(a,b,c,this))},
$iX:1}
A.a0.prototype={
gan(a){return new A.aq(a,this.gF(a),A.aj(a).i("aq<a0.E>"))}}
A.br.prototype={
aM(a){return B.b.bF(this.a,new A.eB(a))},
aC(a,b,c){return B.b.bF(this.a,new A.eA(a,b,c))},
$iX:1}
A.eB.prototype={
$1(a){return t.e.a(a).aM(this.a)},
$S:7}
A.eA.prototype={
$1(a){return t.e.a(a).aC(this.a,this.b,this.c)},
$S:7}
A.bM.prototype={
c7(a,b,c,d){var s,r,q
this.a.aB(0,c)
s=b.b4(0,new A.fb())
r=b.b4(0,new A.fc())
this.b.aB(0,s)
q=this.c
q.aB(0,B.V)
q.aB(0,r)},
aM(a){return this.a.ab(0,A.ba(a))},
aC(a,b,c){var s,r=this,q=A.ba(a),p=r.c,o=q+"::"+b
if(p.ab(0,o))return r.d.ct(c)
else{s="*::"+b
if(p.ab(0,s))return r.d.ct(c)
else{p=r.b
if(p.ab(0,o))return!0
else if(p.ab(0,s))return!0
else if(p.ab(0,q+"::*"))return!0
else if(p.ab(0,"*::*"))return!0}}return!1},
$iX:1}
A.fb.prototype={
$1(a){return!B.b.ab(B.n,A.F(a))},
$S:8}
A.fc.prototype={
$1(a){return B.b.ab(B.n,A.F(a))},
$S:8}
A.cP.prototype={
aC(a,b,c){if(this.c3(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(a.getAttribute("template")==="")return this.e.ab(0,b)
return!1}}
A.fh.prototype={
$1(a){return"TEMPLATE::"+A.F(a)},
$S:22}
A.cO.prototype={
aM(a){var s
if(t.ck.b(a))return!1
s=t.bM.b(a)
if(s&&A.ba(a)==="foreignObject")return!1
if(s)return!0
return!1},
aC(a,b,c){if(b==="is"||B.i.bZ(b,"on"))return!1
return this.aM(a)},
$iX:1}
A.aq.prototype={
T(){var s=this,r=s.c+1,q=s.b
if(r<q){s.sbB(J.ie(s.a,r))
s.c=r
return!0}s.sbB(null)
s.c=q
return!1},
gU(){var s=this.d
return s==null?this.$ti.c.a(s):s},
sbB(a){this.d=this.$ti.i("1?").a(a)},
$iN:1}
A.cM.prototype={$iiZ:1}
A.bS.prototype={
bm(a){var s,r=new A.fl(this)
do{s=this.b
r.$2(a,null)}while(s!==this.b)},
aS(a,b){++this.b
if(b==null||b!==a.parentNode)J.h0(a)
else b.removeChild(a).toString},
co(a,b){var s,r,q,p,o,n,m,l=!0,k=null,j=null
try{k=J.ij(a)
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
if(A.fT(s))o=!0
else{p=!(a.attributes instanceof NamedNodeMap)
p.toString
o=p}l=o}catch(n){}r="element unprintable"
try{r=J.c2(a)}catch(n){}try{q=A.ba(a)
this.cn(t.Q.a(a),b,l,r,q,t.f.a(k),A.hG(j))}catch(n){if(A.ak(n) instanceof A.a4)throw n
else{this.aS(a,b)
window.toString
p=A.r(r)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn("Removing corrupted element "+p)}}},
cn(a,b,c,d,e,f,g){var s,r,q,p,o,n,m,l=this
if(c){l.aS(a,b)
window.toString
s=typeof console!="undefined"
s.toString
if(s)window.console.warn("Removing element due to corrupted attributes on <"+d+">")
return}if(!l.a.aM(a)){l.aS(a,b)
window.toString
s=A.r(b)
r=typeof console!="undefined"
r.toString
if(r)window.console.warn("Removing disallowed element <"+e+"> from "+s)
return}if(g!=null)if(!l.a.aC(a,"is",g)){l.aS(a,b)
window.toString
s=typeof console!="undefined"
s.toString
if(s)window.console.warn("Removing disallowed type extension <"+e+' is="'+g+'">')
return}s=f.gaI()
q=A.w(s.slice(0),A.ai(s))
for(p=f.gaI().length-1,s=f.a,r="Removing disallowed attribute <"+e+" ";p>=0;--p){if(!(p<q.length))return A.f(q,p)
o=q[p]
n=l.a
m=J.im(o)
A.F(o)
if(!n.aC(a,m,A.F(s.getAttribute(o)))){window.toString
n=s.getAttribute(o)
m=typeof console!="undefined"
m.toString
if(m)window.console.warn(r+o+'="'+A.r(n)+'">')
s.removeAttribute(o)}}if(t.bg.b(a)){s=a.content
s.toString
l.bm(s)}},
$iiK:1}
A.fl.prototype={
$2(a,b){var s,r,q,p,o,n=this.a,m=a.nodeType
m.toString
switch(m){case 1:n.co(a,b)
break
case 8:case 11:case 3:case 4:break
default:n.aS(a,b)}s=a.lastChild
for(m=t.A;s!=null;){r=null
try{r=s.previousSibling
if(r!=null){q=r.nextSibling
p=s
p=q==null?p!=null:q!==p
q=p}else q=!1
if(q){q=A.by("Corrupt HTML")
throw A.e(q)}}catch(o){q=m.a(s);++n.b
p=q.parentNode
if(a!==p){if(p!=null)p.removeChild(q).toString}else a.removeChild(q).toString
s=null
r=a.lastChild}if(s!=null)this.$2(s,a)
s=r}},
$S:23}
A.cC.prototype={}
A.cJ.prototype={}
A.cK.prototype={}
A.cU.prototype={}
A.cV.prototype={}
A.fd.prototype={
aO(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.B(r,a)
B.b.B(this.b,null)
return q},
aG(a){var s,r,q,p,o=this,n={}
if(a==null)return a
if(A.fm(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
if(a instanceof A.aM)return new Date(a.a)
if(t.a7.b(a))throw A.e(A.cw("structured clone of RegExp"))
if(t.f.b(a)){s=o.aO(a)
r=o.b
if(!(s<r.length))return A.f(r,s)
q=n.a=r[s]
if(q!=null)return q
q={}
n.a=q
B.b.E(r,s,q)
a.b_(0,new A.ff(n,o))
return n.a}if(t.j.b(a)){s=o.aO(a)
n=o.b
if(!(s<n.length))return A.f(n,s)
q=n[s]
if(q!=null)return q
return o.cD(a,s)}if(t.cq.b(a)){s=o.aO(a)
r=o.b
if(!(s<r.length))return A.f(r,s)
q=n.b=r[s]
if(q!=null)return q
p={}
p.toString
n.b=p
B.b.E(r,s,p)
o.cK(a,new A.fg(n,o))
return n.b}throw A.e(A.cw("structured clone of other type"))},
cD(a,b){var s,r=J.cX(a),q=r.gF(a),p=new Array(q)
p.toString
B.b.E(this.b,b,p)
for(s=0;s<q;++s)B.b.E(p,s,this.aG(r.ae(a,s)))
return p}}
A.ff.prototype={
$2(a,b){this.a.a[a]=this.b.aG(b)},
$S:24}
A.fg.prototype={
$2(a,b){this.a.b[a]=this.b.aG(b)},
$S:25}
A.eM.prototype={
aO(a){var s,r=this.a,q=r.length
for(s=0;s<q;++s)if(r[s]===a)return s
B.b.B(r,a)
B.b.B(this.b,null)
return q},
aG(a){var s,r,q,p,o,n,m,l,k,j=this,i={}
if(a==null)return a
if(A.fm(a))return a
if(typeof a=="number")return a
if(typeof a=="string")return a
s=a instanceof Date
s.toString
if(s){s=a.getTime()
s.toString
if(Math.abs(s)<=864e13)r=!1
else r=!0
if(r)A.aF(A.d2("DateTime is outside valid range: "+s,null))
A.cW(!0,"isUtc",t.y)
return new A.aM(s,!0)}s=a instanceof RegExp
s.toString
if(s)throw A.e(A.cw("structured clone of RegExp"))
s=typeof Promise!="undefined"&&a instanceof Promise
s.toString
if(s)return A.hY(a,t.z)
q=Object.getPrototypeOf(a)
s=q===Object.prototype
s.toString
if(!s){s=q===null
s.toString}else s=!0
if(s){p=j.aO(a)
s=j.b
if(!(p<s.length))return A.f(s,p)
o=i.a=s[p]
if(o!=null)return o
r=t.z
o=A.he(r,r)
i.a=o
B.b.E(s,p,o)
j.cJ(a,new A.eO(i,j))
return i.a}s=a instanceof Array
s.toString
if(s){s=a
s.toString
p=j.aO(s)
r=j.b
if(!(p<r.length))return A.f(r,p)
o=r[p]
if(o!=null)return o
n=J.cX(s)
m=n.gF(s)
if(j.c){l=new Array(m)
l.toString
o=l}else o=s
B.b.E(r,p,o)
for(r=J.fr(o),k=0;k<m;++k)r.E(o,k,j.aG(n.ae(s,k)))
return o}return a}}
A.eO.prototype={
$2(a,b){var s=this.a.a,r=this.b.aG(b)
J.ig(s,a,r)
return r},
$S:26}
A.fe.prototype={
cK(a,b){var s,r,q,p
t.k.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.cY)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.eN.prototype={
cJ(a,b){var s,r,q,p
t.k.a(b)
for(s=Object.keys(a),r=s.length,q=0;q<s.length;s.length===r||(0,A.cY)(s),++q){p=s[q]
b.$2(p,a[p])}}}
A.eC.prototype={
l(a){return"Promise was rejected with a value of `"+(this.a?"undefined":"null")+"`."}}
A.fy.prototype={
$1(a){var s=this.a,r=s.$ti
a=r.i("1/?").a(this.b.i("0/?").a(a))
s=s.a
if((s.a&30)!==0)A.aF(A.by("Future already completed"))
s.bu(r.i("1/").a(a))
return null},
$S:9}
A.fz.prototype={
$1(a){if(a==null)return this.a.bI(new A.eC(a===undefined))
return this.a.bI(a)},
$S:9}
A.f7.prototype={
aF(){return Math.random()}}
A.aR.prototype={$iaR:1}
A.d.prototype={
ao(a,b,c,d){var s,r,q,p=A.w([],t.i)
B.b.B(p,A.hu(null))
B.b.B(p,A.hy())
B.b.B(p,new A.cO())
c=new A.bS(new A.br(p))
p=document
s=p.body
s.toString
r=B.p.cE(s,'<svg version="1.1">'+b+"</svg>",c)
p=p.createDocumentFragment()
p.toString
s=new A.J(r)
q=s.gaJ(s)
for(;s=q.firstChild,s!=null;)p.appendChild(s).toString
return p},
$id:1}
A.d_.prototype={
c4(a,b,c){this.w=A.hq(B.N,new A.d0(this))},
C(){var s,r,q,p,o,n,m=this
switch(m.r){case"linearUp":s=m.e
r=m.a
q=m.f
r=Math.min(s,r+q)
m.a=r
m.f=Math.min((1+$.ac/10)*q,0.05*(s-r))
break
case"linearDown":s=m.d
r=m.a
q=m.f
r=Math.max(s,r-q)
m.a=r
m.f=Math.min((1+$.ac/10)*q,0.05*(r-s))
break
case"expUp":s=m.e
r=m.a
q=m.f
r=Math.min(s,r+q)
m.a=r
m.f=Math.min((1+$.al/10)*q,0.05*(s-r))
break
case"expDown":s=m.d
r=m.a
q=m.f
r=Math.max(s,r-q)
m.a=r
m.f=Math.min((1+$.al/10)*q,0.05*(r-s))
break
case"constantUp":m.a=Math.min(m.e,m.a+m.f)
break
case"constantDown":m.a=Math.max(m.d,m.a-m.f)
break
case"breakUp":s=m.a
r=m.f
m.a=Math.min(m.e,s+r)
m.f=r*0.9
break
case"breakDown":s=m.a
r=m.f
m.a=Math.max(m.d,s-r)
m.f=r*0.9
break
case"easeInOut":m.a=m.b-m.c*(1-(Math.atan(6*(m.x/m.y)-3)+1.25)/2.5)
if(++m.x>m.y){m.r=""
m.a=m.b}break
case"easeIn":m.a=m.b-m.c*(1-Math.pow(m.x/m.y,2))
if(++m.x>m.y){m.r=""
m.a=m.b}break
case"easeOut":m.a=m.b-m.c*(1-Math.sqrt(m.x/m.y))
if(++m.x>m.y){m.r=""
m.a=m.b}break
case"linear":s=m.b
r=m.c
q=m.x
p=m.y
m.a=s-r*(1-q/p);++q
m.x=q
if(q>p){m.r=""
m.a=s}break
case"strobe":o=B.c.be(10*m.x/m.y)
s=m.x
n=B.c.aa(B.c.aR(B.c.aR(1000*s/m.y,1000),10))
m.x=s+1
s=m.b
if(n<o)m.a=s
else m.a=s-m.c
break}},
k(a,b){var s=this
if(b!==s.r){s.r=b
switch(b){case"linearUp":case"linearDown":s.f=Math.max(s.a*0.001*$.ac,0.001)
break
case"expUp":case"expDown":s.f=Math.max(s.a*0.0001*$.al,0.0001)
break
case"constantUp":case"constantDown":s.f=0.002*(s.e-s.d)*$.ac
break
case"selected":s.f=0
break}}if(A.a(s.w,"_timer").b!=null)A.a(s.w,"_timer").bG()},
j(a,b,c){var s,r=this
A.jm(b)
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
break}if(A.a(s.w,"_timer").b!=null)A.a(s.w,"_timer").bG()
s.w=A.hq(B.O,new A.d1(s))},
gn(a){return B.c.l(Math.max(Math.min(B.c.aa(this.a*1000)/1000,this.e),this.d))},
gb0(){var s=this.d
return Math.abs(B.c.bN(100*(this.a-s)/(this.b-s)))}}
A.d0.prototype={
$0(){return this.a.r=""},
$S:2}
A.d1.prototype={
$0(){return this.a.r=""},
$S:2}
A.c4.prototype={
cP(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1=this,c2="none",c3="_canvas",c4="_ctx2d",c5="click",c6=c1.p.style
c6.display="block"
c6=c1.a7
c6.className="panelBtn panelBtnOn"
s=c1.q.style
s.display=c2
s=c1.D.style
s.display=c2
s=c1.aT.style
s.display=c2
s=c1.G
r=s.style
r.display=c2
r=t.W
q=r.i("~(1)?")
p=q.a(new A.d5(c1))
t.Z.a(null)
r=r.c
A.c(c6,c5,p,!1,r)
A.c(c1.a8,c5,q.a(new A.d6(c1)),!1,r)
A.c(c1.V,c5,q.a(new A.d7(c1)),!1,r)
A.c(c1.Y,c5,q.a(new A.d8(c1)),!1,r)
p=c1.aj
B.e.sK(p,!0)
c6=c1.a9
B.e.sK(c6,!0)
o=c1.aD
B.e.sK(o,!0)
n=c1.aE
B.e.sK(n,!1)
$.ac=$.al=1
A.c(p,c5,q.a(new A.d9(c1)),!1,r)
A.c(c6,c5,q.a(new A.da(c1)),!1,r)
A.c(o,c5,q.a(new A.db(c1)),!1,r)
A.c(n,c5,q.a(new A.dc(c1)),!1,r)
if(window.innerWidth!=null){c6=window.innerWidth
c6.toString
m=c6}else m=0
if(m<640){l=427
k=240
j=0.5}else if(m<854){l=640
k=360
j=0.75}else{l=854
k=480
j=1}c6=A.l(0,0,0)
p=A.l(0,0,0)
o=A.l(0,0,0)
n=A.l(0,0,0)
i=A.l(0,0,0)
h=A.l(0,0,0)
g=A.l(0,0,0)
f=A.l(0,0,0)
e=A.l(0,0,0)
d=A.l(0,0,0)
c=A.l(0,0,0)
b=A.l(0,0,0)
a=A.l(0,0,0)
a0=A.l(0,0,0)
a1=A.fC(0,0,0)
a2=A.fC(0,0,0)
a3=A.fC(0,0,0)
a4=A.l(0,0,0)
a5=A.l(0,0,0)
a6=A.l(0,0,0)
a7=A.l(0,0,0)
a8=A.l(0,0,0)
a9=A.l(0,0,0)
b0=A.l(0,0,0)
b1=A.l(0,0,0)
b2=A.l(0,0,0)
b3=A.l(0,0,0)
b4=A.l(0,0,0)
b5=A.l(0,0,0)
b6=A.l(0,0,0)
b7=A.l(0,0,0)
b8=A.l(0,0,0)
b9=t.t
c0=A.w([],b9)
b9=A.w([],b9)
b8=new A.dg(c6,p,o,n,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,c0,b9,A.l(0,0,3600),A.w([],t.s))
b7=document
b6=t.q.a(b7.querySelector("#bcbccanvas"))
b8.w=b6
b8.a=l
b8.b=k
b8.r=j
b8.c=B.c.aa(l/2)
b8.d=B.c.aa(k/2)
b8.f=b8.e=100
B.k.saV(A.a(b6,c3),l)
B.k.saU(A.a(b6,c3),k)
b6=A.a(b6,c3).getContext("2d")
b6.toString
b8.x=b6
A.a(b6,c4).lineCap="butt"
A.a(b6,c4).lineJoin="miter"
A.a(b6,c4).miterLimit=5
b8.ag=A.l(0,-1,20)
b8.ah=A.l(1,-1,500)
b8.ak=A.l(1,-10,10)
b8.H=A.l(20,0.1,2000)
b8.I=A.l(20,0.1,2000)
b8.J=A.l(20,0.1,2000)
b8.M=A.l(0,0,500)
b8.L=A.l(0,0,500)
b8.N=A.l(0,0,500)
b8.a0=A.l(1,0.0001,20)
b8.X=A.l(70,0,1e5)
b8.a1=A.l(0,0,100)
b8.al=A.l(2.025,-2.025,2.025)
b8.a2=A.l(1,0,2)
a1.b=203
a1.e=56
a1.w=28
a1.aL()
a2.b=203
a2.e=28
a2.w=174
a2.aL()
a3.b=174
a3.e=203
a3.w=28
a3.aL()
b8.ai=A.l(1,0,1e5)
b8.a3=A.l(0.5,0.01,0.99)
b8.a4=A.l(200,1,200)
b8.ac=A.l(1,0.01,15)
b8.a5=A.l(0,-20.8,20.8)
b8.a_=A.l(0,-20.8,20.8)
b8.O=A.l(0,-3.141592653589793,3.141592653589793)
b8.P=A.l(1,1,1000)
b8.a6=A.l(1,0,10)
b8.G=A.l(1,1,1000)
b8.ad=A.l(1,0,10)
b8.am=A.l(0,0,1)
b8.a7=A.l(1,-1,1)
b8.a8=A.l(1,-1,1)
b8.V=A.l(0,0,5)
B.b.B(c0,2*(B.j.aF()-0.5))
B.b.B(b9,2*(B.j.aF()-0.5))
b8.a9=A.l(0,0,3600)
b8.bY()
c1.a=b8
A.c(c1.b,c5,q.a(new A.dd(c1)),!1,r)
A.m("#aParamUp","aParamUp",!1)
A.m("#aParamDown","aParamDown",!1)
A.m("#bParamUp","bParamUp",!1)
A.m("#bParamDown","bParamDown",!1)
A.m("#cParamUp","cParamUp",!1)
A.m("#cParamDown","cParamDown",!1)
A.m("#beginTUp","beginTUp",!1)
A.m("#beginTDown","beginTDown",!1)
A.m("#maxTUp","maxTUp",!1)
A.m("#maxTDown","maxTDown",!1)
A.m("#stepTUp","stepTUp",!1)
A.m("#stepTDown","stepTDown",!1)
A.m("#switchLineControlled","switchLineControlled",!0)
A.m("#lwUp","lwUp",!1)
A.m("#lwDown","lwDown",!1)
A.m("#dashedUp","dashedUp",!1)
A.m("#dashedDown","dashedDown",!1)
c6=t.S
p=c6.a(b7.querySelector("#labelLineNum"))
c1.db=p
B.d.t(A.a(p,"labelLineNum"),"1")
A.m("#switchColorControlled","switchColorControlled",!0)
A.m("#colorHueLeft","colorHueLeft",!1)
A.m("#colorHueRight","colorHueRight",!1)
A.m("#colorSatUp","colorSatUp",!1)
A.m("#colorSatDown","colorSatDown",!1)
A.m("#colorLightUp","colorLightUp",!1)
A.m("#colorLightDown","colorLightDown",!1)
c1.k1=c6.a(b7.querySelector("#labelColorSample"))
b7=c6.a(b7.querySelector("#labelColorNum"))
c1.k2=b7
B.d.t(A.a(b7,"labelColorNum"),"1")
b7=A.a(c1.k1,"labelColorSample").style
b7.toString
c6=A.a(A.a(c1.a,"screen").u.a,"color").az().b1()
b7.backgroundColor=c6
A.m("#pivotLeft","pivotLeft",!1)
A.m("#pivotRight","pivotRight",!1)
A.m("#gradientUp","gradientUp",!1)
A.m("#gradientDown","gradientDown",!1)
A.m("#distribUp","distribUp",!1)
A.m("#distribDown","distribDown",!1)
A.m("#lineCurve","lineCurve",!0)
A.m("#lineStrait","lineStrait",!0)
A.m("#lineConc","lineConc",!0)
A.m("#capsRound","capsRound",!0)
A.m("#capsSquare","capsSquare",!0)
A.m("#capsButt","capsButt",!0)
A.m("#gapsMore","gapsMore",!1)
A.m("#gapsLess","gapsLess",!1)
A.m("#splitHorzUp","splitHorzUp",!0)
A.m("#splitHorzDown","splitHorzDown",!0)
A.m("#splitVertUp","splitVertUp",!0)
A.m("#splitVertDown","splitVertDown",!0)
A.m("#splitWidthUp","splitWidthUp",!1)
A.m("#splitWidthDown","splitWidthDown",!1)
A.m("#splitHeightUp","splitHeightUp",!1)
A.m("#splitHeightDown","splitHeightDown",!1)
A.m("#splitQuincSet","splitQuincSet",!0)
A.m("#zoomUp","zoomUp",!1)
A.m("#zoomDown","zoomDown",!1)
A.m("#panLeft","panLeft",!1)
A.m("#panUp","panUp",!1)
A.m("#panRight","panRight",!1)
A.m("#panDown","panDown",!1)
A.m("#rotLeft","rotLeft",!1)
A.m("#rotRight","rotRight",!1)
A.m("#flipH","flipH",!0)
A.m("#flipV","flipV",!0)
A.m("#explodeUp","explodeUp",!1)
A.m("#explodeDown","explodeDown",!1)
A.m("#center","center",!0)
B.e.sK(c1.a4,!0)
A.c(c1.ai,c5,q.a(c1.gbW()),!1,r)
A.c(c1.a3,c5,q.a(c1.gcz()),!1,r)
A.c(c1.P,c5,q.a(c1.gcG()),!1,r)
A.c(c1.a6,c5,q.a(c1.gcN()),!1,r)
A.c(s,c5,q.a(c1.gcU()),!1,r)
A.c(c1.O,c5,q.a(new A.de(c1)),!1,r)
c1.aw=!1
A.a(c1.a,"screen").ap()
c6=window
c6.toString
B.y.gbE(c6).bh(c1.gbQ(),t.o)
c6=window
c6.toString
A.c(c6,"resize",t.m.a(new A.df(c1)),!1,t.B)},
cW(a2){var s,r,q,p,o,n,m,l,k,j,i=this,h="screen",g="labelColorNum",f="labelColorSample",e="color",d="transparent",c="labelLineNum",b="BCBC2",a="easeInOut",a0="wrong begining\nno mode found",a1="wrong begining\nno frames found"
A.bV(a2)
s=Date.now()
r=i.bM
q=r>=0?1000/(s-r):60
i.bM=s
if(!i.aw){s=A.a(i.a,h)
r=s.u
p=r.at
if(p==="selected"){r.at=""
o=!0}else o=p!==""&&!0
r=s.v
p=r.at
if(p==="selected"){r.at=""
o=!0}else if(p!=="")o=!0
r=s.A
p=r.at
if(p==="selected"){r.at=""
o=!0}else if(p!=="")o=!0
r=s.H
if(r.r==="selected"){r.h(0)
o=!0}r=s.I
if(r.r==="selected"){r.h(0)
o=!0}s=s.J
if(s.r==="selected"){s.h(0)
o=!0}if(o){s=A.a(i.a,h).R
r=i.k2
switch(s){case"C1":B.d.t(A.a(r,g),"1")
s=A.a(i.k1,f).style
s.toString
r=A.a(A.a(i.a,h).u.a,e).az().b1()
s.backgroundColor=r
break
case"C2":B.d.t(A.a(r,g),"2")
s=A.a(i.k1,f).style
s.toString
r=A.a(A.a(i.a,h).v.a,e).az().b1()
s.backgroundColor=r
break
case"C3":B.d.t(A.a(r,g),"3")
s=A.a(i.k1,f).style
s.toString
r=A.a(A.a(i.a,h).A.a,e).az().b1()
s.backgroundColor=r
break
case"C_":B.d.t(A.a(r,g),"_")
s=A.a(i.k1,f).style
s.backgroundColor=d
break
default:B.d.t(A.a(r,g),".")
s=A.a(i.k1,f).style
s.backgroundColor=d}s=A.a(i.a,h).Z
r=i.db
switch(s){case"L1":B.d.t(A.a(r,c),"1")
break
case"L2":B.d.t(A.a(r,c),"2")
break
case"L3":B.d.t(A.a(r,c),"3")
break
case"L_":B.d.t(A.a(r,c),"_")
break
default:B.d.t(A.a(r,c),".")}}s=A.a(i.a,h)
s.D=""
r=s.ag
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="aParam"
o=!0}else o=!1
r=s.ah
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="bParam"
o=!0}r=s.ak
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="cParam"
o=!0}r=s.a1
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="beginT"
o=!0}r=s.X
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="maxT"
o=!0}r=s.a0
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="stepT"
o=!0}r=s.H
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="lw1"
o=!0}r=s.I
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="lw2"
o=!0}r=s.J
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="lw3"
o=!0}r=s.M
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="dash1"
o=!0}r=s.L
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="dash2"
o=!0}r=s.N
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="dash3"
o=!0}r=s.u
if(r.at!==""){r.C()
o=!0}r=s.v
if(r.at!==""){r.C()
o=!0}r=s.A
if(r.at!==""){r.C()
o=!0}r=s.a4
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="gradient"
o=!0}r=s.a3
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="pivot"
o=!0}r=s.ai
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="distrib"
o=!0}r=s.al
p=r.r
if(p!==""&&p!=="selected"){r.C()
o=!0}if(s.av==="selected"){r=A.a(s.x,"_ctx2d").lineCap
r.toString
s.av=r
o=!0}r=s.a2
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="gapsRatio"
o=!0}r=s.P
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="Hnum"
o=!0}r=s.G
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="Vnum"
o=!0}r=s.a6
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="Hwidth"
o=!0}r=s.ad
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="Vheight"
o=!0}r=s.am
p=r.r
if(p!==""&&p!=="selected"){r.C()
o=!0}r=s.a7
p=r.r
if(p!==""&&p!=="selected"){r.C()
o=!0}r=s.a8
p=r.r
if(p!==""&&p!=="selected"){r.C()
o=!0}r=s.V
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="explode"
o=!0}r=s.ac
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="zoom"
o=!0}r=s.a5
p=r.r
if(p!==""&&p!=="selected"){r.C()
o=!0}r=s.a_
p=r.r
if(p!==""&&p!=="selected"){r.C()
o=!0}r=s.O
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="rotation"
o=!0}r=s.a9
p=r.r
if(p!==""&&p!=="selected"){r.C()
s.D="transitions"
o=!0}if(o){s=i.R
switch(A.a(i.a,h).D){case"aParam":r=A.a(i.a,h).ag
B.d.t(s,"a param: "+r.gn(r))
break
case"bParam":r=A.a(i.a,h).ah
B.d.t(s,"b param: "+r.gn(r))
break
case"cParam":r=A.a(i.a,h).ak
B.d.t(s,"c param: "+r.gn(r))
break
case"beginT":r=A.a(i.a,h).a1
B.d.t(s,"t begin: "+r.gn(r))
break
case"maxT":r=A.a(i.a,h).X
B.d.t(s,"t interval: "+r.gn(r))
break
case"stepT":r=A.a(i.a,h).a0
B.d.t(s,"t step: "+r.gn(r))
break
case"lw1":r=A.a(i.a,h).H
B.d.t(s,"L1 width: "+r.gn(r))
break
case"lw2":r=A.a(i.a,h).I
B.d.t(s,"L2 width: "+r.gn(r))
break
case"lw3":r=A.a(i.a,h).J
B.d.t(s,"L3 width: "+r.gn(r))
break
case"dash1":r=A.a(i.a,h).M
B.d.t(s,"L1 dash: "+r.gn(r))
break
case"dash2":r=A.a(i.a,h).L
B.d.t(s,"L2 dash: "+r.gn(r))
break
case"dash3":r=A.a(i.a,h).N
B.d.t(s,"L3 dash: "+r.gn(r))
break
case"gradient":r=A.a(i.a,h).a4
B.d.t(s,"gradient: "+r.gn(r))
break
case"pivot":r=A.a(i.a,h).a3
B.d.t(s,"pivot: "+r.gn(r))
break
case"distrib":r=A.a(i.a,h).ai
B.d.t(s,"distribp: "+r.gn(r))
break
case"gapsRatio":r=A.a(i.a,h).a2
B.d.t(s,"gaps: "+r.gn(r))
break
case"Hnum":r=A.a(i.a,h).P
B.d.t(s,"H_num: "+r.gn(r))
break
case"Vnum":r=A.a(i.a,h).G
B.d.t(s,"V_num: "+r.gn(r))
break
case"Hwidth":r=A.a(i.a,h).a6
B.d.t(s,"H_width: "+r.gn(r))
break
case"Vheight":r=A.a(i.a,h).ad
B.d.t(s,"V_height: "+r.gn(r))
break
case"explode":r=A.a(i.a,h).V
B.d.t(s,"explode: "+r.gn(r))
break
case"zoom":r=A.a(i.a,h).ac
B.d.t(s,"zoom: "+r.gn(r))
break
case"rotation":r=A.a(i.a,h).O
B.d.t(s,"rotation: "+r.gn(r))
break
case"transitions":B.d.t(s,"transitions: "+A.a(i.a,h).a9.gb0()+"%")
if(A.a(i.a,h).a9.gb0()<100){s=i.G.style
s.display="block"
s=i.a6.style
s.display="none"}else if(A.a(i.a,h).a9.gb0()>=100){s=i.G.style
s.display="none"
s=i.a6.style
s.display="block"
s=A.a(i.a,h)
n=s.ag.a===0||!1
if(s.ah.a!==1)n=!1
if(s.ak.a!==1)n=!1
if(s.H.a!==20)n=!1
if(s.I.a!==20)n=!1
if(s.J.a!==20)n=!1
if(s.a0.a!==1)n=!1
if(s.X.a!==70)n=!1
if(!(s.a1.a!==0?!1:n)){s=A.a(i.a,h)
r=s.q+=35
p=s.p
m=p.length
if(m>=35+r){r=2+r
if(!(r<m))return A.f(p,r)
if(J.Z(p[r],b)){r=s.p
p=s.q
if(!(p<r.length))return A.f(r,p)
l=A.bu(r[p],null)
p=s.p
r=s.q
m=1+r
if(!(m<p.length))return A.f(p,m)
k=p[m]
s.q=r+2
r=l==null
if(!r)p=k==="easeInOut"||k==="easeIn"||k==="easeOut"||k==="linear"||k==="strobe"
else p=!1
if(p)j=s.aP(J.fB(l),k)
else if(k!=="easeInOut"&&k!=="easeIn"&&k!=="easeOut"&&k!=="linear"&&k!=="strobe")j=a0
else j=r?a1:""}else{r=s.p
p=s.q
if(!(p<r.length))return A.f(r,p)
j=J.Z(r[p],b)?s.aP(600,a):"wrong begining\nmissing line\nBCBC2"}}else if(m===r)j=""
else if(J.Z(p[r],"loop")){s.q=0
r=s.p
if(2>=r.length)return A.f(r,2)
if(J.Z(r[2],b)){r=s.p
p=s.q
if(!(p<r.length))return A.f(r,p)
l=A.bu(r[p],null)
p=s.p
r=s.q
m=1+r
if(!(m<p.length))return A.f(p,m)
k=p[m]
s.q=r+2
r=l==null
if(!r)p=k==="easeInOut"||k==="easeIn"||k==="easeOut"||k==="linear"||k==="strobe"
else p=!1
if(p)j=s.aP(J.fB(l),k)
else if(k!=="easeInOut"&&k!=="easeIn"&&k!=="easeOut"&&k!=="linear"&&k!=="strobe")j=a0
else j=r?a1:""}else{r=s.p
p=s.q
if(!(p<r.length))return A.f(r,p)
j=J.Z(r[p],b)?s.aP(600,a):""}}else j="wrong import length"
if(j!=="")B.m.sb3(i.am,j)}}if(A.a(i.a,h).a9.gb0()>50){A.a(i.a,h)
s=!0}else s=!1
if(s){s=A.a(i.a,h)
if(s.av!==s.aZ){A.a(s.x,"_ctx2d").lineCap=s.aZ
s.av="selected"}}break
default:B.d.t(s,"")
break}A.a(i.a,h).ap()
if(q<=20)B.w.t(i.Z,""+B.c.aa(q)+" fps")}else B.w.t(i.Z,"")}s=window
s.toString
B.y.gbE(s).bh(i.gbQ(),t.o)},
bX(a){var s,r,q,p,o=this,n="screen"
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
default:s="?"}r=o.a_.checked
if(r===!0)q="UHD"
else{r=o.a5.checked
if(r===!0)q="FHD"
else{r=o.ac.checked
q=r===!0?"HD":"SD"}}if(q!==s){A.a(o.a,n).au(q)
A.a(o.a,n).ap()}p=B.k.cs(A.a(A.a(o.a,n).w,"_canvas"),"image/jpeg",0.92)
r=o.bL
B.l.saV(r,A.a(o.a,n).a)
B.l.saU(r,A.a(o.a,n).b)
B.l.sbn(r,p)
if(s!==q){A.a(o.a,n).au(s)
A.a(o.a,n).ap()}},
cA(a){var s,r,q=this,p="screen"
t.V.a(a)
A.a(q.a,p).au("LD")
s=q.bL
B.l.saV(s,100)
B.l.saU(s,100)
B.l.sbn(s,"BCBCdefaultSnap.png")
if(window.innerWidth!=null){s=window.innerWidth
s.toString
r=s}else r=0
if(r<640){A.a(q.a,p).au("LD")
A.a(q.a,p).ap()}else{s=q.a
if(r<854){A.a(s,p).au("MD")
A.a(q.a,p).ap()}else{A.a(s,p).au("SD")
A.a(q.a,p).ap()}}},
cH(e7){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5,c6,c7,c8,c9,d0,d1,d2,d3,d4,d5,d6,d7,d8,d9,e0,e1,e2,e3,e4,e5,e6
t.V.a(e7)
s=A.a(this.a,"screen")
r=A.p(13)
q=s.ag
q=q.gn(q)
p=A.p(13)
o=s.ah
o=o.gn(o)
n=A.p(13)
m=s.ak
m=m.gn(m)
l=A.p(13)
k=s.a1
k=k.gn(k)
j=A.p(13)
i=s.X
i=i.gn(i)
h=A.p(13)
g=s.a0
g=g.gn(g)
f=A.p(13)
e=s.H
e=e.gn(e)
d=A.p(13)
c=s.I
c=c.gn(c)
b=A.p(13)
a=s.J
a=a.gn(a)
a0=A.p(13)
a1=s.M
a1=a1.gn(a1)
a2=A.p(13)
a3=s.L
a3=a3.gn(a3)
a4=A.p(13)
a5=s.N
a5=a5.gn(a5)
a6=A.p(13)
a7=s.u
a7=a7.gn(a7)
a8=A.p(13)
a9=s.v
a9=a9.gn(a9)
b0=A.p(13)
b1=s.A
b1=b1.gn(b1)
b2=A.p(13)
b3=s.a4
b3=b3.gn(b3)
b4=A.p(13)
b5=s.a3
b5=b5.gn(b5)
b6=A.p(13)
b7=s.ai
b7=b7.gn(b7)
b8=A.p(13)
b9=s.al
b9=b9.gn(b9)
c0=A.p(13)
c1=s.av
c2=A.p(13)
c3=s.a2
c3=c3.gn(c3)
c4=A.p(13)
c5=s.P
c5=c5.gn(c5)
c6=A.p(13)
c7=s.a6
c7=c7.gn(c7)
c8=A.p(13)
c9=s.G
c9=c9.gn(c9)
d0=A.p(13)
d1=s.ad
d1=d1.gn(d1)
d2=A.p(13)
d3=s.am
d3=d3.gn(d3)
d4=A.p(13)
d5=s.a7
d5=d5.gn(d5)
d6=A.p(13)
d7=s.a8
d7=d7.gn(d7)
d8=A.p(13)
d9=s.V
d9=d9.gn(d9)
e0=A.p(13)
e1=s.ac
e1=e1.gn(e1)
e2=A.p(13)
e3=s.a5
e3=e3.gn(e3)
e4=A.p(13)
e5=s.a_
e5=e5.gn(e5)
e6=A.p(13)
s=s.O
B.m.sb3(this.ad,"BCBC2"+r+(q+p)+(o+n)+(m+l)+(k+j)+(i+h)+(g+f)+(e+d)+(c+b)+(a+a0)+(a1+a2)+(a3+a4)+(a5+a6)+(a7+a8)+(a9+b0)+(b1+b2)+(b3+b4)+(b5+b6)+(b7+b8)+(b9+c0)+(c1+c2)+(c3+c4)+(c5+c6)+(c7+c8)+(c9+d0)+(d1+d2)+(d3+d4)+(d5+d6)+(d7+d8)+(d9+e0)+(e1+e2)+(e3+e4)+(e5+e6)+(s.gn(s)+A.p(13))+"***")},
cO(a){var s,r,q,p,o,n,m
t.V.a(a)
s=this.am
r=s.value
if(r!=null){q=A.a(this.a,"screen")
q.q=0
q.sd4(B.I.cC(r))
r=q.p
if(r.length>=35)if(J.Z(r[2],"BCBC2")){q.q=2
r=q.p
if(0>=r.length)return A.f(r,0)
p=A.bu(r[0],null)
r=q.p
if(1>=r.length)return A.f(r,1)
o=r[1]
r=p==null
if(!r)n=o==="easeInOut"||o==="easeIn"||o==="easeOut"||o==="linear"||o==="strobe"
else n=!1
if(n)m=q.aP(J.fB(p),o)
else if(o!=="easeInOut"&&o!=="easeIn"&&o!=="easeOut"&&o!=="linear"&&o!=="strobe")m="wrong begining\nno mode found"
else m=r?"wrong begining\nno frames found":""}else{r=q.p
if(0>=r.length)return A.f(r,0)
m=J.Z(r[0],"BCBC2")?q.aP(600,"easeInOut"):"wrong begining\nmissing line\nBCBC2"}else m="wrong import length"
if(m!=="")B.m.sb3(s,m)}else B.m.sb3(s,"nothing to import")},
cV(a){var s,r,q=this
t.V.a(a)
s=q.G
if(!q.aw){r=s.classList
r.contains("highlight").toString
r.add("highlight")
r=q.Y.classList
r.contains("highlight").toString
r.add("highlight")
q.aw=!0}else{r=s.classList
r.contains("highlight").toString
r.remove("highlight")
s=q.Y
r=s.classList
r.contains("highlight").toString
r.remove("highlight")
r=s.classList
r.contains("panelBtnOn").toString
r.add("panelBtnOn")
q.aw=!1}}}
A.d5.prototype={
$1(a){var s,r,q="none",p="panelBtn panelBtnOff"
t.V.a(a)
s=this.a
r=s.p.style
r.display="block"
r=s.q.style
r.display=q
r=s.D.style
r.display=q
r=s.aT.style
r.display=q
s.a7.className="panelBtn panelBtnOn"
s.a8.className=p
s.V.className=p
r=s.Y
if(!s.aw)r.className=p
else r.className="panelBtn highlight"},
$S:1}
A.d6.prototype={
$1(a){var s,r,q="none",p="panelBtn panelBtnOff"
t.V.a(a)
s=this.a
r=s.p.style
r.display=q
r=s.q.style
r.display="block"
r=s.D.style
r.display=q
r=s.aT.style
r.display=q
s.a7.className=p
s.a8.className="panelBtn panelBtnOn"
s.V.className=p
r=s.Y
if(!s.aw)r.className=p
else r.className="panelBtn highlight"},
$S:1}
A.d7.prototype={
$1(a){var s,r,q="none",p="panelBtn panelBtnOff"
t.V.a(a)
s=this.a
r=s.p.style
r.display=q
r=s.q.style
r.display=q
r=s.D.style
r.display="block"
r=s.aT.style
r.display=q
s.a7.className=p
s.a8.className=p
s.V.className="panelBtn panelBtnOn"
r=s.Y
if(!s.aw)r.className=p
else r.className="panelBtn highlight"},
$S:1}
A.d8.prototype={
$1(a){var s,r,q="none",p="panelBtn panelBtnOff"
t.V.a(a)
s=this.a
r=s.p.style
r.display=q
r=s.q.style
r.display=q
r=s.D.style
r.display=q
r=s.aT.style
r.display="block"
s.a7.className=p
s.a8.className=p
s.V.className=p
r=s.Y
if(!s.aw)r.className="panelBtn panelBtnOn"
else r.className="panelBtn highlight"},
$S:1}
A.d9.prototype={
$1(a){var s
t.V.a(a)
s=this.a
B.e.sK(s.aj,!0)
B.e.sK(s.a9,!1)
B.e.sK(s.aD,!1)
B.e.sK(s.aE,!1)
$.ac=$.al=0.1},
$S:1}
A.da.prototype={
$1(a){var s
t.V.a(a)
s=this.a
B.e.sK(s.aj,!0)
B.e.sK(s.a9,!0)
B.e.sK(s.aD,!1)
B.e.sK(s.aE,!1)
$.ac=$.al=0.5},
$S:1}
A.db.prototype={
$1(a){var s
t.V.a(a)
s=this.a
B.e.sK(s.aj,!0)
B.e.sK(s.a9,!0)
B.e.sK(s.aD,!0)
B.e.sK(s.aE,!1)
$.ac=$.al=1},
$S:1}
A.dc.prototype={
$1(a){var s
t.V.a(a)
s=this.a
B.e.sK(s.aj,!0)
B.e.sK(s.a9,!0)
B.e.sK(s.aD,!0)
B.e.sK(s.aE,!0)
$.ac=$.al=3},
$S:1}
A.dd.prototype={
$1(a){t.V.a(a)
B.k.cY(A.a(A.a(this.a.a,"screen").w,"_canvas"))},
$S:1}
A.de.prototype={
$1(a){var s,r,q="easeInOut"
t.V.a(a)
s=A.a(this.a.a,"screen")
r=s.ag
if(r.a!==0)r.j(q,0,600)
r=s.ah
if(r.a!==1)r.j(q,1,600)
r=s.ak
if(r.a!==1)r.j(q,1,600)
r=s.H
if(r.a!==20)r.j(q,20,600)
r=s.I
if(r.a!==20)r.j(q,20,600)
r=s.J
if(r.a!==20)r.j(q,20,600)
r=s.M
if(r.a!==0)r.j(q,0,600)
r=s.L
if(r.a!==0)r.j(q,0,600)
r=s.N
if(r.a!==0)r.j(q,0,600)
r=s.a0
if(r.a!==1)r.j(q,1,600)
r=s.X
if(r.a!==70)r.j(q,70,600)
r=s.a1
if(r.a!==0)r.j(q,0,600)
r=s.al
if(r.a!==2.025)r.j(q,2.025,600)
r=s.a2
if(r.a!==1)r.j(q,1,600)
r=s.u
if(A.a(r.b,"r")!==203||A.a(r.e,"g")!==56||A.a(r.w,"b")!==28)r.aQ(q,203,56,28,600)
r=s.v
if(A.a(r.b,"r")!==203||A.a(r.e,"g")!==28||A.a(r.w,"b")!==174)r.aQ(q,203,28,174,600)
r=s.A
if(A.a(r.b,"r")!==174||A.a(r.e,"g")!==203||A.a(r.w,"b")!==28)r.aQ(q,174,203,28,600)
r=s.ai
if(r.a!==1)r.j(q,1,600)
r=s.a3
if(r.a!==0.5)r.j(q,0.5,600)
r=s.a4
if(r.a!==200)r.j(q,200,600)
r=s.ac
if(r.a!==1)r.j(q,1,600)
r=s.a5
if(r.a!==0)r.j(q,0,600)
r=s.a_
if(r.a!==0)r.j(q,0,600)
r=s.O
if(r.a!==0)r.j(q,0,600)
r=s.P
if(r.a!==1)r.j(q,1,600)
r=s.a6
if(r.a!==1)r.j(q,1,600)
r=s.G
if(r.a!==1)r.j(q,1,600)
r=s.ad
if(r.a!==1)r.j(q,1,600)
r=s.am
if(r.a!==0)r.j(q,0,600)
r=s.a7
if(r.a!==1)r.j(q,1,600)
r=s.a8
if(r.a!==1)r.j(q,1,600)
r=s.V
if(r.a!==0)r.j(q,0,600)
r=s.a9
r.a=1
r.j("linear",600,600)
s.aD=!1},
$S:1}
A.df.prototype={
$1(a){var s,r,q,p="screen"
if(window.innerWidth!=null){s=window.innerWidth
s.toString
r=s}else r=0
if(r<640){s=this.a
A.a(s.a,p).au("LD")
A.a(s.a,p).ap()}else{s=this.a
q=s.a
if(r<854){A.a(q,p).au("MD")
A.a(s.a,p).ap()}else{A.a(q,p).au("SD")
A.a(s.a,p).ap()}}},
$S:0}
A.dg.prototype={
au(a){var s,r,q=this
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
break}q.c=B.c.aa(s/2)
q.d=B.c.aa(r/2)
B.k.saV(A.a(q.w,"_canvas"),q.a)
B.k.saU(A.a(q.w,"_canvas"),q.b)
A.a(q.x,"_ctx2d").lineCap=q.av},
bi(a){var s=this,r=Math.cos(s.a1.a+a),q=s.ag.a,p=Math.cos(s.ah.a*(s.a1.a+a)),o=Math.max(0,Math.floor(s.P.a*s.G.a*a*0.999/s.X.a)),n=Math.floor(s.G.a*a*0.999/s.X.a),m=s.a6.a,l=s.P.a,k=s.a7.a,j=r+q*p+m*(o-0.5*(l-1))*k-m*n*l*k+B.c.aR(n,2)*m*0.5*s.am.a
r=s.V.a
if(r>0&&s.Y.length!==0){q=s.Y
p=B.c.W(o)
l=q.length
p=A.S(Math.min(p,l-1))
if(!(p>=0&&p<l))return A.f(q,p)
j+=q[p]*m*r}return j},
bk(a){var s,r=this,q=Math.sin(r.a1.a+r.ak.a*a),p=r.ag.a,o=Math.sin(r.ah.a*(r.a1.a+a)),n=r.ad.a,m=Math.floor(r.G.a*a*0.999/r.X.a),l=r.G.a,k=q+p*o+n*(m-0.5*(l-1))*r.a8.a
if(r.V.a>0&&r.aj.length!==0){s=Math.max(0,Math.floor(r.P.a*l*a*0.999/r.X.a))
q=r.aj
p=B.c.W(s)
o=q.length
p=A.S(Math.min(p,o-1))
if(!(p>=0&&p<o))return A.f(q,p)
k+=q[p]*r.ad.a*r.V.a}return k},
bj(a){var s=this,r=s.e,q=s.r,p=s.ac.a
return a*r*q*p+s.c+s.a5.a*r*q*p},
bl(a){var s=this,r=s.f,q=s.r,p=s.ac.a
return a*r*q*p+s.d+s.a_.a*r*q*p},
ap(){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3=this,c4="_ctx2d",c5="r",c6="g",c7="b"
A.a(c3.x,c4).clearRect(0,0,c3.a,c3.b)
B.t.scI(A.a(c3.x,c4),"rgba(0, 0, 0, 1)")
A.a(c3.x,c4).rect(0,0,c3.a,c3.b)
A.a(c3.x,c4).fill()
A.a(c3.x,c4).globalCompositeOperation="screen"
c3.aE=0
for(s=c3.v,r=c3.A,q=c3.u,p=t.a,o=t.r,n=t.c4,m=0,l=-1,k=!0,j=!1;m<c3.X.a;){m+=c3.a0.a*0.5*(1-c3.a2.a)
i=c3.bi(m)
h=c3.bk(m)
if(c3.O.a!==0){g=Math.atan2(h,i)
f=i*i+h*h
e=Math.sqrt(f)*Math.cos(g+c3.O.a)
d=Math.sqrt(f)*Math.sin(g+c3.O.a)}else{d=h
e=i}m+=c3.a0.a*0.5*c3.a2.a
i=c3.bi(m)
h=c3.bk(m)
if(c3.O.a!==0){g=Math.atan2(h,i)
f=i*i+h*h
c=Math.sqrt(f)*Math.cos(g+c3.O.a)
b=Math.sqrt(f)*Math.sin(g+c3.O.a)}else{b=h
c=i}m+=c3.a0.a*0.5*c3.a2.a
i=c3.bi(m)
h=c3.bk(m)
if(c3.O.a!==0){g=Math.atan2(h,i)
f=i*i+h*h
a=Math.sqrt(f)*Math.cos(g+c3.O.a)
a0=Math.sqrt(f)*Math.sin(g+c3.O.a)}else{a0=h
a=i}m+=c3.a0.a*0.5*(1-c3.a2.a)
f=(e+a)/2
a1=c3.al.a
a2=(d+a0)/2
a3=Math.pow(c-e,2)+Math.pow(b-d,2)
a4=Math.pow(a-c,2)+Math.pow(a0-b,2)
a5=Math.pow(a3/a4,2)
a6=Math.pow(a4/a3,2)
a7=c3.bj(e)
a8=c3.bl(d)
a9=c3.bj(a)
b0=c3.bl(a0)
if(!(a5+a6>3.4)){a5=c3.a
a6=-a5/2
if(!(a7<a6&&a9<a6)){a5=3*a5/2
if(!(a7>a5&&a9>a5)){a5=c3.b
a6=-a5/2
if(!(a8<a6&&b0<a6)){a5=3*a5/2
a5=a8>a5&&b0>a5}else a5=!0}else a5=!0}else a5=!0}else a5=!0
if(a5){if(j)A.a(c3.x,c4).stroke()
k=!0
j=!1}else{a5=c3.X.a
a6=c3.I
b1=c3.r
b2=2*m/a5
a6=a6.a
if(m<a5/2){a5=c3.H.a
b3=B.c.be((a5+(a6-a5)*b2)*b1)
b1=c3.M.a
b4=(b1+(c3.L.a-b1)*b2)*c3.r}else{--b2
b3=B.c.be((a6+(c3.J.a-a6)*b2)*b1)
a5=c3.L.a
b4=(a5+(c3.N.a-a5)*b2)*c3.r}b5=m/c3.X.a*c3.ai.a
b6=b5-Math.floor(b5/2)*2
b7=b6<=1?b6:2-b6
a5=c3.a3.a
a6=c3.a4.a
if(b7<a5){b8=Math.floor(a6*b7)/(c3.a3.a*c3.a4.a)
b9=A.a(q.b,c5)+(A.a(s.b,c5)-A.a(q.b,c5))*b8
c0=A.a(q.e,c6)+(A.a(s.e,c6)-A.a(q.e,c6))*b8
c1=A.a(q.w,c7)+(A.a(s.w,c7)-A.a(q.w,c7))*b8}else{b8=Math.floor((b7-a5)*a6)/((1-c3.a3.a)*c3.a4.a)
b9=A.a(s.b,c5)+(A.a(r.b,c5)-A.a(s.b,c5))*b8
c0=A.a(s.e,c6)+(A.a(r.e,c6)-A.a(s.e,c6))*b8
c1=A.a(s.w,c7)+(A.a(r.w,c7)-A.a(s.w,c7))*b8}c2=b4<1?0:B.c.bN(b4)
if(b8===l)if(!k){a5=c3.a2.a
a5=a5<0.95||a5>1.1}else a5=!0
else a5=!0
if(a5){if(j)A.a(c3.x,c4).stroke()
B.t.sc_(A.a(c3.x,c4),"rgba("+B.c.W(b9)+", "+B.c.W(c0)+", "+B.c.W(c1)+", 1)")
A.a(c3.x,c4).lineWidth=b3
a5=c3.x
if(c2>0){a5=A.a(a5,c4)
a6=o.a(A.w([c2,3*c2],n))
b1=!!a5.setLineDash
b1.toString
if(b1)a5.setLineDash(a6)
else{b1=!!a5.webkitLineDash
b1.toString
if(b1)a5.webkitLineDash=a6}}else{a5=A.a(a5,c4)
a6=o.a(A.w([],p))
b1=!!a5.setLineDash
b1.toString
if(b1)a5.setLineDash(a6)
else{b1=!!a5.webkitLineDash
b1.toString
if(b1)a5.webkitLineDash=a6}}A.a(c3.x,c4).beginPath()
A.a(c3.x,c4).moveTo(a7,a8)
l=b8
k=!1}if(c3.al.a===0)A.a(c3.x,c4).lineTo(a9,b0)
A.a(c3.x,c4).quadraticCurveTo(c3.bj(f+(c-f)*a1),c3.bl(a2+(b-a2)*a1),a9,b0)
j=!0}++c3.aE}if(j)A.a(c3.x,c4).stroke()},
aP(d0,d1){var s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5,b6,b7,b8,b9,c0,c1,c2,c3,c4,c5=this,c6="easeInOut",c7=c5.p,c8=c7.length,c9=c5.q
if(c8>=35+c9){c9=1+c9
if(!(c9<c8))return A.f(c7,c9)
s=A.x(c7[c9])
s.toString
c7=c5.ag
r=s<c7.d||s>c7.e?"aParam out of range":""
c7=c5.p
c8=2+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
q=A.x(c7[c8])
q.toString
c7=c5.ah
if(q<c7.d||q>c7.e)r="bParam out of range"
c7=c5.p
c8=3+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
p=A.x(c7[c8])
p.toString
c7=c5.ak
if(p<c7.d||p>c7.e)r="cParam out of range"
c7=c5.p
c8=4+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
o=A.x(c7[c8])
o.toString
c7=c5.a1
if(o<c7.d||o>c7.e)r="beginT out of range"
c7=c5.p
c8=5+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
n=A.x(c7[c8])
n.toString
c7=c5.X
if(n<c7.d||n>c7.e)r="maxT out of range"
c7=c5.p
c8=6+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
m=A.x(c7[c8])
m.toString
c7=c5.a0
if(m<c7.d||m>c7.e)r="stepT out of range"
c7=c5.p
c8=7+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
l=A.x(c7[c8])
l.toString
c7=c5.H
if(l<c7.d||l>c7.e)r="lw1 out of range"
c7=c5.p
c8=8+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
k=A.x(c7[c8])
k.toString
c7=c5.I
if(k<c7.d||k>c7.e)r="lw2 out of range"
c7=c5.p
c8=9+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
j=A.x(c7[c8])
j.toString
c7=c5.J
if(j<c7.d||j>c7.e)r="lw3 out of range"
c7=c5.p
c8=10+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
i=A.x(c7[c8])
i.toString
c7=c5.M
if(i<c7.d||i>c7.e)r="dash1 out of range"
c7=c5.p
c8=11+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
h=A.x(c7[c8])
h.toString
c7=c5.L
if(h<c7.d||h>c7.e)r="dash2 out of range"
c7=c5.p
c8=12+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
g=A.x(c7[c8])
g.toString
c7=c5.N
if(g<c7.d||g>c7.e)r="dash3 out of range"
c7=c5.p
c8=13+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
f=A.bu(c7[c8],null)
f.toString
if(f<0||f>16777216)r="c1 out of range"
c7=c5.p
c8=14+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
e=A.bu(c7[c8],null)
e.toString
if(e<0||e>16777216)r="c2 out of range"
c7=c5.p
c8=15+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
d=A.bu(c7[c8],null)
d.toString
if(d<0||d>16777216)r="c3 out of range"
c7=c5.p
c8=16+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
c=A.x(c7[c8])
c.toString
c7=c5.a4
if(c<c7.d||c>c7.e)r="gradient out of range"
c7=c5.p
c8=17+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
b=A.x(c7[c8])
b.toString
c7=c5.a3
if(b<c7.d||b>c7.e)r="pivot out of range"
c7=c5.p
c8=18+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a=A.x(c7[c8])
a.toString
c7=c5.ai
if(a<c7.d||a>c7.e)r="distrib out of range"
c7=c5.p
c8=19+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a0=A.x(c7[c8])
a0.toString
c7=c5.al
if(a0<c7.d||a0>c7.e)r="bzr out of range"
c7=c5.p
c8=20+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
c5.scB(c7[c8])
c7=c5.aZ
if(c7!=="butt"&&c7!=="round"&&c7!=="square")r="capsStyle out of range"
c7=c5.p
c8=21+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a1=A.x(c7[c8])
a1.toString
c7=c5.a2
if(a1<c7.d||a1>c7.e)r="gapsRatio out of range"
c7=c5.p
c8=22+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a2=A.x(c7[c8])
a2.toString
c7=c5.P
if(a2<c7.d||a2>c7.e)r="splitHnumber out of range"
c7=c5.p
c8=23+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a3=A.x(c7[c8])
a3.toString
c7=c5.a6
if(a3<c7.d||a3>c7.e)r="splitHwidth out of range"
c7=c5.p
c8=24+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a4=A.x(c7[c8])
a4.toString
c7=c5.G
if(a4<c7.d||a4>c7.e)r="splitVnumber out of range"
c7=c5.p
c8=25+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a5=A.x(c7[c8])
a5.toString
c7=c5.ad
if(a5<c7.d||a5>c7.e)r="splitVheight out of range"
c7=c5.p
c8=26+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a6=A.x(c7[c8])
a6.toString
c7=c5.am
if(a6<c7.d||a6>c7.e)r="splitQuinc out of range"
c7=c5.p
c8=27+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a7=A.x(c7[c8])
a7.toString
c7=c5.a7
if(a7<c7.d||a7>c7.e)r="flipH out of range"
c7=c5.p
c8=28+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a8=A.x(c7[c8])
a8.toString
c7=c5.a8
if(a8<c7.d||a8>c7.e)r="flipV out of range"
c7=c5.p
c8=29+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
a9=A.x(c7[c8])
a9.toString
c7=c5.V
if(a9<c7.d||a9>c7.e)r="explode out of range"
c7=c5.p
c8=30+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
b0=A.x(c7[c8])
b0.toString
c7=c5.ac
if(b0<c7.d||b0>c7.e)r="zoom out of range"
c7=c5.p
c8=31+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
b1=A.x(c7[c8])
b1.toString
c7=c5.a5
if(b1<c7.d||b1>c7.e)r="xOrigine out of range"
c7=c5.p
c8=32+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
b2=A.x(c7[c8])
b2.toString
c7=c5.a_
if(b2<c7.d||b2>c7.e)r="yOrigine out of range"
c7=c5.p
c8=33+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
b3=A.x(c7[c8])
b3.toString
c7=c5.O
if(b3<c7.d||b3>c7.e)r="rotation out of range"
c7=c5.p
c8=34+c5.q
if(!(c8<c7.length))return A.f(c7,c8)
if(!J.Z(c7[c8],"***"))r="wrong end of vars"
if(r===""){if(c5.G.a===1)c5.sbK(A.w([],t.t))
if(c5.P.a===1)c5.sbJ(A.w([],t.t))
b4=B.c.aa((a2+1)*a4)
b5=c5.Y.length
if(b5<b4)for(;b5<b4;++b5){c7=c5.Y
B.b.B(c7,2*(B.j.aF()-0.5))
c7=c5.aj
B.b.B(c7,2*(B.j.aF()-0.5))}c7=c5.ag
if(c7.a!==s)c7.j(d1,s,d0)
c7=c5.ah
if(c7.a!==q)c7.j(d1,q,d0)
c7=c5.ak
if(c7.a!==p)c7.j(d1,p,d0)
c7=c5.H
if(c7.a!==l)c7.j(d1,l,d0)
c7=c5.I
if(c7.a!==k)c7.j(d1,k,d0)
c7=c5.J
if(c7.a!==j)c7.j(d1,j,d0)
c7=c5.M
if(c7.a!==i)c7.j(d1,i,d0)
c7=c5.L
if(c7.a!==h)c7.j(d1,h,d0)
c7=c5.N
if(c7.a!==g)c7.j(d1,g,d0)
c7=c5.a0
if(c7.a!==m)c7.j(d1,m,d0)
c7=c5.X
if(c7.a!==n)c7.j(d1,n,d0)
c7=c5.a1
if(c7.a!==o)c7.j(d1,o,d0)
c7=c5.al
if(c7.a!==a0)c7.j(d1,a0,d0)
c7=c5.a2
if(c7.a!==a1)c7.j(d1,a1,d0)
b6=B.f.af(f,16)&255
b7=B.f.af(f,8)&255
b8=B.f.af(f,0)&255
b9=B.f.af(e,16)&255
c0=B.f.af(e,8)&255
c1=B.f.af(e,0)&255
c2=B.f.af(d,16)&255
c3=B.f.af(d,8)&255
c4=B.f.af(d,0)&255
c7=c5.u
if(A.a(c7.b,"r")!==b6||A.a(c7.e,"g")!==b7||A.a(c7.w,"b")!==b8)c7.aQ(c6,b6,b7,b8,d0)
c7=c5.v
if(A.a(c7.b,"r")!==b9||A.a(c7.e,"g")!==c0||A.a(c7.w,"b")!==c1)c7.aQ(c6,b9,c0,c1,d0)
c7=c5.A
if(A.a(c7.b,"r")!==c2||A.a(c7.e,"g")!==c3||A.a(c7.w,"b")!==c4)c7.aQ(c6,c2,c3,c4,d0)
c7=c5.ai
if(c7.a!==a)c7.j(d1,a,d0)
c7=c5.a3
if(c7.a!==b)c7.j(d1,b,d0)
c7=c5.a4
if(c7.a!==c)c7.j(d1,c,d0)
c7=c5.ac
if(c7.a!==b0)c7.j(d1,b0,d0)
c7=c5.a5
if(c7.a!==b1)c7.j(d1,b1,d0)
c7=c5.a_
if(c7.a!==b2)c7.j(d1,b2,d0)
c7=c5.O
if(c7.a!==b3)c7.j(d1,b3,d0)
c7=c5.P
if(c7.a!==a2)c7.j(d1,a2,d0)
c7=c5.a6
if(c7.a!==a3)c7.j(d1,a3,d0)
c7=c5.G
if(c7.a!==a4)c7.j(d1,a4,d0)
c7=c5.ad
if(c7.a!==a5)c7.j(d1,a5,d0)
c7=c5.am
if(c7.a!==a6)c7.j(d1,a6,d0)
c7=c5.a7
if(c7.a!==a7)c7.j(d1,a7,d0)
c7=c5.a8
if(c7.a!==a8)c7.j(d1,a8,d0)
c7=c5.V
if(c7.a!==a9)c7.j(d1,a9,d0)
c7=c5.a9
c7.a=1
c7.j("linear",d0,d0)
c5.aD=!1
r=""}}else r="wrong import length"
return r},
bY(){var s,r,q,p=this,o=window
o.toString
s=t.m
r=s.a(new A.dh(p))
t.Z.a(null)
q=t.B
A.c(o,"aParamUp",r,!1,q)
r=window
r.toString
A.c(r,"aParamDown",s.a(new A.di(p)),!1,q)
r=window
r.toString
A.c(r,"bParamUp",s.a(new A.dj(p)),!1,q)
r=window
r.toString
A.c(r,"bParamDown",s.a(new A.dv(p)),!1,q)
r=window
r.toString
A.c(r,"cParamUp",s.a(new A.dG(p)),!1,q)
r=window
r.toString
A.c(r,"cParamDown",s.a(new A.dR(p)),!1,q)
r=window
r.toString
A.c(r,"beginTUp",s.a(new A.e1(p)),!1,q)
r=window
r.toString
A.c(r,"beginTDown",s.a(new A.eb(p)),!1,q)
r=window
r.toString
A.c(r,"maxTUp",s.a(new A.ec(p)),!1,q)
r=window
r.toString
A.c(r,"maxTDown",s.a(new A.ed(p)),!1,q)
r=window
r.toString
A.c(r,"stepTUp",s.a(new A.ee(p)),!1,q)
r=window
r.toString
A.c(r,"stepTDown",s.a(new A.dk(p)),!1,q)
r=window
r.toString
A.c(r,"switchLineControlled",s.a(new A.dl(p)),!1,q)
r=window
r.toString
A.c(r,"lwUp",s.a(new A.dm(p)),!1,q)
r=window
r.toString
A.c(r,"lwDown",s.a(new A.dn(p)),!1,q)
r=window
r.toString
A.c(r,"dashedUp",s.a(new A.dp(p)),!1,q)
r=window
r.toString
A.c(r,"dashedDown",s.a(new A.dq(p)),!1,q)
r=window
r.toString
A.c(r,"switchColorControlled",s.a(new A.dr(p)),!1,q)
r=window
r.toString
A.c(r,"colorHueLeft",s.a(new A.ds(p)),!1,q)
r=window
r.toString
A.c(r,"colorHueRight",s.a(new A.dt(p)),!1,q)
r=window
r.toString
A.c(r,"colorSatUp",s.a(new A.du(p)),!1,q)
r=window
r.toString
A.c(r,"colorSatDown",s.a(new A.dw(p)),!1,q)
r=window
r.toString
A.c(r,"colorLightUp",s.a(new A.dx(p)),!1,q)
r=window
r.toString
A.c(r,"colorLightDown",s.a(new A.dy(p)),!1,q)
r=window
r.toString
A.c(r,"pivotRight",s.a(new A.dz(p)),!1,q)
r=window
r.toString
A.c(r,"pivotLeft",s.a(new A.dA(p)),!1,q)
r=window
r.toString
A.c(r,"gradientUp",s.a(new A.dB(p)),!1,q)
r=window
r.toString
A.c(r,"gradientDown",s.a(new A.dC(p)),!1,q)
r=window
r.toString
A.c(r,"distribUp",s.a(new A.dD(p)),!1,q)
r=window
r.toString
A.c(r,"distribDown",s.a(new A.dE(p)),!1,q)
r=window
r.toString
A.c(r,"lineCurve",s.a(new A.dF(p)),!1,q)
r=window
r.toString
A.c(r,"lineStrait",s.a(new A.dH(p)),!1,q)
r=window
r.toString
A.c(r,"lineConc",s.a(new A.dI(p)),!1,q)
r=window
r.toString
A.c(r,"capsRound",s.a(new A.dJ(p)),!1,q)
r=window
r.toString
A.c(r,"capsSquare",s.a(new A.dK(p)),!1,q)
r=window
r.toString
A.c(r,"capsButt",s.a(new A.dL(p)),!1,q)
r=window
r.toString
A.c(r,"gapsLess",s.a(new A.dM(p)),!1,q)
r=window
r.toString
A.c(r,"gapsMore",s.a(new A.dN(p)),!1,q)
r=window
r.toString
A.c(r,"splitHorzUp",s.a(new A.dO(p)),!1,q)
r=window
r.toString
A.c(r,"splitHorzDown",s.a(new A.dP(p)),!1,q)
r=window
r.toString
A.c(r,"splitVertUp",s.a(new A.dQ(p)),!1,q)
r=window
r.toString
A.c(r,"splitVertDown",s.a(new A.dS(p)),!1,q)
r=window
r.toString
A.c(r,"splitWidthUp",s.a(new A.dT(p)),!1,q)
r=window
r.toString
A.c(r,"splitWidthDown",s.a(new A.dU(p)),!1,q)
r=window
r.toString
A.c(r,"splitHeightUp",s.a(new A.dV(p)),!1,q)
r=window
r.toString
A.c(r,"splitHeightDown",s.a(new A.dW(p)),!1,q)
r=window
r.toString
A.c(r,"splitQuincSet",s.a(new A.dX(p)),!1,q)
r=window
r.toString
A.c(r,"zoomUp",s.a(new A.dY(p)),!1,q)
r=window
r.toString
A.c(r,"zoomDown",s.a(new A.dZ(p)),!1,q)
r=window
r.toString
A.c(r,"panLeft",s.a(new A.e_(p)),!1,q)
r=window
r.toString
A.c(r,"panUp",s.a(new A.e0(p)),!1,q)
r=window
r.toString
A.c(r,"panRight",s.a(new A.e2(p)),!1,q)
r=window
r.toString
A.c(r,"panDown",s.a(new A.e3(p)),!1,q)
r=window
r.toString
A.c(r,"rotLeft",s.a(new A.e4(p)),!1,q)
r=window
r.toString
A.c(r,"rotRight",s.a(new A.e5(p)),!1,q)
r=window
r.toString
A.c(r,"flipH",s.a(new A.e6(p)),!1,q)
r=window
r.toString
A.c(r,"flipV",s.a(new A.e7(p)),!1,q)
r=window
r.toString
A.c(r,"explodeUp",s.a(new A.e8(p)),!1,q)
r=window
r.toString
A.c(r,"explodeDown",s.a(new A.e9(p)),!1,q)
r=window
r.toString
A.c(r,"center",s.a(new A.ea(p)),!1,q)},
scB(a){this.aZ=A.F(a)},
sbJ(a){this.Y=t.p.a(a)},
sbK(a){this.aj=t.p.a(a)},
sd4(a){this.p=t.aY.a(a)}}
A.dh.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ag
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.di.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ag
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.dj.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ah
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.dv.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ah
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.dG.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ak
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.dR.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ak
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.e1.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a1
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.eb.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a1
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.ec.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.X
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.ed.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.X
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.ee.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a0
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.dk.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a0
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.dl.prototype={
$1(a){var s,r,q="selected"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
r=s.Z
if(r==="L1"){s.Z="L2"
s.I.k(0,q)
s.H.h(0)
s.J.h(0)
s.L.k(0,q)
s.M.h(0)
s.N.h(0)}else if(r==="L2"){s.Z="L3"
s.J.k(0,q)
s.H.h(0)
s.I.h(0)
s.N.k(0,q)
s.M.h(0)
s.L.h(0)}else if(r==="L3"){s.Z="L_"
s.H.k(0,q)
s.I.k(0,q)
s.J.k(0,q)
s.M.k(0,q)
s.L.k(0,q)
s.N.k(0,q)}else if(r==="L_"){s.Z="L1"
s.H.k(0,q)
s.I.h(0)
s.J.h(0)
s.M.k(0,q)
s.L.h(0)
s.N.h(0)}}},
$S:0}
A.dm.prototype={
$1(a){var s,r="linearUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.Z){case"L1":s.H.k(0,r)
break
case"L2":s.I.k(0,r)
break
case"L3":s.J.k(0,r)
break
case"L_":s.H.k(0,r)
s.I.k(0,r)
s.J.k(0,r)
break}}else{s=this.a
switch(s.Z){case"L1":s.H.h(0)
break
case"L2":s.I.h(0)
break
case"L3":s.J.h(0)
break
case"L_":s.H.h(0)
s.I.h(0)
s.J.h(0)
break}}},
$S:0}
A.dn.prototype={
$1(a){var s,r="linearDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.Z){case"L1":s.H.k(0,r)
break
case"L2":s.I.k(0,r)
break
case"L3":s.J.k(0,r)
break
case"L_":s.H.k(0,r)
s.I.k(0,r)
s.J.k(0,r)
break}}else{s=this.a
switch(s.Z){case"L1":s.H.h(0)
break
case"L2":s.I.h(0)
break
case"L3":s.J.h(0)
break
case"L_":s.H.h(0)
s.I.h(0)
s.J.h(0)
break}}},
$S:0}
A.dp.prototype={
$1(a){var s,r="linearUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.Z){case"L1":s.M.k(0,r)
break
case"L2":s.L.k(0,r)
break
case"L3":s.N.k(0,r)
break
case"L_":s.M.k(0,r)
s.L.k(0,r)
s.N.k(0,r)
break}}else{s=this.a
switch(s.Z){case"L1":s.M.h(0)
break
case"L2":s.L.h(0)
break
case"L3":s.N.h(0)
break
case"L_":s.M.h(0)
s.L.h(0)
s.N.h(0)
break}}},
$S:0}
A.dq.prototype={
$1(a){var s,r="linearDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.Z){case"L1":s.M.k(0,r)
break
case"L2":s.L.k(0,r)
break
case"L3":s.N.k(0,r)
break
case"L_":s.M.k(0,r)
s.L.k(0,r)
s.N.k(0,r)
break}}else{s=this.a
switch(s.Z){case"L1":s.M.h(0)
break
case"L2":s.L.h(0)
break
case"L3":s.N.h(0)
break
case"L_":s.M.h(0)
s.L.h(0)
s.N.h(0)
break}}},
$S:0}
A.dr.prototype={
$1(a){var s,r,q="selected"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
r=s.R
if(r==="C1"){s.R="C2"
s.v.at=q
s.u.at=""
s.A.at=""}else if(r==="C2"){s.R="C3"
s.A.at=q
s.u.at=""
s.v.at=""}else if(r==="C3"){s.R="C_"
s.u.at=q
s.v.at=q
s.A.at=q}else if(r==="C_"){s.R="C1"
s.u.at=q
s.v.at=""
s.A.at=""}}},
$S:0}
A.ds.prototype={
$1(a){var s,r="hueUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.R){case"C1":s.u.at=r
break
case"C2":s.v.at=r
break
case"C3":s.A.at=r
break
case"C_":s.A.at=r
s.v.at=r
s.u.at=r
break}}else{s=this.a
switch(s.R){case"C1":s.u.at=""
break
case"C2":s.v.at=""
break
case"C3":s.A.at=""
break
case"C_":s.A.at=""
s.v.at=""
s.u.at=""
break}}},
$S:0}
A.dt.prototype={
$1(a){var s,r="hueDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.R){case"C1":s.u.at=r
break
case"C2":s.v.at=r
break
case"C3":s.A.at=r
break
case"C_":s.A.at=r
s.v.at=r
s.u.at=r
break}}else{s=this.a
switch(s.R){case"C1":s.u.at=""
break
case"C2":s.v.at=""
break
case"C3":s.A.at=""
break
case"C_":s.A.at=""
s.v.at=""
s.u.at=""
break}}},
$S:0}
A.du.prototype={
$1(a){var s,r="saturationUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.R){case"C1":s.u.at=r
break
case"C2":s.v.at=r
break
case"C3":s.A.at=r
break
case"C_":s.A.at=r
s.v.at=r
s.u.at=r
break}}else{s=this.a
switch(s.R){case"C1":s.u.at=""
break
case"C2":s.v.at=""
break
case"C3":s.A.at=""
break
case"C_":s.A.at=""
s.v.at=""
s.u.at=""
break}}},
$S:0}
A.dw.prototype={
$1(a){var s,r="saturationDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.R){case"C1":s.u.at=r
break
case"C2":s.v.at=r
break
case"C3":s.A.at=r
break
case"C_":s.A.at=r
s.v.at=r
s.u.at=r
break}}else{s=this.a
switch(s.R){case"C1":s.u.at=""
break
case"C2":s.v.at=""
break
case"C3":s.A.at=""
break
case"C_":s.A.at=""
s.v.at=""
s.u.at=""
break}}},
$S:0}
A.dx.prototype={
$1(a){var s,r="lightnessUp"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.R){case"C1":s.u.at=r
break
case"C2":s.v.at=r
break
case"C3":s.A.at=r
break
case"C_":s.A.at=r
s.v.at=r
s.u.at=r
break}}else{s=this.a
switch(s.R){case"C1":s.u.at=""
break
case"C2":s.v.at=""
break
case"C3":s.A.at=""
break
case"C_":s.A.at=""
s.v.at=""
s.u.at=""
break}}},
$S:0}
A.dy.prototype={
$1(a){var s,r="lightnessDown"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
switch(s.R){case"C1":s.u.at=r
break
case"C2":s.v.at=r
break
case"C3":s.A.at=r
break
case"C_":s.A.at=r
s.v.at=r
s.u.at=r
break}}else{s=this.a
switch(s.R){case"C1":s.u.at=""
break
case"C2":s.v.at=""
break
case"C3":s.A.at=""
break
case"C_":s.A.at=""
s.v.at=""
s.u.at=""
break}}},
$S:0}
A.dz.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a3
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dA.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a3
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dB.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a4
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dC.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a4
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dD.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ai
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.dE.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ai
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.dF.prototype={
$1(a){if(A.j(B.a.gm(t.h.a(a))))this.a.al.j("easeInOut",2.025,30)},
$S:0}
A.dH.prototype={
$1(a){if(A.j(B.a.gm(t.h.a(a))))this.a.al.j("easeInOut",0,30)},
$S:0}
A.dI.prototype={
$1(a){if(A.j(B.a.gm(t.h.a(a))))this.a.al.j("easeInOut",-2.025,30)},
$S:0}
A.dJ.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
A.a(s.x,"_ctx2d").lineCap="round"
s.av="selected"}},
$S:0}
A.dK.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
A.a(s.x,"_ctx2d").lineCap="square"
s.av="selected"}},
$S:0}
A.dL.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
A.a(s.x,"_ctx2d").lineCap="butt"
s.av="selected"}},
$S:0}
A.dM.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a2
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dN.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.a2
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dO.prototype={
$1(a){var s,r,q,p
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
r=B.c.aa((s.P.a+1)*s.G.a)
q=s.Y.length
if(q<r)for(p=q+1;p<=r;++p){q=s.Y
B.b.B(q,2*(B.j.aF()-0.5))
q=s.aj
B.b.B(q,2*(B.j.aF()-0.5))}s=s.P
s.j("easeInOut",s.a+1,30)}},
$S:0}
A.dP.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
if(s.P.a===2)s.sbJ(A.w([],t.t))
s=s.P
s.j("easeInOut",s.a-1,30)}},
$S:0}
A.dQ.prototype={
$1(a){var s,r,q,p
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
r=B.c.aa(s.P.a*(s.G.a+1))
q=s.Y.length
if(q<r)for(p=q+1;p<=r;++p){q=s.Y
B.b.B(q,2*(B.j.aF()-0.5))
q=s.aj
B.b.B(q,2*(B.j.aF()-0.5))}s=s.G
s.j("easeInOut",s.a+1,30)}},
$S:0}
A.dS.prototype={
$1(a){var s
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
if(s.G.a===2)s.sbK(A.w([],t.t))
s=s.G
s.j("easeInOut",s.a-1,30)}},
$S:0}
A.dT.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a)))&&this.a.P.a>1,r=this.a.a6
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dU.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a)))&&this.a.P.a>1,r=this.a.a6
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dV.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a)))&&this.a.G.a>1,r=this.a.ad
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dW.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a)))&&this.a.G.a>1,r=this.a.ad
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.dX.prototype={
$1(a){var s,r="easeInOut"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a.am
if(s.a!==0)s.j(r,0,30)
else s.j(r,1,30)}},
$S:0}
A.dY.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ac
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.dZ.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.ac
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.e_.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a,q=r.a5
if(s)q.k(0,"expUp")
else{q.h(0)
r.a_.h(0)}},
$S:0}
A.e0.prototype={
$1(a){var s=this.a
if(A.j(B.a.gm(t.h.a(a))))s.a_.k(0,"expUp")
else{s.a5.h(0)
s.a_.h(0)}},
$S:0}
A.e2.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a,q=r.a5
if(s)q.k(0,"expDown")
else{q.h(0)
r.a_.h(0)}},
$S:0}
A.e3.prototype={
$1(a){var s=this.a
if(A.j(B.a.gm(t.h.a(a))))s.a_.k(0,"expDown")
else{s.a5.h(0)
s.a_.h(0)}},
$S:0}
A.e4.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.O
if(s)r.k(0,"linearDown")
else r.h(0)},
$S:0}
A.e5.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.O
if(s)r.k(0,"linearUp")
else r.h(0)},
$S:0}
A.e6.prototype={
$1(a){var s,r="easeInOut"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a.a7
if(s.a===1)s.j(r,-1,30)
else s.j(r,1,30)}},
$S:0}
A.e7.prototype={
$1(a){var s,r="easeInOut"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a.a8
if(s.a===1)s.j(r,-1,30)
else s.j(r,1,30)}},
$S:0}
A.e8.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.V
if(s)r.k(0,"expUp")
else r.h(0)},
$S:0}
A.e9.prototype={
$1(a){var s=A.j(B.a.gm(t.h.a(a))),r=this.a.V
if(s)r.k(0,"expDown")
else r.h(0)},
$S:0}
A.ea.prototype={
$1(a){var s,r="easeInOut"
if(A.j(B.a.gm(t.h.a(a)))){s=this.a
s.a5.j(r,0,30)
s.a_.j(r,0,30)}},
$S:0}
A.ef.prototype={
c5(a,b,c){var s,r,q,p,o=this,n="_btn",m=t.D.a(document.querySelector(a))
o.a=m
s=t.Z
r=t.W
q=r.i("~(1)?")
r=r.c
if(c){m=A.a(m,n)
q=q.a(new A.eg(b))
s.a(null)
A.c(m,"click",q,!1,r)}else{m=A.a(m,n)
p=q.a(new A.eh(b))
s.a(null)
A.c(m,"mousedown",p,!1,r)
A.c(A.a(o.a,n),"mouseup",q.a(new A.ei(b)),!1,r)
r=t.bq
q=r.i("~(1)?")
r=r.c
A.c(A.a(o.a,n),"touchstart",q.a(new A.ej(b)),!1,r)
A.c(A.a(o.a,n),"touchend",q.a(new A.ek(b)),!1,r)}}}
A.eg.prototype={
$1(a){var s
t.V.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c8(this.a,!0))
s.toString
return s},
$S:1}
A.eh.prototype={
$1(a){var s
t.V.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c8(this.a,!0))
s.toString
return s},
$S:1}
A.ei.prototype={
$1(a){var s
t.V.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c8(this.a,!1))
s.toString
return s},
$S:1}
A.ej.prototype={
$1(a){var s
t.U.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c8(this.a,!0))
s.toString
return s},
$S:10}
A.ek.prototype={
$1(a){var s
t.U.a(a)
s=window
s.toString
s=s.dispatchEvent(A.c8(this.a,!1))
s.toString
return s},
$S:10}
A.el.prototype={
C(){var s,r=this,q="h",p="_rTarget",o="_gTarget",n="_bTarget"
switch(r.at){case"hueUp":s=A.a(r.z,q)+1
r.z=s
if(A.a(s,q)>360)r.z=A.a(r.z,q)-360
r.aK()
break
case"hueDown":s=A.a(r.z,q)-1
r.z=s
if(A.a(s,q)<0)r.z=A.a(r.z,q)+360
r.aK()
break
case"saturationUp":r.Q=A.S(Math.min(100,A.a(r.Q,"s")+1))
r.aK()
break
case"saturationDown":r.Q=A.S(Math.max(0,A.a(r.Q,"s")-1))
r.aK()
break
case"lightnessUp":r.as=A.S(Math.min(100,A.a(r.as,"l")+1))
r.aK()
break
case"lightnessDown":r.as=A.S(Math.max(0,A.a(r.as,"l")-1))
r.aK()
break
case"easeInOut":r.b=A.a(r.c,p)-B.c.aa(A.a(r.d,"_rGap")*(1-r.bf(r.ax/r.ay)))
r.e=A.a(r.f,o)-B.c.aa(A.a(r.r,"_gGap")*(1-r.bf(r.ax/r.ay)))
r.w=A.a(r.x,n)-B.c.aa(A.a(r.y,"_bGap")*(1-r.bf(r.ax/r.ay)))
r.aL()
if(++r.ax>r.ay){r.at=""
r.b=A.a(r.c,p)
r.e=A.a(r.f,o)
r.w=A.a(r.x,n)
r.aL()}break}},
bf(a){return(Math.atan(6*a-3)+1.25)/2.5},
aK(){var s=this,r="color",q=new A.bb(A.a(s.z,"h"),A.a(s.Q,"s"),A.a(s.as,"l"))
s.a=q
s.b=B.c.W(A.a(q,r).az().a)
s.e=B.c.W(A.a(s.a,r).az().b)
s.w=B.c.W(A.a(s.a,r).az().c)},
aL(){var s=this,r="color",q=new A.bw(A.a(s.b,"r"),A.a(s.e,"g"),A.a(s.w,"b"))
s.a=q
s.z=B.c.W(A.a(q,r).b2().a)
s.Q=B.c.W(A.a(s.a,r).b2().b)
s.as=B.c.W(A.a(s.a,r).b2().c)},
aQ(a,b,c,d,e){var s=this
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
A.aK.prototype={
gS(a){var s=this.az()
return 65536*B.c.W(s.a)+256*B.c.W(s.b)+B.c.W(s.c)},
ar(a,b){if(b==null)return!1
return b instanceof A.aK&&this.gS(this)===b.gS(b)}}
A.bb.prototype={
az(){var s,r,q,p=A.w([0,0,0],t.a),o=B.c.aR(this.a/360,1),n=this.c/100
if(o<0.16666666666666666){B.b.E(p,0,1)
B.b.E(p,1,o*6)}else if(o<0.3333333333333333){B.b.E(p,0,2-o*6)
B.b.E(p,1,1)}else if(o<0.5){B.b.E(p,1,1)
B.b.E(p,2,o*6-2)}else if(o<0.6666666666666666){B.b.E(p,1,4-o*6)
B.b.E(p,2,1)}else{s=o*6
if(o<0.8333333333333334){B.b.E(p,0,s-4)
B.b.E(p,2,1)}else{B.b.E(p,0,1)
B.b.E(p,2,6-s)}}s=t.cY
p=A.ey(new A.V(p,t.ad.a(new A.eq(this.b/100)),s),!0,s.i("U.E"))
s=A.ai(p)
r=s.i("y(1)")
s=s.i("V<1,y>")
p=n<0.5?A.ey(new A.V(p,r.a(new A.er(n)),s),!0,s.i("U.E")):A.ey(new A.V(p,r.a(new A.es(n)),s),!0,s.i("U.E"))
s=A.ai(p)
r=s.i("V<1,aa>")
p=A.ey(new A.V(p,s.i("aa(1)").a(new A.et()),r),!0,r.i("U.E"))
r=p.length
if(0>=r)return A.f(p,0)
s=p[0]
if(1>=r)return A.f(p,1)
q=p[1]
if(2>=r)return A.f(p,2)
return new A.bw(s,q,p[2])},
b2(){return this},
l(a){return"h: "+A.r(this.a)+", s: "+A.r(this.b)+"%, l: "+A.r(this.c)+"%"}}
A.eq.prototype={
$1(a){A.bV(a)
return a+(1-this.a)*(0.5-a)},
$S:27}
A.er.prototype={
$1(a){return this.a*2*A.bV(a)},
$S:11}
A.es.prototype={
$1(a){A.bV(a)
return this.a*2*(1-a)+2*a-1},
$S:11}
A.et.prototype={
$1(a){return B.c.aa(A.bV(a)*255)},
$S:28}
A.bw.prototype={
az(){return this},
b2(){var s,r,q=this.a/255,p=this.b/255,o=this.c/255,n=t.t,m=B.b.bP(A.w([q,p,o],n),B.A),l=B.b.bP(A.w([q,p,o],n),B.B),k=m-l
if(m===q)s=60*B.c.aR((p-o)/k,6)
else s=m===p?60*((o-q)/k+2):60*((q-p)/k+4)
if(isNaN(s)||s==1/0||s==-1/0)s=0
r=(m+l)/2
return new A.bb(s,(k===0?0:k/(1-Math.abs(r*2-1)))*100,r*100)},
l(a){return"r: "+A.r(this.a)+", g: "+A.r(this.b)+", b: "+A.r(this.c)},
b1(){return"rgb("+B.c.W(this.a)+", "+B.c.W(this.b)+", "+B.c.W(this.c)+")"}};(function aliases(){var s=J.bf.prototype
s.c0=s.l
s=J.ae.prototype
s.c2=s.l
s=A.t.prototype
s.c1=s.b4
s=A.q.prototype
s.b5=s.ao
s=A.bM.prototype
s.c3=s.aC})();(function installTearOffs(){var s=hunkHelpers._static_1,r=hunkHelpers._static_0,q=hunkHelpers.installStaticTearOff,p=hunkHelpers._instance_1u
s(A,"jP","j0",3)
s(A,"jQ","j1",3)
s(A,"jR","j2",3)
r(A,"hQ","jJ",2)
q(A,"jW",4,null,["$4"],["j4"],12,0)
q(A,"jX",4,null,["$4"],["j5"],12,0)
q(A,"k8",2,null,["$1$2","$2"],["hV",function(a,b){return A.hV(a,b,t.H)}],13,0)
q(A,"k7",2,null,["$1$2","$2"],["hU",function(a,b){return A.hU(a,b,t.H)}],13,0)
var o
p(o=A.c4.prototype,"gbQ","cW",6)
p(o,"gbW","bX",1)
p(o,"gcz","cA",1)
p(o,"gcG","cH",1)
p(o,"gcN","cO",1)
p(o,"gcU","cV",1)})();(function inheritance(){var s=hunkHelpers.mixin,r=hunkHelpers.inherit,q=hunkHelpers.inheritMany
r(A.v,null)
q(A.v,[A.fH,J.bf,J.b4,A.u,A.eG,A.t,A.av,A.N,A.G,A.eJ,A.eD,A.bN,A.I,A.ew,A.bl,A.eT,A.Y,A.cG,A.cR,A.cQ,A.b6,A.bD,A.bG,A.E,A.cA,A.bz,A.cp,A.cq,A.bT,A.bU,A.cI,A.bI,A.bJ,A.H,A.aw,A.aM,A.aO,A.ck,A.bx,A.eV,A.D,A.cN,A.cr,A.em,A.fE,A.aB,A.a0,A.br,A.bM,A.cO,A.aq,A.cM,A.bS,A.fd,A.eM,A.eC,A.f7,A.d_,A.c4,A.dg,A.ef,A.el,A.aK])
q(J.bf,[J.cf,J.bh,J.P,J.C,J.aQ,J.at])
q(J.P,[J.ae,A.o,A.b7,A.cC,A.b,A.en,A.cb,A.eo,A.bn,A.cJ,A.cU])
q(J.ae,[J.cl,J.az,J.a6])
r(J.eu,J.C)
q(J.aQ,[J.bg,J.cg])
q(A.u,[A.bj,A.af,A.ci,A.cx,A.cm,A.b5,A.cE,A.cj,A.a4,A.cy,A.cv,A.aT,A.c7,A.c9])
q(A.t,[A.b9,A.aA])
q(A.b9,[A.U,A.bk])
r(A.V,A.U)
r(A.bB,A.N)
q(A.G,[A.be,A.c5,A.c6,A.cu,A.ft,A.fv,A.eQ,A.eP,A.eZ,A.f6,A.eH,A.fa,A.ep,A.eL,A.eU,A.eB,A.eA,A.fb,A.fc,A.fh,A.fy,A.fz,A.d5,A.d6,A.d7,A.d8,A.d9,A.da,A.db,A.dc,A.dd,A.de,A.df,A.dh,A.di,A.dj,A.dv,A.dG,A.dR,A.e1,A.eb,A.ec,A.ed,A.ee,A.dk,A.dl,A.dm,A.dn,A.dp,A.dq,A.dr,A.ds,A.dt,A.du,A.dw,A.dx,A.dy,A.dz,A.dA,A.dB,A.dC,A.dD,A.dE,A.dF,A.dH,A.dI,A.dJ,A.dK,A.dL,A.dM,A.dN,A.dO,A.dP,A.dQ,A.dS,A.dT,A.dU,A.dV,A.dW,A.dX,A.dY,A.dZ,A.e_,A.e0,A.e2,A.e3,A.e4,A.e5,A.e6,A.e7,A.e8,A.e9,A.ea,A.eg,A.eh,A.ei,A.ej,A.ek,A.eq,A.er,A.es,A.et])
r(A.aP,A.be)
r(A.bs,A.af)
q(A.cu,[A.co,A.aI])
r(A.cz,A.b5)
r(A.bp,A.I)
q(A.bp,[A.bi,A.cB])
q(A.c6,[A.fu,A.f_,A.ez,A.fl,A.ff,A.fg,A.eO])
r(A.bP,A.cE)
q(A.c5,[A.eR,A.eS,A.fi,A.eW,A.f2,A.f0,A.eY,A.f1,A.eX,A.f5,A.f4,A.f3,A.eI,A.fp,A.f9,A.d0,A.d1])
q(A.bD,[A.bC,A.bO])
r(A.cL,A.bT)
r(A.bL,A.bU)
r(A.bH,A.bL)
r(A.bm,A.bJ)
r(A.ev,A.cq)
q(A.a4,[A.bv,A.ce])
q(A.o,[A.i,A.aV])
q(A.i,[A.q,A.a_,A.ap,A.aW])
q(A.q,[A.h,A.d])
q(A.h,[A.aG,A.c3,A.aH,A.am,A.aJ,A.an,A.aN,A.cd,A.as,A.bd,A.au,A.cn,A.ax,A.bA,A.cs,A.ct,A.aU,A.ay])
r(A.b8,A.cC)
q(A.b,[A.ao,A.a1])
r(A.bc,A.ap)
q(A.a1,[A.Q,A.a7])
r(A.J,A.bm)
r(A.cK,A.cJ)
r(A.bq,A.cK)
r(A.cV,A.cU)
r(A.bK,A.cV)
r(A.cD,A.cB)
r(A.bF,A.bz)
r(A.bE,A.bF)
r(A.cF,A.cp)
r(A.cP,A.bM)
r(A.fe,A.fd)
r(A.eN,A.eM)
r(A.aR,A.d)
q(A.aK,[A.bb,A.bw])
s(A.bJ,A.H)
s(A.bU,A.aw)
s(A.cC,A.em)
s(A.cJ,A.H)
s(A.cK,A.a0)
s(A.cU,A.H)
s(A.cV,A.a0)})()
var v={typeUniverse:{eC:new Map(),tR:{},eT:{},tPV:{},sEA:[]},mangledGlobalNames:{aa:"int",W:"double",y:"num",n:"String",M:"bool",D:"Null",O:"List"},mangledNames:{},types:["~(b)","~(Q)","~()","~(~())","D(@)","D()","~(y)","M(X)","M(n)","~(@)","~(a7)","y(y)","M(q,n,n,aB)","0^(0^,0^)<y>","@(@)","@(@,n)","@(n)","D(~())","D(v,aS)","E<@>(@)","~(v?,v?)","M(i)","n(n)","~(i,i?)","~(@,@)","D(@,@)","@(@,@)","W(y)","aa(y)"],interceptorsByTag:null,leafTags:null,arrayRti:Symbol("$ti")}
A.ji(v.typeUniverse,JSON.parse('{"cl":"ae","az":"ae","a6":"ae","kg":"b","kn":"b","kf":"d","ko":"d","kh":"h","kp":"h","ks":"i","km":"i","kE":"ap","kq":"Q","kk":"a1","kj":"a_","kt":"a_","cf":{"M":[]},"bh":{"D":[]},"ae":{"hc":[]},"C":{"O":["1"],"t":["1"]},"eu":{"C":["1"],"O":["1"],"t":["1"]},"b4":{"N":["1"]},"aQ":{"W":[],"y":[]},"bg":{"W":[],"aa":[],"y":[]},"cg":{"W":[],"y":[]},"at":{"n":[],"hh":[]},"bj":{"u":[]},"b9":{"t":["1"]},"U":{"t":["1"]},"av":{"N":["1"]},"V":{"U":["2"],"t":["2"],"U.E":"2","t.E":"2"},"aA":{"t":["1"],"t.E":"1"},"bB":{"N":["1"]},"be":{"G":[],"a5":[]},"aP":{"G":[],"a5":[]},"bs":{"af":[],"u":[]},"ci":{"u":[]},"cx":{"u":[]},"bN":{"aS":[]},"G":{"a5":[]},"c5":{"G":[],"a5":[]},"c6":{"G":[],"a5":[]},"cu":{"G":[],"a5":[]},"co":{"G":[],"a5":[]},"aI":{"G":[],"a5":[]},"cm":{"u":[]},"cz":{"u":[]},"bi":{"I":["1","2"],"bo":["1","2"],"I.K":"1","I.V":"2"},"bk":{"t":["1"],"t.E":"1"},"bl":{"N":["1"]},"cE":{"u":[]},"bP":{"af":[],"u":[]},"E":{"ar":["1"]},"cQ":{"iY":[]},"b6":{"u":[]},"bC":{"bD":["1"]},"bO":{"bD":["1"]},"bT":{"hs":[]},"cL":{"bT":[],"hs":[]},"bH":{"aw":["1"],"hn":["1"],"t":["1"],"aw.E":"1"},"bI":{"N":["1"]},"bm":{"H":["1"],"O":["1"],"t":["1"]},"bp":{"I":["1","2"],"bo":["1","2"]},"I":{"bo":["1","2"]},"bL":{"aw":["1"],"hn":["1"],"t":["1"]},"W":{"y":[]},"aa":{"y":[]},"n":{"hh":[]},"b5":{"u":[]},"af":{"u":[]},"cj":{"u":[]},"a4":{"u":[]},"bv":{"u":[]},"ce":{"u":[]},"cy":{"u":[]},"cv":{"u":[]},"aT":{"u":[]},"c7":{"u":[]},"ck":{"u":[]},"bx":{"u":[]},"c9":{"u":[]},"cN":{"aS":[]},"q":{"i":[],"o":[]},"Q":{"b":[]},"i":{"o":[]},"a7":{"b":[]},"aB":{"X":[]},"h":{"q":[],"i":[],"o":[]},"aG":{"q":[],"i":[],"o":[]},"c3":{"q":[],"i":[],"o":[]},"aH":{"q":[],"i":[],"o":[]},"am":{"q":[],"i":[],"o":[]},"aJ":{"q":[],"i":[],"o":[]},"an":{"q":[],"i":[],"o":[]},"a_":{"i":[],"o":[]},"ao":{"b":[]},"aN":{"q":[],"i":[],"o":[]},"ap":{"i":[],"o":[]},"cd":{"q":[],"i":[],"o":[]},"bc":{"i":[],"o":[]},"as":{"q":[],"i":[],"o":[]},"bd":{"hj":[],"q":[],"i":[],"o":[]},"au":{"q":[],"i":[],"o":[]},"J":{"H":["i"],"O":["i"],"t":["i"],"H.E":"i"},"bq":{"H":["i"],"a0":["i"],"O":["i"],"ch":["i"],"t":["i"],"H.E":"i","a0.E":"i"},"cn":{"q":[],"i":[],"o":[]},"ax":{"q":[],"i":[],"o":[]},"bA":{"q":[],"i":[],"o":[]},"cs":{"q":[],"i":[],"o":[]},"ct":{"q":[],"i":[],"o":[]},"aU":{"q":[],"i":[],"o":[]},"ay":{"q":[],"i":[],"o":[]},"a1":{"b":[]},"aV":{"o":[]},"aW":{"i":[],"o":[]},"bK":{"H":["i"],"a0":["i"],"O":["i"],"ch":["i"],"t":["i"],"H.E":"i","a0.E":"i"},"cB":{"I":["n","n"],"bo":["n","n"]},"cD":{"I":["n","n"],"bo":["n","n"],"I.K":"n","I.V":"n"},"bF":{"bz":["1"]},"bE":{"bF":["1"],"bz":["1"]},"br":{"X":[]},"bM":{"X":[]},"cP":{"X":[]},"cO":{"X":[]},"aq":{"N":["1"]},"cM":{"iZ":[]},"bS":{"iK":[]},"aR":{"d":[],"q":[],"i":[],"o":[]},"d":{"q":[],"i":[],"o":[]},"bb":{"aK":[]},"bw":{"aK":[]}}'))
A.jh(v.typeUniverse,JSON.parse('{"b9":1,"cp":1,"cq":2,"bm":1,"bp":2,"bL":1,"bJ":1,"bU":1}'))
var u={c:"Error handler must accept one Object or one Object and a StackTrace as arguments, and return a value of the returned future's type"}
var t=(function rtii(){var s=A.b1
return{n:s("b6"),w:s("aH"),b:s("am"),D:s("aJ"),q:s("an"),h:s("ao"),Q:s("q"),R:s("u"),B:s("b"),Y:s("a5"),d:s("ar<@>"),u:s("aP<W>"),cH:s("t<i>"),bi:s("t<@>"),i:s("C<X>"),s:s("C<n>"),t:s("C<W>"),ce:s("C<@>"),c4:s("C<aa>"),a:s("C<y>"),T:s("bh"),cq:s("hc"),g:s("a6"),da:s("ch<@>"),S:s("au"),aY:s("O<n>"),p:s("O<W>"),j:s("O<@>"),r:s("O<y>"),at:s("bn"),f:s("bo<@,@>"),cw:s("V<n,n>"),cY:s("V<y,W>"),V:s("Q"),A:s("i"),e:s("X"),P:s("D"),K:s("v"),a7:s("kr"),ck:s("aR"),l:s("aS"),N:s("n"),bm:s("n(n)"),bM:s("d"),bg:s("aU"),U:s("a7"),b7:s("af"),cr:s("az"),x:s("aW"),ba:s("J"),W:s("bE<Q>"),bq:s("bE<a7>"),c:s("E<@>"),aQ:s("E<aa>"),aa:s("E<y>"),d4:s("E<~>"),G:s("aB"),d1:s("bO<y>"),y:s("M"),bG:s("M(v)"),cb:s("W"),ad:s("W(y)"),z:s("@"),O:s("@()"),v:s("@(v)"),C:s("@(v,aS)"),k:s("@(@,@)"),bL:s("aa"),I:s("0&*"),_:s("v*"),bc:s("ar<D>?"),X:s("v?"),F:s("bG<@,@>?"),L:s("cI?"),E:s("@(b)?"),Z:s("~()?"),m:s("~(b)?"),H:s("y"),o:s("~"),M:s("~()"),aV:s("~(n,n)"),J:s("~(y)")}})();(function constants(){var s=hunkHelpers.makeConstList
B.z=A.aG.prototype
B.p=A.am.prototype
B.k=A.an.prototype
B.t=A.b7.prototype
B.a=A.ao.prototype
B.L=A.cb.prototype
B.P=A.bc.prototype
B.l=A.as.prototype
B.e=A.bd.prototype
B.Q=J.bf.prototype
B.b=J.C.prototype
B.f=J.bg.prototype
B.c=J.aQ.prototype
B.i=J.at.prototype
B.R=J.a6.prototype
B.S=J.P.prototype
B.d=A.au.prototype
B.v=J.cl.prototype
B.w=A.ax.prototype
B.x=A.bA.prototype
B.m=A.ay.prototype
B.o=J.az.prototype
B.y=A.aV.prototype
B.A=new A.aP(A.k7(),t.u)
B.B=new A.aP(A.k8(),t.u)
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

B.I=new A.ev()
B.J=new A.ck()
B.X=new A.eG()
B.j=new A.f7()
B.h=new A.cL()
B.K=new A.cN()
B.M=new A.aO(0)
B.N=new A.aO(1e5)
B.O=new A.aO(5e5)
B.T=A.w(s(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::autofocus","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),t.s)
B.U=A.w(s(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"]),t.s)
B.V=A.w(s([]),t.s)
B.u=A.w(s(["bind","if","ref","repeat","syntax"]),t.s)
B.n=A.w(s(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),t.s)
B.W=A.ke("v")})();(function staticFields(){$.f8=null
$.hi=null
$.h5=null
$.h4=null
$.hS=null
$.hP=null
$.hZ=null
$.fq=null
$.fw=null
$.fY=null
$.aZ=null
$.bW=null
$.bX=null
$.fR=!1
$.A=B.h
$.T=A.w([],A.b1("C<v>"))
$.ad=null
$.fD=null
$.h9=null
$.h8=null
$.cH=A.he(t.N,t.Y)
$.al=1
$.ac=1
$.hE=A.j3("bcbc")})();(function lazyInitializers(){var s=hunkHelpers.lazyFinal
s($,"kl","i1",()=>A.jU("_$dart_dartClosure"))
s($,"ku","i2",()=>A.a8(A.eK({
toString:function(){return"$receiver$"}})))
s($,"kv","i3",()=>A.a8(A.eK({$method$:null,
toString:function(){return"$receiver$"}})))
s($,"kw","i4",()=>A.a8(A.eK(null)))
s($,"kx","i5",()=>A.a8(function(){var $argumentsExpr$="$arguments$"
try{null.$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kA","i8",()=>A.a8(A.eK(void 0)))
s($,"kB","i9",()=>A.a8(function(){var $argumentsExpr$="$arguments$"
try{(void 0).$method$($argumentsExpr$)}catch(r){return r.message}}()))
s($,"kz","i7",()=>A.a8(A.hr(null)))
s($,"ky","i6",()=>A.a8(function(){try{null.$method$}catch(r){return r.message}}()))
s($,"kD","ib",()=>A.a8(A.hr(void 0)))
s($,"kC","ia",()=>A.a8(function(){try{(void 0).$method$}catch(r){return r.message}}()))
s($,"kF","h_",()=>A.j_())
s($,"kQ","id",()=>A.hW(B.W))
s($,"kG","ic",()=>A.hf(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],t.N))
s($,"ki","i0",()=>{var r,q,p,o=t.D,n=o.a(A.z("#reqFs"))
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
A.k()
r=A.b1("hj")
q=A.b1("ay")
p=A.b1("aN")
return new A.c4(n,o.a(A.z("#saveBtn")),o.a(A.z("#cancelBtn")),r.a(A.z("#sizeSD")),r.a(A.z("#sizeHD")),r.a(A.z("#sizeFHD")),r.a(A.z("#sizeUHD")),o.a(A.z("#resumeBtn")),o.a(A.z("#exportBtn")),o.a(A.z("#importBtn")),o.a(A.z("#pauseBtn")),q.a(A.z("#exportArea")),q.a(A.z("#importArea")),o.a(A.z("#toPanel1")),o.a(A.z("#toPanel2")),o.a(A.z("#toPanel3")),o.a(A.z("#toPanel4")),r.a(A.z("#speed1")),r.a(A.z("#speed2")),r.a(A.z("#speed3")),r.a(A.z("#speed4")),t.S.a(A.z("#promptVar")),A.b1("ax").a(A.z("#promptFps")),p.a(A.z("#panel1")),p.a(A.z("#panel2")),p.a(A.z("#panel3")),p.a(A.z("#panel4")),A.b1("as").a(A.z("#theSnap")),A.iv().a)})})();(function nativeSupport(){!function(){var s=function(a){var m={}
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
hunkHelpers.setOrUpdateInterceptorsByTag({DOMError:J.P,MediaError:J.P,Navigator:J.P,NavigatorConcurrentHardware:J.P,NavigatorUserMediaError:J.P,OverconstrainedError:J.P,PositionError:J.P,GeolocationPositionError:J.P,Range:J.P,HTMLAudioElement:A.h,HTMLBRElement:A.h,HTMLContentElement:A.h,HTMLDListElement:A.h,HTMLDataElement:A.h,HTMLDataListElement:A.h,HTMLDetailsElement:A.h,HTMLDialogElement:A.h,HTMLEmbedElement:A.h,HTMLFieldSetElement:A.h,HTMLHRElement:A.h,HTMLHeadElement:A.h,HTMLHeadingElement:A.h,HTMLHtmlElement:A.h,HTMLIFrameElement:A.h,HTMLLIElement:A.h,HTMLLegendElement:A.h,HTMLLinkElement:A.h,HTMLMapElement:A.h,HTMLMediaElement:A.h,HTMLMenuElement:A.h,HTMLMetaElement:A.h,HTMLMeterElement:A.h,HTMLModElement:A.h,HTMLOListElement:A.h,HTMLObjectElement:A.h,HTMLOptGroupElement:A.h,HTMLOptionElement:A.h,HTMLOutputElement:A.h,HTMLParagraphElement:A.h,HTMLParamElement:A.h,HTMLPictureElement:A.h,HTMLPreElement:A.h,HTMLProgressElement:A.h,HTMLQuoteElement:A.h,HTMLScriptElement:A.h,HTMLShadowElement:A.h,HTMLSlotElement:A.h,HTMLSourceElement:A.h,HTMLStyleElement:A.h,HTMLTableCaptionElement:A.h,HTMLTableCellElement:A.h,HTMLTableDataCellElement:A.h,HTMLTableHeaderCellElement:A.h,HTMLTableColElement:A.h,HTMLTimeElement:A.h,HTMLTitleElement:A.h,HTMLTrackElement:A.h,HTMLUListElement:A.h,HTMLUnknownElement:A.h,HTMLVideoElement:A.h,HTMLDirectoryElement:A.h,HTMLFontElement:A.h,HTMLFrameElement:A.h,HTMLFrameSetElement:A.h,HTMLMarqueeElement:A.h,HTMLElement:A.h,HTMLAnchorElement:A.aG,HTMLAreaElement:A.c3,HTMLBaseElement:A.aH,HTMLBodyElement:A.am,HTMLButtonElement:A.aJ,HTMLCanvasElement:A.an,CanvasRenderingContext2D:A.b7,CDATASection:A.a_,CharacterData:A.a_,Comment:A.a_,ProcessingInstruction:A.a_,Text:A.a_,CSSStyleDeclaration:A.b8,MSStyleCSSProperties:A.b8,CSS2Properties:A.b8,CustomEvent:A.ao,HTMLDivElement:A.aN,XMLDocument:A.ap,Document:A.ap,DOMException:A.en,DOMImplementation:A.cb,DOMTokenList:A.eo,Element:A.q,AbortPaymentEvent:A.b,AnimationEvent:A.b,AnimationPlaybackEvent:A.b,ApplicationCacheErrorEvent:A.b,BackgroundFetchClickEvent:A.b,BackgroundFetchEvent:A.b,BackgroundFetchFailEvent:A.b,BackgroundFetchedEvent:A.b,BeforeInstallPromptEvent:A.b,BeforeUnloadEvent:A.b,BlobEvent:A.b,CanMakePaymentEvent:A.b,ClipboardEvent:A.b,CloseEvent:A.b,DeviceMotionEvent:A.b,DeviceOrientationEvent:A.b,ErrorEvent:A.b,ExtendableEvent:A.b,ExtendableMessageEvent:A.b,FetchEvent:A.b,FontFaceSetLoadEvent:A.b,ForeignFetchEvent:A.b,GamepadEvent:A.b,HashChangeEvent:A.b,InstallEvent:A.b,MediaEncryptedEvent:A.b,MediaKeyMessageEvent:A.b,MediaQueryListEvent:A.b,MediaStreamEvent:A.b,MediaStreamTrackEvent:A.b,MessageEvent:A.b,MIDIConnectionEvent:A.b,MIDIMessageEvent:A.b,MutationEvent:A.b,NotificationEvent:A.b,PageTransitionEvent:A.b,PaymentRequestEvent:A.b,PaymentRequestUpdateEvent:A.b,PopStateEvent:A.b,PresentationConnectionAvailableEvent:A.b,PresentationConnectionCloseEvent:A.b,ProgressEvent:A.b,PromiseRejectionEvent:A.b,PushEvent:A.b,RTCDataChannelEvent:A.b,RTCDTMFToneChangeEvent:A.b,RTCPeerConnectionIceEvent:A.b,RTCTrackEvent:A.b,SecurityPolicyViolationEvent:A.b,SensorErrorEvent:A.b,SpeechRecognitionError:A.b,SpeechRecognitionEvent:A.b,SpeechSynthesisEvent:A.b,StorageEvent:A.b,SyncEvent:A.b,TrackEvent:A.b,TransitionEvent:A.b,WebKitTransitionEvent:A.b,VRDeviceEvent:A.b,VRDisplayEvent:A.b,VRSessionEvent:A.b,MojoInterfaceRequestEvent:A.b,ResourceProgressEvent:A.b,USBConnectionEvent:A.b,IDBVersionChangeEvent:A.b,AudioProcessingEvent:A.b,OfflineAudioCompletionEvent:A.b,WebGLContextEvent:A.b,Event:A.b,InputEvent:A.b,SubmitEvent:A.b,EventTarget:A.o,HTMLFormElement:A.cd,HTMLDocument:A.bc,HTMLImageElement:A.as,HTMLInputElement:A.bd,HTMLLabelElement:A.au,Location:A.bn,MouseEvent:A.Q,DragEvent:A.Q,PointerEvent:A.Q,WheelEvent:A.Q,DocumentFragment:A.i,ShadowRoot:A.i,DocumentType:A.i,Node:A.i,NodeList:A.bq,RadioNodeList:A.bq,HTMLSelectElement:A.cn,HTMLSpanElement:A.ax,HTMLTableElement:A.bA,HTMLTableRowElement:A.cs,HTMLTableSectionElement:A.ct,HTMLTemplateElement:A.aU,HTMLTextAreaElement:A.ay,TouchEvent:A.a7,CompositionEvent:A.a1,FocusEvent:A.a1,KeyboardEvent:A.a1,TextEvent:A.a1,UIEvent:A.a1,Window:A.aV,DOMWindow:A.aV,Attr:A.aW,NamedNodeMap:A.bK,MozNamedAttrMap:A.bK,SVGScriptElement:A.aR,SVGAElement:A.d,SVGAnimateElement:A.d,SVGAnimateMotionElement:A.d,SVGAnimateTransformElement:A.d,SVGAnimationElement:A.d,SVGCircleElement:A.d,SVGClipPathElement:A.d,SVGDefsElement:A.d,SVGDescElement:A.d,SVGDiscardElement:A.d,SVGEllipseElement:A.d,SVGFEBlendElement:A.d,SVGFEColorMatrixElement:A.d,SVGFEComponentTransferElement:A.d,SVGFECompositeElement:A.d,SVGFEConvolveMatrixElement:A.d,SVGFEDiffuseLightingElement:A.d,SVGFEDisplacementMapElement:A.d,SVGFEDistantLightElement:A.d,SVGFEFloodElement:A.d,SVGFEFuncAElement:A.d,SVGFEFuncBElement:A.d,SVGFEFuncGElement:A.d,SVGFEFuncRElement:A.d,SVGFEGaussianBlurElement:A.d,SVGFEImageElement:A.d,SVGFEMergeElement:A.d,SVGFEMergeNodeElement:A.d,SVGFEMorphologyElement:A.d,SVGFEOffsetElement:A.d,SVGFEPointLightElement:A.d,SVGFESpecularLightingElement:A.d,SVGFESpotLightElement:A.d,SVGFETileElement:A.d,SVGFETurbulenceElement:A.d,SVGFilterElement:A.d,SVGForeignObjectElement:A.d,SVGGElement:A.d,SVGGeometryElement:A.d,SVGGraphicsElement:A.d,SVGImageElement:A.d,SVGLineElement:A.d,SVGLinearGradientElement:A.d,SVGMarkerElement:A.d,SVGMaskElement:A.d,SVGMetadataElement:A.d,SVGPathElement:A.d,SVGPatternElement:A.d,SVGPolygonElement:A.d,SVGPolylineElement:A.d,SVGRadialGradientElement:A.d,SVGRectElement:A.d,SVGSetElement:A.d,SVGStopElement:A.d,SVGStyleElement:A.d,SVGSVGElement:A.d,SVGSwitchElement:A.d,SVGSymbolElement:A.d,SVGTSpanElement:A.d,SVGTextContentElement:A.d,SVGTextElement:A.d,SVGTextPathElement:A.d,SVGTextPositioningElement:A.d,SVGTitleElement:A.d,SVGUseElement:A.d,SVGViewElement:A.d,SVGGradientElement:A.d,SVGComponentTransferFunctionElement:A.d,SVGFEDropShadowElement:A.d,SVGMPathElement:A.d,SVGElement:A.d})
hunkHelpers.setOrUpdateLeafTags({DOMError:true,MediaError:true,Navigator:true,NavigatorConcurrentHardware:true,NavigatorUserMediaError:true,OverconstrainedError:true,PositionError:true,GeolocationPositionError:true,Range:true,HTMLAudioElement:true,HTMLBRElement:true,HTMLContentElement:true,HTMLDListElement:true,HTMLDataElement:true,HTMLDataListElement:true,HTMLDetailsElement:true,HTMLDialogElement:true,HTMLEmbedElement:true,HTMLFieldSetElement:true,HTMLHRElement:true,HTMLHeadElement:true,HTMLHeadingElement:true,HTMLHtmlElement:true,HTMLIFrameElement:true,HTMLLIElement:true,HTMLLegendElement:true,HTMLLinkElement:true,HTMLMapElement:true,HTMLMediaElement:true,HTMLMenuElement:true,HTMLMetaElement:true,HTMLMeterElement:true,HTMLModElement:true,HTMLOListElement:true,HTMLObjectElement:true,HTMLOptGroupElement:true,HTMLOptionElement:true,HTMLOutputElement:true,HTMLParagraphElement:true,HTMLParamElement:true,HTMLPictureElement:true,HTMLPreElement:true,HTMLProgressElement:true,HTMLQuoteElement:true,HTMLScriptElement:true,HTMLShadowElement:true,HTMLSlotElement:true,HTMLSourceElement:true,HTMLStyleElement:true,HTMLTableCaptionElement:true,HTMLTableCellElement:true,HTMLTableDataCellElement:true,HTMLTableHeaderCellElement:true,HTMLTableColElement:true,HTMLTimeElement:true,HTMLTitleElement:true,HTMLTrackElement:true,HTMLUListElement:true,HTMLUnknownElement:true,HTMLVideoElement:true,HTMLDirectoryElement:true,HTMLFontElement:true,HTMLFrameElement:true,HTMLFrameSetElement:true,HTMLMarqueeElement:true,HTMLElement:false,HTMLAnchorElement:true,HTMLAreaElement:true,HTMLBaseElement:true,HTMLBodyElement:true,HTMLButtonElement:true,HTMLCanvasElement:true,CanvasRenderingContext2D:true,CDATASection:true,CharacterData:true,Comment:true,ProcessingInstruction:true,Text:true,CSSStyleDeclaration:true,MSStyleCSSProperties:true,CSS2Properties:true,CustomEvent:true,HTMLDivElement:true,XMLDocument:true,Document:false,DOMException:true,DOMImplementation:true,DOMTokenList:true,Element:false,AbortPaymentEvent:true,AnimationEvent:true,AnimationPlaybackEvent:true,ApplicationCacheErrorEvent:true,BackgroundFetchClickEvent:true,BackgroundFetchEvent:true,BackgroundFetchFailEvent:true,BackgroundFetchedEvent:true,BeforeInstallPromptEvent:true,BeforeUnloadEvent:true,BlobEvent:true,CanMakePaymentEvent:true,ClipboardEvent:true,CloseEvent:true,DeviceMotionEvent:true,DeviceOrientationEvent:true,ErrorEvent:true,ExtendableEvent:true,ExtendableMessageEvent:true,FetchEvent:true,FontFaceSetLoadEvent:true,ForeignFetchEvent:true,GamepadEvent:true,HashChangeEvent:true,InstallEvent:true,MediaEncryptedEvent:true,MediaKeyMessageEvent:true,MediaQueryListEvent:true,MediaStreamEvent:true,MediaStreamTrackEvent:true,MessageEvent:true,MIDIConnectionEvent:true,MIDIMessageEvent:true,MutationEvent:true,NotificationEvent:true,PageTransitionEvent:true,PaymentRequestEvent:true,PaymentRequestUpdateEvent:true,PopStateEvent:true,PresentationConnectionAvailableEvent:true,PresentationConnectionCloseEvent:true,ProgressEvent:true,PromiseRejectionEvent:true,PushEvent:true,RTCDataChannelEvent:true,RTCDTMFToneChangeEvent:true,RTCPeerConnectionIceEvent:true,RTCTrackEvent:true,SecurityPolicyViolationEvent:true,SensorErrorEvent:true,SpeechRecognitionError:true,SpeechRecognitionEvent:true,SpeechSynthesisEvent:true,StorageEvent:true,SyncEvent:true,TrackEvent:true,TransitionEvent:true,WebKitTransitionEvent:true,VRDeviceEvent:true,VRDisplayEvent:true,VRSessionEvent:true,MojoInterfaceRequestEvent:true,ResourceProgressEvent:true,USBConnectionEvent:true,IDBVersionChangeEvent:true,AudioProcessingEvent:true,OfflineAudioCompletionEvent:true,WebGLContextEvent:true,Event:false,InputEvent:false,SubmitEvent:false,EventTarget:false,HTMLFormElement:true,HTMLDocument:true,HTMLImageElement:true,HTMLInputElement:true,HTMLLabelElement:true,Location:true,MouseEvent:true,DragEvent:true,PointerEvent:true,WheelEvent:true,DocumentFragment:true,ShadowRoot:true,DocumentType:true,Node:false,NodeList:true,RadioNodeList:true,HTMLSelectElement:true,HTMLSpanElement:true,HTMLTableElement:true,HTMLTableRowElement:true,HTMLTableSectionElement:true,HTMLTemplateElement:true,HTMLTextAreaElement:true,TouchEvent:true,CompositionEvent:true,FocusEvent:true,KeyboardEvent:true,TextEvent:true,UIEvent:false,Window:true,DOMWindow:true,Attr:true,NamedNodeMap:true,MozNamedAttrMap:true,SVGScriptElement:true,SVGAElement:true,SVGAnimateElement:true,SVGAnimateMotionElement:true,SVGAnimateTransformElement:true,SVGAnimationElement:true,SVGCircleElement:true,SVGClipPathElement:true,SVGDefsElement:true,SVGDescElement:true,SVGDiscardElement:true,SVGEllipseElement:true,SVGFEBlendElement:true,SVGFEColorMatrixElement:true,SVGFEComponentTransferElement:true,SVGFECompositeElement:true,SVGFEConvolveMatrixElement:true,SVGFEDiffuseLightingElement:true,SVGFEDisplacementMapElement:true,SVGFEDistantLightElement:true,SVGFEFloodElement:true,SVGFEFuncAElement:true,SVGFEFuncBElement:true,SVGFEFuncGElement:true,SVGFEFuncRElement:true,SVGFEGaussianBlurElement:true,SVGFEImageElement:true,SVGFEMergeElement:true,SVGFEMergeNodeElement:true,SVGFEMorphologyElement:true,SVGFEOffsetElement:true,SVGFEPointLightElement:true,SVGFESpecularLightingElement:true,SVGFESpotLightElement:true,SVGFETileElement:true,SVGFETurbulenceElement:true,SVGFilterElement:true,SVGForeignObjectElement:true,SVGGElement:true,SVGGeometryElement:true,SVGGraphicsElement:true,SVGImageElement:true,SVGLineElement:true,SVGLinearGradientElement:true,SVGMarkerElement:true,SVGMaskElement:true,SVGMetadataElement:true,SVGPathElement:true,SVGPatternElement:true,SVGPolygonElement:true,SVGPolylineElement:true,SVGRadialGradientElement:true,SVGRectElement:true,SVGSetElement:true,SVGStopElement:true,SVGStyleElement:true,SVGSVGElement:true,SVGSwitchElement:true,SVGSymbolElement:true,SVGTSpanElement:true,SVGTextContentElement:true,SVGTextElement:true,SVGTextPathElement:true,SVGTextPositioningElement:true,SVGTitleElement:true,SVGUseElement:true,SVGViewElement:true,SVGGradientElement:true,SVGComponentTransferFunctionElement:true,SVGFEDropShadowElement:true,SVGMPathElement:true,SVGElement:false})})()
convertAllToFastObject(w)
convertToFastObject($);(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!="undefined"){a(document.currentScript)
return}var s=document.scripts
function onLoad(b){for(var q=0;q<s.length;++q)s[q].removeEventListener("load",onLoad,false)
a(b.target)}for(var r=0;r<s.length;++r)s[r].addEventListener("load",onLoad,false)})(function(a){v.currentScript=a
var s=A.k5
if(typeof dartMainRunner==="function")dartMainRunner(s,[])
else s([])})})()
//# sourceMappingURL=main.dart.js.map
