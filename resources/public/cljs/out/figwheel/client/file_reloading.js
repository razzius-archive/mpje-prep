// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client.file_reloading');
goog.require('cljs.core');
goog.require('figwheel.client.utils');
goog.require('goog.Uri');
goog.require('goog.string');
goog.require('goog.object');
goog.require('goog.net.jsloader');
goog.require('goog.html.legacyconversions');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('cljs.core.async');
goog.require('goog.async.Deferred');
if(typeof figwheel.client.file_reloading.figwheel_meta_pragmas !== 'undefined'){
} else {
figwheel.client.file_reloading.figwheel_meta_pragmas = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
figwheel.client.file_reloading.on_jsload_custom_event = (function figwheel$client$file_reloading$on_jsload_custom_event(url){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.js-reload",url);
});
figwheel.client.file_reloading.before_jsload_custom_event = (function figwheel$client$file_reloading$before_jsload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.before-js-reload",files);
});
figwheel.client.file_reloading.on_cssload_custom_event = (function figwheel$client$file_reloading$on_cssload_custom_event(files){
return figwheel.client.utils.dispatch_custom_event.call(null,"figwheel.css-reload",files);
});
figwheel.client.file_reloading.namespace_file_map_QMARK_ = (function figwheel$client$file_reloading$namespace_file_map_QMARK_(m){
var or__30213__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30213__auto__){
return or__30213__auto__;
} else {
cljs.core.println.call(null,"Error not namespace-file-map",cljs.core.pr_str.call(null,m));

return false;
}
});
figwheel.client.file_reloading.add_cache_buster = (function figwheel$client$file_reloading$add_cache_buster(url){

return goog.Uri.parse(url).makeUnique();
});
figwheel.client.file_reloading.name__GT_path = (function figwheel$client$file_reloading$name__GT_path(ns){

return goog.object.get(goog.dependencies_.nameToPath,ns);
});
figwheel.client.file_reloading.provided_QMARK_ = (function figwheel$client$file_reloading$provided_QMARK_(ns){
return goog.object.get(goog.dependencies_.written,figwheel.client.file_reloading.name__GT_path.call(null,ns));
});
figwheel.client.file_reloading.immutable_ns_QMARK_ = (function figwheel$client$file_reloading$immutable_ns_QMARK_(name){
var or__30213__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30213__auto__)){
return or__30213__auto__;
} else {
var or__30213__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30213__auto____$1)){
return or__30213__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__33391_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__33391_SHARP_));
}),goog.object.getKeys(goog.object.get(goog.dependencies_.requires,figwheel.client.file_reloading.name__GT_path.call(null,ns)))));
});
if(typeof figwheel.client.file_reloading.dependency_data !== 'undefined'){
} else {
figwheel.client.file_reloading.dependency_data = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),cljs.core.PersistentArrayMap.EMPTY,new cljs.core.Keyword(null,"dependents","dependents",136812837),cljs.core.PersistentArrayMap.EMPTY], null));
}
figwheel.client.file_reloading.path_to_name_BANG_ = (function figwheel$client$file_reloading$path_to_name_BANG_(path,name){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([name]));
});
/**
 * Setup a path to name dependencies map.
 * That goes from path -> #{ ns-names }
 */
figwheel.client.file_reloading.setup_path__GT_name_BANG_ = (function figwheel$client$file_reloading$setup_path__GT_name_BANG_(){
var nameToPath = goog.object.filter(goog.dependencies_.nameToPath,(function (v,k,o){
return goog.string.startsWith(v,"../");
}));
return goog.object.forEach(nameToPath,((function (nameToPath){
return (function (v,k,o){
return figwheel.client.file_reloading.path_to_name_BANG_.call(null,v,k);
});})(nameToPath))
);
});
/**
 * returns a set of namespaces defined by a path
 */
figwheel.client.file_reloading.path__GT_name = (function figwheel$client$file_reloading$path__GT_name(path){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"pathToName","pathToName",-1236616181),path], null));
});
figwheel.client.file_reloading.name_to_parent_BANG_ = (function figwheel$client$file_reloading$name_to_parent_BANG_(ns,parent_ns){
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependency_data,cljs.core.update_in,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null),cljs.core.fnil.call(null,clojure.set.union,cljs.core.PersistentHashSet.EMPTY),cljs.core.PersistentHashSet.createAsIfByAssoc([parent_ns]));
});
/**
 * This reverses the goog.dependencies_.requires for looking up ns-dependents.
 */
figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_ = (function figwheel$client$file_reloading$setup_ns__GT_dependents_BANG_(){
var requires = goog.object.filter(goog.dependencies_.requires,(function (v,k,o){
return goog.string.startsWith(k,"../");
}));
return goog.object.forEach(requires,((function (requires){
return (function (v,k,_){
return goog.object.forEach(v,((function (requires){
return (function (v_SINGLEQUOTE_,k_SINGLEQUOTE_,___$1){
var seq__33392 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__33393 = null;
var count__33394 = (0);
var i__33395 = (0);
while(true){
if((i__33395 < count__33394)){
var n = cljs.core._nth.call(null,chunk__33393,i__33395);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33396 = seq__33392;
var G__33397 = chunk__33393;
var G__33398 = count__33394;
var G__33399 = (i__33395 + (1));
seq__33392 = G__33396;
chunk__33393 = G__33397;
count__33394 = G__33398;
i__33395 = G__33399;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33392);
if(temp__5457__auto__){
var seq__33392__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33392__$1)){
var c__31144__auto__ = cljs.core.chunk_first.call(null,seq__33392__$1);
var G__33400 = cljs.core.chunk_rest.call(null,seq__33392__$1);
var G__33401 = c__31144__auto__;
var G__33402 = cljs.core.count.call(null,c__31144__auto__);
var G__33403 = (0);
seq__33392 = G__33400;
chunk__33393 = G__33401;
count__33394 = G__33402;
i__33395 = G__33403;
continue;
} else {
var n = cljs.core.first.call(null,seq__33392__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__33404 = cljs.core.next.call(null,seq__33392__$1);
var G__33405 = null;
var G__33406 = (0);
var G__33407 = (0);
seq__33392 = G__33404;
chunk__33393 = G__33405;
count__33394 = G__33406;
i__33395 = G__33407;
continue;
}
} else {
return null;
}
}
break;
}
});})(requires))
);
});})(requires))
);
});
figwheel.client.file_reloading.ns__GT_dependents = (function figwheel$client$file_reloading$ns__GT_dependents(ns){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.dependency_data),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"dependents","dependents",136812837),ns], null));
});
figwheel.client.file_reloading.in_upper_level_QMARK_ = (function figwheel$client$file_reloading$in_upper_level_QMARK_(topo_state,current_depth,dep){
return cljs.core.some.call(null,(function (p__33408){
var vec__33409 = p__33408;
var _ = cljs.core.nth.call(null,vec__33409,(0),null);
var v = cljs.core.nth.call(null,vec__33409,(1),null);
var and__30201__auto__ = v;
if(cljs.core.truth_(and__30201__auto__)){
return v.call(null,dep);
} else {
return and__30201__auto__;
}
}),cljs.core.filter.call(null,(function (p__33412){
var vec__33413 = p__33412;
var k = cljs.core.nth.call(null,vec__33413,(0),null);
var v = cljs.core.nth.call(null,vec__33413,(1),null);
return (k > current_depth);
}),topo_state));
});
figwheel.client.file_reloading.build_topo_sort = (function figwheel$client$file_reloading$build_topo_sort(get_deps){
var get_deps__$1 = cljs.core.memoize.call(null,get_deps);
var topo_sort_helper_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_topo_sort_helper_STAR_(x,depth,state){
var deps = get_deps__$1.call(null,x);
if(cljs.core.empty_QMARK_.call(null,deps)){
return null;
} else {
return topo_sort_STAR_.call(null,deps,depth,state);
}
});})(get_deps__$1))
;
var topo_sort_STAR_ = ((function (get_deps__$1){
return (function() {
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = null;
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1 = (function (deps){
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.call(null,deps,(0),cljs.core.atom.call(null,cljs.core.sorted_map.call(null)));
});
var figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3 = (function (deps,depth,state){
cljs.core.swap_BANG_.call(null,state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [depth], null),cljs.core.fnil.call(null,cljs.core.into,cljs.core.PersistentHashSet.EMPTY),deps);

var seq__33425_33433 = cljs.core.seq.call(null,deps);
var chunk__33426_33434 = null;
var count__33427_33435 = (0);
var i__33428_33436 = (0);
while(true){
if((i__33428_33436 < count__33427_33435)){
var dep_33437 = cljs.core._nth.call(null,chunk__33426_33434,i__33428_33436);
if(cljs.core.truth_((function (){var and__30201__auto__ = dep_33437;
if(cljs.core.truth_(and__30201__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33437));
} else {
return and__30201__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33437,(depth + (1)),state);
} else {
}

var G__33438 = seq__33425_33433;
var G__33439 = chunk__33426_33434;
var G__33440 = count__33427_33435;
var G__33441 = (i__33428_33436 + (1));
seq__33425_33433 = G__33438;
chunk__33426_33434 = G__33439;
count__33427_33435 = G__33440;
i__33428_33436 = G__33441;
continue;
} else {
var temp__5457__auto___33442 = cljs.core.seq.call(null,seq__33425_33433);
if(temp__5457__auto___33442){
var seq__33425_33443__$1 = temp__5457__auto___33442;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33425_33443__$1)){
var c__31144__auto___33444 = cljs.core.chunk_first.call(null,seq__33425_33443__$1);
var G__33445 = cljs.core.chunk_rest.call(null,seq__33425_33443__$1);
var G__33446 = c__31144__auto___33444;
var G__33447 = cljs.core.count.call(null,c__31144__auto___33444);
var G__33448 = (0);
seq__33425_33433 = G__33445;
chunk__33426_33434 = G__33446;
count__33427_33435 = G__33447;
i__33428_33436 = G__33448;
continue;
} else {
var dep_33449 = cljs.core.first.call(null,seq__33425_33443__$1);
if(cljs.core.truth_((function (){var and__30201__auto__ = dep_33449;
if(cljs.core.truth_(and__30201__auto__)){
return cljs.core.not.call(null,figwheel.client.file_reloading.in_upper_level_QMARK_.call(null,cljs.core.deref.call(null,state),depth,dep_33449));
} else {
return and__30201__auto__;
}
})())){
topo_sort_helper_STAR_.call(null,dep_33449,(depth + (1)),state);
} else {
}

var G__33450 = cljs.core.next.call(null,seq__33425_33443__$1);
var G__33451 = null;
var G__33452 = (0);
var G__33453 = (0);
seq__33425_33433 = G__33450;
chunk__33426_33434 = G__33451;
count__33427_33435 = G__33452;
i__33428_33436 = G__33453;
continue;
}
} else {
}
}
break;
}

if(cljs.core._EQ_.call(null,depth,(0))){
return elim_dups_STAR_.call(null,cljs.core.reverse.call(null,cljs.core.vals.call(null,cljs.core.deref.call(null,state))));
} else {
return null;
}
});
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_ = function(deps,depth,state){
switch(arguments.length){
case 1:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1.call(this,deps);
case 3:
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3.call(this,deps,depth,state);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___1;
figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_.cljs$core$IFn$_invoke$arity$3 = figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR___3;
return figwheel$client$file_reloading$build_topo_sort_$_topo_sort_STAR_;
})()
;})(get_deps__$1))
;
var elim_dups_STAR_ = ((function (get_deps__$1){
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__33429){
var vec__33430 = p__33429;
var seq__33431 = cljs.core.seq.call(null,vec__33430);
var first__33432 = cljs.core.first.call(null,seq__33431);
var seq__33431__$1 = cljs.core.next.call(null,seq__33431);
var x = first__33432;
var xs = seq__33431__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__33430,seq__33431,first__33432,seq__33431__$1,x,xs,get_deps__$1){
return (function (p1__33416_SHARP_){
return clojure.set.difference.call(null,p1__33416_SHARP_,x);
});})(vec__33430,seq__33431,first__33432,seq__33431__$1,x,xs,get_deps__$1))
,xs)));
}
});})(get_deps__$1))
;
return topo_sort_STAR_;
});
figwheel.client.file_reloading.get_all_dependencies = (function figwheel$client$file_reloading$get_all_dependencies(ns){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.get_requires);
return cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [ns], null))));
});
figwheel.client.file_reloading.get_all_dependents = (function figwheel$client$file_reloading$get_all_dependents(nss){
var topo_sort_SINGLEQUOTE_ = figwheel.client.file_reloading.build_topo_sort.call(null,figwheel.client.file_reloading.ns__GT_dependents);
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,figwheel.client.file_reloading.immutable_ns_QMARK_),cljs.core.reverse.call(null,cljs.core.apply.call(null,cljs.core.concat,topo_sort_SINGLEQUOTE_.call(null,cljs.core.set.call(null,nss)))));
});
figwheel.client.file_reloading.unprovide_BANG_ = (function figwheel$client$file_reloading$unprovide_BANG_(ns){
var path = figwheel.client.file_reloading.name__GT_path.call(null,ns);
goog.object.remove(goog.dependencies_.visited,path);

goog.object.remove(goog.dependencies_.written,path);

return goog.object.remove(goog.dependencies_.written,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(path)].join(''));
});
figwheel.client.file_reloading.resolve_ns = (function figwheel$client$file_reloading$resolve_ns(ns){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(goog.basePath),cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_reloading.name__GT_path.call(null,ns))].join('');
});
figwheel.client.file_reloading.addDependency = (function figwheel$client$file_reloading$addDependency(path,provides,requires){
var seq__33454 = cljs.core.seq.call(null,provides);
var chunk__33455 = null;
var count__33456 = (0);
var i__33457 = (0);
while(true){
if((i__33457 < count__33456)){
var prov = cljs.core._nth.call(null,chunk__33455,i__33457);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33458_33466 = cljs.core.seq.call(null,requires);
var chunk__33459_33467 = null;
var count__33460_33468 = (0);
var i__33461_33469 = (0);
while(true){
if((i__33461_33469 < count__33460_33468)){
var req_33470 = cljs.core._nth.call(null,chunk__33459_33467,i__33461_33469);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33470,prov);

var G__33471 = seq__33458_33466;
var G__33472 = chunk__33459_33467;
var G__33473 = count__33460_33468;
var G__33474 = (i__33461_33469 + (1));
seq__33458_33466 = G__33471;
chunk__33459_33467 = G__33472;
count__33460_33468 = G__33473;
i__33461_33469 = G__33474;
continue;
} else {
var temp__5457__auto___33475 = cljs.core.seq.call(null,seq__33458_33466);
if(temp__5457__auto___33475){
var seq__33458_33476__$1 = temp__5457__auto___33475;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33458_33476__$1)){
var c__31144__auto___33477 = cljs.core.chunk_first.call(null,seq__33458_33476__$1);
var G__33478 = cljs.core.chunk_rest.call(null,seq__33458_33476__$1);
var G__33479 = c__31144__auto___33477;
var G__33480 = cljs.core.count.call(null,c__31144__auto___33477);
var G__33481 = (0);
seq__33458_33466 = G__33478;
chunk__33459_33467 = G__33479;
count__33460_33468 = G__33480;
i__33461_33469 = G__33481;
continue;
} else {
var req_33482 = cljs.core.first.call(null,seq__33458_33476__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33482,prov);

var G__33483 = cljs.core.next.call(null,seq__33458_33476__$1);
var G__33484 = null;
var G__33485 = (0);
var G__33486 = (0);
seq__33458_33466 = G__33483;
chunk__33459_33467 = G__33484;
count__33460_33468 = G__33485;
i__33461_33469 = G__33486;
continue;
}
} else {
}
}
break;
}

var G__33487 = seq__33454;
var G__33488 = chunk__33455;
var G__33489 = count__33456;
var G__33490 = (i__33457 + (1));
seq__33454 = G__33487;
chunk__33455 = G__33488;
count__33456 = G__33489;
i__33457 = G__33490;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__33454);
if(temp__5457__auto__){
var seq__33454__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33454__$1)){
var c__31144__auto__ = cljs.core.chunk_first.call(null,seq__33454__$1);
var G__33491 = cljs.core.chunk_rest.call(null,seq__33454__$1);
var G__33492 = c__31144__auto__;
var G__33493 = cljs.core.count.call(null,c__31144__auto__);
var G__33494 = (0);
seq__33454 = G__33491;
chunk__33455 = G__33492;
count__33456 = G__33493;
i__33457 = G__33494;
continue;
} else {
var prov = cljs.core.first.call(null,seq__33454__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__33462_33495 = cljs.core.seq.call(null,requires);
var chunk__33463_33496 = null;
var count__33464_33497 = (0);
var i__33465_33498 = (0);
while(true){
if((i__33465_33498 < count__33464_33497)){
var req_33499 = cljs.core._nth.call(null,chunk__33463_33496,i__33465_33498);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33499,prov);

var G__33500 = seq__33462_33495;
var G__33501 = chunk__33463_33496;
var G__33502 = count__33464_33497;
var G__33503 = (i__33465_33498 + (1));
seq__33462_33495 = G__33500;
chunk__33463_33496 = G__33501;
count__33464_33497 = G__33502;
i__33465_33498 = G__33503;
continue;
} else {
var temp__5457__auto___33504__$1 = cljs.core.seq.call(null,seq__33462_33495);
if(temp__5457__auto___33504__$1){
var seq__33462_33505__$1 = temp__5457__auto___33504__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33462_33505__$1)){
var c__31144__auto___33506 = cljs.core.chunk_first.call(null,seq__33462_33505__$1);
var G__33507 = cljs.core.chunk_rest.call(null,seq__33462_33505__$1);
var G__33508 = c__31144__auto___33506;
var G__33509 = cljs.core.count.call(null,c__31144__auto___33506);
var G__33510 = (0);
seq__33462_33495 = G__33507;
chunk__33463_33496 = G__33508;
count__33464_33497 = G__33509;
i__33465_33498 = G__33510;
continue;
} else {
var req_33511 = cljs.core.first.call(null,seq__33462_33505__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_33511,prov);

var G__33512 = cljs.core.next.call(null,seq__33462_33505__$1);
var G__33513 = null;
var G__33514 = (0);
var G__33515 = (0);
seq__33462_33495 = G__33512;
chunk__33463_33496 = G__33513;
count__33464_33497 = G__33514;
i__33465_33498 = G__33515;
continue;
}
} else {
}
}
break;
}

