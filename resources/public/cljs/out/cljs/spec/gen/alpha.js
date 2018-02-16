// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.spec.gen.alpha');
goog.require('cljs.core');
goog.require('cljs.core');

/**
* @constructor
 * @implements {cljs.core.IDeref}
*/
cljs.spec.gen.alpha.LazyVar = (function (f,cached){
this.f = f;
this.cached = cached;
this.cljs$lang$protocol_mask$partition0$ = 32768;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.spec.gen.alpha.LazyVar.prototype.cljs$core$IDeref$_deref$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(!((self__.cached == null))){
return self__.cached;
} else {
var x = self__.f.call(null);
if((x == null)){
} else {
self__.cached = x;
}

return x;
}
});

cljs.spec.gen.alpha.LazyVar.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),cljs.core.with_meta(new cljs.core.Symbol(null,"cached","cached",-1216707864,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null))], null);
});

cljs.spec.gen.alpha.LazyVar.cljs$lang$type = true;

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorStr = "cljs.spec.gen.alpha/LazyVar";

cljs.spec.gen.alpha.LazyVar.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.spec.gen.alpha/LazyVar");
});

cljs.spec.gen.alpha.__GT_LazyVar = (function cljs$spec$gen$alpha$__GT_LazyVar(f,cached){
return (new cljs.spec.gen.alpha.LazyVar(f,cached));
});

cljs.spec.gen.alpha.quick_check_ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check.quick_check !== 'undefined')){
return clojure.test.check.quick_check;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check","quick-check","clojure.test.check/quick-check",-810344251,null)))," never required"].join('')));
}
}),null));
cljs.spec.gen.alpha.quick_check = (function cljs$spec$gen$alpha$quick_check(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38054 = arguments.length;
var i__31301__auto___38055 = (0);
while(true){
if((i__31301__auto___38055 < len__31300__auto___38054)){
args__31307__auto__.push((arguments[i__31301__auto___38055]));

var G__38056 = (i__31301__auto___38055 + (1));
i__31301__auto___38055 = G__38056;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});

cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.quick_check_ref),args);
});

cljs.spec.gen.alpha.quick_check.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.quick_check.cljs$lang$applyTo = (function (seq38053){
return cljs.spec.gen.alpha.quick_check.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38053));
});

cljs.spec.gen.alpha.for_all_STAR__ref = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.properties.for_all_STAR_ !== 'undefined')){
return clojure.test.check.properties.for_all_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.properties","for-all*","clojure.test.check.properties/for-all*",67088845,null)))," never required"].join('')));
}
}),null));
/**
 * Dynamically loaded clojure.test.check.properties/for-all*.
 */
cljs.spec.gen.alpha.for_all_STAR_ = (function cljs$spec$gen$alpha$for_all_STAR_(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38058 = arguments.length;
var i__31301__auto___38059 = (0);
while(true){
if((i__31301__auto___38059 < len__31300__auto___38058)){
args__31307__auto__.push((arguments[i__31301__auto___38059]));

var G__38060 = (i__31301__auto___38059 + (1));
i__31301__auto___38059 = G__38060;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic = (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.for_all_STAR__ref),args);
});

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.for_all_STAR_.cljs$lang$applyTo = (function (seq38057){
return cljs.spec.gen.alpha.for_all_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38057));
});

var g_QMARK__38061 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generator_QMARK_ !== 'undefined')){
return clojure.test.check.generators.generator_QMARK_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generator?","clojure.test.check.generators/generator?",-1378210460,null)))," never required"].join('')));
}
}),null));
var g_38062 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38061){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.generate !== 'undefined')){
return clojure.test.check.generators.generate;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","generate","clojure.test.check.generators/generate",-690390711,null)))," never required"].join('')));
}
});})(g_QMARK__38061))
,null));
var mkg_38063 = (new cljs.spec.gen.alpha.LazyVar(((function (g_QMARK__38061,g_38062){
return (function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.__GT_Generator !== 'undefined')){
return clojure.test.check.generators.__GT_Generator;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","->Generator","clojure.test.check.generators/->Generator",-1179475051,null)))," never required"].join('')));
}
});})(g_QMARK__38061,g_38062))
,null));
cljs.spec.gen.alpha.generator_QMARK_ = ((function (g_QMARK__38061,g_38062,mkg_38063){
return (function cljs$spec$gen$alpha$generator_QMARK_(x){
return cljs.core.deref.call(null,g_QMARK__38061).call(null,x);
});})(g_QMARK__38061,g_38062,mkg_38063))
;

cljs.spec.gen.alpha.generator = ((function (g_QMARK__38061,g_38062,mkg_38063){
return (function cljs$spec$gen$alpha$generator(gfn){
return cljs.core.deref.call(null,mkg_38063).call(null,gfn);
});})(g_QMARK__38061,g_38062,mkg_38063))
;

/**
 * Generate a single value using generator.
 */
cljs.spec.gen.alpha.generate = ((function (g_QMARK__38061,g_38062,mkg_38063){
return (function cljs$spec$gen$alpha$generate(generator){
return cljs.core.deref.call(null,g_38062).call(null,generator);
});})(g_QMARK__38061,g_38062,mkg_38063))
;
cljs.spec.gen.alpha.delay_impl = (function cljs$spec$gen$alpha$delay_impl(gfnd){
return cljs.spec.gen.alpha.generator.call(null,(function (rnd,size){
return new cljs.core.Keyword(null,"gen","gen",142575302).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,gfnd)).call(null,rnd,size);
}));
});
var g__31403__auto___38083 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.hash_map !== 'undefined')){
return clojure.test.check.generators.hash_map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","hash-map","clojure.test.check.generators/hash-map",1961346626,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/hash-map
 */
cljs.spec.gen.alpha.hash_map = ((function (g__31403__auto___38083){
return (function cljs$spec$gen$alpha$hash_map(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38084 = arguments.length;
var i__31301__auto___38085 = (0);
while(true){
if((i__31301__auto___38085 < len__31300__auto___38084)){
args__31307__auto__.push((arguments[i__31301__auto___38085]));

var G__38086 = (i__31301__auto___38085 + (1));
i__31301__auto___38085 = G__38086;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38083))
;

cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38083){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38083),args);
});})(g__31403__auto___38083))
;

cljs.spec.gen.alpha.hash_map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.hash_map.cljs$lang$applyTo = ((function (g__31403__auto___38083){
return (function (seq38064){
return cljs.spec.gen.alpha.hash_map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38064));
});})(g__31403__auto___38083))
;


