// Compiled by ClojureScript 1.9.908 {}
goog.provide('figwheel.client');
goog.require('cljs.core');
goog.require('goog.Uri');
goog.require('goog.userAgent.product');
goog.require('goog.object');
goog.require('cljs.reader');
goog.require('cljs.core.async');
goog.require('figwheel.client.socket');
goog.require('figwheel.client.utils');
goog.require('figwheel.client.heads_up');
goog.require('figwheel.client.file_reloading');
goog.require('clojure.string');
goog.require('cljs.repl');
figwheel.client._figwheel_version_ = "0.5.13";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e39142){if((e39142 instanceof Error)){
var e = e39142;
return "Error: Unable to stringify";
} else {
throw e39142;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__39145 = arguments.length;
switch (G__39145) {
case 2:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 1:
return figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$2 = (function (stream,args){
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__39143_SHARP_){
if(typeof p1__39143_SHARP_ === 'string'){
return p1__39143_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__39143_SHARP_);
}
}),args)], null)], null));

return null;
});

figwheel.client.figwheel_repl_print.cljs$core$IFn$_invoke$arity$1 = (function (args){
return figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);
});

figwheel.client.figwheel_repl_print.cljs$lang$maxFixedArity = 2;

figwheel.client.console_out_print = (function figwheel$client$console_out_print(args){
return console.log.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.console_err_print = (function figwheel$client$console_err_print(args){
return console.error.apply(console,cljs.core.into_array.call(null,args));
});
figwheel.client.repl_out_print_fn = (function figwheel$client$repl_out_print_fn(var_args){
var args__31307__auto__ = [];
var len__31300__auto___39148 = arguments.length;
var i__31301__auto___39149 = (0);
while(true){
if((i__31301__auto___39149 < len__31300__auto___39148)){
args__31307__auto__.push((arguments[i__31301__auto___39149]));

var G__39150 = (i__31301__auto___39149 + (1));
i__31301__auto___39149 = G__39150;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq39147){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39147));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31307__auto__ = [];
var len__31300__auto___39152 = arguments.length;
var i__31301__auto___39153 = (0);
while(true){
if((i__31301__auto___39153 < len__31300__auto___39152)){
args__31307__auto__.push((arguments[i__31301__auto___39153]));

var G__39154 = (i__31301__auto___39153 + (1));
i__31301__auto___39153 = G__39154;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq39151){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39151));
});

figwheel.client.enable_repl_print_BANG_ = (function figwheel$client$enable_repl_print_BANG_(){
cljs.core._STAR_print_newline_STAR_ = false;

cljs.core.set_print_fn_BANG_.call(null,figwheel.client.repl_out_print_fn);

cljs.core.set_print_err_fn_BANG_.call(null,figwheel.client.repl_err_print_fn);

return null;
});
figwheel.client.autoload_QMARK_ = (function figwheel$client$autoload_QMARK_(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),true);
});
figwheel.client.toggle_autoload = (function figwheel$client$toggle_autoload(){
var res = figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),cljs.core.not.call(null,figwheel.client.autoload_QMARK_.call(null)));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Toggle autoload deprecated! Use (figwheel.client/set-autoload! false)"].join(''));

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Figwheel autoloading ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.autoload_QMARK_.call(null))?"ON":"OFF"))].join(''));

return res;
});
goog.exportSymbol('figwheel.client.toggle_autoload', figwheel.client.toggle_autoload);
/**
 * Figwheel by default loads code changes as you work. Sometimes you
 *   just want to work on your code without the ramifications of
 *   autoloading and simply load your code piecemeal in the REPL. You can
 *   turn autoloading on and of with this method.
 * 
 *   (figwheel.client/set-autoload false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_autoload = (function figwheel$client$set_autoload(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-autoload","figwheel-autoload",-2044741728),b);
});
goog.exportSymbol('figwheel.client.set_autoload', figwheel.client.set_autoload);
figwheel.client.repl_pprint = (function figwheel$client$repl_pprint(){
return figwheel.client.utils.persistent_config_get.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),true);
});
goog.exportSymbol('figwheel.client.repl_pprint', figwheel.client.repl_pprint);
/**
 * This method gives you the ability to turn the pretty printing of
 *   the REPL's return value on and off.
 * 
 *   (figwheel.client/set-repl-pprint false)
 * 
 *   NOTE: This is a persistent setting, meaning that it will persist
 *   through browser reloads.
 */
