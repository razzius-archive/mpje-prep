// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async.impl.channels');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.buffers');
cljs.core.async.impl.channels.box = (function cljs$core$async$impl$channels$box(val){
if(typeof cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IDeref}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520 = (function (val,meta32521){
this.val = val;
this.meta32521 = meta32521;
this.cljs$lang$protocol_mask$partition0$ = 425984;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_32522,meta32521__$1){
var self__ = this;
var _32522__$1 = this;
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520(self__.val,meta32521__$1));
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_32522){
var self__ = this;
var _32522__$1 = this;
return self__.meta32521;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520.prototype.cljs$core$IDeref$_deref$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.val;
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"val","val",1769233139,null),new cljs.core.Symbol(null,"meta32521","meta32521",1082877920,null)], null);
});

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520.cljs$lang$type = true;

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520.cljs$lang$ctorStr = "cljs.core.async.impl.channels/t_cljs$core$async$impl$channels32520";

cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async.impl.channels/t_cljs$core$async$impl$channels32520");
});

cljs.core.async.impl.channels.__GT_t_cljs$core$async$impl$channels32520 = (function cljs$core$async$impl$channels$box_$___GT_t_cljs$core$async$impl$channels32520(val__$1,meta32521){
return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520(val__$1,meta32521));
});

}

return (new cljs.core.async.impl.channels.t_cljs$core$async$impl$channels32520(val,cljs.core.PersistentArrayMap.EMPTY));
});

/**
* @constructor
*/
cljs.core.async.impl.channels.PutBox = (function (handler,val){
this.handler = handler;
this.val = val;
});

cljs.core.async.impl.channels.PutBox.getBasis = (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"handler","handler",1444934915,null),new cljs.core.Symbol(null,"val","val",1769233139,null)], null);
});

cljs.core.async.impl.channels.PutBox.cljs$lang$type = true;

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorStr = "cljs.core.async.impl.channels/PutBox";

cljs.core.async.impl.channels.PutBox.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async.impl.channels/PutBox");
});

cljs.core.async.impl.channels.__GT_PutBox = (function cljs$core$async$impl$channels$__GT_PutBox(handler,val){
return (new cljs.core.async.impl.channels.PutBox(handler,val));
});

cljs.core.async.impl.channels.put_active_QMARK_ = (function cljs$core$async$impl$channels$put_active_QMARK_(box){
return cljs.core.async.impl.protocols.active_QMARK_.call(null,box.handler);
});
cljs.core.async.impl.channels.MAX_DIRTY = (64);

/**
 * @interface
 */
cljs.core.async.impl.channels.MMC = function(){};

cljs.core.async.impl.channels.abort = (function cljs$core$async$impl$channels$abort(this$){
if((!((this$ == null))) && (!((this$.cljs$core$async$impl$channels$MMC$abort$arity$1 == null)))){
return this$.cljs$core$async$impl$channels$MMC$abort$arity$1(this$);
} else {
var x__30756__auto__ = (((this$ == null))?null:this$);
var m__30757__auto__ = (cljs.core.async.impl.channels.abort[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,this$);
} else {
var m__30757__auto____$1 = (cljs.core.async.impl.channels.abort["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,this$);
} else {
throw cljs.core.missing_protocol.call(null,"MMC.abort",this$);
}
}
}
});


/**
* @constructor
 * @implements {cljs.core.async.impl.channels.MMC}
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
*/
cljs.core.async.impl.channels.ManyToManyChannel = (function (takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
this.takes = takes;
this.dirty_takes = dirty_takes;
this.puts = puts;
this.dirty_puts = dirty_puts;
this.buf = buf;
this.closed = closed;
this.add_BANG_ = add_BANG_;
});
cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$channels$MMC$abort$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
while(true){
var putter_32534 = self__.puts.pop();
if((putter_32534 == null)){
} else {
var put_handler_32535 = putter_32534.handler;
var val_32536 = putter_32534.val;
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler_32535)){
var put_cb_32537 = cljs.core.async.impl.protocols.commit.call(null,put_handler_32535);
cljs.core.async.impl.dispatch.run.call(null,((function (put_cb_32537,put_handler_32535,val_32536,putter_32534,this$__$1){
return (function (){
return put_cb_32537.call(null,true);
});})(put_cb_32537,put_handler_32535,val_32536,putter_32534,this$__$1))
);
} else {
continue;
}
}
break;
}

