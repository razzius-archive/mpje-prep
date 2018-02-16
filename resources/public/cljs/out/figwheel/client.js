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
figwheel.client._figwheel_version_ = "0.5.15-SNAPSHOT";
figwheel.client.js_stringify = (((typeof JSON !== 'undefined') && (!((JSON.stringify == null))))?(function (x){
return ["#js ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(JSON.stringify(x,null," "))].join('');
}):(function (x){
try{return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(x)].join('');
}catch (e34643){if((e34643 instanceof Error)){
var e = e34643;
return "Error: Unable to stringify";
} else {
throw e34643;

}
}}));
figwheel.client.figwheel_repl_print = (function figwheel$client$figwheel_repl_print(var_args){
var G__34646 = arguments.length;
switch (G__34646) {
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
figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),"figwheel-repl-print",new cljs.core.Keyword(null,"content","content",15833224),new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"stream","stream",1534941648),stream,new cljs.core.Keyword(null,"args","args",1315556576),cljs.core.mapv.call(null,(function (p1__34644_SHARP_){
if(typeof p1__34644_SHARP_ === 'string'){
return p1__34644_SHARP_;
} else {
return figwheel.client.js_stringify.call(null,p1__34644_SHARP_);
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
var args__31497__auto__ = [];
var len__31490__auto___34649 = arguments.length;
var i__31491__auto___34650 = (0);
while(true){
if((i__31491__auto___34650 < len__31490__auto___34649)){
args__31497__auto__.push((arguments[i__31491__auto___34650]));

var G__34651 = (i__31491__auto___34650 + (1));
i__31491__auto___34650 = G__34651;
continue;
} else {
}
break;
}

var argseq__31498__auto__ = ((((0) < args__31497__auto__.length))?(new cljs.core.IndexedSeq(args__31497__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31498__auto__);
});

figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_out_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"out","out",-910545517),args);

return null;
});

figwheel.client.repl_out_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_out_print_fn.cljs$lang$applyTo = (function (seq34648){
return figwheel.client.repl_out_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34648));
});

figwheel.client.repl_err_print_fn = (function figwheel$client$repl_err_print_fn(var_args){
var args__31497__auto__ = [];
var len__31490__auto___34653 = arguments.length;
var i__31491__auto___34654 = (0);
while(true){
if((i__31491__auto___34654 < len__31490__auto___34653)){
args__31497__auto__.push((arguments[i__31491__auto___34654]));

var G__34655 = (i__31491__auto___34654 + (1));
i__31491__auto___34654 = G__34655;
continue;
} else {
}
break;
}

var argseq__31498__auto__ = ((((0) < args__31497__auto__.length))?(new cljs.core.IndexedSeq(args__31497__auto__.slice((0)),(0),null)):null);
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(argseq__31498__auto__);
});

figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic = (function (args){
figwheel.client.console_err_print.call(null,args);

figwheel.client.figwheel_repl_print.call(null,new cljs.core.Keyword(null,"err","err",-2089457205),args);

return null;
});

figwheel.client.repl_err_print_fn.cljs$lang$maxFixedArity = (0);

