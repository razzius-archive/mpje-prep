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
var G__37879__delegate = function (args){
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,args))){
var vec__37876 = cljs.core.apply.call(null,func,cljs.core.rest.call(null,args));
var seq__37877 = cljs.core.seq.call(null,vec__37876);
var first__37878 = cljs.core.first.call(null,seq__37877);
var seq__37877__$1 = cljs.core.next.call(null,seq__37877);
var tag = first__37878;
var body = seq__37877__$1;
if(cljs.core.map_QMARK_.call(null,cljs.core.first.call(null,body))){
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.merge.call(null,cljs.core.first.call(null,body),cljs.core.first.call(null,args)),cljs.core.rest.call(null,body));
} else {
return cljs.core.apply.call(null,cljs.core.vector,tag,cljs.core.first.call(null,args),body);
}
} else {
return cljs.core.apply.call(null,func,args);
}
};
var G__37879 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__37880__i = 0, G__37880__a = new Array(arguments.length -  0);
while (G__37880__i < G__37880__a.length) {G__37880__a[G__37880__i] = arguments[G__37880__i + 0]; ++G__37880__i;}
  args = new cljs.core.IndexedSeq(G__37880__a,0,null);
} 
return G__37879__delegate.call(this,args);};
G__37879.cljs$lang$maxFixedArity = 0;
G__37879.cljs$lang$applyTo = (function (arglist__37881){
var args = cljs.core.seq(arglist__37881);
return G__37879__delegate(args);
});
G__37879.cljs$core$IFn$_invoke$arity$variadic = G__37879__delegate;
return G__37879;
})()
;
});
sablono.core.update_arglists = (function sablono$core$update_arglists(arglists){
var iter__30905__auto__ = (function sablono$core$update_arglists_$_iter__37882(s__37883){
return (new cljs.core.LazySeq(null,(function (){
var s__37883__$1 = s__37883;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37883__$1);
if(temp__5457__auto__){
var s__37883__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37883__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__37883__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__37885 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__37884 = (0);
while(true){
if((i__37884 < size__30904__auto__)){
var args = cljs.core._nth.call(null,c__30903__auto__,i__37884);
cljs.core.chunk_append.call(null,b__37885,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)));

var G__37886 = (i__37884 + (1));
i__37884 = G__37886;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37885),sablono$core$update_arglists_$_iter__37882.call(null,cljs.core.chunk_rest.call(null,s__37883__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37885),null);
}
} else {
var args = cljs.core.first.call(null,s__37883__$2);
return cljs.core.cons.call(null,cljs.core.vec.call(null,cljs.core.cons.call(null,new cljs.core.Symbol(null,"attr-map?","attr-map?",116307443,null),args)),sablono$core$update_arglists_$_iter__37882.call(null,cljs.core.rest.call(null,s__37883__$2)));
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
var len__31300__auto___37892 = arguments.length;
var i__31301__auto___37893 = (0);
while(true){
if((i__31301__auto___37893 < len__31300__auto___37892)){
args__31307__auto__.push((arguments[i__31301__auto___37893]));

var G__37894 = (i__31301__auto___37893 + (1));
i__31301__auto___37893 = G__37894;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});

sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic = (function (styles){
var iter__30905__auto__ = (function sablono$core$iter__37888(s__37889){
return (new cljs.core.LazySeq(null,(function (){
var s__37889__$1 = s__37889;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37889__$1);
if(temp__5457__auto__){
var s__37889__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37889__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__37889__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__37891 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__37890 = (0);
while(true){
if((i__37890 < size__30904__auto__)){
var style = cljs.core._nth.call(null,c__30903__auto__,i__37890);
cljs.core.chunk_append.call(null,b__37891,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null));

var G__37895 = (i__37890 + (1));
i__37890 = G__37895;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37891),sablono$core$iter__37888.call(null,cljs.core.chunk_rest.call(null,s__37889__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37891),null);
}
} else {
var style = cljs.core.first.call(null,s__37889__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"link","link",-1769163468),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"text/css",new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,style),new cljs.core.Keyword(null,"rel","rel",1378823488),"stylesheet"], null)], null),sablono$core$iter__37888.call(null,cljs.core.rest.call(null,s__37889__$2)));
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

sablono.core.include_css.cljs$lang$applyTo = (function (seq37887){
return sablono.core.include_css.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq37887));
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
sablono.core.link_to37896 = (function sablono$core$link_to37896(var_args){
var args__31307__auto__ = [];
var len__31300__auto___37899 = arguments.length;
var i__31301__auto___37900 = (0);
while(true){
if((i__31301__auto___37900 < len__31300__auto___37899)){
args__31307__auto__.push((arguments[i__31301__auto___37900]));

var G__37901 = (i__31301__auto___37900 + (1));
i__31301__auto___37900 = G__37901;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((1) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((1)),(0),null)):null);
return sablono.core.link_to37896.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31308__auto__);
});

sablono.core.link_to37896.cljs$core$IFn$_invoke$arity$variadic = (function (url,content){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),sablono.util.as_str.call(null,url)], null),content], null);
});

sablono.core.link_to37896.cljs$lang$maxFixedArity = (1);

sablono.core.link_to37896.cljs$lang$applyTo = (function (seq37897){
var G__37898 = cljs.core.first.call(null,seq37897);
var seq37897__$1 = cljs.core.next.call(null,seq37897);
return sablono.core.link_to37896.cljs$core$IFn$_invoke$arity$variadic(G__37898,seq37897__$1);
});


sablono.core.link_to = sablono.core.wrap_attrs.call(null,sablono.core.link_to37896);
/**
 * Wraps some content in a HTML hyperlink with the supplied e-mail
 *   address. If no content provided use the e-mail address as content.
 */
sablono.core.mail_to37902 = (function sablono$core$mail_to37902(var_args){
var args__31307__auto__ = [];
var len__31300__auto___37909 = arguments.length;
var i__31301__auto___37910 = (0);
while(true){
if((i__31301__auto___37910 < len__31300__auto___37909)){
args__31307__auto__.push((arguments[i__31301__auto___37910]));

var G__37911 = (i__31301__auto___37910 + (1));
i__31301__auto___37910 = G__37911;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((1) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((1)),(0),null)):null);
return sablono.core.mail_to37902.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31308__auto__);
});

