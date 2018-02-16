// Compiled by ClojureScript 1.9.908 {}
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
cljs.core.async.fn_handler = (function cljs$core$async$fn_handler(var_args){
var G__34291 = arguments.length;
switch (G__34291) {
case 1:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$1 = (function (f){
return cljs.core.async.fn_handler.call(null,f,true);
});

cljs.core.async.fn_handler.cljs$core$IFn$_invoke$arity$2 = (function (f,blockable){
if(typeof cljs.core.async.t_cljs$core$async34292 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34292 = (function (f,blockable,meta34293){
this.f = f;
this.blockable = blockable;
this.meta34293 = meta34293;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34294,meta34293__$1){
var self__ = this;
var _34294__$1 = this;
return (new cljs.core.async.t_cljs$core$async34292(self__.f,self__.blockable,meta34293__$1));
});

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34294){
var self__ = this;
var _34294__$1 = this;
return self__.meta34293;
});

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async34292.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async34292.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta34293","meta34293",-23757907,null)], null);
});

cljs.core.async.t_cljs$core$async34292.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34292.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34292";

cljs.core.async.t_cljs$core$async34292.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34292");
});

cljs.core.async.__GT_t_cljs$core$async34292 = (function cljs$core$async$__GT_t_cljs$core$async34292(f__$1,blockable__$1,meta34293){
return (new cljs.core.async.t_cljs$core$async34292(f__$1,blockable__$1,meta34293));
});

}

return (new cljs.core.async.t_cljs$core$async34292(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
});

cljs.core.async.fn_handler.cljs$lang$maxFixedArity = 2;

/**
 * Returns a fixed buffer of size n. When full, puts will block/park.
 */
cljs.core.async.buffer = (function cljs$core$async$buffer(n){
return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete but
 *   val will be dropped (no transfer).
 */
cljs.core.async.dropping_buffer = (function cljs$core$async$dropping_buffer(n){
return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
 * Returns a buffer of size n. When full, puts will complete, and be
 *   buffered, but oldest elements in buffer will be dropped (not
 *   transferred).
 */
cljs.core.async.sliding_buffer = (function cljs$core$async$sliding_buffer(n){
return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
 * Returns true if a channel created with buff will never block. That is to say,
 * puts into this buffer will never cause the buffer to be full. 
 */
cljs.core.async.unblocking_buffer_QMARK_ = (function cljs$core$async$unblocking_buffer_QMARK_(buff){
if(!((buff == null))){
if((false) || ((cljs.core.PROTOCOL_SENTINEL === buff.cljs$core$async$impl$protocols$UnblockingBuffer$))){
return true;
} else {
if((!buff.cljs$lang$protocol_mask$partition$)){
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
} else {
return false;
}
}
} else {
return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,buff);
}
});
/**
 * Creates a channel with an optional buffer, an optional transducer (like (map f),
 *   (filter p) etc or a composition thereof), and an optional exception handler.
 *   If buf-or-n is a number, will create and use a fixed buffer of that size. If a
 *   transducer is supplied a buffer must be specified. ex-handler must be a
 *   fn of one argument - if an exception occurs during transformation it will be called
 *   with the thrown value as an argument, and any non-nil return value will be placed
 *   in the channel.
 */
cljs.core.async.chan = (function cljs$core$async$chan(var_args){
var G__34298 = arguments.length;
switch (G__34298) {
case 0:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.chan.call(null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$1 = (function (buf_or_n){
return cljs.core.async.chan.call(null,buf_or_n,null,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$2 = (function (buf_or_n,xform){
return cljs.core.async.chan.call(null,buf_or_n,xform,null);
});

cljs.core.async.chan.cljs$core$IFn$_invoke$arity$3 = (function (buf_or_n,xform,ex_handler){
var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);
if(cljs.core.truth_(xform)){
if(cljs.core.truth_(buf_or_n__$1)){
} else {
throw (new Error(["Assert failed: ","buffer must be supplied when transducer is","\n","buf-or-n"].join('')));
}
} else {
}

return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1),xform,ex_handler);
});

cljs.core.async.chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates a promise channel with an optional transducer, and an optional
 *   exception-handler. A promise channel can take exactly one value that consumers
 *   will receive. Once full, puts complete but val is dropped (no transfer).
 *   Consumers will block until either a value is placed in the channel or the
 *   channel is closed. See chan for the semantics of xform and ex-handler.
 */
cljs.core.async.promise_chan = (function cljs$core$async$promise_chan(var_args){
var G__34301 = arguments.length;
switch (G__34301) {
case 0:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0();

break;
case 1:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$0 = (function (){
return cljs.core.async.promise_chan.call(null,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$1 = (function (xform){
return cljs.core.async.promise_chan.call(null,xform,null);
});

cljs.core.async.promise_chan.cljs$core$IFn$_invoke$arity$2 = (function (xform,ex_handler){
return cljs.core.async.chan.call(null,cljs.core.async.impl.buffers.promise_buffer.call(null),xform,ex_handler);
});

cljs.core.async.promise_chan.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel that will close after msecs
 */
cljs.core.async.timeout = (function cljs$core$async$timeout(msecs){
return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
 * takes a val from port. Must be called inside a (go ...) block. Will
 *   return nil if closed. Will park if nothing is available.
 *   Returns true unless port is already closed
 */
cljs.core.async._LT__BANG_ = (function cljs$core$async$_LT__BANG_(port){
throw (new Error("<! used not in (go ...) block"));
});
/**
 * Asynchronously takes a val from port, passing to fn1. Will pass nil
 * if closed. If on-caller? (default true) is true, and value is
 * immediately available, will call fn1 on calling thread.
 * Returns nil.
 */
cljs.core.async.take_BANG_ = (function cljs$core$async$take_BANG_(var_args){
var G__34304 = arguments.length;
switch (G__34304) {
case 2:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,fn1){
return cljs.core.async.take_BANG_.call(null,port,fn1,true);
});

cljs.core.async.take_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,fn1,on_caller_QMARK_){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(ret)){
var val_34306 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_34306);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_34306,ret){
return (function (){
return fn1.call(null,val_34306);
});})(val_34306,ret))
);
}
} else {
}

return null;
});

cljs.core.async.take_BANG_.cljs$lang$maxFixedArity = 3;

cljs.core.async.nop = (function cljs$core$async$nop(_){
return null;
});
cljs.core.async.fhnop = cljs.core.async.fn_handler.call(null,cljs.core.async.nop);
/**
 * puts a val into port. nil values are not allowed. Must be called
 *   inside a (go ...) block. Will park if no buffer space is available.
 *   Returns true unless port is already closed.
 */
cljs.core.async._GT__BANG_ = (function cljs$core$async$_GT__BANG_(port,val){
throw (new Error(">! used not in (go ...) block"));
});
/**
 * Asynchronously puts a val into port, calling fn0 (if supplied) when
 * complete. nil values are not allowed. Will throw if closed. If
 * on-caller? (default true) is true, and the put is immediately
 * accepted, will call fn0 on calling thread.  Returns nil.
 */
cljs.core.async.put_BANG_ = (function cljs$core$async$put_BANG_(var_args){
var G__34308 = arguments.length;
switch (G__34308) {
case 2:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$2 = (function (port,val){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fhnop);
if(cljs.core.truth_(temp__5455__auto__)){
var ret = temp__5455__auto__;
return cljs.core.deref.call(null,ret);
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$3 = (function (port,val,fn1){
return cljs.core.async.put_BANG_.call(null,port,val,fn1,true);
});

cljs.core.async.put_BANG_.cljs$core$IFn$_invoke$arity$4 = (function (port,val,fn1,on_caller_QMARK_){
var temp__5455__auto__ = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn1));
if(cljs.core.truth_(temp__5455__auto__)){
var retb = temp__5455__auto__;
var ret = cljs.core.deref.call(null,retb);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,ret);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (ret,retb,temp__5455__auto__){
return (function (){
return fn1.call(null,ret);
});})(ret,retb,temp__5455__auto__))
);
}

return ret;
} else {
return true;
}
});

cljs.core.async.put_BANG_.cljs$lang$maxFixedArity = 4;

cljs.core.async.close_BANG_ = (function cljs$core$async$close_BANG_(port){
return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function cljs$core$async$random_array(n){
var a = (new Array(n));
var n__31066__auto___34310 = n;
var x_34311 = (0);
while(true){
if((x_34311 < n__31066__auto___34310)){
(a[x_34311] = (0));

var G__34312 = (x_34311 + (1));
x_34311 = G__34312;
continue;
} else {
}
break;
}

var i = (1);
while(true){
if(cljs.core._EQ_.call(null,i,n)){
return a;
} else {
var j = cljs.core.rand_int.call(null,i);
(a[i] = (a[j]));

(a[j] = i);

var G__34313 = (i + (1));
i = G__34313;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async34314 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34314 = (function (flag,meta34315){
this.flag = flag;
this.meta34315 = meta34315;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34314.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_34316,meta34315__$1){
var self__ = this;
var _34316__$1 = this;
return (new cljs.core.async.t_cljs$core$async34314(self__.flag,meta34315__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async34314.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_34316){
var self__ = this;
var _34316__$1 = this;
return self__.meta34315;
});})(flag))
;

cljs.core.async.t_cljs$core$async34314.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34314.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async34314.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34314.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async34314.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta34315","meta34315",1612176022,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async34314.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34314.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34314";

cljs.core.async.t_cljs$core$async34314.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34314");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async34314 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async34314(flag__$1,meta34315){
return (new cljs.core.async.t_cljs$core$async34314(flag__$1,meta34315));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async34314(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async34317 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34317 = (function (flag,cb,meta34318){
this.flag = flag;
this.cb = cb;
this.meta34318 = meta34318;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34317.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34319,meta34318__$1){
var self__ = this;
var _34319__$1 = this;
return (new cljs.core.async.t_cljs$core$async34317(self__.flag,self__.cb,meta34318__$1));
});

cljs.core.async.t_cljs$core$async34317.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34319){
var self__ = this;
var _34319__$1 = this;
return self__.meta34318;
});

cljs.core.async.t_cljs$core$async34317.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34317.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async34317.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async34317.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async34317.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta34318","meta34318",-1616518009,null)], null);
});

cljs.core.async.t_cljs$core$async34317.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34317.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34317";

cljs.core.async.t_cljs$core$async34317.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34317");
});

cljs.core.async.__GT_t_cljs$core$async34317 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async34317(flag__$1,cb__$1,meta34318){
return (new cljs.core.async.t_cljs$core$async34317(flag__$1,cb__$1,meta34318));
});

}

return (new cljs.core.async.t_cljs$core$async34317(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * returns derefable [val port] if immediate, nil if enqueued
 */
cljs.core.async.do_alts = (function cljs$core$async$do_alts(fret,ports,opts){
var flag = cljs.core.async.alt_flag.call(null);
var n = cljs.core.count.call(null,ports);
var idxs = cljs.core.async.random_array.call(null,n);
var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);
var ret = (function (){var i = (0);
while(true){
if((i < n)){
var idx = (cljs.core.truth_(priority)?i:(idxs[i]));
var port = cljs.core.nth.call(null,ports,idx);
var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);
var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));
return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34320_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34320_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__34321_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__34321_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));
if(cljs.core.truth_(vbox)){
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__30023__auto__ = wport;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return port;
}
})()], null));
} else {
var G__34322 = (i + (1));
i = G__34322;
continue;
}
} else {
return null;
}
break;
}
})();
var or__30023__auto__ = ret;
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328))){
var temp__5457__auto__ = (function (){var and__30011__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);
if(cljs.core.truth_(and__30011__auto__)){
return cljs.core.async.impl.protocols.commit.call(null,flag);
} else {
return and__30011__auto__;
}
})();
if(cljs.core.truth_(temp__5457__auto__)){
var got = temp__5457__auto__;
return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else {
return null;
}
} else {
return null;
}
}
});
/**
 * Completes at most one of several channel operations. Must be called
 * inside a (go ...) block. ports is a vector of channel endpoints,
 * which can be either a channel to take from or a vector of
 *   [channel-to-put-to val-to-put], in any combination. Takes will be
 *   made as if by <!, and puts will be made as if by >!. Unless
 *   the :priority option is true, if more than one port operation is
 *   ready a non-deterministic choice will be made. If no operation is
 *   ready and a :default value is supplied, [default-val :default] will
 *   be returned, otherwise alts! will park until the first operation to
 *   become ready completes. Returns [val port] of the completed
 *   operation, where val is the value taken for takes, and a
 *   boolean (true unless already closed, as per put!) for puts.
 * 
 *   opts are passed as :key val ... Supported options:
 * 
 *   :default val - the value to use if none of the operations are immediately ready
 *   :priority true - (default nil) when true, the operations will be tried in order.
 * 
 *   Note: there is no guarantee that the port exps or val exprs will be
 *   used, nor in what order should they be, so they should not be
 *   depended upon for side effects.
 */