var g__31403__auto___38087 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.list !== 'undefined')){
return clojure.test.check.generators.list;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","list","clojure.test.check.generators/list",506971058,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/list
 */
cljs.spec.gen.alpha.list = ((function (g__31403__auto___38087){
return (function cljs$spec$gen$alpha$list(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38088 = arguments.length;
var i__31301__auto___38089 = (0);
while(true){
if((i__31301__auto___38089 < len__31300__auto___38088)){
args__31307__auto__.push((arguments[i__31301__auto___38089]));

var G__38090 = (i__31301__auto___38089 + (1));
i__31301__auto___38089 = G__38090;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38087))
;

cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38087){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38087),args);
});})(g__31403__auto___38087))
;

cljs.spec.gen.alpha.list.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.list.cljs$lang$applyTo = ((function (g__31403__auto___38087){
return (function (seq38065){
return cljs.spec.gen.alpha.list.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38065));
});})(g__31403__auto___38087))
;


var g__31403__auto___38091 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.map !== 'undefined')){
return clojure.test.check.generators.map;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","map","clojure.test.check.generators/map",45738796,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/map
 */
cljs.spec.gen.alpha.map = ((function (g__31403__auto___38091){
return (function cljs$spec$gen$alpha$map(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38092 = arguments.length;
var i__31301__auto___38093 = (0);
while(true){
if((i__31301__auto___38093 < len__31300__auto___38092)){
args__31307__auto__.push((arguments[i__31301__auto___38093]));

var G__38094 = (i__31301__auto___38093 + (1));
i__31301__auto___38093 = G__38094;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38091))
;

cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38091){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38091),args);
});})(g__31403__auto___38091))
;

cljs.spec.gen.alpha.map.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.map.cljs$lang$applyTo = ((function (g__31403__auto___38091){
return (function (seq38066){
return cljs.spec.gen.alpha.map.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38066));
});})(g__31403__auto___38091))
;


var g__31403__auto___38095 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.not_empty !== 'undefined')){
return clojure.test.check.generators.not_empty;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","not-empty","clojure.test.check.generators/not-empty",-876211682,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/not-empty
 */
cljs.spec.gen.alpha.not_empty = ((function (g__31403__auto___38095){
return (function cljs$spec$gen$alpha$not_empty(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38096 = arguments.length;
var i__31301__auto___38097 = (0);
while(true){
if((i__31301__auto___38097 < len__31300__auto___38096)){
args__31307__auto__.push((arguments[i__31301__auto___38097]));

var G__38098 = (i__31301__auto___38097 + (1));
i__31301__auto___38097 = G__38098;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38095))
;

cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38095){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38095),args);
});})(g__31403__auto___38095))
;

cljs.spec.gen.alpha.not_empty.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.not_empty.cljs$lang$applyTo = ((function (g__31403__auto___38095){
return (function (seq38067){
return cljs.spec.gen.alpha.not_empty.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38067));
});})(g__31403__auto___38095))
;


var g__31403__auto___38099 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.set !== 'undefined')){
return clojure.test.check.generators.set;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","set","clojure.test.check.generators/set",-1027639543,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/set
 */
cljs.spec.gen.alpha.set = ((function (g__31403__auto___38099){
return (function cljs$spec$gen$alpha$set(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38100 = arguments.length;
var i__31301__auto___38101 = (0);
while(true){
if((i__31301__auto___38101 < len__31300__auto___38100)){
args__31307__auto__.push((arguments[i__31301__auto___38101]));

var G__38102 = (i__31301__auto___38101 + (1));
i__31301__auto___38101 = G__38102;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38099))
;

cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38099){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38099),args);
});})(g__31403__auto___38099))
;

cljs.spec.gen.alpha.set.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.set.cljs$lang$applyTo = ((function (g__31403__auto___38099){
return (function (seq38068){
return cljs.spec.gen.alpha.set.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38068));
});})(g__31403__auto___38099))
;


var g__31403__auto___38103 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector !== 'undefined')){
return clojure.test.check.generators.vector;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector","clojure.test.check.generators/vector",1081775325,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector
 */
cljs.spec.gen.alpha.vector = ((function (g__31403__auto___38103){
return (function cljs$spec$gen$alpha$vector(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38104 = arguments.length;
var i__31301__auto___38105 = (0);
while(true){
if((i__31301__auto___38105 < len__31300__auto___38104)){
args__31307__auto__.push((arguments[i__31301__auto___38105]));

var G__38106 = (i__31301__auto___38105 + (1));
i__31301__auto___38105 = G__38106;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38103))
;

cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38103){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38103),args);
});})(g__31403__auto___38103))
;

cljs.spec.gen.alpha.vector.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector.cljs$lang$applyTo = ((function (g__31403__auto___38103){
return (function (seq38069){
return cljs.spec.gen.alpha.vector.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38069));
});})(g__31403__auto___38103))
;


var g__31403__auto___38107 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.vector_distinct !== 'undefined')){
return clojure.test.check.generators.vector_distinct;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","vector-distinct","clojure.test.check.generators/vector-distinct",1656877834,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/vector-distinct
 */
cljs.spec.gen.alpha.vector_distinct = ((function (g__31403__auto___38107){
return (function cljs$spec$gen$alpha$vector_distinct(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38108 = arguments.length;
var i__31301__auto___38109 = (0);
while(true){
if((i__31301__auto___38109 < len__31300__auto___38108)){
args__31307__auto__.push((arguments[i__31301__auto___38109]));

var G__38110 = (i__31301__auto___38109 + (1));
i__31301__auto___38109 = G__38110;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38107))
;

cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38107){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38107),args);
});})(g__31403__auto___38107))
;

cljs.spec.gen.alpha.vector_distinct.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.vector_distinct.cljs$lang$applyTo = ((function (g__31403__auto___38107){
return (function (seq38070){
return cljs.spec.gen.alpha.vector_distinct.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38070));
});})(g__31403__auto___38107))
;


var g__31403__auto___38111 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.fmap !== 'undefined')){
return clojure.test.check.generators.fmap;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","fmap","clojure.test.check.generators/fmap",1957997092,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/fmap
 */
cljs.spec.gen.alpha.fmap = ((function (g__31403__auto___38111){
return (function cljs$spec$gen$alpha$fmap(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38112 = arguments.length;
var i__31301__auto___38113 = (0);
while(true){
if((i__31301__auto___38113 < len__31300__auto___38112)){
args__31307__auto__.push((arguments[i__31301__auto___38113]));

var G__38114 = (i__31301__auto___38113 + (1));
i__31301__auto___38113 = G__38114;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38111))
;

cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38111){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38111),args);
});})(g__31403__auto___38111))
;