self__.puts.cleanup(cljs.core.constantly.call(null,false));

return cljs.core.async.impl.protocols.close_BANG_.call(null,this$__$1);
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (this$,val,handler){
var self__ = this;
var this$__$1 = this;
if(!((val == null))){
} else {
throw (new Error(["Assert failed: ","Can't put nil in on a channel","\n","(not (nil? val))"].join('')));
}

var closed__$1 = self__.closed;
if((closed__$1) || (!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler)))){
return cljs.core.async.impl.channels.box.call(null,!(closed__$1));
} else {
if(cljs.core.truth_((function (){var and__30011__auto__ = self__.buf;
if(cljs.core.truth_(and__30011__auto__)){
return cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf));
} else {
return and__30011__auto__;
}
})())){
cljs.core.async.impl.protocols.commit.call(null,handler);

var done_QMARK_ = cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val));
var take_cbs = (function (){var takers = cljs.core.PersistentVector.EMPTY;
while(true){
if(((self__.takes.length > (0))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var taker = self__.takes.pop();
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker)){
var ret = cljs.core.async.impl.protocols.commit.call(null,taker);
var val__$1 = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var G__32538 = cljs.core.conj.call(null,takers,((function (takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1){
return (function (){
return ret.call(null,val__$1);
});})(takers,ret,val__$1,taker,done_QMARK_,closed__$1,this$__$1))
);
takers = G__32538;
continue;
} else {
var G__32539 = takers;
takers = G__32539;
continue;
}
} else {
return takers;
}
break;
}
})();
if(done_QMARK_){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

if(cljs.core.seq.call(null,take_cbs)){
var seq__32523_32540 = cljs.core.seq.call(null,take_cbs);
var chunk__32524_32541 = null;
var count__32525_32542 = (0);
var i__32526_32543 = (0);
while(true){
if((i__32526_32543 < count__32525_32542)){
var f_32544 = cljs.core._nth.call(null,chunk__32524_32541,i__32526_32543);
cljs.core.async.impl.dispatch.run.call(null,f_32544);

var G__32545 = seq__32523_32540;
var G__32546 = chunk__32524_32541;
var G__32547 = count__32525_32542;
var G__32548 = (i__32526_32543 + (1));
seq__32523_32540 = G__32545;
chunk__32524_32541 = G__32546;
count__32525_32542 = G__32547;
i__32526_32543 = G__32548;
continue;
} else {
var temp__5457__auto___32549 = cljs.core.seq.call(null,seq__32523_32540);
if(temp__5457__auto___32549){
var seq__32523_32550__$1 = temp__5457__auto___32549;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32523_32550__$1)){
var c__30954__auto___32551 = cljs.core.chunk_first.call(null,seq__32523_32550__$1);
var G__32552 = cljs.core.chunk_rest.call(null,seq__32523_32550__$1);
var G__32553 = c__30954__auto___32551;
var G__32554 = cljs.core.count.call(null,c__30954__auto___32551);
var G__32555 = (0);
seq__32523_32540 = G__32552;
chunk__32524_32541 = G__32553;
count__32525_32542 = G__32554;
i__32526_32543 = G__32555;
continue;
} else {
var f_32556 = cljs.core.first.call(null,seq__32523_32550__$1);
cljs.core.async.impl.dispatch.run.call(null,f_32556);

var G__32557 = cljs.core.next.call(null,seq__32523_32550__$1);
var G__32558 = null;
var G__32559 = (0);
var G__32560 = (0);
seq__32523_32540 = G__32557;
chunk__32524_32541 = G__32558;
count__32525_32542 = G__32559;
i__32526_32543 = G__32560;
continue;
}
} else {
}
}
break;
}
} else {
}