figwheel.client.set_repl_pprint = (function figwheel$client$set_repl_pprint(b){
if((b === true) || (b === false)){
} else {
throw (new Error("Assert failed: (or (true? b) (false? b))"));
}

return figwheel.client.utils.persistent_config_set_BANG_.call(null,new cljs.core.Keyword(null,"figwheel-repl-pprint","figwheel-repl-pprint",1076150873),b);
});
goog.exportSymbol('figwheel.client.set_repl_pprint', figwheel.client.set_repl_pprint);
figwheel.client.repl_result_pr_str = (function figwheel$client$repl_result_pr_str(v){
if(cljs.core.truth_(figwheel.client.repl_pprint.call(null))){
return figwheel.client.utils.pprint_to_string.call(null,v);
} else {
return cljs.core.pr_str.call(null,v);
}
});
goog.exportSymbol('figwheel.client.repl_result_pr_str', figwheel.client.repl_result_pr_str);
figwheel.client.get_essential_messages = (function figwheel$client$get_essential_messages(ed){
if(cljs.core.truth_(ed)){
return cljs.core.cons.call(null,cljs.core.select_keys.call(null,ed,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"message","message",-406056002),new cljs.core.Keyword(null,"class","class",-2030961996)], null)),figwheel.client.get_essential_messages.call(null,new cljs.core.Keyword(null,"cause","cause",231901252).cljs$core$IFn$_invoke$arity$1(ed)));
} else {
return null;
}
});
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__39155){
var map__39156 = p__39155;
var map__39156__$1 = ((((!((map__39156 == null)))?((((map__39156.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39156.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39156):map__39156);
var message = cljs.core.get.call(null,map__39156__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__39156__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30023__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30011__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30011__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30011__auto__;
}
});
figwheel.client.block_reload_file_state_QMARK_ = (function figwheel$client$block_reload_file_state_QMARK_(msg_names,opts){
return (cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))) && (cljs.core.not.call(null,figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts)));
});
figwheel.client.warning_append_state_QMARK_ = (function figwheel$client$warning_append_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.warning_state_QMARK_ = (function figwheel$client$warning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),cljs.core.first.call(null,msg_names));
});
figwheel.client.rewarning_state_QMARK_ = (function figwheel$client$rewarning_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356)], null),cljs.core.take.call(null,(3),msg_names));
});
figwheel.client.compile_fail_state_QMARK_ = (function figwheel$client$compile_fail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),cljs.core.first.call(null,msg_names));
});
figwheel.client.compile_refail_state_QMARK_ = (function figwheel$client$compile_refail_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289)], null),cljs.core.take.call(null,(2),msg_names));
});
figwheel.client.css_loaded_state_QMARK_ = (function figwheel$client$css_loaded_state_QMARK_(msg_names){
return cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874),cljs.core.first.call(null,msg_names));
});
figwheel.client.file_reloader_plugin = (function figwheel$client$file_reloader_plugin(opts){
var ch = cljs.core.async.chan.call(null);
var c__34231__auto___39235 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___39235,ch){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___39235,ch){
return (function (state_39207){
var state_val_39208 = (state_39207[(1)]);
if((state_val_39208 === (7))){
var inst_39203 = (state_39207[(2)]);
var state_39207__$1 = state_39207;
var statearr_39209_39236 = state_39207__$1;
(statearr_39209_39236[(2)] = inst_39203);

(statearr_39209_39236[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (1))){
var state_39207__$1 = state_39207;
var statearr_39210_39237 = state_39207__$1;
(statearr_39210_39237[(2)] = null);

(statearr_39210_39237[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (4))){
var inst_39160 = (state_39207[(7)]);
var inst_39160__$1 = (state_39207[(2)]);
var state_39207__$1 = (function (){var statearr_39211 = state_39207;
(statearr_39211[(7)] = inst_39160__$1);

return statearr_39211;
})();
if(cljs.core.truth_(inst_39160__$1)){
var statearr_39212_39238 = state_39207__$1;
(statearr_39212_39238[(1)] = (5));

} else {
var statearr_39213_39239 = state_39207__$1;
(statearr_39213_39239[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (15))){
var inst_39167 = (state_39207[(8)]);
var inst_39182 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39167);
var inst_39183 = cljs.core.first.call(null,inst_39182);
var inst_39184 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_39183);
var inst_39185 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39184)].join('');
var inst_39186 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_39185);
var state_39207__$1 = state_39207;
var statearr_39214_39240 = state_39207__$1;
(statearr_39214_39240[(2)] = inst_39186);

(statearr_39214_39240[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (13))){
var inst_39191 = (state_39207[(2)]);
var state_39207__$1 = state_39207;
var statearr_39215_39241 = state_39207__$1;
(statearr_39215_39241[(2)] = inst_39191);

(statearr_39215_39241[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (6))){
var state_39207__$1 = state_39207;
var statearr_39216_39242 = state_39207__$1;
(statearr_39216_39242[(2)] = null);

(statearr_39216_39242[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (17))){
var inst_39189 = (state_39207[(2)]);
var state_39207__$1 = state_39207;
var statearr_39217_39243 = state_39207__$1;
(statearr_39217_39243[(2)] = inst_39189);

(statearr_39217_39243[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (3))){
var inst_39205 = (state_39207[(2)]);
var state_39207__$1 = state_39207;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39207__$1,inst_39205);
} else {
if((state_val_39208 === (12))){
var inst_39166 = (state_39207[(9)]);
var inst_39180 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_39166,opts);
var state_39207__$1 = state_39207;
if(cljs.core.truth_(inst_39180)){
var statearr_39218_39244 = state_39207__$1;
(statearr_39218_39244[(1)] = (15));

} else {
var statearr_39219_39245 = state_39207__$1;
(statearr_39219_39245[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (2))){
var state_39207__$1 = state_39207;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39207__$1,(4),ch);
} else {
if((state_val_39208 === (11))){
var inst_39167 = (state_39207[(8)]);
var inst_39172 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_39173 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_39167);
var inst_39174 = cljs.core.async.timeout.call(null,(1000));
var inst_39175 = [inst_39173,inst_39174];
var inst_39176 = (new cljs.core.PersistentVector(null,2,(5),inst_39172,inst_39175,null));
var state_39207__$1 = state_39207;
return cljs.core.async.ioc_alts_BANG_.call(null,state_39207__$1,(14),inst_39176);
} else {
if((state_val_39208 === (9))){
var inst_39167 = (state_39207[(8)]);
var inst_39193 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_39194 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_39167);
var inst_39195 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_39194);
var inst_39196 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_39195)].join('');
var inst_39197 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_39196);
var state_39207__$1 = (function (){var statearr_39220 = state_39207;
(statearr_39220[(10)] = inst_39193);

return statearr_39220;
})();
var statearr_39221_39246 = state_39207__$1;
(statearr_39221_39246[(2)] = inst_39197);

(statearr_39221_39246[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (5))){
var inst_39160 = (state_39207[(7)]);
var inst_39162 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_39163 = (new cljs.core.PersistentArrayMap(null,2,inst_39162,null));
var inst_39164 = (new cljs.core.PersistentHashSet(null,inst_39163,null));
var inst_39165 = figwheel.client.focus_msgs.call(null,inst_39164,inst_39160);
var inst_39166 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_39165);
var inst_39167 = cljs.core.first.call(null,inst_39165);
var inst_39168 = figwheel.client.autoload_QMARK_.call(null);
var state_39207__$1 = (function (){var statearr_39222 = state_39207;
(statearr_39222[(8)] = inst_39167);

(statearr_39222[(9)] = inst_39166);

return statearr_39222;
})();
if(cljs.core.truth_(inst_39168)){
var statearr_39223_39247 = state_39207__$1;
(statearr_39223_39247[(1)] = (8));

} else {
var statearr_39224_39248 = state_39207__$1;
(statearr_39224_39248[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (14))){
var inst_39178 = (state_39207[(2)]);
var state_39207__$1 = state_39207;
var statearr_39225_39249 = state_39207__$1;
(statearr_39225_39249[(2)] = inst_39178);

(statearr_39225_39249[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (16))){
var state_39207__$1 = state_39207;
var statearr_39226_39250 = state_39207__$1;
(statearr_39226_39250[(2)] = null);

(statearr_39226_39250[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (10))){
var inst_39199 = (state_39207[(2)]);
var state_39207__$1 = (function (){var statearr_39227 = state_39207;
(statearr_39227[(11)] = inst_39199);

return statearr_39227;
})();
var statearr_39228_39251 = state_39207__$1;
(statearr_39228_39251[(2)] = null);

(statearr_39228_39251[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39208 === (8))){
var inst_39166 = (state_39207[(9)]);
var inst_39170 = figwheel.client.reload_file_state_QMARK_.call(null,inst_39166,opts);
var state_39207__$1 = state_39207;
if(cljs.core.truth_(inst_39170)){
var statearr_39229_39252 = state_39207__$1;
(statearr_39229_39252[(1)] = (11));

} else {
var statearr_39230_39253 = state_39207__$1;
(statearr_39230_39253[(1)] = (12));

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
});})(c__34231__auto___39235,ch))
;
return ((function (switch__34141__auto__,c__34231__auto___39235,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__34142__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__34142__auto____0 = (function (){
var statearr_39231 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39231[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__34142__auto__);

(statearr_39231[(1)] = (1));

return statearr_39231;
});
var figwheel$client$file_reloader_plugin_$_state_machine__34142__auto____1 = (function (state_39207){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_39207);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e39232){if((e39232 instanceof Object)){
var ex__34145__auto__ = e39232;
var statearr_39233_39254 = state_39207;
(statearr_39233_39254[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39207);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39232;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39255 = state_39207;
state_39207 = G__39255;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__34142__auto__ = function(state_39207){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__34142__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__34142__auto____1.call(this,state_39207);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__34142__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__34142__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___39235,ch))
})();
var state__34233__auto__ = (function (){var statearr_39234 = f__34232__auto__.call(null);
(statearr_39234[(6)] = c__34231__auto___39235);

return statearr_39234;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___39235,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__39256_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__39256_SHARP_));
}),clojure.string.split_lines.call(null,stack_str));
});
figwheel.client.get_ua_product = (function figwheel$client$get_ua_product(){
if(cljs.core.truth_(figwheel.client.utils.node_env_QMARK_.call(null))){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.SAFARI)){
return new cljs.core.Keyword(null,"safari","safari",497115653);
} else {
if(cljs.core.truth_(goog.userAgent.product.CHROME)){
return new cljs.core.Keyword(null,"chrome","chrome",1718738387);
} else {
if(cljs.core.truth_(goog.userAgent.product.FIREFOX)){
return new cljs.core.Keyword(null,"firefox","firefox",1283768880);
} else {
if(cljs.core.truth_(goog.userAgent.product.IE)){
return new cljs.core.Keyword(null,"ie","ie",2038473780);
} else {
return null;
}
}
}
}
}
});
var base_path_39258 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_39258){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e39257){if((e39257 instanceof Error)){
var e = e39257;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_39258], null));
} else {
var e = e39257;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_39258))
;
/**
 * The REPL can disconnect and reconnect lets ensure cljs.user exists at least.
 */
