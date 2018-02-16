// Compiled by ClojureScript 1.9.908 {}
goog.provide('mpje_prep.core');
goog.require('cljs.core');
goog.require('sablono.core');
goog.require('mpje_prep.components');
mpje_prep.core.app_state = cljs.core.atom.call(null,new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"question","question",-1411720117),null], null));
mpje_prep.core.render_BANG_ = (function mpje_prep$core$render_BANG_(){
return ReactDOM.render(mpje_prep.components.mpje_prep.call(null,mpje_prep.core.app_state),document.getElementById("app"));
});
cljs.core.add_watch.call(null,mpje_prep.core.app_state,new cljs.core.Keyword(null,"on-change","on-change",-732046149),(function (_,___$1,___$2,___$3){
return mpje_prep.core.render_BANG_.call(null);
}));
mpje_prep.core.render_BANG_.call(null);

//# sourceMappingURL=core.js.map?rel=1515302482682