cljs.core.async.alts_BANG_ = (function cljs$core$async$alts_BANG_(var_args){
var args__31307__auto__ = [];
var len__31300__auto___34328 = arguments.length;
var i__31301__auto___34329 = (0);
while(true){
if((i__31301__auto___34329 < len__31300__auto___34328)){
args__31307__auto__.push((arguments[i__31301__auto___34329]));

var G__34330 = (i__31301__auto___34329 + (1));
i__31301__auto___34329 = G__34330;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((1) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31308__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__34325){
var map__34326 = p__34325;
var map__34326__$1 = ((((!((map__34326 == null)))?((((map__34326.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__34326.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__34326):map__34326);
var opts = map__34326__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq34323){
var G__34324 = cljs.core.first.call(null,seq34323);
var seq34323__$1 = cljs.core.next.call(null,seq34323);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__34324,seq34323__$1);
});

/**
 * Puts a val into port if it's possible to do so immediately.
 *   nil values are not allowed. Never blocks. Returns true if offer succeeds.
 */
cljs.core.async.offer_BANG_ = (function cljs$core$async$offer_BANG_(port,val){
var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes a val from port if it's possible to do so immediately.
 *   Never blocks. Returns value if successful, nil otherwise.
 */
cljs.core.async.poll_BANG_ = (function cljs$core$async$poll_BANG_(port){
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,cljs.core.async.nop,false));
if(cljs.core.truth_(ret)){
return cljs.core.deref.call(null,ret);
} else {
return null;
}
});
/**
 * Takes elements from the from channel and supplies them to the to
 * channel. By default, the to channel will be closed when the from
 * channel closes, but can be determined by the close?  parameter. Will
 * stop consuming the from channel if the to channel closes
 */
cljs.core.async.pipe = (function cljs$core$async$pipe(var_args){
var G__34332 = arguments.length;
switch (G__34332) {
case 2:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$2 = (function (from,to){
return cljs.core.async.pipe.call(null,from,to,true);
});

cljs.core.async.pipe.cljs$core$IFn$_invoke$arity$3 = (function (from,to,close_QMARK_){
var c__34231__auto___34378 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___34378){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___34378){
return (function (state_34356){
var state_val_34357 = (state_34356[(1)]);
if((state_val_34357 === (7))){
var inst_34352 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34358_34379 = state_34356__$1;
(statearr_34358_34379[(2)] = inst_34352);

(statearr_34358_34379[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (1))){
var state_34356__$1 = state_34356;
var statearr_34359_34380 = state_34356__$1;
(statearr_34359_34380[(2)] = null);

(statearr_34359_34380[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (4))){
var inst_34335 = (state_34356[(7)]);
var inst_34335__$1 = (state_34356[(2)]);
var inst_34336 = (inst_34335__$1 == null);
var state_34356__$1 = (function (){var statearr_34360 = state_34356;
(statearr_34360[(7)] = inst_34335__$1);

return statearr_34360;
})();
if(cljs.core.truth_(inst_34336)){
var statearr_34361_34381 = state_34356__$1;
(statearr_34361_34381[(1)] = (5));

} else {
var statearr_34362_34382 = state_34356__$1;
(statearr_34362_34382[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (13))){
var state_34356__$1 = state_34356;
var statearr_34363_34383 = state_34356__$1;
(statearr_34363_34383[(2)] = null);

(statearr_34363_34383[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (6))){
var inst_34335 = (state_34356[(7)]);
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34356__$1,(11),to,inst_34335);
} else {
if((state_val_34357 === (3))){
var inst_34354 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34356__$1,inst_34354);
} else {
if((state_val_34357 === (12))){
var state_34356__$1 = state_34356;
var statearr_34364_34384 = state_34356__$1;
(statearr_34364_34384[(2)] = null);

(statearr_34364_34384[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (2))){
var state_34356__$1 = state_34356;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34356__$1,(4),from);
} else {
if((state_val_34357 === (11))){
var inst_34345 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
if(cljs.core.truth_(inst_34345)){
var statearr_34365_34385 = state_34356__$1;
(statearr_34365_34385[(1)] = (12));

} else {
var statearr_34366_34386 = state_34356__$1;
(statearr_34366_34386[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (9))){
var state_34356__$1 = state_34356;
var statearr_34367_34387 = state_34356__$1;
(statearr_34367_34387[(2)] = null);

(statearr_34367_34387[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (5))){
var state_34356__$1 = state_34356;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34368_34388 = state_34356__$1;
(statearr_34368_34388[(1)] = (8));

} else {
var statearr_34369_34389 = state_34356__$1;
(statearr_34369_34389[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (14))){
var inst_34350 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34370_34390 = state_34356__$1;
(statearr_34370_34390[(2)] = inst_34350);

(statearr_34370_34390[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (10))){
var inst_34342 = (state_34356[(2)]);
var state_34356__$1 = state_34356;
var statearr_34371_34391 = state_34356__$1;
(statearr_34371_34391[(2)] = inst_34342);

(statearr_34371_34391[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34357 === (8))){
var inst_34339 = cljs.core.async.close_BANG_.call(null,to);
var state_34356__$1 = state_34356;
var statearr_34372_34392 = state_34356__$1;
(statearr_34372_34392[(2)] = inst_34339);

(statearr_34372_34392[(1)] = (10));


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
});})(c__34231__auto___34378))
;
return ((function (switch__34141__auto__,c__34231__auto___34378){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_34373 = [null,null,null,null,null,null,null,null];
(statearr_34373[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_34373[(1)] = (1));

return statearr_34373;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_34356){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34356);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34374){if((e34374 instanceof Object)){
var ex__34145__auto__ = e34374;
var statearr_34375_34393 = state_34356;
(statearr_34375_34393[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34356);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34374;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34394 = state_34356;
state_34356 = G__34394;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_34356){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_34356);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___34378))
})();
var state__34233__auto__ = (function (){var statearr_34376 = f__34232__auto__.call(null);
(statearr_34376[(6)] = c__34231__auto___34378);

return statearr_34376;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___34378))
);


return to;
});

cljs.core.async.pipe.cljs$lang$maxFixedArity = 3;

cljs.core.async.pipeline_STAR_ = (function cljs$core$async$pipeline_STAR_(n,to,xf,from,close_QMARK_,ex_handler,type){
if((n > (0))){
} else {
throw (new Error("Assert failed: (pos? n)"));
}

var jobs = cljs.core.async.chan.call(null,n);
var results = cljs.core.async.chan.call(null,n);
var process = ((function (jobs,results){
return (function (p__34395){
var vec__34396 = p__34395;
var v = cljs.core.nth.call(null,vec__34396,(0),null);
var p = cljs.core.nth.call(null,vec__34396,(1),null);
var job = vec__34396;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__34231__auto___34567 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___34567,res,vec__34396,v,p,job,jobs,results){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___34567,res,vec__34396,v,p,job,jobs,results){
return (function (state_34403){
var state_val_34404 = (state_34403[(1)]);
if((state_val_34404 === (1))){
var state_34403__$1 = state_34403;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34403__$1,(2),res,v);
} else {
if((state_val_34404 === (2))){
var inst_34400 = (state_34403[(2)]);
var inst_34401 = cljs.core.async.close_BANG_.call(null,res);
var state_34403__$1 = (function (){var statearr_34405 = state_34403;
(statearr_34405[(7)] = inst_34400);

return statearr_34405;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34403__$1,inst_34401);
} else {
return null;
}
}
});})(c__34231__auto___34567,res,vec__34396,v,p,job,jobs,results))
;
return ((function (switch__34141__auto__,c__34231__auto___34567,res,vec__34396,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0 = (function (){
var statearr_34406 = [null,null,null,null,null,null,null,null];
(statearr_34406[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__);

(statearr_34406[(1)] = (1));

return statearr_34406;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1 = (function (state_34403){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34403);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34407){if((e34407 instanceof Object)){
var ex__34145__auto__ = e34407;
var statearr_34408_34568 = state_34403;
(statearr_34408_34568[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34403);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34407;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34569 = state_34403;
state_34403 = G__34569;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = function(state_34403){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1.call(this,state_34403);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___34567,res,vec__34396,v,p,job,jobs,results))
})();
var state__34233__auto__ = (function (){var statearr_34409 = f__34232__auto__.call(null);
(statearr_34409[(6)] = c__34231__auto___34567);

return statearr_34409;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___34567,res,vec__34396,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__34410){
var vec__34411 = p__34410;
var v = cljs.core.nth.call(null,vec__34411,(0),null);
var p = cljs.core.nth.call(null,vec__34411,(1),null);
var job = vec__34411;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1));
xf.call(null,v,res);

cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results,process))
;
var n__31066__auto___34570 = n;
var __34571 = (0);
while(true){
if((__34571 < n__31066__auto___34570)){
var G__34414_34572 = type;
var G__34414_34573__$1 = (((G__34414_34572 instanceof cljs.core.Keyword))?G__34414_34572.fqn:null);
switch (G__34414_34573__$1) {
case "compute":
var c__34231__auto___34575 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34571,c__34231__auto___34575,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (__34571,c__34231__auto___34575,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async){
return (function (state_34427){
var state_val_34428 = (state_34427[(1)]);
if((state_val_34428 === (1))){
var state_34427__$1 = state_34427;
var statearr_34429_34576 = state_34427__$1;
(statearr_34429_34576[(2)] = null);

(statearr_34429_34576[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (2))){
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34427__$1,(4),jobs);
} else {
if((state_val_34428 === (3))){
var inst_34425 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34427__$1,inst_34425);
} else {
if((state_val_34428 === (4))){
var inst_34417 = (state_34427[(2)]);
var inst_34418 = process.call(null,inst_34417);
var state_34427__$1 = state_34427;
if(cljs.core.truth_(inst_34418)){
var statearr_34430_34577 = state_34427__$1;
(statearr_34430_34577[(1)] = (5));

} else {
var statearr_34431_34578 = state_34427__$1;
(statearr_34431_34578[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (5))){
var state_34427__$1 = state_34427;
var statearr_34432_34579 = state_34427__$1;
(statearr_34432_34579[(2)] = null);

(statearr_34432_34579[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (6))){
var state_34427__$1 = state_34427;
var statearr_34433_34580 = state_34427__$1;
(statearr_34433_34580[(2)] = null);

(statearr_34433_34580[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34428 === (7))){
var inst_34423 = (state_34427[(2)]);
var state_34427__$1 = state_34427;
var statearr_34434_34581 = state_34427__$1;
(statearr_34434_34581[(2)] = inst_34423);

(statearr_34434_34581[(1)] = (3));


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
});})(__34571,c__34231__auto___34575,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async))
;
return ((function (__34571,switch__34141__auto__,c__34231__auto___34575,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0 = (function (){
var statearr_34435 = [null,null,null,null,null,null,null];
(statearr_34435[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__);

(statearr_34435[(1)] = (1));

return statearr_34435;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1 = (function (state_34427){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34427);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34436){if((e34436 instanceof Object)){
var ex__34145__auto__ = e34436;
var statearr_34437_34582 = state_34427;
(statearr_34437_34582[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34427);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34436;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34583 = state_34427;
state_34427 = G__34583;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = function(state_34427){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1.call(this,state_34427);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__;
})()
;})(__34571,switch__34141__auto__,c__34231__auto___34575,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async))
})();
var state__34233__auto__ = (function (){var statearr_34438 = f__34232__auto__.call(null);
(statearr_34438[(6)] = c__34231__auto___34575);

return statearr_34438;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(__34571,c__34231__auto___34575,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async))
);


break;
case "async":
var c__34231__auto___34584 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__34571,c__34231__auto___34584,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (__34571,c__34231__auto___34584,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async){
return (function (state_34451){
var state_val_34452 = (state_34451[(1)]);
if((state_val_34452 === (1))){
var state_34451__$1 = state_34451;
var statearr_34453_34585 = state_34451__$1;
(statearr_34453_34585[(2)] = null);

(statearr_34453_34585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (2))){
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34451__$1,(4),jobs);
} else {
if((state_val_34452 === (3))){
var inst_34449 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34451__$1,inst_34449);
} else {
if((state_val_34452 === (4))){
var inst_34441 = (state_34451[(2)]);
var inst_34442 = async.call(null,inst_34441);
var state_34451__$1 = state_34451;
if(cljs.core.truth_(inst_34442)){
var statearr_34454_34586 = state_34451__$1;
(statearr_34454_34586[(1)] = (5));

} else {
var statearr_34455_34587 = state_34451__$1;
(statearr_34455_34587[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (5))){
var state_34451__$1 = state_34451;
var statearr_34456_34588 = state_34451__$1;
(statearr_34456_34588[(2)] = null);

(statearr_34456_34588[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (6))){
var state_34451__$1 = state_34451;
var statearr_34457_34589 = state_34451__$1;
(statearr_34457_34589[(2)] = null);

(statearr_34457_34589[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34452 === (7))){
var inst_34447 = (state_34451[(2)]);
var state_34451__$1 = state_34451;
var statearr_34458_34590 = state_34451__$1;
(statearr_34458_34590[(2)] = inst_34447);

(statearr_34458_34590[(1)] = (3));


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
});})(__34571,c__34231__auto___34584,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async))
;
return ((function (__34571,switch__34141__auto__,c__34231__auto___34584,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0 = (function (){
var statearr_34459 = [null,null,null,null,null,null,null];
(statearr_34459[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__);

(statearr_34459[(1)] = (1));

return statearr_34459;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1 = (function (state_34451){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34451);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34460){if((e34460 instanceof Object)){
var ex__34145__auto__ = e34460;
var statearr_34461_34591 = state_34451;
(statearr_34461_34591[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34451);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34460;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34592 = state_34451;
state_34451 = G__34592;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = function(state_34451){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1.call(this,state_34451);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__;
})()
;})(__34571,switch__34141__auto__,c__34231__auto___34584,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async))
})();
var state__34233__auto__ = (function (){var statearr_34462 = f__34232__auto__.call(null);
(statearr_34462[(6)] = c__34231__auto___34584);

return statearr_34462;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(__34571,c__34231__auto___34584,G__34414_34572,G__34414_34573__$1,n__31066__auto___34570,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__34414_34573__$1)].join('')));

}

var G__34593 = (__34571 + (1));
__34571 = G__34593;
continue;
} else {
}
break;
}

var c__34231__auto___34594 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___34594,jobs,results,process,async){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___34594,jobs,results,process,async){
return (function (state_34484){
var state_val_34485 = (state_34484[(1)]);
if((state_val_34485 === (1))){
var state_34484__$1 = state_34484;
var statearr_34486_34595 = state_34484__$1;
(statearr_34486_34595[(2)] = null);

(statearr_34486_34595[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (2))){
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34484__$1,(4),from);
} else {
if((state_val_34485 === (3))){
var inst_34482 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34484__$1,inst_34482);
} else {
if((state_val_34485 === (4))){
var inst_34465 = (state_34484[(7)]);
var inst_34465__$1 = (state_34484[(2)]);
var inst_34466 = (inst_34465__$1 == null);
var state_34484__$1 = (function (){var statearr_34487 = state_34484;
(statearr_34487[(7)] = inst_34465__$1);

return statearr_34487;
})();
if(cljs.core.truth_(inst_34466)){
var statearr_34488_34596 = state_34484__$1;
(statearr_34488_34596[(1)] = (5));

} else {
var statearr_34489_34597 = state_34484__$1;
(statearr_34489_34597[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (5))){
var inst_34468 = cljs.core.async.close_BANG_.call(null,jobs);
var state_34484__$1 = state_34484;
var statearr_34490_34598 = state_34484__$1;
(statearr_34490_34598[(2)] = inst_34468);

(statearr_34490_34598[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (6))){
var inst_34470 = (state_34484[(8)]);
var inst_34465 = (state_34484[(7)]);
var inst_34470__$1 = cljs.core.async.chan.call(null,(1));
var inst_34471 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_34472 = [inst_34465,inst_34470__$1];
var inst_34473 = (new cljs.core.PersistentVector(null,2,(5),inst_34471,inst_34472,null));
var state_34484__$1 = (function (){var statearr_34491 = state_34484;
(statearr_34491[(8)] = inst_34470__$1);

return statearr_34491;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34484__$1,(8),jobs,inst_34473);
} else {
if((state_val_34485 === (7))){
var inst_34480 = (state_34484[(2)]);
var state_34484__$1 = state_34484;
var statearr_34492_34599 = state_34484__$1;
(statearr_34492_34599[(2)] = inst_34480);

(statearr_34492_34599[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34485 === (8))){
var inst_34470 = (state_34484[(8)]);
var inst_34475 = (state_34484[(2)]);
var state_34484__$1 = (function (){var statearr_34493 = state_34484;
(statearr_34493[(9)] = inst_34475);

return statearr_34493;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34484__$1,(9),results,inst_34470);
} else {
if((state_val_34485 === (9))){
var inst_34477 = (state_34484[(2)]);
var state_34484__$1 = (function (){var statearr_34494 = state_34484;
(statearr_34494[(10)] = inst_34477);

return statearr_34494;
})();
var statearr_34495_34600 = state_34484__$1;
(statearr_34495_34600[(2)] = null);

(statearr_34495_34600[(1)] = (2));


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
});})(c__34231__auto___34594,jobs,results,process,async))
;
return ((function (switch__34141__auto__,c__34231__auto___34594,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0 = (function (){
var statearr_34496 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34496[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__);

(statearr_34496[(1)] = (1));

return statearr_34496;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1 = (function (state_34484){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34484);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34497){if((e34497 instanceof Object)){
var ex__34145__auto__ = e34497;
var statearr_34498_34601 = state_34484;
(statearr_34498_34601[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34484);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34497;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34602 = state_34484;
state_34484 = G__34602;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = function(state_34484){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1.call(this,state_34484);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___34594,jobs,results,process,async))
})();
var state__34233__auto__ = (function (){var statearr_34499 = f__34232__auto__.call(null);
(statearr_34499[(6)] = c__34231__auto___34594);

return statearr_34499;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___34594,jobs,results,process,async))
);


var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__,jobs,results,process,async){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__,jobs,results,process,async){
return (function (state_34537){
var state_val_34538 = (state_34537[(1)]);
if((state_val_34538 === (7))){
var inst_34533 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34539_34603 = state_34537__$1;
(statearr_34539_34603[(2)] = inst_34533);

(statearr_34539_34603[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (20))){
var state_34537__$1 = state_34537;
var statearr_34540_34604 = state_34537__$1;
(statearr_34540_34604[(2)] = null);

(statearr_34540_34604[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (1))){
var state_34537__$1 = state_34537;
var statearr_34541_34605 = state_34537__$1;
(statearr_34541_34605[(2)] = null);

(statearr_34541_34605[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (4))){
var inst_34502 = (state_34537[(7)]);
var inst_34502__$1 = (state_34537[(2)]);
var inst_34503 = (inst_34502__$1 == null);
var state_34537__$1 = (function (){var statearr_34542 = state_34537;
(statearr_34542[(7)] = inst_34502__$1);

return statearr_34542;
})();
if(cljs.core.truth_(inst_34503)){
var statearr_34543_34606 = state_34537__$1;
(statearr_34543_34606[(1)] = (5));

} else {
var statearr_34544_34607 = state_34537__$1;
(statearr_34544_34607[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (15))){
var inst_34515 = (state_34537[(8)]);
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34537__$1,(18),to,inst_34515);
} else {
if((state_val_34538 === (21))){
var inst_34528 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34545_34608 = state_34537__$1;
(statearr_34545_34608[(2)] = inst_34528);

(statearr_34545_34608[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (13))){
var inst_34530 = (state_34537[(2)]);
var state_34537__$1 = (function (){var statearr_34546 = state_34537;
(statearr_34546[(9)] = inst_34530);

return statearr_34546;
})();
var statearr_34547_34609 = state_34537__$1;
(statearr_34547_34609[(2)] = null);

(statearr_34547_34609[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (6))){
var inst_34502 = (state_34537[(7)]);
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34537__$1,(11),inst_34502);
} else {
if((state_val_34538 === (17))){
var inst_34523 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
if(cljs.core.truth_(inst_34523)){
var statearr_34548_34610 = state_34537__$1;
(statearr_34548_34610[(1)] = (19));

} else {
var statearr_34549_34611 = state_34537__$1;
(statearr_34549_34611[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (3))){
var inst_34535 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34537__$1,inst_34535);
} else {
if((state_val_34538 === (12))){
var inst_34512 = (state_34537[(10)]);
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34537__$1,(14),inst_34512);
} else {
if((state_val_34538 === (2))){
var state_34537__$1 = state_34537;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34537__$1,(4),results);
} else {
if((state_val_34538 === (19))){
var state_34537__$1 = state_34537;
var statearr_34550_34612 = state_34537__$1;
(statearr_34550_34612[(2)] = null);

(statearr_34550_34612[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (11))){
var inst_34512 = (state_34537[(2)]);
var state_34537__$1 = (function (){var statearr_34551 = state_34537;
(statearr_34551[(10)] = inst_34512);

return statearr_34551;
})();
var statearr_34552_34613 = state_34537__$1;
(statearr_34552_34613[(2)] = null);

(statearr_34552_34613[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (9))){
var state_34537__$1 = state_34537;
var statearr_34553_34614 = state_34537__$1;
(statearr_34553_34614[(2)] = null);

(statearr_34553_34614[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (5))){
var state_34537__$1 = state_34537;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34554_34615 = state_34537__$1;
(statearr_34554_34615[(1)] = (8));

} else {
var statearr_34555_34616 = state_34537__$1;
(statearr_34555_34616[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (14))){
var inst_34515 = (state_34537[(8)]);
var inst_34517 = (state_34537[(11)]);
var inst_34515__$1 = (state_34537[(2)]);
var inst_34516 = (inst_34515__$1 == null);
var inst_34517__$1 = cljs.core.not.call(null,inst_34516);
var state_34537__$1 = (function (){var statearr_34556 = state_34537;
(statearr_34556[(8)] = inst_34515__$1);

(statearr_34556[(11)] = inst_34517__$1);

return statearr_34556;
})();
if(inst_34517__$1){
var statearr_34557_34617 = state_34537__$1;
(statearr_34557_34617[(1)] = (15));

} else {
var statearr_34558_34618 = state_34537__$1;
(statearr_34558_34618[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (16))){
var inst_34517 = (state_34537[(11)]);
var state_34537__$1 = state_34537;
var statearr_34559_34619 = state_34537__$1;
(statearr_34559_34619[(2)] = inst_34517);

(statearr_34559_34619[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (10))){
var inst_34509 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34560_34620 = state_34537__$1;
(statearr_34560_34620[(2)] = inst_34509);

(statearr_34560_34620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (18))){
var inst_34520 = (state_34537[(2)]);
var state_34537__$1 = state_34537;
var statearr_34561_34621 = state_34537__$1;
(statearr_34561_34621[(2)] = inst_34520);

(statearr_34561_34621[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34538 === (8))){
var inst_34506 = cljs.core.async.close_BANG_.call(null,to);
var state_34537__$1 = state_34537;
var statearr_34562_34622 = state_34537__$1;
(statearr_34562_34622[(2)] = inst_34506);

(statearr_34562_34622[(1)] = (10));


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
}
}
}
}
});})(c__34231__auto__,jobs,results,process,async))
;
return ((function (switch__34141__auto__,c__34231__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0 = (function (){
var statearr_34563 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34563[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__);

(statearr_34563[(1)] = (1));

return statearr_34563;
});
var cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1 = (function (state_34537){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34537);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34564){if((e34564 instanceof Object)){
var ex__34145__auto__ = e34564;
var statearr_34565_34623 = state_34537;
(statearr_34565_34623[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34537);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34564;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34624 = state_34537;
state_34537 = G__34624;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__ = function(state_34537){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1.call(this,state_34537);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__34142__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__,jobs,results,process,async))
})();
var state__34233__auto__ = (function (){var statearr_34566 = f__34232__auto__.call(null);
(statearr_34566[(6)] = c__34231__auto__);

return statearr_34566;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__,jobs,results,process,async))
);

return c__34231__auto__;
});
/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the async function af, with parallelism n. af
 *   must be a function of two arguments, the first an input value and
 *   the second a channel on which to place the result(s). af must close!
 *   the channel before returning.  The presumption is that af will
 *   return immediately, having launched some asynchronous operation
 *   whose completion/callback will manipulate the result channel. Outputs
 *   will be returned in order relative to  the inputs. By default, the to
 *   channel will be closed when the from channel closes, but can be
 *   determined by the close?  parameter. Will stop consuming the from
 *   channel if the to channel closes.
 */
cljs.core.async.pipeline_async = (function cljs$core$async$pipeline_async(var_args){
var G__34626 = arguments.length;
switch (G__34626) {
case 4:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$4 = (function (n,to,af,from){
return cljs.core.async.pipeline_async.call(null,n,to,af,from,true);
});

cljs.core.async.pipeline_async.cljs$core$IFn$_invoke$arity$5 = (function (n,to,af,from,close_QMARK_){
return cljs.core.async.pipeline_STAR_.call(null,n,to,af,from,close_QMARK_,null,new cljs.core.Keyword(null,"async","async",1050769601));
});

cljs.core.async.pipeline_async.cljs$lang$maxFixedArity = 5;

/**
 * Takes elements from the from channel and supplies them to the to
 *   channel, subject to the transducer xf, with parallelism n. Because
 *   it is parallel, the transducer will be applied independently to each
 *   element, not across elements, and may produce zero or more outputs
 *   per input.  Outputs will be returned in order relative to the
 *   inputs. By default, the to channel will be closed when the from
 *   channel closes, but can be determined by the close?  parameter. Will
 *   stop consuming the from channel if the to channel closes.
 * 
 *   Note this is supplied for API compatibility with the Clojure version.
 *   Values of N > 1 will not result in actual concurrency in a
 *   single-threaded runtime.
 */
cljs.core.async.pipeline = (function cljs$core$async$pipeline(var_args){
var G__34629 = arguments.length;
switch (G__34629) {
case 4:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
case 5:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]));

break;
case 6:
return cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]),(arguments[(4)]),(arguments[(5)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$4 = (function (n,to,xf,from){
return cljs.core.async.pipeline.call(null,n,to,xf,from,true);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$5 = (function (n,to,xf,from,close_QMARK_){
return cljs.core.async.pipeline.call(null,n,to,xf,from,close_QMARK_,null);
});

cljs.core.async.pipeline.cljs$core$IFn$_invoke$arity$6 = (function (n,to,xf,from,close_QMARK_,ex_handler){
return cljs.core.async.pipeline_STAR_.call(null,n,to,xf,from,close_QMARK_,ex_handler,new cljs.core.Keyword(null,"compute","compute",1555393130));
});

cljs.core.async.pipeline.cljs$lang$maxFixedArity = 6;

/**
 * Takes a predicate and a source channel and returns a vector of two
 *   channels, the first of which will contain the values for which the
 *   predicate returned true, the second those for which it returned
 *   false.
 * 
 *   The out channels will be unbuffered by default, or two buf-or-ns can
 *   be supplied. The channels will close after the source channel has
 *   closed.
 */
cljs.core.async.split = (function cljs$core$async$split(var_args){
var G__34632 = arguments.length;
switch (G__34632) {
case 2:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 4:
return cljs.core.async.split.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.split.call(null,p,ch,null,null);
});

cljs.core.async.split.cljs$core$IFn$_invoke$arity$4 = (function (p,ch,t_buf_or_n,f_buf_or_n){
var tc = cljs.core.async.chan.call(null,t_buf_or_n);
var fc = cljs.core.async.chan.call(null,f_buf_or_n);
var c__34231__auto___34681 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___34681,tc,fc){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___34681,tc,fc){
return (function (state_34658){
var state_val_34659 = (state_34658[(1)]);
if((state_val_34659 === (7))){
var inst_34654 = (state_34658[(2)]);
var state_34658__$1 = state_34658;
var statearr_34660_34682 = state_34658__$1;
(statearr_34660_34682[(2)] = inst_34654);

(statearr_34660_34682[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (1))){
var state_34658__$1 = state_34658;
var statearr_34661_34683 = state_34658__$1;
(statearr_34661_34683[(2)] = null);

(statearr_34661_34683[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (4))){
var inst_34635 = (state_34658[(7)]);
var inst_34635__$1 = (state_34658[(2)]);
var inst_34636 = (inst_34635__$1 == null);
var state_34658__$1 = (function (){var statearr_34662 = state_34658;
(statearr_34662[(7)] = inst_34635__$1);

return statearr_34662;
})();
if(cljs.core.truth_(inst_34636)){
var statearr_34663_34684 = state_34658__$1;
(statearr_34663_34684[(1)] = (5));

} else {
var statearr_34664_34685 = state_34658__$1;
(statearr_34664_34685[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (13))){
var state_34658__$1 = state_34658;
var statearr_34665_34686 = state_34658__$1;
(statearr_34665_34686[(2)] = null);

(statearr_34665_34686[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (6))){
var inst_34635 = (state_34658[(7)]);
var inst_34641 = p.call(null,inst_34635);
var state_34658__$1 = state_34658;
if(cljs.core.truth_(inst_34641)){
var statearr_34666_34687 = state_34658__$1;
(statearr_34666_34687[(1)] = (9));

} else {
var statearr_34667_34688 = state_34658__$1;
(statearr_34667_34688[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (3))){
var inst_34656 = (state_34658[(2)]);
var state_34658__$1 = state_34658;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34658__$1,inst_34656);
} else {
if((state_val_34659 === (12))){
var state_34658__$1 = state_34658;
var statearr_34668_34689 = state_34658__$1;
(statearr_34668_34689[(2)] = null);

(statearr_34668_34689[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (2))){
var state_34658__$1 = state_34658;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34658__$1,(4),ch);
} else {
if((state_val_34659 === (11))){
var inst_34635 = (state_34658[(7)]);
var inst_34645 = (state_34658[(2)]);
var state_34658__$1 = state_34658;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34658__$1,(8),inst_34645,inst_34635);
} else {
if((state_val_34659 === (9))){
var state_34658__$1 = state_34658;
var statearr_34669_34690 = state_34658__$1;
(statearr_34669_34690[(2)] = tc);

(statearr_34669_34690[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (5))){
var inst_34638 = cljs.core.async.close_BANG_.call(null,tc);
var inst_34639 = cljs.core.async.close_BANG_.call(null,fc);
var state_34658__$1 = (function (){var statearr_34670 = state_34658;
(statearr_34670[(8)] = inst_34638);

return statearr_34670;
})();
var statearr_34671_34691 = state_34658__$1;
(statearr_34671_34691[(2)] = inst_34639);

(statearr_34671_34691[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (14))){
var inst_34652 = (state_34658[(2)]);
var state_34658__$1 = state_34658;
var statearr_34672_34692 = state_34658__$1;
(statearr_34672_34692[(2)] = inst_34652);

(statearr_34672_34692[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (10))){
var state_34658__$1 = state_34658;
var statearr_34673_34693 = state_34658__$1;
(statearr_34673_34693[(2)] = fc);

(statearr_34673_34693[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34659 === (8))){
var inst_34647 = (state_34658[(2)]);
var state_34658__$1 = state_34658;
if(cljs.core.truth_(inst_34647)){
var statearr_34674_34694 = state_34658__$1;
(statearr_34674_34694[(1)] = (12));

} else {
var statearr_34675_34695 = state_34658__$1;
(statearr_34675_34695[(1)] = (13));

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
});})(c__34231__auto___34681,tc,fc))
;
return ((function (switch__34141__auto__,c__34231__auto___34681,tc,fc){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_34676 = [null,null,null,null,null,null,null,null,null];
(statearr_34676[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_34676[(1)] = (1));

return statearr_34676;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_34658){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34658);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34677){if((e34677 instanceof Object)){
var ex__34145__auto__ = e34677;
var statearr_34678_34696 = state_34658;
(statearr_34678_34696[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34658);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34677;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34697 = state_34658;
state_34658 = G__34697;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_34658){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_34658);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___34681,tc,fc))
})();
var state__34233__auto__ = (function (){var statearr_34679 = f__34232__auto__.call(null);
(statearr_34679[(6)] = c__34231__auto___34681);

return statearr_34679;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___34681,tc,fc))
);


return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});

cljs.core.async.split.cljs$lang$maxFixedArity = 4;

/**
 * f should be a function of 2 arguments. Returns a channel containing
 *   the single result of applying f to init and the first item from the
 *   channel, then applying f to that result and the 2nd item, etc. If
 *   the channel closes without yielding items, returns init and f is not
 *   called. ch must close before reduce produces a result.
 */
cljs.core.async.reduce = (function cljs$core$async$reduce(f,init,ch){
var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__){
return (function (state_34718){
var state_val_34719 = (state_34718[(1)]);
if((state_val_34719 === (7))){
var inst_34714 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
var statearr_34720_34738 = state_34718__$1;
(statearr_34720_34738[(2)] = inst_34714);

(statearr_34720_34738[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (1))){
var inst_34698 = init;
var state_34718__$1 = (function (){var statearr_34721 = state_34718;
(statearr_34721[(7)] = inst_34698);

return statearr_34721;
})();
var statearr_34722_34739 = state_34718__$1;
(statearr_34722_34739[(2)] = null);

(statearr_34722_34739[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (4))){
var inst_34701 = (state_34718[(8)]);
var inst_34701__$1 = (state_34718[(2)]);
var inst_34702 = (inst_34701__$1 == null);
var state_34718__$1 = (function (){var statearr_34723 = state_34718;
(statearr_34723[(8)] = inst_34701__$1);

return statearr_34723;
})();
if(cljs.core.truth_(inst_34702)){
var statearr_34724_34740 = state_34718__$1;
(statearr_34724_34740[(1)] = (5));

} else {
var statearr_34725_34741 = state_34718__$1;
(statearr_34725_34741[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (6))){
var inst_34698 = (state_34718[(7)]);
var inst_34701 = (state_34718[(8)]);
var inst_34705 = (state_34718[(9)]);
var inst_34705__$1 = f.call(null,inst_34698,inst_34701);
var inst_34706 = cljs.core.reduced_QMARK_.call(null,inst_34705__$1);
var state_34718__$1 = (function (){var statearr_34726 = state_34718;
(statearr_34726[(9)] = inst_34705__$1);

return statearr_34726;
})();
if(inst_34706){
var statearr_34727_34742 = state_34718__$1;
(statearr_34727_34742[(1)] = (8));

} else {
var statearr_34728_34743 = state_34718__$1;
(statearr_34728_34743[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (3))){
var inst_34716 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34718__$1,inst_34716);
} else {
if((state_val_34719 === (2))){
var state_34718__$1 = state_34718;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34718__$1,(4),ch);
} else {
if((state_val_34719 === (9))){
var inst_34705 = (state_34718[(9)]);
var inst_34698 = inst_34705;
var state_34718__$1 = (function (){var statearr_34729 = state_34718;
(statearr_34729[(7)] = inst_34698);

return statearr_34729;
})();
var statearr_34730_34744 = state_34718__$1;
(statearr_34730_34744[(2)] = null);

(statearr_34730_34744[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (5))){
var inst_34698 = (state_34718[(7)]);
var state_34718__$1 = state_34718;
var statearr_34731_34745 = state_34718__$1;
(statearr_34731_34745[(2)] = inst_34698);

(statearr_34731_34745[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (10))){
var inst_34712 = (state_34718[(2)]);
var state_34718__$1 = state_34718;
var statearr_34732_34746 = state_34718__$1;
(statearr_34732_34746[(2)] = inst_34712);

(statearr_34732_34746[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34719 === (8))){
var inst_34705 = (state_34718[(9)]);
var inst_34708 = cljs.core.deref.call(null,inst_34705);
var state_34718__$1 = state_34718;
var statearr_34733_34747 = state_34718__$1;
(statearr_34733_34747[(2)] = inst_34708);

(statearr_34733_34747[(1)] = (10));


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
});})(c__34231__auto__))
;
return ((function (switch__34141__auto__,c__34231__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__34142__auto__ = null;
var cljs$core$async$reduce_$_state_machine__34142__auto____0 = (function (){
var statearr_34734 = [null,null,null,null,null,null,null,null,null,null];
(statearr_34734[(0)] = cljs$core$async$reduce_$_state_machine__34142__auto__);

(statearr_34734[(1)] = (1));

return statearr_34734;
});
var cljs$core$async$reduce_$_state_machine__34142__auto____1 = (function (state_34718){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34718);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34735){if((e34735 instanceof Object)){
var ex__34145__auto__ = e34735;
var statearr_34736_34748 = state_34718;
(statearr_34736_34748[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34718);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34735;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34749 = state_34718;
state_34718 = G__34749;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__34142__auto__ = function(state_34718){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__34142__auto____1.call(this,state_34718);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__34142__auto____0;
cljs$core$async$reduce_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__34142__auto____1;
return cljs$core$async$reduce_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__))
})();
var state__34233__auto__ = (function (){var statearr_34737 = f__34232__auto__.call(null);
(statearr_34737[(6)] = c__34231__auto__);

return statearr_34737;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__))
);

return c__34231__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__,f__$1){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__,f__$1){
return (function (state_34755){
var state_val_34756 = (state_34755[(1)]);
if((state_val_34756 === (1))){
var inst_34750 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34755__$1,(2),inst_34750);
} else {
if((state_val_34756 === (2))){
var inst_34752 = (state_34755[(2)]);
var inst_34753 = f__$1.call(null,inst_34752);
var state_34755__$1 = state_34755;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34755__$1,inst_34753);
} else {
return null;
}
}
});})(c__34231__auto__,f__$1))
;
return ((function (switch__34141__auto__,c__34231__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__34142__auto__ = null;
var cljs$core$async$transduce_$_state_machine__34142__auto____0 = (function (){
var statearr_34757 = [null,null,null,null,null,null,null];
(statearr_34757[(0)] = cljs$core$async$transduce_$_state_machine__34142__auto__);

(statearr_34757[(1)] = (1));

return statearr_34757;
});
var cljs$core$async$transduce_$_state_machine__34142__auto____1 = (function (state_34755){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34755);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34758){if((e34758 instanceof Object)){
var ex__34145__auto__ = e34758;
var statearr_34759_34761 = state_34755;
(statearr_34759_34761[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34755);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34758;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34762 = state_34755;
state_34755 = G__34762;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__34142__auto__ = function(state_34755){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__34142__auto____1.call(this,state_34755);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__34142__auto____0;
cljs$core$async$transduce_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__34142__auto____1;
return cljs$core$async$transduce_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__,f__$1))
})();
var state__34233__auto__ = (function (){var statearr_34760 = f__34232__auto__.call(null);
(statearr_34760[(6)] = c__34231__auto__);

return statearr_34760;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__,f__$1))
);

return c__34231__auto__;
});
/**
 * Puts the contents of coll into the supplied channel.
 * 
 *   By default the channel will be closed after the items are copied,
 *   but can be determined by the close? parameter.
 * 
 *   Returns a channel which will close after the items are copied.
 */
cljs.core.async.onto_chan = (function cljs$core$async$onto_chan(var_args){
var G__34764 = arguments.length;
switch (G__34764) {
case 2:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$2 = (function (ch,coll){
return cljs.core.async.onto_chan.call(null,ch,coll,true);
});

cljs.core.async.onto_chan.cljs$core$IFn$_invoke$arity$3 = (function (ch,coll,close_QMARK_){
var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__){
return (function (state_34789){
var state_val_34790 = (state_34789[(1)]);
if((state_val_34790 === (7))){
var inst_34771 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
var statearr_34791_34812 = state_34789__$1;
(statearr_34791_34812[(2)] = inst_34771);

(statearr_34791_34812[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (1))){
var inst_34765 = cljs.core.seq.call(null,coll);
var inst_34766 = inst_34765;
var state_34789__$1 = (function (){var statearr_34792 = state_34789;
(statearr_34792[(7)] = inst_34766);

return statearr_34792;
})();
var statearr_34793_34813 = state_34789__$1;
(statearr_34793_34813[(2)] = null);

(statearr_34793_34813[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (4))){
var inst_34766 = (state_34789[(7)]);
var inst_34769 = cljs.core.first.call(null,inst_34766);
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34789__$1,(7),ch,inst_34769);
} else {
if((state_val_34790 === (13))){
var inst_34783 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
var statearr_34794_34814 = state_34789__$1;
(statearr_34794_34814[(2)] = inst_34783);

(statearr_34794_34814[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (6))){
var inst_34774 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
if(cljs.core.truth_(inst_34774)){
var statearr_34795_34815 = state_34789__$1;
(statearr_34795_34815[(1)] = (8));

} else {
var statearr_34796_34816 = state_34789__$1;
(statearr_34796_34816[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (3))){
var inst_34787 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34789__$1,inst_34787);
} else {
if((state_val_34790 === (12))){
var state_34789__$1 = state_34789;
var statearr_34797_34817 = state_34789__$1;
(statearr_34797_34817[(2)] = null);

(statearr_34797_34817[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (2))){
var inst_34766 = (state_34789[(7)]);
var state_34789__$1 = state_34789;
if(cljs.core.truth_(inst_34766)){
var statearr_34798_34818 = state_34789__$1;
(statearr_34798_34818[(1)] = (4));

} else {
var statearr_34799_34819 = state_34789__$1;
(statearr_34799_34819[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (11))){
var inst_34780 = cljs.core.async.close_BANG_.call(null,ch);
var state_34789__$1 = state_34789;
var statearr_34800_34820 = state_34789__$1;
(statearr_34800_34820[(2)] = inst_34780);

(statearr_34800_34820[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (9))){
var state_34789__$1 = state_34789;
if(cljs.core.truth_(close_QMARK_)){
var statearr_34801_34822 = state_34789__$1;
(statearr_34801_34822[(1)] = (11));

} else {
var statearr_34802_34823 = state_34789__$1;
(statearr_34802_34823[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (5))){
var inst_34766 = (state_34789[(7)]);
var state_34789__$1 = state_34789;
var statearr_34803_34824 = state_34789__$1;
(statearr_34803_34824[(2)] = inst_34766);

(statearr_34803_34824[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (10))){
var inst_34785 = (state_34789[(2)]);
var state_34789__$1 = state_34789;
var statearr_34804_34825 = state_34789__$1;
(statearr_34804_34825[(2)] = inst_34785);

(statearr_34804_34825[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34790 === (8))){
var inst_34766 = (state_34789[(7)]);
var inst_34776 = cljs.core.next.call(null,inst_34766);
var inst_34766__$1 = inst_34776;
var state_34789__$1 = (function (){var statearr_34805 = state_34789;
(statearr_34805[(7)] = inst_34766__$1);

return statearr_34805;
})();
var statearr_34806_34826 = state_34789__$1;
(statearr_34806_34826[(2)] = null);

(statearr_34806_34826[(1)] = (2));


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
});})(c__34231__auto__))
;
return ((function (switch__34141__auto__,c__34231__auto__){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_34807 = [null,null,null,null,null,null,null,null];
(statearr_34807[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_34807[(1)] = (1));

return statearr_34807;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_34789){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34789);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e34808){if((e34808 instanceof Object)){
var ex__34145__auto__ = e34808;
var statearr_34809_34827 = state_34789;
(statearr_34809_34827[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34789);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34808;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34828 = state_34789;
state_34789 = G__34828;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_34789){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_34789);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__))
})();
var state__34233__auto__ = (function (){var statearr_34810 = f__34232__auto__.call(null);
(statearr_34810[(6)] = c__34231__auto__);

return statearr_34810;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__))
);

return c__34231__auto__;
});

cljs.core.async.onto_chan.cljs$lang$maxFixedArity = 3;

/**
 * Creates and returns a channel which contains the contents of coll,
 *   closing when exhausted.
 */
cljs.core.async.to_chan = (function cljs$core$async$to_chan(coll){
var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));
cljs.core.async.onto_chan.call(null,ch,coll);

return ch;
});

/**
 * @interface
 */
cljs.core.async.Mux = function(){};

cljs.core.async.muxch_STAR_ = (function cljs$core$async$muxch_STAR_(_){
if((!((_ == null))) && (!((_.cljs$core$async$Mux$muxch_STAR_$arity$1 == null)))){
return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else {
var x__30756__auto__ = (((_ == null))?null:_);
var m__30757__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,_);
} else {
var m__30757__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,_);
} else {
throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
}
});


/**
 * @interface
 */
cljs.core.async.Mult = function(){};

cljs.core.async.tap_STAR_ = (function cljs$core$async$tap_STAR_(m,ch,close_QMARK_){
if((!((m == null))) && (!((m.cljs$core$async$Mult$tap_STAR_$arity$3 == null)))){
return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else {
var x__30756__auto__ = (((m == null))?null:m);
var m__30757__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,m,ch,close_QMARK_);
} else {
var m__30757__auto____$1 = (cljs.core.async.tap_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,m,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
}
});

cljs.core.async.untap_STAR_ = (function cljs$core$async$untap_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else {
var x__30756__auto__ = (((m == null))?null:m);
var m__30757__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,m,ch);
} else {
var m__30757__auto____$1 = (cljs.core.async.untap_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
}
});

cljs.core.async.untap_all_STAR_ = (function cljs$core$async$untap_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mult$untap_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else {
var x__30756__auto__ = (((m == null))?null:m);
var m__30757__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,m);
} else {
var m__30757__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
}
});

/**
 * Creates and returns a mult(iple) of the supplied channel. Channels
 *   containing copies of the channel can be created with 'tap', and
 *   detached with 'untap'.
 * 
 *   Each item is distributed to all taps in parallel and synchronously,
 *   i.e. each tap must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow taps from holding up the mult.
 * 
 *   Items received when there are no taps get dropped.
 * 
 *   If a tap puts to a closed channel, it will be removed from the mult.
 */
cljs.core.async.mult = (function cljs$core$async$mult(ch){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async34829 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34829 = (function (ch,cs,meta34830){
this.ch = ch;
this.cs = cs;
this.meta34830 = meta34830;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_34831,meta34830__$1){
var self__ = this;
var _34831__$1 = this;
return (new cljs.core.async.t_cljs$core$async34829(self__.ch,self__.cs,meta34830__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_34831){
var self__ = this;
var _34831__$1 = this;
return self__.meta34830;
});})(cs))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34829.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async34829.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta34830","meta34830",1334682322,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async34829.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34829.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34829";

cljs.core.async.t_cljs$core$async34829.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34829");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async34829 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async34829(ch__$1,cs__$1,meta34830){
return (new cljs.core.async.t_cljs$core$async34829(ch__$1,cs__$1,meta34830));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async34829(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = ((function (cs,m,dchan,dctr){
return (function (_){
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,true);
} else {
return null;
}
});})(cs,m,dchan,dctr))
;
var c__34231__auto___35051 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___35051,cs,m,dchan,dctr,done){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___35051,cs,m,dchan,dctr,done){
return (function (state_34966){
var state_val_34967 = (state_34966[(1)]);
if((state_val_34967 === (7))){
var inst_34962 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_34968_35052 = state_34966__$1;
(statearr_34968_35052[(2)] = inst_34962);

(statearr_34968_35052[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (20))){
var inst_34865 = (state_34966[(7)]);
var inst_34877 = cljs.core.first.call(null,inst_34865);
var inst_34878 = cljs.core.nth.call(null,inst_34877,(0),null);
var inst_34879 = cljs.core.nth.call(null,inst_34877,(1),null);
var state_34966__$1 = (function (){var statearr_34969 = state_34966;
(statearr_34969[(8)] = inst_34878);

return statearr_34969;
})();
if(cljs.core.truth_(inst_34879)){
var statearr_34970_35053 = state_34966__$1;
(statearr_34970_35053[(1)] = (22));

} else {
var statearr_34971_35054 = state_34966__$1;
(statearr_34971_35054[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (27))){
var inst_34914 = (state_34966[(9)]);
var inst_34909 = (state_34966[(10)]);
var inst_34907 = (state_34966[(11)]);
var inst_34834 = (state_34966[(12)]);
var inst_34914__$1 = cljs.core._nth.call(null,inst_34907,inst_34909);
var inst_34915 = cljs.core.async.put_BANG_.call(null,inst_34914__$1,inst_34834,done);
var state_34966__$1 = (function (){var statearr_34972 = state_34966;
(statearr_34972[(9)] = inst_34914__$1);

return statearr_34972;
})();
if(cljs.core.truth_(inst_34915)){
var statearr_34973_35055 = state_34966__$1;
(statearr_34973_35055[(1)] = (30));

} else {
var statearr_34974_35056 = state_34966__$1;
(statearr_34974_35056[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (1))){
var state_34966__$1 = state_34966;
var statearr_34975_35057 = state_34966__$1;
(statearr_34975_35057[(2)] = null);

(statearr_34975_35057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (24))){
var inst_34865 = (state_34966[(7)]);
var inst_34884 = (state_34966[(2)]);
var inst_34885 = cljs.core.next.call(null,inst_34865);
var inst_34843 = inst_34885;
var inst_34844 = null;
var inst_34845 = (0);
var inst_34846 = (0);
var state_34966__$1 = (function (){var statearr_34976 = state_34966;
(statearr_34976[(13)] = inst_34843);

(statearr_34976[(14)] = inst_34845);

(statearr_34976[(15)] = inst_34844);

(statearr_34976[(16)] = inst_34846);

(statearr_34976[(17)] = inst_34884);

return statearr_34976;
})();
var statearr_34977_35058 = state_34966__$1;
(statearr_34977_35058[(2)] = null);

(statearr_34977_35058[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (39))){
var state_34966__$1 = state_34966;
var statearr_34981_35059 = state_34966__$1;
(statearr_34981_35059[(2)] = null);

(statearr_34981_35059[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (4))){
var inst_34834 = (state_34966[(12)]);
var inst_34834__$1 = (state_34966[(2)]);
var inst_34835 = (inst_34834__$1 == null);
var state_34966__$1 = (function (){var statearr_34982 = state_34966;
(statearr_34982[(12)] = inst_34834__$1);

return statearr_34982;
})();
if(cljs.core.truth_(inst_34835)){
var statearr_34983_35060 = state_34966__$1;
(statearr_34983_35060[(1)] = (5));

} else {
var statearr_34984_35061 = state_34966__$1;
(statearr_34984_35061[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (15))){
var inst_34843 = (state_34966[(13)]);
var inst_34845 = (state_34966[(14)]);
var inst_34844 = (state_34966[(15)]);
var inst_34846 = (state_34966[(16)]);
var inst_34861 = (state_34966[(2)]);
var inst_34862 = (inst_34846 + (1));
var tmp34978 = inst_34843;
var tmp34979 = inst_34845;
var tmp34980 = inst_34844;
var inst_34843__$1 = tmp34978;
var inst_34844__$1 = tmp34980;
var inst_34845__$1 = tmp34979;
var inst_34846__$1 = inst_34862;
var state_34966__$1 = (function (){var statearr_34985 = state_34966;
(statearr_34985[(13)] = inst_34843__$1);

(statearr_34985[(14)] = inst_34845__$1);

(statearr_34985[(15)] = inst_34844__$1);

(statearr_34985[(16)] = inst_34846__$1);

(statearr_34985[(18)] = inst_34861);

return statearr_34985;
})();
var statearr_34986_35062 = state_34966__$1;
(statearr_34986_35062[(2)] = null);

(statearr_34986_35062[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (21))){
var inst_34888 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_34990_35063 = state_34966__$1;
(statearr_34990_35063[(2)] = inst_34888);

(statearr_34990_35063[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (31))){
var inst_34914 = (state_34966[(9)]);
var inst_34918 = done.call(null,null);
var inst_34919 = cljs.core.async.untap_STAR_.call(null,m,inst_34914);
var state_34966__$1 = (function (){var statearr_34991 = state_34966;
(statearr_34991[(19)] = inst_34918);

return statearr_34991;
})();
var statearr_34992_35064 = state_34966__$1;
(statearr_34992_35064[(2)] = inst_34919);

(statearr_34992_35064[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (32))){
var inst_34909 = (state_34966[(10)]);
var inst_34906 = (state_34966[(20)]);
var inst_34907 = (state_34966[(11)]);
var inst_34908 = (state_34966[(21)]);
var inst_34921 = (state_34966[(2)]);
var inst_34922 = (inst_34909 + (1));
var tmp34987 = inst_34906;
var tmp34988 = inst_34907;
var tmp34989 = inst_34908;
var inst_34906__$1 = tmp34987;
var inst_34907__$1 = tmp34988;
var inst_34908__$1 = tmp34989;
var inst_34909__$1 = inst_34922;
var state_34966__$1 = (function (){var statearr_34993 = state_34966;
(statearr_34993[(10)] = inst_34909__$1);

(statearr_34993[(20)] = inst_34906__$1);

(statearr_34993[(22)] = inst_34921);

(statearr_34993[(11)] = inst_34907__$1);

(statearr_34993[(21)] = inst_34908__$1);

return statearr_34993;
})();
var statearr_34994_35065 = state_34966__$1;
(statearr_34994_35065[(2)] = null);

(statearr_34994_35065[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (40))){
var inst_34934 = (state_34966[(23)]);
var inst_34938 = done.call(null,null);
var inst_34939 = cljs.core.async.untap_STAR_.call(null,m,inst_34934);
var state_34966__$1 = (function (){var statearr_34995 = state_34966;
(statearr_34995[(24)] = inst_34938);

return statearr_34995;
})();
var statearr_34996_35066 = state_34966__$1;
(statearr_34996_35066[(2)] = inst_34939);

(statearr_34996_35066[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (33))){
var inst_34925 = (state_34966[(25)]);
var inst_34927 = cljs.core.chunked_seq_QMARK_.call(null,inst_34925);
var state_34966__$1 = state_34966;
if(inst_34927){
var statearr_34997_35067 = state_34966__$1;
(statearr_34997_35067[(1)] = (36));

} else {
var statearr_34998_35068 = state_34966__$1;
(statearr_34998_35068[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (13))){
var inst_34855 = (state_34966[(26)]);
var inst_34858 = cljs.core.async.close_BANG_.call(null,inst_34855);
var state_34966__$1 = state_34966;
var statearr_34999_35069 = state_34966__$1;
(statearr_34999_35069[(2)] = inst_34858);

(statearr_34999_35069[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (22))){
var inst_34878 = (state_34966[(8)]);
var inst_34881 = cljs.core.async.close_BANG_.call(null,inst_34878);
var state_34966__$1 = state_34966;
var statearr_35000_35070 = state_34966__$1;
(statearr_35000_35070[(2)] = inst_34881);

(statearr_35000_35070[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (36))){
var inst_34925 = (state_34966[(25)]);
var inst_34929 = cljs.core.chunk_first.call(null,inst_34925);
var inst_34930 = cljs.core.chunk_rest.call(null,inst_34925);
var inst_34931 = cljs.core.count.call(null,inst_34929);
var inst_34906 = inst_34930;
var inst_34907 = inst_34929;
var inst_34908 = inst_34931;
var inst_34909 = (0);
var state_34966__$1 = (function (){var statearr_35001 = state_34966;
(statearr_35001[(10)] = inst_34909);

(statearr_35001[(20)] = inst_34906);

(statearr_35001[(11)] = inst_34907);

(statearr_35001[(21)] = inst_34908);

return statearr_35001;
})();
var statearr_35002_35071 = state_34966__$1;
(statearr_35002_35071[(2)] = null);

(statearr_35002_35071[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (41))){
var inst_34925 = (state_34966[(25)]);
var inst_34941 = (state_34966[(2)]);
var inst_34942 = cljs.core.next.call(null,inst_34925);
var inst_34906 = inst_34942;
var inst_34907 = null;
var inst_34908 = (0);
var inst_34909 = (0);
var state_34966__$1 = (function (){var statearr_35003 = state_34966;
(statearr_35003[(27)] = inst_34941);

(statearr_35003[(10)] = inst_34909);

(statearr_35003[(20)] = inst_34906);

(statearr_35003[(11)] = inst_34907);

(statearr_35003[(21)] = inst_34908);

return statearr_35003;
})();
var statearr_35004_35072 = state_34966__$1;
(statearr_35004_35072[(2)] = null);

(statearr_35004_35072[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (43))){
var state_34966__$1 = state_34966;
var statearr_35005_35073 = state_34966__$1;
(statearr_35005_35073[(2)] = null);

(statearr_35005_35073[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (29))){
var inst_34950 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35006_35074 = state_34966__$1;
(statearr_35006_35074[(2)] = inst_34950);

(statearr_35006_35074[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (44))){
var inst_34959 = (state_34966[(2)]);
var state_34966__$1 = (function (){var statearr_35007 = state_34966;
(statearr_35007[(28)] = inst_34959);

return statearr_35007;
})();
var statearr_35008_35075 = state_34966__$1;
(statearr_35008_35075[(2)] = null);

(statearr_35008_35075[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (6))){
var inst_34898 = (state_34966[(29)]);
var inst_34897 = cljs.core.deref.call(null,cs);
var inst_34898__$1 = cljs.core.keys.call(null,inst_34897);
var inst_34899 = cljs.core.count.call(null,inst_34898__$1);
var inst_34900 = cljs.core.reset_BANG_.call(null,dctr,inst_34899);
var inst_34905 = cljs.core.seq.call(null,inst_34898__$1);
var inst_34906 = inst_34905;
var inst_34907 = null;
var inst_34908 = (0);
var inst_34909 = (0);
var state_34966__$1 = (function (){var statearr_35009 = state_34966;
(statearr_35009[(29)] = inst_34898__$1);

(statearr_35009[(30)] = inst_34900);

(statearr_35009[(10)] = inst_34909);

(statearr_35009[(20)] = inst_34906);

(statearr_35009[(11)] = inst_34907);

(statearr_35009[(21)] = inst_34908);

return statearr_35009;
})();
var statearr_35010_35076 = state_34966__$1;
(statearr_35010_35076[(2)] = null);

(statearr_35010_35076[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (28))){
var inst_34925 = (state_34966[(25)]);
var inst_34906 = (state_34966[(20)]);
var inst_34925__$1 = cljs.core.seq.call(null,inst_34906);
var state_34966__$1 = (function (){var statearr_35011 = state_34966;
(statearr_35011[(25)] = inst_34925__$1);

return statearr_35011;
})();
if(inst_34925__$1){
var statearr_35012_35077 = state_34966__$1;
(statearr_35012_35077[(1)] = (33));

} else {
var statearr_35013_35078 = state_34966__$1;
(statearr_35013_35078[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (25))){
var inst_34909 = (state_34966[(10)]);
var inst_34908 = (state_34966[(21)]);
var inst_34911 = (inst_34909 < inst_34908);
var inst_34912 = inst_34911;
var state_34966__$1 = state_34966;
if(cljs.core.truth_(inst_34912)){
var statearr_35014_35079 = state_34966__$1;
(statearr_35014_35079[(1)] = (27));

} else {
var statearr_35015_35080 = state_34966__$1;
(statearr_35015_35080[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (34))){
var state_34966__$1 = state_34966;
var statearr_35016_35081 = state_34966__$1;
(statearr_35016_35081[(2)] = null);

(statearr_35016_35081[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (17))){
var state_34966__$1 = state_34966;
var statearr_35017_35082 = state_34966__$1;
(statearr_35017_35082[(2)] = null);

(statearr_35017_35082[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (3))){
var inst_34964 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34966__$1,inst_34964);
} else {
if((state_val_34967 === (12))){
var inst_34893 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35018_35083 = state_34966__$1;
(statearr_35018_35083[(2)] = inst_34893);

(statearr_35018_35083[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (2))){
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34966__$1,(4),ch);
} else {
if((state_val_34967 === (23))){
var state_34966__$1 = state_34966;
var statearr_35019_35084 = state_34966__$1;
(statearr_35019_35084[(2)] = null);

(statearr_35019_35084[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (35))){
var inst_34948 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35020_35085 = state_34966__$1;
(statearr_35020_35085[(2)] = inst_34948);

(statearr_35020_35085[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (19))){
var inst_34865 = (state_34966[(7)]);
var inst_34869 = cljs.core.chunk_first.call(null,inst_34865);
var inst_34870 = cljs.core.chunk_rest.call(null,inst_34865);
var inst_34871 = cljs.core.count.call(null,inst_34869);
var inst_34843 = inst_34870;
var inst_34844 = inst_34869;
var inst_34845 = inst_34871;
var inst_34846 = (0);
var state_34966__$1 = (function (){var statearr_35021 = state_34966;
(statearr_35021[(13)] = inst_34843);

(statearr_35021[(14)] = inst_34845);

(statearr_35021[(15)] = inst_34844);

(statearr_35021[(16)] = inst_34846);

return statearr_35021;
})();
var statearr_35022_35086 = state_34966__$1;
(statearr_35022_35086[(2)] = null);

(statearr_35022_35086[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (11))){
var inst_34843 = (state_34966[(13)]);
var inst_34865 = (state_34966[(7)]);
var inst_34865__$1 = cljs.core.seq.call(null,inst_34843);
var state_34966__$1 = (function (){var statearr_35023 = state_34966;
(statearr_35023[(7)] = inst_34865__$1);

return statearr_35023;
})();
if(inst_34865__$1){
var statearr_35024_35087 = state_34966__$1;
(statearr_35024_35087[(1)] = (16));

} else {
var statearr_35025_35088 = state_34966__$1;
(statearr_35025_35088[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (9))){
var inst_34895 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35026_35089 = state_34966__$1;
(statearr_35026_35089[(2)] = inst_34895);

(statearr_35026_35089[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (5))){
var inst_34841 = cljs.core.deref.call(null,cs);
var inst_34842 = cljs.core.seq.call(null,inst_34841);
var inst_34843 = inst_34842;
var inst_34844 = null;
var inst_34845 = (0);
var inst_34846 = (0);
var state_34966__$1 = (function (){var statearr_35027 = state_34966;
(statearr_35027[(13)] = inst_34843);

(statearr_35027[(14)] = inst_34845);

(statearr_35027[(15)] = inst_34844);

(statearr_35027[(16)] = inst_34846);

return statearr_35027;
})();
var statearr_35028_35090 = state_34966__$1;
(statearr_35028_35090[(2)] = null);

(statearr_35028_35090[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (14))){
var state_34966__$1 = state_34966;
var statearr_35029_35091 = state_34966__$1;
(statearr_35029_35091[(2)] = null);

(statearr_35029_35091[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (45))){
var inst_34956 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35030_35092 = state_34966__$1;
(statearr_35030_35092[(2)] = inst_34956);

(statearr_35030_35092[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (26))){
var inst_34898 = (state_34966[(29)]);
var inst_34952 = (state_34966[(2)]);
var inst_34953 = cljs.core.seq.call(null,inst_34898);
var state_34966__$1 = (function (){var statearr_35031 = state_34966;
(statearr_35031[(31)] = inst_34952);

return statearr_35031;
})();
if(inst_34953){
var statearr_35032_35093 = state_34966__$1;
(statearr_35032_35093[(1)] = (42));

} else {
var statearr_35033_35094 = state_34966__$1;
(statearr_35033_35094[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (16))){
var inst_34865 = (state_34966[(7)]);
var inst_34867 = cljs.core.chunked_seq_QMARK_.call(null,inst_34865);
var state_34966__$1 = state_34966;
if(inst_34867){
var statearr_35034_35095 = state_34966__$1;
(statearr_35034_35095[(1)] = (19));

} else {
var statearr_35035_35096 = state_34966__$1;
(statearr_35035_35096[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (38))){
var inst_34945 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35036_35097 = state_34966__$1;
(statearr_35036_35097[(2)] = inst_34945);

(statearr_35036_35097[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (30))){
var state_34966__$1 = state_34966;
var statearr_35037_35098 = state_34966__$1;
(statearr_35037_35098[(2)] = null);

(statearr_35037_35098[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (10))){
var inst_34844 = (state_34966[(15)]);
var inst_34846 = (state_34966[(16)]);
var inst_34854 = cljs.core._nth.call(null,inst_34844,inst_34846);
var inst_34855 = cljs.core.nth.call(null,inst_34854,(0),null);
var inst_34856 = cljs.core.nth.call(null,inst_34854,(1),null);
var state_34966__$1 = (function (){var statearr_35038 = state_34966;
(statearr_35038[(26)] = inst_34855);

return statearr_35038;
})();
if(cljs.core.truth_(inst_34856)){
var statearr_35039_35099 = state_34966__$1;
(statearr_35039_35099[(1)] = (13));

} else {
var statearr_35040_35100 = state_34966__$1;
(statearr_35040_35100[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (18))){
var inst_34891 = (state_34966[(2)]);
var state_34966__$1 = state_34966;
var statearr_35041_35101 = state_34966__$1;
(statearr_35041_35101[(2)] = inst_34891);

(statearr_35041_35101[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (42))){
var state_34966__$1 = state_34966;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34966__$1,(45),dchan);
} else {
if((state_val_34967 === (37))){
var inst_34934 = (state_34966[(23)]);
var inst_34925 = (state_34966[(25)]);
var inst_34834 = (state_34966[(12)]);
var inst_34934__$1 = cljs.core.first.call(null,inst_34925);
var inst_34935 = cljs.core.async.put_BANG_.call(null,inst_34934__$1,inst_34834,done);
var state_34966__$1 = (function (){var statearr_35042 = state_34966;
(statearr_35042[(23)] = inst_34934__$1);

return statearr_35042;
})();
if(cljs.core.truth_(inst_34935)){
var statearr_35043_35102 = state_34966__$1;
(statearr_35043_35102[(1)] = (39));

} else {
var statearr_35044_35103 = state_34966__$1;
(statearr_35044_35103[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34967 === (8))){
var inst_34845 = (state_34966[(14)]);
var inst_34846 = (state_34966[(16)]);
var inst_34848 = (inst_34846 < inst_34845);
var inst_34849 = inst_34848;
var state_34966__$1 = state_34966;
if(cljs.core.truth_(inst_34849)){
var statearr_35045_35104 = state_34966__$1;
(statearr_35045_35104[(1)] = (10));

} else {
var statearr_35046_35105 = state_34966__$1;
(statearr_35046_35105[(1)] = (11));

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
});})(c__34231__auto___35051,cs,m,dchan,dctr,done))
;
return ((function (switch__34141__auto__,c__34231__auto___35051,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__34142__auto__ = null;
var cljs$core$async$mult_$_state_machine__34142__auto____0 = (function (){
var statearr_35047 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35047[(0)] = cljs$core$async$mult_$_state_machine__34142__auto__);

(statearr_35047[(1)] = (1));

return statearr_35047;
});
var cljs$core$async$mult_$_state_machine__34142__auto____1 = (function (state_34966){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_34966);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e35048){if((e35048 instanceof Object)){
var ex__34145__auto__ = e35048;
var statearr_35049_35106 = state_34966;
(statearr_35049_35106[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34966);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35048;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35107 = state_34966;
state_34966 = G__35107;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__34142__auto__ = function(state_34966){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__34142__auto____1.call(this,state_34966);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__34142__auto____0;
cljs$core$async$mult_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__34142__auto____1;
return cljs$core$async$mult_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___35051,cs,m,dchan,dctr,done))
})();
var state__34233__auto__ = (function (){var statearr_35050 = f__34232__auto__.call(null);
(statearr_35050[(6)] = c__34231__auto___35051);

return statearr_35050;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___35051,cs,m,dchan,dctr,done))
);


return m;
});
/**
 * Copies the mult source onto the supplied channel.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.tap = (function cljs$core$async$tap(var_args){
var G__35109 = arguments.length;
switch (G__35109) {
case 2:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$2 = (function (mult,ch){
return cljs.core.async.tap.call(null,mult,ch,true);
});

cljs.core.async.tap.cljs$core$IFn$_invoke$arity$3 = (function (mult,ch,close_QMARK_){
cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);

return ch;
});

cljs.core.async.tap.cljs$lang$maxFixedArity = 3;

/**
 * Disconnects a target channel from a mult
 */
cljs.core.async.untap = (function cljs$core$async$untap(mult,ch){
return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
 * Disconnects all target channels from a mult
 */
cljs.core.async.untap_all = (function cljs$core$async$untap_all(mult){
return cljs.core.async.untap_all_STAR_.call(null,mult);
});

/**
 * @interface
 */
cljs.core.async.Mix = function(){};

cljs.core.async.admix_STAR_ = (function cljs$core$async$admix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$admix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else {
var x__30756__auto__ = (((m == null))?null:m);
var m__30757__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,m,ch);
} else {
var m__30757__auto____$1 = (cljs.core.async.admix_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
}
});

cljs.core.async.unmix_STAR_ = (function cljs$core$async$unmix_STAR_(m,ch){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else {
var x__30756__auto__ = (((m == null))?null:m);
var m__30757__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,m,ch);
} else {
var m__30757__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,m,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
}
});

cljs.core.async.unmix_all_STAR_ = (function cljs$core$async$unmix_all_STAR_(m){
if((!((m == null))) && (!((m.cljs$core$async$Mix$unmix_all_STAR_$arity$1 == null)))){
return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else {
var x__30756__auto__ = (((m == null))?null:m);
var m__30757__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,m);
} else {
var m__30757__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,m);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
}
});

cljs.core.async.toggle_STAR_ = (function cljs$core$async$toggle_STAR_(m,state_map){
if((!((m == null))) && (!((m.cljs$core$async$Mix$toggle_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else {
var x__30756__auto__ = (((m == null))?null:m);
var m__30757__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,m,state_map);
} else {
var m__30757__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,m,state_map);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
}
});

cljs.core.async.solo_mode_STAR_ = (function cljs$core$async$solo_mode_STAR_(m,mode){
if((!((m == null))) && (!((m.cljs$core$async$Mix$solo_mode_STAR_$arity$2 == null)))){
return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else {
var x__30756__auto__ = (((m == null))?null:m);
var m__30757__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,m,mode);
} else {
var m__30757__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,m,mode);
} else {
throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
}
});

cljs.core.async.ioc_alts_BANG_ = (function cljs$core$async$ioc_alts_BANG_(var_args){
var args__31307__auto__ = [];
var len__31300__auto___35121 = arguments.length;
var i__31301__auto___35122 = (0);
while(true){
if((i__31301__auto___35122 < len__31300__auto___35121)){
args__31307__auto__.push((arguments[i__31301__auto___35122]));

var G__35123 = (i__31301__auto___35122 + (1));
i__31301__auto___35122 = G__35123;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((3) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31308__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__35115){
var map__35116 = p__35115;
var map__35116__$1 = ((((!((map__35116 == null)))?((((map__35116.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__35116.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__35116):map__35116);
var opts = map__35116__$1;
var statearr_35118_35124 = state;
(statearr_35118_35124[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__35116,map__35116__$1,opts){
return (function (val){
var statearr_35119_35125 = state;
(statearr_35119_35125[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__35116,map__35116__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_35120_35126 = state;
(statearr_35120_35126[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq35111){
var G__35112 = cljs.core.first.call(null,seq35111);
var seq35111__$1 = cljs.core.next.call(null,seq35111);
var G__35113 = cljs.core.first.call(null,seq35111__$1);
var seq35111__$2 = cljs.core.next.call(null,seq35111__$1);
var G__35114 = cljs.core.first.call(null,seq35111__$2);
var seq35111__$3 = cljs.core.next.call(null,seq35111__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__35112,G__35113,G__35114,seq35111__$3);
});

/**
 * Creates and returns a mix of one or more input channels which will
 *   be put on the supplied out channel. Input sources can be added to
 *   the mix with 'admix', and removed with 'unmix'. A mix supports
 *   soloing, muting and pausing multiple inputs atomically using
 *   'toggle', and can solo using either muting or pausing as determined
 *   by 'solo-mode'.
 * 
 *   Each channel can have zero or more boolean modes set via 'toggle':
 * 
 *   :solo - when true, only this (ond other soloed) channel(s) will appear
 *        in the mix output channel. :mute and :pause states of soloed
 *        channels are ignored. If solo-mode is :mute, non-soloed
 *        channels are muted, if :pause, non-soloed channels are
 *        paused.
 * 
 *   :mute - muted channels will have their contents consumed but not included in the mix
 *   :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
 */
cljs.core.async.mix = (function cljs$core$async$mix(out){
var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);
var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));
var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));
var change = cljs.core.async.chan.call(null);
var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){
return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;
var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){
return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){
if(cljs.core.truth_(attr.call(null,v))){
return cljs.core.conj.call(null,ret,c);
} else {
return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;
var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){
var chs = cljs.core.deref.call(null,cs);
var mode = cljs.core.deref.call(null,solo_mode);
var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);
var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);
return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;
var m = (function (){
if(typeof cljs.core.async.t_cljs$core$async35127 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35127 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta35128){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta35128 = meta35128;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35129,meta35128__$1){
var self__ = this;
var _35129__$1 = this;
return (new cljs.core.async.t_cljs$core$async35127(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta35128__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_35129){
var self__ = this;
var _35129__$1 = this;
return self__.meta35128;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35127.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.solo_modes.call(null,mode))){
} else {
throw (new Error(["Assert failed: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(["mode must be one of: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)].join('')),"\n","(solo-modes mode)"].join('')));
}

cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35127.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta35128","meta35128",-1460929335,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async35127.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35127.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35127";

cljs.core.async.t_cljs$core$async35127.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async35127");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async35127 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async35127(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35128){
return (new cljs.core.async.t_cljs$core$async35127(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta35128));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async35127(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34231__auto___35291 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_35231){
var state_val_35232 = (state_35231[(1)]);
if((state_val_35232 === (7))){
var inst_35146 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35233_35292 = state_35231__$1;
(statearr_35233_35292[(2)] = inst_35146);

(statearr_35233_35292[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (20))){
var inst_35158 = (state_35231[(7)]);
var state_35231__$1 = state_35231;
var statearr_35234_35293 = state_35231__$1;
(statearr_35234_35293[(2)] = inst_35158);

(statearr_35234_35293[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (27))){
var state_35231__$1 = state_35231;
var statearr_35235_35294 = state_35231__$1;
(statearr_35235_35294[(2)] = null);

(statearr_35235_35294[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (1))){
var inst_35133 = (state_35231[(8)]);
var inst_35133__$1 = calc_state.call(null);
var inst_35135 = (inst_35133__$1 == null);
var inst_35136 = cljs.core.not.call(null,inst_35135);
var state_35231__$1 = (function (){var statearr_35236 = state_35231;
(statearr_35236[(8)] = inst_35133__$1);

return statearr_35236;
})();
if(inst_35136){
var statearr_35237_35295 = state_35231__$1;
(statearr_35237_35295[(1)] = (2));

} else {
var statearr_35238_35296 = state_35231__$1;
(statearr_35238_35296[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (24))){
var inst_35205 = (state_35231[(9)]);
var inst_35191 = (state_35231[(10)]);
var inst_35182 = (state_35231[(11)]);
var inst_35205__$1 = inst_35182.call(null,inst_35191);
var state_35231__$1 = (function (){var statearr_35239 = state_35231;
(statearr_35239[(9)] = inst_35205__$1);

return statearr_35239;
})();
if(cljs.core.truth_(inst_35205__$1)){
var statearr_35240_35297 = state_35231__$1;
(statearr_35240_35297[(1)] = (29));

} else {
var statearr_35241_35298 = state_35231__$1;
(statearr_35241_35298[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (4))){
var inst_35149 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
if(cljs.core.truth_(inst_35149)){
var statearr_35242_35299 = state_35231__$1;
(statearr_35242_35299[(1)] = (8));

} else {
var statearr_35243_35300 = state_35231__$1;
(statearr_35243_35300[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (15))){
var inst_35176 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
if(cljs.core.truth_(inst_35176)){
var statearr_35244_35301 = state_35231__$1;
(statearr_35244_35301[(1)] = (19));

} else {
var statearr_35245_35302 = state_35231__$1;
(statearr_35245_35302[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (21))){
var inst_35181 = (state_35231[(12)]);
var inst_35181__$1 = (state_35231[(2)]);
var inst_35182 = cljs.core.get.call(null,inst_35181__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35183 = cljs.core.get.call(null,inst_35181__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35184 = cljs.core.get.call(null,inst_35181__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_35231__$1 = (function (){var statearr_35246 = state_35231;
(statearr_35246[(12)] = inst_35181__$1);

(statearr_35246[(11)] = inst_35182);

(statearr_35246[(13)] = inst_35183);

return statearr_35246;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_35231__$1,(22),inst_35184);
} else {
if((state_val_35232 === (31))){
var inst_35213 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
if(cljs.core.truth_(inst_35213)){
var statearr_35247_35303 = state_35231__$1;
(statearr_35247_35303[(1)] = (32));

} else {
var statearr_35248_35304 = state_35231__$1;
(statearr_35248_35304[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (32))){
var inst_35190 = (state_35231[(14)]);
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35231__$1,(35),out,inst_35190);
} else {
if((state_val_35232 === (33))){
var inst_35181 = (state_35231[(12)]);
var inst_35158 = inst_35181;
var state_35231__$1 = (function (){var statearr_35249 = state_35231;
(statearr_35249[(7)] = inst_35158);

return statearr_35249;
})();
var statearr_35250_35305 = state_35231__$1;
(statearr_35250_35305[(2)] = null);

(statearr_35250_35305[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (13))){
var inst_35158 = (state_35231[(7)]);
var inst_35165 = inst_35158.cljs$lang$protocol_mask$partition0$;
var inst_35166 = (inst_35165 & (64));
var inst_35167 = inst_35158.cljs$core$ISeq$;
var inst_35168 = (cljs.core.PROTOCOL_SENTINEL === inst_35167);
var inst_35169 = (inst_35166) || (inst_35168);
var state_35231__$1 = state_35231;
if(cljs.core.truth_(inst_35169)){
var statearr_35251_35306 = state_35231__$1;
(statearr_35251_35306[(1)] = (16));

} else {
var statearr_35252_35307 = state_35231__$1;
(statearr_35252_35307[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (22))){
var inst_35190 = (state_35231[(14)]);
var inst_35191 = (state_35231[(10)]);
var inst_35189 = (state_35231[(2)]);
var inst_35190__$1 = cljs.core.nth.call(null,inst_35189,(0),null);
var inst_35191__$1 = cljs.core.nth.call(null,inst_35189,(1),null);
var inst_35192 = (inst_35190__$1 == null);
var inst_35193 = cljs.core._EQ_.call(null,inst_35191__$1,change);
var inst_35194 = (inst_35192) || (inst_35193);
var state_35231__$1 = (function (){var statearr_35253 = state_35231;
(statearr_35253[(14)] = inst_35190__$1);

(statearr_35253[(10)] = inst_35191__$1);

return statearr_35253;
})();
if(cljs.core.truth_(inst_35194)){
var statearr_35254_35308 = state_35231__$1;
(statearr_35254_35308[(1)] = (23));

} else {
var statearr_35255_35309 = state_35231__$1;
(statearr_35255_35309[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (36))){
var inst_35181 = (state_35231[(12)]);
var inst_35158 = inst_35181;
var state_35231__$1 = (function (){var statearr_35256 = state_35231;
(statearr_35256[(7)] = inst_35158);

return statearr_35256;
})();
var statearr_35257_35310 = state_35231__$1;
(statearr_35257_35310[(2)] = null);

(statearr_35257_35310[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (29))){
var inst_35205 = (state_35231[(9)]);
var state_35231__$1 = state_35231;
var statearr_35258_35311 = state_35231__$1;
(statearr_35258_35311[(2)] = inst_35205);

(statearr_35258_35311[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (6))){
var state_35231__$1 = state_35231;
var statearr_35259_35312 = state_35231__$1;
(statearr_35259_35312[(2)] = false);

(statearr_35259_35312[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (28))){
var inst_35201 = (state_35231[(2)]);
var inst_35202 = calc_state.call(null);
var inst_35158 = inst_35202;
var state_35231__$1 = (function (){var statearr_35260 = state_35231;
(statearr_35260[(15)] = inst_35201);

(statearr_35260[(7)] = inst_35158);

return statearr_35260;
})();
var statearr_35261_35313 = state_35231__$1;
(statearr_35261_35313[(2)] = null);

(statearr_35261_35313[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (25))){
var inst_35227 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35262_35314 = state_35231__$1;
(statearr_35262_35314[(2)] = inst_35227);

(statearr_35262_35314[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (34))){
var inst_35225 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35263_35315 = state_35231__$1;
(statearr_35263_35315[(2)] = inst_35225);

(statearr_35263_35315[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (17))){
var state_35231__$1 = state_35231;
var statearr_35264_35316 = state_35231__$1;
(statearr_35264_35316[(2)] = false);

(statearr_35264_35316[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (3))){
var state_35231__$1 = state_35231;
var statearr_35265_35317 = state_35231__$1;
(statearr_35265_35317[(2)] = false);

(statearr_35265_35317[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (12))){
var inst_35229 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35231__$1,inst_35229);
} else {
if((state_val_35232 === (2))){
var inst_35133 = (state_35231[(8)]);
var inst_35138 = inst_35133.cljs$lang$protocol_mask$partition0$;
var inst_35139 = (inst_35138 & (64));
var inst_35140 = inst_35133.cljs$core$ISeq$;
var inst_35141 = (cljs.core.PROTOCOL_SENTINEL === inst_35140);
var inst_35142 = (inst_35139) || (inst_35141);
var state_35231__$1 = state_35231;
if(cljs.core.truth_(inst_35142)){
var statearr_35266_35318 = state_35231__$1;
(statearr_35266_35318[(1)] = (5));

} else {
var statearr_35267_35319 = state_35231__$1;
(statearr_35267_35319[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (23))){
var inst_35190 = (state_35231[(14)]);
var inst_35196 = (inst_35190 == null);
var state_35231__$1 = state_35231;
if(cljs.core.truth_(inst_35196)){
var statearr_35268_35320 = state_35231__$1;
(statearr_35268_35320[(1)] = (26));

} else {
var statearr_35269_35321 = state_35231__$1;
(statearr_35269_35321[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (35))){
var inst_35216 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
if(cljs.core.truth_(inst_35216)){
var statearr_35270_35322 = state_35231__$1;
(statearr_35270_35322[(1)] = (36));

} else {
var statearr_35271_35323 = state_35231__$1;
(statearr_35271_35323[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (19))){
var inst_35158 = (state_35231[(7)]);
var inst_35178 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35158);
var state_35231__$1 = state_35231;
var statearr_35272_35324 = state_35231__$1;
(statearr_35272_35324[(2)] = inst_35178);

(statearr_35272_35324[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (11))){
var inst_35158 = (state_35231[(7)]);
var inst_35162 = (inst_35158 == null);
var inst_35163 = cljs.core.not.call(null,inst_35162);
var state_35231__$1 = state_35231;
if(inst_35163){
var statearr_35273_35325 = state_35231__$1;
(statearr_35273_35325[(1)] = (13));

} else {
var statearr_35274_35326 = state_35231__$1;
(statearr_35274_35326[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (9))){
var inst_35133 = (state_35231[(8)]);
var state_35231__$1 = state_35231;
var statearr_35275_35327 = state_35231__$1;
(statearr_35275_35327[(2)] = inst_35133);

(statearr_35275_35327[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (5))){
var state_35231__$1 = state_35231;
var statearr_35276_35328 = state_35231__$1;
(statearr_35276_35328[(2)] = true);

(statearr_35276_35328[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (14))){
var state_35231__$1 = state_35231;
var statearr_35277_35329 = state_35231__$1;
(statearr_35277_35329[(2)] = false);

(statearr_35277_35329[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (26))){
var inst_35191 = (state_35231[(10)]);
var inst_35198 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_35191);
var state_35231__$1 = state_35231;
var statearr_35278_35330 = state_35231__$1;
(statearr_35278_35330[(2)] = inst_35198);

(statearr_35278_35330[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (16))){
var state_35231__$1 = state_35231;
var statearr_35279_35331 = state_35231__$1;
(statearr_35279_35331[(2)] = true);

(statearr_35279_35331[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (38))){
var inst_35221 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35280_35332 = state_35231__$1;
(statearr_35280_35332[(2)] = inst_35221);

(statearr_35280_35332[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (30))){
var inst_35191 = (state_35231[(10)]);
var inst_35182 = (state_35231[(11)]);
var inst_35183 = (state_35231[(13)]);
var inst_35208 = cljs.core.empty_QMARK_.call(null,inst_35182);
var inst_35209 = inst_35183.call(null,inst_35191);
var inst_35210 = cljs.core.not.call(null,inst_35209);
var inst_35211 = (inst_35208) && (inst_35210);
var state_35231__$1 = state_35231;
var statearr_35281_35333 = state_35231__$1;
(statearr_35281_35333[(2)] = inst_35211);

(statearr_35281_35333[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (10))){
var inst_35133 = (state_35231[(8)]);
var inst_35154 = (state_35231[(2)]);
var inst_35155 = cljs.core.get.call(null,inst_35154,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_35156 = cljs.core.get.call(null,inst_35154,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_35157 = cljs.core.get.call(null,inst_35154,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_35158 = inst_35133;
var state_35231__$1 = (function (){var statearr_35282 = state_35231;
(statearr_35282[(16)] = inst_35155);

(statearr_35282[(17)] = inst_35157);

(statearr_35282[(18)] = inst_35156);

(statearr_35282[(7)] = inst_35158);

return statearr_35282;
})();
var statearr_35283_35334 = state_35231__$1;
(statearr_35283_35334[(2)] = null);

(statearr_35283_35334[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (18))){
var inst_35173 = (state_35231[(2)]);
var state_35231__$1 = state_35231;
var statearr_35284_35335 = state_35231__$1;
(statearr_35284_35335[(2)] = inst_35173);

(statearr_35284_35335[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (37))){
var state_35231__$1 = state_35231;
var statearr_35285_35336 = state_35231__$1;
(statearr_35285_35336[(2)] = null);

(statearr_35285_35336[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35232 === (8))){
var inst_35133 = (state_35231[(8)]);
var inst_35151 = cljs.core.apply.call(null,cljs.core.hash_map,inst_35133);
var state_35231__$1 = state_35231;
var statearr_35286_35337 = state_35231__$1;
(statearr_35286_35337[(2)] = inst_35151);

(statearr_35286_35337[(1)] = (10));


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
});})(c__34231__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__34141__auto__,c__34231__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__34142__auto__ = null;
var cljs$core$async$mix_$_state_machine__34142__auto____0 = (function (){
var statearr_35287 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35287[(0)] = cljs$core$async$mix_$_state_machine__34142__auto__);

(statearr_35287[(1)] = (1));

return statearr_35287;
});
var cljs$core$async$mix_$_state_machine__34142__auto____1 = (function (state_35231){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_35231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e35288){if((e35288 instanceof Object)){
var ex__34145__auto__ = e35288;
var statearr_35289_35338 = state_35231;
(statearr_35289_35338[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35288;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35339 = state_35231;
state_35231 = G__35339;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__34142__auto__ = function(state_35231){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__34142__auto____1.call(this,state_35231);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__34142__auto____0;
cljs$core$async$mix_$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__34142__auto____1;
return cljs$core$async$mix_$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__34233__auto__ = (function (){var statearr_35290 = f__34232__auto__.call(null);
(statearr_35290[(6)] = c__34231__auto___35291);

return statearr_35290;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___35291,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);


return m;
});
/**
 * Adds ch as an input to the mix
 */
cljs.core.async.admix = (function cljs$core$async$admix(mix,ch){
return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
 * Removes ch as an input to the mix
 */
cljs.core.async.unmix = (function cljs$core$async$unmix(mix,ch){
return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
 * removes all inputs from the mix
 */
cljs.core.async.unmix_all = (function cljs$core$async$unmix_all(mix){
return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
 * Atomically sets the state(s) of one or more channels in a mix. The
 *   state map is a map of channels -> channel-state-map. A
 *   channel-state-map is a map of attrs -> boolean, where attr is one or
 *   more of :mute, :pause or :solo. Any states supplied are merged with
 *   the current state.
 * 
 *   Note that channels can be added to a mix via toggle, which can be
 *   used to add channels in a particular (e.g. paused) state.
 */
cljs.core.async.toggle = (function cljs$core$async$toggle(mix,state_map){
return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
 * Sets the solo mode of the mix. mode must be one of :mute or :pause
 */
cljs.core.async.solo_mode = (function cljs$core$async$solo_mode(mix,mode){
return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});

/**
 * @interface
 */
cljs.core.async.Pub = function(){};

cljs.core.async.sub_STAR_ = (function cljs$core$async$sub_STAR_(p,v,ch,close_QMARK_){
if((!((p == null))) && (!((p.cljs$core$async$Pub$sub_STAR_$arity$4 == null)))){
return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else {
var x__30756__auto__ = (((p == null))?null:p);
var m__30757__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,p,v,ch,close_QMARK_);
} else {
var m__30757__auto____$1 = (cljs.core.async.sub_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,p,v,ch,close_QMARK_);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
}
});

cljs.core.async.unsub_STAR_ = (function cljs$core$async$unsub_STAR_(p,v,ch){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_STAR_$arity$3 == null)))){
return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else {
var x__30756__auto__ = (((p == null))?null:p);
var m__30757__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,p,v,ch);
} else {
var m__30757__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,p,v,ch);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_ = (function cljs$core$async$unsub_all_STAR_(var_args){
var G__35341 = arguments.length;
switch (G__35341) {
case 1:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = (function (p){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$1 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else {
var x__30756__auto__ = (((p == null))?null:p);
var m__30757__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,p);
} else {
var m__30757__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,p);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = (function (p,v){
if((!((p == null))) && (!((p.cljs$core$async$Pub$unsub_all_STAR_$arity$2 == null)))){
return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else {
var x__30756__auto__ = (((p == null))?null:p);
var m__30757__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__30756__auto__)]);
if(!((m__30757__auto__ == null))){
return m__30757__auto__.call(null,p,v);
} else {
var m__30757__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);
if(!((m__30757__auto____$1 == null))){
return m__30757__auto____$1.call(null,p,v);
} else {
throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
}
});

cljs.core.async.unsub_all_STAR_.cljs$lang$maxFixedArity = 2;


/**
 * Creates and returns a pub(lication) of the supplied channel,
 *   partitioned into topics by the topic-fn. topic-fn will be applied to
 *   each value on the channel and the result will determine the 'topic'
 *   on which that value will be put. Channels can be subscribed to
 *   receive copies of topics using 'sub', and unsubscribed using
 *   'unsub'. Each topic will be handled by an internal mult on a
 *   dedicated channel. By default these internal channels are
 *   unbuffered, but a buf-fn can be supplied which, given a topic,
 *   creates a buffer with desired properties.
 * 
 *   Each item is distributed to all subs in parallel and synchronously,
 *   i.e. each sub must accept before the next item is distributed. Use
 *   buffering/windowing to prevent slow subs from holding up the pub.
 * 
 *   Items received when there are no matching subs get dropped.
 * 
 *   Note that if buf-fns are used then each topic is handled
 *   asynchronously, i.e. if a channel is subscribed to more than one
 *   topic it should not expect them to be interleaved identically with
 *   the source.
 */
cljs.core.async.pub = (function cljs$core$async$pub(var_args){
var G__35345 = arguments.length;
switch (G__35345) {
case 2:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$2 = (function (ch,topic_fn){
return cljs.core.async.pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});

cljs.core.async.pub.cljs$core$IFn$_invoke$arity$3 = (function (ch,topic_fn,buf_fn){
var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);
var ensure_mult = ((function (mults){
return (function (topic){
var or__30023__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);
if(cljs.core.truth_(or__30023__auto__)){
return or__30023__auto__;
} else {
return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__30023__auto__,mults){
return (function (p1__35343_SHARP_){
if(cljs.core.truth_(p1__35343_SHARP_.call(null,topic))){
return p1__35343_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__35343_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30023__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async35346 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35346 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta35347){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta35347 = meta35347;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35346.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_35348,meta35347__$1){
var self__ = this;
var _35348__$1 = this;
return (new cljs.core.async.t_cljs$core$async35346(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta35347__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35346.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_35348){
var self__ = this;
var _35348__$1 = this;
return self__.meta35347;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35346.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35346.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35346.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35346.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35346.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1){
var self__ = this;
var p__$1 = this;
var temp__5457__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);
if(cljs.core.truth_(temp__5457__auto__)){
var m = temp__5457__auto__;
return cljs.core.async.untap.call(null,m,ch__$1);
} else {
return null;
}
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35346.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35346.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta35347","meta35347",88857318,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async35346.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35346.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35346";

cljs.core.async.t_cljs$core$async35346.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async35346");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async35346 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async35346(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35347){
return (new cljs.core.async.t_cljs$core$async35346(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta35347));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async35346(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__34231__auto___35466 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___35466,mults,ensure_mult,p){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___35466,mults,ensure_mult,p){
return (function (state_35420){
var state_val_35421 = (state_35420[(1)]);
if((state_val_35421 === (7))){
var inst_35416 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35422_35467 = state_35420__$1;
(statearr_35422_35467[(2)] = inst_35416);

(statearr_35422_35467[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (20))){
var state_35420__$1 = state_35420;
var statearr_35423_35468 = state_35420__$1;
(statearr_35423_35468[(2)] = null);

(statearr_35423_35468[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (1))){
var state_35420__$1 = state_35420;
var statearr_35424_35469 = state_35420__$1;
(statearr_35424_35469[(2)] = null);

(statearr_35424_35469[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (24))){
var inst_35399 = (state_35420[(7)]);
var inst_35408 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_35399);
var state_35420__$1 = state_35420;
var statearr_35425_35470 = state_35420__$1;
(statearr_35425_35470[(2)] = inst_35408);

(statearr_35425_35470[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (4))){
var inst_35351 = (state_35420[(8)]);
var inst_35351__$1 = (state_35420[(2)]);
var inst_35352 = (inst_35351__$1 == null);
var state_35420__$1 = (function (){var statearr_35426 = state_35420;
(statearr_35426[(8)] = inst_35351__$1);

return statearr_35426;
})();
if(cljs.core.truth_(inst_35352)){
var statearr_35427_35471 = state_35420__$1;
(statearr_35427_35471[(1)] = (5));

} else {
var statearr_35428_35472 = state_35420__$1;
(statearr_35428_35472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (15))){
var inst_35393 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35429_35473 = state_35420__$1;
(statearr_35429_35473[(2)] = inst_35393);

(statearr_35429_35473[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (21))){
var inst_35413 = (state_35420[(2)]);
var state_35420__$1 = (function (){var statearr_35430 = state_35420;
(statearr_35430[(9)] = inst_35413);

return statearr_35430;
})();
var statearr_35431_35474 = state_35420__$1;
(statearr_35431_35474[(2)] = null);

(statearr_35431_35474[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (13))){
var inst_35375 = (state_35420[(10)]);
var inst_35377 = cljs.core.chunked_seq_QMARK_.call(null,inst_35375);
var state_35420__$1 = state_35420;
if(inst_35377){
var statearr_35432_35475 = state_35420__$1;
(statearr_35432_35475[(1)] = (16));

} else {
var statearr_35433_35476 = state_35420__$1;
(statearr_35433_35476[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (22))){
var inst_35405 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
if(cljs.core.truth_(inst_35405)){
var statearr_35434_35477 = state_35420__$1;
(statearr_35434_35477[(1)] = (23));

} else {
var statearr_35435_35478 = state_35420__$1;
(statearr_35435_35478[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (6))){
var inst_35401 = (state_35420[(11)]);
var inst_35399 = (state_35420[(7)]);
var inst_35351 = (state_35420[(8)]);
var inst_35399__$1 = topic_fn.call(null,inst_35351);
var inst_35400 = cljs.core.deref.call(null,mults);
var inst_35401__$1 = cljs.core.get.call(null,inst_35400,inst_35399__$1);
var state_35420__$1 = (function (){var statearr_35436 = state_35420;
(statearr_35436[(11)] = inst_35401__$1);

(statearr_35436[(7)] = inst_35399__$1);

return statearr_35436;
})();
if(cljs.core.truth_(inst_35401__$1)){
var statearr_35437_35479 = state_35420__$1;
(statearr_35437_35479[(1)] = (19));

} else {
var statearr_35438_35480 = state_35420__$1;
(statearr_35438_35480[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (25))){
var inst_35410 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35439_35481 = state_35420__$1;
(statearr_35439_35481[(2)] = inst_35410);

(statearr_35439_35481[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (17))){
var inst_35375 = (state_35420[(10)]);
var inst_35384 = cljs.core.first.call(null,inst_35375);
var inst_35385 = cljs.core.async.muxch_STAR_.call(null,inst_35384);
var inst_35386 = cljs.core.async.close_BANG_.call(null,inst_35385);
var inst_35387 = cljs.core.next.call(null,inst_35375);
var inst_35361 = inst_35387;
var inst_35362 = null;
var inst_35363 = (0);
var inst_35364 = (0);
var state_35420__$1 = (function (){var statearr_35440 = state_35420;
(statearr_35440[(12)] = inst_35362);

(statearr_35440[(13)] = inst_35364);

(statearr_35440[(14)] = inst_35361);

(statearr_35440[(15)] = inst_35386);

(statearr_35440[(16)] = inst_35363);

return statearr_35440;
})();
var statearr_35441_35482 = state_35420__$1;
(statearr_35441_35482[(2)] = null);

(statearr_35441_35482[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (3))){
var inst_35418 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35420__$1,inst_35418);
} else {
if((state_val_35421 === (12))){
var inst_35395 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35442_35483 = state_35420__$1;
(statearr_35442_35483[(2)] = inst_35395);

(statearr_35442_35483[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (2))){
var state_35420__$1 = state_35420;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35420__$1,(4),ch);
} else {
if((state_val_35421 === (23))){
var state_35420__$1 = state_35420;
var statearr_35443_35484 = state_35420__$1;
(statearr_35443_35484[(2)] = null);

(statearr_35443_35484[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (19))){
var inst_35401 = (state_35420[(11)]);
var inst_35351 = (state_35420[(8)]);
var inst_35403 = cljs.core.async.muxch_STAR_.call(null,inst_35401);
var state_35420__$1 = state_35420;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35420__$1,(22),inst_35403,inst_35351);
} else {
if((state_val_35421 === (11))){
var inst_35375 = (state_35420[(10)]);
var inst_35361 = (state_35420[(14)]);
var inst_35375__$1 = cljs.core.seq.call(null,inst_35361);
var state_35420__$1 = (function (){var statearr_35444 = state_35420;
(statearr_35444[(10)] = inst_35375__$1);

return statearr_35444;
})();
if(inst_35375__$1){
var statearr_35445_35485 = state_35420__$1;
(statearr_35445_35485[(1)] = (13));

} else {
var statearr_35446_35486 = state_35420__$1;
(statearr_35446_35486[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (9))){
var inst_35397 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35447_35487 = state_35420__$1;
(statearr_35447_35487[(2)] = inst_35397);

(statearr_35447_35487[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (5))){
var inst_35358 = cljs.core.deref.call(null,mults);
var inst_35359 = cljs.core.vals.call(null,inst_35358);
var inst_35360 = cljs.core.seq.call(null,inst_35359);
var inst_35361 = inst_35360;
var inst_35362 = null;
var inst_35363 = (0);
var inst_35364 = (0);
var state_35420__$1 = (function (){var statearr_35448 = state_35420;
(statearr_35448[(12)] = inst_35362);

(statearr_35448[(13)] = inst_35364);

(statearr_35448[(14)] = inst_35361);

(statearr_35448[(16)] = inst_35363);

return statearr_35448;
})();
var statearr_35449_35488 = state_35420__$1;
(statearr_35449_35488[(2)] = null);

(statearr_35449_35488[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (14))){
var state_35420__$1 = state_35420;
var statearr_35453_35489 = state_35420__$1;
(statearr_35453_35489[(2)] = null);

(statearr_35453_35489[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (16))){
var inst_35375 = (state_35420[(10)]);
var inst_35379 = cljs.core.chunk_first.call(null,inst_35375);
var inst_35380 = cljs.core.chunk_rest.call(null,inst_35375);
var inst_35381 = cljs.core.count.call(null,inst_35379);
var inst_35361 = inst_35380;
var inst_35362 = inst_35379;
var inst_35363 = inst_35381;
var inst_35364 = (0);
var state_35420__$1 = (function (){var statearr_35454 = state_35420;
(statearr_35454[(12)] = inst_35362);

(statearr_35454[(13)] = inst_35364);

(statearr_35454[(14)] = inst_35361);

(statearr_35454[(16)] = inst_35363);

return statearr_35454;
})();
var statearr_35455_35490 = state_35420__$1;
(statearr_35455_35490[(2)] = null);

(statearr_35455_35490[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (10))){
var inst_35362 = (state_35420[(12)]);
var inst_35364 = (state_35420[(13)]);
var inst_35361 = (state_35420[(14)]);
var inst_35363 = (state_35420[(16)]);
var inst_35369 = cljs.core._nth.call(null,inst_35362,inst_35364);
var inst_35370 = cljs.core.async.muxch_STAR_.call(null,inst_35369);
var inst_35371 = cljs.core.async.close_BANG_.call(null,inst_35370);
var inst_35372 = (inst_35364 + (1));
var tmp35450 = inst_35362;
var tmp35451 = inst_35361;
var tmp35452 = inst_35363;
var inst_35361__$1 = tmp35451;
var inst_35362__$1 = tmp35450;
var inst_35363__$1 = tmp35452;
var inst_35364__$1 = inst_35372;
var state_35420__$1 = (function (){var statearr_35456 = state_35420;
(statearr_35456[(12)] = inst_35362__$1);

(statearr_35456[(17)] = inst_35371);

(statearr_35456[(13)] = inst_35364__$1);

(statearr_35456[(14)] = inst_35361__$1);

(statearr_35456[(16)] = inst_35363__$1);

return statearr_35456;
})();
var statearr_35457_35491 = state_35420__$1;
(statearr_35457_35491[(2)] = null);

(statearr_35457_35491[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (18))){
var inst_35390 = (state_35420[(2)]);
var state_35420__$1 = state_35420;
var statearr_35458_35492 = state_35420__$1;
(statearr_35458_35492[(2)] = inst_35390);

(statearr_35458_35492[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35421 === (8))){
var inst_35364 = (state_35420[(13)]);
var inst_35363 = (state_35420[(16)]);
var inst_35366 = (inst_35364 < inst_35363);
var inst_35367 = inst_35366;
var state_35420__$1 = state_35420;
if(cljs.core.truth_(inst_35367)){
var statearr_35459_35493 = state_35420__$1;
(statearr_35459_35493[(1)] = (10));

} else {
var statearr_35460_35494 = state_35420__$1;
(statearr_35460_35494[(1)] = (11));

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
}
}
}
}
}
}
}
}
});})(c__34231__auto___35466,mults,ensure_mult,p))
;
return ((function (switch__34141__auto__,c__34231__auto___35466,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_35461 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35461[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_35461[(1)] = (1));

return statearr_35461;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_35420){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_35420);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e35462){if((e35462 instanceof Object)){
var ex__34145__auto__ = e35462;
var statearr_35463_35495 = state_35420;
(statearr_35463_35495[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35420);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35462;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35496 = state_35420;
state_35420 = G__35496;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_35420){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_35420);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___35466,mults,ensure_mult,p))
})();
var state__34233__auto__ = (function (){var statearr_35464 = f__34232__auto__.call(null);
(statearr_35464[(6)] = c__34231__auto___35466);

return statearr_35464;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___35466,mults,ensure_mult,p))
);


return p;
});

cljs.core.async.pub.cljs$lang$maxFixedArity = 3;

/**
 * Subscribes a channel to a topic of a pub.
 * 
 *   By default the channel will be closed when the source closes,
 *   but can be determined by the close? parameter.
 */
cljs.core.async.sub = (function cljs$core$async$sub(var_args){
var G__35498 = arguments.length;
switch (G__35498) {
case 3:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
case 4:
return cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),(arguments[(3)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$3 = (function (p,topic,ch){
return cljs.core.async.sub.call(null,p,topic,ch,true);
});

cljs.core.async.sub.cljs$core$IFn$_invoke$arity$4 = (function (p,topic,ch,close_QMARK_){
return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});

cljs.core.async.sub.cljs$lang$maxFixedArity = 4;

/**
 * Unsubscribes a channel from a topic of a pub
 */
cljs.core.async.unsub = (function cljs$core$async$unsub(p,topic,ch){
return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
 * Unsubscribes all channels from a pub, or a topic of a pub
 */
cljs.core.async.unsub_all = (function cljs$core$async$unsub_all(var_args){
var G__35501 = arguments.length;
switch (G__35501) {
case 1:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$1 = (function (p){
return cljs.core.async.unsub_all_STAR_.call(null,p);
});

cljs.core.async.unsub_all.cljs$core$IFn$_invoke$arity$2 = (function (p,topic){
return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});

cljs.core.async.unsub_all.cljs$lang$maxFixedArity = 2;

/**
 * Takes a function and a collection of source channels, and returns a
 *   channel which contains the values produced by applying f to the set
 *   of first items taken from each source channel, followed by applying
 *   f to the set of second items from each channel, until any one of the
 *   channels is closed, at which point the output channel will be
 *   closed. The returned channel will be unbuffered by default, or a
 *   buf-or-n can be supplied
 */
cljs.core.async.map = (function cljs$core$async$map(var_args){
var G__35504 = arguments.length;
switch (G__35504) {
case 2:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.map.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$2 = (function (f,chs){
return cljs.core.async.map.call(null,f,chs,null);
});

cljs.core.async.map.cljs$core$IFn$_invoke$arity$3 = (function (f,chs,buf_or_n){
var chs__$1 = cljs.core.vec.call(null,chs);
var out = cljs.core.async.chan.call(null,buf_or_n);
var cnt = cljs.core.count.call(null,chs__$1);
var rets = cljs.core.object_array.call(null,cnt);
var dchan = cljs.core.async.chan.call(null,(1));
var dctr = cljs.core.atom.call(null,null);
var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){
return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){
(rets[i] = ret);

if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0))){
return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else {
return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));
var c__34231__auto___35571 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___35571,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___35571,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_35543){
var state_val_35544 = (state_35543[(1)]);
if((state_val_35544 === (7))){
var state_35543__$1 = state_35543;
var statearr_35545_35572 = state_35543__$1;
(statearr_35545_35572[(2)] = null);

(statearr_35545_35572[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (1))){
var state_35543__$1 = state_35543;
var statearr_35546_35573 = state_35543__$1;
(statearr_35546_35573[(2)] = null);

(statearr_35546_35573[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (4))){
var inst_35507 = (state_35543[(7)]);
var inst_35509 = (inst_35507 < cnt);
var state_35543__$1 = state_35543;
if(cljs.core.truth_(inst_35509)){
var statearr_35547_35574 = state_35543__$1;
(statearr_35547_35574[(1)] = (6));

} else {
var statearr_35548_35575 = state_35543__$1;
(statearr_35548_35575[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (15))){
var inst_35539 = (state_35543[(2)]);
var state_35543__$1 = state_35543;
var statearr_35549_35576 = state_35543__$1;
(statearr_35549_35576[(2)] = inst_35539);

(statearr_35549_35576[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (13))){
var inst_35532 = cljs.core.async.close_BANG_.call(null,out);
var state_35543__$1 = state_35543;
var statearr_35550_35577 = state_35543__$1;
(statearr_35550_35577[(2)] = inst_35532);

(statearr_35550_35577[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (6))){
var state_35543__$1 = state_35543;
var statearr_35551_35578 = state_35543__$1;
(statearr_35551_35578[(2)] = null);

(statearr_35551_35578[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (3))){
var inst_35541 = (state_35543[(2)]);
var state_35543__$1 = state_35543;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35543__$1,inst_35541);
} else {
if((state_val_35544 === (12))){
var inst_35529 = (state_35543[(8)]);
var inst_35529__$1 = (state_35543[(2)]);
var inst_35530 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_35529__$1);
var state_35543__$1 = (function (){var statearr_35552 = state_35543;
(statearr_35552[(8)] = inst_35529__$1);

return statearr_35552;
})();
if(cljs.core.truth_(inst_35530)){
var statearr_35553_35579 = state_35543__$1;
(statearr_35553_35579[(1)] = (13));

} else {
var statearr_35554_35580 = state_35543__$1;
(statearr_35554_35580[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (2))){
var inst_35506 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_35507 = (0);
var state_35543__$1 = (function (){var statearr_35555 = state_35543;
(statearr_35555[(7)] = inst_35507);

(statearr_35555[(9)] = inst_35506);

return statearr_35555;
})();
var statearr_35556_35581 = state_35543__$1;
(statearr_35556_35581[(2)] = null);

(statearr_35556_35581[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (11))){
var inst_35507 = (state_35543[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_35543,(10),Object,null,(9));
var inst_35516 = chs__$1.call(null,inst_35507);
var inst_35517 = done.call(null,inst_35507);
var inst_35518 = cljs.core.async.take_BANG_.call(null,inst_35516,inst_35517);
var state_35543__$1 = state_35543;
var statearr_35557_35582 = state_35543__$1;
(statearr_35557_35582[(2)] = inst_35518);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35543__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (9))){
var inst_35507 = (state_35543[(7)]);
var inst_35520 = (state_35543[(2)]);
var inst_35521 = (inst_35507 + (1));
var inst_35507__$1 = inst_35521;
var state_35543__$1 = (function (){var statearr_35558 = state_35543;
(statearr_35558[(7)] = inst_35507__$1);

(statearr_35558[(10)] = inst_35520);

return statearr_35558;
})();
var statearr_35559_35583 = state_35543__$1;
(statearr_35559_35583[(2)] = null);

(statearr_35559_35583[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (5))){
var inst_35527 = (state_35543[(2)]);
var state_35543__$1 = (function (){var statearr_35560 = state_35543;
(statearr_35560[(11)] = inst_35527);

return statearr_35560;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35543__$1,(12),dchan);
} else {
if((state_val_35544 === (14))){
var inst_35529 = (state_35543[(8)]);
var inst_35534 = cljs.core.apply.call(null,f,inst_35529);
var state_35543__$1 = state_35543;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35543__$1,(16),out,inst_35534);
} else {
if((state_val_35544 === (16))){
var inst_35536 = (state_35543[(2)]);
var state_35543__$1 = (function (){var statearr_35561 = state_35543;
(statearr_35561[(12)] = inst_35536);

return statearr_35561;
})();
var statearr_35562_35584 = state_35543__$1;
(statearr_35562_35584[(2)] = null);

(statearr_35562_35584[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (10))){
var inst_35511 = (state_35543[(2)]);
var inst_35512 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_35543__$1 = (function (){var statearr_35563 = state_35543;
(statearr_35563[(13)] = inst_35511);

return statearr_35563;
})();
var statearr_35564_35585 = state_35543__$1;
(statearr_35564_35585[(2)] = inst_35512);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35543__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35544 === (8))){
var inst_35525 = (state_35543[(2)]);
var state_35543__$1 = state_35543;
var statearr_35565_35586 = state_35543__$1;
(statearr_35565_35586[(2)] = inst_35525);

(statearr_35565_35586[(1)] = (5));


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
});})(c__34231__auto___35571,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__34141__auto__,c__34231__auto___35571,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_35566 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35566[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_35566[(1)] = (1));

return statearr_35566;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_35543){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_35543);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e35567){if((e35567 instanceof Object)){
var ex__34145__auto__ = e35567;
var statearr_35568_35587 = state_35543;
(statearr_35568_35587[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35543);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35567;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35588 = state_35543;
state_35543 = G__35588;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_35543){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_35543);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___35571,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__34233__auto__ = (function (){var statearr_35569 = f__34232__auto__.call(null);
(statearr_35569[(6)] = c__34231__auto___35571);

return statearr_35569;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___35571,chs__$1,out,cnt,rets,dchan,dctr,done))
);


return out;
});

cljs.core.async.map.cljs$lang$maxFixedArity = 3;

/**
 * Takes a collection of source channels and returns a channel which
 *   contains all values taken from them. The returned channel will be
 *   unbuffered by default, or a buf-or-n can be supplied. The channel
 *   will close after all the source channels have closed.
 */
cljs.core.async.merge = (function cljs$core$async$merge(var_args){
var G__35591 = arguments.length;
switch (G__35591) {
case 1:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$1 = (function (chs){
return cljs.core.async.merge.call(null,chs,null);
});

cljs.core.async.merge.cljs$core$IFn$_invoke$arity$2 = (function (chs,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34231__auto___35645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___35645,out){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___35645,out){
return (function (state_35623){
var state_val_35624 = (state_35623[(1)]);
if((state_val_35624 === (7))){
var inst_35602 = (state_35623[(7)]);
var inst_35603 = (state_35623[(8)]);
var inst_35602__$1 = (state_35623[(2)]);
var inst_35603__$1 = cljs.core.nth.call(null,inst_35602__$1,(0),null);
var inst_35604 = cljs.core.nth.call(null,inst_35602__$1,(1),null);
var inst_35605 = (inst_35603__$1 == null);
var state_35623__$1 = (function (){var statearr_35625 = state_35623;
(statearr_35625[(7)] = inst_35602__$1);

(statearr_35625[(8)] = inst_35603__$1);

(statearr_35625[(9)] = inst_35604);

return statearr_35625;
})();
if(cljs.core.truth_(inst_35605)){
var statearr_35626_35646 = state_35623__$1;
(statearr_35626_35646[(1)] = (8));

} else {
var statearr_35627_35647 = state_35623__$1;
(statearr_35627_35647[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (1))){
var inst_35592 = cljs.core.vec.call(null,chs);
var inst_35593 = inst_35592;
var state_35623__$1 = (function (){var statearr_35628 = state_35623;
(statearr_35628[(10)] = inst_35593);

return statearr_35628;
})();
var statearr_35629_35648 = state_35623__$1;
(statearr_35629_35648[(2)] = null);

(statearr_35629_35648[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (4))){
var inst_35593 = (state_35623[(10)]);
var state_35623__$1 = state_35623;
return cljs.core.async.ioc_alts_BANG_.call(null,state_35623__$1,(7),inst_35593);
} else {
if((state_val_35624 === (6))){
var inst_35619 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
var statearr_35630_35649 = state_35623__$1;
(statearr_35630_35649[(2)] = inst_35619);

(statearr_35630_35649[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (3))){
var inst_35621 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35623__$1,inst_35621);
} else {
if((state_val_35624 === (2))){
var inst_35593 = (state_35623[(10)]);
var inst_35595 = cljs.core.count.call(null,inst_35593);
var inst_35596 = (inst_35595 > (0));
var state_35623__$1 = state_35623;
if(cljs.core.truth_(inst_35596)){
var statearr_35632_35650 = state_35623__$1;
(statearr_35632_35650[(1)] = (4));

} else {
var statearr_35633_35651 = state_35623__$1;
(statearr_35633_35651[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (11))){
var inst_35593 = (state_35623[(10)]);
var inst_35612 = (state_35623[(2)]);
var tmp35631 = inst_35593;
var inst_35593__$1 = tmp35631;
var state_35623__$1 = (function (){var statearr_35634 = state_35623;
(statearr_35634[(10)] = inst_35593__$1);

(statearr_35634[(11)] = inst_35612);

return statearr_35634;
})();
var statearr_35635_35652 = state_35623__$1;
(statearr_35635_35652[(2)] = null);

(statearr_35635_35652[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (9))){
var inst_35603 = (state_35623[(8)]);
var state_35623__$1 = state_35623;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35623__$1,(11),out,inst_35603);
} else {
if((state_val_35624 === (5))){
var inst_35617 = cljs.core.async.close_BANG_.call(null,out);
var state_35623__$1 = state_35623;
var statearr_35636_35653 = state_35623__$1;
(statearr_35636_35653[(2)] = inst_35617);

(statearr_35636_35653[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (10))){
var inst_35615 = (state_35623[(2)]);
var state_35623__$1 = state_35623;
var statearr_35637_35654 = state_35623__$1;
(statearr_35637_35654[(2)] = inst_35615);

(statearr_35637_35654[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35624 === (8))){
var inst_35602 = (state_35623[(7)]);
var inst_35593 = (state_35623[(10)]);
var inst_35603 = (state_35623[(8)]);
var inst_35604 = (state_35623[(9)]);
var inst_35607 = (function (){var cs = inst_35593;
var vec__35598 = inst_35602;
var v = inst_35603;
var c = inst_35604;
return ((function (cs,vec__35598,v,c,inst_35602,inst_35593,inst_35603,inst_35604,state_val_35624,c__34231__auto___35645,out){
return (function (p1__35589_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__35589_SHARP_);
});
;})(cs,vec__35598,v,c,inst_35602,inst_35593,inst_35603,inst_35604,state_val_35624,c__34231__auto___35645,out))
})();
var inst_35608 = cljs.core.filterv.call(null,inst_35607,inst_35593);
var inst_35593__$1 = inst_35608;
var state_35623__$1 = (function (){var statearr_35638 = state_35623;
(statearr_35638[(10)] = inst_35593__$1);

return statearr_35638;
})();
var statearr_35639_35655 = state_35623__$1;
(statearr_35639_35655[(2)] = null);

(statearr_35639_35655[(1)] = (2));


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
});})(c__34231__auto___35645,out))
;
return ((function (switch__34141__auto__,c__34231__auto___35645,out){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_35640 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35640[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_35640[(1)] = (1));

return statearr_35640;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_35623){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_35623);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e35641){if((e35641 instanceof Object)){
var ex__34145__auto__ = e35641;
var statearr_35642_35656 = state_35623;
(statearr_35642_35656[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35623);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35657 = state_35623;
state_35623 = G__35657;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_35623){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_35623);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___35645,out))
})();
var state__34233__auto__ = (function (){var statearr_35643 = f__34232__auto__.call(null);
(statearr_35643[(6)] = c__34231__auto___35645);

return statearr_35643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___35645,out))
);


return out;
});

cljs.core.async.merge.cljs$lang$maxFixedArity = 2;

/**
 * Returns a channel containing the single (collection) result of the
 *   items taken from the channel conjoined to the supplied
 *   collection. ch must close before into produces a result.
 */
cljs.core.async.into = (function cljs$core$async$into(coll,ch){
return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
 * Returns a channel that will return, at most, n items from ch. After n items
 * have been returned, or ch has been closed, the return chanel will close.
 * 
 *   The output channel is unbuffered by default, unless buf-or-n is given.
 */
cljs.core.async.take = (function cljs$core$async$take(var_args){
var G__35659 = arguments.length;
switch (G__35659) {
case 2:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.take.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.take.call(null,n,ch,null);
});

cljs.core.async.take.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34231__auto___35704 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___35704,out){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___35704,out){
return (function (state_35683){
var state_val_35684 = (state_35683[(1)]);
if((state_val_35684 === (7))){
var inst_35665 = (state_35683[(7)]);
var inst_35665__$1 = (state_35683[(2)]);
var inst_35666 = (inst_35665__$1 == null);
var inst_35667 = cljs.core.not.call(null,inst_35666);
var state_35683__$1 = (function (){var statearr_35685 = state_35683;
(statearr_35685[(7)] = inst_35665__$1);

return statearr_35685;
})();
if(inst_35667){
var statearr_35686_35705 = state_35683__$1;
(statearr_35686_35705[(1)] = (8));

} else {
var statearr_35687_35706 = state_35683__$1;
(statearr_35687_35706[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35684 === (1))){
var inst_35660 = (0);
var state_35683__$1 = (function (){var statearr_35688 = state_35683;
(statearr_35688[(8)] = inst_35660);

return statearr_35688;
})();
var statearr_35689_35707 = state_35683__$1;
(statearr_35689_35707[(2)] = null);

(statearr_35689_35707[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35684 === (4))){
var state_35683__$1 = state_35683;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35683__$1,(7),ch);
} else {
if((state_val_35684 === (6))){
var inst_35678 = (state_35683[(2)]);
var state_35683__$1 = state_35683;
var statearr_35690_35708 = state_35683__$1;
(statearr_35690_35708[(2)] = inst_35678);

(statearr_35690_35708[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35684 === (3))){
var inst_35680 = (state_35683[(2)]);
var inst_35681 = cljs.core.async.close_BANG_.call(null,out);
var state_35683__$1 = (function (){var statearr_35691 = state_35683;
(statearr_35691[(9)] = inst_35680);

return statearr_35691;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35683__$1,inst_35681);
} else {
if((state_val_35684 === (2))){
var inst_35660 = (state_35683[(8)]);
var inst_35662 = (inst_35660 < n);
var state_35683__$1 = state_35683;
if(cljs.core.truth_(inst_35662)){
var statearr_35692_35709 = state_35683__$1;
(statearr_35692_35709[(1)] = (4));

} else {
var statearr_35693_35710 = state_35683__$1;
(statearr_35693_35710[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35684 === (11))){
var inst_35660 = (state_35683[(8)]);
var inst_35670 = (state_35683[(2)]);
var inst_35671 = (inst_35660 + (1));
var inst_35660__$1 = inst_35671;
var state_35683__$1 = (function (){var statearr_35694 = state_35683;
(statearr_35694[(8)] = inst_35660__$1);

(statearr_35694[(10)] = inst_35670);

return statearr_35694;
})();
var statearr_35695_35711 = state_35683__$1;
(statearr_35695_35711[(2)] = null);

(statearr_35695_35711[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35684 === (9))){
var state_35683__$1 = state_35683;
var statearr_35696_35712 = state_35683__$1;
(statearr_35696_35712[(2)] = null);

(statearr_35696_35712[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35684 === (5))){
var state_35683__$1 = state_35683;
var statearr_35697_35713 = state_35683__$1;
(statearr_35697_35713[(2)] = null);

(statearr_35697_35713[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35684 === (10))){
var inst_35675 = (state_35683[(2)]);
var state_35683__$1 = state_35683;
var statearr_35698_35714 = state_35683__$1;
(statearr_35698_35714[(2)] = inst_35675);

(statearr_35698_35714[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35684 === (8))){
var inst_35665 = (state_35683[(7)]);
var state_35683__$1 = state_35683;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35683__$1,(11),out,inst_35665);
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
});})(c__34231__auto___35704,out))
;
return ((function (switch__34141__auto__,c__34231__auto___35704,out){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_35699 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35699[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_35699[(1)] = (1));

return statearr_35699;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_35683){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_35683);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e35700){if((e35700 instanceof Object)){
var ex__34145__auto__ = e35700;
var statearr_35701_35715 = state_35683;
(statearr_35701_35715[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35683);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35700;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35716 = state_35683;
state_35683 = G__35716;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_35683){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_35683);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___35704,out))
})();
var state__34233__auto__ = (function (){var statearr_35702 = f__34232__auto__.call(null);
(statearr_35702[(6)] = c__34231__auto___35704);

return statearr_35702;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___35704,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35718 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35718 = (function (f,ch,meta35719){
this.f = f;
this.ch = ch;
this.meta35719 = meta35719;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35720,meta35719__$1){
var self__ = this;
var _35720__$1 = this;
return (new cljs.core.async.t_cljs$core$async35718(self__.f,self__.ch,meta35719__$1));
});

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35720){
var self__ = this;
var _35720__$1 = this;
return self__.meta35719;
});

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async35721 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35721 = (function (f,ch,meta35719,_,fn1,meta35722){
this.f = f;
this.ch = ch;
this.meta35719 = meta35719;
this._ = _;
this.fn1 = fn1;
this.meta35722 = meta35722;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_35723,meta35722__$1){
var self__ = this;
var _35723__$1 = this;
return (new cljs.core.async.t_cljs$core$async35721(self__.f,self__.ch,self__.meta35719,self__._,self__.fn1,meta35722__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_35723){
var self__ = this;
var _35723__$1 = this;
return self__.meta35722;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async35721.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__35717_SHARP_){
return f1.call(null,(((p1__35717_SHARP_ == null))?null:self__.f.call(null,p1__35717_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async35721.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35719","meta35719",-1121531232,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async35718","cljs.core.async/t_cljs$core$async35718",1081462850,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta35722","meta35722",2076317159,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async35721.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35721.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35721";

cljs.core.async.t_cljs$core$async35721.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async35721");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async35721 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35721(f__$1,ch__$1,meta35719__$1,___$2,fn1__$1,meta35722){
return (new cljs.core.async.t_cljs$core$async35721(f__$1,ch__$1,meta35719__$1,___$2,fn1__$1,meta35722));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async35721(self__.f,self__.ch,self__.meta35719,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
})()
);
if(cljs.core.truth_((function (){var and__30011__auto__ = ret;
if(cljs.core.truth_(and__30011__auto__)){
return !((cljs.core.deref.call(null,ret) == null));
} else {
return and__30011__auto__;
}
})())){
return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else {
return ret;
}
});

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35718.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async35718.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35719","meta35719",-1121531232,null)], null);
});

cljs.core.async.t_cljs$core$async35718.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35718.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35718";

cljs.core.async.t_cljs$core$async35718.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async35718");
});

cljs.core.async.__GT_t_cljs$core$async35718 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async35718(f__$1,ch__$1,meta35719){
return (new cljs.core.async.t_cljs$core$async35718(f__$1,ch__$1,meta35719));
});

}

return (new cljs.core.async.t_cljs$core$async35718(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async35724 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35724 = (function (f,ch,meta35725){
this.f = f;
this.ch = ch;
this.meta35725 = meta35725;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35724.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35726,meta35725__$1){
var self__ = this;
var _35726__$1 = this;
return (new cljs.core.async.t_cljs$core$async35724(self__.f,self__.ch,meta35725__$1));
});

cljs.core.async.t_cljs$core$async35724.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35726){
var self__ = this;
var _35726__$1 = this;
return self__.meta35725;
});

cljs.core.async.t_cljs$core$async35724.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35724.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35724.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35724.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35724.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35724.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async35724.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35725","meta35725",1219414635,null)], null);
});

cljs.core.async.t_cljs$core$async35724.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35724.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35724";

cljs.core.async.t_cljs$core$async35724.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async35724");
});

cljs.core.async.__GT_t_cljs$core$async35724 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async35724(f__$1,ch__$1,meta35725){
return (new cljs.core.async.t_cljs$core$async35724(f__$1,ch__$1,meta35725));
});

}

return (new cljs.core.async.t_cljs$core$async35724(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async35727 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async35727 = (function (p,ch,meta35728){
this.p = p;
this.ch = ch;
this.meta35728 = meta35728;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async35727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_35729,meta35728__$1){
var self__ = this;
var _35729__$1 = this;
return (new cljs.core.async.t_cljs$core$async35727(self__.p,self__.ch,meta35728__$1));
});

cljs.core.async.t_cljs$core$async35727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_35729){
var self__ = this;
var _35729__$1 = this;
return self__.meta35728;
});

cljs.core.async.t_cljs$core$async35727.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35727.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async35727.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async35727.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async35727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async35727.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta35728","meta35728",94008423,null)], null);
});

cljs.core.async.t_cljs$core$async35727.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async35727.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async35727";

cljs.core.async.t_cljs$core$async35727.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async35727");
});

cljs.core.async.__GT_t_cljs$core$async35727 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async35727(p__$1,ch__$1,meta35728){
return (new cljs.core.async.t_cljs$core$async35727(p__$1,ch__$1,meta35728));
});

}

return (new cljs.core.async.t_cljs$core$async35727(p,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_GT_ = (function cljs$core$async$remove_GT_(p,ch){
return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_LT_ = (function cljs$core$async$filter_LT_(var_args){
var G__35731 = arguments.length;
switch (G__35731) {
case 2:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.filter_LT_.call(null,p,ch,null);
});

cljs.core.async.filter_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34231__auto___35771 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___35771,out){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___35771,out){
return (function (state_35752){
var state_val_35753 = (state_35752[(1)]);
if((state_val_35753 === (7))){
var inst_35748 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35754_35772 = state_35752__$1;
(statearr_35754_35772[(2)] = inst_35748);

(statearr_35754_35772[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (1))){
var state_35752__$1 = state_35752;
var statearr_35755_35773 = state_35752__$1;
(statearr_35755_35773[(2)] = null);

(statearr_35755_35773[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (4))){
var inst_35734 = (state_35752[(7)]);
var inst_35734__$1 = (state_35752[(2)]);
var inst_35735 = (inst_35734__$1 == null);
var state_35752__$1 = (function (){var statearr_35756 = state_35752;
(statearr_35756[(7)] = inst_35734__$1);

return statearr_35756;
})();
if(cljs.core.truth_(inst_35735)){
var statearr_35757_35774 = state_35752__$1;
(statearr_35757_35774[(1)] = (5));

} else {
var statearr_35758_35775 = state_35752__$1;
(statearr_35758_35775[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (6))){
var inst_35734 = (state_35752[(7)]);
var inst_35739 = p.call(null,inst_35734);
var state_35752__$1 = state_35752;
if(cljs.core.truth_(inst_35739)){
var statearr_35759_35776 = state_35752__$1;
(statearr_35759_35776[(1)] = (8));

} else {
var statearr_35760_35777 = state_35752__$1;
(statearr_35760_35777[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (3))){
var inst_35750 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35752__$1,inst_35750);
} else {
if((state_val_35753 === (2))){
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35752__$1,(4),ch);
} else {
if((state_val_35753 === (11))){
var inst_35742 = (state_35752[(2)]);
var state_35752__$1 = state_35752;
var statearr_35761_35778 = state_35752__$1;
(statearr_35761_35778[(2)] = inst_35742);

(statearr_35761_35778[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (9))){
var state_35752__$1 = state_35752;
var statearr_35762_35779 = state_35752__$1;
(statearr_35762_35779[(2)] = null);

(statearr_35762_35779[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (5))){
var inst_35737 = cljs.core.async.close_BANG_.call(null,out);
var state_35752__$1 = state_35752;
var statearr_35763_35780 = state_35752__$1;
(statearr_35763_35780[(2)] = inst_35737);

(statearr_35763_35780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (10))){
var inst_35745 = (state_35752[(2)]);
var state_35752__$1 = (function (){var statearr_35764 = state_35752;
(statearr_35764[(8)] = inst_35745);

return statearr_35764;
})();
var statearr_35765_35781 = state_35752__$1;
(statearr_35765_35781[(2)] = null);

(statearr_35765_35781[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35753 === (8))){
var inst_35734 = (state_35752[(7)]);
var state_35752__$1 = state_35752;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35752__$1,(11),out,inst_35734);
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
});})(c__34231__auto___35771,out))
;
return ((function (switch__34141__auto__,c__34231__auto___35771,out){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_35766 = [null,null,null,null,null,null,null,null,null];
(statearr_35766[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_35766[(1)] = (1));

return statearr_35766;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_35752){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_35752);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e35767){if((e35767 instanceof Object)){
var ex__34145__auto__ = e35767;
var statearr_35768_35782 = state_35752;
(statearr_35768_35782[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35752);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35767;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35783 = state_35752;
state_35752 = G__35783;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_35752){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_35752);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___35771,out))
})();
var state__34233__auto__ = (function (){var statearr_35769 = f__34232__auto__.call(null);
(statearr_35769[(6)] = c__34231__auto___35771);

return statearr_35769;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___35771,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__35785 = arguments.length;
switch (G__35785) {
case 2:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$2 = (function (p,ch){
return cljs.core.async.remove_LT_.call(null,p,ch,null);
});

cljs.core.async.remove_LT_.cljs$core$IFn$_invoke$arity$3 = (function (p,ch,buf_or_n){
return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});

cljs.core.async.remove_LT_.cljs$lang$maxFixedArity = 3;

cljs.core.async.mapcat_STAR_ = (function cljs$core$async$mapcat_STAR_(f,in$,out){
var c__34231__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto__){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto__){
return (function (state_35848){
var state_val_35849 = (state_35848[(1)]);
if((state_val_35849 === (7))){
var inst_35844 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35850_35888 = state_35848__$1;
(statearr_35850_35888[(2)] = inst_35844);

(statearr_35850_35888[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (20))){
var inst_35814 = (state_35848[(7)]);
var inst_35825 = (state_35848[(2)]);
var inst_35826 = cljs.core.next.call(null,inst_35814);
var inst_35800 = inst_35826;
var inst_35801 = null;
var inst_35802 = (0);
var inst_35803 = (0);
var state_35848__$1 = (function (){var statearr_35851 = state_35848;
(statearr_35851[(8)] = inst_35802);

(statearr_35851[(9)] = inst_35803);

(statearr_35851[(10)] = inst_35801);

(statearr_35851[(11)] = inst_35825);

(statearr_35851[(12)] = inst_35800);

return statearr_35851;
})();
var statearr_35852_35889 = state_35848__$1;
(statearr_35852_35889[(2)] = null);

(statearr_35852_35889[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (1))){
var state_35848__$1 = state_35848;
var statearr_35853_35890 = state_35848__$1;
(statearr_35853_35890[(2)] = null);

(statearr_35853_35890[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (4))){
var inst_35789 = (state_35848[(13)]);
var inst_35789__$1 = (state_35848[(2)]);
var inst_35790 = (inst_35789__$1 == null);
var state_35848__$1 = (function (){var statearr_35854 = state_35848;
(statearr_35854[(13)] = inst_35789__$1);

return statearr_35854;
})();
if(cljs.core.truth_(inst_35790)){
var statearr_35855_35891 = state_35848__$1;
(statearr_35855_35891[(1)] = (5));

} else {
var statearr_35856_35892 = state_35848__$1;
(statearr_35856_35892[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (15))){
var state_35848__$1 = state_35848;
var statearr_35860_35893 = state_35848__$1;
(statearr_35860_35893[(2)] = null);

(statearr_35860_35893[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (21))){
var state_35848__$1 = state_35848;
var statearr_35861_35894 = state_35848__$1;
(statearr_35861_35894[(2)] = null);

(statearr_35861_35894[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (13))){
var inst_35802 = (state_35848[(8)]);
var inst_35803 = (state_35848[(9)]);
var inst_35801 = (state_35848[(10)]);
var inst_35800 = (state_35848[(12)]);
var inst_35810 = (state_35848[(2)]);
var inst_35811 = (inst_35803 + (1));
var tmp35857 = inst_35802;
var tmp35858 = inst_35801;
var tmp35859 = inst_35800;
var inst_35800__$1 = tmp35859;
var inst_35801__$1 = tmp35858;
var inst_35802__$1 = tmp35857;
var inst_35803__$1 = inst_35811;
var state_35848__$1 = (function (){var statearr_35862 = state_35848;
(statearr_35862[(8)] = inst_35802__$1);

(statearr_35862[(9)] = inst_35803__$1);

(statearr_35862[(14)] = inst_35810);

(statearr_35862[(10)] = inst_35801__$1);

(statearr_35862[(12)] = inst_35800__$1);

return statearr_35862;
})();
var statearr_35863_35895 = state_35848__$1;
(statearr_35863_35895[(2)] = null);

(statearr_35863_35895[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (22))){
var state_35848__$1 = state_35848;
var statearr_35864_35896 = state_35848__$1;
(statearr_35864_35896[(2)] = null);

(statearr_35864_35896[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (6))){
var inst_35789 = (state_35848[(13)]);
var inst_35798 = f.call(null,inst_35789);
var inst_35799 = cljs.core.seq.call(null,inst_35798);
var inst_35800 = inst_35799;
var inst_35801 = null;
var inst_35802 = (0);
var inst_35803 = (0);
var state_35848__$1 = (function (){var statearr_35865 = state_35848;
(statearr_35865[(8)] = inst_35802);

(statearr_35865[(9)] = inst_35803);

(statearr_35865[(10)] = inst_35801);

(statearr_35865[(12)] = inst_35800);

return statearr_35865;
})();
var statearr_35866_35897 = state_35848__$1;
(statearr_35866_35897[(2)] = null);

(statearr_35866_35897[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (17))){
var inst_35814 = (state_35848[(7)]);
var inst_35818 = cljs.core.chunk_first.call(null,inst_35814);
var inst_35819 = cljs.core.chunk_rest.call(null,inst_35814);
var inst_35820 = cljs.core.count.call(null,inst_35818);
var inst_35800 = inst_35819;
var inst_35801 = inst_35818;
var inst_35802 = inst_35820;
var inst_35803 = (0);
var state_35848__$1 = (function (){var statearr_35867 = state_35848;
(statearr_35867[(8)] = inst_35802);

(statearr_35867[(9)] = inst_35803);

(statearr_35867[(10)] = inst_35801);

(statearr_35867[(12)] = inst_35800);

return statearr_35867;
})();
var statearr_35868_35898 = state_35848__$1;
(statearr_35868_35898[(2)] = null);

(statearr_35868_35898[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (3))){
var inst_35846 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35848__$1,inst_35846);
} else {
if((state_val_35849 === (12))){
var inst_35834 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35869_35899 = state_35848__$1;
(statearr_35869_35899[(2)] = inst_35834);

(statearr_35869_35899[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (2))){
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35848__$1,(4),in$);
} else {
if((state_val_35849 === (23))){
var inst_35842 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35870_35900 = state_35848__$1;
(statearr_35870_35900[(2)] = inst_35842);

(statearr_35870_35900[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (19))){
var inst_35829 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35871_35901 = state_35848__$1;
(statearr_35871_35901[(2)] = inst_35829);

(statearr_35871_35901[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (11))){
var inst_35814 = (state_35848[(7)]);
var inst_35800 = (state_35848[(12)]);
var inst_35814__$1 = cljs.core.seq.call(null,inst_35800);
var state_35848__$1 = (function (){var statearr_35872 = state_35848;
(statearr_35872[(7)] = inst_35814__$1);

return statearr_35872;
})();
if(inst_35814__$1){
var statearr_35873_35902 = state_35848__$1;
(statearr_35873_35902[(1)] = (14));

} else {
var statearr_35874_35903 = state_35848__$1;
(statearr_35874_35903[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (9))){
var inst_35836 = (state_35848[(2)]);
var inst_35837 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_35848__$1 = (function (){var statearr_35875 = state_35848;
(statearr_35875[(15)] = inst_35836);

return statearr_35875;
})();
if(cljs.core.truth_(inst_35837)){
var statearr_35876_35904 = state_35848__$1;
(statearr_35876_35904[(1)] = (21));

} else {
var statearr_35877_35905 = state_35848__$1;
(statearr_35877_35905[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (5))){
var inst_35792 = cljs.core.async.close_BANG_.call(null,out);
var state_35848__$1 = state_35848;
var statearr_35878_35906 = state_35848__$1;
(statearr_35878_35906[(2)] = inst_35792);

(statearr_35878_35906[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (14))){
var inst_35814 = (state_35848[(7)]);
var inst_35816 = cljs.core.chunked_seq_QMARK_.call(null,inst_35814);
var state_35848__$1 = state_35848;
if(inst_35816){
var statearr_35879_35907 = state_35848__$1;
(statearr_35879_35907[(1)] = (17));

} else {
var statearr_35880_35908 = state_35848__$1;
(statearr_35880_35908[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (16))){
var inst_35832 = (state_35848[(2)]);
var state_35848__$1 = state_35848;
var statearr_35881_35909 = state_35848__$1;
(statearr_35881_35909[(2)] = inst_35832);

(statearr_35881_35909[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35849 === (10))){
var inst_35803 = (state_35848[(9)]);
var inst_35801 = (state_35848[(10)]);
var inst_35808 = cljs.core._nth.call(null,inst_35801,inst_35803);
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35848__$1,(13),out,inst_35808);
} else {
if((state_val_35849 === (18))){
var inst_35814 = (state_35848[(7)]);
var inst_35823 = cljs.core.first.call(null,inst_35814);
var state_35848__$1 = state_35848;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35848__$1,(20),out,inst_35823);
} else {
if((state_val_35849 === (8))){
var inst_35802 = (state_35848[(8)]);
var inst_35803 = (state_35848[(9)]);
var inst_35805 = (inst_35803 < inst_35802);
var inst_35806 = inst_35805;
var state_35848__$1 = state_35848;
if(cljs.core.truth_(inst_35806)){
var statearr_35882_35910 = state_35848__$1;
(statearr_35882_35910[(1)] = (10));

} else {
var statearr_35883_35911 = state_35848__$1;
(statearr_35883_35911[(1)] = (11));

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
}
}
}
}
}
}
});})(c__34231__auto__))
;
return ((function (switch__34141__auto__,c__34231__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__34142__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__34142__auto____0 = (function (){
var statearr_35884 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35884[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__34142__auto__);

(statearr_35884[(1)] = (1));

return statearr_35884;
});
var cljs$core$async$mapcat_STAR__$_state_machine__34142__auto____1 = (function (state_35848){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_35848);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e35885){if((e35885 instanceof Object)){
var ex__34145__auto__ = e35885;
var statearr_35886_35912 = state_35848;
(statearr_35886_35912[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35848);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35885;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35913 = state_35848;
state_35848 = G__35913;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__34142__auto__ = function(state_35848){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__34142__auto____1.call(this,state_35848);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__34142__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__34142__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto__))
})();
var state__34233__auto__ = (function (){var statearr_35887 = f__34232__auto__.call(null);
(statearr_35887[(6)] = c__34231__auto__);

return statearr_35887;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto__))
);

return c__34231__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__35915 = arguments.length;
switch (G__35915) {
case 2:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = (function (f,in$){
return cljs.core.async.mapcat_LT_.call(null,f,in$,null);
});

cljs.core.async.mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = (function (f,in$,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return out;
});

cljs.core.async.mapcat_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_GT_ = (function cljs$core$async$mapcat_GT_(var_args){
var G__35918 = arguments.length;
switch (G__35918) {
case 2:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = (function (f,out){
return cljs.core.async.mapcat_GT_.call(null,f,out,null);
});

cljs.core.async.mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = (function (f,out,buf_or_n){
var in$ = cljs.core.async.chan.call(null,buf_or_n);
cljs.core.async.mapcat_STAR_.call(null,f,in$,out);

return in$;
});

cljs.core.async.mapcat_GT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.unique = (function cljs$core$async$unique(var_args){
var G__35921 = arguments.length;
switch (G__35921) {
case 1:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1((arguments[(0)]));

break;
case 2:
return cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$1 = (function (ch){
return cljs.core.async.unique.call(null,ch,null);
});

cljs.core.async.unique.cljs$core$IFn$_invoke$arity$2 = (function (ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34231__auto___35968 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___35968,out){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___35968,out){
return (function (state_35945){
var state_val_35946 = (state_35945[(1)]);
if((state_val_35946 === (7))){
var inst_35940 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35947_35969 = state_35945__$1;
(statearr_35947_35969[(2)] = inst_35940);

(statearr_35947_35969[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (1))){
var inst_35922 = null;
var state_35945__$1 = (function (){var statearr_35948 = state_35945;
(statearr_35948[(7)] = inst_35922);

return statearr_35948;
})();
var statearr_35949_35970 = state_35945__$1;
(statearr_35949_35970[(2)] = null);

(statearr_35949_35970[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (4))){
var inst_35925 = (state_35945[(8)]);
var inst_35925__$1 = (state_35945[(2)]);
var inst_35926 = (inst_35925__$1 == null);
var inst_35927 = cljs.core.not.call(null,inst_35926);
var state_35945__$1 = (function (){var statearr_35950 = state_35945;
(statearr_35950[(8)] = inst_35925__$1);

return statearr_35950;
})();
if(inst_35927){
var statearr_35951_35971 = state_35945__$1;
(statearr_35951_35971[(1)] = (5));

} else {
var statearr_35952_35972 = state_35945__$1;
(statearr_35952_35972[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (6))){
var state_35945__$1 = state_35945;
var statearr_35953_35973 = state_35945__$1;
(statearr_35953_35973[(2)] = null);

(statearr_35953_35973[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (3))){
var inst_35942 = (state_35945[(2)]);
var inst_35943 = cljs.core.async.close_BANG_.call(null,out);
var state_35945__$1 = (function (){var statearr_35954 = state_35945;
(statearr_35954[(9)] = inst_35942);

return statearr_35954;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_35945__$1,inst_35943);
} else {
if((state_val_35946 === (2))){
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_35945__$1,(4),ch);
} else {
if((state_val_35946 === (11))){
var inst_35925 = (state_35945[(8)]);
var inst_35934 = (state_35945[(2)]);
var inst_35922 = inst_35925;
var state_35945__$1 = (function (){var statearr_35955 = state_35945;
(statearr_35955[(10)] = inst_35934);

(statearr_35955[(7)] = inst_35922);

return statearr_35955;
})();
var statearr_35956_35974 = state_35945__$1;
(statearr_35956_35974[(2)] = null);

(statearr_35956_35974[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (9))){
var inst_35925 = (state_35945[(8)]);
var state_35945__$1 = state_35945;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_35945__$1,(11),out,inst_35925);
} else {
if((state_val_35946 === (5))){
var inst_35922 = (state_35945[(7)]);
var inst_35925 = (state_35945[(8)]);
var inst_35929 = cljs.core._EQ_.call(null,inst_35925,inst_35922);
var state_35945__$1 = state_35945;
if(inst_35929){
var statearr_35958_35975 = state_35945__$1;
(statearr_35958_35975[(1)] = (8));

} else {
var statearr_35959_35976 = state_35945__$1;
(statearr_35959_35976[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (10))){
var inst_35937 = (state_35945[(2)]);
var state_35945__$1 = state_35945;
var statearr_35960_35977 = state_35945__$1;
(statearr_35960_35977[(2)] = inst_35937);

(statearr_35960_35977[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_35946 === (8))){
var inst_35922 = (state_35945[(7)]);
var tmp35957 = inst_35922;
var inst_35922__$1 = tmp35957;
var state_35945__$1 = (function (){var statearr_35961 = state_35945;
(statearr_35961[(7)] = inst_35922__$1);

return statearr_35961;
})();
var statearr_35962_35978 = state_35945__$1;
(statearr_35962_35978[(2)] = null);

(statearr_35962_35978[(1)] = (2));


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
});})(c__34231__auto___35968,out))
;
return ((function (switch__34141__auto__,c__34231__auto___35968,out){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_35963 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_35963[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_35963[(1)] = (1));

return statearr_35963;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_35945){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_35945);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e35964){if((e35964 instanceof Object)){
var ex__34145__auto__ = e35964;
var statearr_35965_35979 = state_35945;
(statearr_35965_35979[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_35945);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35964;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35980 = state_35945;
state_35945 = G__35980;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_35945){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_35945);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___35968,out))
})();
var state__34233__auto__ = (function (){var statearr_35966 = f__34232__auto__.call(null);
(statearr_35966[(6)] = c__34231__auto___35968);

return statearr_35966;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___35968,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__35982 = arguments.length;
switch (G__35982) {
case 2:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$2 = (function (n,ch){
return cljs.core.async.partition.call(null,n,ch,null);
});

cljs.core.async.partition.cljs$core$IFn$_invoke$arity$3 = (function (n,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34231__auto___36048 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___36048,out){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___36048,out){
return (function (state_36020){
var state_val_36021 = (state_36020[(1)]);
if((state_val_36021 === (7))){
var inst_36016 = (state_36020[(2)]);
var state_36020__$1 = state_36020;
var statearr_36022_36049 = state_36020__$1;
(statearr_36022_36049[(2)] = inst_36016);

(statearr_36022_36049[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (1))){
var inst_35983 = (new Array(n));
var inst_35984 = inst_35983;
var inst_35985 = (0);
var state_36020__$1 = (function (){var statearr_36023 = state_36020;
(statearr_36023[(7)] = inst_35984);

(statearr_36023[(8)] = inst_35985);

return statearr_36023;
})();
var statearr_36024_36050 = state_36020__$1;
(statearr_36024_36050[(2)] = null);

(statearr_36024_36050[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (4))){
var inst_35988 = (state_36020[(9)]);
var inst_35988__$1 = (state_36020[(2)]);
var inst_35989 = (inst_35988__$1 == null);
var inst_35990 = cljs.core.not.call(null,inst_35989);
var state_36020__$1 = (function (){var statearr_36025 = state_36020;
(statearr_36025[(9)] = inst_35988__$1);

return statearr_36025;
})();
if(inst_35990){
var statearr_36026_36051 = state_36020__$1;
(statearr_36026_36051[(1)] = (5));

} else {
var statearr_36027_36052 = state_36020__$1;
(statearr_36027_36052[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (15))){
var inst_36010 = (state_36020[(2)]);
var state_36020__$1 = state_36020;
var statearr_36028_36053 = state_36020__$1;
(statearr_36028_36053[(2)] = inst_36010);

(statearr_36028_36053[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (13))){
var state_36020__$1 = state_36020;
var statearr_36029_36054 = state_36020__$1;
(statearr_36029_36054[(2)] = null);

(statearr_36029_36054[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (6))){
var inst_35985 = (state_36020[(8)]);
var inst_36006 = (inst_35985 > (0));
var state_36020__$1 = state_36020;
if(cljs.core.truth_(inst_36006)){
var statearr_36030_36055 = state_36020__$1;
(statearr_36030_36055[(1)] = (12));

} else {
var statearr_36031_36056 = state_36020__$1;
(statearr_36031_36056[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (3))){
var inst_36018 = (state_36020[(2)]);
var state_36020__$1 = state_36020;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36020__$1,inst_36018);
} else {
if((state_val_36021 === (12))){
var inst_35984 = (state_36020[(7)]);
var inst_36008 = cljs.core.vec.call(null,inst_35984);
var state_36020__$1 = state_36020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36020__$1,(15),out,inst_36008);
} else {
if((state_val_36021 === (2))){
var state_36020__$1 = state_36020;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36020__$1,(4),ch);
} else {
if((state_val_36021 === (11))){
var inst_36000 = (state_36020[(2)]);
var inst_36001 = (new Array(n));
var inst_35984 = inst_36001;
var inst_35985 = (0);
var state_36020__$1 = (function (){var statearr_36032 = state_36020;
(statearr_36032[(7)] = inst_35984);

(statearr_36032[(8)] = inst_35985);

(statearr_36032[(10)] = inst_36000);

return statearr_36032;
})();
var statearr_36033_36057 = state_36020__$1;
(statearr_36033_36057[(2)] = null);

(statearr_36033_36057[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (9))){
var inst_35984 = (state_36020[(7)]);
var inst_35998 = cljs.core.vec.call(null,inst_35984);
var state_36020__$1 = state_36020;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36020__$1,(11),out,inst_35998);
} else {
if((state_val_36021 === (5))){
var inst_35984 = (state_36020[(7)]);
var inst_35993 = (state_36020[(11)]);
var inst_35985 = (state_36020[(8)]);
var inst_35988 = (state_36020[(9)]);
var inst_35992 = (inst_35984[inst_35985] = inst_35988);
var inst_35993__$1 = (inst_35985 + (1));
var inst_35994 = (inst_35993__$1 < n);
var state_36020__$1 = (function (){var statearr_36034 = state_36020;
(statearr_36034[(12)] = inst_35992);

(statearr_36034[(11)] = inst_35993__$1);

return statearr_36034;
})();
if(cljs.core.truth_(inst_35994)){
var statearr_36035_36058 = state_36020__$1;
(statearr_36035_36058[(1)] = (8));

} else {
var statearr_36036_36059 = state_36020__$1;
(statearr_36036_36059[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (14))){
var inst_36013 = (state_36020[(2)]);
var inst_36014 = cljs.core.async.close_BANG_.call(null,out);
var state_36020__$1 = (function (){var statearr_36038 = state_36020;
(statearr_36038[(13)] = inst_36013);

return statearr_36038;
})();
var statearr_36039_36060 = state_36020__$1;
(statearr_36039_36060[(2)] = inst_36014);

(statearr_36039_36060[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (10))){
var inst_36004 = (state_36020[(2)]);
var state_36020__$1 = state_36020;
var statearr_36040_36061 = state_36020__$1;
(statearr_36040_36061[(2)] = inst_36004);

(statearr_36040_36061[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36021 === (8))){
var inst_35984 = (state_36020[(7)]);
var inst_35993 = (state_36020[(11)]);
var tmp36037 = inst_35984;
var inst_35984__$1 = tmp36037;
var inst_35985 = inst_35993;
var state_36020__$1 = (function (){var statearr_36041 = state_36020;
(statearr_36041[(7)] = inst_35984__$1);

(statearr_36041[(8)] = inst_35985);

return statearr_36041;
})();
var statearr_36042_36062 = state_36020__$1;
(statearr_36042_36062[(2)] = null);

(statearr_36042_36062[(1)] = (2));


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
});})(c__34231__auto___36048,out))
;
return ((function (switch__34141__auto__,c__34231__auto___36048,out){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_36043 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36043[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_36043[(1)] = (1));

return statearr_36043;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_36020){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_36020);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e36044){if((e36044 instanceof Object)){
var ex__34145__auto__ = e36044;
var statearr_36045_36063 = state_36020;
(statearr_36045_36063[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36020);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36044;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36064 = state_36020;
state_36020 = G__36064;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_36020){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_36020);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___36048,out))
})();
var state__34233__auto__ = (function (){var statearr_36046 = f__34232__auto__.call(null);
(statearr_36046[(6)] = c__34231__auto___36048);

return statearr_36046;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___36048,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__36066 = arguments.length;
switch (G__36066) {
case 2:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2((arguments[(0)]),(arguments[(1)]));

break;
case 3:
return cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3((arguments[(0)]),(arguments[(1)]),(arguments[(2)]));

break;
default:
throw (new Error(["Invalid arity: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(arguments.length)].join('')));

}
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$2 = (function (f,ch){
return cljs.core.async.partition_by.call(null,f,ch,null);
});

cljs.core.async.partition_by.cljs$core$IFn$_invoke$arity$3 = (function (f,ch,buf_or_n){
var out = cljs.core.async.chan.call(null,buf_or_n);
var c__34231__auto___36136 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__34231__auto___36136,out){
return (function (){
var f__34232__auto__ = (function (){var switch__34141__auto__ = ((function (c__34231__auto___36136,out){
return (function (state_36108){
var state_val_36109 = (state_36108[(1)]);
if((state_val_36109 === (7))){
var inst_36104 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36110_36137 = state_36108__$1;
(statearr_36110_36137[(2)] = inst_36104);

(statearr_36110_36137[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (1))){
var inst_36067 = [];
var inst_36068 = inst_36067;
var inst_36069 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_36108__$1 = (function (){var statearr_36111 = state_36108;
(statearr_36111[(7)] = inst_36069);

(statearr_36111[(8)] = inst_36068);

return statearr_36111;
})();
var statearr_36112_36138 = state_36108__$1;
(statearr_36112_36138[(2)] = null);

(statearr_36112_36138[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (4))){
var inst_36072 = (state_36108[(9)]);
var inst_36072__$1 = (state_36108[(2)]);
var inst_36073 = (inst_36072__$1 == null);
var inst_36074 = cljs.core.not.call(null,inst_36073);
var state_36108__$1 = (function (){var statearr_36113 = state_36108;
(statearr_36113[(9)] = inst_36072__$1);

return statearr_36113;
})();
if(inst_36074){
var statearr_36114_36139 = state_36108__$1;
(statearr_36114_36139[(1)] = (5));

} else {
var statearr_36115_36140 = state_36108__$1;
(statearr_36115_36140[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (15))){
var inst_36098 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36116_36141 = state_36108__$1;
(statearr_36116_36141[(2)] = inst_36098);

(statearr_36116_36141[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (13))){
var state_36108__$1 = state_36108;
var statearr_36117_36142 = state_36108__$1;
(statearr_36117_36142[(2)] = null);

(statearr_36117_36142[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (6))){
var inst_36068 = (state_36108[(8)]);
var inst_36093 = inst_36068.length;
var inst_36094 = (inst_36093 > (0));
var state_36108__$1 = state_36108;
if(cljs.core.truth_(inst_36094)){
var statearr_36118_36143 = state_36108__$1;
(statearr_36118_36143[(1)] = (12));

} else {
var statearr_36119_36144 = state_36108__$1;
(statearr_36119_36144[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (3))){
var inst_36106 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_36108__$1,inst_36106);
} else {
if((state_val_36109 === (12))){
var inst_36068 = (state_36108[(8)]);
var inst_36096 = cljs.core.vec.call(null,inst_36068);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36108__$1,(15),out,inst_36096);
} else {
if((state_val_36109 === (2))){
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_36108__$1,(4),ch);
} else {
if((state_val_36109 === (11))){
var inst_36076 = (state_36108[(10)]);
var inst_36072 = (state_36108[(9)]);
var inst_36086 = (state_36108[(2)]);
var inst_36087 = [];
var inst_36088 = inst_36087.push(inst_36072);
var inst_36068 = inst_36087;
var inst_36069 = inst_36076;
var state_36108__$1 = (function (){var statearr_36120 = state_36108;
(statearr_36120[(7)] = inst_36069);

(statearr_36120[(11)] = inst_36086);

(statearr_36120[(8)] = inst_36068);

(statearr_36120[(12)] = inst_36088);

return statearr_36120;
})();
var statearr_36121_36145 = state_36108__$1;
(statearr_36121_36145[(2)] = null);

(statearr_36121_36145[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (9))){
var inst_36068 = (state_36108[(8)]);
var inst_36084 = cljs.core.vec.call(null,inst_36068);
var state_36108__$1 = state_36108;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_36108__$1,(11),out,inst_36084);
} else {
if((state_val_36109 === (5))){
var inst_36069 = (state_36108[(7)]);
var inst_36076 = (state_36108[(10)]);
var inst_36072 = (state_36108[(9)]);
var inst_36076__$1 = f.call(null,inst_36072);
var inst_36077 = cljs.core._EQ_.call(null,inst_36076__$1,inst_36069);
var inst_36078 = cljs.core.keyword_identical_QMARK_.call(null,inst_36069,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_36079 = (inst_36077) || (inst_36078);
var state_36108__$1 = (function (){var statearr_36122 = state_36108;
(statearr_36122[(10)] = inst_36076__$1);

return statearr_36122;
})();
if(cljs.core.truth_(inst_36079)){
var statearr_36123_36146 = state_36108__$1;
(statearr_36123_36146[(1)] = (8));

} else {
var statearr_36124_36147 = state_36108__$1;
(statearr_36124_36147[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (14))){
var inst_36101 = (state_36108[(2)]);
var inst_36102 = cljs.core.async.close_BANG_.call(null,out);
var state_36108__$1 = (function (){var statearr_36126 = state_36108;
(statearr_36126[(13)] = inst_36101);

return statearr_36126;
})();
var statearr_36127_36148 = state_36108__$1;
(statearr_36127_36148[(2)] = inst_36102);

(statearr_36127_36148[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (10))){
var inst_36091 = (state_36108[(2)]);
var state_36108__$1 = state_36108;
var statearr_36128_36149 = state_36108__$1;
(statearr_36128_36149[(2)] = inst_36091);

(statearr_36128_36149[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_36109 === (8))){
var inst_36068 = (state_36108[(8)]);
var inst_36076 = (state_36108[(10)]);
var inst_36072 = (state_36108[(9)]);
var inst_36081 = inst_36068.push(inst_36072);
var tmp36125 = inst_36068;
var inst_36068__$1 = tmp36125;
var inst_36069 = inst_36076;
var state_36108__$1 = (function (){var statearr_36129 = state_36108;
(statearr_36129[(7)] = inst_36069);

(statearr_36129[(8)] = inst_36068__$1);

(statearr_36129[(14)] = inst_36081);

return statearr_36129;
})();
var statearr_36130_36150 = state_36108__$1;
(statearr_36130_36150[(2)] = null);

(statearr_36130_36150[(1)] = (2));


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
});})(c__34231__auto___36136,out))
;
return ((function (switch__34141__auto__,c__34231__auto___36136,out){
return (function() {
var cljs$core$async$state_machine__34142__auto__ = null;
var cljs$core$async$state_machine__34142__auto____0 = (function (){
var statearr_36131 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_36131[(0)] = cljs$core$async$state_machine__34142__auto__);

(statearr_36131[(1)] = (1));

return statearr_36131;
});
var cljs$core$async$state_machine__34142__auto____1 = (function (state_36108){
while(true){
var ret_value__34143__auto__ = (function (){try{while(true){
var result__34144__auto__ = switch__34141__auto__.call(null,state_36108);
if(cljs.core.keyword_identical_QMARK_.call(null,result__34144__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__34144__auto__;
}
break;
}
}catch (e36132){if((e36132 instanceof Object)){
var ex__34145__auto__ = e36132;
var statearr_36133_36151 = state_36108;
(statearr_36133_36151[(5)] = ex__34145__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_36108);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e36132;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__34143__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__36152 = state_36108;
state_36108 = G__36152;
continue;
} else {
return ret_value__34143__auto__;
}
break;
}
});
cljs$core$async$state_machine__34142__auto__ = function(state_36108){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__34142__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__34142__auto____1.call(this,state_36108);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__34142__auto____0;
cljs$core$async$state_machine__34142__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__34142__auto____1;
return cljs$core$async$state_machine__34142__auto__;
})()
;})(switch__34141__auto__,c__34231__auto___36136,out))
})();
var state__34233__auto__ = (function (){var statearr_36134 = f__34232__auto__.call(null);
(statearr_36134[(6)] = c__34231__auto___36136);

return statearr_36134;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__34233__auto__);
});})(c__34231__auto___36136,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515300958589