cljs.spec.gen.alpha.fmap.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.fmap.cljs$lang$applyTo = ((function (g__31403__auto___38111){
return (function (seq38071){
return cljs.spec.gen.alpha.fmap.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38071));
});})(g__31403__auto___38111))
;


var g__31403__auto___38115 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.elements !== 'undefined')){
return clojure.test.check.generators.elements;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","elements","clojure.test.check.generators/elements",438991326,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/elements
 */
cljs.spec.gen.alpha.elements = ((function (g__31403__auto___38115){
return (function cljs$spec$gen$alpha$elements(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38116 = arguments.length;
var i__31301__auto___38117 = (0);
while(true){
if((i__31301__auto___38117 < len__31300__auto___38116)){
args__31307__auto__.push((arguments[i__31301__auto___38117]));

var G__38118 = (i__31301__auto___38117 + (1));
i__31301__auto___38117 = G__38118;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38115))
;

cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38115){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38115),args);
});})(g__31403__auto___38115))
;

cljs.spec.gen.alpha.elements.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.elements.cljs$lang$applyTo = ((function (g__31403__auto___38115){
return (function (seq38072){
return cljs.spec.gen.alpha.elements.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38072));
});})(g__31403__auto___38115))
;


var g__31403__auto___38119 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.bind !== 'undefined')){
return clojure.test.check.generators.bind;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","bind","clojure.test.check.generators/bind",-361313906,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/bind
 */
cljs.spec.gen.alpha.bind = ((function (g__31403__auto___38119){
return (function cljs$spec$gen$alpha$bind(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38120 = arguments.length;
var i__31301__auto___38121 = (0);
while(true){
if((i__31301__auto___38121 < len__31300__auto___38120)){
args__31307__auto__.push((arguments[i__31301__auto___38121]));

var G__38122 = (i__31301__auto___38121 + (1));
i__31301__auto___38121 = G__38122;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38119))
;

cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38119){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38119),args);
});})(g__31403__auto___38119))
;

cljs.spec.gen.alpha.bind.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.bind.cljs$lang$applyTo = ((function (g__31403__auto___38119){
return (function (seq38073){
return cljs.spec.gen.alpha.bind.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38073));
});})(g__31403__auto___38119))
;


var g__31403__auto___38123 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.choose !== 'undefined')){
return clojure.test.check.generators.choose;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","choose","clojure.test.check.generators/choose",909997832,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/choose
 */
cljs.spec.gen.alpha.choose = ((function (g__31403__auto___38123){
return (function cljs$spec$gen$alpha$choose(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38124 = arguments.length;
var i__31301__auto___38125 = (0);
while(true){
if((i__31301__auto___38125 < len__31300__auto___38124)){
args__31307__auto__.push((arguments[i__31301__auto___38125]));

var G__38126 = (i__31301__auto___38125 + (1));
i__31301__auto___38125 = G__38126;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38123))
;

cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38123){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38123),args);
});})(g__31403__auto___38123))
;

cljs.spec.gen.alpha.choose.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.choose.cljs$lang$applyTo = ((function (g__31403__auto___38123){
return (function (seq38074){
return cljs.spec.gen.alpha.choose.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38074));
});})(g__31403__auto___38123))
;


var g__31403__auto___38127 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.one_of !== 'undefined')){
return clojure.test.check.generators.one_of;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","one-of","clojure.test.check.generators/one-of",-183339191,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/one-of
 */
cljs.spec.gen.alpha.one_of = ((function (g__31403__auto___38127){
return (function cljs$spec$gen$alpha$one_of(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38128 = arguments.length;
var i__31301__auto___38129 = (0);
while(true){
if((i__31301__auto___38129 < len__31300__auto___38128)){
args__31307__auto__.push((arguments[i__31301__auto___38129]));

var G__38130 = (i__31301__auto___38129 + (1));
i__31301__auto___38129 = G__38130;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38127))
;

cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38127){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38127),args);
});})(g__31403__auto___38127))
;

cljs.spec.gen.alpha.one_of.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.one_of.cljs$lang$applyTo = ((function (g__31403__auto___38127){
return (function (seq38075){
return cljs.spec.gen.alpha.one_of.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38075));
});})(g__31403__auto___38127))
;


var g__31403__auto___38131 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.such_that !== 'undefined')){
return clojure.test.check.generators.such_that;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","such-that","clojure.test.check.generators/such-that",-1754178732,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/such-that
 */
cljs.spec.gen.alpha.such_that = ((function (g__31403__auto___38131){
return (function cljs$spec$gen$alpha$such_that(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38132 = arguments.length;
var i__31301__auto___38133 = (0);
while(true){
if((i__31301__auto___38133 < len__31300__auto___38132)){
args__31307__auto__.push((arguments[i__31301__auto___38133]));

var G__38134 = (i__31301__auto___38133 + (1));
i__31301__auto___38133 = G__38134;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38131))
;

cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38131){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38131),args);
});})(g__31403__auto___38131))
;

cljs.spec.gen.alpha.such_that.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.such_that.cljs$lang$applyTo = ((function (g__31403__auto___38131){
return (function (seq38076){
return cljs.spec.gen.alpha.such_that.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38076));
});})(g__31403__auto___38131))
;


var g__31403__auto___38135 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.tuple !== 'undefined')){
return clojure.test.check.generators.tuple;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","tuple","clojure.test.check.generators/tuple",-143711557,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/tuple
 */
cljs.spec.gen.alpha.tuple = ((function (g__31403__auto___38135){
return (function cljs$spec$gen$alpha$tuple(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38136 = arguments.length;
var i__31301__auto___38137 = (0);
while(true){
if((i__31301__auto___38137 < len__31300__auto___38136)){
args__31307__auto__.push((arguments[i__31301__auto___38137]));

var G__38138 = (i__31301__auto___38137 + (1));
i__31301__auto___38137 = G__38138;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38135))
;

cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38135){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38135),args);
});})(g__31403__auto___38135))
;

cljs.spec.gen.alpha.tuple.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.tuple.cljs$lang$applyTo = ((function (g__31403__auto___38135){
return (function (seq38077){
return cljs.spec.gen.alpha.tuple.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38077));
});})(g__31403__auto___38135))
;


