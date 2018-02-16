// Compiled by ClojureScript 1.9.908 {}
goog.provide('mpje_prep.components');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('sablono.core');
goog.require('om.dom');
goog.require('om.next');
goog.require('mpje_prep.questions');
goog.require('mpje_prep.control');
mpje_prep.components.header = new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"h1.header","h1.header",2109962789),"MPJE Prep"], null);
/**
 * @constructor
 */
mpje_prep.components.AutoFocusingButton = (function mpje_prep$components$AutoFocusingButton(){
var this__33957__auto__ = this;
React.Component.apply(this__33957__auto__,arguments);

if(!((this__33957__auto__.initLocalState == null))){
this__33957__auto__.state = this__33957__auto__.initLocalState();
} else {
this__33957__auto__.state = {};
}

return this__33957__auto__;
});

mpje_prep.components.AutoFocusingButton.prototype = goog.object.clone(React.Component.prototype);

var x41423_41433 = mpje_prep.components.AutoFocusingButton.prototype;
x41423_41433.componentWillUpdate = ((function (x41423_41433){
return (function (next_props__33801__auto__,next_state__33802__auto__){
var this__33800__auto__ = this;
if(((!((this__33800__auto__ == null)))?(((false) || ((cljs.core.PROTOCOL_SENTINEL === this__33800__auto__.om$next$Ident$)))?true:false):false)){
var ident__33804__auto___41434 = om.next.ident.call(null,this__33800__auto__,om.next.props.call(null,this__33800__auto__));
var next_ident__33805__auto___41435 = om.next.ident.call(null,this__33800__auto__,om.next._next_props.call(null,next_props__33801__auto__,this__33800__auto__));
if(cljs.core.not_EQ_.call(null,ident__33804__auto___41434,next_ident__33805__auto___41435)){
var idxr__33806__auto___41436 = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33800__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((idxr__33806__auto___41436 == null)){
} else {
cljs.core.swap_BANG_.call(null,new cljs.core.Keyword(null,"indexes","indexes",1496475545).cljs$core$IFn$_invoke$arity$1(idxr__33806__auto___41436),((function (idxr__33806__auto___41436,ident__33804__auto___41434,next_ident__33805__auto___41435,this__33800__auto__,x41423_41433){
return (function (indexes__33807__auto__){
return cljs.core.update_in.call(null,cljs.core.update_in.call(null,indexes__33807__auto__,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),ident__33804__auto___41434], null),cljs.core.disj,this__33800__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"ref->components","ref->components",-303587249),next_ident__33805__auto___41435], null),cljs.core.fnil.call(null,cljs.core.conj,cljs.core.PersistentHashSet.EMPTY),this__33800__auto__);
});})(idxr__33806__auto___41436,ident__33804__auto___41434,next_ident__33805__auto___41435,this__33800__auto__,x41423_41433))
);
}
} else {
}
} else {
}

om.next.merge_pending_props_BANG_.call(null,this__33800__auto__);

return om.next.merge_pending_state_BANG_.call(null,this__33800__auto__);
});})(x41423_41433))
;

x41423_41433.shouldComponentUpdate = ((function (x41423_41433){
return (function (next_props__33801__auto__,next_state__33802__auto__){
var this__33800__auto__ = this;
var next_children__33803__auto__ = next_props__33801__auto__.children;
var next_props__33801__auto____$1 = goog.object.get(next_props__33801__auto__,"omcljs$value");
var next_props__33801__auto____$2 = (function (){var G__41425 = next_props__33801__auto____$1;
if((next_props__33801__auto____$1 instanceof om.next.OmProps)){
return om.next.unwrap.call(null,G__41425);
} else {
return G__41425;
}
})();
var or__30213__auto__ = cljs.core.not_EQ_.call(null,om.next.props.call(null,this__33800__auto__),next_props__33801__auto____$2);
if(or__30213__auto__){
return or__30213__auto__;
} else {
var or__30213__auto____$1 = (function (){var and__30201__auto__ = this__33800__auto__.state;
if(cljs.core.truth_(and__30201__auto__)){
return cljs.core.not_EQ_.call(null,goog.object.get(this__33800__auto__.state,"omcljs$state"),goog.object.get(next_state__33802__auto__,"omcljs$state"));
} else {
return and__30201__auto__;
}
})();
if(cljs.core.truth_(or__30213__auto____$1)){
return or__30213__auto____$1;
} else {
return cljs.core.not_EQ_.call(null,this__33800__auto__.props.children,next_children__33803__auto__);
}
}
});})(x41423_41433))
;