return cljs.core.async.impl.channels.box.call(null,true);
} else {
var taker = (function (){while(true){
var taker = self__.takes.pop();
if(cljs.core.truth_(taker)){
if(cljs.core.truth_(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker))){
return taker;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(taker)){
var take_cb = cljs.core.async.impl.protocols.commit.call(null,taker);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (take_cb,taker,closed__$1,this$__$1){
return (function (){
return take_cb.call(null,val);
});})(take_cb,taker,closed__$1,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,true);
} else {
if((self__.dirty_puts > (64))){
self__.dirty_puts = (0);

self__.puts.cleanup(cljs.core.async.impl.channels.put_active_QMARK_);
} else {
self__.dirty_puts = (self__.dirty_puts + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.puts.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending puts are allowed on a single channel."," Consider using a windowed buffer."].join('')),"\n","(< (.-length puts) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.puts.unbounded_unshift((new cljs.core.async.impl.channels.PutBox(handler,val)));
} else {
}

return null;
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (this$,handler){
var self__ = this;
var this$__$1 = this;
if(!(cljs.core.async.impl.protocols.active_QMARK_.call(null,handler))){
return null;
} else {
if((!((self__.buf == null))) && ((cljs.core.count.call(null,self__.buf) > (0)))){
var temp__5455__auto__ = cljs.core.async.impl.protocols.commit.call(null,handler);
if(cljs.core.truth_(temp__5455__auto__)){
var take_cb = temp__5455__auto__;
var val = cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf);
var vec__32527 = (((self__.puts.length > (0)))?(function (){var cbs = cljs.core.PersistentVector.EMPTY;
while(true){
var putter = self__.puts.pop();
var put_handler = putter.handler;
var val__$1 = putter.val;
var cb = (function (){var and__30011__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,put_handler);
if(and__30011__auto__){
return cljs.core.async.impl.protocols.commit.call(null,put_handler);
} else {
return and__30011__auto__;
}
})();
var cbs__$1 = (cljs.core.truth_(cb)?cljs.core.conj.call(null,cbs,cb):cbs);
var done_QMARK_ = (cljs.core.truth_(cb)?cljs.core.reduced_QMARK_.call(null,self__.add_BANG_.call(null,self__.buf,val__$1)):null);
if((cljs.core.not.call(null,done_QMARK_)) && (cljs.core.not.call(null,cljs.core.async.impl.protocols.full_QMARK_.call(null,self__.buf))) && ((self__.puts.length > (0)))){
var G__32561 = cbs__$1;
cbs = G__32561;
continue;
} else {
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [done_QMARK_,cbs__$1], null);
}
break;
}
})():null);
var done_QMARK_ = cljs.core.nth.call(null,vec__32527,(0),null);
var cbs = cljs.core.nth.call(null,vec__32527,(1),null);
if(cljs.core.truth_(done_QMARK_)){
cljs.core.async.impl.channels.abort.call(null,this$__$1);
} else {
}

var seq__32530_32562 = cljs.core.seq.call(null,cbs);
var chunk__32531_32563 = null;
var count__32532_32564 = (0);
var i__32533_32565 = (0);
while(true){
if((i__32533_32565 < count__32532_32564)){
var cb_32566 = cljs.core._nth.call(null,chunk__32531_32563,i__32533_32565);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__32530_32562,chunk__32531_32563,count__32532_32564,i__32533_32565,cb_32566,val,vec__32527,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_32566.call(null,true);
});})(seq__32530_32562,chunk__32531_32563,count__32532_32564,i__32533_32565,cb_32566,val,vec__32527,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__32567 = seq__32530_32562;
var G__32568 = chunk__32531_32563;
var G__32569 = count__32532_32564;
var G__32570 = (i__32533_32565 + (1));
seq__32530_32562 = G__32567;
chunk__32531_32563 = G__32568;
count__32532_32564 = G__32569;
i__32533_32565 = G__32570;
continue;
} else {
var temp__5457__auto___32571 = cljs.core.seq.call(null,seq__32530_32562);
if(temp__5457__auto___32571){
var seq__32530_32572__$1 = temp__5457__auto___32571;
if(cljs.core.chunked_seq_QMARK_.call(null,seq__32530_32572__$1)){
var c__30954__auto___32573 = cljs.core.chunk_first.call(null,seq__32530_32572__$1);
var G__32574 = cljs.core.chunk_rest.call(null,seq__32530_32572__$1);
var G__32575 = c__30954__auto___32573;
var G__32576 = cljs.core.count.call(null,c__30954__auto___32573);
var G__32577 = (0);
seq__32530_32562 = G__32574;
chunk__32531_32563 = G__32575;
count__32532_32564 = G__32576;
i__32533_32565 = G__32577;
continue;
} else {
var cb_32578 = cljs.core.first.call(null,seq__32530_32572__$1);
cljs.core.async.impl.dispatch.run.call(null,((function (seq__32530_32562,chunk__32531_32563,count__32532_32564,i__32533_32565,cb_32578,seq__32530_32572__$1,temp__5457__auto___32571,val,vec__32527,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1){
return (function (){
return cb_32578.call(null,true);
});})(seq__32530_32562,chunk__32531_32563,count__32532_32564,i__32533_32565,cb_32578,seq__32530_32572__$1,temp__5457__auto___32571,val,vec__32527,done_QMARK_,cbs,take_cb,temp__5455__auto__,this$__$1))
);

var G__32579 = cljs.core.next.call(null,seq__32530_32572__$1);
var G__32580 = null;
var G__32581 = (0);
var G__32582 = (0);
seq__32530_32562 = G__32579;
chunk__32531_32563 = G__32580;
count__32532_32564 = G__32581;
i__32533_32565 = G__32582;
continue;
}
} else {
}
}
break;
}

return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
var putter = (function (){while(true){
var putter = self__.puts.pop();
if(cljs.core.truth_(putter)){
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,putter.handler)){
return putter;
} else {
continue;
}
} else {
return null;
}
break;
}
})();
if(cljs.core.truth_(putter)){
var put_cb = cljs.core.async.impl.protocols.commit.call(null,putter.handler);
cljs.core.async.impl.protocols.commit.call(null,handler);

cljs.core.async.impl.dispatch.run.call(null,((function (put_cb,putter,this$__$1){
return (function (){
return put_cb.call(null,true);
});})(put_cb,putter,this$__$1))
);

return cljs.core.async.impl.channels.box.call(null,putter.val);
} else {
if(cljs.core.truth_(self__.closed)){
if(cljs.core.truth_(self__.buf)){
self__.add_BANG_.call(null,self__.buf);
} else {
}

if(cljs.core.truth_((function (){var and__30011__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,handler);
if(cljs.core.truth_(and__30011__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,handler);
} else {
return and__30011__auto__;
}
})())){
var has_val = (function (){var and__30011__auto__ = self__.buf;
if(cljs.core.truth_(and__30011__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__30011__auto__;
}
})();
var val = (cljs.core.truth_(has_val)?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
return cljs.core.async.impl.channels.box.call(null,val);
} else {
return null;
}
} else {
if((self__.dirty_takes > (64))){
self__.dirty_takes = (0);

self__.takes.cleanup(cljs.core.async.impl.protocols.active_QMARK_);
} else {
self__.dirty_takes = (self__.dirty_takes + (1));
}

if(cljs.core.truth_(cljs.core.async.impl.protocols.blockable_QMARK_.call(null,handler))){
if((self__.takes.length < (1024))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["No more than ",cljs.core.str.cljs$core$IFn$_invoke$arity$1((1024))," pending takes are allowed on a single channel."].join('')),"\n","(< (.-length takes) impl/MAX-QUEUE-SIZE)"].join('')));
}

self__.takes.unbounded_unshift(handler);
} else {
}

return null;
}
}
}
}
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.closed;
});