var g__31403__auto___38139 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.sample !== 'undefined')){
return clojure.test.check.generators.sample;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","sample","clojure.test.check.generators/sample",-382944992,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/sample
 */
cljs.spec.gen.alpha.sample = ((function (g__31403__auto___38139){
return (function cljs$spec$gen$alpha$sample(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38140 = arguments.length;
var i__31301__auto___38141 = (0);
while(true){
if((i__31301__auto___38141 < len__31300__auto___38140)){
args__31307__auto__.push((arguments[i__31301__auto___38141]));

var G__38142 = (i__31301__auto___38141 + (1));
i__31301__auto___38141 = G__38142;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38139))
;

cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38139){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38139),args);
});})(g__31403__auto___38139))
;

cljs.spec.gen.alpha.sample.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.sample.cljs$lang$applyTo = ((function (g__31403__auto___38139){
return (function (seq38078){
return cljs.spec.gen.alpha.sample.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38078));
});})(g__31403__auto___38139))
;


var g__31403__auto___38143 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.return$ !== 'undefined')){
return clojure.test.check.generators.return$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","return","clojure.test.check.generators/return",1744522038,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/return
 */
cljs.spec.gen.alpha.return$ = ((function (g__31403__auto___38143){
return (function cljs$spec$gen$alpha$return(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38144 = arguments.length;
var i__31301__auto___38145 = (0);
while(true){
if((i__31301__auto___38145 < len__31300__auto___38144)){
args__31307__auto__.push((arguments[i__31301__auto___38145]));

var G__38146 = (i__31301__auto___38145 + (1));
i__31301__auto___38145 = G__38146;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38143))
;

cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38143){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38143),args);
});})(g__31403__auto___38143))
;

cljs.spec.gen.alpha.return$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.return$.cljs$lang$applyTo = ((function (g__31403__auto___38143){
return (function (seq38079){
return cljs.spec.gen.alpha.return$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38079));
});})(g__31403__auto___38143))
;


var g__31403__auto___38147 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer_STAR_ !== 'undefined')){
return clojure.test.check.generators.large_integer_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer*","clojure.test.check.generators/large-integer*",-437830670,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/large-integer*
 */
cljs.spec.gen.alpha.large_integer_STAR_ = ((function (g__31403__auto___38147){
return (function cljs$spec$gen$alpha$large_integer_STAR_(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38148 = arguments.length;
var i__31301__auto___38149 = (0);
while(true){
if((i__31301__auto___38149 < len__31300__auto___38148)){
args__31307__auto__.push((arguments[i__31301__auto___38149]));

var G__38150 = (i__31301__auto___38149 + (1));
i__31301__auto___38149 = G__38150;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38147))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38147){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38147),args);
});})(g__31403__auto___38147))
;

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer_STAR_.cljs$lang$applyTo = ((function (g__31403__auto___38147){
return (function (seq38080){
return cljs.spec.gen.alpha.large_integer_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38080));
});})(g__31403__auto___38147))
;


var g__31403__auto___38151 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double_STAR_ !== 'undefined')){
return clojure.test.check.generators.double_STAR_;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double*","clojure.test.check.generators/double*",841542265,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/double*
 */
cljs.spec.gen.alpha.double_STAR_ = ((function (g__31403__auto___38151){
return (function cljs$spec$gen$alpha$double_STAR_(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38152 = arguments.length;
var i__31301__auto___38153 = (0);
while(true){
if((i__31301__auto___38153 < len__31300__auto___38152)){
args__31307__auto__.push((arguments[i__31301__auto___38153]));

var G__38154 = (i__31301__auto___38153 + (1));
i__31301__auto___38153 = G__38154;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38151))
;

cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38151){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38151),args);
});})(g__31403__auto___38151))
;

cljs.spec.gen.alpha.double_STAR_.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double_STAR_.cljs$lang$applyTo = ((function (g__31403__auto___38151){
return (function (seq38081){
return cljs.spec.gen.alpha.double_STAR_.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38081));
});})(g__31403__auto___38151))
;


var g__31403__auto___38155 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.frequency !== 'undefined')){
return clojure.test.check.generators.frequency;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","frequency","clojure.test.check.generators/frequency",2090703177,null)))," never required"].join('')));
}
}),null));
/**
 * Lazy loaded version of clojure.test.check.generators/frequency
 */
cljs.spec.gen.alpha.frequency = ((function (g__31403__auto___38155){
return (function cljs$spec$gen$alpha$frequency(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38156 = arguments.length;
var i__31301__auto___38157 = (0);
while(true){
if((i__31301__auto___38157 < len__31300__auto___38156)){
args__31307__auto__.push((arguments[i__31301__auto___38157]));

var G__38158 = (i__31301__auto___38157 + (1));
i__31301__auto___38157 = G__38158;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31403__auto___38155))
;

cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31403__auto___38155){
return (function (args){
return cljs.core.apply.call(null,cljs.core.deref.call(null,g__31403__auto___38155),args);
});})(g__31403__auto___38155))
;

cljs.spec.gen.alpha.frequency.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.frequency.cljs$lang$applyTo = ((function (g__31403__auto___38155){
return (function (seq38082){
return cljs.spec.gen.alpha.frequency.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38082));
});})(g__31403__auto___38155))
;

var g__31416__auto___38180 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any !== 'undefined')){
return clojure.test.check.generators.any;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any","clojure.test.check.generators/any",1883743710,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any
 */
cljs.spec.gen.alpha.any = ((function (g__31416__auto___38180){
return (function cljs$spec$gen$alpha$any(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38181 = arguments.length;
var i__31301__auto___38182 = (0);
while(true){
if((i__31301__auto___38182 < len__31300__auto___38181)){
args__31307__auto__.push((arguments[i__31301__auto___38182]));

var G__38183 = (i__31301__auto___38182 + (1));
i__31301__auto___38182 = G__38183;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38180))
;

cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38180){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38180);
});})(g__31416__auto___38180))
;

cljs.spec.gen.alpha.any.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any.cljs$lang$applyTo = ((function (g__31416__auto___38180){
return (function (seq38159){
return cljs.spec.gen.alpha.any.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38159));
});})(g__31416__auto___38180))
;


var g__31416__auto___38184 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.any_printable !== 'undefined')){
return clojure.test.check.generators.any_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","any-printable","clojure.test.check.generators/any-printable",-1570493991,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/any-printable
 */
cljs.spec.gen.alpha.any_printable = ((function (g__31416__auto___38184){
return (function cljs$spec$gen$alpha$any_printable(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38185 = arguments.length;
var i__31301__auto___38186 = (0);
while(true){
if((i__31301__auto___38186 < len__31300__auto___38185)){
args__31307__auto__.push((arguments[i__31301__auto___38186]));

var G__38187 = (i__31301__auto___38186 + (1));
i__31301__auto___38186 = G__38187;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38184))
;

cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38184){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38184);
});})(g__31416__auto___38184))
;