x41423_41433.componentWillUnmount = ((function (x41423_41433){
return (function (){
var this__33800__auto__ = this;
var r__33811__auto__ = om.next.get_reconciler.call(null,this__33800__auto__);
var cfg__33812__auto__ = new cljs.core.Keyword(null,"config","config",994861415).cljs$core$IFn$_invoke$arity$1(r__33811__auto__);
var st__33813__auto__ = new cljs.core.Keyword(null,"state","state",-1988618099).cljs$core$IFn$_invoke$arity$1(cfg__33812__auto__);
var indexer__33810__auto__ = new cljs.core.Keyword(null,"indexer","indexer",-1774914315).cljs$core$IFn$_invoke$arity$1(cfg__33812__auto__);
if(cljs.core.truth_((function (){var and__30201__auto__ = !((st__33813__auto__ == null));
if(and__30201__auto__){
return cljs.core.get_in.call(null,cljs.core.deref.call(null,st__33813__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146),this__33800__auto__], null));
} else {
return and__30201__auto__;
}
})())){
cljs.core.swap_BANG_.call(null,st__33813__auto__,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword("om.next","queries","om.next/queries",-22717146)], null),cljs.core.dissoc,this__33800__auto__);
} else {
}

if((indexer__33810__auto__ == null)){
return null;
} else {
return om.next.protocols.drop_component_BANG_.call(null,indexer__33810__auto__,this__33800__auto__);
}
});})(x41423_41433))
;

x41423_41433.componentDidUpdate = ((function (x41423_41433){
return (function (prev_props__33808__auto__,prev_state__33809__auto__){
var this__33800__auto__ = this;
return om.next.clear_prev_props_BANG_.call(null,this__33800__auto__);
});})(x41423_41433))
;

x41423_41433.isMounted = ((function (x41423_41433){
return (function (){
var this__33800__auto__ = this;
return cljs.core.boolean$.call(null,goog.object.getValueByKeys(this__33800__auto__,"_reactInternalInstance","_renderedComponent"));
});})(x41423_41433))
;

x41423_41433.componentWillMount = ((function (x41423_41433){
return (function (){
var this__33800__auto__ = this;
var indexer__33810__auto__ = cljs.core.get_in.call(null,om.next.get_reconciler.call(null,this__33800__auto__),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"config","config",994861415),new cljs.core.Keyword(null,"indexer","indexer",-1774914315)], null));
if((indexer__33810__auto__ == null)){
return null;
} else {
return om.next.protocols.index_component_BANG_.call(null,indexer__33810__auto__,this__33800__auto__);
}
});})(x41423_41433))
;

x41423_41433.componentDidMount = ((function (x41423_41433){
return (function (){
var this$ = this;
return this$.focus();
});})(x41423_41433))
;

x41423_41433.render = ((function (x41423_41433){
return (function (){
var this__33799__auto__ = this;
var this$ = this__33799__auto__;
var _STAR_reconciler_STAR_41426 = om.next._STAR_reconciler_STAR_;
var _STAR_depth_STAR_41427 = om.next._STAR_depth_STAR_;
var _STAR_shared_STAR_41428 = om.next._STAR_shared_STAR_;
var _STAR_instrument_STAR_41429 = om.next._STAR_instrument_STAR_;
var _STAR_parent_STAR_41430 = om.next._STAR_parent_STAR_;
om.next._STAR_reconciler_STAR_ = om.next.get_reconciler.call(null,this__33799__auto__);

om.next._STAR_depth_STAR_ = (om.next.depth.call(null,this__33799__auto__) + (1));

om.next._STAR_shared_STAR_ = om.next.shared.call(null,this__33799__auto__);

om.next._STAR_instrument_STAR_ = om.next.instrument.call(null,this__33799__auto__);

om.next._STAR_parent_STAR_ = this__33799__auto__;

try{return om.dom.button.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"id","id",-1388402092),"next"], null),"click me");
}finally {om.next._STAR_parent_STAR_ = _STAR_parent_STAR_41430;

om.next._STAR_instrument_STAR_ = _STAR_instrument_STAR_41429;

om.next._STAR_shared_STAR_ = _STAR_shared_STAR_41428;

om.next._STAR_depth_STAR_ = _STAR_depth_STAR_41427;

om.next._STAR_reconciler_STAR_ = _STAR_reconciler_STAR_41426;
}});})(x41423_41433))
;