cljs.core.async.impl.channels.ManyToManyChannel.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (this$){
var self__ = this;
var this$__$1 = this;
if(self__.closed){
return null;
} else {
self__.closed = true;

if(cljs.core.truth_((function (){var and__30011__auto__ = self__.buf;
if(cljs.core.truth_(and__30011__auto__)){
return (self__.puts.length === (0));
} else {
return and__30011__auto__;
}
})())){
self__.add_BANG_.call(null,self__.buf);
} else {
}

while(true){
var taker_32583 = self__.takes.pop();
if((taker_32583 == null)){
} else {
if(cljs.core.async.impl.protocols.active_QMARK_.call(null,taker_32583)){
var take_cb_32584 = cljs.core.async.impl.protocols.commit.call(null,taker_32583);
var val_32585 = (cljs.core.truth_((function (){var and__30011__auto__ = self__.buf;
if(cljs.core.truth_(and__30011__auto__)){
return (cljs.core.count.call(null,self__.buf) > (0));
} else {
return and__30011__auto__;
}
})())?cljs.core.async.impl.protocols.remove_BANG_.call(null,self__.buf):null);
cljs.core.async.impl.dispatch.run.call(null,((function (take_cb_32584,val_32585,taker_32583,this$__$1){
return (function (){
return take_cb_32584.call(null,val_32585);
});})(take_cb_32584,val_32585,taker_32583,this$__$1))
);
} else {
}

continue;
}
break;
}

if(cljs.core.truth_(self__.buf)){
cljs.core.async.impl.protocols.close_buf_BANG_.call(null,self__.buf);
} else {
}

return null;
}
});