cljs.spec.gen.alpha.any_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.any_printable.cljs$lang$applyTo = ((function (g__31416__auto___38184){
return (function (seq38160){
return cljs.spec.gen.alpha.any_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38160));
});})(g__31416__auto___38184))
;


var g__31416__auto___38188 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.boolean$ !== 'undefined')){
return clojure.test.check.generators.boolean$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","boolean","clojure.test.check.generators/boolean",1586992347,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/boolean
 */
cljs.spec.gen.alpha.boolean$ = ((function (g__31416__auto___38188){
return (function cljs$spec$gen$alpha$boolean(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38189 = arguments.length;
var i__31301__auto___38190 = (0);
while(true){
if((i__31301__auto___38190 < len__31300__auto___38189)){
args__31307__auto__.push((arguments[i__31301__auto___38190]));

var G__38191 = (i__31301__auto___38190 + (1));
i__31301__auto___38190 = G__38191;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38188))
;

cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38188){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38188);
});})(g__31416__auto___38188))
;

cljs.spec.gen.alpha.boolean$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.boolean$.cljs$lang$applyTo = ((function (g__31416__auto___38188){
return (function (seq38161){
return cljs.spec.gen.alpha.boolean$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38161));
});})(g__31416__auto___38188))
;


var g__31416__auto___38192 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char$ !== 'undefined')){
return clojure.test.check.generators.char$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char","clojure.test.check.generators/char",-1426343459,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char
 */
cljs.spec.gen.alpha.char$ = ((function (g__31416__auto___38192){
return (function cljs$spec$gen$alpha$char(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38193 = arguments.length;
var i__31301__auto___38194 = (0);
while(true){
if((i__31301__auto___38194 < len__31300__auto___38193)){
args__31307__auto__.push((arguments[i__31301__auto___38194]));

var G__38195 = (i__31301__auto___38194 + (1));
i__31301__auto___38194 = G__38195;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38192))
;

cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38192){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38192);
});})(g__31416__auto___38192))
;

cljs.spec.gen.alpha.char$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char$.cljs$lang$applyTo = ((function (g__31416__auto___38192){
return (function (seq38162){
return cljs.spec.gen.alpha.char$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38162));
});})(g__31416__auto___38192))
;


var g__31416__auto___38196 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alpha !== 'undefined')){
return clojure.test.check.generators.char_alpha;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alpha","clojure.test.check.generators/char-alpha",615785796,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alpha
 */
cljs.spec.gen.alpha.char_alpha = ((function (g__31416__auto___38196){
return (function cljs$spec$gen$alpha$char_alpha(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38197 = arguments.length;
var i__31301__auto___38198 = (0);
while(true){
if((i__31301__auto___38198 < len__31300__auto___38197)){
args__31307__auto__.push((arguments[i__31301__auto___38198]));

var G__38199 = (i__31301__auto___38198 + (1));
i__31301__auto___38198 = G__38199;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38196))
;

cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38196){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38196);
});})(g__31416__auto___38196))
;

cljs.spec.gen.alpha.char_alpha.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alpha.cljs$lang$applyTo = ((function (g__31416__auto___38196){
return (function (seq38163){
return cljs.spec.gen.alpha.char_alpha.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38163));
});})(g__31416__auto___38196))
;


var g__31416__auto___38200 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_alphanumeric !== 'undefined')){
return clojure.test.check.generators.char_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-alphanumeric","clojure.test.check.generators/char-alphanumeric",1383091431,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-alphanumeric
 */
cljs.spec.gen.alpha.char_alphanumeric = ((function (g__31416__auto___38200){
return (function cljs$spec$gen$alpha$char_alphanumeric(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38201 = arguments.length;
var i__31301__auto___38202 = (0);
while(true){
if((i__31301__auto___38202 < len__31300__auto___38201)){
args__31307__auto__.push((arguments[i__31301__auto___38202]));

var G__38203 = (i__31301__auto___38202 + (1));
i__31301__auto___38202 = G__38203;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38200))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38200){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38200);
});})(g__31416__auto___38200))
;

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_alphanumeric.cljs$lang$applyTo = ((function (g__31416__auto___38200){
return (function (seq38164){
return cljs.spec.gen.alpha.char_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38164));
});})(g__31416__auto___38200))
;


var g__31416__auto___38204 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.char_ascii !== 'undefined')){
return clojure.test.check.generators.char_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","char-ascii","clojure.test.check.generators/char-ascii",-899908538,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/char-ascii
 */
cljs.spec.gen.alpha.char_ascii = ((function (g__31416__auto___38204){
return (function cljs$spec$gen$alpha$char_ascii(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38205 = arguments.length;
var i__31301__auto___38206 = (0);
while(true){
if((i__31301__auto___38206 < len__31300__auto___38205)){
args__31307__auto__.push((arguments[i__31301__auto___38206]));

var G__38207 = (i__31301__auto___38206 + (1));
i__31301__auto___38206 = G__38207;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38204))
;

cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38204){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38204);
});})(g__31416__auto___38204))
;

cljs.spec.gen.alpha.char_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.char_ascii.cljs$lang$applyTo = ((function (g__31416__auto___38204){
return (function (seq38165){
return cljs.spec.gen.alpha.char_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38165));
});})(g__31416__auto___38204))
;


var g__31416__auto___38208 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.double$ !== 'undefined')){
return clojure.test.check.generators.double$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","double","clojure.test.check.generators/double",668331090,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/double
 */
cljs.spec.gen.alpha.double$ = ((function (g__31416__auto___38208){
return (function cljs$spec$gen$alpha$double(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38209 = arguments.length;
var i__31301__auto___38210 = (0);
while(true){
if((i__31301__auto___38210 < len__31300__auto___38209)){
args__31307__auto__.push((arguments[i__31301__auto___38210]));

var G__38211 = (i__31301__auto___38210 + (1));
i__31301__auto___38210 = G__38211;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38208))
;

cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38208){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38208);
});})(g__31416__auto___38208))
;

cljs.spec.gen.alpha.double$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.double$.cljs$lang$applyTo = ((function (g__31416__auto___38208){
return (function (seq38166){
return cljs.spec.gen.alpha.double$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38166));
});})(g__31416__auto___38208))
;


