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
var or__30023__auto__ = (cljs.core.map_QMARK_.call(null,m)) && (typeof new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(m) === 'string') && (((new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) == null)) || (typeof new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(m) === 'string')) && (cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"type","type",1174270348).cljs$core$IFn$_invoke$arity$1(m),new cljs.core.Keyword(null,"namespace","namespace",-377510372)));
if(or__30023__auto__){
return or__30023__auto__;
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
var or__30023__auto__ = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, ["cljs.nodejs",null,"goog",null,"cljs.core",null], null), null).call(null,name);
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
var or__30023__auto____$1 = goog.string.startsWith("clojure.",name);
if(cljs.core.truth_(or__30023__auto____$1)){
return or__30023__auto____$1;
} else {
return goog.string.startsWith("goog.",name);
}
}
});
figwheel.client.file_reloading.get_requires = (function figwheel$client$file_reloading$get_requires(ns){
return cljs.core.set.call(null,cljs.core.filter.call(null,(function (p1__37422_SHARP_){
return cljs.core.not.call(null,figwheel.client.file_reloading.immutable_ns_QMARK_.call(null,p1__37422_SHARP_));
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
var seq__37423 = cljs.core.seq.call(null,figwheel.client.file_reloading.path__GT_name.call(null,k));
var chunk__37424 = null;
var count__37425 = (0);
var i__37426 = (0);
while(true){
if((i__37426 < count__37425)){
var n = cljs.core._nth.call(null,chunk__37424,i__37426);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37427 = seq__37423;
var G__37428 = chunk__37424;
var G__37429 = count__37425;
var G__37430 = (i__37426 + (1));
seq__37423 = G__37427;
chunk__37424 = G__37428;
count__37425 = G__37429;
i__37426 = G__37430;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37423);
if(temp__5457__auto__){
var seq__37423__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37423__$1)){
var c__30954__auto__ = cljs.core.chunk_first.call(null,seq__37423__$1);
var G__37431 = cljs.core.chunk_rest.call(null,seq__37423__$1);
var G__37432 = c__30954__auto__;
var G__37433 = cljs.core.count.call(null,c__30954__auto__);
var G__37434 = (0);
seq__37423 = G__37431;
chunk__37424 = G__37432;
count__37425 = G__37433;
i__37426 = G__37434;
continue;
} else {
var n = cljs.core.first.call(null,seq__37423__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,k_SINGLEQUOTE_,n);

var G__37435 = cljs.core.next.call(null,seq__37423__$1);
var G__37436 = null;
var G__37437 = (0);
var G__37438 = (0);
seq__37423 = G__37435;
chunk__37424 = G__37436;
count__37425 = G__37437;
i__37426 = G__37438;
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

var seq__37448_37456 = cljs.core.seq.call(null,deps);
var chunk__37449_37457 = null;
var count__37450_37458 = (0);
var i__37451_37459 = (0);
while(true){
if((i__37451_37459 < count__37450_37458)){
var dep_37460 = cljs.core._nth.call(null,chunk__37449_37457,i__37451_37459);
topo_sort_helper_STAR_.call(null,dep_37460,(depth + (1)),state);

var G__37461 = seq__37448_37456;
var G__37462 = chunk__37449_37457;
var G__37463 = count__37450_37458;
var G__37464 = (i__37451_37459 + (1));
seq__37448_37456 = G__37461;
chunk__37449_37457 = G__37462;
count__37450_37458 = G__37463;
i__37451_37459 = G__37464;
continue;
} else {
var temp__5457__auto___37465 = cljs.core.seq.call(null,seq__37448_37456);
if(temp__5457__auto___37465){
var seq__37448_37466__$1 = temp__5457__auto___37465;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37448_37466__$1)){
var c__30954__auto___37467 = cljs.core.chunk_first.call(null,seq__37448_37466__$1);
var G__37468 = cljs.core.chunk_rest.call(null,seq__37448_37466__$1);
var G__37469 = c__30954__auto___37467;
var G__37470 = cljs.core.count.call(null,c__30954__auto___37467);
var G__37471 = (0);
seq__37448_37456 = G__37468;
chunk__37449_37457 = G__37469;
count__37450_37458 = G__37470;
i__37451_37459 = G__37471;
continue;
} else {
var dep_37472 = cljs.core.first.call(null,seq__37448_37466__$1);
topo_sort_helper_STAR_.call(null,dep_37472,(depth + (1)),state);

var G__37473 = cljs.core.next.call(null,seq__37448_37466__$1);
var G__37474 = null;
var G__37475 = (0);
var G__37476 = (0);
seq__37448_37456 = G__37473;
chunk__37449_37457 = G__37474;
count__37450_37458 = G__37475;
i__37451_37459 = G__37476;
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
return (function figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_(p__37452){
var vec__37453 = p__37452;
var seq__37454 = cljs.core.seq.call(null,vec__37453);
var first__37455 = cljs.core.first.call(null,seq__37454);
var seq__37454__$1 = cljs.core.next.call(null,seq__37454);
var x = first__37455;
var xs = seq__37454__$1;
if((x == null)){
return cljs.core.List.EMPTY;
} else {
return cljs.core.cons.call(null,x,figwheel$client$file_reloading$build_topo_sort_$_elim_dups_STAR_.call(null,cljs.core.map.call(null,((function (vec__37453,seq__37454,first__37455,seq__37454__$1,x,xs,get_deps__$1){
return (function (p1__37439_SHARP_){
return clojure.set.difference.call(null,p1__37439_SHARP_,x);
});})(vec__37453,seq__37454,first__37455,seq__37454__$1,x,xs,get_deps__$1))
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
var seq__37477 = cljs.core.seq.call(null,provides);
var chunk__37478 = null;
var count__37479 = (0);
var i__37480 = (0);
while(true){
if((i__37480 < count__37479)){
var prov = cljs.core._nth.call(null,chunk__37478,i__37480);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37481_37489 = cljs.core.seq.call(null,requires);
var chunk__37482_37490 = null;
var count__37483_37491 = (0);
var i__37484_37492 = (0);
while(true){
if((i__37484_37492 < count__37483_37491)){
var req_37493 = cljs.core._nth.call(null,chunk__37482_37490,i__37484_37492);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37493,prov);

var G__37494 = seq__37481_37489;
var G__37495 = chunk__37482_37490;
var G__37496 = count__37483_37491;
var G__37497 = (i__37484_37492 + (1));
seq__37481_37489 = G__37494;
chunk__37482_37490 = G__37495;
count__37483_37491 = G__37496;
i__37484_37492 = G__37497;
continue;
} else {
var temp__5457__auto___37498 = cljs.core.seq.call(null,seq__37481_37489);
if(temp__5457__auto___37498){
var seq__37481_37499__$1 = temp__5457__auto___37498;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37481_37499__$1)){
var c__30954__auto___37500 = cljs.core.chunk_first.call(null,seq__37481_37499__$1);
var G__37501 = cljs.core.chunk_rest.call(null,seq__37481_37499__$1);
var G__37502 = c__30954__auto___37500;
var G__37503 = cljs.core.count.call(null,c__30954__auto___37500);
var G__37504 = (0);
seq__37481_37489 = G__37501;
chunk__37482_37490 = G__37502;
count__37483_37491 = G__37503;
i__37484_37492 = G__37504;
continue;
} else {
var req_37505 = cljs.core.first.call(null,seq__37481_37499__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37505,prov);

var G__37506 = cljs.core.next.call(null,seq__37481_37499__$1);
var G__37507 = null;
var G__37508 = (0);
var G__37509 = (0);
seq__37481_37489 = G__37506;
chunk__37482_37490 = G__37507;
count__37483_37491 = G__37508;
i__37484_37492 = G__37509;
continue;
}
} else {
}
}
break;
}

var G__37510 = seq__37477;
var G__37511 = chunk__37478;
var G__37512 = count__37479;
var G__37513 = (i__37480 + (1));
seq__37477 = G__37510;
chunk__37478 = G__37511;
count__37479 = G__37512;
i__37480 = G__37513;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__37477);
if(temp__5457__auto__){
var seq__37477__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37477__$1)){
var c__30954__auto__ = cljs.core.chunk_first.call(null,seq__37477__$1);
var G__37514 = cljs.core.chunk_rest.call(null,seq__37477__$1);
var G__37515 = c__30954__auto__;
var G__37516 = cljs.core.count.call(null,c__30954__auto__);
var G__37517 = (0);
seq__37477 = G__37514;
chunk__37478 = G__37515;
count__37479 = G__37516;
i__37480 = G__37517;
continue;
} else {
var prov = cljs.core.first.call(null,seq__37477__$1);
figwheel.client.file_reloading.path_to_name_BANG_.call(null,path,prov);

var seq__37485_37518 = cljs.core.seq.call(null,requires);
var chunk__37486_37519 = null;
var count__37487_37520 = (0);
var i__37488_37521 = (0);
while(true){
if((i__37488_37521 < count__37487_37520)){
var req_37522 = cljs.core._nth.call(null,chunk__37486_37519,i__37488_37521);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37522,prov);

var G__37523 = seq__37485_37518;
var G__37524 = chunk__37486_37519;
var G__37525 = count__37487_37520;
var G__37526 = (i__37488_37521 + (1));
seq__37485_37518 = G__37523;
chunk__37486_37519 = G__37524;
count__37487_37520 = G__37525;
i__37488_37521 = G__37526;
continue;
} else {
var temp__5457__auto___37527__$1 = cljs.core.seq.call(null,seq__37485_37518);
if(temp__5457__auto___37527__$1){
var seq__37485_37528__$1 = temp__5457__auto___37527__$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37485_37528__$1)){
var c__30954__auto___37529 = cljs.core.chunk_first.call(null,seq__37485_37528__$1);
var G__37530 = cljs.core.chunk_rest.call(null,seq__37485_37528__$1);
var G__37531 = c__30954__auto___37529;
var G__37532 = cljs.core.count.call(null,c__30954__auto___37529);
var G__37533 = (0);
seq__37485_37518 = G__37530;
chunk__37486_37519 = G__37531;
count__37487_37520 = G__37532;
i__37488_37521 = G__37533;
continue;
} else {
var req_37534 = cljs.core.first.call(null,seq__37485_37528__$1);
figwheel.client.file_reloading.name_to_parent_BANG_.call(null,req_37534,prov);

var G__37535 = cljs.core.next.call(null,seq__37485_37528__$1);
var G__37536 = null;
var G__37537 = (0);
var G__37538 = (0);
seq__37485_37518 = G__37535;
chunk__37486_37519 = G__37536;
count__37487_37520 = G__37537;
i__37488_37521 = G__37538;
continue;
}
} else {
}
}
break;
}

var G__37539 = cljs.core.next.call(null,seq__37477__$1);
var G__37540 = null;
var G__37541 = (0);
var G__37542 = (0);
seq__37477 = G__37539;
chunk__37478 = G__37540;
count__37479 = G__37541;
i__37480 = G__37542;
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
var seq__37543_37547 = cljs.core.seq.call(null,figwheel.client.file_reloading.get_all_dependencies.call(null,src));
var chunk__37544_37548 = null;
var count__37545_37549 = (0);
var i__37546_37550 = (0);
while(true){
if((i__37546_37550 < count__37545_37549)){
var ns_37551 = cljs.core._nth.call(null,chunk__37544_37548,i__37546_37550);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37551);

var G__37552 = seq__37543_37547;
var G__37553 = chunk__37544_37548;
var G__37554 = count__37545_37549;
var G__37555 = (i__37546_37550 + (1));
seq__37543_37547 = G__37552;
chunk__37544_37548 = G__37553;
count__37545_37549 = G__37554;
i__37546_37550 = G__37555;
continue;
} else {
var temp__5457__auto___37556 = cljs.core.seq.call(null,seq__37543_37547);
if(temp__5457__auto___37556){
var seq__37543_37557__$1 = temp__5457__auto___37556;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__37543_37557__$1)){
var c__30954__auto___37558 = cljs.core.chunk_first.call(null,seq__37543_37557__$1);
var G__37559 = cljs.core.chunk_rest.call(null,seq__37543_37557__$1);
var G__37560 = c__30954__auto___37558;
var G__37561 = cljs.core.count.call(null,c__30954__auto___37558);
var G__37562 = (0);
seq__37543_37547 = G__37559;
chunk__37544_37548 = G__37560;
count__37545_37549 = G__37561;
i__37546_37550 = G__37562;
continue;
} else {
var ns_37563 = cljs.core.first.call(null,seq__37543_37557__$1);
figwheel.client.file_reloading.unprovide_BANG_.call(null,ns_37563);

var G__37564 = cljs.core.next.call(null,seq__37543_37557__$1);
var G__37565 = null;
var G__37566 = (0);
var G__37567 = (0);
seq__37543_37547 = G__37564;
chunk__37544_37548 = G__37565;
count__37545_37549 = G__37566;
i__37546_37550 = G__37567;
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
goog.require_figwheel_backup_ = (function (){var or__30023__auto__ = goog.require__;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
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
var G__37568__delegate = function (args){
cljs.core.apply.call(null,figwheel.client.file_reloading.addDependency,args);

return cljs.core.apply.call(null,goog.addDependency_figwheel_backup_,args);
};
var G__37568 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37569__i = 0, G__37569__a = new Array(arguments.length -  0);
while (G__37569__i < G__37569__a.length) {G__37569__a[G__37569__i] = arguments[G__37569__i + 0]; ++G__37569__i;}
  args = new cljs.core.IndexedSeq(G__37569__a,0,null);
} 
return G__37568__delegate.call(this,args);};
G__37568.cljs$lang$maxFixedArity = 0;
G__37568.cljs$lang$applyTo = (function (arglist__37570){
var args = cljs.core.seq(arglist__37570);
return G__37568__delegate(args);
});
G__37568.cljs$core$IFn$_invoke$arity$variadic = G__37568__delegate;
return G__37568;
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
figwheel.client.file_reloading.gloader = ((typeof goog.net.jsloader.safeLoad !== 'undefined')?(function (p1__37571_SHARP_,p2__37572_SHARP_){
return goog.net.jsloader.safeLoad(goog.html.legacyconversions.trustedResourceUrlFromString([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37571_SHARP_)].join('')),p2__37572_SHARP_);
}):((typeof goog.net.jsloader.load !== 'undefined')?(function (p1__37573_SHARP_,p2__37574_SHARP_){
return goog.net.jsloader.load([cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37573_SHARP_)].join(''),p2__37574_SHARP_);
}):(function(){throw cljs.core.ex_info.call(null,"No remote script loading function found.",cljs.core.PersistentArrayMap.EMPTY)})()
));
figwheel.client.file_reloading.reload_file_in_html_env = (function figwheel$client$file_reloading$reload_file_in_html_env(request_url,callback){

var G__37575 = figwheel.client.file_reloading.gloader.call(null,figwheel.client.file_reloading.add_cache_buster.call(null,request_url),({"cleanupWhenDone": true}));
G__37575.addCallback(((function (G__37575){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [true], null));
});})(G__37575))
);

G__37575.addErrback(((function (G__37575){
return (function (){
return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [false], null));
});})(G__37575))
);

return G__37575;
});
figwheel.client.file_reloading.reload_file_STAR_ = (function (){var pred__37576 = cljs.core._EQ_;
var expr__37577 = figwheel.client.utils.host_env_QMARK_.call(null);
if(cljs.core.truth_(pred__37576.call(null,new cljs.core.Keyword(null,"node","node",581201198),expr__37577))){
var node_path_lib = require("path");
var util_pattern = [cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.sep),cljs.core.str.cljs$core$IFn$_invoke$arity$1(node_path_lib.join("goog","bootstrap","nodejs.js"))].join('');
var util_path = goog.object.findKey(require.cache,((function (node_path_lib,util_pattern,pred__37576,expr__37577){
return (function (v,k,o){
return goog.string.endsWith(k,util_pattern);
});})(node_path_lib,util_pattern,pred__37576,expr__37577))
);
var parts = cljs.core.pop.call(null,cljs.core.pop.call(null,clojure.string.split.call(null,util_path,/[\/\\]/)));
var root_path = clojure.string.join.call(null,node_path_lib.sep,parts);
return ((function (node_path_lib,util_pattern,util_path,parts,root_path,pred__37576,expr__37577){
return (function (request_url,callback){

var cache_path = node_path_lib.resolve(root_path,request_url);
goog.object.remove(require.cache,cache_path);

return callback.call(null,(function (){try{return require(cache_path);
}catch (e37579){if((e37579 instanceof Error)){
var e = e37579;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cache_path)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37579;

}
}})());
});
;})(node_path_lib,util_pattern,util_path,parts,root_path,pred__37576,expr__37577))
} else {
if(cljs.core.truth_(pred__37576.call(null,new cljs.core.Keyword(null,"html","html",-998796897),expr__37577))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37576.call(null,new cljs.core.Keyword(null,"react-native","react-native",-1543085138),expr__37577))){
return figwheel.client.file_reloading.reload_file_in_html_env;
} else {
if(cljs.core.truth_(pred__37576.call(null,new cljs.core.Keyword(null,"worker","worker",938239996),expr__37577))){
return ((function (pred__37576,expr__37577){
return (function (request_url,callback){

return callback.call(null,(function (){try{self.importScripts(figwheel.client.file_reloading.add_cache_buster.call(null,request_url));

return true;
}catch (e37580){if((e37580 instanceof Error)){
var e = e37580;
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),e.stack);

return false;
} else {
throw e37580;

}
}})());
});
;})(pred__37576,expr__37577))
} else {
return ((function (pred__37576,expr__37577){
return (function (a,b){
throw "Reload not defined for this platform";
});
;})(pred__37576,expr__37577))
}
}
}
}
})();
figwheel.client.file_reloading.reload_file = (function figwheel$client$file_reloading$reload_file(p__37581,callback){
var map__37582 = p__37581;
var map__37582__$1 = ((((!((map__37582 == null)))?((((map__37582.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37582.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37582):map__37582);
var file_msg = map__37582__$1;
var request_url = cljs.core.get.call(null,map__37582__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));

figwheel.client.utils.debug_prn.call(null,["FigWheel: Attempting to load ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return figwheel.client.file_reloading.reload_file_STAR_.call(null,request_url,((function (map__37582,map__37582__$1,file_msg,request_url){
return (function (success_QMARK_){
if(cljs.core.truth_(success_QMARK_)){
figwheel.client.utils.debug_prn.call(null,["FigWheel: Successfully loaded ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.assoc.call(null,file_msg,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),true)], null));
} else {
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"error","error",-978969032),["Figwheel: Error loading file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(request_url)].join(''));

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [file_msg], null));
}
});})(map__37582,map__37582__$1,file_msg,request_url))
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
figwheel.client.file_reloading.reloader_loop = (function (){var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__){
return (function (state_37606){
var state_val_37607 = (state_37606[(1)]);
if((state_val_37607 === (7))){
var inst_37602 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
var statearr_37608_37625 = state_37606__$1;
(statearr_37608_37625[(2)] = inst_37602);

(statearr_37608_37625[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (1))){
var state_37606__$1 = state_37606;
var statearr_37609_37626 = state_37606__$1;
(statearr_37609_37626[(2)] = null);

(statearr_37609_37626[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (4))){
var inst_37586 = (state_37606[(7)]);
var inst_37586__$1 = (state_37606[(2)]);
var state_37606__$1 = (function (){var statearr_37610 = state_37606;
(statearr_37610[(7)] = inst_37586__$1);

return statearr_37610;
})();
if(cljs.core.truth_(inst_37586__$1)){
var statearr_37611_37627 = state_37606__$1;
(statearr_37611_37627[(1)] = (5));

} else {
var statearr_37612_37628 = state_37606__$1;
(statearr_37612_37628[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (6))){
var state_37606__$1 = state_37606;
var statearr_37613_37629 = state_37606__$1;
(statearr_37613_37629[(2)] = null);

(statearr_37613_37629[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (3))){
var inst_37604 = (state_37606[(2)]);
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37606__$1,inst_37604);
} else {
if((state_val_37607 === (2))){
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37606__$1,(4),figwheel.client.file_reloading.reload_chan);
} else {
if((state_val_37607 === (11))){
var inst_37598 = (state_37606[(2)]);
var state_37606__$1 = (function (){var statearr_37614 = state_37606;
(statearr_37614[(8)] = inst_37598);

return statearr_37614;
})();
var statearr_37615_37630 = state_37606__$1;
(statearr_37615_37630[(2)] = null);

(statearr_37615_37630[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (9))){
var inst_37590 = (state_37606[(9)]);
var inst_37592 = (state_37606[(10)]);
var inst_37594 = inst_37592.call(null,inst_37590);
var state_37606__$1 = state_37606;
var statearr_37616_37631 = state_37606__$1;
(statearr_37616_37631[(2)] = inst_37594);

(statearr_37616_37631[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (5))){
var inst_37586 = (state_37606[(7)]);
var inst_37588 = figwheel.client.file_reloading.blocking_load.call(null,inst_37586);
var state_37606__$1 = state_37606;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37606__$1,(8),inst_37588);
} else {
if((state_val_37607 === (10))){
var inst_37590 = (state_37606[(9)]);
var inst_37596 = cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,cljs.core.conj,inst_37590);
var state_37606__$1 = state_37606;
var statearr_37617_37632 = state_37606__$1;
(statearr_37617_37632[(2)] = inst_37596);

(statearr_37617_37632[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37607 === (8))){
var inst_37586 = (state_37606[(7)]);
var inst_37592 = (state_37606[(10)]);
var inst_37590 = (state_37606[(2)]);
var inst_37591 = cljs.core.deref.call(null,figwheel.client.file_reloading.on_load_callbacks);
var inst_37592__$1 = cljs.core.get.call(null,inst_37591,inst_37586);
var state_37606__$1 = (function (){var statearr_37618 = state_37606;
(statearr_37618[(9)] = inst_37590);

(statearr_37618[(10)] = inst_37592__$1);

return statearr_37618;
})();
if(cljs.core.truth_(inst_37592__$1)){
var statearr_37619_37633 = state_37606__$1;
(statearr_37619_37633[(1)] = (9));

} else {
var statearr_37620_37634 = state_37606__$1;
(statearr_37620_37634[(1)] = (10));

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
});})(c__34231__auto__))
;
return ((function (switch__34141__auto__,c__34231__auto__){
return (function() {
var figwheel$client$file_reloading$state_machine__34142__auto__ = null;
var figwheel$client$file_reloading$state_machine__34142__auto____0 = (function (){
var statearr_37621 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_37621[(0)] = figwheel$client$file_reloading$state_machine__34142__auto__);

(statearr_37621[(1)] = (1));

return statearr_37621;
});
var figwheel$client$file_reloading$state_machine__34142__auto____1 = (function (state_37606){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_37606);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e37622){if((e37622 instanceof Object)){
var ex__34145__auto__ = e37622;
var statearr_37623_37635 = state_37606;
(statearr_37623_37635[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37606);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37622;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37636 = state_37606;
state_37606 = G__37636;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
figwheel$client$file_reloading$state_machine__34142__auto__ = function(state_37606){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$state_machine__34142__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$state_machine__34142__auto____1.call(this,state_37606);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$state_machine__34142__auto____0;
figwheel$client$file_reloading$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$state_machine__34142__auto____1;
return figwheel$client$file_reloading$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__))
})();
var state__34233__auto__ = (function (){var statearr_37624 = f__34232__auto__.call(null);
(statearr_37624[(6)] = c__34231__auto__);

return statearr_37624;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__))
);

return c__34231__auto__;
})();
}
figwheel.client.file_reloading.queued_file_reload = (function figwheel$client$file_reloading$queued_file_reload(url){
return cljs.core.async.put_BANG_.call(null,figwheel.client.file_reloading.reload_chan,url);
});
figwheel.client.file_reloading.require_with_callback = (function figwheel$client$file_reloading$require_with_callback(p__37637,callback){
var map__37638 = p__37637;
var map__37638__$1 = ((((!((map__37638 == null)))?((((map__37638.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37638.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37638):map__37638);
var file_msg = map__37638__$1;
var namespace = cljs.core.get.call(null,map__37638__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var request_url = figwheel.client.file_reloading.resolve_ns.call(null,namespace);
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.assoc,request_url,((function (request_url,map__37638,map__37638__$1,file_msg,namespace){
return (function (file_msg_SINGLEQUOTE_){
cljs.core.swap_BANG_.call(null,figwheel.client.file_reloading.on_load_callbacks,cljs.core.dissoc,request_url);

return cljs.core.apply.call(null,callback,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.merge.call(null,file_msg,cljs.core.select_keys.call(null,file_msg_SINGLEQUOTE_,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375)], null)))], null));
});})(request_url,map__37638,map__37638__$1,file_msg,namespace))
);

return figwheel.client.file_reloading.figwheel_require.call(null,cljs.core.name.call(null,namespace),true);
});
figwheel.client.file_reloading.figwheel_no_load_QMARK_ = (function figwheel$client$file_reloading$figwheel_no_load_QMARK_(p__37640){
var map__37641 = p__37640;
var map__37641__$1 = ((((!((map__37641 == null)))?((((map__37641.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37641.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37641):map__37641);
var file_msg = map__37641__$1;
var namespace = cljs.core.get.call(null,map__37641__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
return new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
});
figwheel.client.file_reloading.reload_file_QMARK_ = (function figwheel$client$file_reloading$reload_file_QMARK_(p__37643){
var map__37644 = p__37643;
var map__37644__$1 = ((((!((map__37644 == null)))?((((map__37644.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37644.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37644):map__37644);
var file_msg = map__37644__$1;
var namespace = cljs.core.get.call(null,map__37644__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

var meta_pragmas = cljs.core.get.call(null,cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas),cljs.core.name.call(null,namespace));
var and__30011__auto__ = cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,file_msg));
if(and__30011__auto__){
var or__30023__auto__ = new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
var or__30023__auto____$1 = new cljs.core.Keyword(null,"figwheel-load","figwheel-load",1316089175).cljs$core$IFn$_invoke$arity$1(meta_pragmas);
if(cljs.core.truth_(or__30023__auto____$1)){
return or__30023__auto____$1;
} else {
return figwheel.client.file_reloading.provided_QMARK_.call(null,cljs.core.name.call(null,namespace));
}
}
} else {
return and__30011__auto__;
}
});
figwheel.client.file_reloading.js_reload = (function figwheel$client$file_reloading$js_reload(p__37646,callback){
var map__37647 = p__37646;
var map__37647__$1 = ((((!((map__37647 == null)))?((((map__37647.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37647.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37647):map__37647);
var file_msg = map__37647__$1;
var request_url = cljs.core.get.call(null,map__37647__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
var namespace = cljs.core.get.call(null,map__37647__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));

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
var c__34231__auto___37697 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___37697,out){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___37697,out){
return (function (state_37682){
var state_val_37683 = (state_37682[(1)]);
if((state_val_37683 === (1))){
var inst_37656 = cljs.core.seq.call(null,files);
var inst_37657 = cljs.core.first.call(null,inst_37656);
var inst_37658 = cljs.core.next.call(null,inst_37656);
var inst_37659 = files;
var state_37682__$1 = (function (){var statearr_37684 = state_37682;
(statearr_37684[(7)] = inst_37658);

(statearr_37684[(8)] = inst_37659);

(statearr_37684[(9)] = inst_37657);

return statearr_37684;
})();
var statearr_37685_37698 = state_37682__$1;
(statearr_37685_37698[(2)] = null);

(statearr_37685_37698[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (2))){
var inst_37659 = (state_37682[(8)]);
var inst_37665 = (state_37682[(10)]);
var inst_37664 = cljs.core.seq.call(null,inst_37659);
var inst_37665__$1 = cljs.core.first.call(null,inst_37664);
var inst_37666 = cljs.core.next.call(null,inst_37664);
var inst_37667 = (inst_37665__$1 == null);
var inst_37668 = cljs.core.not.call(null,inst_37667);
var state_37682__$1 = (function (){var statearr_37686 = state_37682;
(statearr_37686[(11)] = inst_37666);

(statearr_37686[(10)] = inst_37665__$1);

return statearr_37686;
})();
if(inst_37668){
var statearr_37687_37699 = state_37682__$1;
(statearr_37687_37699[(1)] = (4));

} else {
var statearr_37688_37700 = state_37682__$1;
(statearr_37688_37700[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (3))){
var inst_37680 = (state_37682[(2)]);
var state_37682__$1 = state_37682;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37682__$1,inst_37680);
} else {
if((state_val_37683 === (4))){
var inst_37665 = (state_37682[(10)]);
var inst_37670 = figwheel.client.file_reloading.reload_js_file.call(null,inst_37665);
var state_37682__$1 = state_37682;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37682__$1,(7),inst_37670);
} else {
if((state_val_37683 === (5))){
var inst_37676 = cljs.core.async.close_BANG_.call(null,out);
var state_37682__$1 = state_37682;
var statearr_37689_37701 = state_37682__$1;
(statearr_37689_37701[(2)] = inst_37676);

(statearr_37689_37701[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (6))){
var inst_37678 = (state_37682[(2)]);
var state_37682__$1 = state_37682;
var statearr_37690_37702 = state_37682__$1;
(statearr_37690_37702[(2)] = inst_37678);

(statearr_37690_37702[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37683 === (7))){
var inst_37666 = (state_37682[(11)]);
var inst_37672 = (state_37682[(2)]);
var inst_37673 = cljs.core.async.put_BANG_.call(null,out,inst_37672);
var inst_37659 = inst_37666;
var state_37682__$1 = (function (){var statearr_37691 = state_37682;
(statearr_37691[(8)] = inst_37659);

(statearr_37691[(12)] = inst_37673);

return statearr_37691;
})();
var statearr_37692_37703 = state_37682__$1;
(statearr_37692_37703[(2)] = null);

(statearr_37692_37703[(1)] = (2));


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
});})(c__34231__auto___37697,out))
;
return ((function (switch__34141__auto__,c__34231__auto___37697,out){
return (function() {
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto__ = null;
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto____0 = (function (){
var statearr_37693 = [null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37693[(0)] = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto__);

(statearr_37693[(1)] = (1));

return statearr_37693;
});
var figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto____1 = (function (state_37682){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_37682);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e37694){if((e37694 instanceof Object)){
var ex__34145__auto__ = e37694;
var statearr_37695_37704 = state_37682;
(statearr_37695_37704[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37682);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37694;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__37705 = state_37682;
state_37682 = G__37705;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto__ = function(state_37682){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto____1.call(this,state_37682);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto____0;
figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto____1;
return figwheel$client$file_reloading$load_all_js_files_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___37697,out))
})();
var state__34233__auto__ = (function (){var statearr_37696 = f__34232__auto__.call(null);
(statearr_37696[(6)] = c__34231__auto___37697);

return statearr_37696;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___37697,out))
);


return cljs.core.async.into.call(null,cljs.core.PersistentVector.EMPTY,out);
});
figwheel.client.file_reloading.eval_body = (function figwheel$client$file_reloading$eval_body(p__37706,opts){
var map__37707 = p__37706;
var map__37707__$1 = ((((!((map__37707 == null)))?((((map__37707.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37707.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37707):map__37707);
var eval_body = cljs.core.get.call(null,map__37707__$1,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883));
var file = cljs.core.get.call(null,map__37707__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_((function (){var and__30011__auto__ = eval_body;
if(cljs.core.truth_(and__30011__auto__)){
return typeof eval_body === 'string';
} else {
return and__30011__auto__;
}
})())){
var code = eval_body;
try{figwheel.client.utils.debug_prn.call(null,["Evaling file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''));

return figwheel.client.utils.eval_helper.call(null,code,opts);
}catch (e37709){var e = e37709;
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
return (function (p1__37710_SHARP_){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37710_SHARP_),n);
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
return cljs.core.map.call(null,(function (p__37711){
var vec__37712 = p__37711;
var k = cljs.core.nth.call(null,vec__37712,(0),null);
var v = cljs.core.nth.call(null,vec__37712,(1),null);
return new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"namespace","namespace",-377510372),k,new cljs.core.Keyword(null,"type","type",1174270348),new cljs.core.Keyword(null,"namespace","namespace",-377510372)], null);
}),cljs.core.filter.call(null,(function (p__37715){
var vec__37716 = p__37715;
var k = cljs.core.nth.call(null,vec__37716,(0),null);
var v = cljs.core.nth.call(null,vec__37716,(1),null);
return new cljs.core.Keyword(null,"figwheel-always","figwheel-always",799819691).cljs$core$IFn$_invoke$arity$1(v);
}),cljs.core.deref.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas)));
});
figwheel.client.file_reloading.reload_js_files = (function figwheel$client$file_reloading$reload_js_files(p__37722,p__37723){
var map__37724 = p__37722;
var map__37724__$1 = ((((!((map__37724 == null)))?((((map__37724.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37724.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37724):map__37724);
var opts = map__37724__$1;
var before_jsload = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128));
var on_jsload = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602));
var reload_dependents = cljs.core.get.call(null,map__37724__$1,new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430));
var map__37725 = p__37723;
var map__37725__$1 = ((((!((map__37725 == null)))?((((map__37725.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37725.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37725):map__37725);
var msg = map__37725__$1;
var files = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"files","files",-472457450));
var figwheel_meta = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"figwheel-meta","figwheel-meta",-225970237));
var recompile_dependents = cljs.core.get.call(null,map__37725__$1,new cljs.core.Keyword(null,"recompile-dependents","recompile-dependents",523804171));
if(cljs.core.empty_QMARK_.call(null,figwheel_meta)){
} else {
cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.figwheel_meta_pragmas,figwheel_meta);
}

var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (state_37879){
var state_val_37880 = (state_37879[(1)]);
if((state_val_37880 === (7))){
var inst_37742 = (state_37879[(7)]);
var inst_37739 = (state_37879[(8)]);
var inst_37740 = (state_37879[(9)]);
var inst_37741 = (state_37879[(10)]);
var inst_37747 = cljs.core._nth.call(null,inst_37740,inst_37742);
var inst_37748 = figwheel.client.file_reloading.eval_body.call(null,inst_37747,opts);
var inst_37749 = (inst_37742 + (1));
var tmp37881 = inst_37739;
var tmp37882 = inst_37740;
var tmp37883 = inst_37741;
var inst_37739__$1 = tmp37881;
var inst_37740__$1 = tmp37882;
var inst_37741__$1 = tmp37883;
var inst_37742__$1 = inst_37749;
var state_37879__$1 = (function (){var statearr_37884 = state_37879;
(statearr_37884[(7)] = inst_37742__$1);

(statearr_37884[(8)] = inst_37739__$1);

(statearr_37884[(11)] = inst_37748);

(statearr_37884[(9)] = inst_37740__$1);

(statearr_37884[(10)] = inst_37741__$1);

return statearr_37884;
})();
var statearr_37885_37968 = state_37879__$1;
(statearr_37885_37968[(2)] = null);

(statearr_37885_37968[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (20))){
var inst_37782 = (state_37879[(12)]);
var inst_37790 = figwheel.client.file_reloading.sort_files.call(null,inst_37782);
var state_37879__$1 = state_37879;
var statearr_37886_37969 = state_37879__$1;
(statearr_37886_37969[(2)] = inst_37790);

(statearr_37886_37969[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (27))){
var state_37879__$1 = state_37879;
var statearr_37887_37970 = state_37879__$1;
(statearr_37887_37970[(2)] = null);

(statearr_37887_37970[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (1))){
var inst_37731 = (state_37879[(13)]);
var inst_37728 = before_jsload.call(null,files);
var inst_37729 = figwheel.client.file_reloading.before_jsload_custom_event.call(null,files);
var inst_37730 = (function (){return ((function (inst_37731,inst_37728,inst_37729,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37719_SHARP_){
return new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37719_SHARP_);
});
;})(inst_37731,inst_37728,inst_37729,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37731__$1 = cljs.core.filter.call(null,inst_37730,files);
var inst_37732 = cljs.core.not_empty.call(null,inst_37731__$1);
var state_37879__$1 = (function (){var statearr_37888 = state_37879;
(statearr_37888[(14)] = inst_37729);

(statearr_37888[(13)] = inst_37731__$1);

(statearr_37888[(15)] = inst_37728);

return statearr_37888;
})();
if(cljs.core.truth_(inst_37732)){
var statearr_37889_37971 = state_37879__$1;
(statearr_37889_37971[(1)] = (2));

} else {
var statearr_37890_37972 = state_37879__$1;
(statearr_37890_37972[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (24))){
var state_37879__$1 = state_37879;
var statearr_37891_37973 = state_37879__$1;
(statearr_37891_37973[(2)] = null);

(statearr_37891_37973[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (39))){
var inst_37832 = (state_37879[(16)]);
var state_37879__$1 = state_37879;
var statearr_37892_37974 = state_37879__$1;
(statearr_37892_37974[(2)] = inst_37832);

(statearr_37892_37974[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (46))){
var inst_37874 = (state_37879[(2)]);
var state_37879__$1 = state_37879;
var statearr_37893_37975 = state_37879__$1;
(statearr_37893_37975[(2)] = inst_37874);

(statearr_37893_37975[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (4))){
var inst_37776 = (state_37879[(2)]);
var inst_37777 = cljs.core.List.EMPTY;
var inst_37778 = cljs.core.reset_BANG_.call(null,figwheel.client.file_reloading.dependencies_loaded,inst_37777);
var inst_37779 = (function (){return ((function (inst_37776,inst_37777,inst_37778,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37720_SHARP_){
var and__30011__auto__ = new cljs.core.Keyword(null,"namespace","namespace",-377510372).cljs$core$IFn$_invoke$arity$1(p1__37720_SHARP_);
if(cljs.core.truth_(and__30011__auto__)){
return (cljs.core.not.call(null,new cljs.core.Keyword(null,"eval-body","eval-body",-907279883).cljs$core$IFn$_invoke$arity$1(p1__37720_SHARP_))) && (cljs.core.not.call(null,figwheel.client.file_reloading.figwheel_no_load_QMARK_.call(null,p1__37720_SHARP_)));
} else {
return and__30011__auto__;
}
});
;})(inst_37776,inst_37777,inst_37778,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37780 = cljs.core.filter.call(null,inst_37779,files);
var inst_37781 = figwheel.client.file_reloading.get_figwheel_always.call(null);
var inst_37782 = cljs.core.concat.call(null,inst_37780,inst_37781);
var state_37879__$1 = (function (){var statearr_37894 = state_37879;
(statearr_37894[(17)] = inst_37778);

(statearr_37894[(12)] = inst_37782);

(statearr_37894[(18)] = inst_37776);

return statearr_37894;
})();
if(cljs.core.truth_(reload_dependents)){
var statearr_37895_37976 = state_37879__$1;
(statearr_37895_37976[(1)] = (16));

} else {
var statearr_37896_37977 = state_37879__$1;
(statearr_37896_37977[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (15))){
var inst_37766 = (state_37879[(2)]);
var state_37879__$1 = state_37879;
var statearr_37897_37978 = state_37879__$1;
(statearr_37897_37978[(2)] = inst_37766);

(statearr_37897_37978[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (21))){
var inst_37792 = (state_37879[(19)]);
var inst_37792__$1 = (state_37879[(2)]);
var inst_37793 = figwheel.client.file_reloading.load_all_js_files.call(null,inst_37792__$1);
var state_37879__$1 = (function (){var statearr_37898 = state_37879;
(statearr_37898[(19)] = inst_37792__$1);

return statearr_37898;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_37879__$1,(22),inst_37793);
} else {
if((state_val_37880 === (31))){
var inst_37877 = (state_37879[(2)]);
var state_37879__$1 = state_37879;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_37879__$1,inst_37877);
} else {
if((state_val_37880 === (32))){
var inst_37832 = (state_37879[(16)]);
var inst_37837 = inst_37832.cljs$lang$protocol_mask$partition0$;
var inst_37838 = (inst_37837 & (64));
var inst_37839 = inst_37832.cljs$core$ISeq$;
var inst_37840 = (cljs.core.PROTOCOL_SENTINEL === inst_37839);
var inst_37841 = (inst_37838) || (inst_37840);
var state_37879__$1 = state_37879;
if(cljs.core.truth_(inst_37841)){
var statearr_37899_37979 = state_37879__$1;
(statearr_37899_37979[(1)] = (35));

} else {
var statearr_37900_37980 = state_37879__$1;
(statearr_37900_37980[(1)] = (36));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (40))){
var inst_37854 = (state_37879[(20)]);
var inst_37853 = (state_37879[(2)]);
var inst_37854__$1 = cljs.core.get.call(null,inst_37853,new cljs.core.Keyword(null,"figwheel-no-load","figwheel-no-load",-555840179));
var inst_37855 = cljs.core.get.call(null,inst_37853,new cljs.core.Keyword(null,"not-required","not-required",-950359114));
var inst_37856 = cljs.core.not_empty.call(null,inst_37854__$1);
var state_37879__$1 = (function (){var statearr_37901 = state_37879;
(statearr_37901[(20)] = inst_37854__$1);

(statearr_37901[(21)] = inst_37855);

return statearr_37901;
})();
if(cljs.core.truth_(inst_37856)){
var statearr_37902_37981 = state_37879__$1;
(statearr_37902_37981[(1)] = (41));

} else {
var statearr_37903_37982 = state_37879__$1;
(statearr_37903_37982[(1)] = (42));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (33))){
var state_37879__$1 = state_37879;
var statearr_37904_37983 = state_37879__$1;
(statearr_37904_37983[(2)] = false);

(statearr_37904_37983[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (13))){
var inst_37752 = (state_37879[(22)]);
var inst_37756 = cljs.core.chunk_first.call(null,inst_37752);
var inst_37757 = cljs.core.chunk_rest.call(null,inst_37752);
var inst_37758 = cljs.core.count.call(null,inst_37756);
var inst_37739 = inst_37757;
var inst_37740 = inst_37756;
var inst_37741 = inst_37758;
var inst_37742 = (0);
var state_37879__$1 = (function (){var statearr_37905 = state_37879;
(statearr_37905[(7)] = inst_37742);

(statearr_37905[(8)] = inst_37739);

(statearr_37905[(9)] = inst_37740);

(statearr_37905[(10)] = inst_37741);

return statearr_37905;
})();
var statearr_37906_37984 = state_37879__$1;
(statearr_37906_37984[(2)] = null);

(statearr_37906_37984[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (22))){
var inst_37796 = (state_37879[(23)]);
var inst_37795 = (state_37879[(24)]);
var inst_37792 = (state_37879[(19)]);
var inst_37800 = (state_37879[(25)]);
var inst_37795__$1 = (state_37879[(2)]);
var inst_37796__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37795__$1);
var inst_37797 = (function (){var all_files = inst_37792;
var res_SINGLEQUOTE_ = inst_37795__$1;
var res = inst_37796__$1;
return ((function (all_files,res_SINGLEQUOTE_,res,inst_37796,inst_37795,inst_37792,inst_37800,inst_37795__$1,inst_37796__$1,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p1__37721_SHARP_){
return cljs.core.not.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375).cljs$core$IFn$_invoke$arity$1(p1__37721_SHARP_));
});
;})(all_files,res_SINGLEQUOTE_,res,inst_37796,inst_37795,inst_37792,inst_37800,inst_37795__$1,inst_37796__$1,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37798 = cljs.core.filter.call(null,inst_37797,inst_37795__$1);
var inst_37799 = cljs.core.deref.call(null,figwheel.client.file_reloading.dependencies_loaded);
var inst_37800__$1 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded-file","loaded-file",-168399375),inst_37799);
var inst_37801 = cljs.core.not_empty.call(null,inst_37800__$1);
var state_37879__$1 = (function (){var statearr_37907 = state_37879;
(statearr_37907[(23)] = inst_37796__$1);

(statearr_37907[(24)] = inst_37795__$1);

(statearr_37907[(26)] = inst_37798);

(statearr_37907[(25)] = inst_37800__$1);

return statearr_37907;
})();
if(cljs.core.truth_(inst_37801)){
var statearr_37908_37985 = state_37879__$1;
(statearr_37908_37985[(1)] = (23));

} else {
var statearr_37909_37986 = state_37879__$1;
(statearr_37909_37986[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (36))){
var state_37879__$1 = state_37879;
var statearr_37910_37987 = state_37879__$1;
(statearr_37910_37987[(2)] = false);

(statearr_37910_37987[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (41))){
var inst_37854 = (state_37879[(20)]);
var inst_37858 = cljs.core.comp.call(null,figwheel.client.file_reloading.name__GT_path,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var inst_37859 = cljs.core.map.call(null,inst_37858,inst_37854);
var inst_37860 = cljs.core.pr_str.call(null,inst_37859);
var inst_37861 = ["figwheel-no-load meta-data: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37860)].join('');
var inst_37862 = figwheel.client.utils.log.call(null,inst_37861);
var state_37879__$1 = state_37879;
var statearr_37911_37988 = state_37879__$1;
(statearr_37911_37988[(2)] = inst_37862);

(statearr_37911_37988[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (43))){
var inst_37855 = (state_37879[(21)]);
var inst_37865 = (state_37879[(2)]);
var inst_37866 = cljs.core.not_empty.call(null,inst_37855);
var state_37879__$1 = (function (){var statearr_37912 = state_37879;
(statearr_37912[(27)] = inst_37865);

return statearr_37912;
})();
if(cljs.core.truth_(inst_37866)){
var statearr_37913_37989 = state_37879__$1;
(statearr_37913_37989[(1)] = (44));

} else {
var statearr_37914_37990 = state_37879__$1;
(statearr_37914_37990[(1)] = (45));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (29))){
var inst_37796 = (state_37879[(23)]);
var inst_37795 = (state_37879[(24)]);
var inst_37792 = (state_37879[(19)]);
var inst_37798 = (state_37879[(26)]);
var inst_37800 = (state_37879[(25)]);
var inst_37832 = (state_37879[(16)]);
var inst_37828 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: NOT loading these files ");
var inst_37831 = (function (){var all_files = inst_37792;
var res_SINGLEQUOTE_ = inst_37795;
var res = inst_37796;
var files_not_loaded = inst_37798;
var dependencies_that_loaded = inst_37800;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37796,inst_37795,inst_37792,inst_37798,inst_37800,inst_37832,inst_37828,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37830){
var map__37915 = p__37830;
var map__37915__$1 = ((((!((map__37915 == null)))?((((map__37915.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37915.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37915):map__37915);
var namespace = cljs.core.get.call(null,map__37915__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
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
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37796,inst_37795,inst_37792,inst_37798,inst_37800,inst_37832,inst_37828,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37832__$1 = cljs.core.group_by.call(null,inst_37831,inst_37798);
var inst_37834 = (inst_37832__$1 == null);
var inst_37835 = cljs.core.not.call(null,inst_37834);
var state_37879__$1 = (function (){var statearr_37917 = state_37879;
(statearr_37917[(28)] = inst_37828);

(statearr_37917[(16)] = inst_37832__$1);

return statearr_37917;
})();
if(inst_37835){
var statearr_37918_37991 = state_37879__$1;
(statearr_37918_37991[(1)] = (32));

} else {
var statearr_37919_37992 = state_37879__$1;
(statearr_37919_37992[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (44))){
var inst_37855 = (state_37879[(21)]);
var inst_37868 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_37855);
var inst_37869 = cljs.core.pr_str.call(null,inst_37868);
var inst_37870 = ["not required: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_37869)].join('');
var inst_37871 = figwheel.client.utils.log.call(null,inst_37870);
var state_37879__$1 = state_37879;
var statearr_37920_37993 = state_37879__$1;
(statearr_37920_37993[(2)] = inst_37871);

(statearr_37920_37993[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (6))){
var inst_37773 = (state_37879[(2)]);
var state_37879__$1 = state_37879;
var statearr_37921_37994 = state_37879__$1;
(statearr_37921_37994[(2)] = inst_37773);

(statearr_37921_37994[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (28))){
var inst_37798 = (state_37879[(26)]);
var inst_37825 = (state_37879[(2)]);
var inst_37826 = cljs.core.not_empty.call(null,inst_37798);
var state_37879__$1 = (function (){var statearr_37922 = state_37879;
(statearr_37922[(29)] = inst_37825);

return statearr_37922;
})();
if(cljs.core.truth_(inst_37826)){
var statearr_37923_37995 = state_37879__$1;
(statearr_37923_37995[(1)] = (29));

} else {
var statearr_37924_37996 = state_37879__$1;
(statearr_37924_37996[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (25))){
var inst_37796 = (state_37879[(23)]);
var inst_37812 = (state_37879[(2)]);
var inst_37813 = cljs.core.not_empty.call(null,inst_37796);
var state_37879__$1 = (function (){var statearr_37925 = state_37879;
(statearr_37925[(30)] = inst_37812);

return statearr_37925;
})();
if(cljs.core.truth_(inst_37813)){
var statearr_37926_37997 = state_37879__$1;
(statearr_37926_37997[(1)] = (26));

} else {
var statearr_37927_37998 = state_37879__$1;
(statearr_37927_37998[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (34))){
var inst_37848 = (state_37879[(2)]);
var state_37879__$1 = state_37879;
if(cljs.core.truth_(inst_37848)){
var statearr_37928_37999 = state_37879__$1;
(statearr_37928_37999[(1)] = (38));

} else {
var statearr_37929_38000 = state_37879__$1;
(statearr_37929_38000[(1)] = (39));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (17))){
var state_37879__$1 = state_37879;
var statearr_37930_38001 = state_37879__$1;
(statearr_37930_38001[(2)] = recompile_dependents);

(statearr_37930_38001[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (3))){
var state_37879__$1 = state_37879;
var statearr_37931_38002 = state_37879__$1;
(statearr_37931_38002[(2)] = null);

(statearr_37931_38002[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (12))){
var inst_37769 = (state_37879[(2)]);
var state_37879__$1 = state_37879;
var statearr_37932_38003 = state_37879__$1;
(statearr_37932_38003[(2)] = inst_37769);

(statearr_37932_38003[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (2))){
var inst_37731 = (state_37879[(13)]);
var inst_37738 = cljs.core.seq.call(null,inst_37731);
var inst_37739 = inst_37738;
var inst_37740 = null;
var inst_37741 = (0);
var inst_37742 = (0);
var state_37879__$1 = (function (){var statearr_37933 = state_37879;
(statearr_37933[(7)] = inst_37742);

(statearr_37933[(8)] = inst_37739);

(statearr_37933[(9)] = inst_37740);

(statearr_37933[(10)] = inst_37741);

return statearr_37933;
})();
var statearr_37934_38004 = state_37879__$1;
(statearr_37934_38004[(2)] = null);

(statearr_37934_38004[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (23))){
var inst_37796 = (state_37879[(23)]);
var inst_37795 = (state_37879[(24)]);
var inst_37792 = (state_37879[(19)]);
var inst_37798 = (state_37879[(26)]);
var inst_37800 = (state_37879[(25)]);
var inst_37803 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these dependencies");
var inst_37805 = (function (){var all_files = inst_37792;
var res_SINGLEQUOTE_ = inst_37795;
var res = inst_37796;
var files_not_loaded = inst_37798;
var dependencies_that_loaded = inst_37800;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37796,inst_37795,inst_37792,inst_37798,inst_37800,inst_37803,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37804){
var map__37935 = p__37804;
var map__37935__$1 = ((((!((map__37935 == null)))?((((map__37935.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37935.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37935):map__37935);
var request_url = cljs.core.get.call(null,map__37935__$1,new cljs.core.Keyword(null,"request-url","request-url",2100346596));
return clojure.string.replace.call(null,request_url,goog.basePath,"");
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37796,inst_37795,inst_37792,inst_37798,inst_37800,inst_37803,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37806 = cljs.core.reverse.call(null,inst_37800);
var inst_37807 = cljs.core.map.call(null,inst_37805,inst_37806);
var inst_37808 = cljs.core.pr_str.call(null,inst_37807);
var inst_37809 = figwheel.client.utils.log.call(null,inst_37808);
var state_37879__$1 = (function (){var statearr_37937 = state_37879;
(statearr_37937[(31)] = inst_37803);

return statearr_37937;
})();
var statearr_37938_38005 = state_37879__$1;
(statearr_37938_38005[(2)] = inst_37809);

(statearr_37938_38005[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (35))){
var state_37879__$1 = state_37879;
var statearr_37939_38006 = state_37879__$1;
(statearr_37939_38006[(2)] = true);

(statearr_37939_38006[(1)] = (37));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (19))){
var inst_37782 = (state_37879[(12)]);
var inst_37788 = figwheel.client.file_reloading.expand_files.call(null,inst_37782);
var state_37879__$1 = state_37879;
var statearr_37940_38007 = state_37879__$1;
(statearr_37940_38007[(2)] = inst_37788);

(statearr_37940_38007[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (11))){
var state_37879__$1 = state_37879;
var statearr_37941_38008 = state_37879__$1;
(statearr_37941_38008[(2)] = null);

(statearr_37941_38008[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (9))){
var inst_37771 = (state_37879[(2)]);
var state_37879__$1 = state_37879;
var statearr_37942_38009 = state_37879__$1;
(statearr_37942_38009[(2)] = inst_37771);

(statearr_37942_38009[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (5))){
var inst_37742 = (state_37879[(7)]);
var inst_37741 = (state_37879[(10)]);
var inst_37744 = (inst_37742 < inst_37741);
var inst_37745 = inst_37744;
var state_37879__$1 = state_37879;
if(cljs.core.truth_(inst_37745)){
var statearr_37943_38010 = state_37879__$1;
(statearr_37943_38010[(1)] = (7));

} else {
var statearr_37944_38011 = state_37879__$1;
(statearr_37944_38011[(1)] = (8));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (14))){
var inst_37752 = (state_37879[(22)]);
var inst_37761 = cljs.core.first.call(null,inst_37752);
var inst_37762 = figwheel.client.file_reloading.eval_body.call(null,inst_37761,opts);
var inst_37763 = cljs.core.next.call(null,inst_37752);
var inst_37739 = inst_37763;
var inst_37740 = null;
var inst_37741 = (0);
var inst_37742 = (0);
var state_37879__$1 = (function (){var statearr_37945 = state_37879;
(statearr_37945[(7)] = inst_37742);

(statearr_37945[(8)] = inst_37739);

(statearr_37945[(32)] = inst_37762);

(statearr_37945[(9)] = inst_37740);

(statearr_37945[(10)] = inst_37741);

return statearr_37945;
})();
var statearr_37946_38012 = state_37879__$1;
(statearr_37946_38012[(2)] = null);

(statearr_37946_38012[(1)] = (5));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (45))){
var state_37879__$1 = state_37879;
var statearr_37947_38013 = state_37879__$1;
(statearr_37947_38013[(2)] = null);

(statearr_37947_38013[(1)] = (46));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (26))){
var inst_37796 = (state_37879[(23)]);
var inst_37795 = (state_37879[(24)]);
var inst_37792 = (state_37879[(19)]);
var inst_37798 = (state_37879[(26)]);
var inst_37800 = (state_37879[(25)]);
var inst_37815 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded these files");
var inst_37817 = (function (){var all_files = inst_37792;
var res_SINGLEQUOTE_ = inst_37795;
var res = inst_37796;
var files_not_loaded = inst_37798;
var dependencies_that_loaded = inst_37800;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37796,inst_37795,inst_37792,inst_37798,inst_37800,inst_37815,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (p__37816){
var map__37948 = p__37816;
var map__37948__$1 = ((((!((map__37948 == null)))?((((map__37948.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__37948.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__37948):map__37948);
var namespace = cljs.core.get.call(null,map__37948__$1,new cljs.core.Keyword(null,"namespace","namespace",-377510372));
var file = cljs.core.get.call(null,map__37948__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
if(cljs.core.truth_(namespace)){
return figwheel.client.file_reloading.name__GT_path.call(null,cljs.core.name.call(null,namespace));
} else {
return file;
}
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37796,inst_37795,inst_37792,inst_37798,inst_37800,inst_37815,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37818 = cljs.core.map.call(null,inst_37817,inst_37796);
var inst_37819 = cljs.core.pr_str.call(null,inst_37818);
var inst_37820 = figwheel.client.utils.log.call(null,inst_37819);
var inst_37821 = (function (){var all_files = inst_37792;
var res_SINGLEQUOTE_ = inst_37795;
var res = inst_37796;
var files_not_loaded = inst_37798;
var dependencies_that_loaded = inst_37800;
return ((function (all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37796,inst_37795,inst_37792,inst_37798,inst_37800,inst_37815,inst_37817,inst_37818,inst_37819,inst_37820,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function (){
figwheel.client.file_reloading.on_jsload_custom_event.call(null,res);

return cljs.core.apply.call(null,on_jsload,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [res], null));
});
;})(all_files,res_SINGLEQUOTE_,res,files_not_loaded,dependencies_that_loaded,inst_37796,inst_37795,inst_37792,inst_37798,inst_37800,inst_37815,inst_37817,inst_37818,inst_37819,inst_37820,state_val_37880,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var inst_37822 = setTimeout(inst_37821,(10));
var state_37879__$1 = (function (){var statearr_37950 = state_37879;
(statearr_37950[(33)] = inst_37815);

(statearr_37950[(34)] = inst_37820);

return statearr_37950;
})();
var statearr_37951_38014 = state_37879__$1;
(statearr_37951_38014[(2)] = inst_37822);

(statearr_37951_38014[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (16))){
var state_37879__$1 = state_37879;
var statearr_37952_38015 = state_37879__$1;
(statearr_37952_38015[(2)] = reload_dependents);

(statearr_37952_38015[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (38))){
var inst_37832 = (state_37879[(16)]);
var inst_37850 = cljs.core.apply.call(null,cljs.core.hash_map,inst_37832);
var state_37879__$1 = state_37879;
var statearr_37953_38016 = state_37879__$1;
(statearr_37953_38016[(2)] = inst_37850);

(statearr_37953_38016[(1)] = (40));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (30))){
var state_37879__$1 = state_37879;
var statearr_37954_38017 = state_37879__$1;
(statearr_37954_38017[(2)] = null);

(statearr_37954_38017[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (10))){
var inst_37752 = (state_37879[(22)]);
var inst_37754 = cljs.core.chunked_seq_QMARK_.call(null,inst_37752);
var state_37879__$1 = state_37879;
if(inst_37754){
var statearr_37955_38018 = state_37879__$1;
(statearr_37955_38018[(1)] = (13));

} else {
var statearr_37956_38019 = state_37879__$1;
(statearr_37956_38019[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (18))){
var inst_37786 = (state_37879[(2)]);
var state_37879__$1 = state_37879;
if(cljs.core.truth_(inst_37786)){
var statearr_37957_38020 = state_37879__$1;
(statearr_37957_38020[(1)] = (19));

} else {
var statearr_37958_38021 = state_37879__$1;
(statearr_37958_38021[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (42))){
var state_37879__$1 = state_37879;
var statearr_37959_38022 = state_37879__$1;
(statearr_37959_38022[(2)] = null);

(statearr_37959_38022[(1)] = (43));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (37))){
var inst_37845 = (state_37879[(2)]);
var state_37879__$1 = state_37879;
var statearr_37960_38023 = state_37879__$1;
(statearr_37960_38023[(2)] = inst_37845);

(statearr_37960_38023[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_37880 === (8))){
var inst_37752 = (state_37879[(22)]);
var inst_37739 = (state_37879[(8)]);
var inst_37752__$1 = cljs.core.seq.call(null,inst_37739);
var state_37879__$1 = (function (){var statearr_37961 = state_37879;
(statearr_37961[(22)] = inst_37752__$1);

return statearr_37961;
})();
if(inst_37752__$1){
var statearr_37962_38024 = state_37879__$1;
(statearr_37962_38024[(1)] = (10));

} else {
var statearr_37963_38025 = state_37879__$1;
(statearr_37963_38025[(1)] = (11));

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
});})(c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
;
return ((function (switch__34141__auto__,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents){
return (function() {
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto__ = null;
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto____0 = (function (){
var statearr_37964 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_37964[(0)] = figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto__);

(statearr_37964[(1)] = (1));

return statearr_37964;
});
var figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto____1 = (function (state_37879){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_37879);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e37965){if((e37965 instanceof Object)){
var ex__34145__auto__ = e37965;
var statearr_37966_38026 = state_37879;
(statearr_37966_38026[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_37879);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e37965;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__38027 = state_37879;
state_37879 = G__38027;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto__ = function(state_37879){
switch(arguments.length){
case 0:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto____0.call(this);
case 1:
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto____1.call(this,state_37879);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto____0;
figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto____1;
return figwheel$client$file_reloading$reload_js_files_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
})();
var state__34233__auto__ = (function (){var statearr_37967 = f__34232__auto__.call(null);
(statearr_37967[(6)] = c__34231__auto__);

return statearr_37967;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__,map__37724,map__37724__$1,opts,before_jsload,on_jsload,reload_dependents,map__37725,map__37725__$1,msg,files,figwheel_meta,recompile_dependents))
);

return c__34231__auto__;
});
figwheel.client.file_reloading.current_links = (function figwheel$client$file_reloading$current_links(){
return Array.prototype.slice.call(document.getElementsByTagName("link"));
});
figwheel.client.file_reloading.truncate_url = (function figwheel$client$file_reloading$truncate_url(url){
return clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,clojure.string.replace_first.call(null,cljs.core.first.call(null,clojure.string.split.call(null,url,/\?/)),[cljs.core.str.cljs$core$IFn$_invoke$arity$1(location.protocol),"//"].join(''),""),".*://",""),/^\/\//,""),/[^\\/]*/,"");
});
figwheel.client.file_reloading.matches_file_QMARK_ = (function figwheel$client$file_reloading$matches_file_QMARK_(p__38030,link){
var map__38031 = p__38030;
var map__38031__$1 = ((((!((map__38031 == null)))?((((map__38031.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38031.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38031):map__38031);
var file = cljs.core.get.call(null,map__38031__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var temp__5457__auto__ = link.href;
if(cljs.core.truth_(temp__5457__auto__)){
var link_href = temp__5457__auto__;
var match = clojure.string.join.call(null,"/",cljs.core.take_while.call(null,cljs.core.identity,cljs.core.map.call(null,((function (link_href,temp__5457__auto__,map__38031,map__38031__$1,file){
return (function (p1__38028_SHARP_,p2__38029_SHARP_){
if(cljs.core._EQ_.call(null,p1__38028_SHARP_,p2__38029_SHARP_)){
return p1__38028_SHARP_;
} else {
return false;
}
});})(link_href,temp__5457__auto__,map__38031,map__38031__$1,file))
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
var temp__5457__auto__ = cljs.core.first.call(null,cljs.core.sort_by.call(null,(function (p__38034){
var map__38035 = p__38034;
var map__38035__$1 = ((((!((map__38035 == null)))?((((map__38035.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38035.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38035):map__38035);
var match_length = cljs.core.get.call(null,map__38035__$1,new cljs.core.Keyword(null,"match-length","match-length",1101537310));
var current_url_length = cljs.core.get.call(null,map__38035__$1,new cljs.core.Keyword(null,"current-url-length","current-url-length",380404083));
return (current_url_length - match_length);
}),cljs.core.keep.call(null,(function (p1__38033_SHARP_){
return figwheel.client.file_reloading.matches_file_QMARK_.call(null,f_data,p1__38033_SHARP_);
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
return cljs.core.vals.call(null,cljs.core.reduce.call(null,(function (p1__38037_SHARP_,p2__38038_SHARP_){
return cljs.core.assoc.call(null,p1__38037_SHARP_,cljs.core.get.call(null,p2__38038_SHARP_,key),p2__38038_SHARP_);
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
var loaded_f_datas_38039 = cljs.core.filter.call(null,new cljs.core.Keyword(null,"loaded","loaded",-1246482293),f_datas_SINGLEQUOTE_);
figwheel.client.file_reloading.on_cssload_custom_event.call(null,loaded_f_datas_38039);

if(cljs.core.fn_QMARK_.call(null,on_cssload)){
on_cssload.call(null,loaded_f_datas_38039);
} else {
}

return fin.call(null);
}));
});
figwheel.client.file_reloading.reload_css_files = (function figwheel$client$file_reloading$reload_css_files(p__38040,p__38041){
var map__38042 = p__38040;
var map__38042__$1 = ((((!((map__38042 == null)))?((((map__38042.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38042.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38042):map__38042);
var on_cssload = cljs.core.get.call(null,map__38042__$1,new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318));
var map__38043 = p__38041;
var map__38043__$1 = ((((!((map__38043 == null)))?((((map__38043.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38043.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38043):map__38043);
var files_msg = map__38043__$1;
var files = cljs.core.get.call(null,map__38043__$1,new cljs.core.Keyword(null,"files","files",-472457450));
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

//# sourceMappingURL=file_reloading.js.map?rel=1515300961531
