(function(){var supportsDirectProtoAccess=function(){var z=function(){}
z.prototype={p:{}}
var y=new z()
return y.__proto__&&y.__proto__.p===z.prototype.p}()
function map(a){a=Object.create(null)
a.x=0
delete a.x
return a}var A=map()
var B=map()
var C=map()
var D=map()
var E=map()
var F=map()
var G=map()
var H=map()
var J=map()
var K=map()
var L=map()
var M=map()
var N=map()
var O=map()
var P=map()
var Q=map()
var R=map()
var S=map()
var T=map()
var U=map()
var V=map()
var W=map()
var X=map()
var Y=map()
var Z=map()
function I(){}init()
function setupProgram(a,b){"use strict"
function generateAccessor(a9,b0,b1){var g=a9.split("-")
var f=g[0]
var e=f.length
var d=f.charCodeAt(e-1)
var c
if(g.length>1)c=true
else c=false
d=d>=60&&d<=64?d-59:d>=123&&d<=126?d-117:d>=37&&d<=43?d-27:0
if(d){var a0=d&3
var a1=d>>2
var a2=f=f.substring(0,e-1)
var a3=f.indexOf(":")
if(a3>0){a2=f.substring(0,a3)
f=f.substring(a3+1)}if(a0){var a4=a0&2?"r":""
var a5=a0&1?"this":"r"
var a6="return "+a5+"."+f
var a7=b1+".prototype.g"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}if(a1){var a4=a1&2?"r,v":"v"
var a5=a1&1?"this":"r"
var a6=a5+"."+f+"=v"
var a7=b1+".prototype.s"+a2+"="
var a8="function("+a4+"){"+a6+"}"
if(c)b0.push(a7+"$reflectable("+a8+");\n")
else b0.push(a7+a8+";\n")}}return f}function defineClass(a2,a3){var g=[]
var f="function "+a2+"("
var e=""
var d=""
for(var c=0;c<a3.length;c++){if(c!=0)f+=", "
var a0=generateAccessor(a3[c],g,a2)
d+="'"+a0+"',"
var a1="p_"+a0
f+=a1
e+="this."+a0+" = "+a1+";\n"}if(supportsDirectProtoAccess)e+="this."+"$deferredAction"+"();"
f+=") {\n"+e+"}\n"
f+=a2+".builtin$cls=\""+a2+"\";\n"
f+="$desc=$collectedClasses."+a2+"[1];\n"
f+=a2+".prototype = $desc;\n"
if(typeof defineClass.name!="string")f+=a2+".name=\""+a2+"\";\n"
f+=a2+"."+"$__fields__"+"=["+d+"];\n"
f+=g.join("")
return f}init.createNewIsolate=function(){return new I()}
init.classIdExtractor=function(c){return c.constructor.name}
init.classFieldsExtractor=function(c){var g=c.constructor.$__fields__
if(!g)return[]
var f=[]
f.length=g.length
for(var e=0;e<g.length;e++)f[e]=c[g[e]]
return f}
init.instanceFromClassId=function(c){return new init.allClasses[c]()}
init.initializeEmptyInstance=function(c,d,e){init.allClasses[c].apply(d,e)
return d}
var z=supportsDirectProtoAccess?function(c,d){var g=c.prototype
g.__proto__=d.prototype
g.constructor=c
g["$is"+c.name]=c
return convertToFastObject(g)}:function(){function tmp(){}return function(a0,a1){tmp.prototype=a1.prototype
var g=new tmp()
convertToSlowObject(g)
var f=a0.prototype
var e=Object.keys(f)
for(var d=0;d<e.length;d++){var c=e[d]
g[c]=f[c]}g["$is"+a0.name]=a0
g.constructor=a0
a0.prototype=g
return g}}()
function finishClasses(a4){var g=init.allClasses
a4.combinedConstructorFunction+="return [\n"+a4.constructorsList.join(",\n  ")+"\n]"
var f=new Function("$collectedClasses",a4.combinedConstructorFunction)(a4.collected)
a4.combinedConstructorFunction=null
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.name
var a0=a4.collected[c]
var a1=a0[0]
a0=a0[1]
g[c]=d
a1[c]=d}f=null
var a2=init.finishedClasses
function finishClass(c1){if(a2[c1])return
a2[c1]=true
var a5=a4.pending[c1]
if(a5&&a5.indexOf("+")>0){var a6=a5.split("+")
a5=a6[0]
var a7=a6[1]
finishClass(a7)
var a8=g[a7]
var a9=a8.prototype
var b0=g[c1].prototype
var b1=Object.keys(a9)
for(var b2=0;b2<b1.length;b2++){var b3=b1[b2]
if(!u.call(b0,b3))b0[b3]=a9[b3]}}if(!a5||typeof a5!="string"){var b4=g[c1]
var b5=b4.prototype
b5.constructor=b4
b5.$isc=b4
b5.$deferredAction=function(){}
return}finishClass(a5)
var b6=g[a5]
if(!b6)b6=existingIsolateProperties[a5]
var b4=g[c1]
var b5=z(b4,b6)
if(a9)b5.$deferredAction=mixinDeferredActionHelper(a9,b5)
if(Object.prototype.hasOwnProperty.call(b5,"%")){var b7=b5["%"].split(";")
if(b7[0]){var b8=b7[0].split("|")
for(var b2=0;b2<b8.length;b2++){init.interceptorsByTag[b8[b2]]=b4
init.leafTags[b8[b2]]=true}}if(b7[1]){b8=b7[1].split("|")
if(b7[2]){var b9=b7[2].split("|")
for(var b2=0;b2<b9.length;b2++){var c0=g[b9[b2]]
c0.$nativeSuperclassTag=b8[0]}}for(b2=0;b2<b8.length;b2++){init.interceptorsByTag[b8[b2]]=b4
init.leafTags[b8[b2]]=false}}b5.$deferredAction()}if(b5.$isf)b5.$deferredAction()}var a3=Object.keys(a4.pending)
for(var e=0;e<a3.length;e++)finishClass(a3[e])}function finishAddStubsHelper(){var g=this
while(!g.hasOwnProperty("$deferredAction"))g=g.__proto__
delete g.$deferredAction
var f=Object.keys(g)
for(var e=0;e<f.length;e++){var d=f[e]
var c=d.charCodeAt(0)
var a0
if(d!=="^"&&d!=="$reflectable"&&c!==43&&c!==42&&(a0=g[d])!=null&&a0.constructor===Array&&d!=="<>")addStubs(g,a0,d,false,[])}convertToFastObject(g)
g=g.__proto__
g.$deferredAction()}function mixinDeferredActionHelper(c,d){var g
if(d.hasOwnProperty("$deferredAction"))g=d.$deferredAction
return function foo(){var f=this
while(!f.hasOwnProperty("$deferredAction"))f=f.__proto__
if(g)f.$deferredAction=g
else{delete f.$deferredAction
convertToFastObject(f)}c.$deferredAction()
f.$deferredAction()}}function processClassData(b1,b2,b3){b2=convertToSlowObject(b2)
var g
var f=Object.keys(b2)
var e=false
var d=supportsDirectProtoAccess&&b1!="c"
for(var c=0;c<f.length;c++){var a0=f[c]
var a1=a0.charCodeAt(0)
if(a0==="static"){processStatics(init.statics[b1]=b2.static,b3)
delete b2.static}else if(a1===43){w[g]=a0.substring(1)
var a2=b2[a0]
if(a2>0)b2[g].$reflectable=a2}else if(a1===42){b2[g].$defaultValues=b2[a0]
var a3=b2.$methodsWithOptionalArguments
if(!a3)b2.$methodsWithOptionalArguments=a3={}
a3[a0]=g}else{var a4=b2[a0]
if(a0!=="^"&&a4!=null&&a4.constructor===Array&&a0!=="<>")if(d)e=true
else addStubs(b2,a4,a0,false,[])
else g=a0}}if(e)b2.$deferredAction=finishAddStubsHelper
var a5=b2["^"],a6,a7,a8=a5
var a9=a8.split(";")
a8=a9[1]?a9[1].split(","):[]
a7=a9[0]
a6=a7.split(":")
if(a6.length==2){a7=a6[0]
var b0=a6[1]
if(b0)b2.$signature=function(b4){return function(){return init.types[b4]}}(b0)}if(a7)b3.pending[b1]=a7
b3.combinedConstructorFunction+=defineClass(b1,a8)
b3.constructorsList.push(b1)
b3.collected[b1]=[m,b2]
i.push(b1)}function processStatics(a3,a4){var g=Object.keys(a3)
for(var f=0;f<g.length;f++){var e=g[f]
if(e==="^")continue
var d=a3[e]
var c=e.charCodeAt(0)
var a0
if(c===43){v[a0]=e.substring(1)
var a1=a3[e]
if(a1>0)a3[a0].$reflectable=a1
if(d&&d.length)init.typeInformation[a0]=d}else if(c===42){m[a0].$defaultValues=d
var a2=a3.$methodsWithOptionalArguments
if(!a2)a3.$methodsWithOptionalArguments=a2={}
a2[e]=a0}else if(typeof d==="function"){m[a0=e]=d
h.push(e)
init.globalFunctions[e]=d}else if(d.constructor===Array)addStubs(m,d,e,true,h)
else{a0=e
processClassData(e,d,a4)}}}function addStubs(b2,b3,b4,b5,b6){var g=0,f=b3[g],e
if(typeof f=="string")e=b3[++g]
else{e=f
f=b4}var d=[b2[b4]=b2[f]=e]
e.$stubName=b4
b6.push(b4)
for(g++;g<b3.length;g++){e=b3[g]
if(typeof e!="function")break
if(!b5)e.$stubName=b3[++g]
d.push(e)
if(e.$stubName){b2[e.$stubName]=e
b6.push(e.$stubName)}}for(var c=0;c<d.length;g++,c++)d[c].$callName=b3[g]
var a0=b3[g]
b3=b3.slice(++g)
var a1=b3[0]
var a2=a1>>1
var a3=(a1&1)===1
var a4=a1===3
var a5=a1===1
var a6=b3[1]
var a7=a6>>1
var a8=(a6&1)===1
var a9=a2+a7!=d[0].length
var b0=b3[2]
if(typeof b0=="number")b3[2]=b0+b
var b1=2*a7+a2+3
if(a0){e=tearOff(d,b3,b5,b4,a9)
b2[b4].$getter=e
e.$getterStub=true
if(b5){init.globalFunctions[b4]=e
b6.push(a0)}b2[a0]=e
d.push(e)
e.$stubName=a0
e.$callName=null}}function tearOffGetter(c,d,e,f){return f?new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"(x) {"+"if (c === null) c = "+"H.cd"+"("+"this, funcs, reflectionInfo, false, [x], name);"+"return new c(this, funcs[0], x, name);"+"}")(c,d,e,H,null):new Function("funcs","reflectionInfo","name","H","c","return function tearOff_"+e+y+++"() {"+"if (c === null) c = "+"H.cd"+"("+"this, funcs, reflectionInfo, false, [], name);"+"return new c(this, funcs[0], null, name);"+"}")(c,d,e,H,null)}function tearOff(c,d,e,f,a0){var g
return e?function(){if(g===void 0)g=H.cd(this,c,d,true,[],f).prototype
return g}:tearOffGetter(c,d,f,a0)}var y=0
if(!init.libraries)init.libraries=[]
if(!init.mangledNames)init.mangledNames=map()
if(!init.mangledGlobalNames)init.mangledGlobalNames=map()
if(!init.statics)init.statics=map()
if(!init.typeInformation)init.typeInformation=map()
if(!init.globalFunctions)init.globalFunctions=map()
var x=init.libraries
var w=init.mangledNames
var v=init.mangledGlobalNames
var u=Object.prototype.hasOwnProperty
var t=a.length
var s=map()
s.collected=map()
s.pending=map()
s.constructorsList=[]
s.combinedConstructorFunction="function $reflectable(fn){fn.$reflectable=1;return fn};\n"+"var $desc;\n"
for(var r=0;r<t;r++){var q=a[r]
var p=q[0]
var o=q[1]
var n=q[2]
var m=q[3]
var l=q[4]
var k=!!q[5]
var j=l&&l["^"]
if(j instanceof Array)j=j[0]
var i=[]
var h=[]
processStatics(l,s)
x.push([p,o,i,h,n,j,k,m])}finishClasses(s)}I.bt=function(){}
var dart=[["","",,H,{
"^":"",
kr:{
"^":"c;a"}}],["","",,J,{
"^":"",
r:function(a){return void 0},
bw:function(a,b,c,d){return{i:a,p:b,e:c,x:d}},
bu:function(a){var z,y,x,w
z=a[init.dispatchPropertyName]
if(z==null)if($.ch==null){H.jy()
z=a[init.dispatchPropertyName]}if(z!=null){y=z.p
if(!1===y)return z.i
if(!0===y)return a
x=Object.getPrototypeOf(a)
if(y===x)return z.i
if(z.e===x)throw H.e(new P.bo("Return interceptor for "+H.d(y(a,z))))}w=H.jG(a)
if(w==null){if(typeof a=="function")return C.I
y=Object.getPrototypeOf(a)
if(y==null||y===Object.prototype)return C.N
else return C.O}return w},
f:{
"^":"c;",
w:function(a,b){return a===b},
gC:function(a){return H.ab(a)},
j:["dq",function(a){return H.bk(a)}],
"%":"CanvasGradient|CanvasPattern|CanvasRenderingContext2D|DOMError|DOMImplementation|FileError|MediaError|MediaKeyError|NavigatorUserMediaError|PositionError|Range|SQLError|SVGAnimatedEnumeration|SVGAnimatedLength|SVGAnimatedLengthList|SVGAnimatedNumber|SVGAnimatedNumberList|SVGAnimatedString"},
h4:{
"^":"f;",
j:function(a){return String(a)},
gC:function(a){return a?519018:218159},
$isb1:1},
h5:{
"^":"f;",
w:function(a,b){return null==b},
j:function(a){return"null"},
gC:function(a){return 0}},
bN:{
"^":"f;",
gC:function(a){return 0},
j:["ds",function(a){return String(a)}],
$ish6:1},
hw:{
"^":"bN;"},
aX:{
"^":"bN;"},
aS:{
"^":"bN;",
j:function(a){var z=a[$.$get$cw()]
return z==null?this.ds(a):J.a_(z)}},
aO:{
"^":"f;",
em:function(a,b){if(!!a.immutable$list)throw H.e(new P.K(b))},
bs:function(a,b){if(!!a.fixed$length)throw H.e(new P.K(b))},
c7:function(a,b,c){var z,y,x,w,v
z=[]
y=a.length
for(x=0;x<y;++x){w=a[x]
if(b.$1(w)!==!0)z.push(w)
if(a.length!==y)throw H.e(new P.M(a))}v=z.length
if(v===y)return
this.sl(a,v)
for(x=0;x<z.length;++x)this.i(a,x,z[x])},
S:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){b.$1(a[y])
if(a.length!==z)throw H.e(new P.M(a))}},
ay:function(a,b){return H.a(new H.bh(a,b),[null,null])},
a4:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
geD:function(a){if(a.length>0)return a[0]
throw H.e(H.bc())},
geT:function(a){var z=a.length
if(z>0)return a[z-1]
throw H.e(H.bc())},
bK:function(a,b,c,d,e){var z,y,x
this.em(a,"set range")
P.d8(b,c,a.length,null,null,null)
z=c-b
if(z===0)return
if(e<0)H.F(P.X(e,0,null,"skipCount",null))
if(e+z>d.length)throw H.e(H.h2())
if(e<b)for(y=z-1;y>=0;--y){x=e+y
if(x<0||x>=d.length)return H.h(d,x)
a[b+y]=d[x]}else for(y=0;y<z;++y){x=e+y
if(x<0||x>=d.length)return H.h(d,x)
a[b+y]=d[x]}},
ci:function(a,b){var z,y
z=a.length
for(y=0;y<z;++y){if(b.$1(a[y])===!0)return!0
if(a.length!==z)throw H.e(new P.M(a))}return!1},
K:function(a,b){var z
for(z=0;z<a.length;++z)if(J.S(a[z],b))return!0
return!1},
j:function(a){return P.bb(a,"[","]")},
gE:function(a){return new J.eq(a,a.length,0,null)},
gC:function(a){return H.ab(a)},
gl:function(a){return a.length},
sl:function(a,b){this.bs(a,"set length")
if(b<0)throw H.e(P.X(b,0,null,"newLength",null))
a.length=b},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.G(a,b))
if(b>=a.length||b<0)throw H.e(H.G(a,b))
return a[b]},
i:function(a,b,c){if(!!a.immutable$list)H.F(new P.K("indexed set"))
if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.G(a,b))
if(b>=a.length||b<0)throw H.e(H.G(a,b))
a[b]=c},
$isaP:1,
$isn:1,
$asn:null,
$isy:1},
kq:{
"^":"aO;"},
eq:{
"^":"c;a,b,c,d",
gB:function(){return this.d},
A:function(){var z,y,x
z=this.a
y=z.length
if(this.b!==y)throw H.e(H.by(z))
x=this.c
if(x>=y){this.d=null
return!1}this.d=z[x]
this.c=x+1
return!0}},
aQ:{
"^":"f;",
gbv:function(a){return a===0?1/a<0:a<0},
gcV:function(a){return isNaN(a)},
bA:function(a,b){return a%b},
W:function(a){var z
if(a>=-2147483648&&a<=2147483647)return a|0
if(isFinite(a)){z=a<0?Math.ceil(a):Math.floor(a)
return z+0}throw H.e(new P.K(""+a))},
b_:function(a){return this.W(Math.floor(a))},
t:function(a){if(a>0){if(a!==1/0)return Math.round(a)}else if(a>-1/0)return 0-Math.round(0-a)
throw H.e(new P.K(""+a))},
a7:function(a){return a},
d5:function(a,b){var z
H.aF(b)
if(b<1||b>21)throw H.e(P.X(b,1,21,"precision",null))
z=a.toPrecision(b)
if(a===0&&this.gbv(a))return"-"+z
return z},
f8:function(a,b){var z,y,x,w
H.aF(b)
if(b<2||b>36)throw H.e(P.X(b,2,36,"radix",null))
z=a.toString(b)
if(C.c.aj(z,z.length-1)!==41)return z
y=/^([\da-z]+)(?:\.([\da-z]+))?\(e\+(\d+)\)$/.exec(z)
if(y==null)H.F(new P.K("Unexpected toString result: "+z))
x=J.L(y)
z=x.h(y,1)
w=+x.h(y,3)
if(x.h(y,2)!=null){z+=x.h(y,2)
w-=x.h(y,2).length}return z+C.c.p("0",w)},
j:function(a){if(a===0&&1/a<0)return"-0.0"
else return""+a},
gC:function(a){return a&0x1FFFFFFF},
F:function(a,b){if(typeof b!=="number")throw H.e(H.ag(b))
return a+b},
aU:function(a,b){var z=a%b
if(z===0)return 0
if(z>0)return z
if(b<0)return z-b
else return z+b},
aF:function(a,b){return(a|0)===a?a/b|0:this.W(a/b)},
cd:function(a,b){var z
if(a>0)z=b>31?0:a>>>b
else{z=b>31?31:b
z=a>>z>>>0}return z},
aT:function(a,b){if(typeof b!=="number")throw H.e(H.ag(b))
return a<b},
$isaq:1},
cR:{
"^":"aQ;",
$isaG:1,
$isaq:1,
$isB:1},
cQ:{
"^":"aQ;",
$isaG:1,
$isaq:1},
aR:{
"^":"f;",
aj:function(a,b){if(b<0)throw H.e(H.G(a,b))
if(b>=a.length)throw H.e(H.G(a,b))
return a.charCodeAt(b)},
F:function(a,b){if(typeof b!=="string")throw H.e(P.ep(b,null,null))
return a+b},
dn:function(a,b,c){var z
H.aF(c)
if(c>a.length)throw H.e(P.X(c,0,a.length,null,null))
z=c+b.length
if(z>a.length)return!1
return b===a.substring(c,z)},
dm:function(a,b){return this.dn(a,b,0)},
X:function(a,b,c){H.aF(b)
if(c==null)c=a.length
H.aF(c)
if(b<0)throw H.e(P.aV(b,null,null))
if(typeof c!=="number")return H.l(c)
if(b>c)throw H.e(P.aV(b,null,null))
if(c>a.length)throw H.e(P.aV(c,null,null))
return a.substring(b,c)},
bL:function(a,b){return this.X(a,b,null)},
f7:function(a){return a.toLowerCase()},
f9:function(a){var z,y,x,w,v
z=a.trim()
y=z.length
if(y===0)return z
if(this.aj(z,0)===133){x=J.h7(z,1)
if(x===y)return""}else x=0
w=y-1
v=this.aj(z,w)===133?J.h8(z,w):y
if(x===0&&v===y)return z
return z.substring(x,v)},
p:function(a,b){var z,y
if(0>=b)return""
if(b===1||a.length===0)return a
if(b!==b>>>0)throw H.e(C.v)
for(z=a,y="";!0;){if((b&1)===1)y=z+y
b=b>>>1
if(b===0)break
z+=z}return y},
er:function(a,b,c){if(b==null)H.F(H.ag(b))
if(c>a.length)throw H.e(P.X(c,0,a.length,null,null))
return H.jO(a,b,c)},
gT:function(a){return a.length===0},
j:function(a){return a},
gC:function(a){var z,y,x
for(z=a.length,y=0,x=0;x<z;++x){y=536870911&y+a.charCodeAt(x)
y=536870911&y+((524287&y)<<10>>>0)
y^=y>>6}y=536870911&y+((67108863&y)<<3>>>0)
y^=y>>11
return 536870911&y+((16383&y)<<15>>>0)},
gl:function(a){return a.length},
h:function(a,b){if(typeof b!=="number"||Math.floor(b)!==b)throw H.e(H.G(a,b))
if(b>=a.length||b<0)throw H.e(H.G(a,b))
return a[b]},
$isaP:1,
$isE:1,
static:{cS:function(a){if(a<256)switch(a){case 9:case 10:case 11:case 12:case 13:case 32:case 133:case 160:return!0
default:return!1}switch(a){case 5760:case 6158:case 8192:case 8193:case 8194:case 8195:case 8196:case 8197:case 8198:case 8199:case 8200:case 8201:case 8202:case 8232:case 8233:case 8239:case 8287:case 12288:case 65279:return!0
default:return!1}},h7:function(a,b){var z,y
for(z=a.length;b<z;){y=C.c.aj(a,b)
if(y!==32&&y!==13&&!J.cS(y))break;++b}return b},h8:function(a,b){var z,y
for(;b>0;b=z){z=b-1
y=C.c.aj(a,z)
if(y!==32&&y!==13&&!J.cS(y))break}return b}}}}],["","",,H,{
"^":"",
aZ:function(a,b){var z=a.aJ(b)
if(!init.globalState.d.cy)init.globalState.f.aP()
return z},
e2:function(a,b){var z,y,x,w,v,u
z={}
z.a=b
if(b==null){b=[]
z.a=b
y=b}else y=b
if(!J.r(y).$isn)throw H.e(P.aK("Arguments to main must be a List: "+H.d(y)))
init.globalState=new H.iG(0,0,1,null,null,null,null,null,null,null,null,null,a)
y=init.globalState
x=self.window==null
w=self.Worker
v=x&&!!self.postMessage
y.x=v
v=!v
if(v)w=w!=null&&$.$get$cN()!=null
else w=!0
y.y=w
y.r=x&&v
y.f=new H.ij(P.bR(null,H.aY),0)
y.z=H.a(new H.a2(0,null,null,null,null,null,0),[P.B,H.c8])
y.ch=H.a(new H.a2(0,null,null,null,null,null,0),[P.B,null])
if(y.x===!0){x=new H.iF()
y.Q=x
self.onmessage=function(c,d){return function(e){c(d,e)}}(H.fW,x)
self.dartPrint=self.dartPrint||function(c){return function(d){if(self.console&&self.console.log)self.console.log(d)
else self.postMessage(c(d))}}(H.iH)}if(init.globalState.x===!0)return
y=init.globalState.a++
x=H.a(new H.a2(0,null,null,null,null,null,0),[P.B,H.bl])
w=P.W(null,null,null,P.B)
v=new H.bl(0,null,!1)
u=new H.c8(y,x,w,init.createNewIsolate(),v,new H.ai(H.bx()),new H.ai(H.bx()),!1,!1,[],P.W(null,null,null,null),null,null,!1,!0,P.W(null,null,null,null))
w.ac(0,0)
u.bO(0,v)
init.globalState.e=u
init.globalState.d=u
y=H.b3()
x=H.an(y,[y]).ah(a)
if(x)u.aJ(new H.jM(z,a))
else{y=H.an(y,[y,y]).ah(a)
if(y)u.aJ(new H.jN(z,a))
else u.aJ(a)}init.globalState.f.aP()},
h_:function(){var z=init.currentScript
if(z!=null)return String(z.src)
if(init.globalState.x===!0)return H.h0()
return},
h0:function(){var z,y
z=new Error().stack
if(z==null){z=function(){try{throw new Error()}catch(x){return x.stack}}()
if(z==null)throw H.e(new P.K("No stack trace"))}y=z.match(new RegExp("^ *at [^(]*\\((.*):[0-9]*:[0-9]*\\)$","m"))
if(y!=null)return y[1]
y=z.match(new RegExp("^[^@]*@(.*):[0-9]*$","m"))
if(y!=null)return y[1]
throw H.e(new P.K("Cannot extract URI from \""+H.d(z)+"\""))},
fW:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n
z=new H.bp(!0,[]).ak(b.data)
y=J.L(z)
switch(y.h(z,"command")){case"start":init.globalState.b=y.h(z,"id")
x=y.h(z,"functionName")
w=x==null?init.globalState.cx:init.globalFunctions[x]()
v=y.h(z,"args")
u=new H.bp(!0,[]).ak(y.h(z,"msg"))
t=y.h(z,"isSpawnUri")
s=y.h(z,"startPaused")
r=new H.bp(!0,[]).ak(y.h(z,"replyTo"))
y=init.globalState.a++
q=H.a(new H.a2(0,null,null,null,null,null,0),[P.B,H.bl])
p=P.W(null,null,null,P.B)
o=new H.bl(0,null,!1)
n=new H.c8(y,q,p,init.createNewIsolate(),o,new H.ai(H.bx()),new H.ai(H.bx()),!1,!1,[],P.W(null,null,null,null),null,null,!1,!0,P.W(null,null,null,null))
p.ac(0,0)
n.bO(0,o)
init.globalState.f.a.aa(new H.aY(n,new H.fX(w,v,u,t,s,r),"worker-start"))
init.globalState.d=n
init.globalState.f.aP()
break
case"spawn-worker":break
case"message":if(y.h(z,"port")!=null)J.ar(y.h(z,"port"),y.h(z,"msg"))
init.globalState.f.aP()
break
case"close":init.globalState.ch.aO(0,$.$get$cO().h(0,a))
a.terminate()
init.globalState.f.aP()
break
case"log":H.fV(y.h(z,"msg"))
break
case"print":if(init.globalState.x===!0){y=init.globalState.Q
q=P.av(["command","print","msg",z])
q=new H.aj(!0,P.aB(null,P.B)).a_(q)
y.toString
self.postMessage(q)}else P.b4(y.h(z,"msg"))
break
case"error":throw H.e(y.h(z,"msg"))}},
fV:function(a){var z,y,x,w
if(init.globalState.x===!0){y=init.globalState.Q
x=P.av(["command","log","msg",a])
x=new H.aj(!0,P.aB(null,P.B)).a_(x)
y.toString
self.postMessage(x)}else try{self.console.log(a)}catch(w){H.H(w)
z=H.P(w)
throw H.e(P.b8(z))}},
fY:function(a,b,c,d,e,f){var z,y,x,w
z=init.globalState.d
y=z.a
$.d5=$.d5+("_"+y)
$.d6=$.d6+("_"+y)
y=z.e
x=init.globalState.d.a
w=z.f
J.ar(f,["spawned",new H.br(y,x),w,z.r])
x=new H.fZ(a,b,c,d,z)
if(e===!0){z.cg(w,w)
init.globalState.f.a.aa(new H.aY(z,x,"start isolate"))}else x.$0()},
j9:function(a){return new H.bp(!0,[]).ak(new H.aj(!1,P.aB(null,P.B)).a_(a))},
jM:{
"^":"b:1;a,b",
$0:function(){this.b.$1(this.a.a)}},
jN:{
"^":"b:1;a,b",
$0:function(){this.b.$2(this.a.a,null)}},
iG:{
"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx",
static:{iH:function(a){var z=P.av(["command","print","msg",a])
return new H.aj(!0,P.aB(null,P.B)).a_(z)}}},
c8:{
"^":"c;a,b,c,eP:d<,eu:e<,f,r,x,y,z,Q,ch,cx,cy,db,dx",
cg:function(a,b){if(!this.f.w(0,a))return
if(this.Q.ac(0,b)&&!this.y)this.y=!0
this.bq()},
f1:function(a){var z,y,x,w,v,u
if(!this.y)return
z=this.Q
z.aO(0,a)
if(z.a===0){for(z=this.z;y=z.length,y!==0;){if(0>=y)return H.h(z,-1)
x=z.pop()
y=init.globalState.f.a
w=y.b
v=y.a
u=v.length
w=(w-1&u-1)>>>0
y.b=w
if(w<0||w>=u)return H.h(v,w)
v[w]=x
if(w===y.c)y.bX();++y.d}this.y=!1}this.bq()},
ef:function(a,b){var z,y,x
if(this.ch==null)this.ch=[]
for(z=J.r(a),y=0;x=this.ch,y<x.length;y+=2)if(z.w(a,x[y])){z=this.ch
x=y+1
if(x>=z.length)return H.h(z,x)
z[x]=b
return}x.push(a)
this.ch.push(b)},
f0:function(a){var z,y,x
if(this.ch==null)return
for(z=J.r(a),y=0;x=this.ch,y<x.length;y+=2)if(z.w(a,x[y])){z=this.ch
x=y+2
z.toString
if(typeof z!=="object"||z===null||!!z.fixed$length)H.F(new P.K("removeRange"))
P.d8(y,x,z.length,null,null,null)
z.splice(y,x-y)
return}},
di:function(a,b){if(!this.r.w(0,a))return
this.db=b},
eH:function(a,b,c){var z=J.r(b)
if(!z.w(b,0))z=z.w(b,1)&&!this.cy
else z=!0
if(z){J.ar(a,c)
return}z=this.cx
if(z==null){z=P.bR(null,null)
this.cx=z}z.aa(new H.iB(a,c))},
eF:function(a,b){var z
if(!this.r.w(0,a))return
z=J.r(b)
if(!z.w(b,0))z=z.w(b,1)&&!this.cy
else z=!0
if(z){this.bw()
return}z=this.cx
if(z==null){z=P.bR(null,null)
this.cx=z}z.aa(this.geS())},
eI:function(a,b){var z,y,x
z=this.dx
if(z.a===0){if(this.db===!0&&this===init.globalState.e)return
if(self.console&&self.console.error)self.console.error(a,b)
else{P.b4(a)
if(b!=null)P.b4(b)}return}y=new Array(2)
y.fixed$length=Array
y[0]=J.a_(a)
y[1]=b==null?null:J.a_(b)
for(x=new P.cT(z,z.r,null,null),x.c=z.e;x.A();)J.ar(x.d,y)},
aJ:function(a){var z,y,x,w,v,u,t
z=init.globalState.d
init.globalState.d=this
$=this.d
y=null
x=this.cy
this.cy=!0
try{y=a.$0()}catch(u){t=H.H(u)
w=t
v=H.P(u)
this.eI(w,v)
if(this.db===!0){this.bw()
if(this===init.globalState.e)throw u}}finally{this.cy=x
init.globalState.d=z
if(z!=null)$=z.geP()
if(this.cx!=null)for(;t=this.cx,!t.gT(t);)this.cx.d_().$0()}return y},
cX:function(a){return this.b.h(0,a)},
bO:function(a,b){var z=this.b
if(z.ck(a))throw H.e(P.b8("Registry: ports must be registered only once."))
z.i(0,a,b)},
bq:function(){var z=this.b
if(z.gl(z)-this.c.a>0||this.y||!this.x)init.globalState.z.i(0,this.a,this)
else this.bw()},
bw:[function(){var z,y,x,w,v
z=this.cx
if(z!=null)z.au(0)
for(z=this.b,y=z.gd8(z),y=y.gE(y);y.A();)y.gB().dO()
z.au(0)
this.c.au(0)
init.globalState.z.aO(0,this.a)
this.dx.au(0)
if(this.ch!=null){for(x=0;z=this.ch,y=z.length,x<y;x+=2){w=z[x]
v=x+1
if(v>=y)return H.h(z,v)
J.ar(w,z[v])}this.ch=null}},"$0","geS",0,0,2]},
iB:{
"^":"b:2;a,b",
$0:function(){J.ar(this.a,this.b)}},
ij:{
"^":"c;a,b",
ey:function(){var z=this.a
if(z.b===z.c)return
return z.d_()},
d3:function(){var z,y,x
z=this.ey()
if(z==null){if(init.globalState.e!=null)if(init.globalState.z.ck(init.globalState.e.a))if(init.globalState.r===!0){y=init.globalState.e.b
y=y.gT(y)}else y=!1
else y=!1
else y=!1
if(y)H.F(P.b8("Program exited with open ReceivePorts."))
y=init.globalState
if(y.x===!0){x=y.z
x=x.gT(x)&&y.f.b===0}else x=!1
if(x){y=y.Q
x=P.av(["command","close"])
x=new H.aj(!0,H.a(new P.dE(0,null,null,null,null,null,0),[null,P.B])).a_(x)
y.toString
self.postMessage(x)}return!1}z.eZ()
return!0},
c9:function(){if(self.window!=null)new H.ik(this).$0()
else for(;this.d3(););},
aP:function(){var z,y,x,w,v
if(init.globalState.x!==!0)this.c9()
else try{this.c9()}catch(x){w=H.H(x)
z=w
y=H.P(x)
w=init.globalState.Q
v=P.av(["command","error","msg",H.d(z)+"\n"+H.d(y)])
v=new H.aj(!0,P.aB(null,P.B)).a_(v)
w.toString
self.postMessage(v)}}},
ik:{
"^":"b:2;a",
$0:function(){if(!this.a.d3())return
P.ay(C.o,this)}},
aY:{
"^":"c;a,b,c",
eZ:function(){var z=this.a
if(z.y){z.z.push(this)
return}z.aJ(this.b)}},
iF:{
"^":"c;"},
fX:{
"^":"b:1;a,b,c,d,e,f",
$0:function(){H.fY(this.a,this.b,this.c,this.d,this.e,this.f)}},
fZ:{
"^":"b:2;a,b,c,d,e",
$0:function(){var z,y,x,w
z=this.e
z.x=!0
if(this.d!==!0)this.a.$1(this.c)
else{y=this.a
x=H.b3()
w=H.an(x,[x,x]).ah(y)
if(w)y.$2(this.b,this.c)
else{x=H.an(x,[x]).ah(y)
if(x)y.$1(this.b)
else y.$0()}}z.bq()}},
dy:{
"^":"c;"},
br:{
"^":"dy;b,a",
b4:function(a,b){var z,y,x,w
z=init.globalState.z.h(0,this.a)
if(z==null)return
y=this.b
if(y.gc_())return
x=H.j9(b)
if(z.geu()===y){y=J.L(x)
switch(y.h(x,0)){case"pause":z.cg(y.h(x,1),y.h(x,2))
break
case"resume":z.f1(y.h(x,1))
break
case"add-ondone":z.ef(y.h(x,1),y.h(x,2))
break
case"remove-ondone":z.f0(y.h(x,1))
break
case"set-errors-fatal":z.di(y.h(x,1),y.h(x,2))
break
case"ping":z.eH(y.h(x,1),y.h(x,2),y.h(x,3))
break
case"kill":z.eF(y.h(x,1),y.h(x,2))
break
case"getErrors":y=y.h(x,1)
z.dx.ac(0,y)
break
case"stopErrors":y=y.h(x,1)
z.dx.aO(0,y)
break}return}y=init.globalState.f
w="receive "+H.d(b)
y.a.aa(new H.aY(z,new H.iJ(this,x),w))},
w:function(a,b){if(b==null)return!1
return b instanceof H.br&&J.S(this.b,b.b)},
gC:function(a){return this.b.gbj()}},
iJ:{
"^":"b:1;a,b",
$0:function(){var z=this.a.b
if(!z.gc_())z.dJ(this.b)}},
c9:{
"^":"dy;b,c,a",
b4:function(a,b){var z,y,x
z=P.av(["command","message","port",this,"msg",b])
y=new H.aj(!0,P.aB(null,P.B)).a_(z)
if(init.globalState.x===!0){init.globalState.Q.toString
self.postMessage(y)}else{x=init.globalState.ch.h(0,this.b)
if(x!=null)x.postMessage(y)}},
w:function(a,b){if(b==null)return!1
return b instanceof H.c9&&J.S(this.b,b.b)&&J.S(this.a,b.a)&&J.S(this.c,b.c)},
gC:function(a){var z,y,x
z=this.b
if(typeof z!=="number")return z.dk()
y=this.a
if(typeof y!=="number")return y.dk()
x=this.c
if(typeof x!=="number")return H.l(x)
return(z<<16^y<<8^x)>>>0}},
bl:{
"^":"c;bj:a<,b,c_:c<",
dO:function(){this.c=!0
this.b=null},
dJ:function(a){if(this.c)return
this.dY(a)},
dY:function(a){return this.b.$1(a)},
$ishy:1},
hR:{
"^":"c;a,b,c",
a3:function(){if(self.setTimeout!=null){if(this.b)throw H.e(new P.K("Timer in event loop cannot be canceled."))
var z=this.c
if(z==null)return;--init.globalState.f.b
self.clearTimeout(z)
this.c=null}else throw H.e(new P.K("Canceling a timer."))},
dE:function(a,b){var z,y
if(a===0)z=self.setTimeout==null||init.globalState.x===!0
else z=!1
if(z){this.c=1
z=init.globalState.f
y=init.globalState.d
z.a.aa(new H.aY(y,new H.hT(this,b),"timer"))
this.b=!0}else if(self.setTimeout!=null){++init.globalState.f.b
this.c=self.setTimeout(H.a4(new H.hU(this,b),0),a)}else throw H.e(new P.K("Timer greater than 0."))},
static:{hS:function(a,b){var z=new H.hR(!0,!1,null)
z.dE(a,b)
return z}}},
hT:{
"^":"b:2;a,b",
$0:function(){this.a.c=null
this.b.$0()}},
hU:{
"^":"b:2;a,b",
$0:function(){this.a.c=null;--init.globalState.f.b
this.b.$0()}},
ai:{
"^":"c;bj:a<",
gC:function(a){var z=this.a
if(typeof z!=="number")return z.fc()
z=C.a.cd(z,0)^C.a.aF(z,4294967296)
z=(~z>>>0)+(z<<15>>>0)&4294967295
z=((z^z>>>12)>>>0)*5&4294967295
z=((z^z>>>4)>>>0)*2057&4294967295
return(z^z>>>16)>>>0},
w:function(a,b){var z,y
if(b==null)return!1
if(b===this)return!0
if(b instanceof H.ai){z=this.a
y=b.a
return z==null?y==null:z===y}return!1}},
aj:{
"^":"c;a,b",
a_:[function(a){var z,y,x,w,v
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
z=this.b
y=z.h(0,a)
if(y!=null)return["ref",y]
z.i(0,a,z.gl(z))
z=J.r(a)
if(!!z.$isbU)return["buffer",a]
if(!!z.$isbi)return["typed",a]
if(!!z.$isaP)return this.de(a)
if(!!z.$isfU){x=this.gda()
w=a.gam()
w=H.bg(w,x,H.O(w,"J",0),null)
w=P.bS(w,!0,H.O(w,"J",0))
z=z.gd8(a)
z=H.bg(z,x,H.O(z,"J",0),null)
return["map",w,P.bS(z,!0,H.O(z,"J",0))]}if(!!z.$ish6)return this.df(a)
if(!!z.$isf)this.d6(a)
if(!!z.$ishy)this.aR(a,"RawReceivePorts can't be transmitted:")
if(!!z.$isbr)return this.dg(a)
if(!!z.$isc9)return this.dh(a)
if(!!z.$isb){v=a.$static_name
if(v==null)this.aR(a,"Closures can't be transmitted:")
return["function",v]}if(!!z.$isai)return["capability",a.a]
if(!(a instanceof P.c))this.d6(a)
return["dart",init.classIdExtractor(a),this.dd(init.classFieldsExtractor(a))]},"$1","gda",2,0,0],
aR:function(a,b){throw H.e(new P.K(H.d(b==null?"Can't transmit:":b)+" "+H.d(a)))},
d6:function(a){return this.aR(a,null)},
de:function(a){var z=this.dc(a)
if(!!a.fixed$length)return["fixed",z]
if(!a.fixed$length)return["extendable",z]
if(!a.immutable$list)return["mutable",z]
if(a.constructor===Array)return["const",z]
this.aR(a,"Can't serialize indexable: ")},
dc:function(a){var z,y,x
z=[]
C.f.sl(z,a.length)
for(y=0;y<a.length;++y){x=this.a_(a[y])
if(y>=z.length)return H.h(z,y)
z[y]=x}return z},
dd:function(a){var z
for(z=0;z<a.length;++z)C.f.i(a,z,this.a_(a[z]))
return a},
df:function(a){var z,y,x,w
if(!!a.constructor&&a.constructor!==Object)this.aR(a,"Only plain JS Objects are supported:")
z=Object.keys(a)
y=[]
C.f.sl(y,z.length)
for(x=0;x<z.length;++x){w=this.a_(a[z[x]])
if(x>=y.length)return H.h(y,x)
y[x]=w}return["js-object",z,y]},
dh:function(a){if(this.a)return["sendport",a.b,a.a,a.c]
return["raw sendport",a]},
dg:function(a){if(this.a)return["sendport",init.globalState.b,a.a,a.b.gbj()]
return["raw sendport",a]}},
bp:{
"^":"c;a,b",
ak:[function(a){var z,y,x,w,v,u
if(a==null||typeof a==="string"||typeof a==="number"||typeof a==="boolean")return a
if(typeof a!=="object"||a===null||a.constructor!==Array)throw H.e(P.aK("Bad serialized message: "+H.d(a)))
switch(C.f.geD(a)){case"ref":if(1>=a.length)return H.h(a,1)
z=a[1]
y=this.b
if(z>>>0!==z||z>=y.length)return H.h(y,z)
return y[z]
case"buffer":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return x
case"typed":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return x
case"fixed":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
y=H.a(this.aH(x),[null])
y.fixed$length=Array
return y
case"extendable":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return H.a(this.aH(x),[null])
case"mutable":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return this.aH(x)
case"const":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
y=H.a(this.aH(x),[null])
y.fixed$length=Array
return y
case"map":return this.eB(a)
case"sendport":return this.eC(a)
case"raw sendport":if(1>=a.length)return H.h(a,1)
x=a[1]
this.b.push(x)
return x
case"js-object":return this.eA(a)
case"function":if(1>=a.length)return H.h(a,1)
x=init.globalFunctions[a[1]]()
this.b.push(x)
return x
case"capability":if(1>=a.length)return H.h(a,1)
return new H.ai(a[1])
case"dart":y=a.length
if(1>=y)return H.h(a,1)
w=a[1]
if(2>=y)return H.h(a,2)
v=a[2]
u=init.instanceFromClassId(w)
this.b.push(u)
this.aH(v)
return init.initializeEmptyInstance(w,u,v)
default:throw H.e("couldn't deserialize: "+H.d(a))}},"$1","gez",2,0,0],
aH:function(a){var z,y,x
z=J.L(a)
y=0
while(!0){x=z.gl(a)
if(typeof x!=="number")return H.l(x)
if(!(y<x))break
z.i(a,y,this.ak(z.h(a,y)));++y}return a},
eB:function(a){var z,y,x,w,v,u
z=a.length
if(1>=z)return H.h(a,1)
y=a[1]
if(2>=z)return H.h(a,2)
x=a[2]
w=P.bP()
this.b.push(w)
y=J.ee(y,this.gez()).bD(0)
for(z=J.L(y),v=J.L(x),u=0;u<z.gl(y);++u){if(u>=y.length)return H.h(y,u)
w.i(0,y[u],this.ak(v.h(x,u)))}return w},
eC:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.h(a,1)
y=a[1]
if(2>=z)return H.h(a,2)
x=a[2]
if(3>=z)return H.h(a,3)
w=a[3]
if(J.S(y,init.globalState.b)){v=init.globalState.z.h(0,x)
if(v==null)return
u=v.cX(w)
if(u==null)return
t=new H.br(u,x)}else t=new H.c9(y,w,x)
this.b.push(t)
return t},
eA:function(a){var z,y,x,w,v,u,t
z=a.length
if(1>=z)return H.h(a,1)
y=a[1]
if(2>=z)return H.h(a,2)
x=a[2]
w={}
this.b.push(w)
z=J.L(y)
v=J.L(x)
u=0
while(!0){t=z.gl(y)
if(typeof t!=="number")return H.l(t)
if(!(u<t))break
w[z.h(y,u)]=this.ak(v.h(x,u));++u}return w}}}],["","",,H,{
"^":"",
jr:function(a){return init.types[a]},
dW:function(a,b){var z
if(b!=null){z=b.x
if(z!=null)return z}return!!J.r(a).$isaT},
d:function(a){var z
if(typeof a==="string")return a
if(typeof a==="number"){if(a!==0)return""+a}else if(!0===a)return"true"
else if(!1===a)return"false"
else if(a==null)return"null"
z=J.a_(a)
if(typeof z!=="string")throw H.e(H.ag(a))
return z},
ab:function(a){var z=a.$identityHash
if(z==null){z=Math.random()*0x3fffffff|0
a.$identityHash=z}return z},
d4:function(a,b){throw H.e(new P.cK(a,null,null))},
ac:function(a,b,c){var z,y,x,w,v,u
H.cc(a)
z=/^\s*[+-]?((0x[a-f0-9]+)|(\d+)|([a-z0-9]+))\s*$/i.exec(a)
if(z==null)return H.d4(a,c)
if(3>=z.length)return H.h(z,3)
y=z[3]
if(b<2||b>36)throw H.e(P.X(b,2,36,"radix",null))
if(b===10&&y!=null)return parseInt(a,10)
if(b<10||y==null){x=b<=10?47+b:86+b
w=z[1]
for(v=w.length,u=0;u<v;++u)if((C.c.aj(w,u)|32)>x)return H.d4(a,c)}return parseInt(a,b)},
d3:function(a,b){throw H.e(new P.cK("Invalid double",a,null))},
hx:function(a,b){var z,y
H.cc(a)
if(!/^\s*[+-]?(?:Infinity|NaN|(?:\.\d+|\d+(?:\.\d*)?)(?:[eE][+-]?\d+)?)\s*$/.test(a))return H.d3(a,b)
z=parseFloat(a)
if(isNaN(z)){y=C.c.f9(a)
if(y==="NaN"||y==="+NaN"||y==="-NaN")return z
return H.d3(a,b)}return z},
bZ:function(a){var z,y,x,w,v,u,t
z=J.r(a)
y=z.constructor
if(typeof y=="function"){x=y.name
w=typeof x==="string"?x:null}else w=null
if(w==null||z===C.A||!!J.r(a).$isaX){v=C.q(a)
if(v==="Object"){u=a.constructor
if(typeof u=="function"){t=String(u).match(/^\s*function\s*([\w$]*)\s*\(/)[1]
if(typeof t==="string"&&/^\w+$/.test(t))w=t}if(w==null)w=v}else w=v}w=w
if(w.length>1&&C.c.aj(w,0)===36)w=C.c.bL(w,1)
return(w+H.dX(H.cf(a),0,null)).replace(/[^<,> ]+/g,function(b){return init.mangledGlobalNames[b]||b})},
bk:function(a){return"Instance of '"+H.bZ(a)+"'"},
N:function(a){if(a.date===void 0)a.date=new Date(a.a)
return a.date},
bj:function(a,b){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.ag(a))
return a[b]},
c_:function(a,b,c){if(a==null||typeof a==="boolean"||typeof a==="number"||typeof a==="string")throw H.e(H.ag(a))
a[b]=c},
l:function(a){throw H.e(H.ag(a))},
h:function(a,b){if(a==null)J.aJ(a)
throw H.e(H.G(a,b))},
G:function(a,b){var z,y
if(typeof b!=="number"||Math.floor(b)!==b)return new P.a5(!0,b,"index",null)
z=J.aJ(a)
if(!(b<0)){if(typeof z!=="number")return H.l(z)
y=b>=z}else y=!0
if(y)return P.ba(b,a,"index",null,z)
return P.aV(b,"index",null)},
ag:function(a){return new P.a5(!0,a,null,null)},
jl:function(a){return a},
aF:function(a){if(typeof a!=="number"||Math.floor(a)!==a)throw H.e(H.ag(a))
return a},
cc:function(a){return a},
e:function(a){var z
if(a==null)a=new P.bY()
z=new Error()
z.dartException=a
if("defineProperty" in Object){Object.defineProperty(z,"message",{get:H.e4})
z.name=""}else z.toString=H.e4
return z},
e4:function(){return J.a_(this.dartException)},
F:function(a){throw H.e(a)},
by:function(a){throw H.e(new P.M(a))},
H:function(a){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
z=new H.jQ(a)
if(a==null)return
if(typeof a!=="object")return a
if("dartException" in a)return z.$1(a.dartException)
else if(!("message" in a))return a
y=a.message
if("number" in a&&typeof a.number=="number"){x=a.number
w=x&65535
if((C.b.cd(x,16)&8191)===10)switch(w){case 438:return z.$1(H.bO(H.d(y)+" (Error "+w+")",null))
case 445:case 5007:v=H.d(y)+" (Error "+w+")"
return z.$1(new H.d2(v,null))}}if(a instanceof TypeError){u=$.$get$dj()
t=$.$get$dk()
s=$.$get$dl()
r=$.$get$dm()
q=$.$get$dr()
p=$.$get$ds()
o=$.$get$dp()
$.$get$dn()
n=$.$get$du()
m=$.$get$dt()
l=u.a1(y)
if(l!=null)return z.$1(H.bO(y,l))
else{l=t.a1(y)
if(l!=null){l.method="call"
return z.$1(H.bO(y,l))}else{l=s.a1(y)
if(l==null){l=r.a1(y)
if(l==null){l=q.a1(y)
if(l==null){l=p.a1(y)
if(l==null){l=o.a1(y)
if(l==null){l=r.a1(y)
if(l==null){l=n.a1(y)
if(l==null){l=m.a1(y)
v=l!=null}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0}else v=!0
if(v)return z.$1(new H.d2(y,l==null?null:l.method))}}return z.$1(new H.hW(typeof y==="string"?y:""))}if(a instanceof RangeError){if(typeof y==="string"&&y.indexOf("call stack")!==-1)return new P.de()
y=function(b){try{return String(b)}catch(k){}return null}(a)
return z.$1(new P.a5(!1,null,null,typeof y==="string"?y.replace(/^RangeError:\s*/,""):y))}if(typeof InternalError=="function"&&a instanceof InternalError)if(typeof y==="string"&&y==="too much recursion")return new P.de()
return a},
P:function(a){var z
if(a==null)return new H.dF(a,null)
z=a.$cachedTrace
if(z!=null)return z
return a.$cachedTrace=new H.dF(a,null)},
jI:function(a){if(a==null||typeof a!='object')return J.R(a)
else return H.ab(a)},
jp:function(a,b){var z,y,x,w
z=a.length
for(y=0;y<z;y=w){x=y+1
w=x+1
b.i(0,a[y],a[x])}return b},
jA:function(a,b,c,d,e,f,g){var z=J.r(c)
if(z.w(c,0))return H.aZ(b,new H.jB(a))
else if(z.w(c,1))return H.aZ(b,new H.jC(a,d))
else if(z.w(c,2))return H.aZ(b,new H.jD(a,d,e))
else if(z.w(c,3))return H.aZ(b,new H.jE(a,d,e,f))
else if(z.w(c,4))return H.aZ(b,new H.jF(a,d,e,f,g))
else throw H.e(P.b8("Unsupported number of arguments for wrapped closure"))},
a4:function(a,b){var z
if(a==null)return
z=a.$identity
if(!!z)return z
z=function(c,d,e,f){return function(g,h,i,j){return f(c,e,d,g,h,i,j)}}(a,b,init.globalState.d,H.jA)
a.$identity=z
return z},
fu:function(a,b,c,d,e,f){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=b[0]
y=z.$callName
if(!!J.r(c).$isn){z.$reflectionInfo=c
x=H.hA(z).r}else x=c
w=d?Object.create(new H.hF().constructor.prototype):Object.create(new H.bD(null,null,null,null).constructor.prototype)
w.$initialize=w.constructor
if(d)v=function(){this.$initialize()}
else{u=$.V
$.V=J.aH(u,1)
u=new Function("a,b,c,d","this.$initialize(a,b,c,d);"+u)
v=u}w.constructor=v
v.prototype=w
u=!d
if(u){t=e.length==1&&!0
s=H.ct(a,z,t)
s.$reflectionInfo=c}else{w.$static_name=f
s=z
t=!1}if(typeof x=="number")r=function(g){return function(){return H.jr(g)}}(x)
else if(u&&typeof x=="function"){q=t?H.cr:H.bE
r=function(g,h){return function(){return g.apply({$receiver:h(this)},arguments)}}(x,q)}else throw H.e("Error in reflectionInfo.")
w.$signature=r
w[y]=s
for(u=b.length,p=1;p<u;++p){o=b[p]
n=o.$callName
if(n!=null){m=d?o:H.ct(a,o,t)
w[n]=m}}w["call*"]=s
w.$requiredArgCount=z.$requiredArgCount
w.$defaultValues=z.$defaultValues
return v},
fr:function(a,b,c,d){var z=H.bE
switch(b?-1:a){case 0:return function(e,f){return function(){return f(this)[e]()}}(c,z)
case 1:return function(e,f){return function(g){return f(this)[e](g)}}(c,z)
case 2:return function(e,f){return function(g,h){return f(this)[e](g,h)}}(c,z)
case 3:return function(e,f){return function(g,h,i){return f(this)[e](g,h,i)}}(c,z)
case 4:return function(e,f){return function(g,h,i,j){return f(this)[e](g,h,i,j)}}(c,z)
case 5:return function(e,f){return function(g,h,i,j,k){return f(this)[e](g,h,i,j,k)}}(c,z)
default:return function(e,f){return function(){return e.apply(f(this),arguments)}}(d,z)}},
ct:function(a,b,c){var z,y,x,w,v,u
if(c)return H.ft(a,b)
z=b.$stubName
y=b.length
x=a[z]
w=b==null?x==null:b===x
v=!w||y>=27
if(v)return H.fr(y,!w,z,b)
if(y===0){w=$.as
if(w==null){w=H.b5("self")
$.as=w}w="return function(){return this."+H.d(w)+"."+H.d(z)+"();"
v=$.V
$.V=J.aH(v,1)
return new Function(w+H.d(v)+"}")()}u="abcdefghijklmnopqrstuvwxyz".split("").splice(0,y).join(",")
w="return function("+u+"){return this."
v=$.as
if(v==null){v=H.b5("self")
$.as=v}v=w+H.d(v)+"."+H.d(z)+"("+u+");"
w=$.V
$.V=J.aH(w,1)
return new Function(v+H.d(w)+"}")()},
fs:function(a,b,c,d){var z,y
z=H.bE
y=H.cr
switch(b?-1:a){case 0:throw H.e(new H.hB("Intercepted function with no arguments."))
case 1:return function(e,f,g){return function(){return f(this)[e](g(this))}}(c,z,y)
case 2:return function(e,f,g){return function(h){return f(this)[e](g(this),h)}}(c,z,y)
case 3:return function(e,f,g){return function(h,i){return f(this)[e](g(this),h,i)}}(c,z,y)
case 4:return function(e,f,g){return function(h,i,j){return f(this)[e](g(this),h,i,j)}}(c,z,y)
case 5:return function(e,f,g){return function(h,i,j,k){return f(this)[e](g(this),h,i,j,k)}}(c,z,y)
case 6:return function(e,f,g){return function(h,i,j,k,l){return f(this)[e](g(this),h,i,j,k,l)}}(c,z,y)
default:return function(e,f,g,h){return function(){h=[g(this)]
Array.prototype.push.apply(h,arguments)
return e.apply(f(this),h)}}(d,z,y)}},
ft:function(a,b){var z,y,x,w,v,u,t,s
z=H.fh()
y=$.cq
if(y==null){y=H.b5("receiver")
$.cq=y}x=b.$stubName
w=b.length
v=a[x]
u=b==null?v==null:b===v
t=!u||w>=28
if(t)return H.fs(w,!u,x,b)
if(w===1){y="return function(){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+");"
u=$.V
$.V=J.aH(u,1)
return new Function(y+H.d(u)+"}")()}s="abcdefghijklmnopqrstuvwxyz".split("").splice(0,w-1).join(",")
y="return function("+s+"){return this."+H.d(z)+"."+H.d(x)+"(this."+H.d(y)+", "+s+");"
u=$.V
$.V=J.aH(u,1)
return new Function(y+H.d(u)+"}")()},
cd:function(a,b,c,d,e,f){var z
b.fixed$length=Array
if(!!J.r(c).$isn){c.fixed$length=Array
z=c}else z=c
return H.fu(a,b,z,!!d,e,f)},
jK:function(a,b){var z=J.L(b)
throw H.e(H.fq(H.bZ(a),z.X(b,3,z.gl(b))))},
j:function(a,b){var z
if(a!=null)z=(typeof a==="object"||typeof a==="function")&&J.r(a)[b]
else z=!0
if(z)return a
H.jK(a,b)},
jP:function(a){throw H.e(new P.fz("Cyclic initialization for static "+H.d(a)))},
an:function(a,b,c){return new H.hC(a,b,c,null)},
b3:function(){return C.u},
bx:function(){return(Math.random()*0x100000000>>>0)+(Math.random()*0x100000000>>>0)*4294967296},
a:function(a,b){a.$builtinTypeInfo=b
return a},
cf:function(a){if(a==null)return
return a.$builtinTypeInfo},
dU:function(a,b){return H.e3(a["$as"+H.d(b)],H.cf(a))},
O:function(a,b,c){var z=H.dU(a,b)
return z==null?null:z[c]},
i:function(a,b){var z=H.cf(a)
return z==null?null:z[b]},
cj:function(a,b){if(a==null)return"dynamic"
else if(typeof a==="object"&&a!==null&&a.constructor===Array)return a[0].builtin$cls+H.dX(a,1,b)
else if(typeof a=="function")return a.builtin$cls
else if(typeof a==="number"&&Math.floor(a)===a)return C.b.j(a)
else return},
dX:function(a,b,c){var z,y,x,w,v,u
if(a==null)return""
z=new P.c1("")
for(y=b,x=!0,w=!0,v="";y<a.length;++y){if(x)x=!1
else z.a=v+", "
u=a[y]
if(u!=null)w=!1
v=z.a+=H.d(H.cj(u,c))}return w?"":"<"+H.d(z)+">"},
e3:function(a,b){if(typeof a=="function"){a=a.apply(null,b)
if(a==null)return a
if(typeof a==="object"&&a!==null&&a.constructor===Array)return a
if(typeof a=="function")return a.apply(null,b)}return b},
jg:function(a,b){var z,y
if(a==null||b==null)return!0
z=a.length
for(y=0;y<z;++y)if(!H.Q(a[y],b[y]))return!1
return!0},
ce:function(a,b,c){return a.apply(b,H.dU(b,c))},
Q:function(a,b){var z,y,x,w,v
if(a===b)return!0
if(a==null||b==null)return!0
if('func' in b)return H.dV(a,b)
if('func' in a)return b.builtin$cls==="km"
z=typeof a==="object"&&a!==null&&a.constructor===Array
y=z?a[0]:a
x=typeof b==="object"&&b!==null&&b.constructor===Array
w=x?b[0]:b
if(w!==y){if(!('$is'+H.cj(w,null) in y.prototype))return!1
v=y.prototype["$as"+H.d(H.cj(w,null))]}else v=null
if(!z&&v==null||!x)return!0
z=z?a.slice(1):null
x=x?b.slice(1):null
return H.jg(H.e3(v,z),x)},
dO:function(a,b,c){var z,y,x,w,v
z=b==null
if(z&&a==null)return!0
if(z)return c
if(a==null)return!1
y=a.length
x=b.length
if(c){if(y<x)return!1}else if(y!==x)return!1
for(w=0;w<x;++w){z=a[w]
v=b[w]
if(!(H.Q(z,v)||H.Q(v,z)))return!1}return!0},
jf:function(a,b){var z,y,x,w,v,u
if(b==null)return!0
if(a==null)return!1
z=Object.getOwnPropertyNames(b)
z.fixed$length=Array
y=z
for(z=y.length,x=0;x<z;++x){w=y[x]
if(!Object.hasOwnProperty.call(a,w))return!1
v=b[w]
u=a[w]
if(!(H.Q(v,u)||H.Q(u,v)))return!1}return!0},
dV:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l
if(!('func' in a))return!1
if("v" in a){if(!("v" in b)&&"ret" in b)return!1}else if(!("v" in b)){z=a.ret
y=b.ret
if(!(H.Q(z,y)||H.Q(y,z)))return!1}x=a.args
w=b.args
v=a.opt
u=b.opt
t=x!=null?x.length:0
s=w!=null?w.length:0
r=v!=null?v.length:0
q=u!=null?u.length:0
if(t>s)return!1
if(t+r<s+q)return!1
if(t===s){if(!H.dO(x,w,!1))return!1
if(!H.dO(v,u,!0))return!1}else{for(p=0;p<t;++p){o=x[p]
n=w[p]
if(!(H.Q(o,n)||H.Q(n,o)))return!1}for(m=p,l=0;m<s;++l,++m){o=v[l]
n=w[m]
if(!(H.Q(o,n)||H.Q(n,o)))return!1}for(m=0;m<q;++l,++m){o=v[l]
n=u[m]
if(!(H.Q(o,n)||H.Q(n,o)))return!1}}return H.jf(a.named,b.named)},
ln:function(a){var z=$.cg
return"Instance of "+(z==null?"<Unknown>":z.$1(a))},
lk:function(a){return H.ab(a)},
lj:function(a,b,c){Object.defineProperty(a,b,{value:c,enumerable:false,writable:true,configurable:true})},
jG:function(a){var z,y,x,w,v,u
z=$.cg.$1(a)
y=$.bs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]
if(w==null){z=$.dN.$2(a,z)
if(z!=null){y=$.bs[z]
if(y!=null){Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}x=$.bv[z]
if(x!=null)return x
w=init.interceptorsByTag[z]}}if(w==null)return
x=w.prototype
v=z[0]
if(v==="!"){y=H.ci(x)
$.bs[z]=y
Object.defineProperty(a,init.dispatchPropertyName,{value:y,enumerable:false,writable:true,configurable:true})
return y.i}if(v==="~"){$.bv[z]=x
return x}if(v==="-"){u=H.ci(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}if(v==="+")return H.dZ(a,x)
if(v==="*")throw H.e(new P.bo(z))
if(init.leafTags[z]===true){u=H.ci(x)
Object.defineProperty(Object.getPrototypeOf(a),init.dispatchPropertyName,{value:u,enumerable:false,writable:true,configurable:true})
return u.i}else return H.dZ(a,x)},
dZ:function(a,b){var z=Object.getPrototypeOf(a)
Object.defineProperty(z,init.dispatchPropertyName,{value:J.bw(b,z,null,null),enumerable:false,writable:true,configurable:true})
return b},
ci:function(a){return J.bw(a,!1,null,!!a.$isaT)},
jH:function(a,b,c){var z=b.prototype
if(init.leafTags[a]===true)return J.bw(z,!1,null,!!z.$isaT)
else return J.bw(z,c,null,null)},
jy:function(){if(!0===$.ch)return
$.ch=!0
H.jz()},
jz:function(){var z,y,x,w,v,u,t,s
$.bs=Object.create(null)
$.bv=Object.create(null)
H.ju()
z=init.interceptorsByTag
y=Object.getOwnPropertyNames(z)
if(typeof window!="undefined"){window
x=function(){}
for(w=0;w<y.length;++w){v=y[w]
u=$.e_.$1(v)
if(u!=null){t=H.jH(v,z[v],u)
if(t!=null){Object.defineProperty(u,init.dispatchPropertyName,{value:t,enumerable:false,writable:true,configurable:true})
x.prototype=u}}}}for(w=0;w<y.length;++w){v=y[w]
if(/^[A-Za-z_]/.test(v)){s=z[v]
z["!"+v]=s
z["~"+v]=s
z["-"+v]=s
z["+"+v]=s
z["*"+v]=s}}},
ju:function(){var z,y,x,w,v,u,t
z=C.E()
z=H.am(C.B,H.am(C.G,H.am(C.r,H.am(C.r,H.am(C.F,H.am(C.C,H.am(C.D(C.q),z)))))))
if(typeof dartNativeDispatchHooksTransformer!="undefined"){y=dartNativeDispatchHooksTransformer
if(typeof y=="function")y=[y]
if(y.constructor==Array)for(x=0;x<y.length;++x){w=y[x]
if(typeof w=="function")z=w(z)||z}}v=z.getTag
u=z.getUnknownTag
t=z.prototypeForTag
$.cg=new H.jv(v)
$.dN=new H.jw(u)
$.e_=new H.jx(t)},
am:function(a,b){return a(b)||b},
jO:function(a,b,c){var z,y
if(typeof b==="string")return a.indexOf(b,c)>=0
else{z=C.c.bL(a,c)
b.toString
H.cc(z)
H.aF(0)
y=new H.iV(z,b,0)
return!y.gT(y)}},
hz:{
"^":"c;a,b,c,d,e,f,r,x",
static:{hA:function(a){var z,y,x
z=a.$reflectionInfo
if(z==null)return
z.fixed$length=Array
z=z
y=z[0]
x=z[1]
return new H.hz(a,z,(y&1)===1,y>>1,x>>1,(x&1)===1,z[2],null)}}},
hV:{
"^":"c;a,b,c,d,e,f",
a1:function(a){var z,y,x
z=new RegExp(this.a).exec(a)
if(z==null)return
y=Object.create(null)
x=this.b
if(x!==-1)y.arguments=z[x+1]
x=this.c
if(x!==-1)y.argumentsExpr=z[x+1]
x=this.d
if(x!==-1)y.expr=z[x+1]
x=this.e
if(x!==-1)y.method=z[x+1]
x=this.f
if(x!==-1)y.receiver=z[x+1]
return y},
static:{Y:function(a){var z,y,x,w,v,u
a=a.replace(String({}),'$receiver$').replace(new RegExp("[[\\]{}()*+?.\\\\^$|]",'g'),'\\$&')
z=a.match(/\\\$[a-zA-Z]+\\\$/g)
if(z==null)z=[]
y=z.indexOf("\\$arguments\\$")
x=z.indexOf("\\$argumentsExpr\\$")
w=z.indexOf("\\$expr\\$")
v=z.indexOf("\\$method\\$")
u=z.indexOf("\\$receiver\\$")
return new H.hV(a.replace('\\$arguments\\$','((?:x|[^x])*)').replace('\\$argumentsExpr\\$','((?:x|[^x])*)').replace('\\$expr\\$','((?:x|[^x])*)').replace('\\$method\\$','((?:x|[^x])*)').replace('\\$receiver\\$','((?:x|[^x])*)'),y,x,w,v,u)},bn:function(a){return function($expr$){var $argumentsExpr$='$arguments$'
try{$expr$.$method$($argumentsExpr$)}catch(z){return z.message}}(a)},dq:function(a){return function($expr$){try{$expr$.$method$}catch(z){return z.message}}(a)}}},
d2:{
"^":"I;a,b",
j:function(a){var z=this.b
if(z==null)return"NullError: "+H.d(this.a)
return"NullError: method not found: '"+H.d(z)+"' on null"}},
ha:{
"^":"I;a,b,c",
j:function(a){var z,y
z=this.b
if(z==null)return"NoSuchMethodError: "+H.d(this.a)
y=this.c
if(y==null)return"NoSuchMethodError: method not found: '"+H.d(z)+"' ("+H.d(this.a)+")"
return"NoSuchMethodError: method not found: '"+H.d(z)+"' on '"+H.d(y)+"' ("+H.d(this.a)+")"},
static:{bO:function(a,b){var z,y
z=b==null
y=z?null:b.method
return new H.ha(a,y,z?null:b.receiver)}}},
hW:{
"^":"I;a",
j:function(a){var z=this.a
return C.c.gT(z)?"Error":"Error: "+z}},
jQ:{
"^":"b:0;a",
$1:function(a){if(!!J.r(a).$isI)if(a.$thrownJsError==null)a.$thrownJsError=this.a
return a}},
dF:{
"^":"c;a,b",
j:function(a){var z,y
z=this.b
if(z!=null)return z
z=this.a
y=z!==null&&typeof z==="object"?z.stack:null
z=y==null?"":y
this.b=z
return z}},
jB:{
"^":"b:1;a",
$0:function(){return this.a.$0()}},
jC:{
"^":"b:1;a,b",
$0:function(){return this.a.$1(this.b)}},
jD:{
"^":"b:1;a,b,c",
$0:function(){return this.a.$2(this.b,this.c)}},
jE:{
"^":"b:1;a,b,c,d",
$0:function(){return this.a.$3(this.b,this.c,this.d)}},
jF:{
"^":"b:1;a,b,c,d,e",
$0:function(){return this.a.$4(this.b,this.c,this.d,this.e)}},
b:{
"^":"c;",
j:function(a){return"Closure '"+H.bZ(this)+"'"},
gd9:function(){return this},
gd9:function(){return this}},
dg:{
"^":"b;"},
hF:{
"^":"dg;",
j:function(a){var z=this.$static_name
if(z==null)return"Closure of unknown static method"
return"Closure '"+z+"'"}},
bD:{
"^":"dg;a,b,c,d",
w:function(a,b){if(b==null)return!1
if(this===b)return!0
if(!(b instanceof H.bD))return!1
return this.a===b.a&&this.b===b.b&&this.c===b.c},
gC:function(a){var z,y
z=this.c
if(z==null)y=H.ab(this.a)
else y=typeof z!=="object"?J.R(z):H.ab(z)
z=H.ab(this.b)
if(typeof y!=="number")return y.fe()
return(y^z)>>>0},
j:function(a){var z=this.c
if(z==null)z=this.a
return"Closure '"+H.d(this.d)+"' of "+H.bk(z)},
static:{bE:function(a){return a.a},cr:function(a){return a.c},fh:function(){var z=$.as
if(z==null){z=H.b5("self")
$.as=z}return z},b5:function(a){var z,y,x,w,v
z=new H.bD("self","target","receiver","name")
y=Object.getOwnPropertyNames(z)
y.fixed$length=Array
x=y
for(y=x.length,w=0;w<y;++w){v=x[w]
if(z[v]===a)return v}}}},
fp:{
"^":"I;a",
j:function(a){return this.a},
static:{fq:function(a,b){return new H.fp("CastError: Casting value of type "+H.d(a)+" to incompatible type "+H.d(b))}}},
hB:{
"^":"I;a",
j:function(a){return"RuntimeError: "+H.d(this.a)}},
dc:{
"^":"c;"},
hC:{
"^":"dc;a,b,c,d",
ah:function(a){var z=this.dU(a)
return z==null?!1:H.dV(z,this.az())},
dU:function(a){var z=J.r(a)
return"$signature" in z?z.$signature():null},
az:function(){var z,y,x,w,v,u,t
z={func:"dynafunc"}
y=this.a
x=J.r(y)
if(!!x.$isl0)z.v=true
else if(!x.$iscC)z.ret=y.az()
y=this.b
if(y!=null&&y.length!==0)z.args=H.db(y)
y=this.c
if(y!=null&&y.length!==0)z.opt=H.db(y)
y=this.d
if(y!=null){w=Object.create(null)
v=H.dR(y)
for(x=v.length,u=0;u<x;++u){t=v[u]
w[t]=y[t].az()}z.named=w}return z},
j:function(a){var z,y,x,w,v,u,t,s
z=this.b
if(z!=null)for(y=z.length,x="(",w=!1,v=0;v<y;++v,w=!0){u=z[v]
if(w)x+=", "
x+=H.d(u)}else{x="("
w=!1}z=this.c
if(z!=null&&z.length!==0){x=(w?x+", ":x)+"["
for(y=z.length,w=!1,v=0;v<y;++v,w=!0){u=z[v]
if(w)x+=", "
x+=H.d(u)}x+="]"}else{z=this.d
if(z!=null){x=(w?x+", ":x)+"{"
t=H.dR(z)
for(y=t.length,w=!1,v=0;v<y;++v,w=!0){s=t[v]
if(w)x+=", "
x+=H.d(z[s].az())+" "+s}x+="}"}}return x+(") -> "+H.d(this.a))},
static:{db:function(a){var z,y,x
a=a
z=[]
for(y=a.length,x=0;x<y;++x)z.push(a[x].az())
return z}}},
cC:{
"^":"dc;",
j:function(a){return"dynamic"},
az:function(){return}},
a2:{
"^":"c;a,b,c,d,e,f,r",
gl:function(a){return this.a},
gT:function(a){return this.a===0},
gam:function(){return H.a(new H.hh(this),[H.i(this,0)])},
gd8:function(a){return H.bg(this.gam(),new H.h9(this),H.i(this,0),H.i(this,1))},
ck:function(a){var z,y
if(typeof a==="string"){z=this.b
if(z==null)return!1
return this.bS(z,a)}else if(typeof a==="number"&&(a&0x3ffffff)===a){y=this.c
if(y==null)return!1
return this.bS(y,a)}else return this.eM(a)},
eM:function(a){var z=this.d
if(z==null)return!1
return this.aM(this.a2(z,this.aL(a)),a)>=0},
h:function(a,b){var z,y,x
if(typeof b==="string"){z=this.b
if(z==null)return
y=this.a2(z,b)
return y==null?null:y.gal()}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null)return
y=this.a2(x,b)
return y==null?null:y.gal()}else return this.eN(b)},
eN:function(a){var z,y,x
z=this.d
if(z==null)return
y=this.a2(z,this.aL(a))
x=this.aM(y,a)
if(x<0)return
return y[x].gal()},
i:function(a,b,c){var z,y,x,w,v,u
if(typeof b==="string"){z=this.b
if(z==null){z=this.bl()
this.b=z}this.bM(z,b,c)}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null){y=this.bl()
this.c=y}this.bM(y,b,c)}else{x=this.d
if(x==null){x=this.bl()
this.d=x}w=this.aL(b)
v=this.a2(x,w)
if(v==null)this.bo(x,w,[this.b7(b,c)])
else{u=this.aM(v,b)
if(u>=0)v[u].sal(c)
else v.push(this.b7(b,c))}}},
aO:function(a,b){if(typeof b==="string")return this.c6(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.c6(this.c,b)
else return this.eO(b)},
eO:function(a){var z,y,x,w
z=this.d
if(z==null)return
y=this.a2(z,this.aL(a))
x=this.aM(y,a)
if(x<0)return
w=y.splice(x,1)[0]
this.ce(w)
return w.gal()},
au:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
S:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$2(z.a,z.b)
if(y!==this.r)throw H.e(new P.M(this))
z=z.c}},
bM:function(a,b,c){var z=this.a2(a,b)
if(z==null)this.bo(a,b,this.b7(b,c))
else z.sal(c)},
c6:function(a,b){var z
if(a==null)return
z=this.a2(a,b)
if(z==null)return
this.ce(z)
this.bT(a,b)
return z.gal()},
b7:function(a,b){var z,y
z=new H.hg(a,b,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.d=y
y.c=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
ce:function(a){var z,y
z=a.ge6()
y=a.c
if(z==null)this.e=y
else z.c=y
if(y==null)this.f=z
else y.d=z;--this.a
this.r=this.r+1&67108863},
aL:function(a){return J.R(a)&0x3ffffff},
aM:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].gcU(),b))return y
return-1},
j:function(a){return P.hm(this)},
a2:function(a,b){return a[b]},
bo:function(a,b,c){a[b]=c},
bT:function(a,b){delete a[b]},
bS:function(a,b){return this.a2(a,b)!=null},
bl:function(){var z=Object.create(null)
this.bo(z,"<non-identifier-key>",z)
this.bT(z,"<non-identifier-key>")
return z},
$isfU:1,
$isbf:1},
h9:{
"^":"b:0;a",
$1:function(a){return this.a.h(0,a)}},
hg:{
"^":"c;cU:a<,al:b@,c,e6:d<"},
hh:{
"^":"J;a",
gl:function(a){return this.a.a},
gE:function(a){var z,y
z=this.a
y=new H.hi(z,z.r,null,null)
y.c=z.e
return y},
S:function(a,b){var z,y,x
z=this.a
y=z.e
x=z.r
for(;y!=null;){b.$1(y.a)
if(x!==z.r)throw H.e(new P.M(z))
y=y.c}},
$isy:1},
hi:{
"^":"c;a,b,c,d",
gB:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(new P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.c
return!0}}}},
jv:{
"^":"b:0;a",
$1:function(a){return this.a(a)}},
jw:{
"^":"b:9;a",
$2:function(a,b){return this.a(a,b)}},
jx:{
"^":"b:10;a",
$1:function(a){return this.a(a)}},
hP:{
"^":"c;a,b,c",
h:function(a,b){if(b!==0)H.F(P.aV(b,null,null))
return this.c}},
iV:{
"^":"J;a,b,c",
gE:function(a){return new H.iW(this.a,this.b,this.c,null)},
$asJ:function(){return[P.ho]}},
iW:{
"^":"c;a,b,c,d",
A:function(){var z,y,x,w,v,u,t
z=this.c
y=this.b
x=y.length
w=this.a
v=w.length
if(z+x>v){this.d=null
return!1}u=w.indexOf(y,z)
if(u<0){this.c=v+1
this.d=null
return!1}t=u+x
this.d=new H.hP(u,w,y)
this.c=t===this.c?t+1:t
return!0},
gB:function(){return this.d}}}],["","",,F,{
"^":"",
ll:[function(){var z,y,x,w,v
z=window.innerWidth
y=window.innerWidth
if(typeof y!=="number")return y.p()
y=C.d.t(y*9/16)
x=new F.er(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!1)
x.a=z
x.b=y
if(typeof z!=="number")return z.a8()
x.c=C.d.t(z/2)
x.d=C.d.t(y/2)
w=C.d.t(z/8)
x.e=w
x.f=w
x.z=H.j(document.querySelector("#colorpicker"),"$isaM")
x.Q=H.j(document.querySelector("#hslpicker"),"$isbM")
x.ch=H.j(document.querySelector("#hsllum"),"$iscs")
x.cx=H.j(document.querySelector("#lumpicker"),"$isbM")
x.db=H.j(document.querySelector("#varprompt"),"$isaM")
x.dx=H.j(document.querySelector("#labelprompt"),"$isbe")
x.dy=H.j(document.querySelector("#labelColor"),"$isbe")
x.fy=H.j(document.querySelector("#customSetup"),"$isaM")
x.go=H.j(document.querySelector("#container"),"$isaM")
v=document.querySelector("#canvas")
w=J.C(v)
w.sI(v,z)
w.sH(v,y)
x.r=F.fe(v,x)
x.x=F.hc(x)
x.y=F.fj()
x.ej()
x.aV(window.innerWidth,window.innerHeight)
y=x.r
P.ck(y.gdl(y))
$.b0=x
x=$.$get$e1()
x.toString
x=H.a(new W.az(x,"click",!1),[null])
H.a(new W.m(0,x.a,x.b,W.k(F.jk()),!1),[H.i(x,0)]).k()},"$0","dQ",0,0,2],
lm:[function(a){var z,y
if(H.j(document.querySelector("#size2160p"),"$isaU").checked===!0)z=3840
else if(H.j(document.querySelector("#size480p"),"$isaU").checked===!0)z=854
else if(H.j(document.querySelector("#size720p"),"$isaU").checked===!0)z=1280
else if(H.j(document.querySelector("#size1080p"),"$isaU").checked===!0)z=1920
else z=H.j(document.querySelector("#size1440p"),"$isaU").checked===!0?2560:1920
$.b0.aV(z,z+100)
$.b0.r.cm()
y=J.em($.b0.r.b,"image/jpeg",0.95)
C.k.eY(window,y,"image","_blank")
$.b0.aV(window.innerWidth,window.innerHeight)},"$1","jk",2,0,18],
A:{
"^":"c;a,b,c,d,e,f,r,x,y,z,Q",
n:function(){var z,y,x,w
switch(this.r){case"linearUp":z=this.e
y=this.a
x=this.f
if(typeof y!=="number")return y.F()
if(typeof x!=="number")return H.l(x)
x=P.v(z,y+x)
this.a=x
y=this.f
if(typeof x!=="number")return H.l(x)
this.f=P.v(y,0.05*(z-x))
break
case"linearDown":z=this.d
y=this.a
x=this.f
if(typeof y!=="number")return y.G()
if(typeof x!=="number")return H.l(x)
x=P.x(z,y-x)
this.a=x
this.f=P.v(this.f,0.05*(x-z))
break
case"expUp":z=this.e
y=this.a
x=this.f
if(typeof y!=="number")return y.F()
if(typeof x!=="number")return H.l(x)
x=P.v(z,y+x)
this.a=x
y=this.f
if(typeof y!=="number")return H.l(y)
if(typeof x!=="number")return H.l(x)
this.f=P.v(1.1*y,0.05*(z-x))
break
case"expDown":z=this.d
y=this.a
x=this.f
if(typeof y!=="number")return y.G()
if(typeof x!=="number")return H.l(x)
x=P.x(z,y-x)
this.a=x
y=this.f
if(typeof y!=="number")return H.l(y)
this.f=P.v(1.1*y,0.05*(x-z))
break
case"constantUp":z=this.a
y=this.f
if(typeof z!=="number")return z.F()
if(typeof y!=="number")return H.l(y)
this.a=P.v(this.e,z+y)
break
case"constantDown":z=this.a
y=this.f
if(typeof z!=="number")return z.G()
if(typeof y!=="number")return H.l(y)
this.a=P.x(this.d,z-y)
break
case"breakUp":z=this.a
y=this.f
if(typeof z!=="number")return z.F()
if(typeof y!=="number")return H.l(y)
this.a=P.v(this.e,z+y)
y=this.f
if(typeof y!=="number")return y.p()
this.f=y*0.9
break
case"breakDown":z=this.a
y=this.f
if(typeof z!=="number")return z.G()
if(typeof y!=="number")return H.l(y)
this.a=P.x(this.d,z-y)
y=this.f
if(typeof y!=="number")return y.p()
this.f=y*0.9
break
case"easeInOut":z=this.b
y=this.c
x=this.y
w=this.z
if(typeof x!=="number")return x.a8()
if(typeof w!=="number")return H.l(w)
w=Math.atan(H.jl(6*(x/w)-3))
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return z.G()
this.a=z-y*(1-(w+1.25)/2.5)
w=this.y
if(typeof w!=="number")return w.F();++w
this.y=w
z=this.z
if(typeof z!=="number")return H.l(z)
if(w>z){this.r=""
this.a=this.b}break}},
v:function(a,b){var z
if(b!==this.r){this.r=b
switch(b){case"linearUp":case"linearDown":z=this.a
if(typeof z!=="number")return z.p()
this.f=P.x(z*0.025,0.025)
break
case"expUp":case"expDown":z=this.a
if(typeof z!=="number")return z.p()
this.f=P.x(z*0.001,0.001)
break
case"constantUp":case"constantDown":this.f=0.002*(this.e-this.d)
break}}z=this.x
if(z!=null&&z.c!=null)z.a3()
this.b=null},
q:function(a,b,c){var z,y
this.r=a
z=P.x(this.d,P.v(this.e,b))
this.b=z
y=this.a
if(typeof y!=="number")return H.l(y)
this.c=z-y
this.y=0
this.z=c},
u:function(a){var z
switch(this.r){case"linearUp":case"expUp":case"constantUp":this.r="breakUp"
break
case"linearDown":case"expDown":case"constantDown":this.r="breakDown"
break}z=this.x
if(z!=null&&z.c!=null)z.a3()
this.x=P.ay(C.z,new F.eo(this))}},
eo:{
"^":"b:1;a",
$0:function(){this.a.r=""
return""}},
fd:{
"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,M,a0,R,U,V,N,O,P,Y,a5,a6,af,co,cp,cq,cr,cs,ct,cu,cv,cw,cz,cA,cB,cC,cD,cE,cF,cG,cH,cI,cJ,cK,cL,cM,cN,cO,cP,cQ,cR,cS,bu",
fd:[function(a){var z,y
z=window
y=this.gcn()
C.k.bV(z)
C.k.c8(z,W.k(y))},"$0","gdl",0,0,2],
fk:[function(a){var z,y
z=Date.now()
y=this.cS
if(y!=null){if(typeof y!=="number")return H.l(y)
y=1000/(z-y)*0.05+$.b2*0.95
$.b2=y
$.$get$dY().textContent=""+C.d.t(y)+" fps"}this.cS=z
this.cm()
z=window
y=this.gcn()
C.k.bV(z)
C.k.c8(z,W.k(y))},"$1","gcn",2,0,11],
cm:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,c,b,a,a0,a1,a2,a3,a4,a5,a6,a7,a8
this.fa()
this.c.clearRect(0,0,this.d,this.e)
z=this.c
z.fillStyle="rgba(0, 0, 0, 1)"
z.rect(0,0,this.d,this.e)
z=this.c
z.toString
z.fill("nonzero")
z=this.c
z.globalCompositeOperation="screen"
z.lineWidth=J.t(this.R.a)
this.c.strokeStyle="hsla(0, 0%, 50%, 1)"
this.z=0
z=this.k2
y=this.rx
x=this.y2
w=0
v=null
u=null
t=null
s=null
r=!0
while(!0){q=this.dx.a
if(typeof q!=="number")return H.l(q)
if(!(w<q))break
q=this.db.a
if(typeof q!=="number")return q.p()
p=this.fx.a
if(typeof p!=="number")return H.l(p)
w+=q*0.5*(1-p)
o=this.bH(w)
n=this.bI(w)
p=this.db.a
if(typeof p!=="number")return p.p()
q=this.fx.a
if(typeof q!=="number")return H.l(q)
w+=p*0.5*q
m=this.bH(w)
l=this.bI(w)
q=this.db.a
if(typeof q!=="number")return q.p()
p=this.fx.a
if(typeof p!=="number")return H.l(p)
w+=q*0.5*p
k=this.bH(w)
j=this.bI(w)
p=this.db.a
if(typeof p!=="number")return p.p()
q=this.fx.a
if(typeof q!=="number")return H.l(q)
w+=p*0.5*(1-q)
q=(o+k)/2
q+=2.2*(m-q)
p=this.fr.a
if(typeof p!=="number")return H.l(p)
i=(n+j)/2
i+=2.2*(l-i)
h=Math.pow(m-o,2)
g=h+Math.pow(l-n,2)
h=Math.pow(k-m,2)
f=h+Math.pow(j-l,2)
h=Math.pow(g/f,2)
e=Math.pow(f/g,2)
d=this.x
c=this.N.a
if(typeof c!=="number")return H.l(c)
b=this.f
a=this.O.a
a0=this.d
if(typeof a!=="number")return a.p()
if(typeof a0!=="number")return H.l(a0)
a*=a0
a1=o*d*c+b+a
a2=this.y
a3=this.r
a4=this.P.a
a5=this.e
if(typeof a4!=="number")return a4.p()
a4*=a5
a6=n*a2*c+a3+a4
a7=k*d*c+b+a
a8=j*a2*c+a3+a4
if(!(h+e>4))if(!(a1<0&&a7<0))if(!(a1>a0&&a7>a0))if(!(a6<0&&a8<0))h=a6>a5&&a8>a5
else h=!0
else h=!0
else h=!0
else h=!0
if(h)r=!1
else{h=this.dx.a
if(typeof h!=="number")return h.a8()
e=this.c
d=2*w
c=this.U
if(w<h/2){if(typeof h!=="number")return H.l(h)
s=d/h
d=this.R.a
c=c.a
if(typeof c!=="number")return c.G()
if(typeof d!=="number")return H.l(d)
e.lineWidth=(d+(c-d)*s)*a0/800}else{if(typeof h!=="number")return H.l(h)
s=d/h-1
d=c.a
c=this.V.a
if(typeof c!=="number")return c.G()
if(typeof d!=="number")return H.l(d)
e.lineWidth=(d+(c-d)*s)*a0/800}d=this.a0
if(d==="alternate"){h=this.z
if(typeof h!=="number")return h.aU()
h=C.b.aU(h,3)
if(h===0){h=J.t(this.go.a)
d=J.t(this.id.a)
c=J.t(this.k1.a)
e.toString
e.strokeStyle="rgba("+h+", "+d+", "+c+", "+z+")"}else if(h===1){h=J.t(this.k4.a)
d=J.t(this.r1.a)
c=J.t(this.r2.a)
e.toString
e.strokeStyle="rgba("+h+", "+d+", "+c+", "+y+")"}else{h=J.t(this.x1.a)
d=J.t(this.x2.a)
c=J.t(this.y1.a)
e.toString
e.strokeStyle="rgba("+h+", "+d+", "+c+", "+x+")"}}else if(d==="interpol"){d=this.r2
c=this.r1
b=this.k4
if(w<h/2){h=this.go.a
b=b.a
if(typeof b!=="number")return b.G()
if(typeof h!=="number")return H.l(h)
v=h+(b-h)*s
h=this.id.a
c=c.a
if(typeof c!=="number")return c.G()
if(typeof h!=="number")return H.l(h)
u=h+(c-h)*s
h=this.k1.a
d=d.a
if(typeof d!=="number")return d.G()
if(typeof h!=="number")return H.l(h)
t=h+(d-h)*s}else{h=b.a
b=this.x1.a
if(typeof b!=="number")return b.G()
if(typeof h!=="number")return H.l(h)
v=h+(b-h)*s
c=c.a
h=this.x2.a
if(typeof h!=="number")return h.G()
if(typeof c!=="number")return H.l(c)
u=c+(h-c)*s
d=d.a
c=this.y1.a
if(typeof c!=="number")return c.G()
if(typeof d!=="number")return H.l(d)
t=d+(c-d)*s}h=C.a.W(v)
d=C.a.W(u)
c=C.a.W(t)
e.toString
e.strokeStyle="rgba("+h+", "+d+", "+c+", 1)"}else if(d==="max1min3"){h=this.dy.a
if(typeof h!=="number")return H.l(h)
if(C.b.aU(C.a.W(Math.floor(w+h)),18)===0){h=this.c
e=J.t(this.x1.a)
d=J.t(this.x2.a)
c=J.t(this.y1.a)
h.toString
h.strokeStyle="rgba("+e+", "+d+", "+c+", "+x+")"}else{h=this.dy.a
if(typeof h!=="number")return H.l(h)
h=C.b.aU(C.a.W(Math.floor(w+h)),5)
e=this.c
if(h===0){h=J.t(this.k4.a)
d=J.t(this.r1.a)
c=J.t(this.r2.a)
e.toString
e.strokeStyle="rgba("+h+", "+d+", "+c+", "+y+")"}else{h=J.t(this.go.a)
d=J.t(this.id.a)
c=J.t(this.k1.a)
e.toString
e.strokeStyle="rgba("+h+", "+d+", "+c+", "+z+")"}}}this.c.beginPath()
this.c.moveTo(a1,a6)
h=this.c
e=this.x
d=this.N.a
if(typeof d!=="number")return H.l(d)
c=this.f
b=this.O.a
a=this.d
if(typeof b!=="number")return b.p()
if(typeof a!=="number")return H.l(a)
a=b*a
b=this.y
a0=this.r
a2=this.P.a
a3=this.e
if(typeof a2!=="number")return a2.p()
a3=a2*a3
h.bezierCurveTo((o+(q-o)*p)*e*d+c+a,(n+(i-n)*p)*b*d+a0+a3,(k-(k-q)*p)*e*d+c+a,(j-(j-i)*p)*b*d+a0+a3,a7,a8)
this.c.stroke()}q=this.z
if(typeof q!=="number")return q.F()
this.z=q+1}},
fa:function(){var z,y,x,w,v,u,t,s
this.Q=!1
if($.b2<12){z=this.dx
if(z.r!=="linearDown"){y=z.b
if(y!=null){x=z.a
if(typeof x!=="number")return x.ao()
if(typeof y!=="number")return H.l(y)
y=x>y}else y=!1}else y=!0
if(y){z.n()
this.Q=!0
z=!0}else z=!1
y=this.db
if(y.r!=="expUp"){x=y.b
if(x!=null){w=y.a
if(typeof w!=="number")return w.aT()
if(typeof x!=="number")return H.l(x)
x=w<x}else x=!1}else x=!0
if(x){y.n()
this.Q=!0
z=!0}y=this.R
if(y.r!=="linearDown"){x=y.b
if(x!=null){w=y.a
if(typeof w!=="number")return w.ao()
if(typeof x!=="number")return H.l(x)
x=w>x}else x=!1}else x=!0
if(x){y.n()
this.Q=!0
z=!0}y=this.U
if(y.r!=="linearDown"){x=y.b
if(x!=null){w=y.a
if(typeof w!=="number")return w.ao()
if(typeof x!=="number")return H.l(x)
x=w>x}else x=!1}else x=!0
if(x){y.n()
this.Q=!0
z=!0}y=this.V
if(y.r!=="linearDown"){x=y.b
if(x!=null){w=y.a
if(typeof w!=="number")return w.ao()
if(typeof x!=="number")return H.l(x)
x=w>x}else x=!1}else x=!0
if(x){y.n()
this.Q=!0
z=!0}y=this.N
if(y.r!=="linearDown"){x=y.b
if(x!=null){y=y.a
if(typeof y!=="number")return y.ao()
if(typeof x!=="number")return H.l(x)
x=y>x
y=x}else y=!1}else y=!0
if(y){y=this.dx
x=y.a
if(typeof x!=="number")return x.p()
y.a=x*0.8}}else{z=this.dx
if(z.r!==""){z.n()
this.Q=!0
z=!0}else z=!1
y=this.db
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.R
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.U
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.V
if(y.r!==""){y.n()
this.Q=!0
z=!0}}y=this.dy
if(y.r!==""){y.n()
z=this.dy
y=z.a
x=z.e
if(typeof y!=="number")return y.ao()
if(y>0.99*x)z.a=0.04*z.d
else if(y<0.03*z.d)z.a=0.98*x
this.Q=!0
z=!0}y=this.fr
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.ch
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.cx
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.cy
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.fx
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.fy
x=y.x
if(x==="backToInit"){this.go.n()
this.id.n()
this.k1.n()
this.fy.b=J.t(this.go.a)
this.fy.c=J.t(this.id.a)
this.fy.d=J.t(this.k1.a)
this.fy.b6()
this.Q=!0
z=!0}else if(x!==""){y.n()
this.go.a=C.a.a7(this.fy.b)
this.id.a=C.a.a7(this.fy.c)
this.k1.a=C.a.a7(this.fy.d)
z=this.a
y=this.fy
z.aA(y.e,y.f,y.r)
this.Q=!0
z.fx=""
z=!0}y=this.k3
x=y.x
if(x==="backToInit"){this.k4.n()
this.r1.n()
this.r2.n()
this.k3.b=J.t(this.k4.a)
this.k3.c=J.t(this.r1.a)
this.k3.d=J.t(this.r2.a)
this.k3.b6()
this.Q=!0
z=!0}else if(x!==""){y.n()
this.k4.a=C.a.a7(this.k3.b)
this.r1.a=C.a.a7(this.k3.c)
this.r2.a=C.a.a7(this.k3.d)
z=this.a
y=this.k3
z.aA(y.e,y.f,y.r)
this.Q=!0
z.fx=""
z=!0}y=this.ry
x=y.x
if(x==="backToInit"){this.x1.n()
this.x2.n()
this.y1.n()
this.ry.b=J.t(this.x1.a)
this.ry.c=J.t(this.x2.a)
this.ry.d=J.t(this.y1.a)
this.ry.b6()
this.Q=!0
z=!0}else if(x!==""){y.n()
this.x1.a=C.a.a7(this.ry.b)
this.x2.a=C.a.a7(this.ry.c)
this.y1.a=C.a.a7(this.ry.d)
z=this.a
y=this.ry
z.aA(y.e,y.f,y.r)
this.Q=!0
z.fx=""
z=!0}y=this.N
if(y.r!==""){v=this.O.a
u=this.P.a
t=y.a
y.n()
z=this.N.a
if(typeof z!=="number")return z.a8()
if(typeof t!=="number")return H.l(t)
y=this.O
x=y.a
z=z/t-1
if(typeof v!=="number")return v.p()
if(typeof x!=="number")return x.F()
y.a=x+v*z
x=this.P
y=x.a
if(typeof u!=="number")return u.p()
if(typeof y!=="number")return y.F()
x.a=y+u*z
this.Q=!0
z=!0}y=this.O
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.P
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.Y
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.a5
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.a6
if(y.r!==""){y.n()
this.Q=!0
z=!0}y=this.af
if(y.r!==""){y.n()
this.Q=!0
z=!0}if(z){z=this.bu
if(z!=null&&z.c!=null)z.a3()
z=this.a
switch(z.fx){case"maxT":s="maxT : "+C.b.j(J.t(this.dx.a))
z=z.dx;(z&&C.j).aB(z,s)
break
case"stp":y=this.db.a
if(typeof y!=="number")return y.p()
s="stp : "+C.d.j(C.a.t(y*100)/100)
z=z.dx;(z&&C.j).aB(z,s)
break
case"aParam":y=this.ch.a
if(typeof y!=="number")return y.p()
s="aParam : "+C.d.j(C.a.t(y*100)/100)
z=z.dx;(z&&C.j).aB(z,s)
break
case"bParam":y=this.cx.a
if(typeof y!=="number")return y.p()
s="bParam : "+C.d.j(C.a.t(y*100)/100)
z=z.dx;(z&&C.j).aB(z,s)
break
case"cParam":y=this.cy.a
if(typeof y!=="number")return y.p()
s="cParam : "+C.d.j(C.a.t(y*100)/100)
z=z.dx;(z&&C.j).aB(z,s)
break}}else{z=this.bu
if(z==null||z.c==null)this.bu=P.ay(C.y,new F.fg(this))}},
ei:function(){var z,y
P.b4("backToInit")
z=this.ch
y=this.co
if(z.a!==y)z.q("easeInOut",y,600)
z=this.cx
y=this.cp
if(z.a!==y)z.q("easeInOut",y,600)
z=this.cy
y=this.cq
if(z.a!==y)z.q("easeInOut",y,600)
z=this.R
y=this.cr
if(z.a!==y)z.q("easeInOut",y,600)
z=this.U
y=this.cs
if(z.a!==y)z.q("easeInOut",y,600)
z=this.V
y=this.ct
if(z.a!==y)z.q("easeInOut",y,600)
z=this.db
y=this.cu
if(z.a!==y)z.q("easeInOut",y,600)
z=this.dx
y=this.cv
if(z.a!==y)z.q("easeInOut",y,600)
z=this.dy
y=this.cw
if(z.a!==y)z.q("easeInOut",y,600)
z=this.fx
y=this.cA
if(z.a!==y)z.q("easeInOut",y,600)
z=this.go
y=this.cB
if(z.a!==y){z.q("easeInOut",y,600)
this.fy.x="backToInit"}z=this.id
y=this.cC
if(z.a!==y){z.q("easeInOut",y,600)
this.fy.x="backToInit"}z=this.k1
y=this.cD
if(z.a!==y){z.q("easeInOut",y,600)
this.fy.x="backToInit"}z=this.k4
y=this.cE
if(z.a!==y){z.q("easeInOut",y,600)
this.k3.x="backToInit"}z=this.r1
y=this.cF
if(z.a!==y){z.q("easeInOut",y,600)
this.k3.x="backToInit"}z=this.r2
y=this.cG
if(z.a!==y){z.q("easeInOut",y,600)
this.k3.x="backToInit"}z=this.x1
y=this.cH
if(z.a!==y){z.q("easeInOut",y,600)
this.ry.x="backToInit"}z=this.x2
y=this.cI
if(z.a!==y){z.q("easeInOut",y,600)
this.ry.x="backToInit"}z=this.y1
y=this.cJ
if(z.a!==y){z.q("easeInOut",y,600)
this.ry.x="backToInit"}z=this.N
y=this.cL
if(z.a!==y)z.q("easeInOut",y,600)
z=this.O
y=this.cM
if(z.a!==y)z.q("easeInOut",y,600)
z=this.P
y=this.cN
if(z.a!==y)z.q("easeInOut",y,600)
z=this.Y
y=this.cO
if(z.a!==y)z.q("easeInOut",y,600)
z=this.a5
y=this.cP
if(z.a!==y)z.q("easeInOut",y,600)
z=this.a6
y=this.cQ
if(z.a!==y)z.q("easeInOut",y,600)
z=this.af
y=this.cR
if(z.a!==y)z.q("easeInOut",y,600)
P.ay(C.x,new F.ff(this))},
bH:function(a){var z,y,x,w,v,u,t,s,r
z=this.dy.a
if(typeof z!=="number")return z.F()
z=Math.cos(z+a)
y=this.ch.a
x=this.cx.a
w=this.dy.a
if(typeof w!=="number")return w.F()
if(typeof x!=="number")return x.p()
x=Math.cos(x*(w+a))
if(typeof y!=="number")return y.p()
w=this.a5.a
v=this.Y.a
u=this.a6.a
if(typeof v!=="number")return v.p()
if(typeof u!=="number")return H.l(u)
t=this.dx.a
if(typeof t!=="number")return H.l(t)
t=Math.floor(v*u*a*0.99/t)
u=this.Y.a
if(typeof u!=="number")return u.G()
if(typeof w!=="number")return w.p()
v=this.a5.a
s=this.a6.a
if(typeof s!=="number")return s.p()
r=this.dx.a
if(typeof r!=="number")return H.l(r)
r=Math.floor(s*a*0.99/r)
if(typeof v!=="number")return v.p()
s=this.Y.a
if(typeof s!=="number")return H.l(s)
return z+y*x+w*(t-0.5*(u-1))-v*r*s},
bI:function(a){var z,y,x,w,v,u
z=this.dy.a
y=this.cy.a
if(typeof y!=="number")return y.p()
if(typeof z!=="number")return z.F()
z=Math.sin(z+y*a)
y=this.ch.a
x=this.cx.a
w=this.dy.a
if(typeof w!=="number")return w.F()
if(typeof x!=="number")return x.p()
x=Math.sin(x*(w+a))
if(typeof y!=="number")return y.p()
w=this.af.a
v=this.a6.a
if(typeof v!=="number")return v.p()
u=this.dx.a
if(typeof u!=="number")return H.l(u)
u=Math.floor(v*a*0.99/u)
v=this.a6.a
if(typeof v!=="number")return v.G()
if(typeof w!=="number")return w.p()
return z+y*x+w*(u-0.5*(v-1))},
dw:function(a,b){var z
this.c=J.eb(this.b)
z=this.a
this.d=z.a
this.e=z.b
this.f=z.c
this.r=z.d
this.x=z.e
this.y=z.f
this.ch=new F.A(this.co,null,null,0,20,null,"",null,null,null,!1)
this.cx=new F.A(this.cp,null,null,0,20,null,"",null,null,null,!1)
this.cy=new F.A(this.cq,null,null,0,2,null,"",null,null,null,!1)
this.R=new F.A(this.cr,null,null,1,1000,null,"",null,null,null,!1)
this.U=new F.A(this.cs,null,null,1,1000,null,"",null,null,null,!1)
this.V=new F.A(this.ct,null,null,1,1000,null,"",null,null,null,!1)
this.db=new F.A(this.cu,null,null,0.02,20,null,"",null,null,null,!1)
this.dx=new F.A(this.cv,null,null,0,4000,null,"",null,null,null,!1)
this.dy=new F.A(this.cw,null,null,0,100,null,"",null,null,null,!1)
this.fr=new F.A(this.cz,null,null,0,0.65,null,"",null,null,null,!1)
this.fx=new F.A(this.cA,null,null,0,1,null,"",null,null,null,!1)
z=this.cB
this.go=new F.A(z,null,null,0,255,null,"",null,null,null,!1)
this.id=new F.A(this.cC,null,null,0,255,null,"",null,null,null,!1)
this.k1=new F.A(this.cD,null,null,0,255,null,"",null,null,null,!1)
this.fy=F.bH(C.b.b_(z),J.t(this.id.a),J.t(this.k1.a))
z=this.cE
this.k4=new F.A(z,null,null,0,255,null,"",null,null,null,!1)
this.r1=new F.A(this.cF,null,null,0,255,null,"",null,null,null,!1)
this.r2=new F.A(this.cG,null,null,0,255,null,"",null,null,null,!1)
this.k3=F.bH(C.b.b_(z),J.t(this.r1.a),J.t(this.r2.a))
z=this.cH
this.x1=new F.A(z,null,null,0,255,null,"",null,null,null,!1)
this.x2=new F.A(this.cI,null,null,0,255,null,"",null,null,null,!1)
this.y1=new F.A(this.cJ,null,null,0,255,null,"",null,null,null,!1)
this.ry=F.bH(C.b.b_(z),J.t(this.x2.a),J.t(this.y1.a))
this.M="c1"
this.a0=this.cK
this.N=new F.A(this.cL,null,null,0,15,null,"",null,null,null,!1)
this.O=new F.A(this.cM,null,null,-1.8,1.8,null,"",null,null,null,!1)
this.P=new F.A(this.cN,null,null,-1.8,1.8,null,"",null,null,null,!1)
this.Y=new F.A(this.cO,null,null,1,50,null,"",null,null,null,!1)
this.a5=new F.A(this.cP,null,null,0,50,null,"",null,null,null,!1)
this.a6=new F.A(this.cQ,null,null,1,50,null,"",null,null,null,!1)
this.af=new F.A(this.cR,null,null,0,50,null,"",null,null,null,!1)},
static:{fe:function(a,b){var z=new F.fd(b,a,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,1,null,null,null,null,1,null,null,null,null,1,null,null,null,null,null,null,null,null,null,null,null,null,0,1,1,20,20,20,1,70,0,0.65,1,23,110,239,211,62,42,255,187,3,"interpol",1,0,0,1,1,1,1,null,null)
z.dw(a,b)
return z}}},
fg:{
"^":"b:1;a",
$0:function(){return this.a.ei()}},
ff:{
"^":"b:1;a",
$0:function(){var z=this.a
z.fr.a=z.cz
z.a0=z.cK
z.fy.x=""
z.k3.x=""
z.ry.x=""
return}},
fi:{
"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id,k1,k2,k3,k4,r1,r2,rx,ry,x1,x2,y1,y2,M,a0,R,U,V,N,O,P,Y",
m:function(a,b){var z
a.toString
z=H.a(new W.az(a,"mousedown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.fk(b)),!1),[H.i(z,0)]).k()
z=H.a(new W.az(a,"mouseup",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.fl(b)),!1),[H.i(z,0)]).k()
z=H.a(new W.az(a,"touchstart",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.fm(b)),!1),[H.i(z,0)]).k()
z=H.a(new W.az(a,"touchend",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.fn(b)),!1),[H.i(z,0)]).k()},
ag:function(a,b){var z
a.toString
z=H.a(new W.az(a,"click",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.fo(b)),!1),[H.i(z,0)]).k()},
dz:function(){this.a=H.j(document.querySelector("#aParamUp"),"$isp")
this.b=H.j(document.querySelector("#aParamDown"),"$isp")
this.c=H.j(document.querySelector("#bParamUp"),"$isp")
this.d=H.j(document.querySelector("#bParamDown"),"$isp")
this.e=H.j(document.querySelector("#cParamUp"),"$isp")
this.f=H.j(document.querySelector("#cParamDown"),"$isp")
this.r=H.j(document.querySelector("#beginTUp"),"$isp")
this.x=H.j(document.querySelector("#beginTDown"),"$isp")
this.y=H.j(document.querySelector("#maxTUp"),"$isp")
this.z=H.j(document.querySelector("#maxTDown"),"$isp")
this.Q=H.j(document.querySelector("#stpUp"),"$isp")
this.ch=H.j(document.querySelector("#stpDown"),"$isp")
this.cx=H.j(document.querySelector("#lw1Up"),"$isp")
this.cy=H.j(document.querySelector("#lw1Down"),"$isp")
this.db=H.j(document.querySelector("#lw2Up"),"$isp")
this.dx=H.j(document.querySelector("#lw2Down"),"$isp")
this.dy=H.j(document.querySelector("#lw3Up"),"$isp")
this.fr=H.j(document.querySelector("#lw3Down"),"$isp")
this.fx=H.j(document.querySelector("#switchColorControlled"),"$isp")
this.fy=H.j(document.querySelector("#colorHueLeft"),"$isp")
this.go=H.j(document.querySelector("#colorHueRight"),"$isp")
this.id=H.j(document.querySelector("#colorSatUp"),"$isp")
this.k1=H.j(document.querySelector("#colorSatDown"),"$isp")
this.k2=H.j(document.querySelector("#colorLightUp"),"$isp")
this.k3=H.j(document.querySelector("#colorLightDown"),"$isp")
this.k4=H.j(document.querySelector("#splitHorzUp"),"$isp")
this.r1=H.j(document.querySelector("#splitHorzDown"),"$isp")
this.r2=H.j(document.querySelector("#splitVertUp"),"$isp")
this.rx=H.j(document.querySelector("#splitVertDown"),"$isp")
this.ry=H.j(document.querySelector("#splitWidthUp"),"$isp")
this.x1=H.j(document.querySelector("#splitWidthDown"),"$isp")
this.x2=H.j(document.querySelector("#splitHeightUp"),"$isp")
this.y1=H.j(document.querySelector("#splitHeightDown"),"$isp")
this.y2=H.j(document.querySelector("#switchColorDistribution"),"$isp")
this.M=H.j(document.querySelector("#switchCurvesStyle"),"$isp")
this.a0=H.j(document.querySelector("#dashedRatioUp"),"$isp")
this.R=H.j(document.querySelector("#dashedRatioDown"),"$isp")
this.U=H.j(document.querySelector("#zoomUp"),"$isp")
this.V=H.j(document.querySelector("#zoomDown"),"$isp")
this.N=H.j(document.querySelector("#panLeft"),"$isp")
this.O=H.j(document.querySelector("#panRight"),"$isp")
this.P=H.j(document.querySelector("#panUp"),"$isp")
this.Y=H.j(document.querySelector("#panDown"),"$isp")
this.m(this.a,"aParamUp")
this.m(this.b,"aParamDown")
this.m(this.c,"bParamUp")
this.m(this.d,"bParamDown")
this.m(this.e,"cParamUp")
this.m(this.f,"cParamDown")
this.m(this.r,"beginTUp")
this.m(this.x,"beginTDown")
this.m(this.y,"maxTUp")
this.m(this.z,"maxTDown")
this.m(this.Q,"stpUp")
this.m(this.ch,"stpDown")
this.m(this.cx,"lw1Up")
this.m(this.cy,"lw1Down")
this.m(this.db,"lw2Up")
this.m(this.dx,"lw2Down")
this.m(this.dy,"lw3Up")
this.m(this.fr,"lw3Down")
this.ag(this.fx,"switchColorControlled")
this.m(this.fy,"colorHueLeft")
this.m(this.go,"colorHueRight")
this.m(this.id,"colorSatUp")
this.m(this.k1,"colorSatDown")
this.m(this.k2,"colorLightUp")
this.m(this.k3,"colorLightDown")
this.ag(this.k4,"splitHorzUp")
this.ag(this.r1,"splitHorzDown")
this.ag(this.r2,"splitVertUp")
this.ag(this.rx,"splitVertDown")
this.m(this.ry,"splitWidthUp")
this.m(this.x1,"splitWidthDown")
this.m(this.x2,"splitHeightUp")
this.m(this.y1,"splitHeightDown")
this.ag(this.y2,"switchColorDistribution")
this.ag(this.M,"switchCurvesStyle")
this.m(this.a0,"dashedRatioUp")
this.m(this.R,"dashedRatioDown")
this.m(this.U,"zoomUp")
this.m(this.V,"zoomDown")
this.m(this.P,"panUp")
this.m(this.Y,"panDown")
this.m(this.N,"panLeft")
this.m(this.O,"panRight")},
static:{fj:function(){var z=new F.fi(null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null)
z.dz()
return z}}},
fk:{
"^":"b:0;a",
$1:function(a){return window.dispatchEvent(W.a1(this.a,!0,!0,!0))}},
fl:{
"^":"b:0;a",
$1:function(a){return window.dispatchEvent(W.a1(this.a,!0,!0,!1))}},
fm:{
"^":"b:0;a",
$1:function(a){return window.dispatchEvent(W.a1(this.a,!0,!0,!0))}},
fn:{
"^":"b:0;a",
$1:function(a){return window.dispatchEvent(W.a1(this.a,!0,!0,!1))}},
fo:{
"^":"b:0;a",
$1:function(a){return window.dispatchEvent(W.a1(this.a,!0,!0,!0))}},
fv:{
"^":"c;a,b,c,d,e,f,r,x",
n:function(){switch(this.x){case"hueUp":var z=++this.e
if(z>360)this.e=z-360
this.aq()
break
case"hueDown":z=--this.e
if(z<0)this.e=z+360
this.aq()
break
case"saturationUp":this.f=P.v(100,this.f+1)
this.aq()
break
case"saturationDown":this.f=P.x(0,this.f-1)
this.aq()
break
case"lightnessUp":this.r=P.v(100,this.r+1)
this.aq()
break
case"lightnessDown":this.r=P.x(0,this.r-1)
this.aq()
break}},
aq:function(){var z=S.bG(this.e,this.f,this.r,1)
this.a=z
this.b=z.gZ().a
this.c=this.a.gZ().b
this.d=this.a.gZ().c},
b6:function(){var z=S.cu(this.b,this.c,this.d,1)
this.a=z
z=z.gZ()
this.e=C.a.t(S.au(z.a,z.b,z.c,z.d).a*360)
z=this.a.gZ()
this.f=C.a.t(S.au(z.a,z.b,z.c,z.d).b*100)
z=this.a.gZ()
this.r=C.a.t(S.au(z.a,z.b,z.c,z.d).c*100)},
dA:function(a,b,c){var z=S.cu(this.b,this.c,this.d,1)
this.a=z
z=z.gZ()
this.e=C.a.t(S.au(z.a,z.b,z.c,z.d).a*360)
z=this.a.gZ()
this.f=C.a.t(S.au(z.a,z.b,z.c,z.d).b*100)
z=this.a.gZ()
this.r=C.a.t(S.au(z.a,z.b,z.c,z.d).c*100)
this.x=""},
static:{bH:function(a,b,c){var z=new F.fv(null,a,b,c,null,null,null,null)
z.dA(a,b,c)
return z}}},
hb:{
"^":"c;a,b,c,d",
fl:[function(a){var z=this.d
C.f.bs(z,"removeWhere")
C.f.c7(z,new F.hd(a),!0)
if(J.C(a).gaw(a)!==16)this.d.push(C.l.gaw(a))
if(a.shiftKey===!0){C.f.S(this.d,new F.he(this))
if(C.l.gaw(a)===16){z=this.d
if(z.length>0)window.dispatchEvent(W.a1(this.c.h(0,C.f.geT(z)),!0,!0,!0))}}else if($.jL);},"$1","geQ",2,0,5],
fm:[function(a){var z=this.d
C.f.bs(z,"removeWhere")
C.f.c7(z,new F.hf(a),!0)
window.dispatchEvent(W.a1(this.c.h(0,J.C(a).gaw(a)),!0,!0,!1))
window.dispatchEvent(W.a1(this.b.h(0,C.l.gaw(a)),!0,!0,!1))},"$1","geR",2,0,5],
dC:function(a){var z,y
this.b=H.a(new H.a2(0,null,null,null,null,null,0),[null,null])
for(z=0;z<300;++z)this.b.i(0,z,"nothing")
this.c=H.a(new H.a2(0,null,null,null,null,null,0),[null,null])
for(z=0;z<300;++z)this.c.i(0,z,"nothing")
this.d=[]
this.b.i(0,65,"colorHueLeft")
this.b.i(0,90,"colorHueRight")
this.b.i(0,69,"colorSatUp")
this.b.i(0,82,"colorSatDown")
this.b.i(0,84,"colorLightUp")
this.b.i(0,89,"colorLightDown")
this.b.i(0,85,"panLeft")
this.b.i(0,73,"panRight")
this.b.i(0,79,"panUp")
this.b.i(0,80,"panDown")
this.b.i(0,81,"splitWidthUp")
this.b.i(0,83,"splitWidthDown")
this.b.i(0,68,"splitHeightUp")
this.b.i(0,70,"splitHeightDown")
this.b.i(0,71,"zoomUp")
this.b.i(0,72,"zoomDown")
this.b.i(0,74,"splitHorzUp")
this.b.i(0,75,"splitHorzDown")
this.b.i(0,76,"splitVertUp")
this.b.i(0,77,"splitVertDown")
this.b.i(0,87,"dashedRatioUp")
this.b.i(0,88,"dashedRatioDown")
this.b.i(0,67,"switchColorDistribution")
this.b.i(0,86,"switchCurvesStyle")
this.b.i(0,66,"switchColorControlled")
this.c.i(0,65,"lw1Up")
this.c.i(0,90,"lw1Down")
this.c.i(0,69,"lw2Up")
this.c.i(0,82,"lw2Down")
this.c.i(0,84,"lw3Up")
this.c.i(0,89,"lw3Down")
this.c.i(0,85,"maxTUp")
this.c.i(0,73,"maxTDown")
this.c.i(0,79,"stpUp")
this.c.i(0,80,"stpDown")
this.c.i(0,81,"aParamUp")
this.c.i(0,83,"aParamDown")
this.c.i(0,68,"bParamUp")
this.c.i(0,70,"bParamDown")
this.c.i(0,71,"cParamUp")
this.c.i(0,72,"cParamDown")
this.c.i(0,74,"beginTUp")
this.c.i(0,75,"beginTDown")
y=H.a(new W.o(document,"keydown",!1),[null])
H.a(new W.m(0,y.a,y.b,W.k(this.geQ()),!1),[H.i(y,0)]).k()
y=H.a(new W.o(document,"keyup",!1),[null])
H.a(new W.m(0,y.a,y.b,W.k(this.geR()),!1),[H.i(y,0)]).k()},
static:{hc:function(a){var z=new F.hb(a,null,null,null)
z.dC(a)
return z}}},
hd:{
"^":"b:0;a",
$1:function(a){return J.S(a,J.co(this.a))}},
he:{
"^":"b:0;a",
$1:function(a){return window.dispatchEvent(W.a1(this.a.b.h(0,a),!0,!0,!1))}},
hf:{
"^":"b:0;a",
$1:function(a){return J.S(a,J.co(this.a))}},
er:{
"^":"c;a,b,c,d,e,f,r,x,y,z,Q,ch,cx,cy,db,dx,dy,fr,fx,fy,go,id",
aV:function(a,b){var z,y,x
if(typeof b!=="number")return b.p()
z=C.a.t(P.v(a,b*16/9-250))
this.a=z
this.b=C.d.t(z*9/16)
z=this.a
if(typeof z!=="number")return z.a8()
this.c=C.d.t(z/2)
z=C.d.t(this.b/2)
this.d=z
y=this.r
x=this.a
y.d=x
y.e=this.b
y.f=this.c
y.r=z
if(typeof x!=="number")return x.a8()
y.x=C.d.t(x/8)
x=this.r
x.y=x.x
J.ek(x.b,this.a)
J.ei(this.r.b,this.b)
x=this.fy.style
y=C.b.j(this.b+15)+"px"
C.h.bn(x,(x&&C.h).bc(x,"top"),y,null)
y=this.go.style
x=J.a_(a)+"px"
C.h.bn(y,(y&&C.h).bc(y,"width"),x,null)},
ej:function(){var z=H.a(new W.o(window,"resize",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.es(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"scroll",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.et(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"lw1Up",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eu(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"lw1Down",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eF(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"lw2Up",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eQ(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"lw2Down",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f0(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"lw3Up",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f6(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"lw3Down",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f7(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"dashedRatioUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f8(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"dashedRatioDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f9(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"beginTUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.fa(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"beginTDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.ev(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"maxTUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.ew(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"maxTDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.ex(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"stpUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.ey(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"stpDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.ez(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"aParamUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eA(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"aParamDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eB(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"bParamUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eC(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"bParamDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eD(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"cParamUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eE(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"cParamDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eG(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"switchColorControlled",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eH(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"colorHueRight",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eI(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"colorHueLeft",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eJ(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"colorSatUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eK(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"colorSatDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eL(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"colorLightUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eM(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"colorLightDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eN(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"switchCurvesStyle",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eO(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"switchColorDistribution",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eP(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"zoomUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eR(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"zoomDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eS(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"panUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eT(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"panDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eU(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"panLeft",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eV(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"panRight",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eW(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"splitHorzUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eX(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"splitHorzDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eY(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"splitWidthUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.eZ(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"splitWidthDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f_(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"splitVertUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f1(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"splitVertDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f2(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"splitHeightUp",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f3(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"splitHeightDown",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f4(this)),!1),[H.i(z,0)]).k()
z=H.a(new W.o(window,"toggleFullScreen",!1),[null])
H.a(new W.m(0,z.a,z.b,W.k(new F.f5()),!1),[H.i(z,0)]).k()},
L:function(a){var z
if(a){z=this.z.style
z.display="block"}else{z=this.cy
if(z!=null&&z.c!=null)z.a3()
this.cy=P.ay(C.p,new F.fb(this))}},
aA:function(a,b,c){var z,y,x,w,v
z=this.ch
z.toString
y=z.getContext("2d")
z=this.Q.style
x=C.b.j(C.d.t(a/2))+"px"
z.left=x
z=this.Q.style
x=C.b.j(C.a.t(100-b))+"px"
z.top=x
y.clearRect(0,0,30,100)
w=y.createLinearGradient(0,0,0,150)
v=S.bG(a,b,50,1)
w.addColorStop(0,"#fff")
w.addColorStop(0.5,v.gZ().gaZ())
w.addColorStop(1,"#000")
y.fillStyle=w
y.fillRect(0,0,300,150)
z=this.cx
x=z.style
x.left="205px"
z=z.style
x=C.b.j(C.a.t(100-c))+"px"
z.top=x
v=S.bG(a,b,c,1)
z=this.dy.style
x=v.gZ().gaZ()
z.backgroundColor=x},
D:function(a){var z
if(a){z=this.db.style
z.display="block"}else{z=this.fr
if(z!=null&&z.c!=null)z.a3()
this.fr=P.ay(C.p,new F.fc(this))}}},
es:{
"^":"b:0;a",
$1:function(a){this.a.aV(window.innerWidth,window.innerHeight)}},
et:{
"^":"b:0;a",
$1:function(a){var z,y,x
z=window
y="scrollY" in z?C.a.t(z.scrollY):C.a.t(z.document.documentElement.scrollTop)
z=this.a.go.style
x=window.innerHeight
if(typeof x!=="number")return x.a8()
x=C.a.j(P.v(y,C.d.t(y/2+x/2)))+"px"
C.h.bn(z,(z&&C.h).bc(z,"top"),x,null)}},
eu:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.R.v(0,"linearUp")
else z.r.R.u(0)}},
eF:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.R.v(0,"linearDown")
else z.r.R.u(0)}},
eQ:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.U.v(0,"linearUp")
else z.r.U.u(0)}},
f0:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.U.v(0,"linearDown")
else z.r.U.u(0)}},
f6:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.V.v(0,"linearUp")
else z.r.V.u(0)}},
f7:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.V.v(0,"linearDown")
else z.r.V.u(0)}},
f8:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.fx.v(0,"linearUp")
else z.r.fx.u(0)}},
f9:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.fx.v(0,"linearDown")
else z.r.fx.u(0)}},
fa:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.dy.v(0,"expUp")
else z.r.dy.u(0)}},
ev:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.dy.v(0,"expDown")
else z.r.dy.u(0)}},
ew:{
"^":"b:0;a",
$1:function(a){var z,y
z=J.q(a)===!0&&$.b2>12
y=this.a
if(z){y.r.dx.v(0,"linearUp")
y.fx="maxT"
y.D(!0)}else{y.r.dx.u(0)
y.D(!1)}}},
ex:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0){z.r.dx.v(0,"linearDown")
z.fx="maxT"
z.D(!0)}else{z.r.dx.u(0)
z.D(!1)}}},
ey:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0){z.r.db.v(0,"expUp")
z.fx="stp"
z.D(!0)}else{z.r.db.u(0)
z.D(!1)}}},
ez:{
"^":"b:0;a",
$1:function(a){var z,y
z=J.q(a)===!0&&$.b2>12
y=this.a
if(z){y.r.db.v(0,"expDown")
y.fx="stp"
y.D(!0)}else{y.r.db.u(0)
y.D(!1)}}},
eA:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0){z.r.ch.v(0,"expUp")
z.fx="aParam"
z.D(!0)}else{z.r.ch.u(0)
z.D(!1)}}},
eB:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0){z.r.ch.v(0,"expDown")
z.fx="aParam"
z.D(!0)}else{z.r.ch.u(0)
z.D(!1)}}},
eC:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0){z.r.cx.v(0,"expUp")
z.fx="bParam"
z.D(!0)}else{z.r.cx.u(0)
z.D(!1)}}},
eD:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0){z.r.cx.v(0,"expDown")
z.fx="bParam"
z.D(!0)}else{z.r.cx.u(0)
z.D(!1)}}},
eE:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0){z.r.cy.v(0,"expUp")
z.fx="cParam"
z.D(!0)}else{z.r.cy.u(0)
z.D(!1)}}},
eG:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0){z.r.cy.v(0,"expDown")
z.fx="cParam"
z.D(!0)}else{z.r.cy.u(0)
z.D(!1)}}},
eH:{
"^":"b:0;a",
$1:function(a){var z,y,x
if(J.q(a)===!0){z=this.a
y=z.r
x=y.M
if(x==="c1"){y.M="c2"
y=y.k3
z.aA(y.e,y.f,y.r)}else if(x==="c2"){y.M="c3"
y=y.ry
z.aA(y.e,y.f,y.r)}else if(x==="c3"){y.M="c1"
y=y.fy
z.aA(y.e,y.f,y.r)}z.L(!0)}else this.a.L(!1)}},
eI:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a
y=z.r
switch(y.M){case"c1":y.fy.x="hueUp"
break
case"c2":y.k3.x="hueUp"
break
case"c3":y.ry.x="hueUp"
break}z.L(!0)}else{z=this.a
y=z.r
y.fy.x=""
y.k3.x=""
y.ry.x=""
z.L(!1)}}},
eJ:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a
y=z.r
switch(y.M){case"c1":y.fy.x="hueDown"
break
case"c2":y.k3.x="hueDown"
break
case"c3":y.ry.x="hueDown"
break}z.L(!0)}else{z=this.a
y=z.r
y.fy.x=""
y.k3.x=""
y.ry.x=""
z.L(!1)}}},
eK:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a
y=z.r
switch(y.M){case"c1":y.fy.x="saturationUp"
break
case"c2":y.k3.x="saturationUp"
break
case"c3":y.ry.x="saturationUp"
break}z.L(!0)}else{z=this.a
y=z.r
y.fy.x=""
y.k3.x=""
y.ry.x=""
z.L(!1)}}},
eL:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a
y=z.r
switch(y.M){case"c1":y.fy.x="saturationDown"
break
case"c2":y.k3.x="saturationDown"
break
case"c3":y.ry.x="saturationDown"
break}z.L(!0)}else{z=this.a
y=z.r
y.fy.x=""
y.k3.x=""
y.ry.x=""
z.L(!1)}}},
eM:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a
y=z.r
switch(y.M){case"c1":y.fy.x="lightnessUp"
break
case"c2":y.k3.x="lightnessUp"
break
case"c3":y.ry.x="lightnessUp"
break}z.L(!0)}else{z=this.a
y=z.r
y.fy.x=""
y.k3.x=""
y.ry.x=""
z.L(!1)}}},
eN:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a
y=z.r
switch(y.M){case"c1":y.fy.x="lightnessDown"
break
case"c2":y.k3.x="lightnessDown"
break
case"c3":y.ry.x="lightnessDown"
break}z.L(!0)}else{z=this.a
y=z.r
y.fy.x=""
y.k3.x=""
y.ry.x=""
z.L(!1)}}},
eO:{
"^":"b:0;a",
$1:function(a){var z
if(J.q(a)===!0){z=this.a.r.fr
if(z.a===0)z.q("easeInOut",0.65,30)
else z.q("easeInOut",0,30)}}},
eP:{
"^":"b:0;a",
$1:function(a){var z
if(J.q(a)===!0){z=this.a.r
switch(z.a0){case"max1min3":z.a0="alternate"
break
case"alternate":z.a0="interpol"
break
case"interpol":z.a0="max1min3"
break}}}},
eR:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.N.v(0,"linearUp")
else z.r.N.u(0)}},
eS:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.N.v(0,"linearDown")
else z.r.N.u(0)}},
eT:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.P.v(0,"constantUp")
else z.r.P.u(0)}},
eU:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.P.v(0,"constantDown")
else z.r.P.u(0)}},
eV:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.O.v(0,"constantUp")
else z.r.O.u(0)}},
eW:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.O.v(0,"constantDown")
else z.r.O.u(0)}},
eX:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a.r.Y
y=z.a
if(typeof y!=="number")return y.F()
z.q("easeInOut",y+1,30)}}},
eY:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a.r.Y
y=z.a
if(typeof y!=="number")return y.G()
z.q("easeInOut",y-1,30)}}},
eZ:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.a5.v(0,"linearUp")
else z.r.a5.u(0)}},
f_:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.a5.v(0,"linearDown")
else z.r.a5.u(0)}},
f1:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a.r.a6
y=z.a
if(typeof y!=="number")return y.F()
z.q("easeInOut",y+1,30)}}},
f2:{
"^":"b:0;a",
$1:function(a){var z,y
if(J.q(a)===!0){z=this.a.r.a6
y=z.a
if(typeof y!=="number")return y.G()
z.q("easeInOut",y-1,30)}}},
f3:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.af.v(0,"linearUp")
else z.r.af.u(0)}},
f4:{
"^":"b:0;a",
$1:function(a){var z=this.a
if(J.q(a)===!0)z.r.af.v(0,"linearDown")
else z.r.af.u(0)}},
f5:{
"^":"b:0;",
$1:function(a){var z
if(J.q(a)===!0){z=document.querySelector("#canvas")
if(document.webkitFullscreenElement==null){z.requestFullscreen()
P.b4(document.webkitFullscreenElement===z)}else document.webkitExitFullscreen()}}},
fb:{
"^":"b:1;a",
$0:function(){var z=this.a.z.style
z.display="none"
return"none"}},
fc:{
"^":"b:1;a",
$0:function(){var z=this.a.db.style
z.display="none"
return"none"}}},1],["","",,S,{
"^":"",
bF:{
"^":"c;a",
j:function(a){return this.gaZ()},
gaZ:function(){var z,y,x,w,v,u
z=this.a
if(z.length===6)return"#"+z
else{y=H.ac(C.c.X(z,0,2),16,null)
if(typeof y!=="number")return y.a8()
x=C.d.d5(y/255,2)
w=H.ac(C.c.X(z,2,4),16,null)
v=H.ac(C.c.X(z,4,6),16,null)
u=H.ac(C.c.X(z,6,8),16,null)
return"rgba("+H.d(w)+","+H.d(v)+","+H.d(u)+","+x+")"}},
gZ:function(){var z,y,x,w,v,u
z=this.a
if(z.length===8){y=H.ac(C.c.X(z,0,2),16,null)
if(typeof y!=="number")return y.a8()
x=H.hx(C.d.d5(y/255,2),null)
w=2}else{w=0
x=null}v=w+2
u=v+2
return S.da(H.ac(C.c.X(z,w,v),16,null),H.ac(C.c.X(z,v,u),16,null),H.ac(C.c.X(z,u,u+2),16,null),x)},
w:function(a,b){if(b==null)return!1
return S.bI(this,b)},
aQ:function(){return this.a},
gC:function(a){return C.c.gC(this.a)},
static:{cu:function(a,b,c,d){var z,y,x
z=P.x(P.v(255,a),0)
y=P.x(P.v(255,b),0)
x=P.x(P.v(255,c),0)
return new S.bF(S.a0(z,y,x,d!=null?P.x(P.v(1,d),0):d))},bG:function(a,b,c,d){var z,y,x,w
z=P.x(P.v(360,a),0)
y=P.x(P.v(100,b),0)
x=P.x(P.v(100,c),0)
w=d!=null?P.x(P.v(1,d),0):d
w=S.bm(S.b9(z/360,y/100,x/100,w))
return new S.bF(S.a0(w.a,w.b,w.c,w.d))},bI:function(a,b){var z=J.r(b)
if(!!z.$isbF)return b.a===a.aQ()
else if(!!z.$isd9)return S.a0(b.a,b.b,b.c,b.d)===a.aQ()
else if(!!z.$iscL){z=S.bm(b)
return S.a0(z.a,z.b,z.c,z.d)===a.aQ()}else return!1},a0:function(a,b,c,d){var z,y,x
z=S.b6(P.x(P.v(255,a),0))
y=S.b6(P.x(P.v(255,b),0))
x=S.b6(P.x(P.v(255,c),0))
return((d!=null?S.b6(C.a.t(P.x(P.v(1,d),0)*255)):"")+z+y+x).toLowerCase()},b6:function(a){var z=C.b.f8(C.a.W(a),16)
return z.length===1?"0"+z:z}}},
d9:{
"^":"c;a,b,c,d",
w:function(a,b){if(b==null)return!1
return S.bI(this,b)},
gaZ:function(){var z,y,x,w
z=this.d
y=this.a
x=this.b
w=this.c
if(z==null)return"#"+S.a0(y,x,w,null)
else return"rgba("+H.d(y)+","+H.d(x)+","+H.d(w)+","+H.d(z)+")"},
aQ:function(){return S.a0(this.a,this.b,this.c,this.d)},
gC:function(a){return C.c.gC(S.a0(this.a,this.b,this.c,this.d))},
static:{da:function(a,b,c,d){var z,y,x
z=P.x(P.v(255,a),0)
y=P.x(P.v(255,b),0)
x=P.x(P.v(255,c),0)
return new S.d9(z,y,x,d!=null?P.x(P.v(1,d),0):d)},bm:function(a){var z,y,x,w,v,u,t,s
z=a.a
y=a.b
x=a.c
if(y===0){w=C.b.W(C.a.t(x*255))
v=w
u=v}else{t=x<0.5?x*(1+y):x+y-y*x
s=2*x-t
w=C.b.W(C.a.t(255*S.c0(s,t,z+0.3333333333333333)))
u=C.b.W(C.a.t(255*S.c0(s,t,z)))
v=C.b.W(C.a.t(255*S.c0(s,t,z-0.3333333333333333)))}return S.da(w,u,v,a.d)},c0:function(a,b,c){if(c<0)++c
if(c>1)--c
if(6*c<1)return a+(b-a)*6*c
if(2*c<1)return b
if(3*c<2)return a+(b-a)*((0.6666666666666666-c)*6)
return a}}},
cL:{
"^":"c;a,b,c,d",
w:function(a,b){if(b==null)return!1
return S.bI(this,b)},
aQ:function(){var z=S.bm(this)
return S.a0(z.a,z.b,z.c,z.d)},
gC:function(a){var z=S.bm(this)
return C.c.gC(S.a0(z.a,z.b,z.c,z.d))},
static:{b9:function(a,b,c,d){var z,y,x
z=a===1?0:P.x(P.v(1,a),0)
y=P.x(P.v(1,b),0)
x=P.x(P.v(1,c),0)
return new S.cL(z,y,x,d!=null?P.x(P.v(1,d),0):d)},au:function(a,b,c,d){var z,y,x,w,v,u,t,s,r
a/=255
b/=255
c/=255
z=P.v(a,P.v(b,c))
y=P.x(a,P.x(b,c))
x=y+z
w=x/2
if(w<=0)return S.b9(0,0,w,null)
v=y-z
if(v>0)x=w<0.5?x:2-y-z
else return S.b9(0,0,w,null)
u=(y-a)/v
t=(y-b)/v
s=(y-c)/v
if(a===y)r=b===z?5+s:1-t
else if(b===y)r=c===z?1+u:3-s
else r=a===z?3+t:5-u
return S.b9(r/6,v/x,w,d)}}}}],["","",,H,{
"^":"",
bc:function(){return new P.a3("No element")},
h3:function(){return new P.a3("Too many elements")},
h2:function(){return new P.a3("Too few elements")},
bQ:{
"^":"J;",
gE:function(a){return new H.cW(this,this.gl(this),0,null)},
S:function(a,b){var z,y
z=this.gl(this)
for(y=0;y<z;++y){b.$1(this.a4(0,y))
if(z!==this.gl(this))throw H.e(new P.M(this))}},
aS:function(a,b){return this.dr(this,b)},
ay:function(a,b){return H.a(new H.bh(this,b),[null,null])},
bE:function(a,b){var z,y,x
z=H.a([],[H.O(this,"bQ",0)])
C.f.sl(z,this.gl(this))
for(y=0;y<this.gl(this);++y){x=this.a4(0,y)
if(y>=z.length)return H.h(z,y)
z[y]=x}return z},
bD:function(a){return this.bE(a,!0)},
$isy:1},
cW:{
"^":"c;a,b,c,d",
gB:function(){return this.d},
A:function(){var z,y,x,w
z=this.a
y=J.L(z)
x=y.gl(z)
if(this.b!==x)throw H.e(new P.M(z))
w=this.c
if(w>=x){this.d=null
return!1}this.d=y.a4(z,w);++this.c
return!0}},
cX:{
"^":"J;a,b",
gE:function(a){var z=new H.hl(null,J.aI(this.a),this.b)
z.$builtinTypeInfo=this.$builtinTypeInfo
return z},
gl:function(a){return J.aJ(this.a)},
$asJ:function(a,b){return[b]},
static:{bg:function(a,b,c,d){if(!!J.r(a).$isy)return H.a(new H.cD(a,b),[c,d])
return H.a(new H.cX(a,b),[c,d])}}},
cD:{
"^":"cX;a,b",
$isy:1},
hl:{
"^":"cP;a,b,c",
A:function(){var z=this.b
if(z.A()){this.a=this.aD(z.gB())
return!0}this.a=null
return!1},
gB:function(){return this.a},
aD:function(a){return this.c.$1(a)}},
bh:{
"^":"bQ;a,b",
gl:function(a){return J.aJ(this.a)},
a4:function(a,b){return this.aD(J.e9(this.a,b))},
aD:function(a){return this.b.$1(a)},
$asbQ:function(a,b){return[b]},
$asJ:function(a,b){return[b]},
$isy:1},
dw:{
"^":"J;a,b",
gE:function(a){var z=new H.hX(J.aI(this.a),this.b)
z.$builtinTypeInfo=this.$builtinTypeInfo
return z}},
hX:{
"^":"cP;a,b",
A:function(){for(var z=this.a;z.A();)if(this.aD(z.gB())===!0)return!0
return!1},
gB:function(){return this.a.gB()},
aD:function(a){return this.b.$1(a)}},
cJ:{
"^":"c;"}}],["","",,H,{
"^":"",
dR:function(a){var z=H.a(a?Object.keys(a):[],[null])
z.fixed$length=Array
return z}}],["","",,P,{
"^":"",
i2:function(){var z,y,x
z={}
if(self.scheduleImmediate!=null)return P.jh()
if(self.MutationObserver!=null&&self.document!=null){y=self.document.createElement("div")
x=self.document.createElement("span")
z.a=null
new self.MutationObserver(H.a4(new P.i4(z),1)).observe(y,{childList:true})
return new P.i3(z,y,x)}else if(self.setImmediate!=null)return P.ji()
return P.jj()},
l1:[function(a){++init.globalState.f.b
self.scheduleImmediate(H.a4(new P.i5(a),0))},"$1","jh",2,0,4],
l2:[function(a){++init.globalState.f.b
self.setImmediate(H.a4(new P.i6(a),0))},"$1","ji",2,0,4],
l3:[function(a){P.c2(C.o,a)},"$1","jj",2,0,4],
dI:function(a,b){var z=H.b3()
z=H.an(z,[z,z]).ah(a)
if(z){b.toString
return a}else{b.toString
return a}},
jb:function(){var z,y
for(;z=$.ak,z!=null;){$.aD=null
y=z.c
$.ak=y
if(y==null)$.aC=null
$.u=z.b
z.el()}},
li:[function(){$.ca=!0
try{P.jb()}finally{$.u=C.e
$.aD=null
$.ca=!1
if($.ak!=null)$.$get$c3().$1(P.dP())}},"$0","dP",0,0,2],
dM:function(a){if($.ak==null){$.aC=a
$.ak=a
if(!$.ca)$.$get$c3().$1(P.dP())}else{$.aC.c=a
$.aC=a}},
ck:function(a){var z,y
z=$.u
if(C.e===z){P.al(null,null,C.e,a)
return}z.toString
if(C.e.gbt()===z){P.al(null,null,z,a)
return}y=$.u
P.al(null,null,y,y.br(a,!0))},
je:function(a,b,c){var z,y,x,w,v,u,t
try{b.$1(a.$0())}catch(u){t=H.H(u)
z=t
y=H.P(u)
$.u.toString
x=null
if(x==null)c.$2(z,y)
else{t=J.Z(x)
w=t
v=x.ga9()
c.$2(w,v)}}},
j5:function(a,b,c,d){var z=a.a3()
if(!!J.r(z).$isa9)z.bG(new P.j8(b,c,d))
else b.ab(c,d)},
j6:function(a,b){return new P.j7(a,b)},
j4:function(a,b,c){$.u.toString
a.b8(b,c)},
ay:function(a,b){var z=$.u
if(z===C.e){z.toString
return P.c2(a,b)}return P.c2(a,z.br(b,!0))},
c2:function(a,b){var z=C.b.aF(a.a,1000)
return H.hS(z<0?0:z,b)},
b_:function(a,b,c,d,e){var z,y,x
z={}
z.a=d
y=new P.dx(new P.jd(z,e),C.e,null)
z=$.ak
if(z==null){P.dM(y)
$.aD=$.aC}else{x=$.aD
if(x==null){y.c=z
$.aD=y
$.ak=y}else{y.c=x.c
x.c=y
$.aD=y
if(y.c==null)$.aC=y}}},
jc:function(a,b){throw H.e(new P.ah(a,b))},
dJ:function(a,b,c,d){var z,y
y=$.u
if(y===c)return d.$0()
$.u=c
z=y
try{y=d.$0()
return y}finally{$.u=z}},
dL:function(a,b,c,d,e){var z,y
y=$.u
if(y===c)return d.$1(e)
$.u=c
z=y
try{y=d.$1(e)
return y}finally{$.u=z}},
dK:function(a,b,c,d,e,f){var z,y
y=$.u
if(y===c)return d.$2(e,f)
$.u=c
z=y
try{y=d.$2(e,f)
return y}finally{$.u=z}},
al:function(a,b,c,d){var z=C.e!==c
if(z){d=c.br(d,!(!z||C.e.gbt()===c))
c=C.e}P.dM(new P.dx(d,c,null))},
i4:{
"^":"b:0;a",
$1:function(a){var z,y;--init.globalState.f.b
z=this.a
y=z.a
z.a=null
y.$0()}},
i3:{
"^":"b:12;a,b,c",
$1:function(a){var z,y;++init.globalState.f.b
this.a.a=a
z=this.b
y=this.c
z.firstChild?z.removeChild(y):z.appendChild(y)}},
i5:{
"^":"b:1;a",
$0:function(){--init.globalState.f.b
this.a.$0()}},
i6:{
"^":"b:1;a",
$0:function(){--init.globalState.f.b
this.a.$0()}},
a9:{
"^":"c;"},
ib:{
"^":"c;",
eq:function(a,b){a=a!=null?a:new P.bY()
if(this.a.a!==0)throw H.e(new P.a3("Future already completed"))
$.u.toString
this.ab(a,b)},
ep:function(a){return this.eq(a,null)}},
i1:{
"^":"ib;a",
eo:function(a,b){var z=this.a
if(z.a!==0)throw H.e(new P.a3("Future already completed"))
z.dM(b)},
ab:function(a,b){this.a.dN(a,b)}},
aA:{
"^":"c;c0:a<,f2:b>,c,d,e",
gas:function(){return this.b.b},
gcT:function(){return(this.c&1)!==0},
geK:function(){return this.c===6},
geJ:function(){return this.c===8},
ge5:function(){return this.d},
gee:function(){return this.d}},
U:{
"^":"c;bp:a?,as:b<,c",
gdZ:function(){return this.a===8},
se2:function(a){this.a=2},
d4:function(a,b){var z,y
z=$.u
if(z!==C.e){z.toString
if(b!=null)b=P.dI(b,z)}y=H.a(new P.U(0,z,null),[null])
this.b9(new P.aA(null,y,b==null?1:3,a,b))
return y},
bG:function(a){var z,y
z=$.u
y=new P.U(0,z,null)
y.$builtinTypeInfo=this.$builtinTypeInfo
if(z!==C.e)z.toString
this.b9(new P.aA(null,y,8,a,null))
return y},
bk:function(){if(this.a!==0)throw H.e(new P.a3("Future already completed"))
this.a=1},
ged:function(){return this.c},
gaC:function(){return this.c},
eb:function(a,b){this.a=8
this.c=new P.ah(a,b)},
b9:function(a){var z
if(this.a>=4){z=this.b
z.toString
P.al(null,null,z,new P.io(this,a))}else{a.a=this.c
this.c=a}},
aY:function(){var z,y,x
z=this.c
this.c=null
for(y=null;z!=null;y=z,z=x){x=z.gc0()
z.a=y}return y},
bf:function(a){var z,y
z=J.r(a)
if(!!z.$isa9)if(!!z.$isU)P.bq(a,this)
else P.c5(a,this)
else{y=this.aY()
this.a=4
this.c=a
P.ae(this,y)}},
bR:function(a){var z=this.aY()
this.a=4
this.c=a
P.ae(this,z)},
ab:[function(a,b){var z=this.aY()
this.a=8
this.c=new P.ah(a,b)
P.ae(this,z)},function(a){return this.ab(a,null)},"ff","$2","$1","gbg",2,2,13,0],
dM:function(a){var z
if(a==null);else{z=J.r(a)
if(!!z.$isa9){if(!!z.$isU){z=a.a
if(z>=4&&z===8){this.bk()
z=this.b
z.toString
P.al(null,null,z,new P.iq(this,a))}else P.bq(a,this)}else P.c5(a,this)
return}}this.bk()
z=this.b
z.toString
P.al(null,null,z,new P.ir(this,a))},
dN:function(a,b){var z
this.bk()
z=this.b
z.toString
P.al(null,null,z,new P.ip(this,a,b))},
$isa9:1,
static:{c5:function(a,b){var z,y,x,w
b.sbp(2)
try{a.d4(new P.is(b),new P.it(b))}catch(x){w=H.H(x)
z=w
y=H.P(x)
P.ck(new P.iu(b,z,y))}},bq:function(a,b){var z
b.a=2
z=new P.aA(null,b,0,null,null)
if(a.a>=4)P.ae(a,z)
else a.b9(z)},ae:function(a,b){var z,y,x,w,v,u,t,s,r,q,p,o
z={}
z.a=a
for(y=a;!0;){x={}
w=y.gdZ()
if(b==null){if(w){v=z.a.gaC()
y=z.a.gas()
x=J.Z(v)
u=v.ga9()
y.toString
P.b_(null,null,y,x,u)}return}for(;b.gc0()!=null;b=t){t=b.a
b.a=null
P.ae(z.a,b)}x.a=!0
s=w?null:z.a.ged()
x.b=s
x.c=!1
y=!w
if(!y||b.gcT()||b.c===8){r=b.gas()
if(w){u=z.a.gas()
u.toString
if(u==null?r!=null:u!==r){u=u.gbt()
r.toString
u=u===r}else u=!0
u=!u}else u=!1
if(u){v=z.a.gaC()
y=z.a.gas()
x=J.Z(v)
u=v.ga9()
y.toString
P.b_(null,null,y,x,u)
return}q=$.u
if(q==null?r!=null:q!==r)$.u=r
else q=null
if(y){if(b.gcT())x.a=new P.iw(x,b,s,r).$0()}else new P.iv(z,x,b,r).$0()
if(b.geJ())new P.ix(z,x,w,b,r).$0()
if(q!=null)$.u=q
if(x.c)return
if(x.a===!0){y=x.b
y=(s==null?y!=null:s!==y)&&!!J.r(y).$isa9}else y=!1
if(y){p=x.b
o=b.b
if(p instanceof P.U)if(p.a>=4){o.a=2
z.a=p
b=new P.aA(null,o,0,null,null)
y=p
continue}else P.bq(p,o)
else P.c5(p,o)
return}}o=b.b
b=o.aY()
y=x.a
x=x.b
if(y===!0){o.a=4
o.c=x}else{o.a=8
o.c=x}z.a=o
y=o}}}},
io:{
"^":"b:1;a,b",
$0:function(){P.ae(this.a,this.b)}},
is:{
"^":"b:0;a",
$1:function(a){this.a.bR(a)}},
it:{
"^":"b:6;a",
$2:function(a,b){this.a.ab(a,b)},
$1:function(a){return this.$2(a,null)}},
iu:{
"^":"b:1;a,b,c",
$0:function(){this.a.ab(this.b,this.c)}},
iq:{
"^":"b:1;a,b",
$0:function(){P.bq(this.b,this.a)}},
ir:{
"^":"b:1;a,b",
$0:function(){this.a.bR(this.b)}},
ip:{
"^":"b:1;a,b,c",
$0:function(){this.a.ab(this.b,this.c)}},
iw:{
"^":"b:14;a,b,c,d",
$0:function(){var z,y,x,w
try{this.a.b=this.d.bB(this.b.ge5(),this.c)
return!0}catch(x){w=H.H(x)
z=w
y=H.P(x)
this.a.b=new P.ah(z,y)
return!1}}},
iv:{
"^":"b:2;a,b,c,d",
$0:function(){var z,y,x,w,v,u,t,s,r,q,p,o,n,m
z=this.a.a.gaC()
y=!0
r=this.c
if(r.geK()){x=r.d
try{y=this.d.bB(x,J.Z(z))}catch(q){r=H.H(q)
w=r
v=H.P(q)
r=J.Z(z)
p=w
o=(r==null?p==null:r===p)?z:new P.ah(w,v)
r=this.b
r.b=o
r.a=!1
return}}u=r.e
if(y===!0&&u!=null){try{r=u
p=H.b3()
p=H.an(p,[p,p]).ah(r)
n=this.d
m=this.b
if(p)m.b=n.f3(u,J.Z(z),z.ga9())
else m.b=n.bB(u,J.Z(z))}catch(q){r=H.H(q)
t=r
s=H.P(q)
r=J.Z(z)
p=t
o=(r==null?p==null:r===p)?z:new P.ah(t,s)
r=this.b
r.b=o
r.a=!1
return}this.b.a=!0}else{r=this.b
r.b=z
r.a=!1}}},
ix:{
"^":"b:2;a,b,c,d,e",
$0:function(){var z,y,x,w,v,u,t,s
z={}
z.a=null
try{w=this.e.d1(this.d.gee())
z.a=w
v=w}catch(u){z=H.H(u)
y=z
x=H.P(u)
if(this.c){z=J.Z(this.a.a.gaC())
v=y
v=z==null?v==null:z===v
z=v}else z=!1
v=this.b
if(z)v.b=this.a.a.gaC()
else v.b=new P.ah(y,x)
v.a=!1
return}if(!!J.r(v).$isa9){t=this.d
s=t.gf2(t)
s.se2(!0)
this.b.c=!0
v.d4(new P.iy(this.a,s),new P.iz(z,s))}}},
iy:{
"^":"b:0;a,b",
$1:function(a){P.ae(this.a.a,new P.aA(null,this.b,0,null,null))}},
iz:{
"^":"b:6;a,b",
$2:function(a,b){var z,y
z=this.a
if(!(z.a instanceof P.U)){y=H.a(new P.U(0,$.u,null),[null])
z.a=y
y.eb(a,b)}P.ae(z.a,new P.aA(null,this.b,0,null,null))},
$1:function(a){return this.$2(a,null)}},
dx:{
"^":"c;a,b,c",
el:function(){return this.a.$0()}},
ad:{
"^":"c;",
ay:function(a,b){return H.a(new P.iI(b,this),[H.O(this,"ad",0),null])},
S:function(a,b){var z,y
z={}
y=H.a(new P.U(0,$.u,null),[null])
z.a=null
z.a=this.ax(new P.hJ(z,this,b,y),!0,new P.hK(y),y.gbg())
return y},
gl:function(a){var z,y
z={}
y=H.a(new P.U(0,$.u,null),[P.B])
z.a=0
this.ax(new P.hL(z),!0,new P.hM(z,y),y.gbg())
return y},
bD:function(a){var z,y
z=H.a([],[H.O(this,"ad",0)])
y=H.a(new P.U(0,$.u,null),[[P.n,H.O(this,"ad",0)]])
this.ax(new P.hN(this,z),!0,new P.hO(z,y),y.gbg())
return y}},
hJ:{
"^":"b;a,b,c,d",
$1:function(a){P.je(new P.hH(this.c,a),new P.hI(),P.j6(this.a.a,this.d))},
$signature:function(){return H.ce(function(a){return{func:1,args:[a]}},this.b,"ad")}},
hH:{
"^":"b:1;a,b",
$0:function(){return this.a.$1(this.b)}},
hI:{
"^":"b:0;",
$1:function(a){}},
hK:{
"^":"b:1;a",
$0:function(){this.a.bf(null)}},
hL:{
"^":"b:0;a",
$1:function(a){++this.a.a}},
hM:{
"^":"b:1;a,b",
$0:function(){this.b.bf(this.a.a)}},
hN:{
"^":"b;a,b",
$1:function(a){this.b.push(a)},
$signature:function(){return H.ce(function(a){return{func:1,args:[a]}},this.a,"ad")}},
hO:{
"^":"b:1;a,b",
$0:function(){this.b.bf(this.a)}},
hG:{
"^":"c;"},
l8:{
"^":"c;"},
i8:{
"^":"c;as:d<,bp:e?",
by:function(a,b){var z=this.e
if((z&8)!==0)return
this.e=(z+128|4)>>>0
if(z<128&&this.r!=null)this.r.cj()
if((z&4)===0&&(this.e&32)===0)this.bY(this.gc2())},
cY:function(a){return this.by(a,null)},
d0:function(){var z=this.e
if((z&8)!==0)return
if(z>=128){z-=128
this.e=z
if(z<128){if((z&64)!==0){z=this.r
z=!z.gT(z)}else z=!1
if(z)this.r.b3(this)
else{z=(this.e&4294967291)>>>0
this.e=z
if((z&32)===0)this.bY(this.gc4())}}}},
a3:function(){var z=(this.e&4294967279)>>>0
this.e=z
if((z&8)!==0)return this.f
this.bd()
return this.f},
bd:function(){var z=(this.e|8)>>>0
this.e=z
if((z&64)!==0)this.r.cj()
if((this.e&32)===0)this.r=null
this.f=this.c1()},
bb:["dt",function(a){var z=this.e
if((z&8)!==0)return
if(z<32)this.ca(a)
else this.ba(new P.ie(a,null))}],
b8:["du",function(a,b){var z=this.e
if((z&8)!==0)return
if(z<32)this.cc(a,b)
else this.ba(new P.ih(a,b,null))}],
dL:function(){var z=this.e
if((z&8)!==0)return
z=(z|2)>>>0
this.e=z
if(z<32)this.cb()
else this.ba(C.w)},
c3:[function(){},"$0","gc2",0,0,2],
c5:[function(){},"$0","gc4",0,0,2],
c1:function(){return},
ba:function(a){var z,y
z=this.r
if(z==null){z=new P.iU(null,null,0)
this.r=z}z.ac(0,a)
y=this.e
if((y&64)===0){y=(y|64)>>>0
this.e=y
if(y<128)this.r.b3(this)}},
ca:function(a){var z=this.e
this.e=(z|32)>>>0
this.d.bC(this.a,a)
this.e=(this.e&4294967263)>>>0
this.be((z&4)!==0)},
cc:function(a,b){var z,y
z=this.e
y=new P.ia(this,a,b)
if((z&1)!==0){this.e=(z|16)>>>0
this.bd()
z=this.f
if(!!J.r(z).$isa9)z.bG(y)
else y.$0()}else{y.$0()
this.be((z&4)!==0)}},
cb:function(){var z,y
z=new P.i9(this)
this.bd()
this.e=(this.e|16)>>>0
y=this.f
if(!!J.r(y).$isa9)y.bG(z)
else z.$0()},
bY:function(a){var z=this.e
this.e=(z|32)>>>0
a.$0()
this.e=(this.e&4294967263)>>>0
this.be((z&4)!==0)},
be:function(a){var z,y
if((this.e&64)!==0){z=this.r
z=z.gT(z)}else z=!1
if(z){z=(this.e&4294967231)>>>0
this.e=z
if((z&4)!==0)if(z<128){z=this.r
z=z==null||z.gT(z)}else z=!1
else z=!1
if(z)this.e=(this.e&4294967291)>>>0}for(;!0;a=y){z=this.e
if((z&8)!==0){this.r=null
return}y=(z&4)!==0
if(a===y)break
this.e=(z^32)>>>0
if(y)this.c3()
else this.c5()
this.e=(this.e&4294967263)>>>0}z=this.e
if((z&64)!==0&&z<128)this.r.b3(this)},
dF:function(a,b,c,d){var z=this.d
z.toString
this.a=a
this.b=P.dI(b,z)
this.c=c}},
ia:{
"^":"b:2;a,b,c",
$0:function(){var z,y,x,w,v,u
z=this.a
y=z.e
if((y&8)!==0&&(y&16)===0)return
z.e=(y|32)>>>0
y=z.b
x=H.b3()
x=H.an(x,[x,x]).ah(y)
w=z.d
v=this.b
u=z.b
if(x)w.f4(u,v,this.c)
else w.bC(u,v)
z.e=(z.e&4294967263)>>>0}},
i9:{
"^":"b:2;a",
$0:function(){var z,y
z=this.a
y=z.e
if((y&16)===0)return
z.e=(y|42)>>>0
z.d.d2(z.c)
z.e=(z.e&4294967263)>>>0}},
dz:{
"^":"c;b1:a@"},
ie:{
"^":"dz;b,a",
bz:function(a){a.ca(this.b)}},
ih:{
"^":"dz;aI:b>,a9:c<,a",
bz:function(a){a.cc(this.b,this.c)}},
ig:{
"^":"c;",
bz:function(a){a.cb()},
gb1:function(){return},
sb1:function(a){throw H.e(new P.a3("No events after a done."))}},
iK:{
"^":"c;bp:a?",
b3:function(a){var z=this.a
if(z===1)return
if(z>=1){this.a=1
return}P.ck(new P.iL(this,a))
this.a=1},
cj:function(){if(this.a===1)this.a=3}},
iL:{
"^":"b:1;a,b",
$0:function(){var z,y
z=this.a
y=z.a
z.a=0
if(y===3)return
z.eG(this.b)}},
iU:{
"^":"iK;b,c,a",
gT:function(a){return this.c==null},
ac:function(a,b){var z=this.c
if(z==null){this.c=b
this.b=b}else{z.sb1(b)
this.c=b}},
eG:function(a){var z,y
z=this.b
y=z.gb1()
this.b=y
if(y==null)this.c=null
z.bz(a)}},
j8:{
"^":"b:1;a,b,c",
$0:function(){return this.a.ab(this.b,this.c)}},
j7:{
"^":"b:15;a,b",
$2:function(a,b){return P.j5(this.a,this.b,a,b)}},
c4:{
"^":"ad;",
ax:function(a,b,c,d){return this.dR(a,d,c,!0===b)},
cW:function(a,b,c){return this.ax(a,null,b,c)},
dR:function(a,b,c,d){return P.im(this,a,b,c,d,H.O(this,"c4",0),H.O(this,"c4",1))},
bZ:function(a,b){b.bb(a)},
$asad:function(a,b){return[b]}},
dA:{
"^":"i8;x,y,a,b,c,d,e,f,r",
bb:function(a){if((this.e&2)!==0)return
this.dt(a)},
b8:function(a,b){if((this.e&2)!==0)return
this.du(a,b)},
c3:[function(){var z=this.y
if(z==null)return
z.cY(0)},"$0","gc2",0,0,2],
c5:[function(){var z=this.y
if(z==null)return
z.d0()},"$0","gc4",0,0,2],
c1:function(){var z=this.y
if(z!=null){this.y=null
return z.a3()}return},
fg:[function(a){this.x.bZ(a,this)},"$1","gdV",2,0,function(){return H.ce(function(a,b){return{func:1,v:true,args:[a]}},this.$receiver,"dA")}],
fi:[function(a,b){this.b8(a,b)},"$2","gdX",4,0,16],
fh:[function(){this.dL()},"$0","gdW",0,0,2],
dG:function(a,b,c,d,e,f,g){var z,y
z=this.gdV()
y=this.gdX()
this.y=this.x.a.cW(z,this.gdW(),y)},
static:{im:function(a,b,c,d,e,f,g){var z=$.u
z=H.a(new P.dA(a,null,null,null,null,z,e?1:0,null,null),[f,g])
z.dF(b,c,d,e)
z.dG(a,b,c,d,e,f,g)
return z}}},
iI:{
"^":"c4;b,a",
bZ:function(a,b){var z,y,x,w,v
z=null
try{z=this.ec(a)}catch(w){v=H.H(w)
y=v
x=H.P(w)
P.j4(b,y,x)
return}b.bb(z)},
ec:function(a){return this.b.$1(a)}},
ah:{
"^":"c;aI:a>,a9:b<",
j:function(a){return H.d(this.a)},
$isI:1},
j3:{
"^":"c;"},
jd:{
"^":"b:1;a,b",
$0:function(){var z,y,x
z=this.a
y=z.a
if(y==null){x=new P.bY()
z.a=x
z=x}else z=y
y=this.b
if(y==null)throw H.e(z)
P.jc(z,y)}},
iM:{
"^":"j3;",
gbt:function(){return this},
d2:function(a){var z,y,x,w
try{if(C.e===$.u){x=a.$0()
return x}x=P.dJ(null,null,this,a)
return x}catch(w){x=H.H(w)
z=x
y=H.P(w)
return P.b_(null,null,this,z,y)}},
bC:function(a,b){var z,y,x,w
try{if(C.e===$.u){x=a.$1(b)
return x}x=P.dL(null,null,this,a,b)
return x}catch(w){x=H.H(w)
z=x
y=H.P(w)
return P.b_(null,null,this,z,y)}},
f4:function(a,b,c){var z,y,x,w
try{if(C.e===$.u){x=a.$2(b,c)
return x}x=P.dK(null,null,this,a,b,c)
return x}catch(w){x=H.H(w)
z=x
y=H.P(w)
return P.b_(null,null,this,z,y)}},
br:function(a,b){if(b)return new P.iN(this,a)
else return new P.iO(this,a)},
ek:function(a,b){return new P.iP(this,a)},
h:function(a,b){return},
d1:function(a){if($.u===C.e)return a.$0()
return P.dJ(null,null,this,a)},
bB:function(a,b){if($.u===C.e)return a.$1(b)
return P.dL(null,null,this,a,b)},
f3:function(a,b,c){if($.u===C.e)return a.$2(b,c)
return P.dK(null,null,this,a,b,c)}},
iN:{
"^":"b:1;a,b",
$0:function(){return this.a.d2(this.b)}},
iO:{
"^":"b:1;a,b",
$0:function(){return this.a.d1(this.b)}},
iP:{
"^":"b:0;a,b",
$1:function(a){return this.a.bC(this.b,a)}}}],["","",,P,{
"^":"",
bP:function(){return H.a(new H.a2(0,null,null,null,null,null,0),[null,null])},
av:function(a){return H.jp(a,H.a(new H.a2(0,null,null,null,null,null,0),[null,null]))},
h1:function(a,b,c){var z,y
if(P.cb(a)){if(b==="("&&c===")")return"(...)"
return b+"..."+c}z=[]
y=$.$get$aE()
y.push(a)
try{P.ja(a,z)}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=P.df(b,z,", ")+c
return y.charCodeAt(0)==0?y:y},
bb:function(a,b,c){var z,y,x
if(P.cb(a))return b+"..."+c
z=new P.c1(b)
y=$.$get$aE()
y.push(a)
try{x=z
x.a=P.df(x.gar(),a,", ")}finally{if(0>=y.length)return H.h(y,-1)
y.pop()}y=z
y.a=y.gar()+c
y=z.gar()
return y.charCodeAt(0)==0?y:y},
cb:function(a){var z,y
for(z=0;y=$.$get$aE(),z<y.length;++z)if(a===y[z])return!0
return!1},
ja:function(a,b){var z,y,x,w,v,u,t,s,r,q
z=a.gE(a)
y=0
x=0
while(!0){if(!(y<80||x<3))break
if(!z.A())return
w=H.d(z.gB())
b.push(w)
y+=w.length+2;++x}if(!z.A()){if(x<=5)return
if(0>=b.length)return H.h(b,-1)
v=b.pop()
if(0>=b.length)return H.h(b,-1)
u=b.pop()}else{t=z.gB();++x
if(!z.A()){if(x<=4){b.push(H.d(t))
return}v=H.d(t)
if(0>=b.length)return H.h(b,-1)
u=b.pop()
y+=v.length+2}else{s=z.gB();++x
for(;z.A();t=s,s=r){r=z.gB();++x
if(x>100){while(!0){if(!(y>75&&x>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2;--x}b.push("...")
return}}u=H.d(t)
v=H.d(s)
y+=v.length+u.length+4}}if(x>b.length+2){y+=5
q="..."}else q=null
while(!0){if(!(y>80&&b.length>3))break
if(0>=b.length)return H.h(b,-1)
y-=b.pop().length+2
if(q==null){y+=5
q="..."}}if(q!=null)b.push(q)
b.push(u)
b.push(v)},
W:function(a,b,c,d){return H.a(new P.iC(0,null,null,null,null,null,0),[d])},
cU:function(a,b){var z,y,x
z=P.W(null,null,null,b)
for(y=a.length,x=0;x<a.length;a.length===y||(0,H.by)(a),++x)z.ac(0,a[x])
return z},
hm:function(a){var z,y,x
z={}
if(P.cb(a))return"{...}"
y=new P.c1("")
try{$.$get$aE().push(a)
x=y
x.a=x.gar()+"{"
z.a=!0
J.ea(a,new P.hn(z,y))
z=y
z.a=z.gar()+"}"}finally{z=$.$get$aE()
if(0>=z.length)return H.h(z,-1)
z.pop()}z=y.gar()
return z.charCodeAt(0)==0?z:z},
dE:{
"^":"a2;a,b,c,d,e,f,r",
aL:function(a){return H.jI(a)&0x3ffffff},
aM:function(a,b){var z,y,x
if(a==null)return-1
z=a.length
for(y=0;y<z;++y){x=a[y].gcU()
if(x==null?b==null:x===b)return y}return-1},
static:{aB:function(a,b){return H.a(new P.dE(0,null,null,null,null,null,0),[a,b])}}},
iC:{
"^":"iA;a,b,c,d,e,f,r",
gE:function(a){var z=new P.cT(this,this.r,null,null)
z.c=this.e
return z},
gl:function(a){return this.a},
K:function(a,b){var z,y
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null)return!1
return z[b]!=null}else if(typeof b==="number"&&(b&0x3ffffff)===b){y=this.c
if(y==null)return!1
return y[b]!=null}else return this.dQ(b)},
dQ:function(a){var z=this.d
if(z==null)return!1
return this.aX(z[this.aW(a)],a)>=0},
cX:function(a){var z
if(!(typeof a==="string"&&a!=="__proto__"))z=typeof a==="number"&&(a&0x3ffffff)===a
else z=!0
if(z)return this.K(0,a)?a:null
else return this.e3(a)},
e3:function(a){var z,y,x
z=this.d
if(z==null)return
y=z[this.aW(a)]
x=this.aX(y,a)
if(x<0)return
return J.cl(y,x).gbU()},
S:function(a,b){var z,y
z=this.e
y=this.r
for(;z!=null;){b.$1(z.a)
if(y!==this.r)throw H.e(new P.M(this))
z=z.b}},
ac:function(a,b){var z,y,x
if(typeof b==="string"&&b!=="__proto__"){z=this.b
if(z==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.b=y
z=y}return this.bN(z,b)}else if(typeof b==="number"&&(b&0x3ffffff)===b){x=this.c
if(x==null){y=Object.create(null)
y["<non-identifier-key>"]=y
delete y["<non-identifier-key>"]
this.c=y
x=y}return this.bN(x,b)}else return this.aa(b)},
aa:function(a){var z,y,x
z=this.d
if(z==null){z=P.iD()
this.d=z}y=this.aW(a)
x=z[y]
if(x==null)z[y]=[this.bm(a)]
else{if(this.aX(x,a)>=0)return!1
x.push(this.bm(a))}return!0},
aO:function(a,b){if(typeof b==="string"&&b!=="__proto__")return this.bP(this.b,b)
else if(typeof b==="number"&&(b&0x3ffffff)===b)return this.bP(this.c,b)
else return this.e7(b)},
e7:function(a){var z,y,x
z=this.d
if(z==null)return!1
y=z[this.aW(a)]
x=this.aX(y,a)
if(x<0)return!1
this.bQ(y.splice(x,1)[0])
return!0},
au:function(a){if(this.a>0){this.f=null
this.e=null
this.d=null
this.c=null
this.b=null
this.a=0
this.r=this.r+1&67108863}},
bN:function(a,b){if(a[b]!=null)return!1
a[b]=this.bm(b)
return!0},
bP:function(a,b){var z
if(a==null)return!1
z=a[b]
if(z==null)return!1
this.bQ(z)
delete a[b]
return!0},
bm:function(a){var z,y
z=new P.hj(a,null,null)
if(this.e==null){this.f=z
this.e=z}else{y=this.f
z.c=y
y.b=z
this.f=z}++this.a
this.r=this.r+1&67108863
return z},
bQ:function(a){var z,y
z=a.gdP()
y=a.b
if(z==null)this.e=y
else z.b=y
if(y==null)this.f=z
else y.c=z;--this.a
this.r=this.r+1&67108863},
aW:function(a){return J.R(a)&0x3ffffff},
aX:function(a,b){var z,y
if(a==null)return-1
z=a.length
for(y=0;y<z;++y)if(J.S(a[y].gbU(),b))return y
return-1},
$isy:1,
static:{iD:function(){var z=Object.create(null)
z["<non-identifier-key>"]=z
delete z["<non-identifier-key>"]
return z}}},
hj:{
"^":"c;bU:a<,b,dP:c<"},
cT:{
"^":"c;a,b,c,d",
gB:function(){return this.d},
A:function(){var z=this.a
if(this.b!==z.r)throw H.e(new P.M(z))
else{z=this.c
if(z==null){this.d=null
return!1}else{this.d=z.a
this.c=z.b
return!0}}}},
iA:{
"^":"hD;"},
cV:{
"^":"hu;"},
hu:{
"^":"c+aw;",
$isn:1,
$asn:null,
$isy:1},
aw:{
"^":"c;",
gE:function(a){return new H.cW(a,this.gl(a),0,null)},
a4:function(a,b){return this.h(a,b)},
S:function(a,b){var z,y
z=this.gl(a)
for(y=0;y<z;++y){b.$1(this.h(a,y))
if(z!==this.gl(a))throw H.e(new P.M(a))}},
aS:function(a,b){return H.a(new H.dw(a,b),[H.O(a,"aw",0)])},
ay:function(a,b){return H.a(new H.bh(a,b),[null,null])},
j:function(a){return P.bb(a,"[","]")},
$isn:1,
$asn:null,
$isy:1},
hn:{
"^":"b:3;a,b",
$2:function(a,b){var z,y
z=this.a
if(!z.a)this.b.a+=", "
z.a=!1
z=this.b
y=z.a+=H.d(a)
z.a=y+": "
z.a+=H.d(b)}},
hk:{
"^":"J;a,b,c,d",
gE:function(a){return new P.iE(this,this.c,this.d,this.b,null)},
S:function(a,b){var z,y,x
z=this.d
for(y=this.b;y!==this.c;y=(y+1&this.a.length-1)>>>0){x=this.a
if(y<0||y>=x.length)return H.h(x,y)
b.$1(x[y])
if(z!==this.d)H.F(new P.M(this))}},
gT:function(a){return this.b===this.c},
gl:function(a){return(this.c-this.b&this.a.length-1)>>>0},
au:function(a){var z,y,x,w,v
z=this.b
y=this.c
if(z!==y){for(x=this.a,w=x.length,v=w-1;z!==y;z=(z+1&v)>>>0){if(z<0||z>=w)return H.h(x,z)
x[z]=null}this.c=0
this.b=0;++this.d}},
j:function(a){return P.bb(this,"{","}")},
d_:function(){var z,y,x,w
z=this.b
if(z===this.c)throw H.e(H.bc());++this.d
y=this.a
x=y.length
if(z>=x)return H.h(y,z)
w=y[z]
y[z]=null
this.b=(z+1&x-1)>>>0
return w},
aa:function(a){var z,y,x
z=this.a
y=this.c
x=z.length
if(y<0||y>=x)return H.h(z,y)
z[y]=a
x=(y+1&x-1)>>>0
this.c=x
if(this.b===x)this.bX();++this.d},
bX:function(){var z,y,x,w
z=new Array(this.a.length*2)
z.fixed$length=Array
y=H.a(z,[H.i(this,0)])
z=this.a
x=this.b
w=z.length-x
C.f.bK(y,0,w,z,x)
C.f.bK(y,w,w+this.b,this.a,0)
this.b=0
this.c=this.a.length
this.a=y},
dD:function(a,b){var z=new Array(8)
z.fixed$length=Array
this.a=H.a(z,[b])},
$isy:1,
static:{bR:function(a,b){var z=H.a(new P.hk(null,0,0,0),[b])
z.dD(a,b)
return z}}},
iE:{
"^":"c;a,b,c,d,e",
gB:function(){return this.e},
A:function(){var z,y,x
z=this.a
if(this.c!==z.d)H.F(new P.M(z))
y=this.d
if(y===this.b){this.e=null
return!1}z=z.a
x=z.length
if(y>=x)return H.h(z,y)
this.e=z[y]
this.d=(y+1&x-1)>>>0
return!0}},
hE:{
"^":"c;",
ad:function(a,b){var z
for(z=J.aI(b);z.A();)this.ac(0,z.gB())},
ay:function(a,b){return H.a(new H.cD(this,b),[H.i(this,0),null])},
j:function(a){return P.bb(this,"{","}")},
S:function(a,b){var z
for(z=this.gE(this);z.A();)b.$1(z.d)},
$isy:1},
hD:{
"^":"hE;"}}],["","",,P,{
"^":"",
cG:function(a){if(typeof a==="number"||typeof a==="boolean"||null==a)return J.a_(a)
if(typeof a==="string")return JSON.stringify(a)
return P.fK(a)},
fK:function(a){var z=J.r(a)
if(!!z.$isb)return z.j(a)
return H.bk(a)},
b8:function(a){return new P.il(a)},
bS:function(a,b,c){var z,y
z=H.a([],[c])
for(y=J.aI(a);y.A();)z.push(y.gB())
return z},
b4:function(a){var z=H.d(a)
H.jJ(z)},
b1:{
"^":"c;"},
"+bool":0,
bJ:{
"^":"c;a,b",
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.bJ))return!1
return this.a===b.a&&this.b===b.b},
gC:function(a){return this.a},
j:function(a){var z,y,x,w,v,u,t,s
z=this.b
y=P.fB(z?H.N(this).getUTCFullYear()+0:H.N(this).getFullYear()+0)
x=P.aL(z?H.N(this).getUTCMonth()+1:H.N(this).getMonth()+1)
w=P.aL(z?H.N(this).getUTCDate()+0:H.N(this).getDate()+0)
v=P.aL(z?H.N(this).getUTCHours()+0:H.N(this).getHours()+0)
u=P.aL(z?H.N(this).getUTCMinutes()+0:H.N(this).getMinutes()+0)
t=P.aL(z?H.N(this).getUTCSeconds()+0:H.N(this).getSeconds()+0)
s=P.fC(z?H.N(this).getUTCMilliseconds()+0:H.N(this).getMilliseconds()+0)
if(z)return y+"-"+x+"-"+w+" "+v+":"+u+":"+t+"."+s+"Z"
else return y+"-"+x+"-"+w+" "+v+":"+u+":"+t+"."+s},
dB:function(a,b){if(Math.abs(a)>864e13)throw H.e(P.aK(a))},
static:{fA:function(a,b){var z=new P.bJ(a,b)
z.dB(a,b)
return z},fB:function(a){var z,y
z=Math.abs(a)
y=a<0?"-":""
if(z>=1000)return""+a
if(z>=100)return y+"0"+H.d(z)
if(z>=10)return y+"00"+H.d(z)
return y+"000"+H.d(z)},fC:function(a){if(a>=100)return""+a
if(a>=10)return"0"+a
return"00"+a},aL:function(a){if(a>=10)return""+a
return"0"+a}}},
aG:{
"^":"aq;"},
"+double":0,
a6:{
"^":"c;a",
F:function(a,b){return new P.a6(C.b.F(this.a,b.gdT()))},
aT:function(a,b){return C.b.aT(this.a,b.gdT())},
w:function(a,b){if(b==null)return!1
if(!(b instanceof P.a6))return!1
return this.a===b.a},
gC:function(a){return this.a&0x1FFFFFFF},
j:function(a){var z,y,x,w,v
z=new P.fH()
y=this.a
if(y<0)return"-"+new P.a6(-y).j(0)
x=z.$1(C.b.bA(C.b.aF(y,6e7),60))
w=z.$1(C.b.bA(C.b.aF(y,1e6),60))
v=new P.fG().$1(C.b.bA(y,1e6))
return""+C.b.aF(y,36e8)+":"+H.d(x)+":"+H.d(w)+"."+H.d(v)}},
fG:{
"^":"b:7;",
$1:function(a){if(a>=1e5)return""+a
if(a>=1e4)return"0"+a
if(a>=1000)return"00"+a
if(a>=100)return"000"+a
if(a>=10)return"0000"+a
return"00000"+a}},
fH:{
"^":"b:7;",
$1:function(a){if(a>=10)return""+a
return"0"+a}},
I:{
"^":"c;",
ga9:function(){return H.P(this.$thrownJsError)}},
bY:{
"^":"I;",
j:function(a){return"Throw of null."}},
a5:{
"^":"I;a,b,c,d",
gbi:function(){return"Invalid argument"+(!this.a?"(s)":"")},
gbh:function(){return""},
j:function(a){var z,y,x,w,v,u
z=this.c
y=z!=null?" ("+H.d(z)+")":""
z=this.d
x=z==null?"":": "+H.d(z)
w=this.gbi()+y+x
if(!this.a)return w
v=this.gbh()
u=P.cG(this.b)
return w+v+": "+H.d(u)},
static:{aK:function(a){return new P.a5(!1,null,null,a)},ep:function(a,b,c){return new P.a5(!0,a,b,c)}}},
d7:{
"^":"a5;e,f,a,b,c,d",
gbi:function(){return"RangeError"},
gbh:function(){var z,y,x
z=this.e
if(z==null){z=this.f
y=z!=null?": Not less than or equal to "+H.d(z):""}else{x=this.f
if(x==null)y=": Not greater than or equal to "+H.d(z)
else{if(typeof x!=="number")return x.ao()
if(typeof z!=="number")return H.l(z)
if(x>z)y=": Not in range "+z+".."+x+", inclusive"
else y=x<z?": Valid value range is empty":": Only valid value is "+z}}return y},
static:{aV:function(a,b,c){return new P.d7(null,null,!0,a,b,"Value not in range")},X:function(a,b,c,d,e){return new P.d7(b,c,!0,a,d,"Invalid value")},d8:function(a,b,c,d,e,f){if(0>a||a>c)throw H.e(P.X(a,0,c,"start",f))
if(a>b||b>c)throw H.e(P.X(b,a,c,"end",f))
return b}}},
fO:{
"^":"a5;e,l:f>,a,b,c,d",
gbi:function(){return"RangeError"},
gbh:function(){if(J.e5(this.b,0))return": index must not be negative"
var z=this.f
if(J.S(z,0))return": no indices are valid"
return": index should be less than "+H.d(z)},
static:{ba:function(a,b,c,d,e){var z=e!=null?e:J.aJ(b)
return new P.fO(b,z,!0,a,c,"Index out of range")}}},
K:{
"^":"I;a",
j:function(a){return"Unsupported operation: "+this.a}},
bo:{
"^":"I;a",
j:function(a){var z=this.a
return z!=null?"UnimplementedError: "+H.d(z):"UnimplementedError"}},
a3:{
"^":"I;a",
j:function(a){return"Bad state: "+this.a}},
M:{
"^":"I;a",
j:function(a){var z=this.a
if(z==null)return"Concurrent modification during iteration."
return"Concurrent modification during iteration: "+H.d(P.cG(z))+"."}},
hv:{
"^":"c;",
j:function(a){return"Out of Memory"},
ga9:function(){return},
$isI:1},
de:{
"^":"c;",
j:function(a){return"Stack Overflow"},
ga9:function(){return},
$isI:1},
fz:{
"^":"I;a",
j:function(a){return"Reading static variable '"+this.a+"' during its initialization"}},
il:{
"^":"c;a",
j:function(a){var z=this.a
if(z==null)return"Exception"
return"Exception: "+H.d(z)}},
cK:{
"^":"c;a,b,c",
j:function(a){var z,y
z=""!==this.a?"FormatException: "+this.a:"FormatException"
y=this.b
if(typeof y!=="string")return z
if(y.length>78)y=J.el(y,0,75)+"..."
return z+"\n"+H.d(y)}},
fL:{
"^":"c;a",
j:function(a){return"Expando:"+H.d(this.a)},
h:function(a,b){var z=H.bj(b,"expando$values")
return z==null?null:H.bj(z,this.bW())},
i:function(a,b,c){var z=H.bj(b,"expando$values")
if(z==null){z=new P.c()
H.c_(b,"expando$values",z)}H.c_(z,this.bW(),c)},
bW:function(){var z,y
z=H.bj(this,"expando$key")
if(z==null){y=$.cH
$.cH=y+1
z="expando$key$"+y
H.c_(this,"expando$key",z)}return z}},
B:{
"^":"aq;"},
"+int":0,
J:{
"^":"c;",
ay:function(a,b){return H.bg(this,b,H.O(this,"J",0),null)},
aS:["dr",function(a,b){return H.a(new H.dw(this,b),[H.O(this,"J",0)])}],
S:function(a,b){var z
for(z=this.gE(this);z.A();)b.$1(z.gB())},
bE:function(a,b){return P.bS(this,!0,H.O(this,"J",0))},
bD:function(a){return this.bE(a,!0)},
gl:function(a){var z,y
z=this.gE(this)
for(y=0;z.A();)++y
return y},
gT:function(a){return!this.gE(this).A()},
gap:function(a){var z,y
z=this.gE(this)
if(!z.A())throw H.e(H.bc())
y=z.gB()
if(z.A())throw H.e(H.h3())
return y},
a4:function(a,b){var z,y,x
if(b<0)H.F(P.X(b,0,null,"index",null))
for(z=this.gE(this),y=0;z.A();){x=z.gB()
if(b===y)return x;++y}throw H.e(P.ba(b,this,"index",null,y))},
j:function(a){return P.h1(this,"(",")")}},
cP:{
"^":"c;"},
n:{
"^":"c;",
$asn:null,
$isy:1},
"+List":0,
kK:{
"^":"c;",
j:function(a){return"null"}},
"+Null":0,
aq:{
"^":"c;"},
"+num":0,
c:{
"^":";",
w:function(a,b){return this===b},
gC:function(a){return H.ab(this)},
j:function(a){return H.bk(this)},
toString:function(){return this.j(this)}},
ho:{
"^":"c;"},
ax:{
"^":"c;"},
E:{
"^":"c;"},
"+String":0,
c1:{
"^":"c;ar:a<",
gl:function(a){return this.a.length},
j:function(a){var z=this.a
return z.charCodeAt(0)==0?z:z},
static:{df:function(a,b,c){var z=J.aI(b)
if(!z.A())return a
if(c.length===0){do a+=H.d(z.gB())
while(z.A())}else{a+=H.d(z.gB())
for(;z.A();)a=a+c+H.d(z.gB())}return a}}}}],["","",,W,{
"^":"",
fy:function(a){return a.replace(/^-ms-/,"ms-").replace(/-([\da-z])/ig,C.H)},
a1:function(a,b,c,d){var z,y,x
z=document.createEvent("CustomEvent")
J.eg(z,d)
if(!J.r(d).$isn)if(!J.r(d).$isbf){y=d
if(typeof y!=="string"){y=d
y=typeof y==="number"}else y=!0}else y=!0
else y=!0
if(y)try{d=new P.iY([],[]).an(d)
J.bz(z,a,!0,!0,d)}catch(x){H.H(x)
J.bz(z,a,!0,!0,null)}else J.bz(z,a,!0,!0,null)
return z},
fI:function(a,b,c){var z,y
z=document.body
y=(z&&C.n).ae(z,a,b,c)
y.toString
z=new W.T(y)
z=z.aS(z,new W.fJ())
return z.gap(z)},
at:function(a){var z,y,x
z="element tag unavailable"
try{y=J.cp(a)
if(typeof y==="string")z=J.cp(a)}catch(x){H.H(x)}return z},
af:function(a,b){a=536870911&a+b
a=536870911&a+((524287&a)<<10>>>0)
return a^a>>>6},
dD:function(a){a=536870911&a+((67108863&a)<<3>>>0)
a^=a>>>11
return 536870911&a+((16383&a)<<15>>>0)},
k:function(a){var z=$.u
if(z===C.e)return a
return z.ek(a,!0)},
e0:function(a){return document.querySelector(a)},
z:{
"^":"a7;",
$isz:1,
$isa7:1,
$isD:1,
$isc:1,
"%":"HTMLAppletElement|HTMLBRElement|HTMLContentElement|HTMLDListElement|HTMLDataListElement|HTMLDetailsElement|HTMLDialogElement|HTMLDirectoryElement|HTMLFontElement|HTMLFrameElement|HTMLHRElement|HTMLHeadElement|HTMLHeadingElement|HTMLHtmlElement|HTMLLIElement|HTMLLegendElement|HTMLMarqueeElement|HTMLMenuElement|HTMLMenuItemElement|HTMLMeterElement|HTMLModElement|HTMLOListElement|HTMLOptGroupElement|HTMLOptionElement|HTMLParagraphElement|HTMLPictureElement|HTMLPreElement|HTMLProgressElement|HTMLQuoteElement|HTMLScriptElement|HTMLShadowElement|HTMLSourceElement|HTMLSpanElement|HTMLStyleElement|HTMLTableCaptionElement|HTMLTableCellElement|HTMLTableColElement|HTMLTableDataCellElement|HTMLTableHeaderCellElement|HTMLTitleElement|HTMLTrackElement|HTMLUListElement|HTMLUnknownElement;HTMLElement"},
jT:{
"^":"z;b0:hostname=,av:href},b2:port=,aN:protocol=",
j:function(a){return String(a)},
$isf:1,
"%":"HTMLAnchorElement"},
jV:{
"^":"z;b0:hostname=,av:href},b2:port=,aN:protocol=",
j:function(a){return String(a)},
$isf:1,
"%":"HTMLAreaElement"},
jW:{
"^":"z;av:href}",
"%":"HTMLBaseElement"},
bB:{
"^":"f;",
$isbB:1,
"%":";Blob"},
bC:{
"^":"z;",
$isbC:1,
$isf:1,
"%":"HTMLBodyElement"},
p:{
"^":"z;J:name=",
$isp:1,
"%":"HTMLButtonElement"},
cs:{
"^":"z;H:height},I:width}",
ges:function(a){return a.getContext("2d")},
f6:function(a,b,c){return a.toDataURL(b,c)},
$iscs:1,
"%":"HTMLCanvasElement"},
jY:{
"^":"D;l:length=",
$isf:1,
"%":"CDATASection|CharacterData|Comment|ProcessingInstruction|Text"},
fw:{
"^":"fP;l:length=",
bc:function(a,b){var z,y
z=$.$get$cv()
y=z[b]
if(typeof y==="string")return y
y=W.fy(b) in a?b:P.fD()+b
z[b]=y
return y},
bn:function(a,b,c,d){if(d==null)d=""
a.setProperty(b,c,d)},
"%":"CSS2Properties|CSSStyleDeclaration|MSStyleCSSProperties"},
fP:{
"^":"f+fx;"},
fx:{
"^":"c;"},
jZ:{
"^":"b7;dS:_dartDetail}",
gcl:function(a){var z,y
z=a._dartDetail
if(z!=null)return z
z=a.detail
y=new P.i_([],[],!1)
y.c=!0
return y.an(z)},
e0:function(a,b,c,d,e){return a.initCustomEvent(b,!0,!0,e)},
"%":"CustomEvent"},
aM:{
"^":"z;",
$isaM:1,
"%":"HTMLDivElement|PluginPlaceholderElement"},
fE:{
"^":"D;",
ew:function(a,b,c){return a.createElement(b)},
aG:function(a,b){return this.ew(a,b,null)},
"%":"XMLDocument;Document"},
k_:{
"^":"D;",
$isf:1,
"%":"DocumentFragment|ShadowRoot"},
k0:{
"^":"f;",
j:function(a){return String(a)},
"%":"DOMException"},
fF:{
"^":"f;H:height=,bx:left=,bF:top=,I:width=",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(this.gI(a))+" x "+H.d(this.gH(a))},
w:function(a,b){var z,y,x
if(b==null)return!1
z=J.r(b)
if(!z.$isaW)return!1
y=a.left
x=z.gbx(b)
if(y==null?x==null:y===x){y=a.top
x=z.gbF(b)
if(y==null?x==null:y===x){y=this.gI(a)
x=z.gI(b)
if(y==null?x==null:y===x){y=this.gH(a)
z=z.gH(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gC:function(a){var z,y,x,w
z=J.R(a.left)
y=J.R(a.top)
x=J.R(this.gI(a))
w=J.R(this.gH(a))
return W.dD(W.af(W.af(W.af(W.af(0,z),y),x),w))},
$isaW:1,
$asaW:I.bt,
"%":";DOMRectReadOnly"},
a7:{
"^":"D;e1:innerHTML},f5:tagName=",
geh:function(a){return new W.ii(a)},
j:function(a){return a.localName},
ae:["b5",function(a,b,c,d){var z,y,x,w,v
if(c==null){z=$.cF
if(z==null){z=H.a([],[W.bX])
y=new W.d1(z)
z.push(W.dB(null))
z.push(W.dG())
$.cF=y
d=y}else d=z
z=$.cE
if(z==null){z=new W.dH(d)
$.cE=z
c=z}else{z.a=d
c=z}}if($.a8==null){z=document.implementation.createHTMLDocument("")
$.a8=z
$.bK=z.createRange()
z=$.a8
x=(z&&C.i).aG(z,"base")
J.ej(x,document.baseURI)
$.a8.head.appendChild(x)}z=$.a8
if(!!this.$isbC)w=z.body
else{w=(z&&C.i).aG(z,a.tagName)
$.a8.body.appendChild(w)}if("createContextualFragment" in window.Range.prototype&&!C.f.K(C.K,a.tagName)){$.bK.selectNodeContents(w)
v=$.bK.createContextualFragment(b)}else{J.eh(w,b)
v=$.a8.createDocumentFragment()
for(;z=w.firstChild,z!=null;)v.appendChild(z)}z=J.r(w)
if(!z.w(w,$.a8.body))z.cZ(w)
c.bJ(v)
document.adoptNode(v)
return v},function(a,b,c){return this.ae(a,b,c,null)},"ex",null,null,"gfj",2,5,null,0,0],
dj:function(a,b,c,d){a.textContent=null
a.appendChild(this.ae(a,b,c,d))},
aB:function(a,b){return this.dj(a,b,null,null)},
$isa7:1,
$isD:1,
$isc:1,
$isf:1,
"%":";Element"},
fJ:{
"^":"b:0;",
$1:function(a){return!!J.r(a).$isa7}},
k1:{
"^":"z;H:height},J:name=,I:width}",
"%":"HTMLEmbedElement"},
k2:{
"^":"b7;aI:error=",
"%":"ErrorEvent"},
b7:{
"^":"f;",
"%":"AnimationPlayerEvent|ApplicationCacheErrorEvent|AudioProcessingEvent|AutocompleteErrorEvent|BeforeUnloadEvent|CloseEvent|DeviceLightEvent|DeviceMotionEvent|DeviceOrientationEvent|ExtendableEvent|FetchEvent|FontFaceSetLoadEvent|GamepadEvent|HashChangeEvent|IDBVersionChangeEvent|InstallEvent|MIDIConnectionEvent|MIDIMessageEvent|MediaKeyEvent|MediaKeyMessageEvent|MediaKeyNeededEvent|MediaQueryListEvent|MediaStreamEvent|MediaStreamTrackEvent|MessageEvent|MutationEvent|OfflineAudioCompletionEvent|OverflowEvent|PageTransitionEvent|PopStateEvent|ProgressEvent|PushEvent|RTCDTMFToneChangeEvent|RTCDataChannelEvent|RTCIceCandidateEvent|RTCPeerConnectionIceEvent|RelatedEvent|ResourceProgressEvent|SecurityPolicyViolationEvent|SpeechRecognitionEvent|SpeechSynthesisEvent|StorageEvent|TrackEvent|TransitionEvent|WebGLContextEvent|WebKitAnimationEvent|WebKitTransitionEvent|XMLHttpRequestProgressEvent;ClipboardEvent|Event|InputEvent"},
bL:{
"^":"f;",
dK:function(a,b,c,d){return a.addEventListener(b,H.a4(c,1),!1)},
e8:function(a,b,c,d){return a.removeEventListener(b,H.a4(c,1),!1)},
"%":"MediaStream;EventTarget"},
kj:{
"^":"z;J:name=",
"%":"HTMLFieldSetElement"},
cI:{
"^":"bB;",
$iscI:1,
"%":"File"},
kl:{
"^":"z;l:length=,J:name=",
"%":"HTMLFormElement"},
fN:{
"^":"fE;",
"%":"HTMLDocument"},
kn:{
"^":"z;H:height},J:name=,I:width}",
"%":"HTMLIFrameElement"},
bM:{
"^":"z;H:height},I:width}",
$isbM:1,
"%":"HTMLImageElement"},
kp:{
"^":"z;H:height},J:name=,I:width}",
$isa7:1,
$isf:1,
$isaU:1,
"%":"HTMLInputElement"},
bd:{
"^":"dv;",
gaw:function(a){return a.keyCode},
$isbd:1,
$isc:1,
"%":"KeyboardEvent"},
ks:{
"^":"z;J:name=",
"%":"HTMLKeygenElement"},
be:{
"^":"z;",
$isbe:1,
"%":"HTMLLabelElement"},
kt:{
"^":"z;av:href}",
"%":"HTMLLinkElement"},
ku:{
"^":"f;b0:hostname=,av:href},b2:port=,aN:protocol=",
j:function(a){return String(a)},
"%":"Location"},
kv:{
"^":"z;J:name=",
"%":"HTMLMapElement"},
hp:{
"^":"z;aI:error=",
"%":"HTMLAudioElement;HTMLMediaElement"},
ky:{
"^":"z;J:name=",
"%":"HTMLMetaElement"},
kz:{
"^":"hq;",
fb:function(a,b,c){return a.send(b,c)},
b4:function(a,b){return a.send(b)},
"%":"MIDIOutput"},
hq:{
"^":"bL;",
"%":"MIDIInput;MIDIPort"},
bT:{
"^":"dv;",
$isbT:1,
$isc:1,
"%":"DragEvent|MSPointerEvent|MouseEvent|PointerEvent|WheelEvent"},
kJ:{
"^":"f;",
$isf:1,
"%":"Navigator"},
T:{
"^":"cV;a",
gap:function(a){var z,y
z=this.a
y=z.childNodes.length
if(y===0)throw H.e(new P.a3("No elements"))
if(y>1)throw H.e(new P.a3("More than one element"))
return z.firstChild},
ad:function(a,b){var z,y,x,w
z=b.a
y=this.a
if(z!==y)for(x=z.childNodes.length,w=0;w<x;++w)y.appendChild(z.firstChild)
return},
i:function(a,b,c){var z,y
z=this.a
y=z.childNodes
if(b>>>0!==b||b>=y.length)return H.h(y,b)
z.replaceChild(c,y[b])},
gE:function(a){return C.M.gE(this.a.childNodes)},
gl:function(a){return this.a.childNodes.length},
h:function(a,b){var z=this.a.childNodes
if(b>>>0!==b||b>=z.length)return H.h(z,b)
return z[b]},
$ascV:function(){return[W.D]},
$asn:function(){return[W.D]}},
D:{
"^":"bL;",
geX:function(a){return new W.T(a)},
cZ:function(a){var z=a.parentNode
if(z!=null)z.removeChild(a)},
j:function(a){var z=a.nodeValue
return z==null?this.dq(a):z},
$isD:1,
$isc:1,
"%":";Node"},
hr:{
"^":"fS;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.ba(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.K("Cannot assign element of immutable List."))},
a4:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.D]},
$isy:1,
$isaT:1,
$isaP:1,
"%":"NodeList|RadioNodeList"},
fQ:{
"^":"f+aw;",
$isn:1,
$asn:function(){return[W.D]},
$isy:1},
fS:{
"^":"fQ+cM;",
$isn:1,
$asn:function(){return[W.D]},
$isy:1},
kL:{
"^":"z;H:height},J:name=,I:width}",
"%":"HTMLObjectElement"},
kM:{
"^":"z;J:name=",
"%":"HTMLOutputElement"},
kN:{
"^":"z;J:name=",
"%":"HTMLParamElement"},
kP:{
"^":"z;l:length=,J:name=",
"%":"HTMLSelectElement"},
kQ:{
"^":"b7;aI:error=",
"%":"SpeechRecognitionError"},
kT:{
"^":"z;",
ae:function(a,b,c,d){var z,y
if("createContextualFragment" in window.Range.prototype)return this.b5(a,b,c,d)
z=W.fI("<table>"+b+"</table>",c,d)
y=document.createDocumentFragment()
y.toString
new W.T(y).ad(0,J.ed(z))
return y},
"%":"HTMLTableElement"},
kU:{
"^":"z;",
ae:function(a,b,c,d){var z,y,x,w
if("createContextualFragment" in window.Range.prototype)return this.b5(a,b,c,d)
z=document.createDocumentFragment()
y=J.cm(C.i.aG(document,"table"),b,c,d)
y.toString
y=new W.T(y)
x=y.gap(y)
x.toString
y=new W.T(x)
w=y.gap(y)
z.toString
w.toString
new W.T(z).ad(0,new W.T(w))
return z},
"%":"HTMLTableRowElement"},
kV:{
"^":"z;",
ae:function(a,b,c,d){var z,y,x
if("createContextualFragment" in window.Range.prototype)return this.b5(a,b,c,d)
z=document.createDocumentFragment()
y=J.cm(C.i.aG(document,"table"),b,c,d)
y.toString
y=new W.T(y)
x=y.gap(y)
z.toString
x.toString
new W.T(z).ad(0,new W.T(x))
return z},
"%":"HTMLTableSectionElement"},
dh:{
"^":"z;",
$isdh:1,
"%":"HTMLTemplateElement"},
kW:{
"^":"z;J:name=",
"%":"HTMLTextAreaElement"},
dv:{
"^":"b7;cl:detail=",
"%":"CompositionEvent|FocusEvent|SVGZoomEvent|TextEvent|TouchEvent;UIEvent"},
kZ:{
"^":"hp;H:height},I:width}",
"%":"HTMLVideoElement"},
hY:{
"^":"bL;",
eY:function(a,b,c,d){return W.id(a.open(b,c,d))},
c8:function(a,b){return a.requestAnimationFrame(H.a4(b,1))},
bV:function(a){if(!!(a.requestAnimationFrame&&a.cancelAnimationFrame))return;(function(b){var z=['ms','moz','webkit','o']
for(var y=0;y<z.length&&!b.requestAnimationFrame;++y){b.requestAnimationFrame=b[z[y]+'RequestAnimationFrame']
b.cancelAnimationFrame=b[z[y]+'CancelAnimationFrame']||b[z[y]+'CancelRequestAnimationFrame']}if(b.requestAnimationFrame&&b.cancelAnimationFrame)return
b.requestAnimationFrame=function(c){return window.setTimeout(function(){c(Date.now())},16)}
b.cancelAnimationFrame=function(c){clearTimeout(c)}})(a)},
$isf:1,
"%":"DOMWindow|Window"},
l4:{
"^":"D;J:name=",
"%":"Attr"},
l5:{
"^":"f;H:height=,bx:left=,bF:top=,I:width=",
j:function(a){return"Rectangle ("+H.d(a.left)+", "+H.d(a.top)+") "+H.d(a.width)+" x "+H.d(a.height)},
w:function(a,b){var z,y,x
if(b==null)return!1
z=J.r(b)
if(!z.$isaW)return!1
y=a.left
x=z.gbx(b)
if(y==null?x==null:y===x){y=a.top
x=z.gbF(b)
if(y==null?x==null:y===x){y=a.width
x=z.gI(b)
if(y==null?x==null:y===x){y=a.height
z=z.gH(b)
z=y==null?z==null:y===z}else z=!1}else z=!1}else z=!1
return z},
gC:function(a){var z,y,x,w
z=J.R(a.left)
y=J.R(a.top)
x=J.R(a.width)
w=J.R(a.height)
return W.dD(W.af(W.af(W.af(W.af(0,z),y),x),w))},
$isaW:1,
$asaW:I.bt,
"%":"ClientRect"},
l6:{
"^":"D;",
$isf:1,
"%":"DocumentType"},
l7:{
"^":"fF;",
gH:function(a){return a.height},
gI:function(a){return a.width},
"%":"DOMRect"},
la:{
"^":"z;",
$isf:1,
"%":"HTMLFrameSetElement"},
ld:{
"^":"fT;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)throw H.e(P.ba(b,a,null,null,null))
return a[b]},
i:function(a,b,c){throw H.e(new P.K("Cannot assign element of immutable List."))},
a4:function(a,b){if(b<0||b>=a.length)return H.h(a,b)
return a[b]},
$isn:1,
$asn:function(){return[W.D]},
$isy:1,
$isaT:1,
$isaP:1,
"%":"MozNamedAttrMap|NamedNodeMap"},
fR:{
"^":"f+aw;",
$isn:1,
$asn:function(){return[W.D]},
$isy:1},
fT:{
"^":"fR+cM;",
$isn:1,
$asn:function(){return[W.D]},
$isy:1},
i7:{
"^":"c;e_:a<",
S:function(a,b){var z,y,x,w
for(z=this.gam(),y=z.length,x=0;x<z.length;z.length===y||(0,H.by)(z),++x){w=z[x]
b.$2(w,this.h(0,w))}},
gam:function(){var z,y,x,w
z=this.a.attributes
y=H.a([],[P.E])
for(x=z.length,w=0;w<x;++w){if(w>=z.length)return H.h(z,w)
if(this.e4(z[w])){if(w>=z.length)return H.h(z,w)
y.push(J.ec(z[w]))}}return y},
$isbf:1,
$asbf:function(){return[P.E,P.E]}},
ii:{
"^":"i7;a",
h:function(a,b){return this.a.getAttribute(b)},
i:function(a,b,c){this.a.setAttribute(b,c)},
gl:function(a){return this.gam().length},
e4:function(a){return a.namespaceURI==null}},
o:{
"^":"ad;a,b,c",
ax:function(a,b,c,d){var z=new W.m(0,this.a,this.b,W.k(a),!1)
z.$builtinTypeInfo=this.$builtinTypeInfo
z.k()
return z},
cW:function(a,b,c){return this.ax(a,null,b,c)}},
az:{
"^":"o;a,b,c"},
m:{
"^":"hG;a,b,c,d,e",
a3:function(){if(this.b==null)return
this.cf()
this.b=null
this.d=null
return},
by:function(a,b){if(this.b==null)return;++this.a
this.cf()},
cY:function(a){return this.by(a,null)},
d0:function(){if(this.b==null||this.a<=0)return;--this.a
this.k()},
k:function(){var z,y,x
z=this.d
y=z!=null
if(y&&this.a<=0){x=this.b
x.toString
if(y)J.e7(x,this.c,z,!1)}},
cf:function(){var z,y,x
z=this.d
y=z!=null
if(y){x=this.b
x.toString
if(y)J.e8(x,this.c,z,!1)}}},
c6:{
"^":"c;d7:a<",
at:function(a){return $.$get$dC().K(0,W.at(a))},
ai:function(a,b,c){var z,y,x
z=W.at(a)
y=$.$get$c7()
x=y.h(0,H.d(z)+"::"+b)
if(x==null)x=y.h(0,"*::"+b)
if(x==null)return!1
return x.$4(a,b,c,this)},
dH:function(a){var z,y
z=$.$get$c7()
if(z.gT(z)){for(y=0;y<261;++y)z.i(0,C.J[y],W.js())
for(y=0;y<12;++y)z.i(0,C.m[y],W.jt())}},
$isbX:1,
static:{dB:function(a){var z,y
z=C.i.aG(document,"a")
y=new W.iQ(z,window.location)
y=new W.c6(y)
y.dH(a)
return y},lb:[function(a,b,c,d){return!0},"$4","js",8,0,8],lc:[function(a,b,c,d){var z,y,x,w,v
z=d.gd7()
y=z.a
x=J.C(y)
x.sav(y,c)
w=x.gb0(y)
z=z.b
v=z.hostname
if(w==null?v==null:w===v){w=x.gb2(y)
v=z.port
if(w==null?v==null:w===v){w=x.gaN(y)
z=z.protocol
z=w==null?z==null:w===z}else z=!1}else z=!1
if(!z)if(x.gb0(y)==="")if(x.gb2(y)==="")z=x.gaN(y)===":"||x.gaN(y)===""
else z=!1
else z=!1
else z=!0
return z},"$4","jt",8,0,8]}},
cM:{
"^":"c;",
gE:function(a){return new W.fM(a,this.gl(a),-1,null)},
$isn:1,
$asn:null,
$isy:1},
d1:{
"^":"c;a",
at:function(a){return C.f.ci(this.a,new W.ht(a))},
ai:function(a,b,c){return C.f.ci(this.a,new W.hs(a,b,c))}},
ht:{
"^":"b:0;a",
$1:function(a){return a.at(this.a)}},
hs:{
"^":"b:0;a,b,c",
$1:function(a){return a.ai(this.a,this.b,this.c)}},
iR:{
"^":"c;d7:d<",
at:function(a){return this.a.K(0,W.at(a))},
ai:["dv",function(a,b,c){var z,y
z=W.at(a)
y=this.c
if(y.K(0,H.d(z)+"::"+b))return this.d.eg(c)
else if(y.K(0,"*::"+b))return this.d.eg(c)
else{y=this.b
if(y.K(0,H.d(z)+"::"+b))return!0
else if(y.K(0,"*::"+b))return!0
else if(y.K(0,H.d(z)+"::*"))return!0
else if(y.K(0,"*::*"))return!0}return!1}],
dI:function(a,b,c,d){var z,y,x
this.a.ad(0,c)
z=b.aS(0,new W.iS())
y=b.aS(0,new W.iT())
this.b.ad(0,z)
x=this.c
x.ad(0,C.L)
x.ad(0,y)}},
iS:{
"^":"b:0;",
$1:function(a){return!C.f.K(C.m,a)}},
iT:{
"^":"b:0;",
$1:function(a){return C.f.K(C.m,a)}},
j0:{
"^":"iR;e,a,b,c,d",
ai:function(a,b,c){if(this.dv(a,b,c))return!0
if(b==="template"&&c==="")return!0
if(J.cn(a).a.getAttribute("template")==="")return this.e.K(0,b)
return!1},
static:{dG:function(){var z,y,x,w
z=H.a(new H.bh(C.t,new W.j1()),[null,null])
y=P.W(null,null,null,P.E)
x=P.W(null,null,null,P.E)
w=P.W(null,null,null,P.E)
w=new W.j0(P.cU(C.t,P.E),y,x,w,null)
w.dI(null,z,["TEMPLATE"],null)
return w}}},
j1:{
"^":"b:0;",
$1:function(a){return"TEMPLATE::"+H.d(a)}},
j_:{
"^":"c;",
at:function(a){var z=J.r(a)
if(!!z.$isdd)return!1
z=!!z.$isw
if(z&&W.at(a)==="foreignObject")return!1
if(z)return!0
return!1},
ai:function(a,b,c){if(b==="is"||C.c.dm(b,"on"))return!1
return this.at(a)}},
fM:{
"^":"c;a,b,c,d",
A:function(){var z,y
z=this.c+1
y=this.b
if(z<y){this.d=J.cl(this.a,z)
this.c=z
return!0}this.d=null
this.c=y
return!1},
gB:function(){return this.d}},
ic:{
"^":"c;a",
$isf:1,
static:{id:function(a){if(a===window)return a
else return new W.ic(a)}}},
bX:{
"^":"c;"},
iQ:{
"^":"c;a,b"},
dH:{
"^":"c;a",
bJ:function(a){new W.j2(this).$2(a,null)},
aE:function(a,b){if(b==null)J.ef(a)
else b.removeChild(a)},
ea:function(a,b){var z,y,x,w,v,u,t,s
z=!0
y=null
x=null
try{y=J.cn(a)
x=y.ge_().getAttribute("is")
w=function(c){if(!(c.attributes instanceof NamedNodeMap))return true
var r=c.childNodes
if(c.lastChild&&c.lastChild!==r[r.length-1])return true
if(c.children)if(!(c.children instanceof HTMLCollection||c.children instanceof NodeList))return true
var q=0
if(c.children)q=c.children.length
for(var p=0;p<q;p++){var o=c.children[p]
if(o.id=='attributes'||o.name=='attributes'||o.id=='lastChild'||o.name=='lastChild'||o.id=='children'||o.name=='children')return true}return false}(a)
z=w===!0?!0:!(a.attributes instanceof NamedNodeMap)}catch(t){H.H(t)}v="element unprintable"
try{v=J.a_(a)}catch(t){H.H(t)}try{u=W.at(a)
this.e9(a,b,z,v,u,y,x)}catch(t){if(H.H(t) instanceof P.a5)throw t
else{this.aE(a,b)
window
s="Removing corrupted element "+H.d(v)
if(typeof console!="undefined")console.warn(s)}}},
e9:function(a,b,c,d,e,f,g){var z,y,x,w,v
if(c){this.aE(a,b)
window
z="Removing element due to corrupted attributes on <"+d+">"
if(typeof console!="undefined")console.warn(z)
return}if(!this.a.at(a)){this.aE(a,b)
window
z="Removing disallowed element <"+H.d(e)+"> from "+J.a_(b)
if(typeof console!="undefined")console.warn(z)
return}if(g!=null)if(!this.a.ai(a,"is",g)){this.aE(a,b)
window
z="Removing disallowed type extension <"+H.d(e)+" is=\""+g+"\">"
if(typeof console!="undefined")console.warn(z)
return}z=f.gam()
y=H.a(z.slice(),[H.i(z,0)])
for(x=f.gam().length-1,z=f.a;x>=0;--x){if(x>=y.length)return H.h(y,x)
w=y[x]
if(!this.a.ai(a,J.en(w),z.getAttribute(w))){window
v="Removing disallowed attribute <"+H.d(e)+" "+w+"=\""+H.d(z.getAttribute(w))+"\">"
if(typeof console!="undefined")console.warn(v)
z.getAttribute(w)
z.removeAttribute(w)}}if(!!J.r(a).$isdh)this.bJ(a.content)}},
j2:{
"^":"b:17;a",
$2:function(a,b){var z,y,x
z=this.a
switch(a.nodeType){case 1:z.ea(a,b)
break
case 8:case 11:case 3:case 4:break
default:z.aE(a,b)}y=a.lastChild
for(;y!=null;y=x){x=y.previousSibling
this.$2(y,a)}}}}],["","",,P,{
"^":""}],["","",,P,{
"^":"",
jR:{
"^":"aN;",
$isf:1,
"%":"SVGAElement"},
jS:{
"^":"hQ;",
$isf:1,
"%":"SVGAltGlyphElement"},
jU:{
"^":"w;",
$isf:1,
"%":"SVGAnimateElement|SVGAnimateMotionElement|SVGAnimateTransformElement|SVGAnimationElement|SVGSetElement"},
k3:{
"^":"w;",
$isf:1,
"%":"SVGFEBlendElement"},
k4:{
"^":"w;",
$isf:1,
"%":"SVGFEColorMatrixElement"},
k5:{
"^":"w;",
$isf:1,
"%":"SVGFEComponentTransferElement"},
k6:{
"^":"w;",
$isf:1,
"%":"SVGFECompositeElement"},
k7:{
"^":"w;",
$isf:1,
"%":"SVGFEConvolveMatrixElement"},
k8:{
"^":"w;",
$isf:1,
"%":"SVGFEDiffuseLightingElement"},
k9:{
"^":"w;",
$isf:1,
"%":"SVGFEDisplacementMapElement"},
ka:{
"^":"w;",
$isf:1,
"%":"SVGFEFloodElement"},
kb:{
"^":"w;",
$isf:1,
"%":"SVGFEGaussianBlurElement"},
kc:{
"^":"w;",
$isf:1,
"%":"SVGFEImageElement"},
kd:{
"^":"w;",
$isf:1,
"%":"SVGFEMergeElement"},
ke:{
"^":"w;",
$isf:1,
"%":"SVGFEMorphologyElement"},
kf:{
"^":"w;",
$isf:1,
"%":"SVGFEOffsetElement"},
kg:{
"^":"w;",
$isf:1,
"%":"SVGFESpecularLightingElement"},
kh:{
"^":"w;",
$isf:1,
"%":"SVGFETileElement"},
ki:{
"^":"w;",
$isf:1,
"%":"SVGFETurbulenceElement"},
kk:{
"^":"w;",
$isf:1,
"%":"SVGFilterElement"},
aN:{
"^":"w;",
$isf:1,
"%":"SVGCircleElement|SVGClipPathElement|SVGDefsElement|SVGEllipseElement|SVGForeignObjectElement|SVGGElement|SVGGeometryElement|SVGLineElement|SVGPathElement|SVGPolygonElement|SVGPolylineElement|SVGRectElement|SVGSwitchElement;SVGGraphicsElement"},
ko:{
"^":"aN;",
$isf:1,
"%":"SVGImageElement"},
kw:{
"^":"w;",
$isf:1,
"%":"SVGMarkerElement"},
kx:{
"^":"w;",
$isf:1,
"%":"SVGMaskElement"},
kO:{
"^":"w;",
$isf:1,
"%":"SVGPatternElement"},
dd:{
"^":"w;",
$isdd:1,
$isf:1,
"%":"SVGScriptElement"},
w:{
"^":"a7;",
ae:function(a,b,c,d){var z,y,x,w,v
z=H.a([],[W.bX])
d=new W.d1(z)
z.push(W.dB(null))
z.push(W.dG())
z.push(new W.j_())
c=new W.dH(d)
y="<svg version=\"1.1\">"+b+"</svg>"
z=document.body
x=(z&&C.n).ex(z,y,c)
w=document.createDocumentFragment()
x.toString
z=new W.T(x)
v=z.gap(z)
for(;z=v.firstChild,z!=null;)w.appendChild(z)
return w},
$isw:1,
$isf:1,
"%":"SVGAltGlyphDefElement|SVGAltGlyphItemElement|SVGComponentTransferFunctionElement|SVGDescElement|SVGDiscardElement|SVGFEDistantLightElement|SVGFEFuncAElement|SVGFEFuncBElement|SVGFEFuncGElement|SVGFEFuncRElement|SVGFEMergeNodeElement|SVGFEPointLightElement|SVGFESpotLightElement|SVGFontElement|SVGFontFaceElement|SVGFontFaceFormatElement|SVGFontFaceNameElement|SVGFontFaceSrcElement|SVGFontFaceUriElement|SVGGlyphElement|SVGHKernElement|SVGMetadataElement|SVGMissingGlyphElement|SVGStopElement|SVGStyleElement|SVGTitleElement|SVGVKernElement;SVGElement"},
kR:{
"^":"aN;",
$isf:1,
"%":"SVGSVGElement"},
kS:{
"^":"w;",
$isf:1,
"%":"SVGSymbolElement"},
di:{
"^":"aN;",
"%":";SVGTextContentElement"},
kX:{
"^":"di;",
$isf:1,
"%":"SVGTextPathElement"},
hQ:{
"^":"di;",
"%":"SVGTSpanElement|SVGTextElement;SVGTextPositioningElement"},
kY:{
"^":"aN;",
$isf:1,
"%":"SVGUseElement"},
l_:{
"^":"w;",
$isf:1,
"%":"SVGViewElement"},
l9:{
"^":"w;",
$isf:1,
"%":"SVGGradientElement|SVGLinearGradientElement|SVGRadialGradientElement"},
le:{
"^":"w;",
$isf:1,
"%":"SVGCursorElement"},
lf:{
"^":"w;",
$isf:1,
"%":"SVGFEDropShadowElement"},
lg:{
"^":"w;",
$isf:1,
"%":"SVGGlyphRefElement"},
lh:{
"^":"w;",
$isf:1,
"%":"SVGMPathElement"}}],["","",,P,{
"^":""}],["","",,P,{
"^":""}],["","",,P,{
"^":""}],["","",,P,{
"^":"",
jX:{
"^":"c;"}}],["","",,P,{
"^":"",
v:function(a,b){if(typeof a!=="number")throw H.e(P.aK(a))
if(typeof b!=="number")throw H.e(P.aK(b))
if(a>b)return b
if(a<b)return a
if(typeof b==="number"){if(typeof a==="number")if(a===0)return(a+b)*a*b
if(a===0&&C.d.gbv(b)||C.d.gcV(b))return b
return a}return a},
x:function(a,b){if(a>b)return a
if(a<b)return b
if(typeof b==="number"){if(typeof a==="number")if(a===0)return a+b
if(C.d.gcV(b))return b
return a}if(b===0&&C.a.gbv(a))return b
return a}}],["","",,H,{
"^":"",
bU:{
"^":"f;",
$isbU:1,
"%":"ArrayBuffer"},
bi:{
"^":"f;",
$isbi:1,
"%":"DataView;ArrayBufferView;bV|cY|d_|bW|cZ|d0|aa"},
bV:{
"^":"bi;",
gl:function(a){return a.length},
$isaT:1,
$isaP:1},
bW:{
"^":"d_;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
return a[b]},
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
a[b]=c}},
cY:{
"^":"bV+aw;",
$isn:1,
$asn:function(){return[P.aG]},
$isy:1},
d_:{
"^":"cY+cJ;"},
aa:{
"^":"d0;",
i:function(a,b,c){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
a[b]=c},
$isn:1,
$asn:function(){return[P.B]},
$isy:1},
cZ:{
"^":"bV+aw;",
$isn:1,
$asn:function(){return[P.B]},
$isy:1},
d0:{
"^":"cZ+cJ;"},
kA:{
"^":"bW;",
$isn:1,
$asn:function(){return[P.aG]},
$isy:1,
"%":"Float32Array"},
kB:{
"^":"bW;",
$isn:1,
$asn:function(){return[P.aG]},
$isy:1,
"%":"Float64Array"},
kC:{
"^":"aa;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
return a[b]},
$isn:1,
$asn:function(){return[P.B]},
$isy:1,
"%":"Int16Array"},
kD:{
"^":"aa;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
return a[b]},
$isn:1,
$asn:function(){return[P.B]},
$isy:1,
"%":"Int32Array"},
kE:{
"^":"aa;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
return a[b]},
$isn:1,
$asn:function(){return[P.B]},
$isy:1,
"%":"Int8Array"},
kF:{
"^":"aa;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
return a[b]},
$isn:1,
$asn:function(){return[P.B]},
$isy:1,
"%":"Uint16Array"},
kG:{
"^":"aa;",
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
return a[b]},
$isn:1,
$asn:function(){return[P.B]},
$isy:1,
"%":"Uint32Array"},
kH:{
"^":"aa;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
return a[b]},
$isn:1,
$asn:function(){return[P.B]},
$isy:1,
"%":"CanvasPixelArray|Uint8ClampedArray"},
kI:{
"^":"aa;",
gl:function(a){return a.length},
h:function(a,b){if(b>>>0!==b||b>=a.length)H.F(H.G(a,b))
return a[b]},
$isn:1,
$asn:function(){return[P.B]},
$isy:1,
"%":";Uint8Array"}}],["","",,H,{
"^":"",
jJ:function(a){if(typeof dartPrint=="function"){dartPrint(a)
return}if(typeof console=="object"&&typeof console.log!="undefined"){console.log(a)
return}if(typeof window=="object")return
if(typeof print=="function"){print(a)
return}throw"Unable to print message: "+String(a)}}],["","",,P,{
"^":"",
jm:function(a){var z=H.a(new P.i1(H.a(new P.U(0,$.u,null),[null])),[null])
a.then(H.a4(new P.jn(z),1)).catch(H.a4(new P.jo(z),1))
return z.a},
cB:function(){var z=$.cA
if(z==null){z=J.bA(window.navigator.userAgent,"Opera",0)
$.cA=z}return z},
fD:function(){var z,y
z=$.cx
if(z!=null)return z
y=$.cy
if(y==null){y=J.bA(window.navigator.userAgent,"Firefox",0)
$.cy=y}if(y===!0)z="-moz-"
else{y=$.cz
if(y==null){y=P.cB()!==!0&&J.bA(window.navigator.userAgent,"Trident/",0)
$.cz=y}if(y===!0)z="-ms-"
else z=P.cB()===!0?"-o-":"-webkit-"}$.cx=z
return z},
iX:{
"^":"c;",
aK:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x)if(z[x]===a)return x
z.push(a)
this.b.push(null)
return y},
an:function(a){var z,y,x,w,v
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
y=J.r(a)
if(!!y.$isbJ)return new Date(a.a)
if(!!y.$iscI)return a
if(!!y.$isbB)return a
if(this.en(a))return a
if(!!y.$isbf){x=this.aK(a)
w=this.b
if(x>=w.length)return H.h(w,x)
v=w[x]
z.a=v
if(v!=null)return v
v=this.eW()
z.a=v
if(x>=w.length)return H.h(w,x)
w[x]=v
y.S(a,new P.iZ(z,this))
return z.a}if(!!y.$isn){x=this.aK(a)
z=this.b
if(x>=z.length)return H.h(z,x)
v=z[x]
if(v!=null)return v
return this.ev(a,x)}throw H.e(new P.bo("structured clone of other type"))},
ev:function(a,b){var z,y,x,w,v
z=J.L(a)
y=z.gl(a)
x=this.eV(y)
w=this.b
if(b>=w.length)return H.h(w,b)
w[b]=x
for(v=0;v<y;++v){w=this.an(z.h(a,v))
if(v>=x.length)return H.h(x,v)
x[v]=w}return x}},
iZ:{
"^":"b:3;a,b",
$2:function(a,b){var z=this.b
z.f_(this.a.a,a,z.an(b))}},
hZ:{
"^":"c;",
aK:function(a){var z,y,x
z=this.a
y=z.length
for(x=0;x<y;++x){if(x>=z.length)return H.h(z,x)
if(this.eL(z[x],a))return x}z.push(a)
this.b.push(null)
return y},
an:function(a){var z,y,x,w,v,u,t,s
z={}
if(a==null)return a
if(typeof a==="boolean")return a
if(typeof a==="number")return a
if(typeof a==="string")return a
if(a instanceof Date)return P.fA(a.getTime(),!0)
if(a instanceof RegExp)throw H.e(new P.bo("structured clone of RegExp"))
if(typeof Promise!="undefined"&&a instanceof Promise)return P.jm(a)
y=Object.getPrototypeOf(a)
if(y===Object.prototype||y===null){x=this.aK(a)
w=this.b
v=w.length
if(x>=v)return H.h(w,x)
u=w[x]
z.a=u
if(u!=null)return u
u=P.bP()
z.a=u
if(x>=v)return H.h(w,x)
w[x]=u
this.eE(a,new P.i0(z,this))
return z.a}if(a instanceof Array){x=this.aK(a)
z=this.b
if(x>=z.length)return H.h(z,x)
u=z[x]
if(u!=null)return u
w=J.L(a)
t=w.gl(a)
u=this.c?this.eU(t):a
if(x>=z.length)return H.h(z,x)
z[x]=u
if(typeof t!=="number")return H.l(t)
z=J.ao(u)
s=0
for(;s<t;++s)z.i(u,s,this.an(w.h(a,s)))
return u}return a}},
i0:{
"^":"b:3;a,b",
$2:function(a,b){var z,y
z=this.a.a
y=this.b.an(b)
J.e6(z,a,y)
return y}},
iY:{
"^":"iX;a,b",
eW:function(){return{}},
f_:function(a,b,c){return a[b]=c},
eV:function(a){return new Array(a)},
en:function(a){var z=J.r(a)
return!!z.$isbU||!!z.$isbi}},
i_:{
"^":"hZ;a,b,c",
eU:function(a){return new Array(a)},
eL:function(a,b){return a==null?b==null:a===b},
eE:function(a,b){var z,y,x,w
for(z=Object.keys(a),y=z.length,x=0;x<z.length;z.length===y||(0,H.by)(z),++x){w=z[x]
b.$2(w,a[w])}}},
jn:{
"^":"b:0;a",
$1:function(a){return this.a.eo(0,a)}},
jo:{
"^":"b:0;a",
$1:function(a){return this.a.ep(a)}}}]]
setupProgram(dart,0)
J.r=function(a){if(typeof a=="number"){if(Math.floor(a)==a)return J.cR.prototype
return J.cQ.prototype}if(typeof a=="string")return J.aR.prototype
if(a==null)return J.h5.prototype
if(typeof a=="boolean")return J.h4.prototype
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.c)return a
return J.bu(a)}
J.L=function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.c)return a
return J.bu(a)}
J.ao=function(a){if(a==null)return a
if(a.constructor==Array)return J.aO.prototype
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.c)return a
return J.bu(a)}
J.dS=function(a){if(typeof a=="number")return J.aQ.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aX.prototype
return a}
J.jq=function(a){if(typeof a=="number")return J.aQ.prototype
if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aX.prototype
return a}
J.dT=function(a){if(typeof a=="string")return J.aR.prototype
if(a==null)return a
if(!(a instanceof P.c))return J.aX.prototype
return a}
J.C=function(a){if(a==null)return a
if(typeof a!="object"){if(typeof a=="function")return J.aS.prototype
return a}if(a instanceof P.c)return a
return J.bu(a)}
J.aH=function(a,b){if(typeof a=="number"&&typeof b=="number")return a+b
return J.jq(a).F(a,b)}
J.S=function(a,b){if(a==null)return b==null
if(typeof a!="object")return b!=null&&a===b
return J.r(a).w(a,b)}
J.e5=function(a,b){if(typeof a=="number"&&typeof b=="number")return a<b
return J.dS(a).aT(a,b)}
J.cl=function(a,b){if(a.constructor==Array||typeof a=="string"||H.dW(a,a[init.dispatchPropertyName]))if(b>>>0===b&&b<a.length)return a[b]
return J.L(a).h(a,b)}
J.e6=function(a,b,c){if((a.constructor==Array||H.dW(a,a[init.dispatchPropertyName]))&&!a.immutable$list&&b>>>0===b&&b<a.length)return a[b]=c
return J.ao(a).i(a,b,c)}
J.e7=function(a,b,c,d){return J.C(a).dK(a,b,c,d)}
J.bz=function(a,b,c,d,e){return J.C(a).e0(a,b,c,d,e)}
J.e8=function(a,b,c,d){return J.C(a).e8(a,b,c,d)}
J.bA=function(a,b,c){return J.L(a).er(a,b,c)}
J.cm=function(a,b,c,d){return J.C(a).ae(a,b,c,d)}
J.e9=function(a,b){return J.ao(a).a4(a,b)}
J.t=function(a){return J.dS(a).b_(a)}
J.ea=function(a,b){return J.ao(a).S(a,b)}
J.cn=function(a){return J.C(a).geh(a)}
J.eb=function(a){return J.C(a).ges(a)}
J.q=function(a){return J.C(a).gcl(a)}
J.Z=function(a){return J.C(a).gaI(a)}
J.R=function(a){return J.r(a).gC(a)}
J.aI=function(a){return J.ao(a).gE(a)}
J.co=function(a){return J.C(a).gaw(a)}
J.aJ=function(a){return J.L(a).gl(a)}
J.ec=function(a){return J.C(a).gJ(a)}
J.ed=function(a){return J.C(a).geX(a)}
J.cp=function(a){return J.C(a).gf5(a)}
J.ee=function(a,b){return J.ao(a).ay(a,b)}
J.ef=function(a){return J.ao(a).cZ(a)}
J.ar=function(a,b){return J.C(a).b4(a,b)}
J.eg=function(a,b){return J.C(a).sdS(a,b)}
J.eh=function(a,b){return J.C(a).se1(a,b)}
J.ei=function(a,b){return J.C(a).sH(a,b)}
J.ej=function(a,b){return J.C(a).sav(a,b)}
J.ek=function(a,b){return J.C(a).sI(a,b)}
J.el=function(a,b,c){return J.dT(a).X(a,b,c)}
J.em=function(a,b,c){return J.C(a).f6(a,b,c)}
J.en=function(a){return J.dT(a).f7(a)}
J.a_=function(a){return J.r(a).j(a)}
I.ap=function(a){a.immutable$list=Array
a.fixed$length=Array
return a}
var $=I.p
C.n=W.bC.prototype
C.h=W.fw.prototype
C.i=W.fN.prototype
C.A=J.f.prototype
C.f=J.aO.prototype
C.d=J.cQ.prototype
C.b=J.cR.prototype
C.a=J.aQ.prototype
C.c=J.aR.prototype
C.I=J.aS.prototype
C.l=W.bd.prototype
C.j=W.be.prototype
C.M=W.hr.prototype
C.N=J.hw.prototype
C.O=J.aX.prototype
C.k=W.hY.prototype
C.u=new H.cC()
C.v=new P.hv()
C.w=new P.ig()
C.e=new P.iM()
C.o=new P.a6(0)
C.x=new P.a6(1e7)
C.y=new P.a6(18e7)
C.p=new P.a6(2e6)
C.z=new P.a6(5e5)
C.B=function(hooks) {
  if (typeof dartExperimentalFixupGetTag != "function") return hooks;
  hooks.getTag = dartExperimentalFixupGetTag(hooks.getTag);
}
C.C=function(hooks) {
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
C.q=function getTagFallback(o) {
  var constructor = o.constructor;
  if (typeof constructor == "function") {
    var name = constructor.name;
    if (typeof name == "string" &&
        name.length > 2 &&
        name !== "Object" &&
        name !== "Function.prototype") {
      return name;
    }
  }
  var s = Object.prototype.toString.call(o);
  return s.substring(8, s.length - 1);
}
C.r=function(hooks) { return hooks; }

C.D=function(getTagFallback) {
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
C.E=function() {
  function typeNameInChrome(o) {
    var constructor = o.constructor;
    if (constructor) {
      var name = constructor.name;
      if (name) return name;
    }
    var s = Object.prototype.toString.call(o);
    return s.substring(8, s.length - 1);
  }
  function getUnknownTag(object, tag) {
    if (/^HTML[A-Z].*Element$/.test(tag)) {
      var name = Object.prototype.toString.call(object);
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
    getTag: typeNameInChrome,
    getUnknownTag: isBrowser ? getUnknownTagGenericBrowser : getUnknownTag,
    prototypeForTag: prototypeForTag,
    discriminator: discriminator };
}
C.F=function(hooks) {
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
C.G=function(hooks) {
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
C.H=function(_, letter) { return letter.toUpperCase(); }
C.J=H.a(I.ap(["*::class","*::dir","*::draggable","*::hidden","*::id","*::inert","*::itemprop","*::itemref","*::itemscope","*::lang","*::spellcheck","*::title","*::translate","A::accesskey","A::coords","A::hreflang","A::name","A::shape","A::tabindex","A::target","A::type","AREA::accesskey","AREA::alt","AREA::coords","AREA::nohref","AREA::shape","AREA::tabindex","AREA::target","AUDIO::controls","AUDIO::loop","AUDIO::mediagroup","AUDIO::muted","AUDIO::preload","BDO::dir","BODY::alink","BODY::bgcolor","BODY::link","BODY::text","BODY::vlink","BR::clear","BUTTON::accesskey","BUTTON::disabled","BUTTON::name","BUTTON::tabindex","BUTTON::type","BUTTON::value","CANVAS::height","CANVAS::width","CAPTION::align","COL::align","COL::char","COL::charoff","COL::span","COL::valign","COL::width","COLGROUP::align","COLGROUP::char","COLGROUP::charoff","COLGROUP::span","COLGROUP::valign","COLGROUP::width","COMMAND::checked","COMMAND::command","COMMAND::disabled","COMMAND::label","COMMAND::radiogroup","COMMAND::type","DATA::value","DEL::datetime","DETAILS::open","DIR::compact","DIV::align","DL::compact","FIELDSET::disabled","FONT::color","FONT::face","FONT::size","FORM::accept","FORM::autocomplete","FORM::enctype","FORM::method","FORM::name","FORM::novalidate","FORM::target","FRAME::name","H1::align","H2::align","H3::align","H4::align","H5::align","H6::align","HR::align","HR::noshade","HR::size","HR::width","HTML::version","IFRAME::align","IFRAME::frameborder","IFRAME::height","IFRAME::marginheight","IFRAME::marginwidth","IFRAME::width","IMG::align","IMG::alt","IMG::border","IMG::height","IMG::hspace","IMG::ismap","IMG::name","IMG::usemap","IMG::vspace","IMG::width","INPUT::accept","INPUT::accesskey","INPUT::align","INPUT::alt","INPUT::autocomplete","INPUT::checked","INPUT::disabled","INPUT::inputmode","INPUT::ismap","INPUT::list","INPUT::max","INPUT::maxlength","INPUT::min","INPUT::multiple","INPUT::name","INPUT::placeholder","INPUT::readonly","INPUT::required","INPUT::size","INPUT::step","INPUT::tabindex","INPUT::type","INPUT::usemap","INPUT::value","INS::datetime","KEYGEN::disabled","KEYGEN::keytype","KEYGEN::name","LABEL::accesskey","LABEL::for","LEGEND::accesskey","LEGEND::align","LI::type","LI::value","LINK::sizes","MAP::name","MENU::compact","MENU::label","MENU::type","METER::high","METER::low","METER::max","METER::min","METER::value","OBJECT::typemustmatch","OL::compact","OL::reversed","OL::start","OL::type","OPTGROUP::disabled","OPTGROUP::label","OPTION::disabled","OPTION::label","OPTION::selected","OPTION::value","OUTPUT::for","OUTPUT::name","P::align","PRE::width","PROGRESS::max","PROGRESS::min","PROGRESS::value","SELECT::autocomplete","SELECT::disabled","SELECT::multiple","SELECT::name","SELECT::required","SELECT::size","SELECT::tabindex","SOURCE::type","TABLE::align","TABLE::bgcolor","TABLE::border","TABLE::cellpadding","TABLE::cellspacing","TABLE::frame","TABLE::rules","TABLE::summary","TABLE::width","TBODY::align","TBODY::char","TBODY::charoff","TBODY::valign","TD::abbr","TD::align","TD::axis","TD::bgcolor","TD::char","TD::charoff","TD::colspan","TD::headers","TD::height","TD::nowrap","TD::rowspan","TD::scope","TD::valign","TD::width","TEXTAREA::accesskey","TEXTAREA::autocomplete","TEXTAREA::cols","TEXTAREA::disabled","TEXTAREA::inputmode","TEXTAREA::name","TEXTAREA::placeholder","TEXTAREA::readonly","TEXTAREA::required","TEXTAREA::rows","TEXTAREA::tabindex","TEXTAREA::wrap","TFOOT::align","TFOOT::char","TFOOT::charoff","TFOOT::valign","TH::abbr","TH::align","TH::axis","TH::bgcolor","TH::char","TH::charoff","TH::colspan","TH::headers","TH::height","TH::nowrap","TH::rowspan","TH::scope","TH::valign","TH::width","THEAD::align","THEAD::char","THEAD::charoff","THEAD::valign","TR::align","TR::bgcolor","TR::char","TR::charoff","TR::valign","TRACK::default","TRACK::kind","TRACK::label","TRACK::srclang","UL::compact","UL::type","VIDEO::controls","VIDEO::height","VIDEO::loop","VIDEO::mediagroup","VIDEO::muted","VIDEO::preload","VIDEO::width"]),[P.E])
C.K=I.ap(["HEAD","AREA","BASE","BASEFONT","BR","COL","COLGROUP","EMBED","FRAME","FRAMESET","HR","IMAGE","IMG","INPUT","ISINDEX","LINK","META","PARAM","SOURCE","STYLE","TITLE","WBR"])
C.L=I.ap([])
C.t=H.a(I.ap(["bind","if","ref","repeat","syntax"]),[P.E])
C.m=H.a(I.ap(["A::href","AREA::href","BLOCKQUOTE::cite","BODY::background","COMMAND::icon","DEL::cite","FORM::action","IMG::src","INPUT::src","INS::cite","Q::cite","VIDEO::poster"]),[P.E])
$.d5="$cachedFunction"
$.d6="$cachedInvocation"
$.V=0
$.as=null
$.cq=null
$.cg=null
$.dN=null
$.e_=null
$.bs=null
$.bv=null
$.ch=null
$.b2=60
$.jL=!1
$.b0=null
$.ak=null
$.aC=null
$.aD=null
$.ca=!1
$.u=C.e
$.cH=0
$.a8=null
$.bK=null
$.cF=null
$.cE=null
$.cA=null
$.cz=null
$.cy=null
$.cx=null
$=null
init.isHunkLoaded=function(a){return!!$dart_deferred_initializers$[a]}
init.deferredInitialized=new Object(null)
init.isHunkInitialized=function(a){return init.deferredInitialized[a]}
init.initializeLoadedHunk=function(a){$dart_deferred_initializers$[a]($globals$,$)
init.deferredInitialized[a]=true}
init.deferredLibraryUris={}
init.deferredLibraryHashes={};(function(a){for(var z=0;z<a.length;){var y=a[z++]
var x=a[z++]
var w=a[z++]
I.$lazy(y,x,w)}})(["cw","$get$cw",function(){return init.getIsolateTag("_$dart_dartClosure")},"cN","$get$cN",function(){return H.h_()},"cO","$get$cO",function(){return new P.fL(null)},"dj","$get$dj",function(){return H.Y(H.bn({toString:function(){return"$receiver$"}}))},"dk","$get$dk",function(){return H.Y(H.bn({$method$:null,toString:function(){return"$receiver$"}}))},"dl","$get$dl",function(){return H.Y(H.bn(null))},"dm","$get$dm",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{null.$method$($argumentsExpr$)}catch(z){return z.message}}())},"dr","$get$dr",function(){return H.Y(H.bn(void 0))},"ds","$get$ds",function(){return H.Y(function(){var $argumentsExpr$='$arguments$'
try{(void 0).$method$($argumentsExpr$)}catch(z){return z.message}}())},"dp","$get$dp",function(){return H.Y(H.dq(null))},"dn","$get$dn",function(){return H.Y(function(){try{null.$method$}catch(z){return z.message}}())},"du","$get$du",function(){return H.Y(H.dq(void 0))},"dt","$get$dt",function(){return H.Y(function(){try{(void 0).$method$}catch(z){return z.message}}())},"dY","$get$dY",function(){return W.e0("#fps")},"e1","$get$e1",function(){return H.j(W.e0("#saveBtn"),"$isp")},"c3","$get$c3",function(){return P.i2()},"aE","$get$aE",function(){return[]},"cv","$get$cv",function(){return{}},"dC","$get$dC",function(){return P.cU(["A","ABBR","ACRONYM","ADDRESS","AREA","ARTICLE","ASIDE","AUDIO","B","BDI","BDO","BIG","BLOCKQUOTE","BR","BUTTON","CANVAS","CAPTION","CENTER","CITE","CODE","COL","COLGROUP","COMMAND","DATA","DATALIST","DD","DEL","DETAILS","DFN","DIR","DIV","DL","DT","EM","FIELDSET","FIGCAPTION","FIGURE","FONT","FOOTER","FORM","H1","H2","H3","H4","H5","H6","HEADER","HGROUP","HR","I","IFRAME","IMG","INPUT","INS","KBD","LABEL","LEGEND","LI","MAP","MARK","MENU","METER","NAV","NOBR","OL","OPTGROUP","OPTION","OUTPUT","P","PRE","PROGRESS","Q","S","SAMP","SECTION","SELECT","SMALL","SOURCE","SPAN","STRIKE","STRONG","SUB","SUMMARY","SUP","TABLE","TBODY","TD","TEXTAREA","TFOOT","TH","THEAD","TIME","TR","TRACK","TT","U","UL","VAR","VIDEO","WBR"],null)},"c7","$get$c7",function(){return P.bP()}])
I=I.$finishIsolateConstructor(I)
$=new I()
init.metadata=[null]
init.types=[{func:1,args:[,]},{func:1},{func:1,v:true},{func:1,args:[,,]},{func:1,v:true,args:[{func:1,v:true}]},{func:1,v:true,args:[W.bd]},{func:1,args:[,],opt:[,]},{func:1,ret:P.E,args:[P.B]},{func:1,ret:P.b1,args:[W.a7,P.E,P.E,W.c6]},{func:1,args:[,P.E]},{func:1,args:[P.E]},{func:1,v:true,args:[P.aq]},{func:1,args:[{func:1,v:true}]},{func:1,v:true,args:[,],opt:[P.ax]},{func:1,ret:P.b1},{func:1,args:[,P.ax]},{func:1,v:true,args:[,P.ax]},{func:1,v:true,args:[W.D,W.D]},{func:1,v:true,args:[W.bT]}]
function convertToFastObject(a){function MyClass(){}MyClass.prototype=a
new MyClass()
return a}function convertToSlowObject(a){a.__MAGIC_SLOW_PROPERTY=1
delete a.__MAGIC_SLOW_PROPERTY
return a}A=convertToFastObject(A)
B=convertToFastObject(B)
C=convertToFastObject(C)
D=convertToFastObject(D)
E=convertToFastObject(E)
F=convertToFastObject(F)
G=convertToFastObject(G)
H=convertToFastObject(H)
J=convertToFastObject(J)
K=convertToFastObject(K)
L=convertToFastObject(L)
M=convertToFastObject(M)
N=convertToFastObject(N)
O=convertToFastObject(O)
P=convertToFastObject(P)
Q=convertToFastObject(Q)
R=convertToFastObject(R)
S=convertToFastObject(S)
T=convertToFastObject(T)
U=convertToFastObject(U)
V=convertToFastObject(V)
W=convertToFastObject(W)
X=convertToFastObject(X)
Y=convertToFastObject(Y)
Z=convertToFastObject(Z)
function init(){I.p=Object.create(null)
init.allClasses=map()
init.getTypeFromName=function(a){return init.allClasses[a]}
init.interceptorsByTag=map()
init.leafTags=map()
init.finishedClasses=map()
I.$lazy=function(a,b,c,d,e){if(!init.lazies)init.lazies=Object.create(null)
init.lazies[a]=b
e=e||I.p
var z={}
var y={}
e[a]=z
e[b]=function(){var x=this[a]
try{if(x===z){this[a]=y
try{x=this[a]=c()}finally{if(x===z)this[a]=null}}else if(x===y)H.jP(d||a)
return x}finally{this[b]=function(){return this[a]}}}}
I.$finishIsolateConstructor=function(a){var z=a.p
function Isolate(){var y=Object.keys(z)
for(var x=0;x<y.length;x++){var w=y[x]
this[w]=z[w]}var v=init.lazies
var u=v?Object.keys(v):[]
for(var x=0;x<u.length;x++)this[v[u[x]]]=null
function ForceEfficientMap(){}ForceEfficientMap.prototype=this
new ForceEfficientMap()
for(var x=0;x<u.length;x++){var t=v[u[x]]
this[t]=z[t]}}Isolate.prototype=a.prototype
Isolate.prototype.constructor=Isolate
Isolate.p=z
Isolate.ap=a.ap
Isolate.bt=a.bt
return Isolate}}!function(){var z=function(a){var t={}
t[a]=1
return Object.keys(convertToFastObject(t))[0]}
init.getIsolateTag=function(a){return z("___dart_"+a+init.isolateTag)}
var y="___dart_isolate_tags_"
var x=Object[y]||(Object[y]=Object.create(null))
var w="_ZxYxX"
for(var v=0;;v++){var u=z(w+"_"+v+"_")
if(!(u in x)){x[u]=1
init.isolateTag=u
break}}init.dispatchPropertyName=init.getIsolateTag("dispatch_record")}();(function(a){if(typeof document==="undefined"){a(null)
return}if(typeof document.currentScript!='undefined'){a(document.currentScript)
return}var z=document.scripts
function onLoad(b){for(var x=0;x<z.length;++x)z[x].removeEventListener("load",onLoad,false)
a(b.target)}for(var y=0;y<z.length;++y)z[y].addEventListener("load",onLoad,false)})(function(a){init.currentScript=a
if(typeof dartMainRunner==="function")dartMainRunner(function(b){H.e2(F.dQ(),b)},[])
else (function(b){H.e2(F.dQ(),b)})([])})})()