var g__31416__auto___38212 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.int$ !== 'undefined')){
return clojure.test.check.generators.int$;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","int","clojure.test.check.generators/int",1756228469,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/int
 */
cljs.spec.gen.alpha.int$ = ((function (g__31416__auto___38212){
return (function cljs$spec$gen$alpha$int(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38213 = arguments.length;
var i__31301__auto___38214 = (0);
while(true){
if((i__31301__auto___38214 < len__31300__auto___38213)){
args__31307__auto__.push((arguments[i__31301__auto___38214]));

var G__38215 = (i__31301__auto___38214 + (1));
i__31301__auto___38214 = G__38215;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38212))
;

cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38212){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38212);
});})(g__31416__auto___38212))
;

cljs.spec.gen.alpha.int$.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.int$.cljs$lang$applyTo = ((function (g__31416__auto___38212){
return (function (seq38167){
return cljs.spec.gen.alpha.int$.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38167));
});})(g__31416__auto___38212))
;


var g__31416__auto___38216 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword !== 'undefined')){
return clojure.test.check.generators.keyword;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword","clojure.test.check.generators/keyword",24530530,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword
 */
cljs.spec.gen.alpha.keyword = ((function (g__31416__auto___38216){
return (function cljs$spec$gen$alpha$keyword(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38217 = arguments.length;
var i__31301__auto___38218 = (0);
while(true){
if((i__31301__auto___38218 < len__31300__auto___38217)){
args__31307__auto__.push((arguments[i__31301__auto___38218]));

var G__38219 = (i__31301__auto___38218 + (1));
i__31301__auto___38218 = G__38219;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38216))
;

cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38216){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38216);
});})(g__31416__auto___38216))
;

cljs.spec.gen.alpha.keyword.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword.cljs$lang$applyTo = ((function (g__31416__auto___38216){
return (function (seq38168){
return cljs.spec.gen.alpha.keyword.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38168));
});})(g__31416__auto___38216))
;


var g__31416__auto___38220 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.keyword_ns !== 'undefined')){
return clojure.test.check.generators.keyword_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","keyword-ns","clojure.test.check.generators/keyword-ns",-1492628482,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/keyword-ns
 */
cljs.spec.gen.alpha.keyword_ns = ((function (g__31416__auto___38220){
return (function cljs$spec$gen$alpha$keyword_ns(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38221 = arguments.length;
var i__31301__auto___38222 = (0);
while(true){
if((i__31301__auto___38222 < len__31300__auto___38221)){
args__31307__auto__.push((arguments[i__31301__auto___38222]));

var G__38223 = (i__31301__auto___38222 + (1));
i__31301__auto___38222 = G__38223;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38220))
;

cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38220){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38220);
});})(g__31416__auto___38220))
;

cljs.spec.gen.alpha.keyword_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.keyword_ns.cljs$lang$applyTo = ((function (g__31416__auto___38220){
return (function (seq38169){
return cljs.spec.gen.alpha.keyword_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38169));
});})(g__31416__auto___38220))
;


var g__31416__auto___38224 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.large_integer !== 'undefined')){
return clojure.test.check.generators.large_integer;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","large-integer","clojure.test.check.generators/large-integer",-865967138,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/large-integer
 */
cljs.spec.gen.alpha.large_integer = ((function (g__31416__auto___38224){
return (function cljs$spec$gen$alpha$large_integer(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38225 = arguments.length;
var i__31301__auto___38226 = (0);
while(true){
if((i__31301__auto___38226 < len__31300__auto___38225)){
args__31307__auto__.push((arguments[i__31301__auto___38226]));

var G__38227 = (i__31301__auto___38226 + (1));
i__31301__auto___38226 = G__38227;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38224))
;

cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38224){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38224);
});})(g__31416__auto___38224))
;

cljs.spec.gen.alpha.large_integer.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.large_integer.cljs$lang$applyTo = ((function (g__31416__auto___38224){
return (function (seq38170){
return cljs.spec.gen.alpha.large_integer.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38170));
});})(g__31416__auto___38224))
;


var g__31416__auto___38228 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.ratio !== 'undefined')){
return clojure.test.check.generators.ratio;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","ratio","clojure.test.check.generators/ratio",1540966915,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/ratio
 */
cljs.spec.gen.alpha.ratio = ((function (g__31416__auto___38228){
return (function cljs$spec$gen$alpha$ratio(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38229 = arguments.length;
var i__31301__auto___38230 = (0);
while(true){
if((i__31301__auto___38230 < len__31300__auto___38229)){
args__31307__auto__.push((arguments[i__31301__auto___38230]));

var G__38231 = (i__31301__auto___38230 + (1));
i__31301__auto___38230 = G__38231;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38228))
;

cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38228){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38228);
});})(g__31416__auto___38228))
;

cljs.spec.gen.alpha.ratio.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.ratio.cljs$lang$applyTo = ((function (g__31416__auto___38228){
return (function (seq38171){
return cljs.spec.gen.alpha.ratio.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38171));
});})(g__31416__auto___38228))
;


var g__31416__auto___38232 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type !== 'undefined')){
return clojure.test.check.generators.simple_type;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type","clojure.test.check.generators/simple-type",892572284,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type
 */
cljs.spec.gen.alpha.simple_type = ((function (g__31416__auto___38232){
return (function cljs$spec$gen$alpha$simple_type(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38233 = arguments.length;
var i__31301__auto___38234 = (0);
while(true){
if((i__31301__auto___38234 < len__31300__auto___38233)){
args__31307__auto__.push((arguments[i__31301__auto___38234]));

var G__38235 = (i__31301__auto___38234 + (1));
i__31301__auto___38234 = G__38235;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38232))
;

cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38232){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38232);
});})(g__31416__auto___38232))
;

cljs.spec.gen.alpha.simple_type.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type.cljs$lang$applyTo = ((function (g__31416__auto___38232){
return (function (seq38172){
return cljs.spec.gen.alpha.simple_type.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38172));
});})(g__31416__auto___38232))
;