cljs.core.async.impl.channels.ManyToManyChannel.getBasis = (function (){
return new cljs.core.PersistentVector(null, 7, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"takes","takes",298247964,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-takes","dirty-takes",575642138,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"puts","puts",-1883877054,null),cljs.core.with_meta(new cljs.core.Symbol(null,"dirty-puts","dirty-puts",57041148,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"buf","buf",1426618187,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol(null,"not-native","not-native",-236392494,null)], null)),cljs.core.with_meta(new cljs.core.Symbol(null,"closed","closed",720856168,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"mutable","mutable",875778266),true], null)),new cljs.core.Symbol(null,"add!","add!",2046056845,null)], null);
});

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$type = true;

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorStr = "cljs.core.async.impl.channels/ManyToManyChannel";

cljs.core.async.impl.channels.ManyToManyChannel.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async.impl.channels/ManyToManyChannel");
});

cljs.core.async.impl.channels.__GT_ManyToManyChannel = (function cljs$core$async$impl$channels$__GT_ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_){
return (new cljs.core.async.impl.channels.ManyToManyChannel(takes,dirty_takes,puts,dirty_puts,buf,closed,add_BANG_));
});

cljs.core.async.impl.channels.ex_handler = (function cljs$core$async$impl$channels$ex_handler(ex){
console.log(ex);

return null;
});
cljs.core.async.impl.channels.handle = (function cljs$core$async$impl$channels$handle(buf,exh,t){
var else$ = (function (){var or__30023__auto__ = exh;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return cljs.core.async.impl.channels.ex_handler;
}
})().call(null,t);
if((else$ == null)){
return buf;
} else {
return cljs.core.async.impl.protocols.add_BANG_.call(null,buf,else$);
}
});
cljs.core.async.impl.channels.chan = (function cljs$core$async$impl$channels$chan(var_args){
var G__32587 = arguments.length;
switch (G__32587) {
case 1:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf){
return cljs.core.async.impl.channels.chan.call(null,buf,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf,xform){
return cljs.core.async.impl.channels.chan.call(null,buf,xform,null);
});

cljs.core.async.impl.channels.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf,xform,exh){
return (new cljs.core.async.impl.channels.ManyToManyChannel(cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),cljs.core.async.impl.buffers.ring_buffer.call(null,(32)),(0),buf,false,(function (){var add_BANG_ = (cljs.core.truth_(xform)?xform.call(null,cljs.core.async.impl.protocols.add_BANG_):cljs.core.async.impl.protocols.add_BANG_);
return ((function (add_BANG_){
return (function() {
var G__32591 = null;
var G__32591__1 = (function (buf__$1){
try{return add_BANG_.call(null,buf__$1);
}catch (e32588){var t = e32588;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
var G__32591__2 = (function (buf__$1,val){
try{return add_BANG_.call(null,buf__$1,val);
}catch (e32589){var t = e32589;
return cljs.core.async.impl.channels.handle.call(null,buf__$1,exh,t);
}});
G__32591 = function(buf__$1,val){
switch(arguments.length){
case 1:
return G__32591__1.call(this,buf__$1);
case 2:
return G__32591__2.call(this,buf__$1,val);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
G__32591.cljs$core$IFn$_invoke$arity$1 = G__32591__1;
G__32591.cljs$core$IFn$_invoke$arity$2 = G__32591__2;
return G__32591;
})()
;})(add_BANG_))
})()));
});

cljs.core.async.impl.channels.chan.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=channels.js.map?rel=1515300955917
