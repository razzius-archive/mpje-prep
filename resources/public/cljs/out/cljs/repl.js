// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.repl');
goog.require('cljs.core');
goog.require('cljs.spec.alpha');
cljs.repl.print_doc = (function cljs$repl$print_doc(p__38849){
var map__38850 = p__38849;
var map__38850__$1 = ((((!((map__38850 == null)))?((((map__38850.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38850.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38850):map__38850);
var m = map__38850__$1;
var n = cljs.core.get.call(null,map__38850__$1,new cljs.core.Keyword(null,"ns","ns",441598760));
var nm = cljs.core.get.call(null,map__38850__$1,new cljs.core.Keyword(null,"name","name",1843675177));
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
var seq__38852_38874 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"forms","forms",2045992350).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38853_38875 = null;
var count__38854_38876 = (0);
var i__38855_38877 = (0);
while(true){
if((i__38855_38877 < count__38854_38876)){
var f_38878 = cljs.core._nth.call(null,chunk__38853_38875,i__38855_38877);
cljs.core.println.call(null,"  ",f_38878);

var G__38879 = seq__38852_38874;
var G__38880 = chunk__38853_38875;
var G__38881 = count__38854_38876;
var G__38882 = (i__38855_38877 + (1));
seq__38852_38874 = G__38879;
chunk__38853_38875 = G__38880;
count__38854_38876 = G__38881;
i__38855_38877 = G__38882;
continue;
} else {
var temp__5457__auto___38883 = cljs.core.seq.call(null,seq__38852_38874);
if(temp__5457__auto___38883){
var seq__38852_38884__$1 = temp__5457__auto___38883;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38852_38884__$1)){
var c__30954__auto___38885 = cljs.core.chunk_first.call(null,seq__38852_38884__$1);
var G__38886 = cljs.core.chunk_rest.call(null,seq__38852_38884__$1);
var G__38887 = c__30954__auto___38885;
var G__38888 = cljs.core.count.call(null,c__30954__auto___38885);
var G__38889 = (0);
seq__38852_38874 = G__38886;
chunk__38853_38875 = G__38887;
count__38854_38876 = G__38888;
i__38855_38877 = G__38889;
continue;
} else {
var f_38890 = cljs.core.first.call(null,seq__38852_38884__$1);
cljs.core.println.call(null,"  ",f_38890);

var G__38891 = cljs.core.next.call(null,seq__38852_38884__$1);
var G__38892 = null;
var G__38893 = (0);
var G__38894 = (0);
seq__38852_38874 = G__38891;
chunk__38853_38875 = G__38892;
count__38854_38876 = G__38893;
i__38855_38877 = G__38894;
continue;
}
} else {
}
}
break;
}
} else {
if(cljs.core.truth_(new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m))){
var arglists_38895 = new cljs.core.Keyword(null,"arglists","arglists",1661989754).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_((function (){var or__30023__auto__ = new cljs.core.Keyword(null,"macro","macro",-867863404).cljs$core$IFn$_invoke$arity$1(m);
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return new cljs.core.Keyword(null,"repl-special-function","repl-special-function",1262603725).cljs$core$IFn$_invoke$arity$1(m);
}
})())){
cljs.core.prn.call(null,arglists_38895);
} else {
cljs.core.prn.call(null,((cljs.core._EQ_.call(null,new cljs.core.Symbol(null,"quote","quote",1377916282,null),cljs.core.first.call(null,arglists_38895)))?cljs.core.second.call(null,arglists_38895):arglists_38895));
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
var seq__38856_38896 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"methods","methods",453930866).cljs$core$IFn$_invoke$arity$1(m));
var chunk__38857_38897 = null;
var count__38858_38898 = (0);
var i__38859_38899 = (0);
while(true){
if((i__38859_38899 < count__38858_38898)){
var vec__38860_38900 = cljs.core._nth.call(null,chunk__38857_38897,i__38859_38899);
var name_38901 = cljs.core.nth.call(null,vec__38860_38900,(0),null);
var map__38863_38902 = cljs.core.nth.call(null,vec__38860_38900,(1),null);
var map__38863_38903__$1 = ((((!((map__38863_38902 == null)))?((((map__38863_38902.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38863_38902.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38863_38902):map__38863_38902);
var doc_38904 = cljs.core.get.call(null,map__38863_38903__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38905 = cljs.core.get.call(null,map__38863_38903__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38901);

cljs.core.println.call(null," ",arglists_38905);

if(cljs.core.truth_(doc_38904)){
cljs.core.println.call(null," ",doc_38904);
} else {
}

var G__38906 = seq__38856_38896;
var G__38907 = chunk__38857_38897;
var G__38908 = count__38858_38898;
var G__38909 = (i__38859_38899 + (1));
seq__38856_38896 = G__38906;
chunk__38857_38897 = G__38907;
count__38858_38898 = G__38908;
i__38859_38899 = G__38909;
continue;
} else {
var temp__5457__auto___38910 = cljs.core.seq.call(null,seq__38856_38896);
if(temp__5457__auto___38910){
var seq__38856_38911__$1 = temp__5457__auto___38910;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38856_38911__$1)){
var c__30954__auto___38912 = cljs.core.chunk_first.call(null,seq__38856_38911__$1);
var G__38913 = cljs.core.chunk_rest.call(null,seq__38856_38911__$1);
var G__38914 = c__30954__auto___38912;
var G__38915 = cljs.core.count.call(null,c__30954__auto___38912);
var G__38916 = (0);
seq__38856_38896 = G__38913;
chunk__38857_38897 = G__38914;
count__38858_38898 = G__38915;
i__38859_38899 = G__38916;
continue;
} else {
var vec__38865_38917 = cljs.core.first.call(null,seq__38856_38911__$1);
var name_38918 = cljs.core.nth.call(null,vec__38865_38917,(0),null);
var map__38868_38919 = cljs.core.nth.call(null,vec__38865_38917,(1),null);
var map__38868_38920__$1 = ((((!((map__38868_38919 == null)))?((((map__38868_38919.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__38868_38919.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__38868_38919):map__38868_38919);
var doc_38921 = cljs.core.get.call(null,map__38868_38920__$1,new cljs.core.Keyword(null,"doc","doc",1913296891));
var arglists_38922 = cljs.core.get.call(null,map__38868_38920__$1,new cljs.core.Keyword(null,"arglists","arglists",1661989754));
cljs.core.println.call(null);

cljs.core.println.call(null," ",name_38918);

cljs.core.println.call(null," ",arglists_38922);

if(cljs.core.truth_(doc_38921)){
cljs.core.println.call(null," ",doc_38921);
} else {
}

var G__38923 = cljs.core.next.call(null,seq__38856_38911__$1);
var G__38924 = null;
var G__38925 = (0);
var G__38926 = (0);
seq__38856_38896 = G__38923;
chunk__38857_38897 = G__38924;
count__38858_38898 = G__38925;
i__38859_38899 = G__38926;
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

var seq__38870 = cljs.core.seq.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"args","args",1315556576),new cljs.core.Keyword(null,"ret","ret",-468222814),new cljs.core.Keyword(null,"fn","fn",-1175266204)], null));
var chunk__38871 = null;
var count__38872 = (0);
var i__38873 = (0);
while(true){
if((i__38873 < count__38872)){
var role = cljs.core._nth.call(null,chunk__38871,i__38873);
var temp__5457__auto___38927__$1 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38927__$1)){
var spec_38928 = temp__5457__auto___38927__$1;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38928));
} else {
}

var G__38929 = seq__38870;
var G__38930 = chunk__38871;
var G__38931 = count__38872;
var G__38932 = (i__38873 + (1));
seq__38870 = G__38929;
chunk__38871 = G__38930;
count__38872 = G__38931;
i__38873 = G__38932;
continue;
} else {
var temp__5457__auto____$1 = cljs.core.seq.call(null,seq__38870);
if(temp__5457__auto____$1){
var seq__38870__$1 = temp__5457__auto____$1;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__38870__$1)){
var c__30954__auto__ = cljs.core.chunk_first.call(null,seq__38870__$1);
var G__38933 = cljs.core.chunk_rest.call(null,seq__38870__$1);
var G__38934 = c__30954__auto__;
var G__38935 = cljs.core.count.call(null,c__30954__auto__);
var G__38936 = (0);
seq__38870 = G__38933;
chunk__38871 = G__38934;
count__38872 = G__38935;
i__38873 = G__38936;
continue;
} else {
var role = cljs.core.first.call(null,seq__38870__$1);
var temp__5457__auto___38937__$2 = cljs.core.get.call(null,fnspec,role);
if(cljs.core.truth_(temp__5457__auto___38937__$2)){
var spec_38938 = temp__5457__auto___38937__$2;
cljs.core.print.call(null,["\n ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.name.call(null,role)),":"].join(''),cljs.spec.alpha.describe.call(null,spec_38938));
} else {
}

var G__38939 = cljs.core.next.call(null,seq__38870__$1);
var G__38940 = null;
var G__38941 = (0);
var G__38942 = (0);
seq__38870 = G__38939;
chunk__38871 = G__38940;
count__38872 = G__38941;
i__38873 = G__38942;
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

//# sourceMappingURL=repl.js.map?rel=1515306582158