var G__33516 = cljs.core.next.call(null,seq__33454__$1);
var G__33517 = null;
var G__33518 = (0);
var G__33519 = (0);
seq__33454 = G__33516;
chunk__33455 = G__33517;
count__33456 = G__33518;
i__33457 = G__33519;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.file_reloading.figwheel_require = (function figwheel$client$file_reloading$figwheel_require(src,reload){
goog.require = figwheel.client.file_reloading.figwheel_require;

if(cljs.core._EQ_.call(null,reload,"reload-all")){
var seq__33520_33524 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__33521_33525 = null;
var count__33522_33526 = (0);
var i__33523_33527 = (0);
while(true){
if((i__33523_33527 < count__33522_33526)){
var ns_33528 = cljs.core._nth.call(null,chunk__33521_33525,i__33523_33527);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33528);

var G__33529 = seq__33520_33524;
var G__33530 = chunk__33521_33525;
var G__33531 = count__33522_33526;
var G__33532 = (i__33523_33527 + (1));
seq__33520_33524 = G__33529;
chunk__33521_33525 = G__33530;
count__33522_33526 = G__33531;
i__33523_33527 = G__33532;
continue;
} else {
var temp__5457__auto___33533 = cljs.core.seq.call(null,seq__33520_33524);
if(temp__5457__auto___33533){
var seq__33520_33534__$1 = temp__5457__auto___33533;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__33520_33534__$1)){
var c__31144__auto___33535 = cljs.core.chunk_first.call(null,seq__33520_33534__$1);
var G__33536 = cljs.core.chunk_rest.call(null,seq__33520_33534__$1);
var G__33537 = c__31144__auto___33535;
var G__33538 = cljs.core.count.call(null,c__31144__auto___33535);
var G__33539 = (0);
seq__33520_33524 = G__33536;
chunk__33521_33525 = G__33537;
count__33522_33526 = G__33538;
i__33523_33527 = G__33539;
continue;
} else {
var ns_33540 = cljs.core.first.call(null,seq__33520_33534__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_33540);

var G__33541 = cljs.core.next.call(null,seq__33520_33534__$1);
var G__33542 = null;
var G__33543 = (0);
var G__33544 = (0);
seq__33520_33524 = G__33541;
chunk__33521_33525 = G__33542;
count__33522_33526 = G__33543;
i__33523_33527 = G__33544;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(reload)){
figwheel.client.file_reloading.unprovide_BANG_.call(null,src);
} else {
}

return goog.require_figwheel_backup_(src);
});
/**
 * Reusable browser REPL bootstrapping. Patches the essential functions
 *   in goog.base to support re-loading of namespaces after page load.
 */
figwheel.client.file_reloading.bootstrap_goog_base = (function figwheel$client$file_reloading$bootstrap_goog_base(){
if(cljs.core.truth_(COMPILED)){
return null;
} else {
goog.require_figwheel_backup_ = (function (){var or__30213__auto__ = goog.require__;
if(cljs.core.truth_(or__30213__auto__)){
return or__30213__auto__;
} else {
return goog.require;
}
})();

goog.isProvided_ = (function (name){
return false;
});

figwheel.client.file_reloading.setup_path__GT_name_BANG_.call(null);

figwheel.client.file_reloading.setup_ns__GT_dependents_BANG_.call(null);

goog.addDependency_figwheel_backup_ = goog.addDependency;

goog.addDependency = (function() { 
var G__33545__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__33545 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__33546__i = 0, G__33546__a = new Array(arguments.length -  0);
while (G__33546__i < G__33546__a.length) {G__33546__a[G__33546__i] = arguments[G__33546__i + 0]; ++G__33546__i;}
  args = new cljs.core.IndexedSeq(G__33546__a,0,null);
} 
return G__33545__delegate.call(this,args);};
G__33545.cljs$lang$maxFixedArity = 0;
G__33545.cljs$lang$applyTo = (function (arglist__33547){
var args = cljs.core.seq(arglist__33547);
return G__33545__delegate(args);
});
G__33545.cljs$core$IFn$_invoke$arity$variadic = G__33545__delegate;
return G__33545;
})()
;

goog.constructNamespace_("cljs.user");

goog.global.CLOSURE_IMPORT_SCRIPT = figwheel.client.file_reloading.queued_file_reload;

return goog.require = figwheel.client.file_reloading.figwheel_require;
}
});
figwheel.client.file_reloading.patch_goog_base = (function figwheel$client$file_reloading$patch_goog_base(){
if(typeof figwheel.client.file_reloading.bootstrapped_cljs !== 'undefined'){
return null;
} else {
return (
figwheel.client.file_reloading.bootstrapped_cljs = (function (){
figwheel.client.file_reloading.bootstrap_goog_base.call(null);

return true;
})()
)
;
}
});
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__33548_SHARP_,p2__33549_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33548_SHARP_)].join('')),p2__33549_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__33550_SHARP_,p2__33551_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__33550_SHARP_)].join(''),p2__33551_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__33552 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__33552.addCallback(((function (G__33552){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__33552))
);

G__33552.addErrback(((function (G__33552){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__33552))
);

return G__33552;
});
figwheel.client.file_reloading.write_script_tag_import = figwheel.client.file_reloading.reload_file_in_html_env;
goog.exportSymbol('figwheel.client.file_reloading.write_script_tag_import', figwheel.client.file_reloading.write_script_tag_import);
figwheel.client.file_reloading.worker_import_script = (function figwheel$client$file_reloading$worker_import_script(request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e33553){if((e33553 instanceof Error)){
var e = e33553;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33553;

}
}})());
});
goog.exportSymbol('figwheel.client.file_reloading.worker_import_script', figwheel.client.file_reloading.worker_import_script);
figwheel.client.file_reloading.create_node_script_import_fn = (function figwheel$client$file_reloading$create_node_script_import_fn(){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e33554){if((e33554 instanceof Error)){
var e = e33554;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e33554;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path))
});
goog.exportSymbol('figwheel.client.file_reloading.create_node_script_import_fn', figwheel.client.file_reloading.create_node_script_import_fn);
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__33555 = cljs.core._EQ_;
var expr__33556 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__33555.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__33556))){
return figwheel.client.file_reloading.create_node_script_import_fn.call(null);
} else {
if(cljs.core.truth_(pred__33555.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__33556))){
return figwheel.client.file_reloading.write_script_tag_import;
} else {
if(cljs.core.truth_(pred__33555.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__33556))){
return figwheel.client.file_reloading.worker_import_script;
} else {
return ((function (pred__33555,expr__33556){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__33555,expr__33556))
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__33558,callback){
var map__33559 = p__33558;
var map__33559__$1 = ((((!((map__33559 == null)))?((((map__33559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33559):map__33559);
var file_msg = map__33559__$1;
var request_url = cljs.core.get.call(null,map__33559__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return (function (){var or__30213__auto__ = goog.object.get(goog.global,"FIGWHEEL_IMPORT_SCRIPT");
if(cljs.core.truth_(or__30213__auto__)){
return or__30213__auto__;
} else {
return figwheel.client.file_reloading.reload_file_STAR_;
}
})().call(null,request_url,((function (map__33559,map__33559__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__33559,map__33559__$1,file_msg,request_url))
);
});
if(typeof figwheel.client.file_reloading.reload_chan !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_chan = cljs.core.async.chan.call(null);
}
if(typeof figwheel.client.file_reloading.on_load_callbacks !== 'undefined'){
} else {
figwheel.client.file_reloading.on_load_callbacks = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
}
if(typeof figwheel.client.file_reloading.dependencies_loaded !== 'undefined'){
} else {
figwheel.client.file_reloading.dependencies_loaded = cljs.core.atom.call(null,cljs.core.PersistentVector.EMPTY);
}
figwheel.client.file_reloading.blocking_load = (function figwheel$client$file_reloading$blocking_load(url){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.reload_file.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"request-url","request-url",2100346596),url], null),((function (out){
return (function (file_msg){
cljs.core.async.put_BANG_.call(null,out,file_msg);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
if(typeof figwheel.client.file_reloading.reloader_loop !== 'undefined'){
} else {
figwheel.client.file_reloading.reloader_loop = (function (){var c__33298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33298__auto__){
return (function (){
var f__33299__auto__ = (function (){var switch__33275__auto__ = ((function (c__33298__auto__){
return (function (state_33597){
var state_val_33598 = (state_33597[(1)]);
if((state_val_33598 === (7))){
var inst_33593 = (state_33597[(2)]);
var state_33597__$1 = state_33597;
var statearr_33599_33625 = state_33597__$1;
(statearr_33599_33625[(2)] = inst_33593);

(statearr_33599_33625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (1))){
var state_33597__$1 = state_33597;
var statearr_33600_33626 = state_33597__$1;
(statearr_33600_33626[(2)] = null);

(statearr_33600_33626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (4))){
var inst_33563 = (state_33597[(7)]);
var inst_33563__$1 = (state_33597[(2)]);
var state_33597__$1 = (function (){var statearr_33601 = state_33597;
(statearr_33601[(7)] = inst_33563__$1);

return statearr_33601;
})();
if(cljs.core.truth_(inst_33563__$1)){
var statearr_33602_33627 = state_33597__$1;
(statearr_33602_33627[(1)] = (5));

} else {
var statearr_33603_33628 = state_33597__$1;
(statearr_33603_33628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (15))){
var inst_33578 = (state_33597[(8)]);
var inst_33576 = (state_33597[(9)]);
var inst_33580 = inst_33578.call(null,inst_33576);
var state_33597__$1 = state_33597;
var statearr_33604_33629 = state_33597__$1;
(statearr_33604_33629[(2)] = inst_33580);

(statearr_33604_33629[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (13))){
var inst_33587 = (state_33597[(2)]);
var state_33597__$1 = state_33597;
var statearr_33605_33630 = state_33597__$1;
(statearr_33605_33630[(2)] = inst_33587);

(statearr_33605_33630[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (6))){
var state_33597__$1 = state_33597;
var statearr_33606_33631 = state_33597__$1;
(statearr_33606_33631[(2)] = null);

(statearr_33606_33631[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (17))){
var inst_33584 = (state_33597[(2)]);
var state_33597__$1 = state_33597;
var statearr_33607_33632 = state_33597__$1;
(statearr_33607_33632[(2)] = inst_33584);

(statearr_33607_33632[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (3))){
var inst_33595 = (state_33597[(2)]);
var state_33597__$1 = state_33597;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33597__$1,inst_33595);
} else {
if((state_val_33598 === (12))){
var state_33597__$1 = state_33597;
var statearr_33608_33633 = state_33597__$1;
(statearr_33608_33633[(2)] = null);

(statearr_33608_33633[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (2))){
var state_33597__$1 = state_33597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33597__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_33598 === (11))){
var inst_33568 = (state_33597[(10)]);
var inst_33574 = figwheel.client.file_reloading.blocking_load.call(null,inst_33568);
var state_33597__$1 = state_33597;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33597__$1,(14),inst_33574);
} else {
if((state_val_33598 === (9))){
var inst_33568 = (state_33597[(10)]);
var state_33597__$1 = state_33597;
if(cljs.core.truth_(inst_33568)){
var statearr_33609_33634 = state_33597__$1;
(statearr_33609_33634[(1)] = (11));

} else {
var statearr_33610_33635 = state_33597__$1;
(statearr_33610_33635[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (5))){
var inst_33563 = (state_33597[(7)]);
var inst_33569 = (state_33597[(11)]);
var inst_33568 = cljs.core.nth.call(null,inst_33563,(0),null);
var inst_33569__$1 = cljs.core.nth.call(null,inst_33563,(1),null);
var state_33597__$1 = (function (){var statearr_33611 = state_33597;
(statearr_33611[(11)] = inst_33569__$1);

(statearr_33611[(10)] = inst_33568);

return statearr_33611;
})();
if(cljs.core.truth_(inst_33569__$1)){
var statearr_33612_33636 = state_33597__$1;
(statearr_33612_33636[(1)] = (8));

} else {
var statearr_33613_33637 = state_33597__$1;
(statearr_33613_33637[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (14))){
var inst_33578 = (state_33597[(8)]);
var inst_33568 = (state_33597[(10)]);
var inst_33576 = (state_33597[(2)]);
var inst_33577 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_33578__$1 = cljs.core.get.call(null,inst_33577,inst_33568);
var state_33597__$1 = (function (){var statearr_33614 = state_33597;
(statearr_33614[(8)] = inst_33578__$1);

(statearr_33614[(9)] = inst_33576);

return statearr_33614;
})();
if(cljs.core.truth_(inst_33578__$1)){
var statearr_33615_33638 = state_33597__$1;
(statearr_33615_33638[(1)] = (15));

} else {
var statearr_33616_33639 = state_33597__$1;
(statearr_33616_33639[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (16))){
var inst_33576 = (state_33597[(9)]);
var inst_33582 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_33576);
var state_33597__$1 = state_33597;
var statearr_33617_33640 = state_33597__$1;
(statearr_33617_33640[(2)] = inst_33582);

(statearr_33617_33640[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (10))){
var inst_33589 = (state_33597[(2)]);
var state_33597__$1 = (function (){var statearr_33618 = state_33597;
(statearr_33618[(12)] = inst_33589);

return statearr_33618;
})();
var statearr_33619_33641 = state_33597__$1;
(statearr_33619_33641[(2)] = null);

(statearr_33619_33641[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33598 === (8))){
var inst_33569 = (state_33597[(11)]);
var inst_33571 = eval(inst_33569);
var state_33597__$1 = state_33597;
var statearr_33620_33642 = state_33597__$1;
(statearr_33620_33642[(2)] = inst_33571);

(statearr_33620_33642[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33298__auto__))
;
return ((function (switch__33275__auto__,c__33298__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__33276__auto__ = null;
var figwheel$client$file_reloading$state_machine__33276__auto____0 = (function (){
var statearr_33621 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33621[(0)] = figwheel$client$file_reloading$state_machine__33276__auto__);

(statearr_33621[(1)] = (1));

return statearr_33621;
});
var figwheel$client$file_reloading$state_machine__33276__auto____1 = (function (state_33597){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_33597);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33622){if((e33622 instanceof Object)){
var ex__33279__auto__ = e33622;
var statearr_33623_33643 = state_33597;
(statearr_33623_33643[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33597);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33644 = state_33597;
state_33597 = G__33644;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__33276__auto__ = function(state_33597){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__33276__auto____1.call(this,state_33597);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__33276__auto____0;
figwheel$client$file_reloading$state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__33276__auto____1;
return figwheel$client$file_reloading$state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33298__auto__))
})();
var state__33300__auto__ = (function (){var statearr_33624 = f__33299__auto__.call(null);
(statearr_33624[(6)] = c__33298__auto__);

return statearr_33624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33300__auto__);
});})(c__33298__auto__))
);

return c__33298__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(var_args){
var G__33646 = arguments.length;
switch (G__33646) {
case 1:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$1 = (function (url){
return figwheel.client.file_reloading.queued_file_reload.call(null,url,null);
});

figwheel.client.file_reloading.queued_file_reload.cljs$core$IFn$_invoke$arity$2 = (function (url,opt_source_text){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [url,opt_source_text], null));
});

figwheel.client.file_reloading.queued_file_reload.cljs$lang$maxFixedArity = 2;

figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__33648,callback){
var map__33649 = p__33648;
var map__33649__$1 = ((((!((map__33649 == null)))?((((map__33649.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33649.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33649):map__33649);
var file_msg = map__33649__$1;
var namespace = cljs.core.get.call(null,map__33649__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__33649,map__33649__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__33649,map__33649__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__33651){
var map__33652 = p__33651;
var map__33652__$1 = ((((!((map__33652 == null)))?((((map__33652.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33652.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33652):map__33652);
var file_msg = map__33652__$1;
var namespace = cljs.core.get.call(null,map__33652__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.ns_exists_QMARK_ = (function figwheel$client$file_reloading$ns_exists_QMARK_(namespace){
return !((cljs.core.reduce.call(null,cljs.core.fnil.call(null,goog.object.get,({})),goog.global,clojure.string.split.call(null,cljs.core.name.call(null,namespace),".")) == null));
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__33654){
var map__33655 = p__33654;
var map__33655__$1 = ((((!((map__33655 == null)))?((((map__33655.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33655.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33655):map__33655);
var file_msg = map__33655__$1;
var namespace = cljs.core.get.call(null,map__33655__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30201__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30201__auto__){
var or__30213__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30213__auto__)){
return or__30213__auto__;
} else {
var or__30213__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30213__auto____$1)){
return or__30213__auto____$1;
} else {
var or__30213__auto____$2 = figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
if(cljs.core.truth_(or__30213__auto____$2)){
return or__30213__auto____$2;
} else {
return figwheel.client.file_reloading.ns_exists_QMARK_.call(null,namespace);
}
}
}
} else {
return and__30201__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__33657,callback){
var map__33658 = p__33657;
var map__33658__$1 = ((((!((map__33658 == null)))?((((map__33658.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33658.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33658):map__33658);
var file_msg = map__33658__$1;
var request_url = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__33658__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

if(cljs.core.truth_(figwheel.client.file_reloading.reload_file_QMARK_.call(null,file_msg))){
return figwheel.client.file_reloading.require_with_callback.call(null,file_msg,callback);
} else {
figwheel.client.utils.debug_prn.call(null,["Figwheel: Not trying to load file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});
figwheel.client.file_reloading.reload_js_file = (function figwheel$client$file_reloading$reload_js_file(file_msg){
var out = cljs.core.async.chan.call(null);
figwheel.client.file_reloading.js_reload.call(null,file_msg,((function (out){
return (function (url){
cljs.core.async.put_BANG_.call(null,out,url);

return cljs.core.async.close_BANG_.call(null,out);
});})(out))
);

return out;
});
/**
 * Returns a chanel with one collection of loaded filenames on it.
 */
figwheel.client.file_reloading.load_all_js_files = (function figwheel$client$file_reloading$load_all_js_files(files){
var out = cljs.core.async.chan.call(null);
var c__33298__auto___33708 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33298__auto___33708,out){
return (function (){
var f__33299__auto__ = (function (){var switch__33275__auto__ = ((function (c__33298__auto___33708,out){
return (function (state_33693){
var state_val_33694 = (state_33693[(1)]);
if((state_val_33694 === (1))){
var inst_33667 = cljs.core.seq.call(null,files);
var inst_33668 = cljs.core.first.call(null,inst_33667);
var inst_33669 = cljs.core.next.call(null,inst_33667);
var inst_33670 = files;
var state_33693__$1 = (function (){var statearr_33695 = state_33693;
(statearr_33695[(7)] = inst_33669);

(statearr_33695[(8)] = inst_33670);

(statearr_33695[(9)] = inst_33668);

return statearr_33695;
})();
var statearr_33696_33709 = state_33693__$1;
(statearr_33696_33709[(2)] = null);

(statearr_33696_33709[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (2))){
var inst_33676 = (state_33693[(10)]);
var inst_33670 = (state_33693[(8)]);
var inst_33675 = cljs.core.seq.call(null,inst_33670);
var inst_33676__$1 = cljs.core.first.call(null,inst_33675);
var inst_33677 = cljs.core.next.call(null,inst_33675);
var inst_33678 = (inst_33676__$1 == null);
var inst_33679 = cljs.core.not.call(null,inst_33678);
var state_33693__$1 = (function (){var statearr_33697 = state_33693;
(statearr_33697[(10)] = inst_33676__$1);

(statearr_33697[(11)] = inst_33677);

return statearr_33697;
})();
if(inst_33679){
var statearr_33698_33710 = state_33693__$1;
(statearr_33698_33710[(1)] = (4));

} else {
var statearr_33699_33711 = state_33693__$1;
(statearr_33699_33711[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (3))){
var inst_33691 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33693__$1,inst_33691);
} else {
if((state_val_33694 === (4))){
var inst_33676 = (state_33693[(10)]);
var inst_33681 = figwheel.client.file_reloading.reload_js_file.call(null,inst_33676);
var state_33693__$1 = state_33693;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33693__$1,(7),inst_33681);
} else {
if((state_val_33694 === (5))){
var inst_33687 = cljs.core.async.close_BANG_.call(null,out);
var state_33693__$1 = state_33693;
var statearr_33700_33712 = state_33693__$1;
(statearr_33700_33712[(2)] = inst_33687);

(statearr_33700_33712[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (6))){
var inst_33689 = (state_33693[(2)]);
var state_33693__$1 = state_33693;
var statearr_33701_33713 = state_33693__$1;
(statearr_33701_33713[(2)] = inst_33689);

(statearr_33701_33713[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33694 === (7))){
var inst_33677 = (state_33693[(11)]);
var inst_33683 = (state_33693[(2)]);
var inst_33684 = cljs.core.async.put_BANG_.call(null,out,inst_33683);
var inst_33670 = inst_33677;
var state_33693__$1 = (function (){var statearr_33702 = state_33693;
(statearr_33702[(8)] = inst_33670);

(statearr_33702[(12)] = inst_33684);

return statearr_33702;
})();
var statearr_33703_33714 = state_33693__$1;
(statearr_33703_33714[(2)] = null);

(statearr_33703_33714[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
});})(c__33298__auto___33708,out))
;
return ((function (switch__33275__auto__,c__33298__auto___33708,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____0 = (function (){
var statearr_33704 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33704[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__);

(statearr_33704[(1)] = (1));

return statearr_33704;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____1 = (function (state_33693){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_33693);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33705){if((e33705 instanceof Object)){
var ex__33279__auto__ = e33705;
var statearr_33706_33715 = state_33693;
(statearr_33706_33715[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33693);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33705;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33716 = state_33693;
state_33693 = G__33716;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__ = function(state_33693){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____1.call(this,state_33693);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33298__auto___33708,out))
})();
var state__33300__auto__ = (function (){var statearr_33707 = f__33299__auto__.call(null);
(statearr_33707[(6)] = c__33298__auto___33708);

return statearr_33707;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33300__auto__);
});})(c__33298__auto___33708,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__33717,opts){
var map__33718 = p__33717;
var map__33718__$1 = ((((!((map__33718 == null)))?((((map__33718.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33718.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33718):map__33718);
var eval_body = cljs.core.get.call(null,map__33718__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__33718__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30201__auto__ = eval_body;
if(cljs.core.truth_(and__30201__auto__)){
return typeof eval_body === 'string';
} else {
return and__30201__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e33720){var e = e33720;
return figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Unable to evaluate ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));
}} else {
return null;
}
});
figwheel.client.file_reloading.expand_files = (function figwheel$client$file_reloading$expand_files(files){
var deps = figwheel.client.file_reloading.get_all_dependents.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,cljs.core.not,cljs.core.partial.call(null,cljs.core.re_matches,/figwheel\.connect.*/),new cljs.core.Keyword(null,"namespace","namespace",-377510372)),cljs.core.map.call(null,((function (deps){
return (function (n){
var temp__5455__auto__ = cljs.core.first.call(null,cljs.core.filter.call(null,((function (deps){
return (function (p1__33721_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33721_SHARP_),n);
});})(deps))
,files));
if(cljs.core.truth_(temp__5455__auto__)){
var file_msg = temp__5455__auto__;
return file_msg;
} else {
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372),new cljs.core.Keyword(null,"namespace","namespace",-377510372),n], null);
}
});})(deps))
,deps));
});
figwheel.client.file_reloading.sort_files = (function figwheel$client$file_reloading$sort_files(files){
if((cljs.core.count.call(null,files) <= (1))){
return files;
} else {
var keep_files = cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372),files));
return cljs.core.filter.call(null,cljs.core.comp.call(null,keep_files,new cljs.core.Keyword(null,"namespace","namespace",-377510372)),figwheel.client.file_reloading.expand_files.call(null,files));
}
});
figwheel.client.file_reloading.get_figwheel_always = (function figwheel$client$file_reloading$get_figwheel_always(){
return cljs.core.map.call(null,(function (p__33722){
var vec__33723 = p__33722;
var k = cljs.core.nth.call(null,vec__33723,(0),null);
var v = cljs.core.nth.call(null,vec__33723,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__33726){
var vec__33727 = p__33726;
var k = cljs.core.nth.call(null,vec__33727,(0),null);
var v = cljs.core.nth.call(null,vec__33727,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__33733,p__33734){
var map__33735 = p__33733;
var map__33735__$1 = ((((!((map__33735 == null)))?((((map__33735.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33735.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33735):map__33735);
var opts = map__33735__$1;
var before_jsload = cljs.core.get.call(null,map__33735__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__33735__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__33735__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__33736 = p__33734;
var map__33736__$1 = ((((!((map__33736 == null)))?((((map__33736.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33736.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33736):map__33736);
var msg = map__33736__$1;
var files = cljs.core.get.call(null,map__33736__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__33736__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__33736__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__33298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__33299__auto__ = (function (){var switch__33275__auto__ = ((function (c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_33890){
var state_val_33891 = (state_33890[(1)]);
if((state_val_33891 === (7))){
var inst_33751 = (state_33890[(7)]);
var inst_33750 = (state_33890[(8)]);
var inst_33752 = (state_33890[(9)]);
var inst_33753 = (state_33890[(10)]);
var inst_33758 = cljs.core._nth.call(null,inst_33751,inst_33753);
var inst_33759 = figwheel.client.file_reloading.eval_body.call(null,inst_33758,opts);
var inst_33760 = (inst_33753 + (1));
var tmp33892 = inst_33751;
var tmp33893 = inst_33750;
var tmp33894 = inst_33752;
var inst_33750__$1 = tmp33893;
var inst_33751__$1 = tmp33892;
var inst_33752__$1 = tmp33894;
var inst_33753__$1 = inst_33760;
var state_33890__$1 = (function (){var statearr_33895 = state_33890;
(statearr_33895[(7)] = inst_33751__$1);

(statearr_33895[(8)] = inst_33750__$1);

(statearr_33895[(11)] = inst_33759);

(statearr_33895[(9)] = inst_33752__$1);

(statearr_33895[(10)] = inst_33753__$1);

return statearr_33895;
})();
var statearr_33896_33979 = state_33890__$1;
(statearr_33896_33979[(2)] = null);

(statearr_33896_33979[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (20))){
var inst_33793 = (state_33890[(12)]);
var inst_33801 = figwheel.client.file_reloading.sort_files.call(null,inst_33793);
var state_33890__$1 = state_33890;
var statearr_33897_33980 = state_33890__$1;
(statearr_33897_33980[(2)] = inst_33801);

(statearr_33897_33980[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (27))){
var state_33890__$1 = state_33890;
var statearr_33898_33981 = state_33890__$1;
(statearr_33898_33981[(2)] = null);

(statearr_33898_33981[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (1))){
var inst_33742 = (state_33890[(13)]);
var inst_33739 = before_jsload.call(null,files);
var inst_33740 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_33741 = (function (){return ((function (inst_33742,inst_33739,inst_33740,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33730_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33730_SHARP_);
});
;})(inst_33742,inst_33739,inst_33740,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33742__$1 = cljs.core.filter.call(null,inst_33741,files);
var inst_33743 = cljs.core.not_empty.call(null,inst_33742__$1);
var state_33890__$1 = (function (){var statearr_33899 = state_33890;
(statearr_33899[(13)] = inst_33742__$1);

(statearr_33899[(14)] = inst_33739);

(statearr_33899[(15)] = inst_33740);

return statearr_33899;
})();
if(cljs.core.truth_(inst_33743)){
var statearr_33900_33982 = state_33890__$1;
(statearr_33900_33982[(1)] = (2));

} else {
var statearr_33901_33983 = state_33890__$1;
(statearr_33901_33983[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (24))){
var state_33890__$1 = state_33890;
var statearr_33902_33984 = state_33890__$1;
(statearr_33902_33984[(2)] = null);

(statearr_33902_33984[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (39))){
var inst_33843 = (state_33890[(16)]);
var state_33890__$1 = state_33890;
var statearr_33903_33985 = state_33890__$1;
(statearr_33903_33985[(2)] = inst_33843);

(statearr_33903_33985[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (46))){
var inst_33885 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33904_33986 = state_33890__$1;
(statearr_33904_33986[(2)] = inst_33885);

(statearr_33904_33986[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (4))){
var inst_33787 = (state_33890[(2)]);
var inst_33788 = cljs.core.List.EMPTY;
var inst_33789 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_33788);
var inst_33790 = (function (){return ((function (inst_33787,inst_33788,inst_33789,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33731_SHARP_){
var and__30201__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__33731_SHARP_);
if(cljs.core.truth_(and__30201__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__33731_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__33731_SHARP_)));
} else {
return and__30201__auto__;
}
});
;})(inst_33787,inst_33788,inst_33789,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33791 = cljs.core.filter.call(null,inst_33790,files);
var inst_33792 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_33793 = cljs.core.concat.call(null,inst_33791,inst_33792);
var state_33890__$1 = (function (){var statearr_33905 = state_33890;
(statearr_33905[(12)] = inst_33793);

(statearr_33905[(17)] = inst_33787);

(statearr_33905[(18)] = inst_33789);

return statearr_33905;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_33906_33987 = state_33890__$1;
(statearr_33906_33987[(1)] = (16));

} else {
var statearr_33907_33988 = state_33890__$1;
(statearr_33907_33988[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (15))){
var inst_33777 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33908_33989 = state_33890__$1;
(statearr_33908_33989[(2)] = inst_33777);

(statearr_33908_33989[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (21))){
var inst_33803 = (state_33890[(19)]);
var inst_33803__$1 = (state_33890[(2)]);
var inst_33804 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_33803__$1);
var state_33890__$1 = (function (){var statearr_33909 = state_33890;
(statearr_33909[(19)] = inst_33803__$1);

return statearr_33909;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33890__$1,(22),inst_33804);
} else {
if((state_val_33891 === (31))){
var inst_33888 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33890__$1,inst_33888);
} else {
if((state_val_33891 === (32))){
var inst_33843 = (state_33890[(16)]);
var inst_33848 = inst_33843.cljs$lang$protocol_mask$partition0$;
var inst_33849 = (inst_33848 & (64));
var inst_33850 = inst_33843.cljs$core$ISeq$;
var inst_33851 = (cljs.core.PROTOCOL_SENTINEL === inst_33850);
var inst_33852 = (inst_33849) || (inst_33851);
var state_33890__$1 = state_33890;
if(cljs.core.truth_(inst_33852)){
var statearr_33910_33990 = state_33890__$1;
(statearr_33910_33990[(1)] = (35));

} else {
var statearr_33911_33991 = state_33890__$1;
(statearr_33911_33991[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (40))){
var inst_33865 = (state_33890[(20)]);
var inst_33864 = (state_33890[(2)]);
var inst_33865__$1 = cljs.core.get.call(null,inst_33864,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_33866 = cljs.core.get.call(null,inst_33864,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_33867 = cljs.core.not_empty.call(null,inst_33865__$1);
var state_33890__$1 = (function (){var statearr_33912 = state_33890;
(statearr_33912[(20)] = inst_33865__$1);

(statearr_33912[(21)] = inst_33866);

return statearr_33912;
})();
if(cljs.core.truth_(inst_33867)){
var statearr_33913_33992 = state_33890__$1;
(statearr_33913_33992[(1)] = (41));

} else {
var statearr_33914_33993 = state_33890__$1;
(statearr_33914_33993[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (33))){
var state_33890__$1 = state_33890;
var statearr_33915_33994 = state_33890__$1;
(statearr_33915_33994[(2)] = false);

(statearr_33915_33994[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (13))){
var inst_33763 = (state_33890[(22)]);
var inst_33767 = cljs.core.chunk_first.call(null,inst_33763);
var inst_33768 = cljs.core.chunk_rest.call(null,inst_33763);
var inst_33769 = cljs.core.count.call(null,inst_33767);
var inst_33750 = inst_33768;
var inst_33751 = inst_33767;
var inst_33752 = inst_33769;
var inst_33753 = (0);
var state_33890__$1 = (function (){var statearr_33916 = state_33890;
(statearr_33916[(7)] = inst_33751);

(statearr_33916[(8)] = inst_33750);

(statearr_33916[(9)] = inst_33752);

(statearr_33916[(10)] = inst_33753);

return statearr_33916;
})();
var statearr_33917_33995 = state_33890__$1;
(statearr_33917_33995[(2)] = null);

(statearr_33917_33995[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (22))){
var inst_33806 = (state_33890[(23)]);
var inst_33811 = (state_33890[(24)]);
var inst_33807 = (state_33890[(25)]);
var inst_33803 = (state_33890[(19)]);
var inst_33806__$1 = (state_33890[(2)]);
var inst_33807__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33806__$1);
var inst_33808 = (function (){var all_files = inst_33803;
var res_SINGLEQUOTE_ = inst_33806__$1;
var res = inst_33807__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_33806,inst_33811,inst_33807,inst_33803,inst_33806__$1,inst_33807__$1,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__33732_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__33732_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_33806,inst_33811,inst_33807,inst_33803,inst_33806__$1,inst_33807__$1,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33809 = cljs.core.filter.call(null,inst_33808,inst_33806__$1);
var inst_33810 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_33811__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_33810);
var inst_33812 = cljs.core.not_empty.call(null,inst_33811__$1);
var state_33890__$1 = (function (){var statearr_33918 = state_33890;
(statearr_33918[(23)] = inst_33806__$1);

(statearr_33918[(24)] = inst_33811__$1);

(statearr_33918[(25)] = inst_33807__$1);

(statearr_33918[(26)] = inst_33809);

return statearr_33918;
})();
if(cljs.core.truth_(inst_33812)){
var statearr_33919_33996 = state_33890__$1;
(statearr_33919_33996[(1)] = (23));

} else {
var statearr_33920_33997 = state_33890__$1;
(statearr_33920_33997[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (36))){
var state_33890__$1 = state_33890;
var statearr_33921_33998 = state_33890__$1;
(statearr_33921_33998[(2)] = false);

(statearr_33921_33998[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (41))){
var inst_33865 = (state_33890[(20)]);
var inst_33869 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_33870 = cljs.core.map.call(null,inst_33869,inst_33865);
var inst_33871 = cljs.core.pr_str.call(null,inst_33870);
var inst_33872 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33871)].join('');
var inst_33873 = figwheel.client.utils.log.call(null,inst_33872);
var state_33890__$1 = state_33890;
var statearr_33922_33999 = state_33890__$1;
(statearr_33922_33999[(2)] = inst_33873);

(statearr_33922_33999[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (43))){
var inst_33866 = (state_33890[(21)]);
var inst_33876 = (state_33890[(2)]);
var inst_33877 = cljs.core.not_empty.call(null,inst_33866);
var state_33890__$1 = (function (){var statearr_33923 = state_33890;
(statearr_33923[(27)] = inst_33876);

return statearr_33923;
})();
if(cljs.core.truth_(inst_33877)){
var statearr_33924_34000 = state_33890__$1;
(statearr_33924_34000[(1)] = (44));

} else {
var statearr_33925_34001 = state_33890__$1;
(statearr_33925_34001[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (29))){
var inst_33806 = (state_33890[(23)]);
var inst_33811 = (state_33890[(24)]);
var inst_33807 = (state_33890[(25)]);
var inst_33809 = (state_33890[(26)]);
var inst_33803 = (state_33890[(19)]);
var inst_33843 = (state_33890[(16)]);
var inst_33839 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_33842 = (function (){var all_files = inst_33803;
var res_SINGLEQUOTE_ = inst_33806;
var res = inst_33807;
var files_not_loaded = inst_33809;
var dependencies_that_loaded = inst_33811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33806,inst_33811,inst_33807,inst_33809,inst_33803,inst_33843,inst_33839,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33841){
var map__33926 = p__33841;
var map__33926__$1 = ((((!((map__33926 == null)))?((((map__33926.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33926.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33926):map__33926);
var namespace = cljs.core.get.call(null,map__33926__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_data = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
if((meta_data == null)){
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);
} else {
if(cljs.core.truth_(meta_data.call(null,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179)))){
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179);
} else {
return new cljs.core.Keyword(null,"not-required","not-required",-950359114);

}
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33806,inst_33811,inst_33807,inst_33809,inst_33803,inst_33843,inst_33839,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33843__$1 = cljs.core.group_by.call(null,inst_33842,inst_33809);
var inst_33845 = (inst_33843__$1 == null);
var inst_33846 = cljs.core.not.call(null,inst_33845);
var state_33890__$1 = (function (){var statearr_33928 = state_33890;
(statearr_33928[(28)] = inst_33839);

(statearr_33928[(16)] = inst_33843__$1);

return statearr_33928;
})();
if(inst_33846){
var statearr_33929_34002 = state_33890__$1;
(statearr_33929_34002[(1)] = (32));

} else {
var statearr_33930_34003 = state_33890__$1;
(statearr_33930_34003[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (44))){
var inst_33866 = (state_33890[(21)]);
var inst_33879 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_33866);
var inst_33880 = cljs.core.pr_str.call(null,inst_33879);
var inst_33881 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_33880)].join('');
var inst_33882 = figwheel.client.utils.log.call(null,inst_33881);
var state_33890__$1 = state_33890;
var statearr_33931_34004 = state_33890__$1;
(statearr_33931_34004[(2)] = inst_33882);

(statearr_33931_34004[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (6))){
var inst_33784 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33932_34005 = state_33890__$1;
(statearr_33932_34005[(2)] = inst_33784);

(statearr_33932_34005[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (28))){
var inst_33809 = (state_33890[(26)]);
var inst_33836 = (state_33890[(2)]);
var inst_33837 = cljs.core.not_empty.call(null,inst_33809);
var state_33890__$1 = (function (){var statearr_33933 = state_33890;
(statearr_33933[(29)] = inst_33836);

return statearr_33933;
})();
if(cljs.core.truth_(inst_33837)){
var statearr_33934_34006 = state_33890__$1;
(statearr_33934_34006[(1)] = (29));

} else {
var statearr_33935_34007 = state_33890__$1;
(statearr_33935_34007[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (25))){
var inst_33807 = (state_33890[(25)]);
var inst_33823 = (state_33890[(2)]);
var inst_33824 = cljs.core.not_empty.call(null,inst_33807);
var state_33890__$1 = (function (){var statearr_33936 = state_33890;
(statearr_33936[(30)] = inst_33823);

return statearr_33936;
})();
if(cljs.core.truth_(inst_33824)){
var statearr_33937_34008 = state_33890__$1;
(statearr_33937_34008[(1)] = (26));

} else {
var statearr_33938_34009 = state_33890__$1;
(statearr_33938_34009[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (34))){
var inst_33859 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
if(cljs.core.truth_(inst_33859)){
var statearr_33939_34010 = state_33890__$1;
(statearr_33939_34010[(1)] = (38));

} else {
var statearr_33940_34011 = state_33890__$1;
(statearr_33940_34011[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (17))){
var state_33890__$1 = state_33890;
var statearr_33941_34012 = state_33890__$1;
(statearr_33941_34012[(2)] = recompile_dependents);

(statearr_33941_34012[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (3))){
var state_33890__$1 = state_33890;
var statearr_33942_34013 = state_33890__$1;
(statearr_33942_34013[(2)] = null);

(statearr_33942_34013[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (12))){
var inst_33780 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33943_34014 = state_33890__$1;
(statearr_33943_34014[(2)] = inst_33780);

(statearr_33943_34014[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (2))){
var inst_33742 = (state_33890[(13)]);
var inst_33749 = cljs.core.seq.call(null,inst_33742);
var inst_33750 = inst_33749;
var inst_33751 = null;
var inst_33752 = (0);
var inst_33753 = (0);
var state_33890__$1 = (function (){var statearr_33944 = state_33890;
(statearr_33944[(7)] = inst_33751);

(statearr_33944[(8)] = inst_33750);

(statearr_33944[(9)] = inst_33752);

(statearr_33944[(10)] = inst_33753);

return statearr_33944;
})();
var statearr_33945_34015 = state_33890__$1;
(statearr_33945_34015[(2)] = null);

(statearr_33945_34015[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (23))){
var inst_33806 = (state_33890[(23)]);
var inst_33811 = (state_33890[(24)]);
var inst_33807 = (state_33890[(25)]);
var inst_33809 = (state_33890[(26)]);
var inst_33803 = (state_33890[(19)]);
var inst_33814 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_33816 = (function (){var all_files = inst_33803;
var res_SINGLEQUOTE_ = inst_33806;
var res = inst_33807;
var files_not_loaded = inst_33809;
var dependencies_that_loaded = inst_33811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33806,inst_33811,inst_33807,inst_33809,inst_33803,inst_33814,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33815){
var map__33946 = p__33815;
var map__33946__$1 = ((((!((map__33946 == null)))?((((map__33946.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33946.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33946):map__33946);
var request_url = cljs.core.get.call(null,map__33946__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33806,inst_33811,inst_33807,inst_33809,inst_33803,inst_33814,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33817 = cljs.core.reverse.call(null,inst_33811);
var inst_33818 = cljs.core.map.call(null,inst_33816,inst_33817);
var inst_33819 = cljs.core.pr_str.call(null,inst_33818);
var inst_33820 = figwheel.client.utils.log.call(null,inst_33819);
var state_33890__$1 = (function (){var statearr_33948 = state_33890;
(statearr_33948[(31)] = inst_33814);

return statearr_33948;
})();
var statearr_33949_34016 = state_33890__$1;
(statearr_33949_34016[(2)] = inst_33820);

(statearr_33949_34016[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (35))){
var state_33890__$1 = state_33890;
var statearr_33950_34017 = state_33890__$1;
(statearr_33950_34017[(2)] = true);

(statearr_33950_34017[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (19))){
var inst_33793 = (state_33890[(12)]);
var inst_33799 = figwheel.client.file_reloading.expand_files.call(null,inst_33793);
var state_33890__$1 = state_33890;
var statearr_33951_34018 = state_33890__$1;
(statearr_33951_34018[(2)] = inst_33799);

(statearr_33951_34018[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (11))){
var state_33890__$1 = state_33890;
var statearr_33952_34019 = state_33890__$1;
(statearr_33952_34019[(2)] = null);

(statearr_33952_34019[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (9))){
var inst_33782 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33953_34020 = state_33890__$1;
(statearr_33953_34020[(2)] = inst_33782);

(statearr_33953_34020[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (5))){
var inst_33752 = (state_33890[(9)]);
var inst_33753 = (state_33890[(10)]);
var inst_33755 = (inst_33753 < inst_33752);
var inst_33756 = inst_33755;
var state_33890__$1 = state_33890;
if(cljs.core.truth_(inst_33756)){
var statearr_33954_34021 = state_33890__$1;
(statearr_33954_34021[(1)] = (7));

} else {
var statearr_33955_34022 = state_33890__$1;
(statearr_33955_34022[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (14))){
var inst_33763 = (state_33890[(22)]);
var inst_33772 = cljs.core.first.call(null,inst_33763);
var inst_33773 = figwheel.client.file_reloading.eval_body.call(null,inst_33772,opts);
var inst_33774 = cljs.core.next.call(null,inst_33763);
var inst_33750 = inst_33774;
var inst_33751 = null;
var inst_33752 = (0);
var inst_33753 = (0);
var state_33890__$1 = (function (){var statearr_33956 = state_33890;
(statearr_33956[(32)] = inst_33773);

(statearr_33956[(7)] = inst_33751);

(statearr_33956[(8)] = inst_33750);

(statearr_33956[(9)] = inst_33752);

(statearr_33956[(10)] = inst_33753);

return statearr_33956;
})();
var statearr_33957_34023 = state_33890__$1;
(statearr_33957_34023[(2)] = null);

(statearr_33957_34023[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (45))){
var state_33890__$1 = state_33890;
var statearr_33958_34024 = state_33890__$1;
(statearr_33958_34024[(2)] = null);

(statearr_33958_34024[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (26))){
var inst_33806 = (state_33890[(23)]);
var inst_33811 = (state_33890[(24)]);
var inst_33807 = (state_33890[(25)]);
var inst_33809 = (state_33890[(26)]);
var inst_33803 = (state_33890[(19)]);
var inst_33826 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_33828 = (function (){var all_files = inst_33803;
var res_SINGLEQUOTE_ = inst_33806;
var res = inst_33807;
var files_not_loaded = inst_33809;
var dependencies_that_loaded = inst_33811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33806,inst_33811,inst_33807,inst_33809,inst_33803,inst_33826,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__33827){
var map__33959 = p__33827;
var map__33959__$1 = ((((!((map__33959 == null)))?((((map__33959.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33959.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33959):map__33959);
var namespace = cljs.core.get.call(null,map__33959__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__33959__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33806,inst_33811,inst_33807,inst_33809,inst_33803,inst_33826,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33829 = cljs.core.map.call(null,inst_33828,inst_33807);
var inst_33830 = cljs.core.pr_str.call(null,inst_33829);
var inst_33831 = figwheel.client.utils.log.call(null,inst_33830);
var inst_33832 = (function (){var all_files = inst_33803;
var res_SINGLEQUOTE_ = inst_33806;
var res = inst_33807;
var files_not_loaded = inst_33809;
var dependencies_that_loaded = inst_33811;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33806,inst_33811,inst_33807,inst_33809,inst_33803,inst_33826,inst_33828,inst_33829,inst_33830,inst_33831,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_33806,inst_33811,inst_33807,inst_33809,inst_33803,inst_33826,inst_33828,inst_33829,inst_33830,inst_33831,state_val_33891,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_33833 = setTimeout(inst_33832,(10));
var state_33890__$1 = (function (){var statearr_33961 = state_33890;
(statearr_33961[(33)] = inst_33826);

(statearr_33961[(34)] = inst_33831);

return statearr_33961;
})();
var statearr_33962_34025 = state_33890__$1;
(statearr_33962_34025[(2)] = inst_33833);

(statearr_33962_34025[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (16))){
var state_33890__$1 = state_33890;
var statearr_33963_34026 = state_33890__$1;
(statearr_33963_34026[(2)] = reload_dependents);

(statearr_33963_34026[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (38))){
var inst_33843 = (state_33890[(16)]);
var inst_33861 = cljs.core.apply.call(null,cljs.core.hash_map,inst_33843);
var state_33890__$1 = state_33890;
var statearr_33964_34027 = state_33890__$1;
(statearr_33964_34027[(2)] = inst_33861);

(statearr_33964_34027[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (30))){
var state_33890__$1 = state_33890;
var statearr_33965_34028 = state_33890__$1;
(statearr_33965_34028[(2)] = null);

(statearr_33965_34028[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (10))){
var inst_33763 = (state_33890[(22)]);
var inst_33765 = cljs.core.chunked_seq_QMARK_.call(null,inst_33763);
var state_33890__$1 = state_33890;
if(inst_33765){
var statearr_33966_34029 = state_33890__$1;
(statearr_33966_34029[(1)] = (13));

} else {
var statearr_33967_34030 = state_33890__$1;
(statearr_33967_34030[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (18))){
var inst_33797 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
if(cljs.core.truth_(inst_33797)){
var statearr_33968_34031 = state_33890__$1;
(statearr_33968_34031[(1)] = (19));

} else {
var statearr_33969_34032 = state_33890__$1;
(statearr_33969_34032[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (42))){
var state_33890__$1 = state_33890;
var statearr_33970_34033 = state_33890__$1;
(statearr_33970_34033[(2)] = null);

(statearr_33970_34033[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (37))){
var inst_33856 = (state_33890[(2)]);
var state_33890__$1 = state_33890;
var statearr_33971_34034 = state_33890__$1;
(statearr_33971_34034[(2)] = inst_33856);

(statearr_33971_34034[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33891 === (8))){
var inst_33763 = (state_33890[(22)]);
var inst_33750 = (state_33890[(8)]);
var inst_33763__$1 = cljs.core.seq.call(null,inst_33750);
var state_33890__$1 = (function (){var statearr_33972 = state_33890;
(statearr_33972[(22)] = inst_33763__$1);

return statearr_33972;
})();
if(inst_33763__$1){
var statearr_33973_34035 = state_33890__$1;
(statearr_33973_34035[(1)] = (10));

} else {
var statearr_33974_34036 = state_33890__$1;
(statearr_33974_34036[(1)] = (11));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__33275__auto__,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____0 = (function (){
var statearr_33975 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33975[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__);

(statearr_33975[(1)] = (1));

return statearr_33975;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____1 = (function (state_33890){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_33890);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e33976){if((e33976 instanceof Object)){
var ex__33279__auto__ = e33976;
var statearr_33977_34037 = state_33890;
(statearr_33977_34037[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33890);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33976;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34038 = state_33890;
state_33890 = G__34038;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__ = function(state_33890){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____1.call(this,state_33890);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__33300__auto__ = (function (){var statearr_33978 = f__33299__auto__.call(null);
(statearr_33978[(6)] = c__33298__auto__);

return statearr_33978;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33300__auto__);
});})(c__33298__auto__,map__33735,map__33735__$1,opts,before_jsload,on_jsload,reload_dependents,map__33736,map__33736__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__33298__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__34041,link){
var map__34042 = p__34041;
var map__34042__$1 = ((((!((map__34042 == null)))?((((map__34042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34042):map__34042);
var file = cljs.core.get.call(null,map__34042__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__34042,map__34042__$1,file){
return (function (p1__34039_SHARP_,p2__34040_SHARP_){
if(cljs.core._EQ_.call(null,p1__34039_SHARP_,p2__34040_SHARP_)){
return p1__34039_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__34042,map__34042__$1,file))
,cljs.core.reverse.call(null,clojure.string.split.call(null,file,"/")),cljs.core.reverse.call(null,clojure.string.split.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href),"/")))));
var match_length = cljs.core.count.call(null,match);
var file_name_length = cljs.core.count.call(null,cljs.core.last.call(null,clojure.string.split.call(null,file,"/")));
if((match_length >= file_name_length)){
return new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"link","link",-1769163468),link,new cljs.core.Keyword(null,"link-href","link-href",-250644450),link_href,new cljs.core.Keyword(null,"match-length","match-length",1101537310),match_length,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083),cljs.core.count.call(null,figwheel.client.file_reloading.truncate_url.call(null,link_href))], null);
} else {
return null;
}
} else {
return null;
}
});
figwheel.client.file_reloading.get_correct_link = (function figwheel$client$file_reloading$get_correct_link(f_data){
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__34045){
var map__34046 = p__34045;
var map__34046__$1 = ((((!((map__34046 == null)))?((((map__34046.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34046.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34046):map__34046);
var match_length = cljs.core.get.call(null,map__34046__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__34046__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__34044_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__34044_SHARP_);
}),figwheel.client.file_reloading.current_links.call(null))));
if(cljs.core.truth_(temp__5457__auto__)){
var res = temp__5457__auto__;
return new cljs.core.Keyword(null,"link","link",-1769163468).cljs$core$IFn$_invoke$arity$1(res);
} else {
return null;
}
});
figwheel.client.file_reloading.clone_link = (function figwheel$client$file_reloading$clone_link(link,url){
var clone = document.createElement("link");
clone.rel = "stylesheet";

clone.media = link.media;

clone.disabled = link.disabled;

clone.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return clone;
});
figwheel.client.file_reloading.create_link = (function figwheel$client$file_reloading$create_link(url){
var link = document.createElement("link");
link.rel = "stylesheet";

link.href = figwheel.client.file_reloading.add_cache_buster.call(null,url);

return link;
});
figwheel.client.file_reloading.distinctify = (function figwheel$client$file_reloading$distinctify(key,seqq){
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__34048_SHARP_,p2__34049_SHARP_){
return cljs.core.assoc.call(null,p1__34048_SHARP_,cljs.core.get.call(null,p2__34049_SHARP_,key),p2__34049_SHARP_);
}),cljs.core.PersistentArrayMap.EMPTY,seqq));
});
figwheel.client.file_reloading.add_link_to_document = (function figwheel$client$file_reloading$add_link_to_document(orig_link,klone,finished_fn){
var parent = orig_link.parentNode;
if(cljs.core._EQ_.call(null,orig_link,parent.lastChild)){
parent.appendChild(klone);
} else {
parent.insertBefore(klone,orig_link.nextSibling);
}

return setTimeout(((function (parent){
return (function (){
parent.removeChild(orig_link);

return finished_fn.call(null);
});})(parent))
,(300));
});
if(typeof figwheel.client.file_reloading.reload_css_deferred_chain !== 'undefined'){
} else {
figwheel.client.file_reloading.reload_css_deferred_chain = cljs.core.atom.call(null,goog.async.Deferred.succeed());
}
figwheel.client.file_reloading.reload_css_file = (function figwheel$client$file_reloading$reload_css_file(f_data,fin){
var temp__5455__auto__ = figwheel.client.file_reloading.get_correct_link.call(null,f_data);
if(cljs.core.truth_(temp__5455__auto__)){
var link = temp__5455__auto__;
return figwheel.client.file_reloading.add_link_to_document.call(null,link,figwheel.client.file_reloading.clone_link.call(null,link,link.href),((function (link,temp__5455__auto__){
return (function (){
return fin.call(null,cljs.core.assoc.call(null,f_data,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),true));
});})(link,temp__5455__auto__))
);
} else {
return fin.call(null,f_data);
}
});
figwheel.client.file_reloading.reload_css_files_STAR_ = (function figwheel$client$file_reloading$reload_css_files_STAR_(deferred,f_datas,on_cssload){
return figwheel.client.utils.liftContD.call(null,figwheel.client.utils.mapConcatD.call(null,deferred,figwheel.client.file_reloading.reload_css_file,f_datas),(function (f_datas_SINGLEQUOTE_,fin){
var loaded_f_datas_34050 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_34050);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_34050);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__34051,p__34052){
var map__34053 = p__34051;
var map__34053__$1 = ((((!((map__34053 == null)))?((((map__34053.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34053.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34053):map__34053);
var on_cssload = cljs.core.get.call(null,map__34053__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__34054 = p__34052;
var map__34054__$1 = ((((!((map__34054 == null)))?((((map__34054.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34054.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34054):map__34054);
var files_msg = map__34054__$1;
var files = cljs.core.get.call(null,map__34054__$1,new cljs.core.Keyword(null,"files","files",-472457450));
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
var temp__5457__auto__ = cljs.core.not_empty.call(null,figwheel.client.file_reloading.distinctify.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files));
if(cljs.core.truth_(temp__5457__auto__)){
var f_datas = temp__5457__auto__;
return cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.reload_css_deferred_chain,figwheel.client.file_reloading.reload_css_files_STAR_,f_datas,on_cssload);
} else {
return null;
}
} else {
return null;
}
});

//# sourceMappingURL=file_reloading.js.map?rel=1518813254149