sablono.core.mail_to37902.cljs$core$IFn$_invoke$arity$variadic = (function (e_mail,p__37905){
var vec__37906 = p__37905;
var content = cljs.core.nth.call(null,vec__37906,(0),null);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"a","a",-2123407586),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"href","href",-793805698),["mailto:",cljs.core.str.cljs$core$IFn$_invoke$arity$1(e_mail)].join('')], null),(function (){var or__30023__auto__ = content;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return e_mail;
}
})()], null);
});

sablono.core.mail_to37902.cljs$lang$maxFixedArity = (1);

sablono.core.mail_to37902.cljs$lang$applyTo = (function (seq37903){
var G__37904 = cljs.core.first.call(null,seq37903);
var seq37903__$1 = cljs.core.next.call(null,seq37903);
return sablono.core.mail_to37902.cljs$core$IFn$_invoke$arity$variadic(G__37904,seq37903__$1);
});


sablono.core.mail_to = sablono.core.wrap_attrs.call(null,sablono.core.mail_to37902);
/**
 * Wrap a collection in an unordered list.
 */
sablono.core.unordered_list37912 = (function sablono$core$unordered_list37912(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ul","ul",-1349521403),(function (){var iter__30905__auto__ = (function sablono$core$unordered_list37912_$_iter__37913(s__37914){
return (new cljs.core.LazySeq(null,(function (){
var s__37914__$1 = s__37914;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37914__$1);
if(temp__5457__auto__){
var s__37914__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37914__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__37914__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__37916 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__37915 = (0);
while(true){
if((i__37915 < size__30904__auto__)){
var x = cljs.core._nth.call(null,c__30903__auto__,i__37915);
cljs.core.chunk_append.call(null,b__37916,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37917 = (i__37915 + (1));
i__37915 = G__37917;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37916),sablono$core$unordered_list37912_$_iter__37913.call(null,cljs.core.chunk_rest.call(null,s__37914__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37916),null);
}
} else {
var x = cljs.core.first.call(null,s__37914__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$unordered_list37912_$_iter__37913.call(null,cljs.core.rest.call(null,s__37914__$2)));
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

sablono.core.unordered_list = sablono.core.wrap_attrs.call(null,sablono.core.unordered_list37912);
/**
 * Wrap a collection in an ordered list.
 */
sablono.core.ordered_list37918 = (function sablono$core$ordered_list37918(coll){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ol","ol",932524051),(function (){var iter__30905__auto__ = (function sablono$core$ordered_list37918_$_iter__37919(s__37920){
return (new cljs.core.LazySeq(null,(function (){
var s__37920__$1 = s__37920;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__37920__$1);
if(temp__5457__auto__){
var s__37920__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__37920__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__37920__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__37922 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__37921 = (0);
while(true){
if((i__37921 < size__30904__auto__)){
var x = cljs.core._nth.call(null,c__30903__auto__,i__37921);
cljs.core.chunk_append.call(null,b__37922,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null));

var G__37923 = (i__37921 + (1));
i__37921 = G__37923;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37922),sablono$core$ordered_list37918_$_iter__37919.call(null,cljs.core.chunk_rest.call(null,s__37920__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__37922),null);
}
} else {
var x = cljs.core.first.call(null,s__37920__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"li","li",723558921),x], null),sablono$core$ordered_list37918_$_iter__37919.call(null,cljs.core.rest.call(null,s__37920__$2)));
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

sablono.core.ordered_list = sablono.core.wrap_attrs.call(null,sablono.core.ordered_list37918);
/**
 * Create an image element.
 */
sablono.core.image37924 = (function sablono$core$image37924(var_args){
var G__37926 = arguments.length;
switch (G__37926) {
case 1:
return sablono.core.image37924.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.image37924.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.image37924.cljs$core$IFn$_invoke$arity$1 = (function (src){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src)], null)], null);
});

sablono.core.image37924.cljs$core$IFn$_invoke$arity$2 = (function (src,alt){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"img","img",1442687358),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"src","src",-1651076051),sablono.util.as_str.call(null,src),new cljs.core.Keyword(null,"alt","alt",-3214426),alt], null)], null);
});

sablono.core.image37924.cljs$lang$maxFixedArity = 2;


sablono.core.image = sablono.core.wrap_attrs.call(null,sablono.core.image37924);
sablono.core._STAR_group_STAR_ = cljs.core.PersistentVector.EMPTY;
/**
 * Create a field name from the supplied argument the current field group.
 */
sablono.core.make_name = (function sablono$core$make_name(name){
return cljs.core.reduce.call(null,(function (p1__37928_SHARP_,p2__37929_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37928_SHARP_),"[",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37929_SHARP_),"]"].join('');
}),cljs.core.conj.call(null,sablono.core._STAR_group_STAR_,sablono.util.as_str.call(null,name)));
});
/**
 * Create a field id from the supplied argument and current field group.
 */
