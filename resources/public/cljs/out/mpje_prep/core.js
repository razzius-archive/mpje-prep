// Compiled by ClojureScript 1.9.908 {}
goog.provide('mpje_prep.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mpje_prep.questions');
goog.require('mpje_prep.components');
mpje_prep.core.starting_number = cljs.core.rand_int.call(null,cljs.core.count.call(null,mpje_prep.questions.questions));
mpje_prep.core.starting_question = cljs.core.nth.call(null,mpje_prep.questions.questions,mpje_prep.core.starting_number);
if(typeof mpje_prep.core.app_state !== 'undefined'){
} else {
mpje_prep.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 5, [new cljs.core.Keyword(null,"question-number","question-number",-76884463),mpje_prep.core.starting_number,new cljs.core.Keyword(null,"answered","answered",-1524147020),false,new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"shuffled-options","shuffled-options",975592814),cljs.core.shuffle.call(null,cljs.core.conj.call(null,new cljs.core.Keyword(null,"other-options","other-options",170412142).cljs$core$IFn$_invoke$arity$1(mpje_prep.core.starting_question),new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(mpje_prep.core.starting_question))),new cljs.core.Keyword(null,"finished","finished",-1018867731),cljs.core.PersistentHashSet.EMPTY], null));
}
mpje_prep.core.render_BANG_ = (function mpje_prep$core$render_BANG_(){
return ReactDOM.render(mpje_prep.components.mpje_prep.call(null,mpje_prep.core.app_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,mpje_prep.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return mpje_prep.core.render_BANG_.call(null);
}));
mpje_prep.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1518816485844