var g__31416__auto___38236 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.simple_type_printable !== 'undefined')){
return clojure.test.check.generators.simple_type_printable;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","simple-type-printable","clojure.test.check.generators/simple-type-printable",-58489962,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/simple-type-printable
 */
cljs.spec.gen.alpha.simple_type_printable = ((function (g__31416__auto___38236){
return (function cljs$spec$gen$alpha$simple_type_printable(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38237 = arguments.length;
var i__31301__auto___38238 = (0);
while(true){
if((i__31301__auto___38238 < len__31300__auto___38237)){
args__31307__auto__.push((arguments[i__31301__auto___38238]));

var G__38239 = (i__31301__auto___38238 + (1));
i__31301__auto___38238 = G__38239;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38236))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38236){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38236);
});})(g__31416__auto___38236))
;

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.simple_type_printable.cljs$lang$applyTo = ((function (g__31416__auto___38236){
return (function (seq38173){
return cljs.spec.gen.alpha.simple_type_printable.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38173));
});})(g__31416__auto___38236))
;


var g__31416__auto___38240 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string !== 'undefined')){
return clojure.test.check.generators.string;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string","clojure.test.check.generators/string",-1704750979,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string
 */
cljs.spec.gen.alpha.string = ((function (g__31416__auto___38240){
return (function cljs$spec$gen$alpha$string(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38241 = arguments.length;
var i__31301__auto___38242 = (0);
while(true){
if((i__31301__auto___38242 < len__31300__auto___38241)){
args__31307__auto__.push((arguments[i__31301__auto___38242]));

var G__38243 = (i__31301__auto___38242 + (1));
i__31301__auto___38242 = G__38243;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38240))
;

cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38240){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38240);
});})(g__31416__auto___38240))
;

cljs.spec.gen.alpha.string.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string.cljs$lang$applyTo = ((function (g__31416__auto___38240){
return (function (seq38174){
return cljs.spec.gen.alpha.string.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38174));
});})(g__31416__auto___38240))
;


var g__31416__auto___38244 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_ascii !== 'undefined')){
return clojure.test.check.generators.string_ascii;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-ascii","clojure.test.check.generators/string-ascii",-2009877640,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-ascii
 */
cljs.spec.gen.alpha.string_ascii = ((function (g__31416__auto___38244){
return (function cljs$spec$gen$alpha$string_ascii(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38245 = arguments.length;
var i__31301__auto___38246 = (0);
while(true){
if((i__31301__auto___38246 < len__31300__auto___38245)){
args__31307__auto__.push((arguments[i__31301__auto___38246]));

var G__38247 = (i__31301__auto___38246 + (1));
i__31301__auto___38246 = G__38247;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38244))
;

cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38244){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38244);
});})(g__31416__auto___38244))
;

cljs.spec.gen.alpha.string_ascii.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_ascii.cljs$lang$applyTo = ((function (g__31416__auto___38244){
return (function (seq38175){
return cljs.spec.gen.alpha.string_ascii.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38175));
});})(g__31416__auto___38244))
;


var g__31416__auto___38248 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.string_alphanumeric !== 'undefined')){
return clojure.test.check.generators.string_alphanumeric;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","string-alphanumeric","clojure.test.check.generators/string-alphanumeric",836374939,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/string-alphanumeric
 */
cljs.spec.gen.alpha.string_alphanumeric = ((function (g__31416__auto___38248){
return (function cljs$spec$gen$alpha$string_alphanumeric(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38249 = arguments.length;
var i__31301__auto___38250 = (0);
while(true){
if((i__31301__auto___38250 < len__31300__auto___38249)){
args__31307__auto__.push((arguments[i__31301__auto___38250]));

var G__38251 = (i__31301__auto___38250 + (1));
i__31301__auto___38250 = G__38251;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38248))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38248){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38248);
});})(g__31416__auto___38248))
;

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.string_alphanumeric.cljs$lang$applyTo = ((function (g__31416__auto___38248){
return (function (seq38176){
return cljs.spec.gen.alpha.string_alphanumeric.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38176));
});})(g__31416__auto___38248))
;


var g__31416__auto___38252 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol !== 'undefined')){
return clojure.test.check.generators.symbol;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol","clojure.test.check.generators/symbol",-1305461065,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol
 */
cljs.spec.gen.alpha.symbol = ((function (g__31416__auto___38252){
return (function cljs$spec$gen$alpha$symbol(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38253 = arguments.length;
var i__31301__auto___38254 = (0);
while(true){
if((i__31301__auto___38254 < len__31300__auto___38253)){
args__31307__auto__.push((arguments[i__31301__auto___38254]));

var G__38255 = (i__31301__auto___38254 + (1));
i__31301__auto___38254 = G__38255;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38252))
;

cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38252){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38252);
});})(g__31416__auto___38252))
;

cljs.spec.gen.alpha.symbol.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol.cljs$lang$applyTo = ((function (g__31416__auto___38252){
return (function (seq38177){
return cljs.spec.gen.alpha.symbol.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38177));
});})(g__31416__auto___38252))
;


var g__31416__auto___38256 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.symbol_ns !== 'undefined')){
return clojure.test.check.generators.symbol_ns;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","symbol-ns","clojure.test.check.generators/symbol-ns",-862629490,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/symbol-ns
 */
cljs.spec.gen.alpha.symbol_ns = ((function (g__31416__auto___38256){
return (function cljs$spec$gen$alpha$symbol_ns(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38257 = arguments.length;
var i__31301__auto___38258 = (0);
while(true){
if((i__31301__auto___38258 < len__31300__auto___38257)){
args__31307__auto__.push((arguments[i__31301__auto___38258]));

var G__38259 = (i__31301__auto___38258 + (1));
i__31301__auto___38258 = G__38259;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38256))
;

cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38256){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38256);
});})(g__31416__auto___38256))
;

cljs.spec.gen.alpha.symbol_ns.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.symbol_ns.cljs$lang$applyTo = ((function (g__31416__auto___38256){
return (function (seq38178){
return cljs.spec.gen.alpha.symbol_ns.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38178));
});})(g__31416__auto___38256))
;


var g__31416__auto___38260 = (new cljs.spec.gen.alpha.LazyVar((function (){
if((typeof clojure.test !== 'undefined') && (typeof clojure.test.check !== 'undefined') && (typeof clojure.test.check.generators.uuid !== 'undefined')){
return clojure.test.check.generators.uuid;
} else {
throw (new Error(["Var ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null))," does not exist, ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.namespace.call(null,new cljs.core.Symbol("clojure.test.check.generators","uuid","clojure.test.check.generators/uuid",1589373144,null)))," never required"].join('')));
}
}),null));
/**
 * Fn returning clojure.test.check.generators/uuid
 */
