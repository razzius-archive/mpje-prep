// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38854){
var map__38855 = p__38854;
var map__38855__$1 = ((((!((map__38855 == null)))?((((map__38855.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38855.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38855):map__38855);
var m = map__38855__$1;
var n = cljs.core.get.call(null,map__38855__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38855__$1,new cljs.core.Keyword(null,"name","name",1843675177));
cljs.core.println.call(null,"-------------------------");

cljs.core.println.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1((function (){var temp__5457__auto__ = new cljs.core.Keyword(null,"ns","ns",441598760).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(temp__5457__auto__)){
var ns = temp__5457__auto__;
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(ns),"/"].join('');
} else {
return null;
}
})()),cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Protocol");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38857_38879 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38858_38880 = null;
var count__38859_38881 = (0);
var i__38860_38882 = (0);
while(true){
if((i__38860_38882 < count__38859_38881)){
var f_38883 = cljs.core._nth.call(null,chunk__38858_38880,i__38860_38882);
cljs.core.println.call(null,"  ",f_38883);

var G__38884 = seq__38857_38879;
var G__38885 = chunk__38858_38880;
var G__38886 = count__38859_38881;
var G__38887 = (i__38860_38882 + (1));
seq__38857_38879 = G__38884;
chunk__38858_38880 = G__38885;
count__38859_38881 = G__38886;
i__38860_38882 = G__38887;
continue;
} else {
var temp__5457__auto___38888 = cljs.core.seq.call(null,seq__38857_38879);
if(temp__5457__auto___38888){
var seq__38857_38889__$1 = temp__5457__auto___38888;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38857_38889__$1)){
var c__30954__auto___38890 = cljs.core.chunk_first.call(null,seq__38857_38889__$1);
var G__38891 = cljs.core.chunk_rest.call(null,seq__38857_38889__$1);
var G__38892 = c__30954__auto___38890;
var G__38893 = cljs.core.count.call(null,c__30954__auto___38890);
var G__38894 = (0);
seq__38857_38879 = G__38891;
chunk__38858_38880 = G__38892;
count__38859_38881 = G__38893;
i__38860_38882 = G__38894;
continue;
} else {
var f_38895 = cljs.core.first.call(null,seq__38857_38889__$1);
cljs.core.println.call(null,"  ",f_38895);

var G__38896 = cljs.core.next.call(null,seq__38857_38889__$1);
var G__38897 = null;
var G__38898 = (0);
var G__38899 = (0);
seq__38857_38879 = G__38896;
chunk__38858_38880 = G__38897;
count__38859_38881 = G__38898;
i__38860_38882 = G__38899;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38900 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30023__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38900);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38900)))?cljs.core.second.call(null,arglists_38900):arglists_38900));
}
} else {
}
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"special-form","special-form",-1326536374).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Special Form");

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.contains_QMARK_.call(null,m,new cljs.core.Keyword(null,"url","url",276297046))){
if(cljs.core.truth_(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))){
return cljs.core.println.call(null,["\n  Please see http://clojure.org/",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"url","url",276297046).cljs$core$IFn$_invoke$arity$1(m))].join(''));
} else {
return null;
}
} else {
return cljs.core.println.call(null,["\n  Please see http://clojure.org/special_forms#",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"name","name",1843675177).cljs$core$IFn$_invoke$arity$1(m))].join(''));
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"Macro");
} else {
}

if(cljs.core.truth_(new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m))){
cljs.core.println.call(null,"REPL Special Function");
} else {
}

cljs.core.println.call(null," ",new cljs.core.Keyword(null,"doc","doc",1913296891).cljs$core$IFn$_invoke$arity$1(m));