sablono.core.make_id = (function sablono$core$make_id(name){
return cljs.core.reduce.call(null,(function (p1__37930_SHARP_,p2__37931_SHARP_){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(p1__37930_SHARP_),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(p2__37931_SHARP_)].join('');
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
sablono.core.color_field37932 = (function sablono$core$color_field37932(var_args){
var G__37934 = arguments.length;
switch (G__37934) {
case 1:
return sablono.core.color_field37932.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.color_field37932.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.color_field37932.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.color_field37932.call(null,name__37866__auto__,null);
});

sablono.core.color_field37932.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"color","color",-1642760596,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.color_field37932.cljs$lang$maxFixedArity = 2;


sablono.core.color_field = sablono.core.wrap_attrs.call(null,sablono.core.color_field37932);

/**
 * Creates a date input field.
 */
sablono.core.date_field37935 = (function sablono$core$date_field37935(var_args){
var G__37937 = arguments.length;
switch (G__37937) {
case 1:
return sablono.core.date_field37935.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.date_field37935.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.date_field37935.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.date_field37935.call(null,name__37866__auto__,null);
});

sablono.core.date_field37935.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"date","date",177097065,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.date_field37935.cljs$lang$maxFixedArity = 2;


sablono.core.date_field = sablono.core.wrap_attrs.call(null,sablono.core.date_field37935);

/**
 * Creates a datetime input field.
 */
sablono.core.datetime_field37938 = (function sablono$core$datetime_field37938(var_args){
var G__37940 = arguments.length;
switch (G__37940) {
case 1:
return sablono.core.datetime_field37938.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_field37938.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_field37938.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.datetime_field37938.call(null,name__37866__auto__,null);
});

sablono.core.datetime_field37938.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime","datetime",2135207229,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.datetime_field37938.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_field37938);

/**
 * Creates a datetime-local input field.
 */
sablono.core.datetime_local_field37941 = (function sablono$core$datetime_local_field37941(var_args){
var G__37943 = arguments.length;
switch (G__37943) {
case 1:
return sablono.core.datetime_local_field37941.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.datetime_local_field37941.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.datetime_local_field37941.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.datetime_local_field37941.call(null,name__37866__auto__,null);
});

sablono.core.datetime_local_field37941.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"datetime-local","datetime-local",-507312697,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.datetime_local_field37941.cljs$lang$maxFixedArity = 2;


sablono.core.datetime_local_field = sablono.core.wrap_attrs.call(null,sablono.core.datetime_local_field37941);

/**
 * Creates a email input field.
 */
sablono.core.email_field37944 = (function sablono$core$email_field37944(var_args){
var G__37946 = arguments.length;
switch (G__37946) {
case 1:
return sablono.core.email_field37944.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.email_field37944.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.email_field37944.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.email_field37944.call(null,name__37866__auto__,null);
});

sablono.core.email_field37944.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"email","email",-1238619063,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.email_field37944.cljs$lang$maxFixedArity = 2;


sablono.core.email_field = sablono.core.wrap_attrs.call(null,sablono.core.email_field37944);

/**
 * Creates a file input field.
 */
sablono.core.file_field37947 = (function sablono$core$file_field37947(var_args){
var G__37949 = arguments.length;
switch (G__37949) {
case 1:
return sablono.core.file_field37947.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.file_field37947.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.file_field37947.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.file_field37947.call(null,name__37866__auto__,null);
});

sablono.core.file_field37947.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"file","file",370885649,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.file_field37947.cljs$lang$maxFixedArity = 2;


sablono.core.file_field = sablono.core.wrap_attrs.call(null,sablono.core.file_field37947);

/**
 * Creates a hidden input field.
 */
sablono.core.hidden_field37950 = (function sablono$core$hidden_field37950(var_args){
var G__37952 = arguments.length;
switch (G__37952) {
case 1:
return sablono.core.hidden_field37950.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.hidden_field37950.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.hidden_field37950.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.hidden_field37950.call(null,name__37866__auto__,null);
});

sablono.core.hidden_field37950.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"hidden","hidden",1328025435,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.hidden_field37950.cljs$lang$maxFixedArity = 2;


sablono.core.hidden_field = sablono.core.wrap_attrs.call(null,sablono.core.hidden_field37950);

/**
 * Creates a month input field.
 */
sablono.core.month_field37953 = (function sablono$core$month_field37953(var_args){
var G__37955 = arguments.length;
switch (G__37955) {
case 1:
return sablono.core.month_field37953.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.month_field37953.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.month_field37953.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.month_field37953.call(null,name__37866__auto__,null);
});

sablono.core.month_field37953.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"month","month",-319717006,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.month_field37953.cljs$lang$maxFixedArity = 2;


sablono.core.month_field = sablono.core.wrap_attrs.call(null,sablono.core.month_field37953);

/**
 * Creates a number input field.
 */
sablono.core.number_field37956 = (function sablono$core$number_field37956(var_args){
var G__37958 = arguments.length;
switch (G__37958) {
case 1:
return sablono.core.number_field37956.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.number_field37956.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.number_field37956.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.number_field37956.call(null,name__37866__auto__,null);
});

sablono.core.number_field37956.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"number","number",-1084057331,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.number_field37956.cljs$lang$maxFixedArity = 2;


sablono.core.number_field = sablono.core.wrap_attrs.call(null,sablono.core.number_field37956);

/**
 * Creates a password input field.
 */
sablono.core.password_field37959 = (function sablono$core$password_field37959(var_args){
var G__37961 = arguments.length;
switch (G__37961) {
case 1:
return sablono.core.password_field37959.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.password_field37959.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.password_field37959.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.password_field37959.call(null,name__37866__auto__,null);
});

sablono.core.password_field37959.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"password","password",2057553998,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.password_field37959.cljs$lang$maxFixedArity = 2;


sablono.core.password_field = sablono.core.wrap_attrs.call(null,sablono.core.password_field37959);

/**
 * Creates a range input field.
 */
sablono.core.range_field37962 = (function sablono$core$range_field37962(var_args){
var G__37964 = arguments.length;
switch (G__37964) {
case 1:
return sablono.core.range_field37962.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.range_field37962.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.range_field37962.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.range_field37962.call(null,name__37866__auto__,null);
});

sablono.core.range_field37962.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"range","range",-1014743483,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.range_field37962.cljs$lang$maxFixedArity = 2;


sablono.core.range_field = sablono.core.wrap_attrs.call(null,sablono.core.range_field37962);

/**
 * Creates a search input field.
 */
sablono.core.search_field37965 = (function sablono$core$search_field37965(var_args){
var G__37967 = arguments.length;
switch (G__37967) {
case 1:
return sablono.core.search_field37965.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.search_field37965.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.search_field37965.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.search_field37965.call(null,name__37866__auto__,null);
});

sablono.core.search_field37965.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"search","search",-1089495947,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.search_field37965.cljs$lang$maxFixedArity = 2;


sablono.core.search_field = sablono.core.wrap_attrs.call(null,sablono.core.search_field37965);

/**
 * Creates a tel input field.
 */
sablono.core.tel_field37968 = (function sablono$core$tel_field37968(var_args){
var G__37970 = arguments.length;
switch (G__37970) {
case 1:
return sablono.core.tel_field37968.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.tel_field37968.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.tel_field37968.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.tel_field37968.call(null,name__37866__auto__,null);
});

sablono.core.tel_field37968.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"tel","tel",1864669686,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.tel_field37968.cljs$lang$maxFixedArity = 2;


sablono.core.tel_field = sablono.core.wrap_attrs.call(null,sablono.core.tel_field37968);

/**
 * Creates a text input field.
 */
sablono.core.text_field37971 = (function sablono$core$text_field37971(var_args){
var G__37973 = arguments.length;
switch (G__37973) {
case 1:
return sablono.core.text_field37971.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_field37971.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_field37971.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.text_field37971.call(null,name__37866__auto__,null);
});

sablono.core.text_field37971.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"text","text",-150030170,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.text_field37971.cljs$lang$maxFixedArity = 2;


sablono.core.text_field = sablono.core.wrap_attrs.call(null,sablono.core.text_field37971);

/**
 * Creates a time input field.
 */
sablono.core.time_field37974 = (function sablono$core$time_field37974(var_args){
var G__37976 = arguments.length;
switch (G__37976) {
case 1:
return sablono.core.time_field37974.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.time_field37974.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.time_field37974.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.time_field37974.call(null,name__37866__auto__,null);
});

sablono.core.time_field37974.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"time","time",-1268547887,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.time_field37974.cljs$lang$maxFixedArity = 2;


sablono.core.time_field = sablono.core.wrap_attrs.call(null,sablono.core.time_field37974);

/**
 * Creates a url input field.
 */
sablono.core.url_field37977 = (function sablono$core$url_field37977(var_args){
var G__37979 = arguments.length;
switch (G__37979) {
case 1:
return sablono.core.url_field37977.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.url_field37977.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.url_field37977.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.url_field37977.call(null,name__37866__auto__,null);
});

sablono.core.url_field37977.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"url","url",1916828573,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.url_field37977.cljs$lang$maxFixedArity = 2;


sablono.core.url_field = sablono.core.wrap_attrs.call(null,sablono.core.url_field37977);

/**
 * Creates a week input field.
 */
sablono.core.week_field37980 = (function sablono$core$week_field37980(var_args){
var G__37982 = arguments.length;
switch (G__37982) {
case 1:
return sablono.core.week_field37980.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.week_field37980.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.week_field37980.cljs$core$IFn$_invoke$arity$1 = (function (name__37866__auto__){
return sablono.core.week_field37980.call(null,name__37866__auto__,null);
});

sablono.core.week_field37980.cljs$core$IFn$_invoke$arity$2 = (function (name__37866__auto__,value__37867__auto__){
return sablono.core.input_field_STAR_.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Symbol(null,"week","week",314058249,null))].join(''),name__37866__auto__,value__37867__auto__);
});

sablono.core.week_field37980.cljs$lang$maxFixedArity = 2;


sablono.core.week_field = sablono.core.wrap_attrs.call(null,sablono.core.week_field37980);
sablono.core.file_upload = sablono.core.file_field;
/**
 * Creates a check box.
 */
sablono.core.check_box38000 = (function sablono$core$check_box38000(var_args){
var G__38002 = arguments.length;
switch (G__38002) {
case 1:
return sablono.core.check_box38000.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.check_box38000.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.check_box38000.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.check_box38000.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.check_box38000.call(null,name,null);
});

sablono.core.check_box38000.cljs$core$IFn$_invoke$arity$2 = (function (name,checked_QMARK_){
return sablono.core.check_box38000.call(null,name,checked_QMARK_,"true");
});

sablono.core.check_box38000.cljs$core$IFn$_invoke$arity$3 = (function (name,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"checkbox",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30023__auto__ = value;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.check_box38000.cljs$lang$maxFixedArity = 3;


sablono.core.check_box = sablono.core.wrap_attrs.call(null,sablono.core.check_box38000);
/**
 * Creates a radio button.
 */
sablono.core.radio_button38004 = (function sablono$core$radio_button38004(var_args){
var G__38006 = arguments.length;
switch (G__38006) {
case 1:
return sablono.core.radio_button38004.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.radio_button38004.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.radio_button38004.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.radio_button38004.cljs$core$IFn$_invoke$arity$1 = (function (group){
return sablono.core.radio_button38004.call(null,group,null);
});

sablono.core.radio_button38004.cljs$core$IFn$_invoke$arity$2 = (function (group,checked_QMARK_){
return sablono.core.radio_button38004.call(null,group,checked_QMARK_,"true");
});

sablono.core.radio_button38004.cljs$core$IFn$_invoke$arity$3 = (function (group,checked_QMARK_,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,group),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,group)),"-",cljs.core.str.cljs$core$IFn$_invoke$arity$1(sablono.util.as_str.call(null,value))].join('')),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30023__auto__ = value;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return undefined;
}
})(),new cljs.core.Keyword(null,"checked","checked",-50955819),checked_QMARK_], null)], null);
});

sablono.core.radio_button38004.cljs$lang$maxFixedArity = 3;


sablono.core.radio_button = sablono.core.wrap_attrs.call(null,sablono.core.radio_button38004);
sablono.core.hash_key = (function sablono$core$hash_key(x){
return goog.string.hashCode(cljs.core.pr_str.call(null,x));
});
/**
 * Creates a seq of option tags from a collection.
 */
sablono.core.select_options38008 = (function sablono$core$select_options38008(coll){
var iter__30905__auto__ = (function sablono$core$select_options38008_$_iter__38009(s__38010){
return (new cljs.core.LazySeq(null,(function (){
var s__38010__$1 = s__38010;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__38010__$1);
if(temp__5457__auto__){
var s__38010__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__38010__$2)){
var c__30903__auto__ = cljs.core.chunk_first.call(null,s__38010__$2);
var size__30904__auto__ = cljs.core.count.call(null,c__30903__auto__);
var b__38012 = cljs.core.chunk_buffer.call(null,size__30904__auto__);
if((function (){var i__38011 = (0);
while(true){
if((i__38011 < size__30904__auto__)){
var x = cljs.core._nth.call(null,c__30903__auto__,i__38011);
cljs.core.chunk_append.call(null,b__38012,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38013 = x;
var text = cljs.core.nth.call(null,vec__38013,(0),null);
var val = cljs.core.nth.call(null,vec__38013,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38013,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38008.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)));

var G__38019 = (i__38011 + (1));
i__38011 = G__38019;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38012),sablono$core$select_options38008_$_iter__38009.call(null,cljs.core.chunk_rest.call(null,s__38010__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__38012),null);
}
} else {
var x = cljs.core.first.call(null,s__38010__$2);
return cljs.core.cons.call(null,((cljs.core.sequential_QMARK_.call(null,x))?(function (){var vec__38016 = x;
var text = cljs.core.nth.call(null,vec__38016,(0),null);
var val = cljs.core.nth.call(null,vec__38016,(1),null);
var disabled_QMARK_ = cljs.core.nth.call(null,vec__38016,(2),null);
var disabled_QMARK___$1 = cljs.core.boolean$.call(null,disabled_QMARK_);
if(cljs.core.sequential_QMARK_.call(null,val)){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"optgroup","optgroup",1738282218),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,text),new cljs.core.Keyword(null,"label","label",1718410804),text], null),sablono.core.select_options38008.call(null,val)], null);
} else {
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"disabled","disabled",-1529784218),disabled_QMARK___$1,new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,val),new cljs.core.Keyword(null,"value","value",305978217),val], null),text], null);
}
})():new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"option","option",65132272),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"key","key",-1516042587),sablono.core.hash_key.call(null,x),new cljs.core.Keyword(null,"value","value",305978217),x], null),x], null)),sablono$core$select_options38008_$_iter__38009.call(null,cljs.core.rest.call(null,s__38010__$2)));
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

sablono.core.select_options = sablono.core.wrap_attrs.call(null,sablono.core.select_options38008);
/**
 * Creates a drop-down box using the <select> tag.
 */
sablono.core.drop_down38020 = (function sablono$core$drop_down38020(var_args){
var G__38022 = arguments.length;
switch (G__38022) {
case 2:
return sablono.core.drop_down38020.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return sablono.core.drop_down38020.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.drop_down38020.cljs$core$IFn$_invoke$arity$2 = (function (name,options){
return sablono.core.drop_down38020.call(null,name,options,null);
});

sablono.core.drop_down38020.cljs$core$IFn$_invoke$arity$3 = (function (name,options,selected){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"select","select",1147833503),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name)], null),sablono.core.select_options.call(null,options,selected)], null);
});

sablono.core.drop_down38020.cljs$lang$maxFixedArity = 3;


sablono.core.drop_down = sablono.core.wrap_attrs.call(null,sablono.core.drop_down38020);
/**
 * Creates a text area element.
 */
sablono.core.text_area38024 = (function sablono$core$text_area38024(var_args){
var G__38026 = arguments.length;
switch (G__38026) {
case 1:
return sablono.core.text_area38024.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return sablono.core.text_area38024.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

sablono.core.text_area38024.cljs$core$IFn$_invoke$arity$1 = (function (name){
return sablono.core.text_area38024.call(null,name,null);
});

sablono.core.text_area38024.cljs$core$IFn$_invoke$arity$2 = (function (name,value){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"textarea","textarea",-650375824),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"name","name",1843675177),sablono.core.make_name.call(null,name),new cljs.core.Keyword(null,"id","id",-1388402092),sablono.core.make_id.call(null,name),new cljs.core.Keyword(null,"value","value",305978217),(function (){var or__30023__auto__ = value;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return undefined;
}
})()], null)], null);
});