mpje_prep.components.AutoFocusingButton.prototype.constructor = mpje_prep.components.AutoFocusingButton;

mpje_prep.components.AutoFocusingButton.prototype.constructor.displayName = "mpje-prep.components/AutoFocusingButton";

mpje_prep.components.AutoFocusingButton.prototype.om$isComponent = true;

var x41431_41437 = mpje_prep.components.AutoFocusingButton;


var x41432_41438 = mpje_prep.components.AutoFocusingButton.prototype;


mpje_prep.components.AutoFocusingButton.cljs$lang$type = true;

mpje_prep.components.AutoFocusingButton.cljs$lang$ctorStr = "mpje-prep.components/AutoFocusingButton";

mpje_prep.components.AutoFocusingButton.cljs$lang$ctorPrWriter = (function (this__33960__auto__,writer__33961__auto__,opt__33962__auto__){
return cljs.core._write.call(null,writer__33961__auto__,"mpje-prep.components/AutoFocusingButton");
});
mpje_prep.components.auto_focusing_button = om.next.factory.call(null,mpje_prep.components.AutoFocusingButton);
mpje_prep.components.page_layout = (function mpje_prep$components$page_layout(var_args){
var args__31497__auto__ = [];
var len__31490__auto___41440 = arguments.length;
var i__31491__auto___41441 = (0);
while(true){
if((i__31491__auto___41441 < len__31490__auto___41440)){
args__31497__auto__.push((arguments[i__31491__auto___41441]));

var G__41442 = (i__31491__auto___41441 + (1));
i__31491__auto___41441 = G__41442;
continue;
} else {
}
break;
}

var argseq__31498__auto__ = ((((0) < args__31497__auto__.length))?(new cljs.core.IndexedSeq(args__31497__auto__.slice((0)),(0),null)):null);
return mpje_prep.components.page_layout.cljs$core$IFn$_invoke$arity$variadic(argseq__31498__auto__);
});

mpje_prep.components.page_layout.cljs$core$IFn$_invoke$arity$variadic = (function (contents){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div.container","div.container",72419955),mpje_prep.components.header,contents], null);
});

mpje_prep.components.page_layout.cljs$lang$maxFixedArity = (0);

mpje_prep.components.page_layout.cljs$lang$applyTo = (function (seq41439){
return mpje_prep.components.page_layout.cljs$core$IFn$_invoke$arity$variadic(cljs.core.seq.call(null,seq41439));
});

