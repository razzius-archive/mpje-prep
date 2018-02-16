// Compiled by ClojureScript 1.9.908 {}
goog.provide('mpje_prep.control');
goog.require('cljs.core');
goog.require('clojure.string');
goog.require('clojure.set');
goog.require('mpje_prep.questions');
mpje_prep.control.check_question = (function mpje_prep$control$check_question(app_state,event){
event.preventDefault();

var question_number = new cljs.core.Keyword(null,"question-number","question-number",-76884463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state));
var question = cljs.core.nth.call(null,mpje_prep.questions.questions,question_number);
var answer = (cljs.core.truth_(new cljs.core.Keyword(null,"other-options","other-options",170412142).cljs$core$IFn$_invoke$arity$1(question))?document.getElementById("form").elements.options.value:clojure.string.lower_case.call(null,document.getElementById("answer").value));
var expected = new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(question);
var correct = ((typeof expected === 'string')?cljs.core._EQ_.call(null,expected,answer):expected.call(null,answer));
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"correct","correct",984806334),correct,new cljs.core.Keyword(null,"answered","answered",-1524147020),true);

if(cljs.core.truth_(correct)){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"finished","finished",-1018867731)], null),((function (question_number,question,answer,expected,correct){
return (function (p1__41361_SHARP_){
return cljs.core.conj.call(null,p1__41361_SHARP_,question_number);
});})(question_number,question,answer,expected,correct))
);
} else {
return null;
}
});
mpje_prep.control.next_question = (function mpje_prep$control$next_question(app_state){
var n_finished = cljs.core.count.call(null,new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)));
var n_questions = cljs.core.count.call(null,mpje_prep.questions.questions);
if(cljs.core._EQ_.call(null,n_finished,n_questions)){
return cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"answered","answered",-1524147020),false);
} else {
var question_number = cljs.core.rand_nth.call(null,cljs.core.vec.call(null,clojure.set.difference.call(null,cljs.core.set.call(null,cljs.core.range.call(null,cljs.core.count.call(null,mpje_prep.questions.questions))),new cljs.core.Keyword(null,"finished","finished",-1018867731).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state)),((cljs.core.not_EQ_.call(null,(1),(n_questions - n_finished)))?cljs.core.PersistentHashSet.createAsIfByAssoc([new cljs.core.Keyword(null,"question-number","question-number",-76884463).cljs$core$IFn$_invoke$arity$1(cljs.core.deref.call(null,app_state))]):null))));
var question = cljs.core.nth.call(null,mpje_prep.questions.questions,question_number);
var other_options = new cljs.core.Keyword(null,"other-options","other-options",170412142).cljs$core$IFn$_invoke$arity$1(question);
var shuffled_options = (cljs.core.truth_(other_options)?cljs.core.shuffle.call(null,cljs.core.conj.call(null,other_options,new cljs.core.Keyword(null,"answer","answer",-742633163).cljs$core$IFn$_invoke$arity$1(question))):null);
cljs.core.swap_BANG_.call(null,app_state,cljs.core.assoc,new cljs.core.Keyword(null,"correct","correct",984806334),false,new cljs.core.Keyword(null,"answered","answered",-1524147020),false,new cljs.core.Keyword(null,"question-number","question-number",-76884463),question_number,new cljs.core.Keyword(null,"shuffled-options","shuffled-options",975592814),shuffled_options);

var G__41362 = document;
var G__41362__$1 = (((G__41362 == null))?null:G__41362.getElementById("answer"));
if((G__41362__$1 == null)){
return null;
} else {
return G__41362__$1.value = "";
}
}
});

//# sourceMappingURL=control.js.map?rel=1518815963358