sablono.core.text_area38024.cljs$lang$maxFixedArity = 2;


sablono.core.text_area = sablono.core.wrap_attrs.call(null,sablono.core.text_area38024);
/**
 * Creates a label for an input field with the supplied name.
 */
sablono.core.label38028 = (function sablono$core$label38028(name,text){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"htmlFor","htmlFor",-1050291720),sablono.core.make_id.call(null,name)], null),text], null);
});

sablono.core.label = sablono.core.wrap_attrs.call(null,sablono.core.label38028);
/**
 * Creates a submit button.
 */
sablono.core.submit_button38029 = (function sablono$core$submit_button38029(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"submit",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.submit_button = sablono.core.wrap_attrs.call(null,sablono.core.submit_button38029);
/**
 * Creates a form reset button.
 */
sablono.core.reset_button38030 = (function sablono$core$reset_button38030(text){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"type","type",1174270348),"reset",new cljs.core.Keyword(null,"value","value",305978217),text], null)], null);
});

sablono.core.reset_button = sablono.core.wrap_attrs.call(null,sablono.core.reset_button38030);
/**
 * Create a form that points to a particular method and route.
 *   e.g. (form-to [:put "/post"]
 *       ...)
 */
sablono.core.form_to38031 = (function sablono$core$form_to38031(var_args){
var args__31307__auto__ = [];
var len__31300__auto___38038 = arguments.length;
var i__31301__auto___38039 = (0);
while(true){
if((i__31301__auto___38039 < len__31300__auto___38038)){
args__31307__auto__.push((arguments[i__31301__auto___38039]));

var G__38040 = (i__31301__auto___38039 + (1));
i__31301__auto___38039 = G__38040;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((1) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((1)),(0),null)):null);
return sablono.core.form_to38031.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31308__auto__);
});