mpje_prep.components.format_correct = (function mpje_prep$components$format_correct(answer){
if(typeof answer === 'string'){
return ["Wrong. Correct answer: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(answer)].join('');
} else {
return ["Wrong. Acceptable answers: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(clojure.string.join.call(null,", ",answer))].join('');
}
});
mpje_prep.components.question_form = (function mpje_prep$components$question_form(data,question){
return new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"form","form",-1624062471),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"id","id",-1388402092),"form",new cljs.core.Keyword(null,"on-submit","on-submit",1227871159),cljs.core.partial.call(null,mpje_prep.control.check_question,data),new cljs.core.Keyword(null,"auto-complete","auto-complete",244958848),"off"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"p","p",151049309),new cljs.core.Keyword(null,"question","question",-1411720117).cljs$core$IFn$_invoke$arity$1(question)], null),(cljs.core.truth_(new cljs.core.Keyword(null,"other-options","other-options",170412142).cljs$core$IFn$_invoke$arity$1(question))?(function (){var iter__31095__auto__ = (function mpje_prep$components$question_form_$_iter__41443(s__41444){
return (new cljs.core.LazySeq(null,(function (){
var s__41444__$1 = s__41444;
while(true){
var temp__5457__auto__ = cljs.core.seq.call(null,s__41444__$1);
if(temp__5457__auto__){
var s__41444__$2 = temp__5457__auto__;
if(cljs.core.chunked_seq_QMARK_.call(null,s__41444__$2)){
var c__31093__auto__ = cljs.core.chunk_first.call(null,s__41444__$2);
var size__31094__auto__ = cljs.core.count.call(null,c__31093__auto__);
var b__41446 = cljs.core.chunk_buffer.call(null,size__31094__auto__);
if((function (){var i__41445 = (0);
while(true){
if((i__41445 < size__31094__auto__)){
var option = cljs.core._nth.call(null,c__31093__auto__,i__41445);
cljs.core.chunk_append.call(null,b__41446,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"value","value",305978217),option], null)], null),option], null)], null));

var G__41447 = (i__41445 + (1));
i__41445 = G__41447;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41446),mpje_prep$components$question_form_$_iter__41443.call(null,cljs.core.chunk_rest.call(null,s__41444__$2)));
} else {
return cljs.core.chunk_cons.call(null,cljs.core.chunk.call(null,b__41446),null);
}
} else {
var option = cljs.core.first.call(null,s__41444__$2);
return cljs.core.cons.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"label","label",1718410804),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"key","key",-1516042587),option], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"type","type",1174270348),"radio",new cljs.core.Keyword(null,"name","name",1843675177),"options",new cljs.core.Keyword(null,"value","value",305978217),option], null)], null),option], null)], null),mpje_prep$components$question_form_$_iter__41443.call(null,cljs.core.rest.call(null,s__41444__$2)));
}
} else {
return null;
}
break;
}
}),null,null));
});
return iter__31095__auto__.call(null,new cljs.core.Keyword(null,"shuffled-options","shuffled-options",975592814).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)));
})():new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input#answer","input#answer",-1068814886),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"placeholder","placeholder",-104873083),"Type and press enter"], null)], null)),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"input","input",556931961),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"type","type",1174270348),"submit"], null)], null)], null);
});
mpje_prep.components.mpje_prep = (function mpje_prep$components$mpje_prep(data){
return sablono.interpreter.interpret.call(null,mpje_prep.components.page_layout.call(null,(((cljs.core.not.call(null,new cljs.core.Keyword(null,"answered","answered",-1524147020).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))) && (cljs.core._EQ_.call(null,cljs.core.count.call(null,new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))),cljs.core.count.call(null,mpje_prep.questions.questions))))?new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),"You've answered all the questions correctly!"], null):(((new cljs.core.Keyword(null,"question-number","question-number",-76884463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)) == null))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button","button",1456579943),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,mpje_prep.control.next_question,data)], null),"Click here!"], null):(function (){var question_number = new cljs.core.Keyword(null,"question-number","question-number",-76884463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data));
var question = cljs.core.nth.call(null,mpje_prep.questions.questions,question_number);
return new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"small","small",2133478704),(cljs.core.count.call(null,mpje_prep.questions.questions) - cljs.core.count.call(null,new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data))))," remaining"], null),mpje_prep.components.question_form.call(null,data,question),(cljs.core.truth_(new cljs.core.Keyword(null,"answered","answered",-1524147020).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))?new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),(cljs.core.truth_(new cljs.core.Keyword(null,"correct","correct",984806334).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,data)))?["Correct! ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((cljs.core.truth_(cljs.core.not_empty.call(null,new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(question)))?["Note: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(new cljs.core.Keyword(null,"note","note",1426297904).cljs$core$IFn$_invoke$arity$1(question))].join(''):null))].join(''):mpje_prep.components.format_correct.call(null,new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(question))),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"div","div",1057191632),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"button#next","button#next",-1535336029),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"on-click","on-click",1632826543),cljs.core.partial.call(null,mpje_prep.control.next_question,data)], null),"Next Question"], null)], null)], null):null)], null);
})()
))));
});

//# sourceMappingURL=components.js.map?rel=1518816485822