figwheel.client.ensure_cljs_user = (function figwheel$client$ensure_cljs_user(){
if(cljs.core.truth_(cljs.user)){
return null;
} else {
return cljs.user = ({});
}
});
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__39259){
var map__39260 = p__39259;
var map__39260__$1 = ((((!((map__39260 == null)))?((((map__39260.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39260.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39260):map__39260);
var opts = map__39260__$1;
var build_id = cljs.core.get.call(null,map__39260__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__39260,map__39260__$1,opts,build_id){
return (function (p__39262){
var vec__39263 = p__39262;
var seq__39264 = cljs.core.seq.call(null,vec__39263);
var first__39265 = cljs.core.first.call(null,seq__39264);
var seq__39264__$1 = cljs.core.next.call(null,seq__39264);
var map__39266 = first__39265;
var map__39266__$1 = ((((!((map__39266 == null)))?((((map__39266.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39266.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39266):map__39266);
var msg = map__39266__$1;
var msg_name = cljs.core.get.call(null,map__39266__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39264__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__39263,seq__39264,first__39265,seq__39264__$1,map__39266,map__39266__$1,msg,msg_name,_,map__39260,map__39260__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__39263,seq__39264,first__39265,seq__39264__$1,map__39266,map__39266__$1,msg,msg_name,_,map__39260,map__39260__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__39260,map__39260__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__39268){
var vec__39269 = p__39268;
var seq__39270 = cljs.core.seq.call(null,vec__39269);
var first__39271 = cljs.core.first.call(null,seq__39270);
var seq__39270__$1 = cljs.core.next.call(null,seq__39270);
var map__39272 = first__39271;
var map__39272__$1 = ((((!((map__39272 == null)))?((((map__39272.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39272.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39272):map__39272);
var msg = map__39272__$1;
var msg_name = cljs.core.get.call(null,map__39272__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39270__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__39274){
var map__39275 = p__39274;
var map__39275__$1 = ((((!((map__39275 == null)))?((((map__39275.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39275.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39275):map__39275);
var on_compile_warning = cljs.core.get.call(null,map__39275__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__39275__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__39275,map__39275__$1,on_compile_warning,on_compile_fail){
return (function (p__39277){
var vec__39278 = p__39277;
var seq__39279 = cljs.core.seq.call(null,vec__39278);
var first__39280 = cljs.core.first.call(null,seq__39279);
var seq__39279__$1 = cljs.core.next.call(null,seq__39279);
var map__39281 = first__39280;
var map__39281__$1 = ((((!((map__39281 == null)))?((((map__39281.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39281.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39281):map__39281);
var msg = map__39281__$1;
var msg_name = cljs.core.get.call(null,map__39281__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__39279__$1;
var pred__39283 = cljs.core._EQ_;
var expr__39284 = msg_name;
if(cljs.core.truth_(pred__39283.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__39284))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__39283.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__39284))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__39275,map__39275__$1,on_compile_warning,on_compile_fail))
});
figwheel.client.auto_jump_to_error = (function figwheel$client$auto_jump_to_error(opts,error){
if(cljs.core.truth_(new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920).cljs$core$IFn$_invoke$arity$1(opts))){
return figwheel.client.heads_up.auto_notify_source_file_line.call(null,error);
} else {
return null;
}
});
figwheel.client.heads_up_plugin_msg_handler = (function figwheel$client$heads_up_plugin_msg_handler(opts,msg_hist_SINGLEQUOTE_){
var msg_hist = figwheel.client.focus_msgs.call(null,new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null], null), null),msg_hist_SINGLEQUOTE_);
var msg_names = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),msg_hist);
var msg = cljs.core.first.call(null,msg_hist);
var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__,msg_hist,msg_names,msg){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__,msg_hist,msg_names,msg){
return (function (state_39373){
var state_val_39374 = (state_39373[(1)]);
if((state_val_39374 === (7))){
var inst_39293 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39293)){
var statearr_39375_39422 = state_39373__$1;
(statearr_39375_39422[(1)] = (8));

} else {
var statearr_39376_39423 = state_39373__$1;
(statearr_39376_39423[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (20))){
var inst_39367 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39377_39424 = state_39373__$1;
(statearr_39377_39424[(2)] = inst_39367);

(statearr_39377_39424[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (27))){
var inst_39363 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39378_39425 = state_39373__$1;
(statearr_39378_39425[(2)] = inst_39363);

(statearr_39378_39425[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (1))){
var inst_39286 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39286)){
var statearr_39379_39426 = state_39373__$1;
(statearr_39379_39426[(1)] = (2));

} else {
var statearr_39380_39427 = state_39373__$1;
(statearr_39380_39427[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (24))){
var inst_39365 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39381_39428 = state_39373__$1;
(statearr_39381_39428[(2)] = inst_39365);

(statearr_39381_39428[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (4))){
var inst_39371 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39373__$1,inst_39371);
} else {
if((state_val_39374 === (15))){
var inst_39369 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39382_39429 = state_39373__$1;
(statearr_39382_39429[(2)] = inst_39369);

(statearr_39382_39429[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (21))){
var inst_39322 = (state_39373[(2)]);
var inst_39323 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39324 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39323);
var state_39373__$1 = (function (){var statearr_39383 = state_39373;
(statearr_39383[(7)] = inst_39322);

return statearr_39383;
})();
var statearr_39384_39430 = state_39373__$1;
(statearr_39384_39430[(2)] = inst_39324);

(statearr_39384_39430[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (31))){
var inst_39352 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39352)){
var statearr_39385_39431 = state_39373__$1;
(statearr_39385_39431[(1)] = (34));

} else {
var statearr_39386_39432 = state_39373__$1;
(statearr_39386_39432[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (32))){
var inst_39361 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39387_39433 = state_39373__$1;
(statearr_39387_39433[(2)] = inst_39361);

(statearr_39387_39433[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (33))){
var inst_39348 = (state_39373[(2)]);
var inst_39349 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39350 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39349);
var state_39373__$1 = (function (){var statearr_39388 = state_39373;
(statearr_39388[(8)] = inst_39348);

return statearr_39388;
})();
var statearr_39389_39434 = state_39373__$1;
(statearr_39389_39434[(2)] = inst_39350);

(statearr_39389_39434[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (13))){
var inst_39307 = figwheel.client.heads_up.clear.call(null);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(16),inst_39307);
} else {
if((state_val_39374 === (22))){
var inst_39328 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39329 = figwheel.client.heads_up.append_warning_message.call(null,inst_39328);
var state_39373__$1 = state_39373;
var statearr_39390_39435 = state_39373__$1;
(statearr_39390_39435[(2)] = inst_39329);

(statearr_39390_39435[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (36))){
var inst_39359 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39391_39436 = state_39373__$1;
(statearr_39391_39436[(2)] = inst_39359);

(statearr_39391_39436[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (29))){
var inst_39339 = (state_39373[(2)]);
var inst_39340 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39341 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39340);
var state_39373__$1 = (function (){var statearr_39392 = state_39373;
(statearr_39392[(9)] = inst_39339);

return statearr_39392;
})();
var statearr_39393_39437 = state_39373__$1;
(statearr_39393_39437[(2)] = inst_39341);

(statearr_39393_39437[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (6))){
var inst_39288 = (state_39373[(10)]);
var state_39373__$1 = state_39373;
var statearr_39394_39438 = state_39373__$1;
(statearr_39394_39438[(2)] = inst_39288);

(statearr_39394_39438[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (28))){
var inst_39335 = (state_39373[(2)]);
var inst_39336 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39337 = figwheel.client.heads_up.display_warning.call(null,inst_39336);
var state_39373__$1 = (function (){var statearr_39395 = state_39373;
(statearr_39395[(11)] = inst_39335);

return statearr_39395;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(29),inst_39337);
} else {
if((state_val_39374 === (25))){
var inst_39333 = figwheel.client.heads_up.clear.call(null);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(28),inst_39333);
} else {
if((state_val_39374 === (34))){
var inst_39354 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(37),inst_39354);
} else {
if((state_val_39374 === (17))){
var inst_39313 = (state_39373[(2)]);
var inst_39314 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39315 = figwheel.client.auto_jump_to_error.call(null,opts,inst_39314);
var state_39373__$1 = (function (){var statearr_39396 = state_39373;
(statearr_39396[(12)] = inst_39313);

return statearr_39396;
})();
var statearr_39397_39439 = state_39373__$1;
(statearr_39397_39439[(2)] = inst_39315);

(statearr_39397_39439[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (3))){
var inst_39305 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39305)){
var statearr_39398_39440 = state_39373__$1;
(statearr_39398_39440[(1)] = (13));

} else {
var statearr_39399_39441 = state_39373__$1;
(statearr_39399_39441[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (12))){
var inst_39301 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39400_39442 = state_39373__$1;
(statearr_39400_39442[(2)] = inst_39301);

(statearr_39400_39442[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (2))){
var inst_39288 = (state_39373[(10)]);
var inst_39288__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_39373__$1 = (function (){var statearr_39401 = state_39373;
(statearr_39401[(10)] = inst_39288__$1);

return statearr_39401;
})();
if(cljs.core.truth_(inst_39288__$1)){
var statearr_39402_39443 = state_39373__$1;
(statearr_39402_39443[(1)] = (5));

} else {
var statearr_39403_39444 = state_39373__$1;
(statearr_39403_39444[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (23))){
var inst_39331 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39331)){
var statearr_39404_39445 = state_39373__$1;
(statearr_39404_39445[(1)] = (25));

} else {
var statearr_39405_39446 = state_39373__$1;
(statearr_39405_39446[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (35))){
var state_39373__$1 = state_39373;
var statearr_39406_39447 = state_39373__$1;
(statearr_39406_39447[(2)] = null);

(statearr_39406_39447[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (19))){
var inst_39326 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39326)){
var statearr_39407_39448 = state_39373__$1;
(statearr_39407_39448[(1)] = (22));

} else {
var statearr_39408_39449 = state_39373__$1;
(statearr_39408_39449[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (11))){
var inst_39297 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39409_39450 = state_39373__$1;
(statearr_39409_39450[(2)] = inst_39297);

(statearr_39409_39450[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (9))){
var inst_39299 = figwheel.client.heads_up.clear.call(null);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(12),inst_39299);
} else {
if((state_val_39374 === (5))){
var inst_39290 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_39373__$1 = state_39373;
var statearr_39410_39451 = state_39373__$1;
(statearr_39410_39451[(2)] = inst_39290);

(statearr_39410_39451[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (14))){
var inst_39317 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39317)){
var statearr_39411_39452 = state_39373__$1;
(statearr_39411_39452[(1)] = (18));

} else {
var statearr_39412_39453 = state_39373__$1;
(statearr_39412_39453[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (26))){
var inst_39343 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_39373__$1 = state_39373;
if(cljs.core.truth_(inst_39343)){
var statearr_39413_39454 = state_39373__$1;
(statearr_39413_39454[(1)] = (30));

} else {
var statearr_39414_39455 = state_39373__$1;
(statearr_39414_39455[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (16))){
var inst_39309 = (state_39373[(2)]);
var inst_39310 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39311 = figwheel.client.heads_up.display_exception.call(null,inst_39310);
var state_39373__$1 = (function (){var statearr_39415 = state_39373;
(statearr_39415[(13)] = inst_39309);

return statearr_39415;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(17),inst_39311);
} else {
if((state_val_39374 === (30))){
var inst_39345 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39346 = figwheel.client.heads_up.display_warning.call(null,inst_39345);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(33),inst_39346);
} else {
if((state_val_39374 === (10))){
var inst_39303 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39416_39456 = state_39373__$1;
(statearr_39416_39456[(2)] = inst_39303);

(statearr_39416_39456[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (18))){
var inst_39319 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_39320 = figwheel.client.heads_up.display_exception.call(null,inst_39319);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(21),inst_39320);
} else {
if((state_val_39374 === (37))){
var inst_39356 = (state_39373[(2)]);
var state_39373__$1 = state_39373;
var statearr_39417_39457 = state_39373__$1;
(statearr_39417_39457[(2)] = inst_39356);

(statearr_39417_39457[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39374 === (8))){
var inst_39295 = figwheel.client.heads_up.flash_loaded.call(null);
var state_39373__$1 = state_39373;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39373__$1,(11),inst_39295);
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
});})(c__34231__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__34141__auto__,c__34231__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto____0 = (function (){
var statearr_39418 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_39418[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto__);

(statearr_39418[(1)] = (1));

return statearr_39418;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto____1 = (function (state_39373){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_39373);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e39419){if((e39419 instanceof Object)){
var ex__34145__auto__ = e39419;
var statearr_39420_39458 = state_39373;
(statearr_39420_39458[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39373);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39419;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39459 = state_39373;
state_39373 = G__39459;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto__ = function(state_39373){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto____1.call(this,state_39373);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__,msg_hist,msg_names,msg))
})();
var state__34233__auto__ = (function (){var statearr_39421 = f__34232__auto__.call(null);
(statearr_39421[(6)] = c__34231__auto__);

return statearr_39421;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__,msg_hist,msg_names,msg))
);

return c__34231__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__34231__auto___39488 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___39488,ch){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___39488,ch){
return (function (state_39474){
var state_val_39475 = (state_39474[(1)]);
if((state_val_39475 === (1))){
var state_39474__$1 = state_39474;
var statearr_39476_39489 = state_39474__$1;
(statearr_39476_39489[(2)] = null);

(statearr_39476_39489[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39475 === (2))){
var state_39474__$1 = state_39474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39474__$1,(4),ch);
} else {
if((state_val_39475 === (3))){
var inst_39472 = (state_39474[(2)]);
var state_39474__$1 = state_39474;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39474__$1,inst_39472);
} else {
if((state_val_39475 === (4))){
var inst_39462 = (state_39474[(7)]);
var inst_39462__$1 = (state_39474[(2)]);
var state_39474__$1 = (function (){var statearr_39477 = state_39474;
(statearr_39477[(7)] = inst_39462__$1);

return statearr_39477;
})();
if(cljs.core.truth_(inst_39462__$1)){
var statearr_39478_39490 = state_39474__$1;
(statearr_39478_39490[(1)] = (5));

} else {
var statearr_39479_39491 = state_39474__$1;
(statearr_39479_39491[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39475 === (5))){
var inst_39462 = (state_39474[(7)]);
var inst_39464 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_39462);
var state_39474__$1 = state_39474;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39474__$1,(8),inst_39464);
} else {
if((state_val_39475 === (6))){
var state_39474__$1 = state_39474;
var statearr_39480_39492 = state_39474__$1;
(statearr_39480_39492[(2)] = null);

(statearr_39480_39492[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39475 === (7))){
var inst_39470 = (state_39474[(2)]);
var state_39474__$1 = state_39474;
var statearr_39481_39493 = state_39474__$1;
(statearr_39481_39493[(2)] = inst_39470);

(statearr_39481_39493[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_39475 === (8))){
var inst_39466 = (state_39474[(2)]);
var state_39474__$1 = (function (){var statearr_39482 = state_39474;
(statearr_39482[(8)] = inst_39466);

return statearr_39482;
})();
var statearr_39483_39494 = state_39474__$1;
(statearr_39483_39494[(2)] = null);

(statearr_39483_39494[(1)] = (2));


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
});})(c__34231__auto___39488,ch))
;
return ((function (switch__34141__auto__,c__34231__auto___39488,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__34142__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__34142__auto____0 = (function (){
var statearr_39484 = [null,null,null,null,null,null,null,null,null];
(statearr_39484[(0)] = figwheel$client$heads_up_plugin_$_state_machine__34142__auto__);

(statearr_39484[(1)] = (1));

return statearr_39484;
});
var figwheel$client$heads_up_plugin_$_state_machine__34142__auto____1 = (function (state_39474){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_39474);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e39485){if((e39485 instanceof Object)){
var ex__34145__auto__ = e39485;
var statearr_39486_39495 = state_39474;
(statearr_39486_39495[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39474);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39485;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39496 = state_39474;
state_39474 = G__39496;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__34142__auto__ = function(state_39474){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__34142__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__34142__auto____1.call(this,state_39474);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__34142__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__34142__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___39488,ch))
})();
var state__34233__auto__ = (function (){var statearr_39487 = f__34232__auto__.call(null);
(statearr_39487[(6)] = c__34231__auto___39488);

return statearr_39487;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___39488,ch))
);


figwheel.client.heads_up.ensure_container.call(null);

return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.enforce_project_plugin = (function figwheel$client$enforce_project_plugin(opts){
return (function (msg_hist){
if(((1) < cljs.core.count.call(null,cljs.core.set.call(null,cljs.core.keep.call(null,new cljs.core.Keyword(null,"project-id","project-id",206449307),cljs.core.take.call(null,(5),msg_hist)))))){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different project. Shutting socket down.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__){
return (function (state_39502){
var state_val_39503 = (state_39502[(1)]);
if((state_val_39503 === (1))){
var inst_39497 = cljs.core.async.timeout.call(null,(3000));
var state_39502__$1 = state_39502;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39502__$1,(2),inst_39497);
} else {
if((state_val_39503 === (2))){
var inst_39499 = (state_39502[(2)]);
var inst_39500 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_39502__$1 = (function (){var statearr_39504 = state_39502;
(statearr_39504[(7)] = inst_39499);

return statearr_39504;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39502__$1,inst_39500);
} else {
return null;
}
}
});})(c__34231__auto__))
;
return ((function (switch__34141__auto__,c__34231__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__34142__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__34142__auto____0 = (function (){
var statearr_39505 = [null,null,null,null,null,null,null,null];
(statearr_39505[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__34142__auto__);

(statearr_39505[(1)] = (1));

return statearr_39505;
});
var figwheel$client$enforce_project_plugin_$_state_machine__34142__auto____1 = (function (state_39502){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_39502);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e39506){if((e39506 instanceof Object)){
var ex__34145__auto__ = e39506;
var statearr_39507_39509 = state_39502;
(statearr_39507_39509[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39502);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39506;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39510 = state_39502;
state_39502 = G__39510;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__34142__auto__ = function(state_39502){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__34142__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__34142__auto____1.call(this,state_39502);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__34142__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__34142__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__))
})();
var state__34233__auto__ = (function (){var statearr_39508 = f__34232__auto__.call(null);
(statearr_39508[(6)] = c__34231__auto__);

return statearr_39508;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__))
);

return c__34231__auto__;
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.enforce_figwheel_version_plugin = (function figwheel$client$enforce_figwheel_version_plugin(opts){
return (function (msg_hist){
var temp__5457__auto__ = new cljs.core.Keyword(null,"figwheel-version","figwheel-version",1409553832).cljs$core$IFn$_invoke$arity$1(cljs.core.first.call(null,msg_hist));
if(cljs.core.truth_(temp__5457__auto__)){
var figwheel_version = temp__5457__auto__;
if(cljs.core.not_EQ_.call(null,figwheel_version,figwheel.client._figwheel_version_)){
figwheel.client.socket.close_BANG_.call(null);

console.error("Figwheel: message received from different version of Figwheel.");

if(cljs.core.truth_(new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(opts))){
var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__,figwheel_version,temp__5457__auto__){
return (function (state_39517){
var state_val_39518 = (state_39517[(1)]);
if((state_val_39518 === (1))){
var inst_39511 = cljs.core.async.timeout.call(null,(2000));
var state_39517__$1 = state_39517;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_39517__$1,(2),inst_39511);
} else {
if((state_val_39518 === (2))){
var inst_39513 = (state_39517[(2)]);
var inst_39514 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_39515 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_39514);
var state_39517__$1 = (function (){var statearr_39519 = state_39517;
(statearr_39519[(7)] = inst_39513);

return statearr_39519;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_39517__$1,inst_39515);
} else {
return null;
}
}
});})(c__34231__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__34141__auto__,c__34231__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto____0 = (function (){
var statearr_39520 = [null,null,null,null,null,null,null,null];
(statearr_39520[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto__);

(statearr_39520[(1)] = (1));

return statearr_39520;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto____1 = (function (state_39517){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_39517);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e39521){if((e39521 instanceof Object)){
var ex__34145__auto__ = e39521;
var statearr_39522_39524 = state_39517;
(statearr_39522_39524[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_39517);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e39521;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__39525 = state_39517;
state_39517 = G__39525;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto__ = function(state_39517){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto____1.call(this,state_39517);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__,figwheel_version,temp__5457__auto__))
})();
var state__34233__auto__ = (function (){var statearr_39523 = f__34232__auto__.call(null);
(statearr_39523[(6)] = c__34231__auto__);

return statearr_39523;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__,figwheel_version,temp__5457__auto__))
);

return c__34231__auto__;
} else {
return null;
}
} else {
return null;
}
} else {
return null;
}
});
});
figwheel.client.default_on_jsload = cljs.core.identity;
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__39526){
var map__39527 = p__39526;
var map__39527__$1 = ((((!((map__39527 == null)))?((((map__39527.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39527.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39527):map__39527);
var file = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__39527__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__39529 = "";
var G__39529__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39529),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__39529);
var G__39529__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39529__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__39529__$1);
if(cljs.core.truth_((function (){var and__30011__auto__ = line;
if(cljs.core.truth_(and__30011__auto__)){
return column;
} else {
return and__30011__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__39529__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__39529__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__39530){
var map__39531 = p__39530;
var map__39531__$1 = ((((!((map__39531 == null)))?((((map__39531.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39531.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39531):map__39531);
var ed = map__39531__$1;
var formatted_exception = cljs.core.get.call(null,map__39531__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__39531__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__39531__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__39533_39537 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__39534_39538 = null;
var count__39535_39539 = (0);
var i__39536_39540 = (0);
while(true){
if((i__39536_39540 < count__39535_39539)){
var msg_39541 = cljs.core._nth.call(null,chunk__39534_39538,i__39536_39540);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39541);

var G__39542 = seq__39533_39537;
var G__39543 = chunk__39534_39538;
var G__39544 = count__39535_39539;
var G__39545 = (i__39536_39540 + (1));
seq__39533_39537 = G__39542;
chunk__39534_39538 = G__39543;
count__39535_39539 = G__39544;
i__39536_39540 = G__39545;
continue;
} else {
var temp__5457__auto___39546 = cljs.core.seq.call(null,seq__39533_39537);
if(temp__5457__auto___39546){
var seq__39533_39547__$1 = temp__5457__auto___39546;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39533_39547__$1)){
var c__30954__auto___39548 = cljs.core.chunk_first.call(null,seq__39533_39547__$1);
var G__39549 = cljs.core.chunk_rest.call(null,seq__39533_39547__$1);
var G__39550 = c__30954__auto___39548;
var G__39551 = cljs.core.count.call(null,c__30954__auto___39548);
var G__39552 = (0);
seq__39533_39537 = G__39549;
chunk__39534_39538 = G__39550;
count__39535_39539 = G__39551;
i__39536_39540 = G__39552;
continue;
} else {
var msg_39553 = cljs.core.first.call(null,seq__39533_39547__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_39553);

var G__39554 = cljs.core.next.call(null,seq__39533_39547__$1);
var G__39555 = null;
var G__39556 = (0);
var G__39557 = (0);
seq__39533_39537 = G__39554;
chunk__39534_39538 = G__39555;
count__39535_39539 = G__39556;
i__39536_39540 = G__39557;
continue;
}
} else {
}
}
break;
}

if(cljs.core.truth_(cause)){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),["Error on ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,ed))].join(''));
} else {
}

return ed;
});
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__39558){
var map__39559 = p__39558;
var map__39559__$1 = ((((!((map__39559 == null)))?((((map__39559.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39559.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39559):map__39559);
var w = map__39559__$1;
var message = cljs.core.get.call(null,map__39559__$1,new cljs.core.Keyword(null,"message","message",-406056002));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),["Figwheel: Compile Warning - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(message))," in ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client.file_line_column.call(null,message))].join(''));

return w;
});
figwheel.client.default_before_load = (function figwheel$client$default_before_load(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: notified of file changes");

return files;
});
figwheel.client.default_on_cssload = (function figwheel$client$default_on_cssload(files){
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: loaded CSS files");

figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),cljs.core.pr_str.call(null,cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),files)));

return files;
});
if(typeof figwheel.client.config_defaults !== 'undefined'){
} else {
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
}
figwheel.client.handle_deprecated_jsload_callback = (function figwheel$client$handle_deprecated_jsload_callback(config){
if(cljs.core.truth_(new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config))){
return cljs.core.dissoc.call(null,cljs.core.assoc.call(null,config,new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369).cljs$core$IFn$_invoke$arity$1(config)),new cljs.core.Keyword(null,"jsload-callback","jsload-callback",-1949628369));
} else {
return config;
}
});
figwheel.client.fill_url_template = (function figwheel$client$fill_url_template(config){
if(cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))){
return cljs.core.update_in.call(null,config,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938)], null),(function (x){
return clojure.string.replace.call(null,clojure.string.replace.call(null,x,"[[client-hostname]]",location.hostname),"[[client-port]]",location.port);
}));
} else {
return config;
}
});
figwheel.client.base_plugins = (function figwheel$client$base_plugins(system_options){
var base = new cljs.core.PersistentArrayMap(null, 6, [new cljs.core.Keyword(null,"enforce-project-plugin","enforce-project-plugin",959402899),figwheel.client.enforce_project_plugin,new cljs.core.Keyword(null,"enforce-figwheel-version-plugin","enforce-figwheel-version-plugin",-1916185220),figwheel.client.enforce_figwheel_version_plugin,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),figwheel.client.file_reloader_plugin,new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),figwheel.client.compile_fail_warning_plugin,new cljs.core.Keyword(null,"css-reloader-plugin","css-reloader-plugin",2002032904),figwheel.client.css_reloader_plugin,new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371),figwheel.client.repl_plugin], null);
var base__$1 = ((cljs.core.not.call(null,figwheel.client.utils.html_env_QMARK_.call(null)))?cljs.core.select_keys.call(null,base,new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733),new cljs.core.Keyword(null,"comp-fail-warning-plugin","comp-fail-warning-plugin",634311),new cljs.core.Keyword(null,"repl-plugin","repl-plugin",-1138952371)], null)):base);
var base__$2 = ((new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(system_options) === false)?cljs.core.dissoc.call(null,base__$1,new cljs.core.Keyword(null,"file-reloader-plugin","file-reloader-plugin",-1792964733)):base__$1);
if(cljs.core.truth_((function (){var and__30011__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30011__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30011__auto__;
}
})())){
return cljs.core.assoc.call(null,base__$2,new cljs.core.Keyword(null,"heads-up-display-plugin","heads-up-display-plugin",1745207501),figwheel.client.heads_up_plugin);
} else {
return base__$2;
}
});
figwheel.client.add_message_watch = (function figwheel$client$add_message_watch(key,callback){
return cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,key,(function (_,___$1,___$2,msg_hist){
return callback.call(null,cljs.core.first.call(null,msg_hist));
}));
});
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__39561 = cljs.core.seq.call(null,plugins);
var chunk__39562 = null;
var count__39563 = (0);
var i__39564 = (0);
while(true){
if((i__39564 < count__39563)){
var vec__39565 = cljs.core._nth.call(null,chunk__39562,i__39564);
var k = cljs.core.nth.call(null,vec__39565,(0),null);
var plugin = cljs.core.nth.call(null,vec__39565,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39571 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39561,chunk__39562,count__39563,i__39564,pl_39571,vec__39565,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_39571.call(null,msg_hist);
});})(seq__39561,chunk__39562,count__39563,i__39564,pl_39571,vec__39565,k,plugin))
);
} else {
}

var G__39572 = seq__39561;
var G__39573 = chunk__39562;
var G__39574 = count__39563;
var G__39575 = (i__39564 + (1));
seq__39561 = G__39572;
chunk__39562 = G__39573;
count__39563 = G__39574;
i__39564 = G__39575;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__39561);
if(temp__5457__auto__){
var seq__39561__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39561__$1)){
var c__30954__auto__ = cljs.core.chunk_first.call(null,seq__39561__$1);
var G__39576 = cljs.core.chunk_rest.call(null,seq__39561__$1);
var G__39577 = c__30954__auto__;
var G__39578 = cljs.core.count.call(null,c__30954__auto__);
var G__39579 = (0);
seq__39561 = G__39576;
chunk__39562 = G__39577;
count__39563 = G__39578;
i__39564 = G__39579;
continue;
} else {
var vec__39568 = cljs.core.first.call(null,seq__39561__$1);
var k = cljs.core.nth.call(null,vec__39568,(0),null);
var plugin = cljs.core.nth.call(null,vec__39568,(1),null);
if(cljs.core.truth_(plugin)){
var pl_39580 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__39561,chunk__39562,count__39563,i__39564,pl_39580,vec__39568,k,plugin,seq__39561__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_39580.call(null,msg_hist);
});})(seq__39561,chunk__39562,count__39563,i__39564,pl_39580,vec__39568,k,plugin,seq__39561__$1,temp__5457__auto__))
);
} else {
}

var G__39581 = cljs.core.next.call(null,seq__39561__$1);
var G__39582 = null;
var G__39583 = (0);
var G__39584 = (0);
seq__39561 = G__39581;
chunk__39562 = G__39582;
count__39563 = G__39583;
i__39564 = G__39584;
continue;
}
} else {
return null;
}
}
break;
}
});
figwheel.client.start = (function figwheel$client$start(var_args){
var G__39586 = arguments.length;
switch (G__39586) {
case 1:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 0:
return figwheel.client.start.cljs$core$IFn$_invoke$arity$0();

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$1 = (function (opts){
if((goog.dependencies_ == null)){
return null;
} else {
if(typeof figwheel.client.__figwheel_start_once__ !== 'undefined'){
return null;
} else {
return (
figwheel.client.__figwheel_start_once__ = setTimeout((function (){
var plugins_SINGLEQUOTE_ = new cljs.core.Keyword(null,"plugins","plugins",1900073717).cljs$core$IFn$_invoke$arity$1(opts);
var merge_plugins = new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370).cljs$core$IFn$_invoke$arity$1(opts);
var system_options = figwheel.client.fill_url_template.call(null,figwheel.client.handle_deprecated_jsload_callback.call(null,cljs.core.merge.call(null,figwheel.client.config_defaults,cljs.core.dissoc.call(null,opts,new cljs.core.Keyword(null,"plugins","plugins",1900073717),new cljs.core.Keyword(null,"merge-plugins","merge-plugins",-1193912370)))));
var plugins = (cljs.core.truth_(plugins_SINGLEQUOTE_)?plugins_SINGLEQUOTE_:cljs.core.merge.call(null,figwheel.client.base_plugins.call(null,system_options),merge_plugins));
figwheel.client.utils._STAR_print_debug_STAR_ = new cljs.core.Keyword(null,"debug","debug",-1608172596).cljs$core$IFn$_invoke$arity$1(opts);

figwheel.client.enable_repl_print_BANG_.call(null);

figwheel.client.add_plugins.call(null,plugins,system_options);

figwheel.client.file_reloading.patch_goog_base.call(null);

var seq__39587_39592 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__39588_39593 = null;
var count__39589_39594 = (0);
var i__39590_39595 = (0);
while(true){
if((i__39590_39595 < count__39589_39594)){
var msg_39596 = cljs.core._nth.call(null,chunk__39588_39593,i__39590_39595);
figwheel.client.socket.handle_incoming_message.call(null,msg_39596);

var G__39597 = seq__39587_39592;
var G__39598 = chunk__39588_39593;
var G__39599 = count__39589_39594;
var G__39600 = (i__39590_39595 + (1));
seq__39587_39592 = G__39597;
chunk__39588_39593 = G__39598;
count__39589_39594 = G__39599;
i__39590_39595 = G__39600;
continue;
} else {
var temp__5457__auto___39601 = cljs.core.seq.call(null,seq__39587_39592);
if(temp__5457__auto___39601){
var seq__39587_39602__$1 = temp__5457__auto___39601;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__39587_39602__$1)){
var c__30954__auto___39603 = cljs.core.chunk_first.call(null,seq__39587_39602__$1);
var G__39604 = cljs.core.chunk_rest.call(null,seq__39587_39602__$1);
var G__39605 = c__30954__auto___39603;
var G__39606 = cljs.core.count.call(null,c__30954__auto___39603);
var G__39607 = (0);
seq__39587_39592 = G__39604;
chunk__39588_39593 = G__39605;
count__39589_39594 = G__39606;
i__39590_39595 = G__39607;
continue;
} else {
var msg_39608 = cljs.core.first.call(null,seq__39587_39602__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_39608);

var G__39609 = cljs.core.next.call(null,seq__39587_39602__$1);
var G__39610 = null;
var G__39611 = (0);
var G__39612 = (0);
seq__39587_39592 = G__39609;
chunk__39588_39593 = G__39610;
count__39589_39594 = G__39611;
i__39590_39595 = G__39612;
continue;
}
} else {
}
}
break;
}

return figwheel.client.socket.open.call(null,system_options);
})))
;
}
}
});

figwheel.client.start.cljs$core$IFn$_invoke$arity$0 = (function (){
return figwheel.client.start.call(null,cljs.core.PersistentArrayMap.EMPTY);
});

figwheel.client.start.cljs$lang$maxFixedArity = 1;

figwheel.client.watch_and_reload_with_opts = figwheel.client.start;
figwheel.client.watch_and_reload = (function figwheel$client$watch_and_reload(var_args){
var args__31307__auto__ = [];
var len__31300__auto___39617 = arguments.length;
var i__31301__auto___39618 = (0);
while(true){
if((i__31301__auto___39618 < len__31300__auto___39617)){
args__31307__auto__.push((arguments[i__31301__auto___39618]));

var G__39619 = (i__31301__auto___39618 + (1));
i__31301__auto___39618 = G__39619;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((0) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31308__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__39614){
var map__39615 = p__39614;
var map__39615__$1 = ((((!((map__39615 == null)))?((((map__39615.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39615.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39615):map__39615);
var opts = map__39615__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq39613){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq39613));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e39620){if((e39620 instanceof Error)){
var e = e39620;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e39620;

}
}});
figwheel.client.console_intro_message = "Figwheel has compiled a temporary helper application to your :output-file.\n\nThe code currently in your configured output file does not\nrepresent the code that you are trying to compile.\n\nThis temporary application is intended to help you continue to get\nfeedback from Figwheel until the build you are working on compiles\ncorrectly.\n\nWhen your ClojureScript source code compiles correctly this helper\napplication will auto-reload and pick up your freshly compiled\nClojureScript program.";
figwheel.client.bad_compile_helper_app = (function figwheel$client$bad_compile_helper_app(){
cljs.core.enable_console_print_BANG_.call(null);

var config = figwheel.client.fetch_data_from_env.call(null);
cljs.core.println.call(null,figwheel.client.console_intro_message);

figwheel.client.heads_up.bad_compile_screen.call(null);

if(cljs.core.truth_(goog.dependencies_)){
} else {
goog.dependencies_ = true;
}

figwheel.client.start.call(null,config);

return figwheel.client.add_message_watch.call(null,new cljs.core.Keyword(null,"listen-for-successful-compile","listen-for-successful-compile",-995277603),((function (config){
return (function (p__39621){
var map__39622 = p__39621;
var map__39622__$1 = ((((!((map__39622 == null)))?((((map__39622.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__39622.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__39622):map__39622);
var msg_name = cljs.core.get.call(null,map__39622__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1515300963602