cljs.spec.gen.alpha.uuid = ((function (g__31416__auto___38260){
return (function cljs$spec$gen$alpha$uuid(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38261 = arguments.length;
var i__31301__auto___38262 = (0);
while(true){
if((i__31301__auto___38262 < len__31300__auto___38261)){
args__31307__auto__.push((arguments[i__31301__auto___38262]));

var G__38263 = (i__31301__auto___38262 + (1));
i__31301__auto___38262 = G__38263;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});})(g__31416__auto___38260))
;

cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic = ((function (g__31416__auto___38260){
return (function (args){
return cljs.core.deref.call(null,g__31416__auto___38260);
});})(g__31416__auto___38260))
;

cljs.spec.gen.alpha.uuid.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.uuid.cljs$lang$applyTo = ((function (g__31416__auto___38260){
return (function (seq38179){
return cljs.spec.gen.alpha.uuid.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38179));
});})(g__31416__auto___38260))
;

/**
 * Returns a generator of a sequence catenated from results of
 * gens, each of which should generate something sequential.
 */
cljs.spec.gen.alpha.cat = (function cljs$spec$gen$alpha$cat(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38266 = arguments.length;
var i__31301__auto___38267 = (0);
while(true){
if((i__31301__auto___38267 < len__31300__auto___38266)){
args__31307__auto__.push((arguments[i__31301__auto___38267]));

var G__38268 = (i__31301__auto___38267 + (1));
i__31301__auto___38267 = G__38268;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});

cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic = (function (gens){
return cljs.spec.gen.alpha.fmap.call(null,(function (p1__38264_SHARP_){
return cljs.core.apply.call(null,cljs.core.concat,p1__38264_SHARP_);
}),cljs.core.apply.call(null,cljs.spec.gen.alpha.tuple,gens));
});

cljs.spec.gen.alpha.cat.cljs$lang$maxFixedArity = (0);

cljs.spec.gen.alpha.cat.cljs$lang$applyTo = (function (seq38265){
return cljs.spec.gen.alpha.cat.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq38265));
});

cljs.spec.gen.alpha.qualified_QMARK_ = (function cljs$spec$gen$alpha$qualified_QMARK_(ident){
return !((cljs.core.namespace.call(null,ident) == null));
});
cljs.spec.gen.alpha.gen_builtins = (new cljs.core.Delay((function (){
var simple = cljs.spec.gen.alpha.simple_type_printable.call(null);
return cljs.core.PersistentHashMap.fromArrays([cljs.core.qualified_keyword_QMARK_,cljs.core.seq_QMARK_,cljs.core.vector_QMARK_,cljs.core.any_QMARK_,cljs.core.boolean_QMARK_,cljs.core.char_QMARK_,cljs.core.inst_QMARK_,cljs.core.simple_symbol_QMARK_,cljs.core.sequential_QMARK_,cljs.core.float_QMARK_,cljs.core.set_QMARK_,cljs.core.map_QMARK_,cljs.core.empty_QMARK_,cljs.core.string_QMARK_,cljs.core.double_QMARK_,cljs.core.int_QMARK_,cljs.core.associative_QMARK_,cljs.core.keyword_QMARK_,cljs.core.indexed_QMARK_,cljs.core.zero_QMARK_,cljs.core.simple_keyword_QMARK_,cljs.core.neg_int_QMARK_,cljs.core.nil_QMARK_,cljs.core.ident_QMARK_,cljs.core.qualified_ident_QMARK_,cljs.core.true_QMARK_,cljs.core.integer_QMARK_,cljs.core.nat_int_QMARK_,cljs.core.pos_int_QMARK_,cljs.core.uuid_QMARK_,cljs.core.false_QMARK_,cljs.core.list_QMARK_,cljs.core.simple_ident_QMARK_,cljs.core.number_QMARK_,cljs.core.qualified_symbol_QMARK_,cljs.core.seqable_QMARK_,cljs.core.symbol_QMARK_,cljs.core.coll_QMARK_],[cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.keyword_ns.call(null)),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.any_printable.call(null)], null)),cljs.spec.gen.alpha.boolean$.call(null),cljs.spec.gen.alpha.char$.call(null),cljs.spec.gen.alpha.fmap.call(null,((function (simple){
return (function (p1__38269_SHARP_){
return (new Date(p1__38269_SHARP_));
});})(simple))
,cljs.spec.gen.alpha.large_integer.call(null)),cljs.spec.gen.alpha.symbol.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.elements.call(null,new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,cljs.core.List.EMPTY,cljs.core.PersistentVector.EMPTY,cljs.core.PersistentArrayMap.EMPTY,cljs.core.PersistentHashSet.EMPTY], null)),cljs.spec.gen.alpha.string_alphanumeric.call(null),cljs.spec.gen.alpha.double$.call(null),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.vector.call(null,simple)], null)),cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.return$.call(null,(0)),cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"max","max",61366548),(-1)], null)),cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword_ns.call(null),cljs.spec.gen.alpha.symbol_ns.call(null)], null))),cljs.spec.gen.alpha.return$.call(null,true),cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(0)], null)),cljs.spec.gen.alpha.large_integer_STAR_.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"min","min",444991522),(1)], null)),cljs.spec.gen.alpha.uuid.call(null),cljs.spec.gen.alpha.return$.call(null,false),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.keyword.call(null),cljs.spec.gen.alpha.symbol.call(null)], null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.large_integer.call(null),cljs.spec.gen.alpha.double$.call(null)], null)),cljs.spec.gen.alpha.such_that.call(null,cljs.spec.gen.alpha.qualified_QMARK_,cljs.spec.gen.alpha.symbol_ns.call(null)),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.return$.call(null,null),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.set.call(null,simple),cljs.spec.gen.alpha.string_alphanumeric.call(null)], null)),cljs.spec.gen.alpha.symbol_ns.call(null),cljs.spec.gen.alpha.one_of.call(null,new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.spec.gen.alpha.map.call(null,simple,simple),cljs.spec.gen.alpha.list.call(null,simple),cljs.spec.gen.alpha.vector.call(null,simple),cljs.spec.gen.alpha.set.call(null,simple)], null))]);
}),null));
/**
 * Given a predicate, returns a built-in generator if one exists.
 */
cljs.spec.gen.alpha.gen_for_pred = (function cljs$spec$gen$alpha$gen_for_pred(pred){
if(cljs.core.set_QMARK_.call(null,pred)){
return cljs.spec.gen.alpha.elements.call(null,pred);
} else {
return cljs.core.get.call(null,cljs.core.deref.call(null,cljs.spec.gen.alpha.gen_builtins),pred);
}
});

//# sourceMappingURL=alpha.js.map?rel=1515306580969
