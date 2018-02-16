// Compiled by ClojureScript 1.9.908 {}
goog.provide('sablono.core');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('goog.string');
goog.require('sablono.normalize');
goog.require('sablono.util');
goog.require('sablono.interpreter');
goog.require('goog.dom');
goog.require('cljsjs.react');
goog.require('cljsjs.react.dom');
/**
 * Add an optional attribute argument to a function that returns a element vector.
 */
sablono.core.wrap_attrs = (function sablono$core$wrap_attrs(func){
return (function() { 
var G__32337__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__32334 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__32335 = cljs.core.seq.call(null,vec__32334);
var first__32336 = cljs.core.first.call(null,seq__32335);
var seq__32335__$1 = cljs.core.next.call(null,seq__32335);
var tag = first__32336;
var body = seq__32335__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__32337 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__32338__i = 0, G__32338__a = new Array(arguments.length -  0);
while (G__32338__i < G__32338__a.length) {G__32338__a[G__32338__i] = arguments[G__32338__i + 0]; ++G__32338__i;}
  args = new cljs.core.IndexedSeq(G__32338__a,0,null);
} 
return G__32337__delegate.call(this,args);};
G__32337.cljs$lang$maxFixedArity = 0;
G__32337.cljs$lang$applyTo = (function (arglist__32339){
var args = cljs.core.seq(arglist__32339);
return G__32337__delegate(args);
});
G__32337.cljs$core$IFn$_invoke$arity$variadic = G__32337__delegate;
return G__32337;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__30905__auto__ = (function sablono$core$update_arglists_$_iter__32340(s__32341){
return (new cljs.core.LazySeq(null,(function (){
var s__32341__$1 = s__32341;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32341__$1);
if(temp__5457__auto__){
var s__32341__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32341__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__32341__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__32343 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__32342 = (0);
while(true){
if((i__32342 < size__30904__auto__)){
var args = cljs.core._nth.call(null,c__30903__auto__,i__32342);
cljs.core.chunk_append.call(null,b__32343,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__32344 = (i__32342 + (1));
i__32342 = G__32344;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32343),sablono$core$update_arglists_$_iter__32340.call(null,cljs.core.chunk_rest.call(null,s__32341__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32343),null);
}
} else {
var args = cljs.core.first.call(null,s__32341__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__32340.call(null,cljs.core.rest.call(null,s__32341__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30905__auto__.call(null,arglists);
});
/**
 * Include a list of external stylesheet files.
 */
sablono.core.include_css = (function sablono$core$include_css(var_args){
var args__31307__auto__ = [];
var len__31300__auto___32350 = arguments.length;
var i__31301__auto___32351 = (0);
while(true){
if((i__31301__auto___32351 < len__31300__auto___32350)){
args__31307__auto__.push((arguments[i__31301__auto___32351]));

var G__32352 = (i__31301__auto___32351 + (1));
i__31301__auto___32351 = G__32352;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__30905__auto__ = (function sablono$core$iter__32346(s__32347){
return (new cljs.core.LazySeq(null,(function (){
var s__32347__$1 = s__32347;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32347__$1);
if(temp__5457__auto__){
var s__32347__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32347__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__32347__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__32349 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__32348 = (0);
while(true){
if((i__32348 < size__30904__auto__)){
var style = cljs.core._nth.call(null,c__30903__auto__,i__32348);
cljs.core.chunk_append.call(null,b__32349,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__32353 = (i__32348 + (1));
i__32348 = G__32353;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32349),sablono$core$iter__32346.call(null,cljs.core.chunk_rest.call(null,s__32347__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32349),null);
}
} else {
var style = cljs.core.first.call(null,s__32347__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__32346.call(null,cljs.core.rest.call(null,s__32347__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30905__auto__.call(null,styles);
});

sablono.core.include_css.cljs$lang$maxFixedArity = (0);

sablono.core.include_css.cljs$lang$applyTo = (function (seq32345){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq32345));
});

/**
 * Include the JavaScript library at `src`.
 */
sablono.core.include_js = (function sablono$core$include_js(src){
return goog.dom.appendChild(goog.dom.getDocument().body,goog.dom.createDom("script",({"src": src})));
});
/**
 * Include Facebook's React JavaScript library.
 */
sablono.core.include_react = (function sablono$core$include_react(){
return sablono.core.include_js.call(null,"http://fb.me/react-0.12.2.js");
});
/**
 * Wraps some content in a HTML hyperlink with the supplied URL.
 */
sablono.core.link_to32354 = (function sablono$core$link_to32354(var_args){
var args__31307__auto__ = [];
var len__31300__auto___32357 = arguments.length;
var i__31301__auto___32358 = (0);
while(true){
if((i__31301__auto___32358 < len__31300__auto___32357)){
args__31307__auto__.push((arguments[i__31301__auto___32358]));

var G__32359 = (i__31301__auto___32358 + (1));
i__31301__auto___32358 = G__32359;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((1) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to32354.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31308__auto__);
});

sablono.core.link_to32354.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to32354.cljs$lang$maxFixedArity = (1);

sablono.core.link_to32354.cljs$lang$applyTo = (function (seq32355){
var G__32356 = cljs.core.first.call(null,seq32355);
var seq32355__$1 = cljs.core.next.call(null,seq32355);
return sablono.core.link_to32354.cljs$core$IFn$_invoke$arity$variadic(G__32356,seq32355__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to32354);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to32360 = (function sablono$core$mail_to32360(var_args){
var args__31307__auto__ = [];
var len__31300__auto___32367 = arguments.length;
var i__31301__auto___32368 = (0);
while(true){
if((i__31301__auto___32368 < len__31300__auto___32367)){
args__31307__auto__.push((arguments[i__31301__auto___32368]));

var G__32369 = (i__31301__auto___32368 + (1));
i__31301__auto___32368 = G__32369;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((1) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to32360.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31308__auto__);
});

sablono.core.mail_to32360.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__32363){
var vec__32364 = p__32363;
var content = cljs.core.nth.call(null,vec__32364,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__30023__auto__ = content;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to32360.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to32360.cljs$lang$applyTo = (function (seq32361){
var G__32362 = cljs.core.first.call(null,seq32361);
var seq32361__$1 = cljs.core.next.call(null,seq32361);
return sablono.core.mail_to32360.cljs$core$IFn$_invoke$arity$variadic(G__32362,seq32361__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to32360);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list32370 = (function sablono$core$unordered_list32370(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__30905__auto__ = (function sablono$core$unordered_list32370_$_iter__32371(s__32372){
return (new cljs.core.LazySeq(null,(function (){
var s__32372__$1 = s__32372;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32372__$1);
if(temp__5457__auto__){
var s__32372__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32372__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__32372__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__32374 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__32373 = (0);
while(true){
if((i__32373 < size__30904__auto__)){
var x = cljs.core._nth.call(null,c__30903__auto__,i__32373);
cljs.core.chunk_append.call(null,b__32374,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32375 = (i__32373 + (1));
i__32373 = G__32375;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32374),sablono$core$unordered_list32370_$_iter__32371.call(null,cljs.core.chunk_rest.call(null,s__32372__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32374),null);
}
} else {
var x = cljs.core.first.call(null,s__32372__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list32370_$_iter__32371.call(null,cljs.core.rest.call(null,s__32372__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30905__auto__.call(null,coll);
})()], null);
});

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list32370);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list32376 = (function sablono$core$ordered_list32376(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__30905__auto__ = (function sablono$core$ordered_list32376_$_iter__32377(s__32378){
return (new cljs.core.LazySeq(null,(function (){
var s__32378__$1 = s__32378;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32378__$1);
if(temp__5457__auto__){
var s__32378__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32378__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__32378__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__32380 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__32379 = (0);
while(true){
if((i__32379 < size__30904__auto__)){
var x = cljs.core._nth.call(null,c__30903__auto__,i__32379);
cljs.core.chunk_append.call(null,b__32380,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__32381 = (i__32379 + (1));
i__32379 = G__32381;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32380),sablono$core$ordered_list32376_$_iter__32377.call(null,cljs.core.chunk_rest.call(null,s__32378__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32380),null);
}
} else {
var x = cljs.core.first.call(null,s__32378__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list32376_$_iter__32377.call(null,cljs.core.rest.call(null,s__32378__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30905__auto__.call(null,coll);
})()], null);
});

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list32376);
/**
 * Create an image element.
 */
sablono.core.image32382 = (function sablono$core$image32382(var_args){
var G__32384 = arguments.length;
switch (G__32384) {
case 1:
return sablono.core.image32382.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image32382.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image32382.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image32382.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image32382.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image32382);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__32386_SHARP_,p2__32387_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32386_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32387_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__32388_SHARP_,p2__32389_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__32388_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__32389_SHARP_)].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Creates a new <input> element.
 */
sablono.core.input_field_STAR_ = (function sablono$core$input_field_STAR_(type,name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"type","type",1174270348),type,new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30023__auto__ = value;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return undefined;
}
})()], null)], null);
});
/**
 * Creates a color input field.
 */
sablono.core.color_field32390 = (function sablono$core$color_field32390(var_args){
var G__32392 = arguments.length;
switch (G__32392) {
case 1:
return sablono.core.color_field32390.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field32390.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field32390.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.color_field32390.call(null,name__32324__auto__,null);
});

sablono.core.color_field32390.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.color_field32390.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field32390);

/**
 * Creates a date input field.
 */
sablono.core.date_field32393 = (function sablono$core$date_field32393(var_args){
var G__32395 = arguments.length;
switch (G__32395) {
case 1:
return sablono.core.date_field32393.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field32393.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field32393.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.date_field32393.call(null,name__32324__auto__,null);
});

sablono.core.date_field32393.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.date_field32393.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field32393);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field32396 = (function sablono$core$datetime_field32396(var_args){
var G__32398 = arguments.length;
switch (G__32398) {
case 1:
return sablono.core.datetime_field32396.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field32396.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field32396.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.datetime_field32396.call(null,name__32324__auto__,null);
});

sablono.core.datetime_field32396.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.datetime_field32396.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field32396);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field32399 = (function sablono$core$datetime_local_field32399(var_args){
var G__32401 = arguments.length;
switch (G__32401) {
case 1:
return sablono.core.datetime_local_field32399.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field32399.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field32399.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.datetime_local_field32399.call(null,name__32324__auto__,null);
});

sablono.core.datetime_local_field32399.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.datetime_local_field32399.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field32399);

/**
 * Creates a email input field.
 */
sablono.core.email_field32402 = (function sablono$core$email_field32402(var_args){
var G__32404 = arguments.length;
switch (G__32404) {
case 1:
return sablono.core.email_field32402.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field32402.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field32402.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.email_field32402.call(null,name__32324__auto__,null);
});

sablono.core.email_field32402.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.email_field32402.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field32402);

/**
 * Creates a file input field.
 */
sablono.core.file_field32405 = (function sablono$core$file_field32405(var_args){
var G__32407 = arguments.length;
switch (G__32407) {
case 1:
return sablono.core.file_field32405.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field32405.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field32405.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.file_field32405.call(null,name__32324__auto__,null);
});

sablono.core.file_field32405.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.file_field32405.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field32405);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field32408 = (function sablono$core$hidden_field32408(var_args){
var G__32410 = arguments.length;
switch (G__32410) {
case 1:
return sablono.core.hidden_field32408.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field32408.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field32408.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.hidden_field32408.call(null,name__32324__auto__,null);
});

sablono.core.hidden_field32408.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.hidden_field32408.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field32408);

/**
 * Creates a month input field.
 */
sablono.core.month_field32411 = (function sablono$core$month_field32411(var_args){
var G__32413 = arguments.length;
switch (G__32413) {
case 1:
return sablono.core.month_field32411.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field32411.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field32411.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.month_field32411.call(null,name__32324__auto__,null);
});

sablono.core.month_field32411.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.month_field32411.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field32411);

/**
 * Creates a number input field.
 */
sablono.core.number_field32414 = (function sablono$core$number_field32414(var_args){
var G__32416 = arguments.length;
switch (G__32416) {
case 1:
return sablono.core.number_field32414.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field32414.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field32414.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.number_field32414.call(null,name__32324__auto__,null);
});

sablono.core.number_field32414.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.number_field32414.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field32414);

/**
 * Creates a password input field.
 */
sablono.core.password_field32417 = (function sablono$core$password_field32417(var_args){
var G__32419 = arguments.length;
switch (G__32419) {
case 1:
return sablono.core.password_field32417.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field32417.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field32417.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.password_field32417.call(null,name__32324__auto__,null);
});

sablono.core.password_field32417.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.password_field32417.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field32417);

/**
 * Creates a range input field.
 */
sablono.core.range_field32420 = (function sablono$core$range_field32420(var_args){
var G__32422 = arguments.length;
switch (G__32422) {
case 1:
return sablono.core.range_field32420.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field32420.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field32420.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.range_field32420.call(null,name__32324__auto__,null);
});

sablono.core.range_field32420.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.range_field32420.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field32420);

/**
 * Creates a search input field.
 */
sablono.core.search_field32423 = (function sablono$core$search_field32423(var_args){
var G__32425 = arguments.length;
switch (G__32425) {
case 1:
return sablono.core.search_field32423.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field32423.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field32423.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.search_field32423.call(null,name__32324__auto__,null);
});

sablono.core.search_field32423.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.search_field32423.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field32423);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field32426 = (function sablono$core$tel_field32426(var_args){
var G__32428 = arguments.length;
switch (G__32428) {
case 1:
return sablono.core.tel_field32426.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field32426.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field32426.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.tel_field32426.call(null,name__32324__auto__,null);
});

sablono.core.tel_field32426.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.tel_field32426.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field32426);

/**
 * Creates a text input field.
 */
sablono.core.text_field32429 = (function sablono$core$text_field32429(var_args){
var G__32431 = arguments.length;
switch (G__32431) {
case 1:
return sablono.core.text_field32429.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field32429.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field32429.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.text_field32429.call(null,name__32324__auto__,null);
});

sablono.core.text_field32429.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.text_field32429.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field32429);

/**
 * Creates a time input field.
 */
sablono.core.time_field32432 = (function sablono$core$time_field32432(var_args){
var G__32434 = arguments.length;
switch (G__32434) {
case 1:
return sablono.core.time_field32432.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field32432.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field32432.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.time_field32432.call(null,name__32324__auto__,null);
});

sablono.core.time_field32432.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.time_field32432.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field32432);

/**
 * Creates a url input field.
 */
sablono.core.url_field32435 = (function sablono$core$url_field32435(var_args){
var G__32437 = arguments.length;
switch (G__32437) {
case 1:
return sablono.core.url_field32435.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field32435.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field32435.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.url_field32435.call(null,name__32324__auto__,null);
});

sablono.core.url_field32435.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.url_field32435.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field32435);

/**
 * Creates a week input field.
 */
sablono.core.week_field32438 = (function sablono$core$week_field32438(var_args){
var G__32440 = arguments.length;
switch (G__32440) {
case 1:
return sablono.core.week_field32438.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field32438.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field32438.cljs$core$IFn$_invoke$arity$1 = (function (name__32324__auto__){
return sablono.core.week_field32438.call(null,name__32324__auto__,null);
});

sablono.core.week_field32438.cljs$core$IFn$_invoke$arity$2 = (function (name__32324__auto__,value__32325__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__32324__auto__,value__32325__auto__);
});

sablono.core.week_field32438.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field32438);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box32458 = (function sablono$core$check_box32458(var_args){
var G__32460 = arguments.length;
switch (G__32460) {
case 1:
return sablono.core.check_box32458.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box32458.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box32458.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box32458.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box32458.call(null,name,null);
});

sablono.core.check_box32458.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box32458.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box32458.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30023__auto__ = value;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box32458.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box32458);
/**
 * Creates a radio button.
 */
sablono.core.radio_button32462 = (function sablono$core$radio_button32462(var_args){
var G__32464 = arguments.length;
switch (G__32464) {
case 1:
return sablono.core.radio_button32462.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button32462.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button32462.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button32462.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button32462.call(null,group,null);
});

sablono.core.radio_button32462.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button32462.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button32462.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30023__auto__ = value;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button32462.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button32462);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options32466 = (function sablono$core$select_options32466(coll){
var iter__30905__auto__ = (function sablono$core$select_options32466_$_iter__32467(s__32468){
return (new cljs.core.LazySeq(null,(function (){
var s__32468__$1 = s__32468;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__32468__$1);
if(temp__5457__auto__){
var s__32468__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__32468__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__32468__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__32470 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__32469 = (0);
while(true){
if((i__32469 < size__30904__auto__)){
var x = cljs.core._nth.call(null,c__30903__auto__,i__32469);
cljs.core.chunk_append.call(null,b__32470,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32471 = x;
var text = cljs.core.nth.call(null,vec__32471,(0),null);
var val = cljs.core.nth.call(null,vec__32471,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32471,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options32466.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__32477 = (i__32469 + (1));
i__32469 = G__32477;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32470),sablono$core$select_options32466_$_iter__32467.call(null,cljs.core.chunk_rest.call(null,s__32468__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__32470),null);
}
} else {
var x = cljs.core.first.call(null,s__32468__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__32474 = x;
var text = cljs.core.nth.call(null,vec__32474,(0),null);
var val = cljs.core.nth.call(null,vec__32474,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__32474,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options32466.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options32466_$_iter__32467.call(null,cljs.core.rest.call(null,s__32468__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__30905__auto__.call(null,coll);
});

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options32466);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down32478 = (function sablono$core$drop_down32478(var_args){
var G__32480 = arguments.length;
switch (G__32480) {
case 2:
return sablono.core.drop_down32478.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down32478.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down32478.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down32478.call(null,name,options,null);
});

sablono.core.drop_down32478.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down32478.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down32478);
/**
 * Creates a text area element.
 */
sablono.core.text_area32482 = (function sablono$core$text_area32482(var_args){
var G__32484 = arguments.length;
switch (G__32484) {
case 1:
return sablono.core.text_area32482.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area32482.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area32482.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area32482.call(null,name,null);
});

sablono.core.text_area32482.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30023__auto__ = value;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area32482.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area32482);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label32486 = (function sablono$core$label32486(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label32486);
/**
 * Creates a submit button.
 */
sablono.core.submit_button32487 = (function sablono$core$submit_button32487(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button32487);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button32488 = (function sablono$core$reset_button32488(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button32488);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to32489 = (function sablono$core$form_to32489(var_args){
var args__31307__auto__ = [];
var len__31300__auto___32496 = arguments.length;
var i__31301__auto___32497 = (0);
while(true){
if((i__31301__auto___32497 < len__31300__auto___32496)){
args__31307__auto__.push((arguments[i__31301__auto___32497]));

var G__32498 = (i__31301__auto___32497 + (1));
i__31301__auto___32497 = G__32498;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((1) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to32489.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31308__auto__);
});

sablono.core.form_to32489.cljs$core$IFn$_invoke$arity$variadic = (function (p__32492,body){
var vec__32493 = p__32492;
var method = cljs.core.nth.call(null,vec__32493,(0),null);
var action = cljs.core.nth.call(null,vec__32493,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to32489.cljs$lang$maxFixedArity = (1);

sablono.core.form_to32489.cljs$lang$applyTo = (function (seq32490){
var G__32491 = cljs.core.first.call(null,seq32490);
var seq32490__$1 = cljs.core.next.call(null,seq32490);
return sablono.core.form_to32489.cljs$core$IFn$_invoke$arity$variadic(G__32491,seq32490__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to32489);

//# sourceMappingURL=core.js.map?rel=1515300955596