if(cljs.core.truth_(new cljs.core.Keyword(null,"protocol","protocol",652470118).cljs$core$IFn$_invoke$arity$1(m))){
var seq__38861_38901 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38862_38902 = null;
var count__38863_38903 = (0);
var i__38864_38904 = (0);
while(true){
if((i__38864_38904 < count__38863_38903)){
var vec__38865_38905 = cljs.core._nth.call(null,chunk__38862_38902,i__38864_38904);
var name_38906 = cljs.core.nth.call(null,vec__38865_38905,(0),null);
var map__38868_38907 = cljs.core.nth.call(null,vec__38865_38905,(1),null);
var map__38868_38908__$1 = ((((!((map__38868_38907 == null)))?((((map__38868_38907.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38868_38907.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38868_38907):map__38868_38907);
var doc_38909 = cljs.core.get.call(null,map__38868_38908__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38910 = cljs.core.get.call(null,map__38868_38908__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38906);

cljs.core.println.call(null," ",arglists_38910);

if(cljs.core.truth_(doc_38909)){
cljs.core.println.call(null," ",doc_38909);
} else {
}

var G__38911 = seq__38861_38901;
var G__38912 = chunk__38862_38902;
var G__38913 = count__38863_38903;
var G__38914 = (i__38864_38904 + (1));
seq__38861_38901 = G__38911;
chunk__38862_38902 = G__38912;
count__38863_38903 = G__38913;
i__38864_38904 = G__38914;
continue;
} else {
var temp__5457__auto___38915 = cljs.core.seq.call(null,seq__38861_38901);
if(temp__5457__auto___38915){
var seq__38861_38916__$1 = temp__5457__auto___38915;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38861_38916__$1)){
var c__30954__auto___38917 = cljs.core.chunk_first.call(null,seq__38861_38916__$1);
var G__38918 = cljs.core.chunk_rest.call(null,seq__38861_38916__$1);
var G__38919 = c__30954__auto___38917;
var G__38920 = cljs.core.count.call(null,c__30954__auto___38917);
var G__38921 = (0);
seq__38861_38901 = G__38918;
chunk__38862_38902 = G__38919;
count__38863_38903 = G__38920;
i__38864_38904 = G__38921;
continue;
} else {
var vec__38870_38922 = cljs.core.first.call(null,seq__38861_38916__$1);
var name_38923 = cljs.core.nth.call(null,vec__38870_38922,(0),null);
var map__38873_38924 = cljs.core.nth.call(null,vec__38870_38922,(1),null);
var map__38873_38925__$1 = ((((!((map__38873_38924 == null)))?((((map__38873_38924.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38873_38924.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38873_38924):map__38873_38924);
var doc_38926 = cljs.core.get.call(null,map__38873_38925__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38927 = cljs.core.get.call(null,map__38873_38925__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38923);

cljs.core.println.call(null," ",arglists_38927);

if(cljs.core.truth_(doc_38926)){
cljs.core.println.call(null," ",doc_38926);
} else {
}

var G__38928 = cljs.core.next.call(null,seq__38861_38916__$1);
var G__38929 = null;
var G__38930 = (0);
var G__38931 = (0);
seq__38861_38901 = G__38928;
chunk__38862_38902 = G__38929;
count__38863_38903 = G__38930;
i__38864_38904 = G__38931;
continue;
}
} else {
}
}
break;
}
} else {
}

if(cljs.core.truth_(n)){
var temp__5457__auto__ = cljs.spec.alpha.get_spec.call(null,cljs.core.symbol.call(null,[cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.ns_name.call(null,n))].join(''),cljs.core.name.call(null,nm)));
if(cljs.core.truth_(temp__5457__auto__)){
var fnspec = temp__5457__auto__;
cljs.core.print.call(null,"Spec");

var seq__38875 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38876 = null;
var count__38877 = (0);
var i__38878 = (0);
while(true){
if((i__38878 < count__38877)){
var role = cljs.core._nth.call(null,chunk__38876,i__38878);
var temp__5457__auto___38932__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38932__$1)){
var spec_38933 = temp__5457__auto___38932__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38933));
} else {
}

var G__38934 = seq__38875;
var G__38935 = chunk__38876;
var G__38936 = count__38877;
var G__38937 = (i__38878 + (1));
seq__38875 = G__38934;
chunk__38876 = G__38935;
count__38877 = G__38936;
i__38878 = G__38937;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38875);
if(temp__5457__auto____$1){
var seq__38875__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38875__$1)){
var c__30954__auto__ = cljs.core.chunk_first.call(null,seq__38875__$1);
var G__38938 = cljs.core.chunk_rest.call(null,seq__38875__$1);
var G__38939 = c__30954__auto__;
var G__38940 = cljs.core.count.call(null,c__30954__auto__);
var G__38941 = (0);
seq__38875 = G__38938;
chunk__38876 = G__38939;
count__38877 = G__38940;
i__38878 = G__38941;
continue;
} else {
var role = cljs.core.first.call(null,seq__38875__$1);
var temp__5457__auto___38942__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38942__$2)){
var spec_38943 = temp__5457__auto___38942__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38943));
} else {
}

var G__38944 = cljs.core.next.call(null,seq__38875__$1);
var G__38945 = null;
var G__38946 = (0);
var G__38947 = (0);
seq__38875 = G__38944;
chunk__38876 = G__38945;
count__38877 = G__38946;
i__38878 = G__38947;
continue;
}
} else {
return null;
}
}
break;
}
} else {
return null;
}
} else {
return null;
}
}
});

//# sourceMappingURL=repl.js.map?rel=1515300963033