figwheel.client.repl_err_print_fn.cljs$lang$applyTo = (function (seq34652){
return figwheel.client.repl_err_print_fn.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq34652));
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
figwheel.client.error_msg_format = (function figwheel$client$error_msg_format(p__34656){
var map__34657 = p__34656;
var map__34657__$1 = ((((!((map__34657 == null)))?((((map__34657.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34657.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34657):map__34657);
var message = cljs.core.get.call(null,map__34657__$1,new cljs.core.Keyword(null,"message","message",-406056002));
var class$ = cljs.core.get.call(null,map__34657__$1,new cljs.core.Keyword(null,"class","class",-2030961996));
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(class$)," : ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(message)].join('');
});
figwheel.client.format_messages = cljs.core.comp.call(null,cljs.core.partial.call(null,cljs.core.map,figwheel.client.error_msg_format),figwheel.client.get_essential_messages);
figwheel.client.focus_msgs = (function figwheel$client$focus_msgs(name_set,msg_hist){
return cljs.core.cons.call(null,cljs.core.first.call(null,msg_hist),cljs.core.filter.call(null,cljs.core.comp.call(null,name_set,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863)),cljs.core.rest.call(null,msg_hist)));
});
figwheel.client.reload_file_QMARK__STAR_ = (function figwheel$client$reload_file_QMARK__STAR_(msg_name,opts){
var or__30213__auto__ = new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223).cljs$core$IFn$_invoke$arity$1(opts);
if(cljs.core.truth_(or__30213__auto__)){
return or__30213__auto__;
} else {
return cljs.core.not_EQ_.call(null,msg_name,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356));
}
});
figwheel.client.reload_file_state_QMARK_ = (function figwheel$client$reload_file_state_QMARK_(msg_names,opts){
var and__30201__auto__ = cljs.core._EQ_.call(null,cljs.core.first.call(null,msg_names),new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563));
if(and__30201__auto__){
return figwheel.client.reload_file_QMARK__STAR_.call(null,cljs.core.second.call(null,msg_names),opts);
} else {
return and__30201__auto__;
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
var c__33298__auto___34736 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33298__auto___34736,ch){
return (function (){
var f__33299__auto__ = (function (){var switch__33275__auto__ = ((function (c__33298__auto___34736,ch){
return (function (state_34708){
var state_val_34709 = (state_34708[(1)]);
if((state_val_34709 === (7))){
var inst_34704 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34710_34737 = state_34708__$1;
(statearr_34710_34737[(2)] = inst_34704);

(statearr_34710_34737[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (1))){
var state_34708__$1 = state_34708;
var statearr_34711_34738 = state_34708__$1;
(statearr_34711_34738[(2)] = null);

(statearr_34711_34738[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (4))){
var inst_34661 = (state_34708[(7)]);
var inst_34661__$1 = (state_34708[(2)]);
var state_34708__$1 = (function (){var statearr_34712 = state_34708;
(statearr_34712[(7)] = inst_34661__$1);

return statearr_34712;
})();
if(cljs.core.truth_(inst_34661__$1)){
var statearr_34713_34739 = state_34708__$1;
(statearr_34713_34739[(1)] = (5));

} else {
var statearr_34714_34740 = state_34708__$1;
(statearr_34714_34740[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (15))){
var inst_34668 = (state_34708[(8)]);
var inst_34683 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34668);
var inst_34684 = cljs.core.first.call(null,inst_34683);
var inst_34685 = new cljs.core.Keyword(null,"file","file",-1269645878).cljs$core$IFn$_invoke$arity$1(inst_34684);
var inst_34686 = ["Figwheel: Not loading code with warnings - ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34685)].join('');
var inst_34687 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),inst_34686);
var state_34708__$1 = state_34708;
var statearr_34715_34741 = state_34708__$1;
(statearr_34715_34741[(2)] = inst_34687);

(statearr_34715_34741[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (13))){
var inst_34692 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34716_34742 = state_34708__$1;
(statearr_34716_34742[(2)] = inst_34692);

(statearr_34716_34742[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (6))){
var state_34708__$1 = state_34708;
var statearr_34717_34743 = state_34708__$1;
(statearr_34717_34743[(2)] = null);

(statearr_34717_34743[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (17))){
var inst_34690 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34718_34744 = state_34708__$1;
(statearr_34718_34744[(2)] = inst_34690);

(statearr_34718_34744[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (3))){
var inst_34706 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34708__$1,inst_34706);
} else {
if((state_val_34709 === (12))){
var inst_34667 = (state_34708[(9)]);
var inst_34681 = figwheel.client.block_reload_file_state_QMARK_.call(null,inst_34667,opts);
var state_34708__$1 = state_34708;
if(cljs.core.truth_(inst_34681)){
var statearr_34719_34745 = state_34708__$1;
(statearr_34719_34745[(1)] = (15));

} else {
var statearr_34720_34746 = state_34708__$1;
(statearr_34720_34746[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (2))){
var state_34708__$1 = state_34708;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34708__$1,(4),ch);
} else {
if((state_val_34709 === (11))){
var inst_34668 = (state_34708[(8)]);
var inst_34673 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34674 = figwheel.client.file_reloading.reload_js_files.call(null,opts,inst_34668);
var inst_34675 = cljs.core.async.timeout.call(null,(1000));
var inst_34676 = [inst_34674,inst_34675];
var inst_34677 = (new cljs.core.PersistentVector(null,2,(5),inst_34673,inst_34676,null));
var state_34708__$1 = state_34708;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34708__$1,(14),inst_34677);
} else {
if((state_val_34709 === (9))){
var inst_34668 = (state_34708[(8)]);
var inst_34694 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"warn","warn",-436710552),"Figwheel: code autoloading is OFF");
var inst_34695 = new cljs.core.Keyword(null,"files","files",-472457450).cljs$core$IFn$_invoke$arity$1(inst_34668);
var inst_34696 = cljs.core.map.call(null,new cljs.core.Keyword(null,"file","file",-1269645878),inst_34695);
var inst_34697 = ["Not loading: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(inst_34696)].join('');
var inst_34698 = figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),inst_34697);
var state_34708__$1 = (function (){var statearr_34721 = state_34708;
(statearr_34721[(10)] = inst_34694);

return statearr_34721;
})();
var statearr_34722_34747 = state_34708__$1;
(statearr_34722_34747[(2)] = inst_34698);

(statearr_34722_34747[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (5))){
var inst_34661 = (state_34708[(7)]);
var inst_34663 = [new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),null,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563),null];
var inst_34664 = (new cljs.core.PersistentArrayMap(null,2,inst_34663,null));
var inst_34665 = (new cljs.core.PersistentHashSet(null,inst_34664,null));
var inst_34666 = figwheel.client.focus_msgs.call(null,inst_34665,inst_34661);
var inst_34667 = cljs.core.map.call(null,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863),inst_34666);
var inst_34668 = cljs.core.first.call(null,inst_34666);
var inst_34669 = figwheel.client.autoload_QMARK_.call(null);
var state_34708__$1 = (function (){var statearr_34723 = state_34708;
(statearr_34723[(8)] = inst_34668);

(statearr_34723[(9)] = inst_34667);

return statearr_34723;
})();
if(cljs.core.truth_(inst_34669)){
var statearr_34724_34748 = state_34708__$1;
(statearr_34724_34748[(1)] = (8));

} else {
var statearr_34725_34749 = state_34708__$1;
(statearr_34725_34749[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (14))){
var inst_34679 = (state_34708[(2)]);
var state_34708__$1 = state_34708;
var statearr_34726_34750 = state_34708__$1;
(statearr_34726_34750[(2)] = inst_34679);

(statearr_34726_34750[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (16))){
var state_34708__$1 = state_34708;
var statearr_34727_34751 = state_34708__$1;
(statearr_34727_34751[(2)] = null);

(statearr_34727_34751[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (10))){
var inst_34700 = (state_34708[(2)]);
var state_34708__$1 = (function (){var statearr_34728 = state_34708;
(statearr_34728[(11)] = inst_34700);

return statearr_34728;
})();
var statearr_34729_34752 = state_34708__$1;
(statearr_34729_34752[(2)] = null);

(statearr_34729_34752[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34709 === (8))){
var inst_34667 = (state_34708[(9)]);
var inst_34671 = figwheel.client.reload_file_state_QMARK_.call(null,inst_34667,opts);
var state_34708__$1 = state_34708;
if(cljs.core.truth_(inst_34671)){
var statearr_34730_34753 = state_34708__$1;
(statearr_34730_34753[(1)] = (11));

} else {
var statearr_34731_34754 = state_34708__$1;
(statearr_34731_34754[(1)] = (12));

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
});})(c__33298__auto___34736,ch))
;
return ((function (switch__33275__auto__,c__33298__auto___34736,ch){
return (function() {
var figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__ = null;
var figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____0 = (function (){
var statearr_34732 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34732[(0)] = figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__);

(statearr_34732[(1)] = (1));

return statearr_34732;
});
var figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____1 = (function (state_34708){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_34708);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34733){if((e34733 instanceof Object)){
var ex__33279__auto__ = e34733;
var statearr_34734_34755 = state_34708;
(statearr_34734_34755[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34708);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34733;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34756 = state_34708;
state_34708 = G__34756;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__ = function(state_34708){
switch(arguments.length){
case 0:
return figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____1.call(this,state_34708);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____0;
figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$file_reloader_plugin_$_state_machine__33276__auto____1;
return figwheel$client$file_reloader_plugin_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33298__auto___34736,ch))
})();
var state__33300__auto__ = (function (){var statearr_34735 = f__33299__auto__.call(null);
(statearr_34735[(6)] = c__33298__auto___34736);

return statearr_34735;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33300__auto__);
});})(c__33298__auto___34736,ch))
);


return ((function (ch){
return (function (msg_hist){
cljs.core.async.put_BANG_.call(null,ch,msg_hist);

return msg_hist;
});
;})(ch))
});
figwheel.client.truncate_stack_trace = (function figwheel$client$truncate_stack_trace(stack_str){
return cljs.core.take_while.call(null,(function (p1__34757_SHARP_){
return cljs.core.not.call(null,cljs.core.re_matches.call(null,/.*eval_javascript_STAR__STAR_.*/,p1__34757_SHARP_));
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
var base_path_34759 = figwheel.client.utils.base_url_path.call(null);
figwheel.client.eval_javascript_STAR__STAR_ = ((function (base_path_34759){
return (function figwheel$client$eval_javascript_STAR__STAR_(code,opts,result_handler){
try{figwheel.client.enable_repl_print_BANG_.call(null);

var result_value = figwheel.client.utils.eval_helper.call(null,code,opts);
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"success","success",1890645906),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),result_value], null));
}catch (e34758){if((e34758 instanceof Error)){
var e = e34758;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),clojure.string.join.call(null,"\n",figwheel.client.truncate_stack_trace.call(null,e.stack)),new cljs.core.Keyword(null,"base-path","base-path",495760020),base_path_34759], null));
} else {
var e = e34758;
return result_handler.call(null,new cljs.core.PersistentArrayMap(null, 4, [new cljs.core.Keyword(null,"status","status",-1997798413),new cljs.core.Keyword(null,"exception","exception",-335277064),new cljs.core.Keyword(null,"ua-product","ua-product",938384227),figwheel.client.get_ua_product.call(null),new cljs.core.Keyword(null,"value","value",305978217),cljs.core.pr_str.call(null,e),new cljs.core.Keyword(null,"stacktrace","stacktrace",-95588394),"No stacktrace available."], null));

}
}finally {figwheel.client.enable_repl_print_BANG_.call(null);
}});})(base_path_34759))
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
figwheel.client.repl_plugin = (function figwheel$client$repl_plugin(p__34760){
var map__34761 = p__34760;
var map__34761__$1 = ((((!((map__34761 == null)))?((((map__34761.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34761.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34761):map__34761);
var opts = map__34761__$1;
var build_id = cljs.core.get.call(null,map__34761__$1,new cljs.core.Keyword(null,"build-id","build-id",1642831089));
return ((function (map__34761,map__34761__$1,opts,build_id){
return (function (p__34763){
var vec__34764 = p__34763;
var seq__34765 = cljs.core.seq.call(null,vec__34764);
var first__34766 = cljs.core.first.call(null,seq__34765);
var seq__34765__$1 = cljs.core.next.call(null,seq__34765);
var map__34767 = first__34766;
var map__34767__$1 = ((((!((map__34767 == null)))?((((map__34767.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34767.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34767):map__34767);
var msg = map__34767__$1;
var msg_name = cljs.core.get.call(null,map__34767__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34765__$1;
if(cljs.core._EQ_.call(null,new cljs.core.Keyword(null,"repl-eval","repl-eval",-1784727398),msg_name)){
figwheel.client.ensure_cljs_user.call(null);

return figwheel.client.eval_javascript_STAR__STAR_.call(null,new cljs.core.Keyword(null,"code","code",1586293142).cljs$core$IFn$_invoke$arity$1(msg),opts,((function (vec__34764,seq__34765,first__34766,seq__34765__$1,map__34767,map__34767__$1,msg,msg_name,_,map__34761,map__34761__$1,opts,build_id){
return (function (res){
return figwheel.client.socket.send_BANG_.call(null,new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"figwheel-event","figwheel-event",519570592),"callback",new cljs.core.Keyword(null,"callback-name","callback-name",336964714),new cljs.core.Keyword(null,"callback-name","callback-name",336964714).cljs$core$IFn$_invoke$arity$1(msg),new cljs.core.Keyword(null,"content","content",15833224),res], null));
});})(vec__34764,seq__34765,first__34766,seq__34765__$1,map__34767,map__34767__$1,msg,msg_name,_,map__34761,map__34761__$1,opts,build_id))
);
} else {
return null;
}
});
;})(map__34761,map__34761__$1,opts,build_id))
});
figwheel.client.css_reloader_plugin = (function figwheel$client$css_reloader_plugin(opts){
return (function (p__34769){
var vec__34770 = p__34769;
var seq__34771 = cljs.core.seq.call(null,vec__34770);
var first__34772 = cljs.core.first.call(null,seq__34771);
var seq__34771__$1 = cljs.core.next.call(null,seq__34771);
var map__34773 = first__34772;
var map__34773__$1 = ((((!((map__34773 == null)))?((((map__34773.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34773.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34773):map__34773);
var msg = map__34773__$1;
var msg_name = cljs.core.get.call(null,map__34773__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34771__$1;
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"css-files-changed","css-files-changed",720773874))){
return figwheel.client.file_reloading.reload_css_files.call(null,opts,msg);
} else {
return null;
}
});
});
figwheel.client.compile_fail_warning_plugin = (function figwheel$client$compile_fail_warning_plugin(p__34775){
var map__34776 = p__34775;
var map__34776__$1 = ((((!((map__34776 == null)))?((((map__34776.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34776.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34776):map__34776);
var on_compile_warning = cljs.core.get.call(null,map__34776__$1,new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947));
var on_compile_fail = cljs.core.get.call(null,map__34776__$1,new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036));
return ((function (map__34776,map__34776__$1,on_compile_warning,on_compile_fail){
return (function (p__34778){
var vec__34779 = p__34778;
var seq__34780 = cljs.core.seq.call(null,vec__34779);
var first__34781 = cljs.core.first.call(null,seq__34780);
var seq__34780__$1 = cljs.core.next.call(null,seq__34780);
var map__34782 = first__34781;
var map__34782__$1 = ((((!((map__34782 == null)))?((((map__34782.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34782.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34782):map__34782);
var msg = map__34782__$1;
var msg_name = cljs.core.get.call(null,map__34782__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
var _ = seq__34780__$1;
var pred__34784 = cljs.core._EQ_;
var expr__34785 = msg_name;
if(cljs.core.truth_(pred__34784.call(null,new cljs.core.Keyword(null,"compile-warning","compile-warning",43425356),expr__34785))){
return on_compile_warning.call(null,msg);
} else {
if(cljs.core.truth_(pred__34784.call(null,new cljs.core.Keyword(null,"compile-failed","compile-failed",-477639289),expr__34785))){
return on_compile_fail.call(null,msg);
} else {
return null;
}
}
});
;})(map__34776,map__34776__$1,on_compile_warning,on_compile_fail))
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
var c__33298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33298__auto__,msg_hist,msg_names,msg){
return (function (){
var f__33299__auto__ = (function (){var switch__33275__auto__ = ((function (c__33298__auto__,msg_hist,msg_names,msg){
return (function (state_34874){
var state_val_34875 = (state_34874[(1)]);
if((state_val_34875 === (7))){
var inst_34794 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34794)){
var statearr_34876_34923 = state_34874__$1;
(statearr_34876_34923[(1)] = (8));

} else {
var statearr_34877_34924 = state_34874__$1;
(statearr_34877_34924[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (20))){
var inst_34868 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34878_34925 = state_34874__$1;
(statearr_34878_34925[(2)] = inst_34868);

(statearr_34878_34925[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (27))){
var inst_34864 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34879_34926 = state_34874__$1;
(statearr_34879_34926[(2)] = inst_34864);

(statearr_34879_34926[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (1))){
var inst_34787 = figwheel.client.reload_file_state_QMARK_.call(null,msg_names,opts);
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34787)){
var statearr_34880_34927 = state_34874__$1;
(statearr_34880_34927[(1)] = (2));

} else {
var statearr_34881_34928 = state_34874__$1;
(statearr_34881_34928[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (24))){
var inst_34866 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34882_34929 = state_34874__$1;
(statearr_34882_34929[(2)] = inst_34866);

(statearr_34882_34929[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (4))){
var inst_34872 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34874__$1,inst_34872);
} else {
if((state_val_34875 === (15))){
var inst_34870 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34883_34930 = state_34874__$1;
(statearr_34883_34930[(2)] = inst_34870);

(statearr_34883_34930[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (21))){
var inst_34823 = (state_34874[(2)]);
var inst_34824 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34825 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34824);
var state_34874__$1 = (function (){var statearr_34884 = state_34874;
(statearr_34884[(7)] = inst_34823);

return statearr_34884;
})();
var statearr_34885_34931 = state_34874__$1;
(statearr_34885_34931[(2)] = inst_34825);

(statearr_34885_34931[(1)] = (20));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (31))){
var inst_34853 = figwheel.client.css_loaded_state_QMARK_.call(null,msg_names);
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34853)){
var statearr_34886_34932 = state_34874__$1;
(statearr_34886_34932[(1)] = (34));

} else {
var statearr_34887_34933 = state_34874__$1;
(statearr_34887_34933[(1)] = (35));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (32))){
var inst_34862 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34888_34934 = state_34874__$1;
(statearr_34888_34934[(2)] = inst_34862);

(statearr_34888_34934[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (33))){
var inst_34849 = (state_34874[(2)]);
var inst_34850 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34851 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34850);
var state_34874__$1 = (function (){var statearr_34889 = state_34874;
(statearr_34889[(8)] = inst_34849);

return statearr_34889;
})();
var statearr_34890_34935 = state_34874__$1;
(statearr_34890_34935[(2)] = inst_34851);

(statearr_34890_34935[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (13))){
var inst_34808 = figwheel.client.heads_up.clear.call(null);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34874__$1,(16),inst_34808);
} else {
if((state_val_34875 === (22))){
var inst_34829 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34830 = figwheel.client.heads_up.append_warning_message.call(null,inst_34829);
var state_34874__$1 = state_34874;
var statearr_34891_34936 = state_34874__$1;
(statearr_34891_34936[(2)] = inst_34830);

(statearr_34891_34936[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (36))){
var inst_34860 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34892_34937 = state_34874__$1;
(statearr_34892_34937[(2)] = inst_34860);

(statearr_34892_34937[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (29))){
var inst_34840 = (state_34874[(2)]);
var inst_34841 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34842 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34841);
var state_34874__$1 = (function (){var statearr_34893 = state_34874;
(statearr_34893[(9)] = inst_34840);

return statearr_34893;
})();
var statearr_34894_34938 = state_34874__$1;
(statearr_34894_34938[(2)] = inst_34842);

(statearr_34894_34938[(1)] = (27));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (6))){
var inst_34789 = (state_34874[(10)]);
var state_34874__$1 = state_34874;
var statearr_34895_34939 = state_34874__$1;
(statearr_34895_34939[(2)] = inst_34789);

(statearr_34895_34939[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (28))){
var inst_34836 = (state_34874[(2)]);
var inst_34837 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34838 = figwheel.client.heads_up.display_warning.call(null,inst_34837);
var state_34874__$1 = (function (){var statearr_34896 = state_34874;
(statearr_34896[(11)] = inst_34836);

return statearr_34896;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34874__$1,(29),inst_34838);
} else {
if((state_val_34875 === (25))){
var inst_34834 = figwheel.client.heads_up.clear.call(null);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34874__$1,(28),inst_34834);
} else {
if((state_val_34875 === (34))){
var inst_34855 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34874__$1,(37),inst_34855);
} else {
if((state_val_34875 === (17))){
var inst_34814 = (state_34874[(2)]);
var inst_34815 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34816 = figwheel.client.auto_jump_to_error.call(null,opts,inst_34815);
var state_34874__$1 = (function (){var statearr_34897 = state_34874;
(statearr_34897[(12)] = inst_34814);

return statearr_34897;
})();
var statearr_34898_34940 = state_34874__$1;
(statearr_34898_34940[(2)] = inst_34816);

(statearr_34898_34940[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (3))){
var inst_34806 = figwheel.client.compile_refail_state_QMARK_.call(null,msg_names);
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34806)){
var statearr_34899_34941 = state_34874__$1;
(statearr_34899_34941[(1)] = (13));

} else {
var statearr_34900_34942 = state_34874__$1;
(statearr_34900_34942[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (12))){
var inst_34802 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34901_34943 = state_34874__$1;
(statearr_34901_34943[(2)] = inst_34802);

(statearr_34901_34943[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (2))){
var inst_34789 = (state_34874[(10)]);
var inst_34789__$1 = figwheel.client.autoload_QMARK_.call(null);
var state_34874__$1 = (function (){var statearr_34902 = state_34874;
(statearr_34902[(10)] = inst_34789__$1);

return statearr_34902;
})();
if(cljs.core.truth_(inst_34789__$1)){
var statearr_34903_34944 = state_34874__$1;
(statearr_34903_34944[(1)] = (5));

} else {
var statearr_34904_34945 = state_34874__$1;
(statearr_34904_34945[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (23))){
var inst_34832 = figwheel.client.rewarning_state_QMARK_.call(null,msg_names);
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34832)){
var statearr_34905_34946 = state_34874__$1;
(statearr_34905_34946[(1)] = (25));

} else {
var statearr_34906_34947 = state_34874__$1;
(statearr_34906_34947[(1)] = (26));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (35))){
var state_34874__$1 = state_34874;
var statearr_34907_34948 = state_34874__$1;
(statearr_34907_34948[(2)] = null);

(statearr_34907_34948[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (19))){
var inst_34827 = figwheel.client.warning_append_state_QMARK_.call(null,msg_names);
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34827)){
var statearr_34908_34949 = state_34874__$1;
(statearr_34908_34949[(1)] = (22));

} else {
var statearr_34909_34950 = state_34874__$1;
(statearr_34909_34950[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (11))){
var inst_34798 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34910_34951 = state_34874__$1;
(statearr_34910_34951[(2)] = inst_34798);

(statearr_34910_34951[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (9))){
var inst_34800 = figwheel.client.heads_up.clear.call(null);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34874__$1,(12),inst_34800);
} else {
if((state_val_34875 === (5))){
var inst_34791 = new cljs.core.Keyword(null,"autoload","autoload",-354122500).cljs$core$IFn$_invoke$arity$1(opts);
var state_34874__$1 = state_34874;
var statearr_34911_34952 = state_34874__$1;
(statearr_34911_34952[(2)] = inst_34791);

(statearr_34911_34952[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (14))){
var inst_34818 = figwheel.client.compile_fail_state_QMARK_.call(null,msg_names);
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34818)){
var statearr_34912_34953 = state_34874__$1;
(statearr_34912_34953[(1)] = (18));

} else {
var statearr_34913_34954 = state_34874__$1;
(statearr_34913_34954[(1)] = (19));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (26))){
var inst_34844 = figwheel.client.warning_state_QMARK_.call(null,msg_names);
var state_34874__$1 = state_34874;
if(cljs.core.truth_(inst_34844)){
var statearr_34914_34955 = state_34874__$1;
(statearr_34914_34955[(1)] = (30));

} else {
var statearr_34915_34956 = state_34874__$1;
(statearr_34915_34956[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (16))){
var inst_34810 = (state_34874[(2)]);
var inst_34811 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34812 = figwheel.client.heads_up.display_exception.call(null,inst_34811);
var state_34874__$1 = (function (){var statearr_34916 = state_34874;
(statearr_34916[(13)] = inst_34810);

return statearr_34916;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34874__$1,(17),inst_34812);
} else {
if((state_val_34875 === (30))){
var inst_34846 = new cljs.core.Keyword(null,"message","message",-406056002).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34847 = figwheel.client.heads_up.display_warning.call(null,inst_34846);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34874__$1,(33),inst_34847);
} else {
if((state_val_34875 === (10))){
var inst_34804 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34917_34957 = state_34874__$1;
(statearr_34917_34957[(2)] = inst_34804);

(statearr_34917_34957[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (18))){
var inst_34820 = new cljs.core.Keyword(null,"exception-data","exception-data",-512474886).cljs$core$IFn$_invoke$arity$1(msg);
var inst_34821 = figwheel.client.heads_up.display_exception.call(null,inst_34820);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34874__$1,(21),inst_34821);
} else {
if((state_val_34875 === (37))){
var inst_34857 = (state_34874[(2)]);
var state_34874__$1 = state_34874;
var statearr_34918_34958 = state_34874__$1;
(statearr_34918_34958[(2)] = inst_34857);

(statearr_34918_34958[(1)] = (36));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34875 === (8))){
var inst_34796 = figwheel.client.heads_up.flash_loaded.call(null);
var state_34874__$1 = state_34874;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34874__$1,(11),inst_34796);
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
});})(c__33298__auto__,msg_hist,msg_names,msg))
;
return ((function (switch__33275__auto__,c__33298__auto__,msg_hist,msg_names,msg){
return (function() {
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__ = null;
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____0 = (function (){
var statearr_34919 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34919[(0)] = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__);

(statearr_34919[(1)] = (1));

return statearr_34919;
});
var figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____1 = (function (state_34874){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_34874);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34920){if((e34920 instanceof Object)){
var ex__33279__auto__ = e34920;
var statearr_34921_34959 = state_34874;
(statearr_34921_34959[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34874);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34920;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34960 = state_34874;
state_34874 = G__34960;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__ = function(state_34874){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____1.call(this,state_34874);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____0;
figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto____1;
return figwheel$client$heads_up_plugin_msg_handler_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33298__auto__,msg_hist,msg_names,msg))
})();
var state__33300__auto__ = (function (){var statearr_34922 = f__33299__auto__.call(null);
(statearr_34922[(6)] = c__33298__auto__);

return statearr_34922;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33300__auto__);
});})(c__33298__auto__,msg_hist,msg_names,msg))
);

return c__33298__auto__;
});
figwheel.client.heads_up_plugin = (function figwheel$client$heads_up_plugin(opts){
var ch = cljs.core.async.chan.call(null);
figwheel.client.heads_up_config_options_STAR__STAR_ = opts;

var c__33298__auto___34989 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33298__auto___34989,ch){
return (function (){
var f__33299__auto__ = (function (){var switch__33275__auto__ = ((function (c__33298__auto___34989,ch){
return (function (state_34975){
var state_val_34976 = (state_34975[(1)]);
if((state_val_34976 === (1))){
var state_34975__$1 = state_34975;
var statearr_34977_34990 = state_34975__$1;
(statearr_34977_34990[(2)] = null);

(statearr_34977_34990[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (2))){
var state_34975__$1 = state_34975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34975__$1,(4),ch);
} else {
if((state_val_34976 === (3))){
var inst_34973 = (state_34975[(2)]);
var state_34975__$1 = state_34975;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34975__$1,inst_34973);
} else {
if((state_val_34976 === (4))){
var inst_34963 = (state_34975[(7)]);
var inst_34963__$1 = (state_34975[(2)]);
var state_34975__$1 = (function (){var statearr_34978 = state_34975;
(statearr_34978[(7)] = inst_34963__$1);

return statearr_34978;
})();
if(cljs.core.truth_(inst_34963__$1)){
var statearr_34979_34991 = state_34975__$1;
(statearr_34979_34991[(1)] = (5));

} else {
var statearr_34980_34992 = state_34975__$1;
(statearr_34980_34992[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (5))){
var inst_34963 = (state_34975[(7)]);
var inst_34965 = figwheel.client.heads_up_plugin_msg_handler.call(null,opts,inst_34963);
var state_34975__$1 = state_34975;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34975__$1,(8),inst_34965);
} else {
if((state_val_34976 === (6))){
var state_34975__$1 = state_34975;
var statearr_34981_34993 = state_34975__$1;
(statearr_34981_34993[(2)] = null);

(statearr_34981_34993[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (7))){
var inst_34971 = (state_34975[(2)]);
var state_34975__$1 = state_34975;
var statearr_34982_34994 = state_34975__$1;
(statearr_34982_34994[(2)] = inst_34971);

(statearr_34982_34994[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34976 === (8))){
var inst_34967 = (state_34975[(2)]);
var state_34975__$1 = (function (){var statearr_34983 = state_34975;
(statearr_34983[(8)] = inst_34967);

return statearr_34983;
})();
var statearr_34984_34995 = state_34975__$1;
(statearr_34984_34995[(2)] = null);

(statearr_34984_34995[(1)] = (2));


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
});})(c__33298__auto___34989,ch))
;
return ((function (switch__33275__auto__,c__33298__auto___34989,ch){
return (function() {
var figwheel$client$heads_up_plugin_$_state_machine__33276__auto__ = null;
var figwheel$client$heads_up_plugin_$_state_machine__33276__auto____0 = (function (){
var statearr_34985 = [null,null,null,null,null,null,null,null,null];
(statearr_34985[(0)] = figwheel$client$heads_up_plugin_$_state_machine__33276__auto__);

(statearr_34985[(1)] = (1));

return statearr_34985;
});
var figwheel$client$heads_up_plugin_$_state_machine__33276__auto____1 = (function (state_34975){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_34975);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e34986){if((e34986 instanceof Object)){
var ex__33279__auto__ = e34986;
var statearr_34987_34996 = state_34975;
(statearr_34987_34996[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34975);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34986;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34997 = state_34975;
state_34975 = G__34997;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$heads_up_plugin_$_state_machine__33276__auto__ = function(state_34975){
switch(arguments.length){
case 0:
return figwheel$client$heads_up_plugin_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$heads_up_plugin_$_state_machine__33276__auto____1.call(this,state_34975);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$heads_up_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$heads_up_plugin_$_state_machine__33276__auto____0;
figwheel$client$heads_up_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$heads_up_plugin_$_state_machine__33276__auto____1;
return figwheel$client$heads_up_plugin_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33298__auto___34989,ch))
})();
var state__33300__auto__ = (function (){var statearr_34988 = f__33299__auto__.call(null);
(statearr_34988[(6)] = c__33298__auto___34989);

return statearr_34988;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33300__auto__);
});})(c__33298__auto___34989,ch))
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
var c__33298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33298__auto__){
return (function (){
var f__33299__auto__ = (function (){var switch__33275__auto__ = ((function (c__33298__auto__){
return (function (state_35003){
var state_val_35004 = (state_35003[(1)]);
if((state_val_35004 === (1))){
var inst_34998 = cljs.core.async.timeout.call(null,(3000));
var state_35003__$1 = state_35003;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35003__$1,(2),inst_34998);
} else {
if((state_val_35004 === (2))){
var inst_35000 = (state_35003[(2)]);
var inst_35001 = figwheel.client.heads_up.display_system_warning.call(null,"Connection from different project","Shutting connection down!!!!!");
var state_35003__$1 = (function (){var statearr_35005 = state_35003;
(statearr_35005[(7)] = inst_35000);

return statearr_35005;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35003__$1,inst_35001);
} else {
return null;
}
}
});})(c__33298__auto__))
;
return ((function (switch__33275__auto__,c__33298__auto__){
return (function() {
var figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__ = null;
var figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____0 = (function (){
var statearr_35006 = [null,null,null,null,null,null,null,null];
(statearr_35006[(0)] = figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__);

(statearr_35006[(1)] = (1));

return statearr_35006;
});
var figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____1 = (function (state_35003){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35003);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35007){if((e35007 instanceof Object)){
var ex__33279__auto__ = e35007;
var statearr_35008_35010 = state_35003;
(statearr_35008_35010[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35003);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35007;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35011 = state_35003;
state_35003 = G__35011;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__ = function(state_35003){
switch(arguments.length){
case 0:
return figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____1.call(this,state_35003);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____0;
figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_project_plugin_$_state_machine__33276__auto____1;
return figwheel$client$enforce_project_plugin_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33298__auto__))
})();
var state__33300__auto__ = (function (){var statearr_35009 = f__33299__auto__.call(null);
(statearr_35009[(6)] = c__33298__auto__);

return statearr_35009;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33300__auto__);
});})(c__33298__auto__))
);

return c__33298__auto__;
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
var c__33298__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33298__auto__,figwheel_version,temp__5457__auto__){
return (function (){
var f__33299__auto__ = (function (){var switch__33275__auto__ = ((function (c__33298__auto__,figwheel_version,temp__5457__auto__){
return (function (state_35018){
var state_val_35019 = (state_35018[(1)]);
if((state_val_35019 === (1))){
var inst_35012 = cljs.core.async.timeout.call(null,(2000));
var state_35018__$1 = state_35018;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35018__$1,(2),inst_35012);
} else {
if((state_val_35019 === (2))){
var inst_35014 = (state_35018[(2)]);
var inst_35015 = ["Figwheel Client Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel.client._figwheel_version_),"</strong> is not equal to ","Figwheel Sidecar Version <strong>",cljs.core.str.cljs$core$IFn$_invoke$arity$1(figwheel_version),"</strong>",".  Shutting down Websocket Connection!","<h4>To fix try:</h4>","<ol><li>Reload this page and make sure you are not getting a cached version of the client.</li>","<li>You may have to clean (delete compiled assets) and rebuild to make sure that the new client code is being used.</li>","<li>Also, make sure you have consistent Figwheel dependencies.</li></ol>"].join('');
var inst_35016 = figwheel.client.heads_up.display_system_warning.call(null,"Figwheel Client and Server have different versions!!",inst_35015);
var state_35018__$1 = (function (){var statearr_35020 = state_35018;
(statearr_35020[(7)] = inst_35014);

return statearr_35020;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35018__$1,inst_35016);
} else {
return null;
}
}
});})(c__33298__auto__,figwheel_version,temp__5457__auto__))
;
return ((function (switch__33275__auto__,c__33298__auto__,figwheel_version,temp__5457__auto__){
return (function() {
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__ = null;
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____0 = (function (){
var statearr_35021 = [null,null,null,null,null,null,null,null];
(statearr_35021[(0)] = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__);

(statearr_35021[(1)] = (1));

return statearr_35021;
});
var figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____1 = (function (state_35018){
while(true){
var ret_value__33277__auto__ = (function (){try{while(true){
var result__33278__auto__ = switch__33275__auto__.call(null,state_35018);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33278__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33278__auto__;
}
break;
}
}catch (e35022){if((e35022 instanceof Object)){
var ex__33279__auto__ = e35022;
var statearr_35023_35025 = state_35018;
(statearr_35023_35025[(5)] = ex__33279__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35018);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35022;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33277__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35026 = state_35018;
state_35018 = G__35026;
continue;
} else {
return ret_value__33277__auto__;
}
break;
}
});
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__ = function(state_35018){
switch(arguments.length){
case 0:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____0.call(this);
case 1:
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____1.call(this,state_35018);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$0 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____0;
figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__.cljs$core$IFn$_invoke$arity$1 = figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto____1;
return figwheel$client$enforce_figwheel_version_plugin_$_state_machine__33276__auto__;
})()
;})(switch__33275__auto__,c__33298__auto__,figwheel_version,temp__5457__auto__))
})();
var state__33300__auto__ = (function (){var statearr_35024 = f__33299__auto__.call(null);
(statearr_35024[(6)] = c__33298__auto__);

return statearr_35024;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33300__auto__);
});})(c__33298__auto__,figwheel_version,temp__5457__auto__))
);

return c__33298__auto__;
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
figwheel.client.file_line_column = (function figwheel$client$file_line_column(p__35027){
var map__35028 = p__35027;
var map__35028__$1 = ((((!((map__35028 == null)))?((((map__35028.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35028.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35028):map__35028);
var file = cljs.core.get.call(null,map__35028__$1,new cljs.core.Keyword(null,"file","file",-1269645878));
var line = cljs.core.get.call(null,map__35028__$1,new cljs.core.Keyword(null,"line","line",212345235));
var column = cljs.core.get.call(null,map__35028__$1,new cljs.core.Keyword(null,"column","column",2078222095));
var G__35030 = "";
var G__35030__$1 = (cljs.core.truth_(file)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35030),"file ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(file)].join(''):G__35030);
var G__35030__$2 = (cljs.core.truth_(line)?[cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35030__$1)," at line ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(line)].join(''):G__35030__$1);
if(cljs.core.truth_((function (){var and__30201__auto__ = line;
if(cljs.core.truth_(and__30201__auto__)){
return column;
} else {
return and__30201__auto__;
}
})())){
return [cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__35030__$2),", column ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(column)].join('');
} else {
return G__35030__$2;
}
});
figwheel.client.default_on_compile_fail = (function figwheel$client$default_on_compile_fail(p__35031){
var map__35032 = p__35031;
var map__35032__$1 = ((((!((map__35032 == null)))?((((map__35032.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35032.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35032):map__35032);
var ed = map__35032__$1;
var formatted_exception = cljs.core.get.call(null,map__35032__$1,new cljs.core.Keyword(null,"formatted-exception","formatted-exception",-116489026));
var exception_data = cljs.core.get.call(null,map__35032__$1,new cljs.core.Keyword(null,"exception-data","exception-data",-512474886));
var cause = cljs.core.get.call(null,map__35032__$1,new cljs.core.Keyword(null,"cause","cause",231901252));
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"debug","debug",-1608172596),"Figwheel: Compile Exception");

var seq__35034_35038 = cljs.core.seq.call(null,figwheel.client.format_messages.call(null,exception_data));
var chunk__35035_35039 = null;
var count__35036_35040 = (0);
var i__35037_35041 = (0);
while(true){
if((i__35037_35041 < count__35036_35040)){
var msg_35042 = cljs.core._nth.call(null,chunk__35035_35039,i__35037_35041);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35042);

var G__35043 = seq__35034_35038;
var G__35044 = chunk__35035_35039;
var G__35045 = count__35036_35040;
var G__35046 = (i__35037_35041 + (1));
seq__35034_35038 = G__35043;
chunk__35035_35039 = G__35044;
count__35036_35040 = G__35045;
i__35037_35041 = G__35046;
continue;
} else {
var temp__5457__auto___35047 = cljs.core.seq.call(null,seq__35034_35038);
if(temp__5457__auto___35047){
var seq__35034_35048__$1 = temp__5457__auto___35047;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35034_35048__$1)){
var c__31144__auto___35049 = cljs.core.chunk_first.call(null,seq__35034_35048__$1);
var G__35050 = cljs.core.chunk_rest.call(null,seq__35034_35048__$1);
var G__35051 = c__31144__auto___35049;
var G__35052 = cljs.core.count.call(null,c__31144__auto___35049);
var G__35053 = (0);
seq__35034_35038 = G__35050;
chunk__35035_35039 = G__35051;
count__35036_35040 = G__35052;
i__35037_35041 = G__35053;
continue;
} else {
var msg_35054 = cljs.core.first.call(null,seq__35034_35048__$1);
figwheel.client.utils.log.call(null,new cljs.core.Keyword(null,"info","info",-317069002),msg_35054);

var G__35055 = cljs.core.next.call(null,seq__35034_35048__$1);
var G__35056 = null;
var G__35057 = (0);
var G__35058 = (0);
seq__35034_35038 = G__35055;
chunk__35035_35039 = G__35056;
count__35036_35040 = G__35057;
i__35037_35041 = G__35058;
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
figwheel.client.default_on_compile_warning = (function figwheel$client$default_on_compile_warning(p__35059){
var map__35060 = p__35059;
var map__35060__$1 = ((((!((map__35060 == null)))?((((map__35060.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35060.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35060):map__35060);
var w = map__35060__$1;
var message = cljs.core.get.call(null,map__35060__$1,new cljs.core.Keyword(null,"message","message",-406056002));
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
figwheel.client.config_defaults = cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"on-compile-warning","on-compile-warning",-1195585947),new cljs.core.Keyword(null,"on-jsload","on-jsload",-395756602),new cljs.core.Keyword(null,"reload-dependents","reload-dependents",-956865430),new cljs.core.Keyword(null,"on-compile-fail","on-compile-fail",728013036),new cljs.core.Keyword(null,"debug","debug",-1608172596),new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202),new cljs.core.Keyword(null,"websocket-url","websocket-url",-490444938),new cljs.core.Keyword(null,"auto-jump-to-source-on-error","auto-jump-to-source-on-error",-960314920),new cljs.core.Keyword(null,"before-jsload","before-jsload",-847513128),new cljs.core.Keyword(null,"load-warninged-code","load-warninged-code",-2030345223),new cljs.core.Keyword(null,"eval-fn","eval-fn",-1111644294),new cljs.core.Keyword(null,"retry-count","retry-count",1936122875),new cljs.core.Keyword(null,"autoload","autoload",-354122500),new cljs.core.Keyword(null,"on-cssload","on-cssload",1825432318)],[new cljs.core.Var(function(){return figwheel.client.default_on_compile_warning;},new cljs.core.Symbol("figwheel.client","default-on-compile-warning","figwheel.client/default-on-compile-warning",584144208,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-warning","default-on-compile-warning",-18911586,null),"resources/public/cljs/out/figwheel/client.cljs",33,1,363,363,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"message","message",1234475525,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"w","w",1994700528,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_warning)?figwheel.client.default_on_compile_warning.cljs$lang$test:null)])),figwheel.client.default_on_jsload,true,new cljs.core.Var(function(){return figwheel.client.default_on_compile_fail;},new cljs.core.Symbol("figwheel.client","default-on-compile-fail","figwheel.client/default-on-compile-fail",1384826337,null),cljs.core.PersistentHashMap.fromArrays([new cljs.core.Keyword(null,"ns","ns",441598760),new cljs.core.Keyword(null,"name","name",1843675177),new cljs.core.Keyword(null,"file","file",-1269645878),new cljs.core.Keyword(null,"end-column","end-column",1425389514),new cljs.core.Keyword(null,"column","column",2078222095),new cljs.core.Keyword(null,"line","line",212345235),new cljs.core.Keyword(null,"end-line","end-line",1837326455),new cljs.core.Keyword(null,"arglists","arglists",1661989754),new cljs.core.Keyword(null,"doc","doc",1913296891),new cljs.core.Keyword(null,"test","test",577538877)],[new cljs.core.Symbol(null,"figwheel.client","figwheel.client",-538710252,null),new cljs.core.Symbol(null,"default-on-compile-fail","default-on-compile-fail",-158814813,null),"resources/public/cljs/out/figwheel/client.cljs",30,1,355,355,cljs.core.list(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"keys","keys",1068423698),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"formatted-exception","formatted-exception",1524042501,null),new cljs.core.Symbol(null,"exception-data","exception-data",1128056641,null),new cljs.core.Symbol(null,"cause","cause",1872432779,null)], null),new cljs.core.Keyword(null,"as","as",1148689641),new cljs.core.Symbol(null,"ed","ed",2076825751,null)], null)], null)),null,(cljs.core.truth_(figwheel.client.default_on_compile_fail)?figwheel.client.default_on_compile_fail.cljs$lang$test:null)])),false,true,["ws://",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(figwheel.client.utils.html_env_QMARK_.call(null))?location.host:"localhost:3449")),"/figwheel-ws"].join(''),false,figwheel.client.default_before_load,false,false,(100),true,figwheel.client.default_on_cssload]);
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
if(cljs.core.truth_((function (){var and__30201__auto__ = new cljs.core.Keyword(null,"heads-up-display","heads-up-display",-896577202).cljs$core$IFn$_invoke$arity$1(system_options);
if(cljs.core.truth_(and__30201__auto__)){
return figwheel.client.utils.html_env_QMARK_.call(null);
} else {
return and__30201__auto__;
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
figwheel.client.add_json_message_watch = (function figwheel$client$add_json_message_watch(key,callback){
return figwheel.client.add_message_watch.call(null,key,cljs.core.comp.call(null,callback,cljs.core.clj__GT_js));
});
goog.exportSymbol('figwheel.client.add_json_message_watch', figwheel.client.add_json_message_watch);
figwheel.client.add_plugins = (function figwheel$client$add_plugins(plugins,system_options){
var seq__35062 = cljs.core.seq.call(null,plugins);
var chunk__35063 = null;
var count__35064 = (0);
var i__35065 = (0);
while(true){
if((i__35065 < count__35064)){
var vec__35066 = cljs.core._nth.call(null,chunk__35063,i__35065);
var k = cljs.core.nth.call(null,vec__35066,(0),null);
var plugin = cljs.core.nth.call(null,vec__35066,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35072 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35062,chunk__35063,count__35064,i__35065,pl_35072,vec__35066,k,plugin){
return (function (_,___$1,___$2,msg_hist){
return pl_35072.call(null,msg_hist);
});})(seq__35062,chunk__35063,count__35064,i__35065,pl_35072,vec__35066,k,plugin))
);
} else {
}

var G__35073 = seq__35062;
var G__35074 = chunk__35063;
var G__35075 = count__35064;
var G__35076 = (i__35065 + (1));
seq__35062 = G__35073;
chunk__35063 = G__35074;
count__35064 = G__35075;
i__35065 = G__35076;
continue;
} else {
var temp__5457__auto__ = cljs.core.seq.call(null,seq__35062);
if(temp__5457__auto__){
var seq__35062__$1 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35062__$1)){
var c__31144__auto__ = cljs.core.chunk_first.call(null,seq__35062__$1);
var G__35077 = cljs.core.chunk_rest.call(null,seq__35062__$1);
var G__35078 = c__31144__auto__;
var G__35079 = cljs.core.count.call(null,c__31144__auto__);
var G__35080 = (0);
seq__35062 = G__35077;
chunk__35063 = G__35078;
count__35064 = G__35079;
i__35065 = G__35080;
continue;
} else {
var vec__35069 = cljs.core.first.call(null,seq__35062__$1);
var k = cljs.core.nth.call(null,vec__35069,(0),null);
var plugin = cljs.core.nth.call(null,vec__35069,(1),null);
if(cljs.core.truth_(plugin)){
var pl_35081 = plugin.call(null,system_options);
cljs.core.add_watch.call(null,figwheel.client.socket.message_history_atom,k,((function (seq__35062,chunk__35063,count__35064,i__35065,pl_35081,vec__35069,k,plugin,seq__35062__$1,temp__5457__auto__){
return (function (_,___$1,___$2,msg_hist){
return pl_35081.call(null,msg_hist);
});})(seq__35062,chunk__35063,count__35064,i__35065,pl_35081,vec__35069,k,plugin,seq__35062__$1,temp__5457__auto__))
);
} else {
}

var G__35082 = cljs.core.next.call(null,seq__35062__$1);
var G__35083 = null;
var G__35084 = (0);
var G__35085 = (0);
seq__35062 = G__35082;
chunk__35063 = G__35083;
count__35064 = G__35084;
i__35065 = G__35085;
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
var G__35087 = arguments.length;
switch (G__35087) {
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

var seq__35088_35093 = cljs.core.seq.call(null,new cljs.core.Keyword(null,"initial-messages","initial-messages",2057377771).cljs$core$IFn$_invoke$arity$1(system_options));
var chunk__35089_35094 = null;
var count__35090_35095 = (0);
var i__35091_35096 = (0);
while(true){
if((i__35091_35096 < count__35090_35095)){
var msg_35097 = cljs.core._nth.call(null,chunk__35089_35094,i__35091_35096);
figwheel.client.socket.handle_incoming_message.call(null,msg_35097);

var G__35098 = seq__35088_35093;
var G__35099 = chunk__35089_35094;
var G__35100 = count__35090_35095;
var G__35101 = (i__35091_35096 + (1));
seq__35088_35093 = G__35098;
chunk__35089_35094 = G__35099;
count__35090_35095 = G__35100;
i__35091_35096 = G__35101;
continue;
} else {
var temp__5457__auto___35102 = cljs.core.seq.call(null,seq__35088_35093);
if(temp__5457__auto___35102){
var seq__35088_35103__$1 = temp__5457__auto___35102;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__35088_35103__$1)){
var c__31144__auto___35104 = cljs.core.chunk_first.call(null,seq__35088_35103__$1);
var G__35105 = cljs.core.chunk_rest.call(null,seq__35088_35103__$1);
var G__35106 = c__31144__auto___35104;
var G__35107 = cljs.core.count.call(null,c__31144__auto___35104);
var G__35108 = (0);
seq__35088_35093 = G__35105;
chunk__35089_35094 = G__35106;
count__35090_35095 = G__35107;
i__35091_35096 = G__35108;
continue;
} else {
var msg_35109 = cljs.core.first.call(null,seq__35088_35103__$1);
figwheel.client.socket.handle_incoming_message.call(null,msg_35109);

var G__35110 = cljs.core.next.call(null,seq__35088_35103__$1);
var G__35111 = null;
var G__35112 = (0);
var G__35113 = (0);
seq__35088_35093 = G__35110;
chunk__35089_35094 = G__35111;
count__35090_35095 = G__35112;
i__35091_35096 = G__35113;
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
var args__31497__auto__ = [];
var len__31490__auto___35118 = arguments.length;
var i__31491__auto___35119 = (0);
while(true){
if((i__31491__auto___35119 < len__31490__auto___35118)){
args__31497__auto__.push((arguments[i__31491__auto___35119]));

var G__35120 = (i__31491__auto___35119 + (1));
i__31491__auto___35119 = G__35120;
continue;
} else {
}
break;
}

var argseq__31498__auto__ = ((((0) < args__31497__auto__.length))?(new cljs.core.IndexedSeq(args__31497__auto__.slice((0)),(0),null)):null);
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(argseq__31498__auto__);
});

figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic = (function (p__35115){
var map__35116 = p__35115;
var map__35116__$1 = ((((!((map__35116 == null)))?((((map__35116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35116):map__35116);
var opts = map__35116__$1;
return figwheel.client.start.call(null,opts);
});

figwheel.client.watch_and_reload.cljs$lang$maxFixedArity = (0);

figwheel.client.watch_and_reload.cljs$lang$applyTo = (function (seq35114){
return figwheel.client.watch_and_reload.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq35114));
});

figwheel.client.fetch_data_from_env = (function figwheel$client$fetch_data_from_env(){
try{return cljs.reader.read_string.call(null,goog.object.get(window,"FIGWHEEL_CLIENT_CONFIGURATION"));
}catch (e35121){if((e35121 instanceof Error)){
var e = e35121;
cljs.core._STAR_print_err_fn_STAR_.call(null,"Unable to load FIGWHEEL_CLIENT_CONFIGURATION from the environment");

return new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"autoload","autoload",-354122500),false], null);
} else {
throw e35121;

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
return (function (p__35122){
var map__35123 = p__35122;
var map__35123__$1 = ((((!((map__35123 == null)))?((((map__35123.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35123.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35123):map__35123);
var msg_name = cljs.core.get.call(null,map__35123__$1,new cljs.core.Keyword(null,"msg-name","msg-name",-353709863));
if(cljs.core._EQ_.call(null,msg_name,new cljs.core.Keyword(null,"files-changed","files-changed",-1418200563))){
return location.href = location.href;
} else {
return null;
}
});})(config))
);
});

//# sourceMappingURL=client.js.map?rel=1518813257033