sablono.core.form_to38031.cljs$core$IFn$_invoke$arity$variadic = (function (p__38034,body){
var vec__38035 = p__38034;
var method = cljs.core.nth.call(null,vec__38035,(0),null);
var action = cljs.core.nth.call(null,vec__38035,(1),null);
var method_str = clojure.string.upper_case.call(null,cljs.core.name.call(null,method));
var action_uri = sablono.util.to_uri.call(null,action);
return cljs.core.vec.call(null,cljs.core.concat.call(null,((cljs.core.contains_QMARK_.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"get","get",1683182755),null,new cljs.core.Keyword(null,"post","post",269697687),null], null), null),method))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),method_str,new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null)], null):new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"method","method",55703592),"POST",new cljs.core.Keyword(null,"action","action",-811238024),action_uri], null),sablono.core.hidden_field.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),(3735928559)], null),"_method",method_str)], null)),body));
});

sablono.core.form_to38031.cljs$lang$maxFixedArity = (1);

sablono.core.form_to38031.cljs$lang$applyTo = (function (seq38032){
var G__38033 = cljs.core.first.call(null,seq38032);
var seq38032__$1 = cljs.core.next.call(null,seq38032);
return sablono.core.form_to38031.cljs$core$IFn$_invoke$arity$variadic(G__38033,seq38032__$1);
});


sablono.core.form_to = sablono.core.wrap_attrs.call(null,sablono.core.form_to38031);

//# sourceMappingURL=core.js.map?rel=1515306580574
