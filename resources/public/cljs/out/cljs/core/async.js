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
var G__33166 = arguments.length;
switch (G__33166) {
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
if(typeof cljs.core.async.t_cljs$core$async33167 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33167 = (function (f,blockable,meta33168){
this.f = f;
this.blockable = blockable;
this.meta33168 = meta33168;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33167.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33169,meta33168__$1){
var self__ = this;
var _33169__$1 = this;
return (new cljs.core.async.t_cljs$core$async33167(self__.f,self__.blockable,meta33168__$1));
});

cljs.core.async.t_cljs$core$async33167.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33169){
var self__ = this;
var _33169__$1 = this;
return self__.meta33168;
});

cljs.core.async.t_cljs$core$async33167.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33167.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33167.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.blockable;
});

cljs.core.async.t_cljs$core$async33167.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return self__.f;
});

cljs.core.async.t_cljs$core$async33167.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"blockable","blockable",-28395259,null),new cljs.core.Symbol(null,"meta33168","meta33168",1370537809,null)], null);
});

cljs.core.async.t_cljs$core$async33167.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33167.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33167";

cljs.core.async.t_cljs$core$async33167.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async33167");
});

cljs.core.async.__GT_t_cljs$core$async33167 = (function cljs$core$async$__GT_t_cljs$core$async33167(f__$1,blockable__$1,meta33168){
return (new cljs.core.async.t_cljs$core$async33167(f__$1,blockable__$1,meta33168));
});

}

return (new cljs.core.async.t_cljs$core$async33167(f,blockable,cljs.core.PersistentArrayMap.EMPTY));
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
var G__33173 = arguments.length;
switch (G__33173) {
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
var G__33176 = arguments.length;
switch (G__33176) {
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
var G__33179 = arguments.length;
switch (G__33179) {
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
var val_33181 = cljs.core.deref.call(null,ret);
if(cljs.core.truth_(on_caller_QMARK_)){
fn1.call(null,val_33181);
} else {
cljs.core.async.impl.dispatch.run.call(null,((function (val_33181,ret){
return (function (){
return fn1.call(null,val_33181);
});})(val_33181,ret))
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
var G__33183 = arguments.length;
switch (G__33183) {
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
var n__31066__auto___33185 = n;
var x_33186 = (0);
while(true){
if((x_33186 < n__31066__auto___33185)){
(a[x_33186] = (0));

var G__33187 = (x_33186 + (1));
x_33186 = G__33187;
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

var G__33188 = (i + (1));
i = G__33188;
continue;
}
break;
}
});
cljs.core.async.alt_flag = (function cljs$core$async$alt_flag(){
var flag = cljs.core.atom.call(null,true);
if(typeof cljs.core.async.t_cljs$core$async33189 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33189 = (function (flag,meta33190){
this.flag = flag;
this.meta33190 = meta33190;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_33191,meta33190__$1){
var self__ = this;
var _33191__$1 = this;
return (new cljs.core.async.t_cljs$core$async33189(self__.flag,meta33190__$1));
});})(flag))
;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_33191){
var self__ = this;
var _33191__$1 = this;
return self__.meta33190;
});})(flag))
;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.deref.call(null,self__.flag);
});})(flag))
;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33189.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.flag,null);

return true;
});})(flag))
;

cljs.core.async.t_cljs$core$async33189.getBasis = ((function (flag){
return (function (){
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"meta33190","meta33190",-825061982,null)], null);
});})(flag))
;

cljs.core.async.t_cljs$core$async33189.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33189.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33189";

cljs.core.async.t_cljs$core$async33189.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async33189");
});})(flag))
;

cljs.core.async.__GT_t_cljs$core$async33189 = ((function (flag){
return (function cljs$core$async$alt_flag_$___GT_t_cljs$core$async33189(flag__$1,meta33190){
return (new cljs.core.async.t_cljs$core$async33189(flag__$1,meta33190));
});})(flag))
;

}

return (new cljs.core.async.t_cljs$core$async33189(flag,cljs.core.PersistentArrayMap.EMPTY));
});
cljs.core.async.alt_handler = (function cljs$core$async$alt_handler(flag,cb){
if(typeof cljs.core.async.t_cljs$core$async33192 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33192 = (function (flag,cb,meta33193){
this.flag = flag;
this.cb = cb;
this.meta33193 = meta33193;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_33194,meta33193__$1){
var self__ = this;
var _33194__$1 = this;
return (new cljs.core.async.t_cljs$core$async33192(self__.flag,self__.cb,meta33193__$1));
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_33194){
var self__ = this;
var _33194__$1 = this;
return self__.meta33193;
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return true;
});

cljs.core.async.t_cljs$core$async33192.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.async.impl.protocols.commit.call(null,self__.flag);

return self__.cb;
});

cljs.core.async.t_cljs$core$async33192.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"flag","flag",-1565787888,null),new cljs.core.Symbol(null,"cb","cb",-2064487928,null),new cljs.core.Symbol(null,"meta33193","meta33193",-1625521107,null)], null);
});

cljs.core.async.t_cljs$core$async33192.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33192.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33192";

cljs.core.async.t_cljs$core$async33192.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async33192");
});

cljs.core.async.__GT_t_cljs$core$async33192 = (function cljs$core$async$alt_handler_$___GT_t_cljs$core$async33192(flag__$1,cb__$1,meta33193){
return (new cljs.core.async.t_cljs$core$async33192(flag__$1,cb__$1,meta33193));
});

}

return (new cljs.core.async.t_cljs$core$async33192(flag,cb,cljs.core.PersistentArrayMap.EMPTY));
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
return (function (p1__33195_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33195_SHARP_,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__33196_SHARP_){
return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__33196_SHARP_,port], null));
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
var G__33197 = (i + (1));
i = G__33197;
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
var len__31300__auto___33203 = arguments.length;
var i__31301__auto___33204 = (0);
while(true){
if((i__31301__auto___33204 < len__31300__auto___33203)){
args__31307__auto__.push((arguments[i__31301__auto___33204]));

var G__33205 = (i__31301__auto___33204 + (1));
i__31301__auto___33204 = G__33205;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((1) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((1)),(0),null)):null);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),argseq__31308__auto__);
});

cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (ports,p__33200){
var map__33201 = p__33200;
var map__33201__$1 = ((((!((map__33201 == null)))?((((map__33201.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33201.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33201):map__33201);
var opts = map__33201__$1;
throw (new Error("alts! used not in (go ...) block"));
});

cljs.core.async.alts_BANG_.cljs$lang$maxFixedArity = (1);

cljs.core.async.alts_BANG_.cljs$lang$applyTo = (function (seq33198){
var G__33199 = cljs.core.first.call(null,seq33198);
var seq33198__$1 = cljs.core.next.call(null,seq33198);
return cljs.core.async.alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33199,seq33198__$1);
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
var G__33207 = arguments.length;
switch (G__33207) {
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
var c__33106__auto___33253 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___33253){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___33253){
return (function (state_33231){
var state_val_33232 = (state_33231[(1)]);
if((state_val_33232 === (7))){
var inst_33227 = (state_33231[(2)]);
var state_33231__$1 = state_33231;
var statearr_33233_33254 = state_33231__$1;
(statearr_33233_33254[(2)] = inst_33227);

(statearr_33233_33254[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (1))){
var state_33231__$1 = state_33231;
var statearr_33234_33255 = state_33231__$1;
(statearr_33234_33255[(2)] = null);

(statearr_33234_33255[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (4))){
var inst_33210 = (state_33231[(7)]);
var inst_33210__$1 = (state_33231[(2)]);
var inst_33211 = (inst_33210__$1 == null);
var state_33231__$1 = (function (){var statearr_33235 = state_33231;
(statearr_33235[(7)] = inst_33210__$1);

return statearr_33235;
})();
if(cljs.core.truth_(inst_33211)){
var statearr_33236_33256 = state_33231__$1;
(statearr_33236_33256[(1)] = (5));

} else {
var statearr_33237_33257 = state_33231__$1;
(statearr_33237_33257[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (13))){
var state_33231__$1 = state_33231;
var statearr_33238_33258 = state_33231__$1;
(statearr_33238_33258[(2)] = null);

(statearr_33238_33258[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (6))){
var inst_33210 = (state_33231[(7)]);
var state_33231__$1 = state_33231;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33231__$1,(11),to,inst_33210);
} else {
if((state_val_33232 === (3))){
var inst_33229 = (state_33231[(2)]);
var state_33231__$1 = state_33231;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33231__$1,inst_33229);
} else {
if((state_val_33232 === (12))){
var state_33231__$1 = state_33231;
var statearr_33239_33259 = state_33231__$1;
(statearr_33239_33259[(2)] = null);

(statearr_33239_33259[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (2))){
var state_33231__$1 = state_33231;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33231__$1,(4),from);
} else {
if((state_val_33232 === (11))){
var inst_33220 = (state_33231[(2)]);
var state_33231__$1 = state_33231;
if(cljs.core.truth_(inst_33220)){
var statearr_33240_33260 = state_33231__$1;
(statearr_33240_33260[(1)] = (12));

} else {
var statearr_33241_33261 = state_33231__$1;
(statearr_33241_33261[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (9))){
var state_33231__$1 = state_33231;
var statearr_33242_33262 = state_33231__$1;
(statearr_33242_33262[(2)] = null);

(statearr_33242_33262[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (5))){
var state_33231__$1 = state_33231;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33243_33263 = state_33231__$1;
(statearr_33243_33263[(1)] = (8));

} else {
var statearr_33244_33264 = state_33231__$1;
(statearr_33244_33264[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (14))){
var inst_33225 = (state_33231[(2)]);
var state_33231__$1 = state_33231;
var statearr_33245_33265 = state_33231__$1;
(statearr_33245_33265[(2)] = inst_33225);

(statearr_33245_33265[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (10))){
var inst_33217 = (state_33231[(2)]);
var state_33231__$1 = state_33231;
var statearr_33246_33266 = state_33231__$1;
(statearr_33246_33266[(2)] = inst_33217);

(statearr_33246_33266[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33232 === (8))){
var inst_33214 = cljs.core.async.close_BANG_.call(null,to);
var state_33231__$1 = state_33231;
var statearr_33247_33267 = state_33231__$1;
(statearr_33247_33267[(2)] = inst_33214);

(statearr_33247_33267[(1)] = (10));


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
});})(c__33106__auto___33253))
;
return ((function (switch__33016__auto__,c__33106__auto___33253){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_33248 = [null,null,null,null,null,null,null,null];
(statearr_33248[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_33248[(1)] = (1));

return statearr_33248;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_33231){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33231);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33249){if((e33249 instanceof Object)){
var ex__33020__auto__ = e33249;
var statearr_33250_33268 = state_33231;
(statearr_33250_33268[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33231);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33249;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33269 = state_33231;
state_33231 = G__33269;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_33231){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_33231);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___33253))
})();
var state__33108__auto__ = (function (){var statearr_33251 = f__33107__auto__.call(null);
(statearr_33251[(6)] = c__33106__auto___33253);

return statearr_33251;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___33253))
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
return (function (p__33270){
var vec__33271 = p__33270;
var v = cljs.core.nth.call(null,vec__33271,(0),null);
var p = cljs.core.nth.call(null,vec__33271,(1),null);
var job = vec__33271;
if((job == null)){
cljs.core.async.close_BANG_.call(null,results);

return null;
} else {
var res = cljs.core.async.chan.call(null,(1),xf,ex_handler);
var c__33106__auto___33442 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___33442,res,vec__33271,v,p,job,jobs,results){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___33442,res,vec__33271,v,p,job,jobs,results){
return (function (state_33278){
var state_val_33279 = (state_33278[(1)]);
if((state_val_33279 === (1))){
var state_33278__$1 = state_33278;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33278__$1,(2),res,v);
} else {
if((state_val_33279 === (2))){
var inst_33275 = (state_33278[(2)]);
var inst_33276 = cljs.core.async.close_BANG_.call(null,res);
var state_33278__$1 = (function (){var statearr_33280 = state_33278;
(statearr_33280[(7)] = inst_33275);

return statearr_33280;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33278__$1,inst_33276);
} else {
return null;
}
}
});})(c__33106__auto___33442,res,vec__33271,v,p,job,jobs,results))
;
return ((function (switch__33016__auto__,c__33106__auto___33442,res,vec__33271,v,p,job,jobs,results){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0 = (function (){
var statearr_33281 = [null,null,null,null,null,null,null,null];
(statearr_33281[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__);

(statearr_33281[(1)] = (1));

return statearr_33281;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1 = (function (state_33278){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33278);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33282){if((e33282 instanceof Object)){
var ex__33020__auto__ = e33282;
var statearr_33283_33443 = state_33278;
(statearr_33283_33443[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33278);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33282;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33444 = state_33278;
state_33278 = G__33444;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = function(state_33278){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1.call(this,state_33278);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___33442,res,vec__33271,v,p,job,jobs,results))
})();
var state__33108__auto__ = (function (){var statearr_33284 = f__33107__auto__.call(null);
(statearr_33284[(6)] = c__33106__auto___33442);

return statearr_33284;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___33442,res,vec__33271,v,p,job,jobs,results))
);


cljs.core.async.put_BANG_.call(null,p,res);

return true;
}
});})(jobs,results))
;
var async = ((function (jobs,results,process){
return (function (p__33285){
var vec__33286 = p__33285;
var v = cljs.core.nth.call(null,vec__33286,(0),null);
var p = cljs.core.nth.call(null,vec__33286,(1),null);
var job = vec__33286;
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
var n__31066__auto___33445 = n;
var __33446 = (0);
while(true){
if((__33446 < n__31066__auto___33445)){
var G__33289_33447 = type;
var G__33289_33448__$1 = (((G__33289_33447 instanceof cljs.core.Keyword))?G__33289_33447.fqn:null);
switch (G__33289_33448__$1) {
case "compute":
var c__33106__auto___33450 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33446,c__33106__auto___33450,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (__33446,c__33106__auto___33450,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async){
return (function (state_33302){
var state_val_33303 = (state_33302[(1)]);
if((state_val_33303 === (1))){
var state_33302__$1 = state_33302;
var statearr_33304_33451 = state_33302__$1;
(statearr_33304_33451[(2)] = null);

(statearr_33304_33451[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (2))){
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33302__$1,(4),jobs);
} else {
if((state_val_33303 === (3))){
var inst_33300 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33302__$1,inst_33300);
} else {
if((state_val_33303 === (4))){
var inst_33292 = (state_33302[(2)]);
var inst_33293 = process.call(null,inst_33292);
var state_33302__$1 = state_33302;
if(cljs.core.truth_(inst_33293)){
var statearr_33305_33452 = state_33302__$1;
(statearr_33305_33452[(1)] = (5));

} else {
var statearr_33306_33453 = state_33302__$1;
(statearr_33306_33453[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (5))){
var state_33302__$1 = state_33302;
var statearr_33307_33454 = state_33302__$1;
(statearr_33307_33454[(2)] = null);

(statearr_33307_33454[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (6))){
var state_33302__$1 = state_33302;
var statearr_33308_33455 = state_33302__$1;
(statearr_33308_33455[(2)] = null);

(statearr_33308_33455[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33303 === (7))){
var inst_33298 = (state_33302[(2)]);
var state_33302__$1 = state_33302;
var statearr_33309_33456 = state_33302__$1;
(statearr_33309_33456[(2)] = inst_33298);

(statearr_33309_33456[(1)] = (3));


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
});})(__33446,c__33106__auto___33450,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async))
;
return ((function (__33446,switch__33016__auto__,c__33106__auto___33450,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0 = (function (){
var statearr_33310 = [null,null,null,null,null,null,null];
(statearr_33310[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__);

(statearr_33310[(1)] = (1));

return statearr_33310;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1 = (function (state_33302){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33302);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33311){if((e33311 instanceof Object)){
var ex__33020__auto__ = e33311;
var statearr_33312_33457 = state_33302;
(statearr_33312_33457[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33302);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33311;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33458 = state_33302;
state_33302 = G__33458;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = function(state_33302){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1.call(this,state_33302);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__;
})()
;})(__33446,switch__33016__auto__,c__33106__auto___33450,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async))
})();
var state__33108__auto__ = (function (){var statearr_33313 = f__33107__auto__.call(null);
(statearr_33313[(6)] = c__33106__auto___33450);

return statearr_33313;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(__33446,c__33106__auto___33450,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async))
);


break;
case "async":
var c__33106__auto___33459 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (__33446,c__33106__auto___33459,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (__33446,c__33106__auto___33459,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async){
return (function (state_33326){
var state_val_33327 = (state_33326[(1)]);
if((state_val_33327 === (1))){
var state_33326__$1 = state_33326;
var statearr_33328_33460 = state_33326__$1;
(statearr_33328_33460[(2)] = null);

(statearr_33328_33460[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (2))){
var state_33326__$1 = state_33326;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33326__$1,(4),jobs);
} else {
if((state_val_33327 === (3))){
var inst_33324 = (state_33326[(2)]);
var state_33326__$1 = state_33326;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33326__$1,inst_33324);
} else {
if((state_val_33327 === (4))){
var inst_33316 = (state_33326[(2)]);
var inst_33317 = async.call(null,inst_33316);
var state_33326__$1 = state_33326;
if(cljs.core.truth_(inst_33317)){
var statearr_33329_33461 = state_33326__$1;
(statearr_33329_33461[(1)] = (5));

} else {
var statearr_33330_33462 = state_33326__$1;
(statearr_33330_33462[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (5))){
var state_33326__$1 = state_33326;
var statearr_33331_33463 = state_33326__$1;
(statearr_33331_33463[(2)] = null);

(statearr_33331_33463[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (6))){
var state_33326__$1 = state_33326;
var statearr_33332_33464 = state_33326__$1;
(statearr_33332_33464[(2)] = null);

(statearr_33332_33464[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33327 === (7))){
var inst_33322 = (state_33326[(2)]);
var state_33326__$1 = state_33326;
var statearr_33333_33465 = state_33326__$1;
(statearr_33333_33465[(2)] = inst_33322);

(statearr_33333_33465[(1)] = (3));


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
});})(__33446,c__33106__auto___33459,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async))
;
return ((function (__33446,switch__33016__auto__,c__33106__auto___33459,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0 = (function (){
var statearr_33334 = [null,null,null,null,null,null,null];
(statearr_33334[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__);

(statearr_33334[(1)] = (1));

return statearr_33334;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1 = (function (state_33326){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33326);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33335){if((e33335 instanceof Object)){
var ex__33020__auto__ = e33335;
var statearr_33336_33466 = state_33326;
(statearr_33336_33466[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33326);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33335;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33467 = state_33326;
state_33326 = G__33467;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = function(state_33326){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1.call(this,state_33326);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__;
})()
;})(__33446,switch__33016__auto__,c__33106__auto___33459,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async))
})();
var state__33108__auto__ = (function (){var statearr_33337 = f__33107__auto__.call(null);
(statearr_33337[(6)] = c__33106__auto___33459);

return statearr_33337;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(__33446,c__33106__auto___33459,G__33289_33447,G__33289_33448__$1,n__31066__auto___33445,jobs,results,process,async))
);


break;
default:
throw (new Error(["No matching clause: ",cljs.core.str.cljs$core$IFn$_invoke$arity$1(G__33289_33448__$1)].join('')));

}

var G__33468 = (__33446 + (1));
__33446 = G__33468;
continue;
} else {
}
break;
}

var c__33106__auto___33469 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___33469,jobs,results,process,async){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___33469,jobs,results,process,async){
return (function (state_33359){
var state_val_33360 = (state_33359[(1)]);
if((state_val_33360 === (1))){
var state_33359__$1 = state_33359;
var statearr_33361_33470 = state_33359__$1;
(statearr_33361_33470[(2)] = null);

(statearr_33361_33470[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (2))){
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33359__$1,(4),from);
} else {
if((state_val_33360 === (3))){
var inst_33357 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33359__$1,inst_33357);
} else {
if((state_val_33360 === (4))){
var inst_33340 = (state_33359[(7)]);
var inst_33340__$1 = (state_33359[(2)]);
var inst_33341 = (inst_33340__$1 == null);
var state_33359__$1 = (function (){var statearr_33362 = state_33359;
(statearr_33362[(7)] = inst_33340__$1);

return statearr_33362;
})();
if(cljs.core.truth_(inst_33341)){
var statearr_33363_33471 = state_33359__$1;
(statearr_33363_33471[(1)] = (5));

} else {
var statearr_33364_33472 = state_33359__$1;
(statearr_33364_33472[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (5))){
var inst_33343 = cljs.core.async.close_BANG_.call(null,jobs);
var state_33359__$1 = state_33359;
var statearr_33365_33473 = state_33359__$1;
(statearr_33365_33473[(2)] = inst_33343);

(statearr_33365_33473[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (6))){
var inst_33340 = (state_33359[(7)]);
var inst_33345 = (state_33359[(8)]);
var inst_33345__$1 = cljs.core.async.chan.call(null,(1));
var inst_33346 = cljs.core.PersistentVector.EMPTY_NODE;
var inst_33347 = [inst_33340,inst_33345__$1];
var inst_33348 = (new cljs.core.PersistentVector(null,2,(5),inst_33346,inst_33347,null));
var state_33359__$1 = (function (){var statearr_33366 = state_33359;
(statearr_33366[(8)] = inst_33345__$1);

return statearr_33366;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33359__$1,(8),jobs,inst_33348);
} else {
if((state_val_33360 === (7))){
var inst_33355 = (state_33359[(2)]);
var state_33359__$1 = state_33359;
var statearr_33367_33474 = state_33359__$1;
(statearr_33367_33474[(2)] = inst_33355);

(statearr_33367_33474[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33360 === (8))){
var inst_33345 = (state_33359[(8)]);
var inst_33350 = (state_33359[(2)]);
var state_33359__$1 = (function (){var statearr_33368 = state_33359;
(statearr_33368[(9)] = inst_33350);

return statearr_33368;
})();
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33359__$1,(9),results,inst_33345);
} else {
if((state_val_33360 === (9))){
var inst_33352 = (state_33359[(2)]);
var state_33359__$1 = (function (){var statearr_33369 = state_33359;
(statearr_33369[(10)] = inst_33352);

return statearr_33369;
})();
var statearr_33370_33475 = state_33359__$1;
(statearr_33370_33475[(2)] = null);

(statearr_33370_33475[(1)] = (2));


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
});})(c__33106__auto___33469,jobs,results,process,async))
;
return ((function (switch__33016__auto__,c__33106__auto___33469,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0 = (function (){
var statearr_33371 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_33371[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__);

(statearr_33371[(1)] = (1));

return statearr_33371;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1 = (function (state_33359){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33359);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33372){if((e33372 instanceof Object)){
var ex__33020__auto__ = e33372;
var statearr_33373_33476 = state_33359;
(statearr_33373_33476[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33359);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33372;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33477 = state_33359;
state_33359 = G__33477;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = function(state_33359){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1.call(this,state_33359);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___33469,jobs,results,process,async))
})();
var state__33108__auto__ = (function (){var statearr_33374 = f__33107__auto__.call(null);
(statearr_33374[(6)] = c__33106__auto___33469);

return statearr_33374;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___33469,jobs,results,process,async))
);


var c__33106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto__,jobs,results,process,async){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto__,jobs,results,process,async){
return (function (state_33412){
var state_val_33413 = (state_33412[(1)]);
if((state_val_33413 === (7))){
var inst_33408 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33414_33478 = state_33412__$1;
(statearr_33414_33478[(2)] = inst_33408);

(statearr_33414_33478[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (20))){
var state_33412__$1 = state_33412;
var statearr_33415_33479 = state_33412__$1;
(statearr_33415_33479[(2)] = null);

(statearr_33415_33479[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (1))){
var state_33412__$1 = state_33412;
var statearr_33416_33480 = state_33412__$1;
(statearr_33416_33480[(2)] = null);

(statearr_33416_33480[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (4))){
var inst_33377 = (state_33412[(7)]);
var inst_33377__$1 = (state_33412[(2)]);
var inst_33378 = (inst_33377__$1 == null);
var state_33412__$1 = (function (){var statearr_33417 = state_33412;
(statearr_33417[(7)] = inst_33377__$1);

return statearr_33417;
})();
if(cljs.core.truth_(inst_33378)){
var statearr_33418_33481 = state_33412__$1;
(statearr_33418_33481[(1)] = (5));

} else {
var statearr_33419_33482 = state_33412__$1;
(statearr_33419_33482[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (15))){
var inst_33390 = (state_33412[(8)]);
var state_33412__$1 = state_33412;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33412__$1,(18),to,inst_33390);
} else {
if((state_val_33413 === (21))){
var inst_33403 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33420_33483 = state_33412__$1;
(statearr_33420_33483[(2)] = inst_33403);

(statearr_33420_33483[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (13))){
var inst_33405 = (state_33412[(2)]);
var state_33412__$1 = (function (){var statearr_33421 = state_33412;
(statearr_33421[(9)] = inst_33405);

return statearr_33421;
})();
var statearr_33422_33484 = state_33412__$1;
(statearr_33422_33484[(2)] = null);

(statearr_33422_33484[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (6))){
var inst_33377 = (state_33412[(7)]);
var state_33412__$1 = state_33412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33412__$1,(11),inst_33377);
} else {
if((state_val_33413 === (17))){
var inst_33398 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
if(cljs.core.truth_(inst_33398)){
var statearr_33423_33485 = state_33412__$1;
(statearr_33423_33485[(1)] = (19));

} else {
var statearr_33424_33486 = state_33412__$1;
(statearr_33424_33486[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (3))){
var inst_33410 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33412__$1,inst_33410);
} else {
if((state_val_33413 === (12))){
var inst_33387 = (state_33412[(10)]);
var state_33412__$1 = state_33412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33412__$1,(14),inst_33387);
} else {
if((state_val_33413 === (2))){
var state_33412__$1 = state_33412;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33412__$1,(4),results);
} else {
if((state_val_33413 === (19))){
var state_33412__$1 = state_33412;
var statearr_33425_33487 = state_33412__$1;
(statearr_33425_33487[(2)] = null);

(statearr_33425_33487[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (11))){
var inst_33387 = (state_33412[(2)]);
var state_33412__$1 = (function (){var statearr_33426 = state_33412;
(statearr_33426[(10)] = inst_33387);

return statearr_33426;
})();
var statearr_33427_33488 = state_33412__$1;
(statearr_33427_33488[(2)] = null);

(statearr_33427_33488[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (9))){
var state_33412__$1 = state_33412;
var statearr_33428_33489 = state_33412__$1;
(statearr_33428_33489[(2)] = null);

(statearr_33428_33489[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (5))){
var state_33412__$1 = state_33412;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33429_33490 = state_33412__$1;
(statearr_33429_33490[(1)] = (8));

} else {
var statearr_33430_33491 = state_33412__$1;
(statearr_33430_33491[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (14))){
var inst_33392 = (state_33412[(11)]);
var inst_33390 = (state_33412[(8)]);
var inst_33390__$1 = (state_33412[(2)]);
var inst_33391 = (inst_33390__$1 == null);
var inst_33392__$1 = cljs.core.not.call(null,inst_33391);
var state_33412__$1 = (function (){var statearr_33431 = state_33412;
(statearr_33431[(11)] = inst_33392__$1);

(statearr_33431[(8)] = inst_33390__$1);

return statearr_33431;
})();
if(inst_33392__$1){
var statearr_33432_33492 = state_33412__$1;
(statearr_33432_33492[(1)] = (15));

} else {
var statearr_33433_33493 = state_33412__$1;
(statearr_33433_33493[(1)] = (16));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (16))){
var inst_33392 = (state_33412[(11)]);
var state_33412__$1 = state_33412;
var statearr_33434_33494 = state_33412__$1;
(statearr_33434_33494[(2)] = inst_33392);

(statearr_33434_33494[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (10))){
var inst_33384 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33435_33495 = state_33412__$1;
(statearr_33435_33495[(2)] = inst_33384);

(statearr_33435_33495[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (18))){
var inst_33395 = (state_33412[(2)]);
var state_33412__$1 = state_33412;
var statearr_33436_33496 = state_33412__$1;
(statearr_33436_33496[(2)] = inst_33395);

(statearr_33436_33496[(1)] = (17));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33413 === (8))){
var inst_33381 = cljs.core.async.close_BANG_.call(null,to);
var state_33412__$1 = state_33412;
var statearr_33437_33497 = state_33412__$1;
(statearr_33437_33497[(2)] = inst_33381);

(statearr_33437_33497[(1)] = (10));


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
});})(c__33106__auto__,jobs,results,process,async))
;
return ((function (switch__33016__auto__,c__33106__auto__,jobs,results,process,async){
return (function() {
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = null;
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0 = (function (){
var statearr_33438 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33438[(0)] = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__);

(statearr_33438[(1)] = (1));

return statearr_33438;
});
var cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1 = (function (state_33412){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33412);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33439){if((e33439 instanceof Object)){
var ex__33020__auto__ = e33439;
var statearr_33440_33498 = state_33412;
(statearr_33440_33498[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33412);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33439;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33499 = state_33412;
state_33412 = G__33499;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__ = function(state_33412){
switch(arguments.length){
case 0:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1.call(this,state_33412);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____0;
cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$pipeline_STAR__$_state_machine__33017__auto____1;
return cljs$core$async$pipeline_STAR__$_state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto__,jobs,results,process,async))
})();
var state__33108__auto__ = (function (){var statearr_33441 = f__33107__auto__.call(null);
(statearr_33441[(6)] = c__33106__auto__);

return statearr_33441;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto__,jobs,results,process,async))
);

return c__33106__auto__;
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
var G__33501 = arguments.length;
switch (G__33501) {
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
var G__33504 = arguments.length;
switch (G__33504) {
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
var G__33507 = arguments.length;
switch (G__33507) {
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
var c__33106__auto___33556 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___33556,tc,fc){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___33556,tc,fc){
return (function (state_33533){
var state_val_33534 = (state_33533[(1)]);
if((state_val_33534 === (7))){
var inst_33529 = (state_33533[(2)]);
var state_33533__$1 = state_33533;
var statearr_33535_33557 = state_33533__$1;
(statearr_33535_33557[(2)] = inst_33529);

(statearr_33535_33557[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (1))){
var state_33533__$1 = state_33533;
var statearr_33536_33558 = state_33533__$1;
(statearr_33536_33558[(2)] = null);

(statearr_33536_33558[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (4))){
var inst_33510 = (state_33533[(7)]);
var inst_33510__$1 = (state_33533[(2)]);
var inst_33511 = (inst_33510__$1 == null);
var state_33533__$1 = (function (){var statearr_33537 = state_33533;
(statearr_33537[(7)] = inst_33510__$1);

return statearr_33537;
})();
if(cljs.core.truth_(inst_33511)){
var statearr_33538_33559 = state_33533__$1;
(statearr_33538_33559[(1)] = (5));

} else {
var statearr_33539_33560 = state_33533__$1;
(statearr_33539_33560[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (13))){
var state_33533__$1 = state_33533;
var statearr_33540_33561 = state_33533__$1;
(statearr_33540_33561[(2)] = null);

(statearr_33540_33561[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (6))){
var inst_33510 = (state_33533[(7)]);
var inst_33516 = p.call(null,inst_33510);
var state_33533__$1 = state_33533;
if(cljs.core.truth_(inst_33516)){
var statearr_33541_33562 = state_33533__$1;
(statearr_33541_33562[(1)] = (9));

} else {
var statearr_33542_33563 = state_33533__$1;
(statearr_33542_33563[(1)] = (10));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (3))){
var inst_33531 = (state_33533[(2)]);
var state_33533__$1 = state_33533;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33533__$1,inst_33531);
} else {
if((state_val_33534 === (12))){
var state_33533__$1 = state_33533;
var statearr_33543_33564 = state_33533__$1;
(statearr_33543_33564[(2)] = null);

(statearr_33543_33564[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (2))){
var state_33533__$1 = state_33533;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33533__$1,(4),ch);
} else {
if((state_val_33534 === (11))){
var inst_33510 = (state_33533[(7)]);
var inst_33520 = (state_33533[(2)]);
var state_33533__$1 = state_33533;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33533__$1,(8),inst_33520,inst_33510);
} else {
if((state_val_33534 === (9))){
var state_33533__$1 = state_33533;
var statearr_33544_33565 = state_33533__$1;
(statearr_33544_33565[(2)] = tc);

(statearr_33544_33565[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (5))){
var inst_33513 = cljs.core.async.close_BANG_.call(null,tc);
var inst_33514 = cljs.core.async.close_BANG_.call(null,fc);
var state_33533__$1 = (function (){var statearr_33545 = state_33533;
(statearr_33545[(8)] = inst_33513);

return statearr_33545;
})();
var statearr_33546_33566 = state_33533__$1;
(statearr_33546_33566[(2)] = inst_33514);

(statearr_33546_33566[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (14))){
var inst_33527 = (state_33533[(2)]);
var state_33533__$1 = state_33533;
var statearr_33547_33567 = state_33533__$1;
(statearr_33547_33567[(2)] = inst_33527);

(statearr_33547_33567[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (10))){
var state_33533__$1 = state_33533;
var statearr_33548_33568 = state_33533__$1;
(statearr_33548_33568[(2)] = fc);

(statearr_33548_33568[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33534 === (8))){
var inst_33522 = (state_33533[(2)]);
var state_33533__$1 = state_33533;
if(cljs.core.truth_(inst_33522)){
var statearr_33549_33569 = state_33533__$1;
(statearr_33549_33569[(1)] = (12));

} else {
var statearr_33550_33570 = state_33533__$1;
(statearr_33550_33570[(1)] = (13));

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
});})(c__33106__auto___33556,tc,fc))
;
return ((function (switch__33016__auto__,c__33106__auto___33556,tc,fc){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_33551 = [null,null,null,null,null,null,null,null,null];
(statearr_33551[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_33551[(1)] = (1));

return statearr_33551;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_33533){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33533);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33552){if((e33552 instanceof Object)){
var ex__33020__auto__ = e33552;
var statearr_33553_33571 = state_33533;
(statearr_33553_33571[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33533);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33552;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33572 = state_33533;
state_33533 = G__33572;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_33533){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_33533);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___33556,tc,fc))
})();
var state__33108__auto__ = (function (){var statearr_33554 = f__33107__auto__.call(null);
(statearr_33554[(6)] = c__33106__auto___33556);

return statearr_33554;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___33556,tc,fc))
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
var c__33106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto__){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto__){
return (function (state_33593){
var state_val_33594 = (state_33593[(1)]);
if((state_val_33594 === (7))){
var inst_33589 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
var statearr_33595_33613 = state_33593__$1;
(statearr_33595_33613[(2)] = inst_33589);

(statearr_33595_33613[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (1))){
var inst_33573 = init;
var state_33593__$1 = (function (){var statearr_33596 = state_33593;
(statearr_33596[(7)] = inst_33573);

return statearr_33596;
})();
var statearr_33597_33614 = state_33593__$1;
(statearr_33597_33614[(2)] = null);

(statearr_33597_33614[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (4))){
var inst_33576 = (state_33593[(8)]);
var inst_33576__$1 = (state_33593[(2)]);
var inst_33577 = (inst_33576__$1 == null);
var state_33593__$1 = (function (){var statearr_33598 = state_33593;
(statearr_33598[(8)] = inst_33576__$1);

return statearr_33598;
})();
if(cljs.core.truth_(inst_33577)){
var statearr_33599_33615 = state_33593__$1;
(statearr_33599_33615[(1)] = (5));

} else {
var statearr_33600_33616 = state_33593__$1;
(statearr_33600_33616[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (6))){
var inst_33573 = (state_33593[(7)]);
var inst_33580 = (state_33593[(9)]);
var inst_33576 = (state_33593[(8)]);
var inst_33580__$1 = f.call(null,inst_33573,inst_33576);
var inst_33581 = cljs.core.reduced_QMARK_.call(null,inst_33580__$1);
var state_33593__$1 = (function (){var statearr_33601 = state_33593;
(statearr_33601[(9)] = inst_33580__$1);

return statearr_33601;
})();
if(inst_33581){
var statearr_33602_33617 = state_33593__$1;
(statearr_33602_33617[(1)] = (8));

} else {
var statearr_33603_33618 = state_33593__$1;
(statearr_33603_33618[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (3))){
var inst_33591 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33593__$1,inst_33591);
} else {
if((state_val_33594 === (2))){
var state_33593__$1 = state_33593;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33593__$1,(4),ch);
} else {
if((state_val_33594 === (9))){
var inst_33580 = (state_33593[(9)]);
var inst_33573 = inst_33580;
var state_33593__$1 = (function (){var statearr_33604 = state_33593;
(statearr_33604[(7)] = inst_33573);

return statearr_33604;
})();
var statearr_33605_33619 = state_33593__$1;
(statearr_33605_33619[(2)] = null);

(statearr_33605_33619[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (5))){
var inst_33573 = (state_33593[(7)]);
var state_33593__$1 = state_33593;
var statearr_33606_33620 = state_33593__$1;
(statearr_33606_33620[(2)] = inst_33573);

(statearr_33606_33620[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (10))){
var inst_33587 = (state_33593[(2)]);
var state_33593__$1 = state_33593;
var statearr_33607_33621 = state_33593__$1;
(statearr_33607_33621[(2)] = inst_33587);

(statearr_33607_33621[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33594 === (8))){
var inst_33580 = (state_33593[(9)]);
var inst_33583 = cljs.core.deref.call(null,inst_33580);
var state_33593__$1 = state_33593;
var statearr_33608_33622 = state_33593__$1;
(statearr_33608_33622[(2)] = inst_33583);

(statearr_33608_33622[(1)] = (10));


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
});})(c__33106__auto__))
;
return ((function (switch__33016__auto__,c__33106__auto__){
return (function() {
var cljs$core$async$reduce_$_state_machine__33017__auto__ = null;
var cljs$core$async$reduce_$_state_machine__33017__auto____0 = (function (){
var statearr_33609 = [null,null,null,null,null,null,null,null,null,null];
(statearr_33609[(0)] = cljs$core$async$reduce_$_state_machine__33017__auto__);

(statearr_33609[(1)] = (1));

return statearr_33609;
});
var cljs$core$async$reduce_$_state_machine__33017__auto____1 = (function (state_33593){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33593);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33610){if((e33610 instanceof Object)){
var ex__33020__auto__ = e33610;
var statearr_33611_33623 = state_33593;
(statearr_33611_33623[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33593);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33610;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33624 = state_33593;
state_33593 = G__33624;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$reduce_$_state_machine__33017__auto__ = function(state_33593){
switch(arguments.length){
case 0:
return cljs$core$async$reduce_$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$reduce_$_state_machine__33017__auto____1.call(this,state_33593);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$reduce_$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$reduce_$_state_machine__33017__auto____0;
cljs$core$async$reduce_$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$reduce_$_state_machine__33017__auto____1;
return cljs$core$async$reduce_$_state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto__))
})();
var state__33108__auto__ = (function (){var statearr_33612 = f__33107__auto__.call(null);
(statearr_33612[(6)] = c__33106__auto__);

return statearr_33612;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto__))
);

return c__33106__auto__;
});
/**
 * async/reduces a channel with a transformation (xform f).
 *   Returns a channel containing the result.  ch must close before
 *   transduce produces a result.
 */
cljs.core.async.transduce = (function cljs$core$async$transduce(xform,f,init,ch){
var f__$1 = xform.call(null,f);
var c__33106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto__,f__$1){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto__,f__$1){
return (function (state_33630){
var state_val_33631 = (state_33630[(1)]);
if((state_val_33631 === (1))){
var inst_33625 = cljs.core.async.reduce.call(null,f__$1,init,ch);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33630__$1,(2),inst_33625);
} else {
if((state_val_33631 === (2))){
var inst_33627 = (state_33630[(2)]);
var inst_33628 = f__$1.call(null,inst_33627);
var state_33630__$1 = state_33630;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33630__$1,inst_33628);
} else {
return null;
}
}
});})(c__33106__auto__,f__$1))
;
return ((function (switch__33016__auto__,c__33106__auto__,f__$1){
return (function() {
var cljs$core$async$transduce_$_state_machine__33017__auto__ = null;
var cljs$core$async$transduce_$_state_machine__33017__auto____0 = (function (){
var statearr_33632 = [null,null,null,null,null,null,null];
(statearr_33632[(0)] = cljs$core$async$transduce_$_state_machine__33017__auto__);

(statearr_33632[(1)] = (1));

return statearr_33632;
});
var cljs$core$async$transduce_$_state_machine__33017__auto____1 = (function (state_33630){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33630);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33633){if((e33633 instanceof Object)){
var ex__33020__auto__ = e33633;
var statearr_33634_33636 = state_33630;
(statearr_33634_33636[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33630);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33633;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33637 = state_33630;
state_33630 = G__33637;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$transduce_$_state_machine__33017__auto__ = function(state_33630){
switch(arguments.length){
case 0:
return cljs$core$async$transduce_$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$transduce_$_state_machine__33017__auto____1.call(this,state_33630);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$transduce_$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$transduce_$_state_machine__33017__auto____0;
cljs$core$async$transduce_$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$transduce_$_state_machine__33017__auto____1;
return cljs$core$async$transduce_$_state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto__,f__$1))
})();
var state__33108__auto__ = (function (){var statearr_33635 = f__33107__auto__.call(null);
(statearr_33635[(6)] = c__33106__auto__);

return statearr_33635;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto__,f__$1))
);

return c__33106__auto__;
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
var G__33639 = arguments.length;
switch (G__33639) {
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
var c__33106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto__){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto__){
return (function (state_33664){
var state_val_33665 = (state_33664[(1)]);
if((state_val_33665 === (7))){
var inst_33646 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
var statearr_33666_33687 = state_33664__$1;
(statearr_33666_33687[(2)] = inst_33646);

(statearr_33666_33687[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (1))){
var inst_33640 = cljs.core.seq.call(null,coll);
var inst_33641 = inst_33640;
var state_33664__$1 = (function (){var statearr_33667 = state_33664;
(statearr_33667[(7)] = inst_33641);

return statearr_33667;
})();
var statearr_33668_33688 = state_33664__$1;
(statearr_33668_33688[(2)] = null);

(statearr_33668_33688[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (4))){
var inst_33641 = (state_33664[(7)]);
var inst_33644 = cljs.core.first.call(null,inst_33641);
var state_33664__$1 = state_33664;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_33664__$1,(7),ch,inst_33644);
} else {
if((state_val_33665 === (13))){
var inst_33658 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
var statearr_33669_33689 = state_33664__$1;
(statearr_33669_33689[(2)] = inst_33658);

(statearr_33669_33689[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (6))){
var inst_33649 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
if(cljs.core.truth_(inst_33649)){
var statearr_33670_33690 = state_33664__$1;
(statearr_33670_33690[(1)] = (8));

} else {
var statearr_33671_33691 = state_33664__$1;
(statearr_33671_33691[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (3))){
var inst_33662 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33664__$1,inst_33662);
} else {
if((state_val_33665 === (12))){
var state_33664__$1 = state_33664;
var statearr_33672_33692 = state_33664__$1;
(statearr_33672_33692[(2)] = null);

(statearr_33672_33692[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (2))){
var inst_33641 = (state_33664[(7)]);
var state_33664__$1 = state_33664;
if(cljs.core.truth_(inst_33641)){
var statearr_33673_33693 = state_33664__$1;
(statearr_33673_33693[(1)] = (4));

} else {
var statearr_33674_33694 = state_33664__$1;
(statearr_33674_33694[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (11))){
var inst_33655 = cljs.core.async.close_BANG_.call(null,ch);
var state_33664__$1 = state_33664;
var statearr_33675_33695 = state_33664__$1;
(statearr_33675_33695[(2)] = inst_33655);

(statearr_33675_33695[(1)] = (13));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (9))){
var state_33664__$1 = state_33664;
if(cljs.core.truth_(close_QMARK_)){
var statearr_33676_33696 = state_33664__$1;
(statearr_33676_33696[(1)] = (11));

} else {
var statearr_33677_33697 = state_33664__$1;
(statearr_33677_33697[(1)] = (12));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (5))){
var inst_33641 = (state_33664[(7)]);
var state_33664__$1 = state_33664;
var statearr_33678_33698 = state_33664__$1;
(statearr_33678_33698[(2)] = inst_33641);

(statearr_33678_33698[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (10))){
var inst_33660 = (state_33664[(2)]);
var state_33664__$1 = state_33664;
var statearr_33679_33699 = state_33664__$1;
(statearr_33679_33699[(2)] = inst_33660);

(statearr_33679_33699[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33665 === (8))){
var inst_33641 = (state_33664[(7)]);
var inst_33651 = cljs.core.next.call(null,inst_33641);
var inst_33641__$1 = inst_33651;
var state_33664__$1 = (function (){var statearr_33680 = state_33664;
(statearr_33680[(7)] = inst_33641__$1);

return statearr_33680;
})();
var statearr_33681_33700 = state_33664__$1;
(statearr_33681_33700[(2)] = null);

(statearr_33681_33700[(1)] = (2));


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
});})(c__33106__auto__))
;
return ((function (switch__33016__auto__,c__33106__auto__){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_33682 = [null,null,null,null,null,null,null,null];
(statearr_33682[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_33682[(1)] = (1));

return statearr_33682;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_33664){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33664);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33683){if((e33683 instanceof Object)){
var ex__33020__auto__ = e33683;
var statearr_33684_33701 = state_33664;
(statearr_33684_33701[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33664);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33683;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33702 = state_33664;
state_33664 = G__33702;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_33664){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_33664);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto__))
})();
var state__33108__auto__ = (function (){var statearr_33685 = f__33107__auto__.call(null);
(statearr_33685[(6)] = c__33106__auto__);

return statearr_33685;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto__))
);

return c__33106__auto__;
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
if(typeof cljs.core.async.t_cljs$core$async33703 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Mult}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async33703 = (function (ch,cs,meta33704){
this.ch = ch;
this.cs = cs;
this.meta33704 = meta33704;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_33705,meta33704__$1){
var self__ = this;
var _33705__$1 = this;
return (new cljs.core.async.t_cljs$core$async33703(self__.ch,self__.cs,meta33704__$1));
});})(cs))
;

cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_33705){
var self__ = this;
var _33705__$1 = this;
return self__.meta33704;
});})(cs))
;

cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(cs))
;

cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$Mult$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$1,close_QMARK_){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$1,close_QMARK_);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$1){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$1);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33703.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return null;
});})(cs))
;

cljs.core.async.t_cljs$core$async33703.getBasis = ((function (cs){
return (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"meta33704","meta33704",-1233332078,null)], null);
});})(cs))
;

cljs.core.async.t_cljs$core$async33703.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async33703.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async33703";

cljs.core.async.t_cljs$core$async33703.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async33703");
});})(cs))
;

cljs.core.async.__GT_t_cljs$core$async33703 = ((function (cs){
return (function cljs$core$async$mult_$___GT_t_cljs$core$async33703(ch__$1,cs__$1,meta33704){
return (new cljs.core.async.t_cljs$core$async33703(ch__$1,cs__$1,meta33704));
});})(cs))
;

}

return (new cljs.core.async.t_cljs$core$async33703(ch,cs,cljs.core.PersistentArrayMap.EMPTY));
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
var c__33106__auto___33925 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___33925,cs,m,dchan,dctr,done){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___33925,cs,m,dchan,dctr,done){
return (function (state_33840){
var state_val_33841 = (state_33840[(1)]);
if((state_val_33841 === (7))){
var inst_33836 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33842_33926 = state_33840__$1;
(statearr_33842_33926[(2)] = inst_33836);

(statearr_33842_33926[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (20))){
var inst_33739 = (state_33840[(7)]);
var inst_33751 = cljs.core.first.call(null,inst_33739);
var inst_33752 = cljs.core.nth.call(null,inst_33751,(0),null);
var inst_33753 = cljs.core.nth.call(null,inst_33751,(1),null);
var state_33840__$1 = (function (){var statearr_33843 = state_33840;
(statearr_33843[(8)] = inst_33752);

return statearr_33843;
})();
if(cljs.core.truth_(inst_33753)){
var statearr_33844_33927 = state_33840__$1;
(statearr_33844_33927[(1)] = (22));

} else {
var statearr_33845_33928 = state_33840__$1;
(statearr_33845_33928[(1)] = (23));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (27))){
var inst_33708 = (state_33840[(9)]);
var inst_33783 = (state_33840[(10)]);
var inst_33781 = (state_33840[(11)]);
var inst_33788 = (state_33840[(12)]);
var inst_33788__$1 = cljs.core._nth.call(null,inst_33781,inst_33783);
var inst_33789 = cljs.core.async.put_BANG_.call(null,inst_33788__$1,inst_33708,done);
var state_33840__$1 = (function (){var statearr_33846 = state_33840;
(statearr_33846[(12)] = inst_33788__$1);

return statearr_33846;
})();
if(cljs.core.truth_(inst_33789)){
var statearr_33847_33929 = state_33840__$1;
(statearr_33847_33929[(1)] = (30));

} else {
var statearr_33848_33930 = state_33840__$1;
(statearr_33848_33930[(1)] = (31));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (1))){
var state_33840__$1 = state_33840;
var statearr_33849_33931 = state_33840__$1;
(statearr_33849_33931[(2)] = null);

(statearr_33849_33931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (24))){
var inst_33739 = (state_33840[(7)]);
var inst_33758 = (state_33840[(2)]);
var inst_33759 = cljs.core.next.call(null,inst_33739);
var inst_33717 = inst_33759;
var inst_33718 = null;
var inst_33719 = (0);
var inst_33720 = (0);
var state_33840__$1 = (function (){var statearr_33850 = state_33840;
(statearr_33850[(13)] = inst_33719);

(statearr_33850[(14)] = inst_33758);

(statearr_33850[(15)] = inst_33717);

(statearr_33850[(16)] = inst_33720);

(statearr_33850[(17)] = inst_33718);

return statearr_33850;
})();
var statearr_33851_33932 = state_33840__$1;
(statearr_33851_33932[(2)] = null);

(statearr_33851_33932[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (39))){
var state_33840__$1 = state_33840;
var statearr_33855_33933 = state_33840__$1;
(statearr_33855_33933[(2)] = null);

(statearr_33855_33933[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (4))){
var inst_33708 = (state_33840[(9)]);
var inst_33708__$1 = (state_33840[(2)]);
var inst_33709 = (inst_33708__$1 == null);
var state_33840__$1 = (function (){var statearr_33856 = state_33840;
(statearr_33856[(9)] = inst_33708__$1);

return statearr_33856;
})();
if(cljs.core.truth_(inst_33709)){
var statearr_33857_33934 = state_33840__$1;
(statearr_33857_33934[(1)] = (5));

} else {
var statearr_33858_33935 = state_33840__$1;
(statearr_33858_33935[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (15))){
var inst_33719 = (state_33840[(13)]);
var inst_33717 = (state_33840[(15)]);
var inst_33720 = (state_33840[(16)]);
var inst_33718 = (state_33840[(17)]);
var inst_33735 = (state_33840[(2)]);
var inst_33736 = (inst_33720 + (1));
var tmp33852 = inst_33719;
var tmp33853 = inst_33717;
var tmp33854 = inst_33718;
var inst_33717__$1 = tmp33853;
var inst_33718__$1 = tmp33854;
var inst_33719__$1 = tmp33852;
var inst_33720__$1 = inst_33736;
var state_33840__$1 = (function (){var statearr_33859 = state_33840;
(statearr_33859[(13)] = inst_33719__$1);

(statearr_33859[(15)] = inst_33717__$1);

(statearr_33859[(16)] = inst_33720__$1);

(statearr_33859[(18)] = inst_33735);

(statearr_33859[(17)] = inst_33718__$1);

return statearr_33859;
})();
var statearr_33860_33936 = state_33840__$1;
(statearr_33860_33936[(2)] = null);

(statearr_33860_33936[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (21))){
var inst_33762 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33864_33937 = state_33840__$1;
(statearr_33864_33937[(2)] = inst_33762);

(statearr_33864_33937[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (31))){
var inst_33788 = (state_33840[(12)]);
var inst_33792 = done.call(null,null);
var inst_33793 = cljs.core.async.untap_STAR_.call(null,m,inst_33788);
var state_33840__$1 = (function (){var statearr_33865 = state_33840;
(statearr_33865[(19)] = inst_33792);

return statearr_33865;
})();
var statearr_33866_33938 = state_33840__$1;
(statearr_33866_33938[(2)] = inst_33793);

(statearr_33866_33938[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (32))){
var inst_33782 = (state_33840[(20)]);
var inst_33780 = (state_33840[(21)]);
var inst_33783 = (state_33840[(10)]);
var inst_33781 = (state_33840[(11)]);
var inst_33795 = (state_33840[(2)]);
var inst_33796 = (inst_33783 + (1));
var tmp33861 = inst_33782;
var tmp33862 = inst_33780;
var tmp33863 = inst_33781;
var inst_33780__$1 = tmp33862;
var inst_33781__$1 = tmp33863;
var inst_33782__$1 = tmp33861;
var inst_33783__$1 = inst_33796;
var state_33840__$1 = (function (){var statearr_33867 = state_33840;
(statearr_33867[(20)] = inst_33782__$1);

(statearr_33867[(21)] = inst_33780__$1);

(statearr_33867[(10)] = inst_33783__$1);

(statearr_33867[(11)] = inst_33781__$1);

(statearr_33867[(22)] = inst_33795);

return statearr_33867;
})();
var statearr_33868_33939 = state_33840__$1;
(statearr_33868_33939[(2)] = null);

(statearr_33868_33939[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (40))){
var inst_33808 = (state_33840[(23)]);
var inst_33812 = done.call(null,null);
var inst_33813 = cljs.core.async.untap_STAR_.call(null,m,inst_33808);
var state_33840__$1 = (function (){var statearr_33869 = state_33840;
(statearr_33869[(24)] = inst_33812);

return statearr_33869;
})();
var statearr_33870_33940 = state_33840__$1;
(statearr_33870_33940[(2)] = inst_33813);

(statearr_33870_33940[(1)] = (41));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (33))){
var inst_33799 = (state_33840[(25)]);
var inst_33801 = cljs.core.chunked_seq_QMARK_.call(null,inst_33799);
var state_33840__$1 = state_33840;
if(inst_33801){
var statearr_33871_33941 = state_33840__$1;
(statearr_33871_33941[(1)] = (36));

} else {
var statearr_33872_33942 = state_33840__$1;
(statearr_33872_33942[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (13))){
var inst_33729 = (state_33840[(26)]);
var inst_33732 = cljs.core.async.close_BANG_.call(null,inst_33729);
var state_33840__$1 = state_33840;
var statearr_33873_33943 = state_33840__$1;
(statearr_33873_33943[(2)] = inst_33732);

(statearr_33873_33943[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (22))){
var inst_33752 = (state_33840[(8)]);
var inst_33755 = cljs.core.async.close_BANG_.call(null,inst_33752);
var state_33840__$1 = state_33840;
var statearr_33874_33944 = state_33840__$1;
(statearr_33874_33944[(2)] = inst_33755);

(statearr_33874_33944[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (36))){
var inst_33799 = (state_33840[(25)]);
var inst_33803 = cljs.core.chunk_first.call(null,inst_33799);
var inst_33804 = cljs.core.chunk_rest.call(null,inst_33799);
var inst_33805 = cljs.core.count.call(null,inst_33803);
var inst_33780 = inst_33804;
var inst_33781 = inst_33803;
var inst_33782 = inst_33805;
var inst_33783 = (0);
var state_33840__$1 = (function (){var statearr_33875 = state_33840;
(statearr_33875[(20)] = inst_33782);

(statearr_33875[(21)] = inst_33780);

(statearr_33875[(10)] = inst_33783);

(statearr_33875[(11)] = inst_33781);

return statearr_33875;
})();
var statearr_33876_33945 = state_33840__$1;
(statearr_33876_33945[(2)] = null);

(statearr_33876_33945[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (41))){
var inst_33799 = (state_33840[(25)]);
var inst_33815 = (state_33840[(2)]);
var inst_33816 = cljs.core.next.call(null,inst_33799);
var inst_33780 = inst_33816;
var inst_33781 = null;
var inst_33782 = (0);
var inst_33783 = (0);
var state_33840__$1 = (function (){var statearr_33877 = state_33840;
(statearr_33877[(20)] = inst_33782);

(statearr_33877[(21)] = inst_33780);

(statearr_33877[(10)] = inst_33783);

(statearr_33877[(11)] = inst_33781);

(statearr_33877[(27)] = inst_33815);

return statearr_33877;
})();
var statearr_33878_33946 = state_33840__$1;
(statearr_33878_33946[(2)] = null);

(statearr_33878_33946[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (43))){
var state_33840__$1 = state_33840;
var statearr_33879_33947 = state_33840__$1;
(statearr_33879_33947[(2)] = null);

(statearr_33879_33947[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (29))){
var inst_33824 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33880_33948 = state_33840__$1;
(statearr_33880_33948[(2)] = inst_33824);

(statearr_33880_33948[(1)] = (26));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (44))){
var inst_33833 = (state_33840[(2)]);
var state_33840__$1 = (function (){var statearr_33881 = state_33840;
(statearr_33881[(28)] = inst_33833);

return statearr_33881;
})();
var statearr_33882_33949 = state_33840__$1;
(statearr_33882_33949[(2)] = null);

(statearr_33882_33949[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (6))){
var inst_33772 = (state_33840[(29)]);
var inst_33771 = cljs.core.deref.call(null,cs);
var inst_33772__$1 = cljs.core.keys.call(null,inst_33771);
var inst_33773 = cljs.core.count.call(null,inst_33772__$1);
var inst_33774 = cljs.core.reset_BANG_.call(null,dctr,inst_33773);
var inst_33779 = cljs.core.seq.call(null,inst_33772__$1);
var inst_33780 = inst_33779;
var inst_33781 = null;
var inst_33782 = (0);
var inst_33783 = (0);
var state_33840__$1 = (function (){var statearr_33883 = state_33840;
(statearr_33883[(20)] = inst_33782);

(statearr_33883[(21)] = inst_33780);

(statearr_33883[(10)] = inst_33783);

(statearr_33883[(29)] = inst_33772__$1);

(statearr_33883[(11)] = inst_33781);

(statearr_33883[(30)] = inst_33774);

return statearr_33883;
})();
var statearr_33884_33950 = state_33840__$1;
(statearr_33884_33950[(2)] = null);

(statearr_33884_33950[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (28))){
var inst_33799 = (state_33840[(25)]);
var inst_33780 = (state_33840[(21)]);
var inst_33799__$1 = cljs.core.seq.call(null,inst_33780);
var state_33840__$1 = (function (){var statearr_33885 = state_33840;
(statearr_33885[(25)] = inst_33799__$1);

return statearr_33885;
})();
if(inst_33799__$1){
var statearr_33886_33951 = state_33840__$1;
(statearr_33886_33951[(1)] = (33));

} else {
var statearr_33887_33952 = state_33840__$1;
(statearr_33887_33952[(1)] = (34));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (25))){
var inst_33782 = (state_33840[(20)]);
var inst_33783 = (state_33840[(10)]);
var inst_33785 = (inst_33783 < inst_33782);
var inst_33786 = inst_33785;
var state_33840__$1 = state_33840;
if(cljs.core.truth_(inst_33786)){
var statearr_33888_33953 = state_33840__$1;
(statearr_33888_33953[(1)] = (27));

} else {
var statearr_33889_33954 = state_33840__$1;
(statearr_33889_33954[(1)] = (28));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (34))){
var state_33840__$1 = state_33840;
var statearr_33890_33955 = state_33840__$1;
(statearr_33890_33955[(2)] = null);

(statearr_33890_33955[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (17))){
var state_33840__$1 = state_33840;
var statearr_33891_33956 = state_33840__$1;
(statearr_33891_33956[(2)] = null);

(statearr_33891_33956[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (3))){
var inst_33838 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_33840__$1,inst_33838);
} else {
if((state_val_33841 === (12))){
var inst_33767 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33892_33957 = state_33840__$1;
(statearr_33892_33957[(2)] = inst_33767);

(statearr_33892_33957[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (2))){
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33840__$1,(4),ch);
} else {
if((state_val_33841 === (23))){
var state_33840__$1 = state_33840;
var statearr_33893_33958 = state_33840__$1;
(statearr_33893_33958[(2)] = null);

(statearr_33893_33958[(1)] = (24));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (35))){
var inst_33822 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33894_33959 = state_33840__$1;
(statearr_33894_33959[(2)] = inst_33822);

(statearr_33894_33959[(1)] = (29));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (19))){
var inst_33739 = (state_33840[(7)]);
var inst_33743 = cljs.core.chunk_first.call(null,inst_33739);
var inst_33744 = cljs.core.chunk_rest.call(null,inst_33739);
var inst_33745 = cljs.core.count.call(null,inst_33743);
var inst_33717 = inst_33744;
var inst_33718 = inst_33743;
var inst_33719 = inst_33745;
var inst_33720 = (0);
var state_33840__$1 = (function (){var statearr_33895 = state_33840;
(statearr_33895[(13)] = inst_33719);

(statearr_33895[(15)] = inst_33717);

(statearr_33895[(16)] = inst_33720);

(statearr_33895[(17)] = inst_33718);

return statearr_33895;
})();
var statearr_33896_33960 = state_33840__$1;
(statearr_33896_33960[(2)] = null);

(statearr_33896_33960[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (11))){
var inst_33739 = (state_33840[(7)]);
var inst_33717 = (state_33840[(15)]);
var inst_33739__$1 = cljs.core.seq.call(null,inst_33717);
var state_33840__$1 = (function (){var statearr_33897 = state_33840;
(statearr_33897[(7)] = inst_33739__$1);

return statearr_33897;
})();
if(inst_33739__$1){
var statearr_33898_33961 = state_33840__$1;
(statearr_33898_33961[(1)] = (16));

} else {
var statearr_33899_33962 = state_33840__$1;
(statearr_33899_33962[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (9))){
var inst_33769 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33900_33963 = state_33840__$1;
(statearr_33900_33963[(2)] = inst_33769);

(statearr_33900_33963[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (5))){
var inst_33715 = cljs.core.deref.call(null,cs);
var inst_33716 = cljs.core.seq.call(null,inst_33715);
var inst_33717 = inst_33716;
var inst_33718 = null;
var inst_33719 = (0);
var inst_33720 = (0);
var state_33840__$1 = (function (){var statearr_33901 = state_33840;
(statearr_33901[(13)] = inst_33719);

(statearr_33901[(15)] = inst_33717);

(statearr_33901[(16)] = inst_33720);

(statearr_33901[(17)] = inst_33718);

return statearr_33901;
})();
var statearr_33902_33964 = state_33840__$1;
(statearr_33902_33964[(2)] = null);

(statearr_33902_33964[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (14))){
var state_33840__$1 = state_33840;
var statearr_33903_33965 = state_33840__$1;
(statearr_33903_33965[(2)] = null);

(statearr_33903_33965[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (45))){
var inst_33830 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33904_33966 = state_33840__$1;
(statearr_33904_33966[(2)] = inst_33830);

(statearr_33904_33966[(1)] = (44));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (26))){
var inst_33772 = (state_33840[(29)]);
var inst_33826 = (state_33840[(2)]);
var inst_33827 = cljs.core.seq.call(null,inst_33772);
var state_33840__$1 = (function (){var statearr_33905 = state_33840;
(statearr_33905[(31)] = inst_33826);

return statearr_33905;
})();
if(inst_33827){
var statearr_33906_33967 = state_33840__$1;
(statearr_33906_33967[(1)] = (42));

} else {
var statearr_33907_33968 = state_33840__$1;
(statearr_33907_33968[(1)] = (43));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (16))){
var inst_33739 = (state_33840[(7)]);
var inst_33741 = cljs.core.chunked_seq_QMARK_.call(null,inst_33739);
var state_33840__$1 = state_33840;
if(inst_33741){
var statearr_33908_33969 = state_33840__$1;
(statearr_33908_33969[(1)] = (19));

} else {
var statearr_33909_33970 = state_33840__$1;
(statearr_33909_33970[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (38))){
var inst_33819 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33910_33971 = state_33840__$1;
(statearr_33910_33971[(2)] = inst_33819);

(statearr_33910_33971[(1)] = (35));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (30))){
var state_33840__$1 = state_33840;
var statearr_33911_33972 = state_33840__$1;
(statearr_33911_33972[(2)] = null);

(statearr_33911_33972[(1)] = (32));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (10))){
var inst_33720 = (state_33840[(16)]);
var inst_33718 = (state_33840[(17)]);
var inst_33728 = cljs.core._nth.call(null,inst_33718,inst_33720);
var inst_33729 = cljs.core.nth.call(null,inst_33728,(0),null);
var inst_33730 = cljs.core.nth.call(null,inst_33728,(1),null);
var state_33840__$1 = (function (){var statearr_33912 = state_33840;
(statearr_33912[(26)] = inst_33729);

return statearr_33912;
})();
if(cljs.core.truth_(inst_33730)){
var statearr_33913_33973 = state_33840__$1;
(statearr_33913_33973[(1)] = (13));

} else {
var statearr_33914_33974 = state_33840__$1;
(statearr_33914_33974[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (18))){
var inst_33765 = (state_33840[(2)]);
var state_33840__$1 = state_33840;
var statearr_33915_33975 = state_33840__$1;
(statearr_33915_33975[(2)] = inst_33765);

(statearr_33915_33975[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (42))){
var state_33840__$1 = state_33840;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_33840__$1,(45),dchan);
} else {
if((state_val_33841 === (37))){
var inst_33799 = (state_33840[(25)]);
var inst_33708 = (state_33840[(9)]);
var inst_33808 = (state_33840[(23)]);
var inst_33808__$1 = cljs.core.first.call(null,inst_33799);
var inst_33809 = cljs.core.async.put_BANG_.call(null,inst_33808__$1,inst_33708,done);
var state_33840__$1 = (function (){var statearr_33916 = state_33840;
(statearr_33916[(23)] = inst_33808__$1);

return statearr_33916;
})();
if(cljs.core.truth_(inst_33809)){
var statearr_33917_33976 = state_33840__$1;
(statearr_33917_33976[(1)] = (39));

} else {
var statearr_33918_33977 = state_33840__$1;
(statearr_33918_33977[(1)] = (40));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_33841 === (8))){
var inst_33719 = (state_33840[(13)]);
var inst_33720 = (state_33840[(16)]);
var inst_33722 = (inst_33720 < inst_33719);
var inst_33723 = inst_33722;
var state_33840__$1 = state_33840;
if(cljs.core.truth_(inst_33723)){
var statearr_33919_33978 = state_33840__$1;
(statearr_33919_33978[(1)] = (10));

} else {
var statearr_33920_33979 = state_33840__$1;
(statearr_33920_33979[(1)] = (11));

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
});})(c__33106__auto___33925,cs,m,dchan,dctr,done))
;
return ((function (switch__33016__auto__,c__33106__auto___33925,cs,m,dchan,dctr,done){
return (function() {
var cljs$core$async$mult_$_state_machine__33017__auto__ = null;
var cljs$core$async$mult_$_state_machine__33017__auto____0 = (function (){
var statearr_33921 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_33921[(0)] = cljs$core$async$mult_$_state_machine__33017__auto__);

(statearr_33921[(1)] = (1));

return statearr_33921;
});
var cljs$core$async$mult_$_state_machine__33017__auto____1 = (function (state_33840){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_33840);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e33922){if((e33922 instanceof Object)){
var ex__33020__auto__ = e33922;
var statearr_33923_33980 = state_33840;
(statearr_33923_33980[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_33840);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e33922;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__33981 = state_33840;
state_33840 = G__33981;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$mult_$_state_machine__33017__auto__ = function(state_33840){
switch(arguments.length){
case 0:
return cljs$core$async$mult_$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$mult_$_state_machine__33017__auto____1.call(this,state_33840);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mult_$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mult_$_state_machine__33017__auto____0;
cljs$core$async$mult_$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mult_$_state_machine__33017__auto____1;
return cljs$core$async$mult_$_state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___33925,cs,m,dchan,dctr,done))
})();
var state__33108__auto__ = (function (){var statearr_33924 = f__33107__auto__.call(null);
(statearr_33924[(6)] = c__33106__auto___33925);

return statearr_33924;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___33925,cs,m,dchan,dctr,done))
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
var G__33983 = arguments.length;
switch (G__33983) {
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
var len__31300__auto___33995 = arguments.length;
var i__31301__auto___33996 = (0);
while(true){
if((i__31301__auto___33996 < len__31300__auto___33995)){
args__31307__auto__.push((arguments[i__31301__auto___33996]));

var G__33997 = (i__31301__auto___33996 + (1));
i__31301__auto___33996 = G__33997;
continue;
} else {
}
break;
}

var argseq__31308__auto__ = ((((3) < args__31307__auto__.length))?(new cljs.core.IndexedSeq(args__31307__auto__.slice((3)),(0),null)):null);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic((arguments[(0)]),(arguments[(1)]),(arguments[(2)]),argseq__31308__auto__);
});

cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = (function (state,cont_block,ports,p__33989){
var map__33990 = p__33989;
var map__33990__$1 = ((((!((map__33990 == null)))?((((map__33990.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__33990.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.call(null,cljs.core.hash_map,map__33990):map__33990);
var opts = map__33990__$1;
var statearr_33992_33998 = state;
(statearr_33992_33998[(1)] = cont_block);


var temp__5457__auto__ = cljs.core.async.do_alts.call(null,((function (map__33990,map__33990__$1,opts){
return (function (val){
var statearr_33993_33999 = state;
(statearr_33993_33999[(2)] = val);


return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state);
});})(map__33990,map__33990__$1,opts))
,ports,opts);
if(cljs.core.truth_(temp__5457__auto__)){
var cb = temp__5457__auto__;
var statearr_33994_34000 = state;
(statearr_33994_34000[(2)] = cljs.core.deref.call(null,cb));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
return null;
}
});

cljs.core.async.ioc_alts_BANG_.cljs$lang$maxFixedArity = (3);

cljs.core.async.ioc_alts_BANG_.cljs$lang$applyTo = (function (seq33985){
var G__33986 = cljs.core.first.call(null,seq33985);
var seq33985__$1 = cljs.core.next.call(null,seq33985);
var G__33987 = cljs.core.first.call(null,seq33985__$1);
var seq33985__$2 = cljs.core.next.call(null,seq33985__$1);
var G__33988 = cljs.core.first.call(null,seq33985__$2);
var seq33985__$3 = cljs.core.next.call(null,seq33985__$2);
return cljs.core.async.ioc_alts_BANG_.cljs$core$IFn$_invoke$arity$variadic(G__33986,G__33987,G__33988,seq33985__$3);
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
if(typeof cljs.core.async.t_cljs$core$async34001 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mix}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34001 = (function (out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,meta34002){
this.out = out;
this.cs = cs;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.solo_mode = solo_mode;
this.change = change;
this.changed = changed;
this.pick = pick;
this.calc_state = calc_state;
this.meta34002 = meta34002;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34003,meta34002__$1){
var self__ = this;
var _34003__$1 = this;
return (new cljs.core.async.t_cljs$core$async34001(self__.out,self__.cs,self__.solo_modes,self__.attrs,self__.solo_mode,self__.change,self__.changed,self__.pick,self__.calc_state,meta34002__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_34003){
var self__ = this;
var _34003__$1 = this;
return self__.meta34002;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$Mix$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){
var self__ = this;
var ___$1 = this;
cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){
var self__ = this;
var ___$1 = this;
cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);

return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34001.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
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

cljs.core.async.t_cljs$core$async34001.getBasis = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (){
return new cljs.core.PersistentVector(null, 10, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"out","out",729986010,null),new cljs.core.Symbol(null,"cs","cs",-117024463,null),new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"attrs","attrs",-450137186,null),new cljs.core.Symbol(null,"solo-mode","solo-mode",2031788074,null),new cljs.core.Symbol(null,"change","change",477485025,null),new cljs.core.Symbol(null,"changed","changed",-2083710852,null),new cljs.core.Symbol(null,"pick","pick",1300068175,null),new cljs.core.Symbol(null,"calc-state","calc-state",-349968968,null),new cljs.core.Symbol(null,"meta34002","meta34002",1854872791,null)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.t_cljs$core$async34001.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34001.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34001";

cljs.core.async.t_cljs$core$async34001.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34001");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

cljs.core.async.__GT_t_cljs$core$async34001 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function cljs$core$async$mix_$___GT_t_cljs$core$async34001(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34002){
return (new cljs.core.async.t_cljs$core$async34001(out__$1,cs__$1,solo_modes__$1,attrs__$1,solo_mode__$1,change__$1,changed__$1,pick__$1,calc_state__$1,meta34002));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;

}

return (new cljs.core.async.t_cljs$core$async34001(out,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33106__auto___34165 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___34165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___34165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_34105){
var state_val_34106 = (state_34105[(1)]);
if((state_val_34106 === (7))){
var inst_34020 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34107_34166 = state_34105__$1;
(statearr_34107_34166[(2)] = inst_34020);

(statearr_34107_34166[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (20))){
var inst_34032 = (state_34105[(7)]);
var state_34105__$1 = state_34105;
var statearr_34108_34167 = state_34105__$1;
(statearr_34108_34167[(2)] = inst_34032);

(statearr_34108_34167[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (27))){
var state_34105__$1 = state_34105;
var statearr_34109_34168 = state_34105__$1;
(statearr_34109_34168[(2)] = null);

(statearr_34109_34168[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (1))){
var inst_34007 = (state_34105[(8)]);
var inst_34007__$1 = calc_state.call(null);
var inst_34009 = (inst_34007__$1 == null);
var inst_34010 = cljs.core.not.call(null,inst_34009);
var state_34105__$1 = (function (){var statearr_34110 = state_34105;
(statearr_34110[(8)] = inst_34007__$1);

return statearr_34110;
})();
if(inst_34010){
var statearr_34111_34169 = state_34105__$1;
(statearr_34111_34169[(1)] = (2));

} else {
var statearr_34112_34170 = state_34105__$1;
(statearr_34112_34170[(1)] = (3));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (24))){
var inst_34079 = (state_34105[(9)]);
var inst_34056 = (state_34105[(10)]);
var inst_34065 = (state_34105[(11)]);
var inst_34079__$1 = inst_34056.call(null,inst_34065);
var state_34105__$1 = (function (){var statearr_34113 = state_34105;
(statearr_34113[(9)] = inst_34079__$1);

return statearr_34113;
})();
if(cljs.core.truth_(inst_34079__$1)){
var statearr_34114_34171 = state_34105__$1;
(statearr_34114_34171[(1)] = (29));

} else {
var statearr_34115_34172 = state_34105__$1;
(statearr_34115_34172[(1)] = (30));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (4))){
var inst_34023 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
if(cljs.core.truth_(inst_34023)){
var statearr_34116_34173 = state_34105__$1;
(statearr_34116_34173[(1)] = (8));

} else {
var statearr_34117_34174 = state_34105__$1;
(statearr_34117_34174[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (15))){
var inst_34050 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
if(cljs.core.truth_(inst_34050)){
var statearr_34118_34175 = state_34105__$1;
(statearr_34118_34175[(1)] = (19));

} else {
var statearr_34119_34176 = state_34105__$1;
(statearr_34119_34176[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (21))){
var inst_34055 = (state_34105[(12)]);
var inst_34055__$1 = (state_34105[(2)]);
var inst_34056 = cljs.core.get.call(null,inst_34055__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34057 = cljs.core.get.call(null,inst_34055__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34058 = cljs.core.get.call(null,inst_34055__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var state_34105__$1 = (function (){var statearr_34120 = state_34105;
(statearr_34120[(12)] = inst_34055__$1);

(statearr_34120[(13)] = inst_34057);

(statearr_34120[(10)] = inst_34056);

return statearr_34120;
})();
return cljs.core.async.ioc_alts_BANG_.call(null,state_34105__$1,(22),inst_34058);
} else {
if((state_val_34106 === (31))){
var inst_34087 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
if(cljs.core.truth_(inst_34087)){
var statearr_34121_34177 = state_34105__$1;
(statearr_34121_34177[(1)] = (32));

} else {
var statearr_34122_34178 = state_34105__$1;
(statearr_34122_34178[(1)] = (33));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (32))){
var inst_34064 = (state_34105[(14)]);
var state_34105__$1 = state_34105;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34105__$1,(35),out,inst_34064);
} else {
if((state_val_34106 === (33))){
var inst_34055 = (state_34105[(12)]);
var inst_34032 = inst_34055;
var state_34105__$1 = (function (){var statearr_34123 = state_34105;
(statearr_34123[(7)] = inst_34032);

return statearr_34123;
})();
var statearr_34124_34179 = state_34105__$1;
(statearr_34124_34179[(2)] = null);

(statearr_34124_34179[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (13))){
var inst_34032 = (state_34105[(7)]);
var inst_34039 = inst_34032.cljs$lang$protocol_mask$partition0$;
var inst_34040 = (inst_34039 & (64));
var inst_34041 = inst_34032.cljs$core$ISeq$;
var inst_34042 = (cljs.core.PROTOCOL_SENTINEL === inst_34041);
var inst_34043 = (inst_34040) || (inst_34042);
var state_34105__$1 = state_34105;
if(cljs.core.truth_(inst_34043)){
var statearr_34125_34180 = state_34105__$1;
(statearr_34125_34180[(1)] = (16));

} else {
var statearr_34126_34181 = state_34105__$1;
(statearr_34126_34181[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (22))){
var inst_34064 = (state_34105[(14)]);
var inst_34065 = (state_34105[(11)]);
var inst_34063 = (state_34105[(2)]);
var inst_34064__$1 = cljs.core.nth.call(null,inst_34063,(0),null);
var inst_34065__$1 = cljs.core.nth.call(null,inst_34063,(1),null);
var inst_34066 = (inst_34064__$1 == null);
var inst_34067 = cljs.core._EQ_.call(null,inst_34065__$1,change);
var inst_34068 = (inst_34066) || (inst_34067);
var state_34105__$1 = (function (){var statearr_34127 = state_34105;
(statearr_34127[(14)] = inst_34064__$1);

(statearr_34127[(11)] = inst_34065__$1);

return statearr_34127;
})();
if(cljs.core.truth_(inst_34068)){
var statearr_34128_34182 = state_34105__$1;
(statearr_34128_34182[(1)] = (23));

} else {
var statearr_34129_34183 = state_34105__$1;
(statearr_34129_34183[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (36))){
var inst_34055 = (state_34105[(12)]);
var inst_34032 = inst_34055;
var state_34105__$1 = (function (){var statearr_34130 = state_34105;
(statearr_34130[(7)] = inst_34032);

return statearr_34130;
})();
var statearr_34131_34184 = state_34105__$1;
(statearr_34131_34184[(2)] = null);

(statearr_34131_34184[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (29))){
var inst_34079 = (state_34105[(9)]);
var state_34105__$1 = state_34105;
var statearr_34132_34185 = state_34105__$1;
(statearr_34132_34185[(2)] = inst_34079);

(statearr_34132_34185[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (6))){
var state_34105__$1 = state_34105;
var statearr_34133_34186 = state_34105__$1;
(statearr_34133_34186[(2)] = false);

(statearr_34133_34186[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (28))){
var inst_34075 = (state_34105[(2)]);
var inst_34076 = calc_state.call(null);
var inst_34032 = inst_34076;
var state_34105__$1 = (function (){var statearr_34134 = state_34105;
(statearr_34134[(7)] = inst_34032);

(statearr_34134[(15)] = inst_34075);

return statearr_34134;
})();
var statearr_34135_34187 = state_34105__$1;
(statearr_34135_34187[(2)] = null);

(statearr_34135_34187[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (25))){
var inst_34101 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34136_34188 = state_34105__$1;
(statearr_34136_34188[(2)] = inst_34101);

(statearr_34136_34188[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (34))){
var inst_34099 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34137_34189 = state_34105__$1;
(statearr_34137_34189[(2)] = inst_34099);

(statearr_34137_34189[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (17))){
var state_34105__$1 = state_34105;
var statearr_34138_34190 = state_34105__$1;
(statearr_34138_34190[(2)] = false);

(statearr_34138_34190[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (3))){
var state_34105__$1 = state_34105;
var statearr_34139_34191 = state_34105__$1;
(statearr_34139_34191[(2)] = false);

(statearr_34139_34191[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (12))){
var inst_34103 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34105__$1,inst_34103);
} else {
if((state_val_34106 === (2))){
var inst_34007 = (state_34105[(8)]);
var inst_34012 = inst_34007.cljs$lang$protocol_mask$partition0$;
var inst_34013 = (inst_34012 & (64));
var inst_34014 = inst_34007.cljs$core$ISeq$;
var inst_34015 = (cljs.core.PROTOCOL_SENTINEL === inst_34014);
var inst_34016 = (inst_34013) || (inst_34015);
var state_34105__$1 = state_34105;
if(cljs.core.truth_(inst_34016)){
var statearr_34140_34192 = state_34105__$1;
(statearr_34140_34192[(1)] = (5));

} else {
var statearr_34141_34193 = state_34105__$1;
(statearr_34141_34193[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (23))){
var inst_34064 = (state_34105[(14)]);
var inst_34070 = (inst_34064 == null);
var state_34105__$1 = state_34105;
if(cljs.core.truth_(inst_34070)){
var statearr_34142_34194 = state_34105__$1;
(statearr_34142_34194[(1)] = (26));

} else {
var statearr_34143_34195 = state_34105__$1;
(statearr_34143_34195[(1)] = (27));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (35))){
var inst_34090 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
if(cljs.core.truth_(inst_34090)){
var statearr_34144_34196 = state_34105__$1;
(statearr_34144_34196[(1)] = (36));

} else {
var statearr_34145_34197 = state_34105__$1;
(statearr_34145_34197[(1)] = (37));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (19))){
var inst_34032 = (state_34105[(7)]);
var inst_34052 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34032);
var state_34105__$1 = state_34105;
var statearr_34146_34198 = state_34105__$1;
(statearr_34146_34198[(2)] = inst_34052);

(statearr_34146_34198[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (11))){
var inst_34032 = (state_34105[(7)]);
var inst_34036 = (inst_34032 == null);
var inst_34037 = cljs.core.not.call(null,inst_34036);
var state_34105__$1 = state_34105;
if(inst_34037){
var statearr_34147_34199 = state_34105__$1;
(statearr_34147_34199[(1)] = (13));

} else {
var statearr_34148_34200 = state_34105__$1;
(statearr_34148_34200[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (9))){
var inst_34007 = (state_34105[(8)]);
var state_34105__$1 = state_34105;
var statearr_34149_34201 = state_34105__$1;
(statearr_34149_34201[(2)] = inst_34007);

(statearr_34149_34201[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (5))){
var state_34105__$1 = state_34105;
var statearr_34150_34202 = state_34105__$1;
(statearr_34150_34202[(2)] = true);

(statearr_34150_34202[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (14))){
var state_34105__$1 = state_34105;
var statearr_34151_34203 = state_34105__$1;
(statearr_34151_34203[(2)] = false);

(statearr_34151_34203[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (26))){
var inst_34065 = (state_34105[(11)]);
var inst_34072 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_34065);
var state_34105__$1 = state_34105;
var statearr_34152_34204 = state_34105__$1;
(statearr_34152_34204[(2)] = inst_34072);

(statearr_34152_34204[(1)] = (28));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (16))){
var state_34105__$1 = state_34105;
var statearr_34153_34205 = state_34105__$1;
(statearr_34153_34205[(2)] = true);

(statearr_34153_34205[(1)] = (18));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (38))){
var inst_34095 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34154_34206 = state_34105__$1;
(statearr_34154_34206[(2)] = inst_34095);

(statearr_34154_34206[(1)] = (34));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (30))){
var inst_34057 = (state_34105[(13)]);
var inst_34056 = (state_34105[(10)]);
var inst_34065 = (state_34105[(11)]);
var inst_34082 = cljs.core.empty_QMARK_.call(null,inst_34056);
var inst_34083 = inst_34057.call(null,inst_34065);
var inst_34084 = cljs.core.not.call(null,inst_34083);
var inst_34085 = (inst_34082) && (inst_34084);
var state_34105__$1 = state_34105;
var statearr_34155_34207 = state_34105__$1;
(statearr_34155_34207[(2)] = inst_34085);

(statearr_34155_34207[(1)] = (31));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (10))){
var inst_34007 = (state_34105[(8)]);
var inst_34028 = (state_34105[(2)]);
var inst_34029 = cljs.core.get.call(null,inst_34028,new cljs.core.Keyword(null,"solos","solos",1441458643));
var inst_34030 = cljs.core.get.call(null,inst_34028,new cljs.core.Keyword(null,"mutes","mutes",1068806309));
var inst_34031 = cljs.core.get.call(null,inst_34028,new cljs.core.Keyword(null,"reads","reads",-1215067361));
var inst_34032 = inst_34007;
var state_34105__$1 = (function (){var statearr_34156 = state_34105;
(statearr_34156[(7)] = inst_34032);

(statearr_34156[(16)] = inst_34029);

(statearr_34156[(17)] = inst_34030);

(statearr_34156[(18)] = inst_34031);

return statearr_34156;
})();
var statearr_34157_34208 = state_34105__$1;
(statearr_34157_34208[(2)] = null);

(statearr_34157_34208[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (18))){
var inst_34047 = (state_34105[(2)]);
var state_34105__$1 = state_34105;
var statearr_34158_34209 = state_34105__$1;
(statearr_34158_34209[(2)] = inst_34047);

(statearr_34158_34209[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (37))){
var state_34105__$1 = state_34105;
var statearr_34159_34210 = state_34105__$1;
(statearr_34159_34210[(2)] = null);

(statearr_34159_34210[(1)] = (38));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34106 === (8))){
var inst_34007 = (state_34105[(8)]);
var inst_34025 = cljs.core.apply.call(null,cljs.core.hash_map,inst_34007);
var state_34105__$1 = state_34105;
var statearr_34160_34211 = state_34105__$1;
(statearr_34160_34211[(2)] = inst_34025);

(statearr_34160_34211[(1)] = (10));


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
});})(c__33106__auto___34165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;
return ((function (switch__33016__auto__,c__33106__auto___34165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var cljs$core$async$mix_$_state_machine__33017__auto__ = null;
var cljs$core$async$mix_$_state_machine__33017__auto____0 = (function (){
var statearr_34161 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34161[(0)] = cljs$core$async$mix_$_state_machine__33017__auto__);

(statearr_34161[(1)] = (1));

return statearr_34161;
});
var cljs$core$async$mix_$_state_machine__33017__auto____1 = (function (state_34105){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34105);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e34162){if((e34162 instanceof Object)){
var ex__33020__auto__ = e34162;
var statearr_34163_34212 = state_34105;
(statearr_34163_34212[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34105);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34162;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34213 = state_34105;
state_34105 = G__34213;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$mix_$_state_machine__33017__auto__ = function(state_34105){
switch(arguments.length){
case 0:
return cljs$core$async$mix_$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$mix_$_state_machine__33017__auto____1.call(this,state_34105);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mix_$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mix_$_state_machine__33017__auto____0;
cljs$core$async$mix_$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mix_$_state_machine__33017__auto____1;
return cljs$core$async$mix_$_state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___34165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();
var state__33108__auto__ = (function (){var statearr_34164 = f__33107__auto__.call(null);
(statearr_34164[(6)] = c__33106__auto___34165);

return statearr_34164;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___34165,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
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
var G__34215 = arguments.length;
switch (G__34215) {
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
var G__34219 = arguments.length;
switch (G__34219) {
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
return (function (p1__34217_SHARP_){
if(cljs.core.truth_(p1__34217_SHARP_.call(null,topic))){
return p1__34217_SHARP_;
} else {
return cljs.core.assoc.call(null,p1__34217_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__30023__auto__,mults))
),topic);
}
});})(mults))
;
var p = (function (){
if(typeof cljs.core.async.t_cljs$core$async34220 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.Pub}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.async.Mux}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34220 = (function (ch,topic_fn,buf_fn,mults,ensure_mult,meta34221){
this.ch = ch;
this.topic_fn = topic_fn;
this.buf_fn = buf_fn;
this.mults = mults;
this.ensure_mult = ensure_mult;
this.meta34221 = meta34221;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34220.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_34222,meta34221__$1){
var self__ = this;
var _34222__$1 = this;
return (new cljs.core.async.t_cljs$core$async34220(self__.ch,self__.topic_fn,self__.buf_fn,self__.mults,self__.ensure_mult,meta34221__$1));
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34220.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_34222){
var self__ = this;
var _34222__$1 = this;
return self__.meta34221;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34220.prototype.cljs$core$async$Mux$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34220.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return self__.ch;
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34220.prototype.cljs$core$async$Pub$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34220.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$1,close_QMARK_){
var self__ = this;
var p__$1 = this;
var m = self__.ensure_mult.call(null,topic);
return cljs.core.async.tap.call(null,m,ch__$1,close_QMARK_);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34220.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
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

cljs.core.async.t_cljs$core$async34220.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34220.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){
var self__ = this;
var ___$1 = this;
return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34220.getBasis = ((function (mults,ensure_mult){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"topic-fn","topic-fn",-862449736,null),new cljs.core.Symbol(null,"buf-fn","buf-fn",-1200281591,null),new cljs.core.Symbol(null,"mults","mults",-461114485,null),new cljs.core.Symbol(null,"ensure-mult","ensure-mult",1796584816,null),new cljs.core.Symbol(null,"meta34221","meta34221",-366273044,null)], null);
});})(mults,ensure_mult))
;

cljs.core.async.t_cljs$core$async34220.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34220.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34220";

cljs.core.async.t_cljs$core$async34220.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34220");
});})(mults,ensure_mult))
;

cljs.core.async.__GT_t_cljs$core$async34220 = ((function (mults,ensure_mult){
return (function cljs$core$async$__GT_t_cljs$core$async34220(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34221){
return (new cljs.core.async.t_cljs$core$async34220(ch__$1,topic_fn__$1,buf_fn__$1,mults__$1,ensure_mult__$1,meta34221));
});})(mults,ensure_mult))
;

}

return (new cljs.core.async.t_cljs$core$async34220(ch,topic_fn,buf_fn,mults,ensure_mult,cljs.core.PersistentArrayMap.EMPTY));
})()
;
var c__33106__auto___34340 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___34340,mults,ensure_mult,p){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___34340,mults,ensure_mult,p){
return (function (state_34294){
var state_val_34295 = (state_34294[(1)]);
if((state_val_34295 === (7))){
var inst_34290 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34296_34341 = state_34294__$1;
(statearr_34296_34341[(2)] = inst_34290);

(statearr_34296_34341[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (20))){
var state_34294__$1 = state_34294;
var statearr_34297_34342 = state_34294__$1;
(statearr_34297_34342[(2)] = null);

(statearr_34297_34342[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (1))){
var state_34294__$1 = state_34294;
var statearr_34298_34343 = state_34294__$1;
(statearr_34298_34343[(2)] = null);

(statearr_34298_34343[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (24))){
var inst_34273 = (state_34294[(7)]);
var inst_34282 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_34273);
var state_34294__$1 = state_34294;
var statearr_34299_34344 = state_34294__$1;
(statearr_34299_34344[(2)] = inst_34282);

(statearr_34299_34344[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (4))){
var inst_34225 = (state_34294[(8)]);
var inst_34225__$1 = (state_34294[(2)]);
var inst_34226 = (inst_34225__$1 == null);
var state_34294__$1 = (function (){var statearr_34300 = state_34294;
(statearr_34300[(8)] = inst_34225__$1);

return statearr_34300;
})();
if(cljs.core.truth_(inst_34226)){
var statearr_34301_34345 = state_34294__$1;
(statearr_34301_34345[(1)] = (5));

} else {
var statearr_34302_34346 = state_34294__$1;
(statearr_34302_34346[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (15))){
var inst_34267 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34303_34347 = state_34294__$1;
(statearr_34303_34347[(2)] = inst_34267);

(statearr_34303_34347[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (21))){
var inst_34287 = (state_34294[(2)]);
var state_34294__$1 = (function (){var statearr_34304 = state_34294;
(statearr_34304[(9)] = inst_34287);

return statearr_34304;
})();
var statearr_34305_34348 = state_34294__$1;
(statearr_34305_34348[(2)] = null);

(statearr_34305_34348[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (13))){
var inst_34249 = (state_34294[(10)]);
var inst_34251 = cljs.core.chunked_seq_QMARK_.call(null,inst_34249);
var state_34294__$1 = state_34294;
if(inst_34251){
var statearr_34306_34349 = state_34294__$1;
(statearr_34306_34349[(1)] = (16));

} else {
var statearr_34307_34350 = state_34294__$1;
(statearr_34307_34350[(1)] = (17));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (22))){
var inst_34279 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
if(cljs.core.truth_(inst_34279)){
var statearr_34308_34351 = state_34294__$1;
(statearr_34308_34351[(1)] = (23));

} else {
var statearr_34309_34352 = state_34294__$1;
(statearr_34309_34352[(1)] = (24));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (6))){
var inst_34275 = (state_34294[(11)]);
var inst_34273 = (state_34294[(7)]);
var inst_34225 = (state_34294[(8)]);
var inst_34273__$1 = topic_fn.call(null,inst_34225);
var inst_34274 = cljs.core.deref.call(null,mults);
var inst_34275__$1 = cljs.core.get.call(null,inst_34274,inst_34273__$1);
var state_34294__$1 = (function (){var statearr_34310 = state_34294;
(statearr_34310[(11)] = inst_34275__$1);

(statearr_34310[(7)] = inst_34273__$1);

return statearr_34310;
})();
if(cljs.core.truth_(inst_34275__$1)){
var statearr_34311_34353 = state_34294__$1;
(statearr_34311_34353[(1)] = (19));

} else {
var statearr_34312_34354 = state_34294__$1;
(statearr_34312_34354[(1)] = (20));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (25))){
var inst_34284 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34313_34355 = state_34294__$1;
(statearr_34313_34355[(2)] = inst_34284);

(statearr_34313_34355[(1)] = (21));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (17))){
var inst_34249 = (state_34294[(10)]);
var inst_34258 = cljs.core.first.call(null,inst_34249);
var inst_34259 = cljs.core.async.muxch_STAR_.call(null,inst_34258);
var inst_34260 = cljs.core.async.close_BANG_.call(null,inst_34259);
var inst_34261 = cljs.core.next.call(null,inst_34249);
var inst_34235 = inst_34261;
var inst_34236 = null;
var inst_34237 = (0);
var inst_34238 = (0);
var state_34294__$1 = (function (){var statearr_34314 = state_34294;
(statearr_34314[(12)] = inst_34238);

(statearr_34314[(13)] = inst_34236);

(statearr_34314[(14)] = inst_34235);

(statearr_34314[(15)] = inst_34260);

(statearr_34314[(16)] = inst_34237);

return statearr_34314;
})();
var statearr_34315_34356 = state_34294__$1;
(statearr_34315_34356[(2)] = null);

(statearr_34315_34356[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (3))){
var inst_34292 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34294__$1,inst_34292);
} else {
if((state_val_34295 === (12))){
var inst_34269 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34316_34357 = state_34294__$1;
(statearr_34316_34357[(2)] = inst_34269);

(statearr_34316_34357[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (2))){
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34294__$1,(4),ch);
} else {
if((state_val_34295 === (23))){
var state_34294__$1 = state_34294;
var statearr_34317_34358 = state_34294__$1;
(statearr_34317_34358[(2)] = null);

(statearr_34317_34358[(1)] = (25));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (19))){
var inst_34275 = (state_34294[(11)]);
var inst_34225 = (state_34294[(8)]);
var inst_34277 = cljs.core.async.muxch_STAR_.call(null,inst_34275);
var state_34294__$1 = state_34294;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34294__$1,(22),inst_34277,inst_34225);
} else {
if((state_val_34295 === (11))){
var inst_34249 = (state_34294[(10)]);
var inst_34235 = (state_34294[(14)]);
var inst_34249__$1 = cljs.core.seq.call(null,inst_34235);
var state_34294__$1 = (function (){var statearr_34318 = state_34294;
(statearr_34318[(10)] = inst_34249__$1);

return statearr_34318;
})();
if(inst_34249__$1){
var statearr_34319_34359 = state_34294__$1;
(statearr_34319_34359[(1)] = (13));

} else {
var statearr_34320_34360 = state_34294__$1;
(statearr_34320_34360[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (9))){
var inst_34271 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34321_34361 = state_34294__$1;
(statearr_34321_34361[(2)] = inst_34271);

(statearr_34321_34361[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (5))){
var inst_34232 = cljs.core.deref.call(null,mults);
var inst_34233 = cljs.core.vals.call(null,inst_34232);
var inst_34234 = cljs.core.seq.call(null,inst_34233);
var inst_34235 = inst_34234;
var inst_34236 = null;
var inst_34237 = (0);
var inst_34238 = (0);
var state_34294__$1 = (function (){var statearr_34322 = state_34294;
(statearr_34322[(12)] = inst_34238);

(statearr_34322[(13)] = inst_34236);

(statearr_34322[(14)] = inst_34235);

(statearr_34322[(16)] = inst_34237);

return statearr_34322;
})();
var statearr_34323_34362 = state_34294__$1;
(statearr_34323_34362[(2)] = null);

(statearr_34323_34362[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (14))){
var state_34294__$1 = state_34294;
var statearr_34327_34363 = state_34294__$1;
(statearr_34327_34363[(2)] = null);

(statearr_34327_34363[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (16))){
var inst_34249 = (state_34294[(10)]);
var inst_34253 = cljs.core.chunk_first.call(null,inst_34249);
var inst_34254 = cljs.core.chunk_rest.call(null,inst_34249);
var inst_34255 = cljs.core.count.call(null,inst_34253);
var inst_34235 = inst_34254;
var inst_34236 = inst_34253;
var inst_34237 = inst_34255;
var inst_34238 = (0);
var state_34294__$1 = (function (){var statearr_34328 = state_34294;
(statearr_34328[(12)] = inst_34238);

(statearr_34328[(13)] = inst_34236);

(statearr_34328[(14)] = inst_34235);

(statearr_34328[(16)] = inst_34237);

return statearr_34328;
})();
var statearr_34329_34364 = state_34294__$1;
(statearr_34329_34364[(2)] = null);

(statearr_34329_34364[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (10))){
var inst_34238 = (state_34294[(12)]);
var inst_34236 = (state_34294[(13)]);
var inst_34235 = (state_34294[(14)]);
var inst_34237 = (state_34294[(16)]);
var inst_34243 = cljs.core._nth.call(null,inst_34236,inst_34238);
var inst_34244 = cljs.core.async.muxch_STAR_.call(null,inst_34243);
var inst_34245 = cljs.core.async.close_BANG_.call(null,inst_34244);
var inst_34246 = (inst_34238 + (1));
var tmp34324 = inst_34236;
var tmp34325 = inst_34235;
var tmp34326 = inst_34237;
var inst_34235__$1 = tmp34325;
var inst_34236__$1 = tmp34324;
var inst_34237__$1 = tmp34326;
var inst_34238__$1 = inst_34246;
var state_34294__$1 = (function (){var statearr_34330 = state_34294;
(statearr_34330[(12)] = inst_34238__$1);

(statearr_34330[(13)] = inst_34236__$1);

(statearr_34330[(14)] = inst_34235__$1);

(statearr_34330[(17)] = inst_34245);

(statearr_34330[(16)] = inst_34237__$1);

return statearr_34330;
})();
var statearr_34331_34365 = state_34294__$1;
(statearr_34331_34365[(2)] = null);

(statearr_34331_34365[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (18))){
var inst_34264 = (state_34294[(2)]);
var state_34294__$1 = state_34294;
var statearr_34332_34366 = state_34294__$1;
(statearr_34332_34366[(2)] = inst_34264);

(statearr_34332_34366[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34295 === (8))){
var inst_34238 = (state_34294[(12)]);
var inst_34237 = (state_34294[(16)]);
var inst_34240 = (inst_34238 < inst_34237);
var inst_34241 = inst_34240;
var state_34294__$1 = state_34294;
if(cljs.core.truth_(inst_34241)){
var statearr_34333_34367 = state_34294__$1;
(statearr_34333_34367[(1)] = (10));

} else {
var statearr_34334_34368 = state_34294__$1;
(statearr_34334_34368[(1)] = (11));

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
});})(c__33106__auto___34340,mults,ensure_mult,p))
;
return ((function (switch__33016__auto__,c__33106__auto___34340,mults,ensure_mult,p){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_34335 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34335[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_34335[(1)] = (1));

return statearr_34335;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_34294){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34294);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e34336){if((e34336 instanceof Object)){
var ex__33020__auto__ = e34336;
var statearr_34337_34369 = state_34294;
(statearr_34337_34369[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34294);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34336;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34370 = state_34294;
state_34294 = G__34370;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_34294){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_34294);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___34340,mults,ensure_mult,p))
})();
var state__33108__auto__ = (function (){var statearr_34338 = f__33107__auto__.call(null);
(statearr_34338[(6)] = c__33106__auto___34340);

return statearr_34338;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___34340,mults,ensure_mult,p))
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
var G__34372 = arguments.length;
switch (G__34372) {
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
var G__34375 = arguments.length;
switch (G__34375) {
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
var G__34378 = arguments.length;
switch (G__34378) {
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
var c__33106__auto___34445 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___34445,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___34445,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_34417){
var state_val_34418 = (state_34417[(1)]);
if((state_val_34418 === (7))){
var state_34417__$1 = state_34417;
var statearr_34419_34446 = state_34417__$1;
(statearr_34419_34446[(2)] = null);

(statearr_34419_34446[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (1))){
var state_34417__$1 = state_34417;
var statearr_34420_34447 = state_34417__$1;
(statearr_34420_34447[(2)] = null);

(statearr_34420_34447[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (4))){
var inst_34381 = (state_34417[(7)]);
var inst_34383 = (inst_34381 < cnt);
var state_34417__$1 = state_34417;
if(cljs.core.truth_(inst_34383)){
var statearr_34421_34448 = state_34417__$1;
(statearr_34421_34448[(1)] = (6));

} else {
var statearr_34422_34449 = state_34417__$1;
(statearr_34422_34449[(1)] = (7));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (15))){
var inst_34413 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34423_34450 = state_34417__$1;
(statearr_34423_34450[(2)] = inst_34413);

(statearr_34423_34450[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (13))){
var inst_34406 = cljs.core.async.close_BANG_.call(null,out);
var state_34417__$1 = state_34417;
var statearr_34424_34451 = state_34417__$1;
(statearr_34424_34451[(2)] = inst_34406);

(statearr_34424_34451[(1)] = (15));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (6))){
var state_34417__$1 = state_34417;
var statearr_34425_34452 = state_34417__$1;
(statearr_34425_34452[(2)] = null);

(statearr_34425_34452[(1)] = (11));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (3))){
var inst_34415 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34417__$1,inst_34415);
} else {
if((state_val_34418 === (12))){
var inst_34403 = (state_34417[(8)]);
var inst_34403__$1 = (state_34417[(2)]);
var inst_34404 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_34403__$1);
var state_34417__$1 = (function (){var statearr_34426 = state_34417;
(statearr_34426[(8)] = inst_34403__$1);

return statearr_34426;
})();
if(cljs.core.truth_(inst_34404)){
var statearr_34427_34453 = state_34417__$1;
(statearr_34427_34453[(1)] = (13));

} else {
var statearr_34428_34454 = state_34417__$1;
(statearr_34428_34454[(1)] = (14));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (2))){
var inst_34380 = cljs.core.reset_BANG_.call(null,dctr,cnt);
var inst_34381 = (0);
var state_34417__$1 = (function (){var statearr_34429 = state_34417;
(statearr_34429[(9)] = inst_34380);

(statearr_34429[(7)] = inst_34381);

return statearr_34429;
})();
var statearr_34430_34455 = state_34417__$1;
(statearr_34430_34455[(2)] = null);

(statearr_34430_34455[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (11))){
var inst_34381 = (state_34417[(7)]);
var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_34417,(10),Object,null,(9));
var inst_34390 = chs__$1.call(null,inst_34381);
var inst_34391 = done.call(null,inst_34381);
var inst_34392 = cljs.core.async.take_BANG_.call(null,inst_34390,inst_34391);
var state_34417__$1 = state_34417;
var statearr_34431_34456 = state_34417__$1;
(statearr_34431_34456[(2)] = inst_34392);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (9))){
var inst_34381 = (state_34417[(7)]);
var inst_34394 = (state_34417[(2)]);
var inst_34395 = (inst_34381 + (1));
var inst_34381__$1 = inst_34395;
var state_34417__$1 = (function (){var statearr_34432 = state_34417;
(statearr_34432[(7)] = inst_34381__$1);

(statearr_34432[(10)] = inst_34394);

return statearr_34432;
})();
var statearr_34433_34457 = state_34417__$1;
(statearr_34433_34457[(2)] = null);

(statearr_34433_34457[(1)] = (4));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (5))){
var inst_34401 = (state_34417[(2)]);
var state_34417__$1 = (function (){var statearr_34434 = state_34417;
(statearr_34434[(11)] = inst_34401);

return statearr_34434;
})();
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34417__$1,(12),dchan);
} else {
if((state_val_34418 === (14))){
var inst_34403 = (state_34417[(8)]);
var inst_34408 = cljs.core.apply.call(null,f,inst_34403);
var state_34417__$1 = state_34417;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34417__$1,(16),out,inst_34408);
} else {
if((state_val_34418 === (16))){
var inst_34410 = (state_34417[(2)]);
var state_34417__$1 = (function (){var statearr_34435 = state_34417;
(statearr_34435[(12)] = inst_34410);

return statearr_34435;
})();
var statearr_34436_34458 = state_34417__$1;
(statearr_34436_34458[(2)] = null);

(statearr_34436_34458[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (10))){
var inst_34385 = (state_34417[(2)]);
var inst_34386 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);
var state_34417__$1 = (function (){var statearr_34437 = state_34417;
(statearr_34437[(13)] = inst_34385);

return statearr_34437;
})();
var statearr_34438_34459 = state_34417__$1;
(statearr_34438_34459[(2)] = inst_34386);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34417__$1);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34418 === (8))){
var inst_34399 = (state_34417[(2)]);
var state_34417__$1 = state_34417;
var statearr_34439_34460 = state_34417__$1;
(statearr_34439_34460[(2)] = inst_34399);

(statearr_34439_34460[(1)] = (5));


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
});})(c__33106__auto___34445,chs__$1,out,cnt,rets,dchan,dctr,done))
;
return ((function (switch__33016__auto__,c__33106__auto___34445,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_34440 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34440[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_34440[(1)] = (1));

return statearr_34440;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_34417){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34417);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e34441){if((e34441 instanceof Object)){
var ex__33020__auto__ = e34441;
var statearr_34442_34461 = state_34417;
(statearr_34442_34461[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34417);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34441;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34462 = state_34417;
state_34417 = G__34462;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_34417){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_34417);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___34445,chs__$1,out,cnt,rets,dchan,dctr,done))
})();
var state__33108__auto__ = (function (){var statearr_34443 = f__33107__auto__.call(null);
(statearr_34443[(6)] = c__33106__auto___34445);

return statearr_34443;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___34445,chs__$1,out,cnt,rets,dchan,dctr,done))
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
var G__34465 = arguments.length;
switch (G__34465) {
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
var c__33106__auto___34519 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___34519,out){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___34519,out){
return (function (state_34497){
var state_val_34498 = (state_34497[(1)]);
if((state_val_34498 === (7))){
var inst_34476 = (state_34497[(7)]);
var inst_34477 = (state_34497[(8)]);
var inst_34476__$1 = (state_34497[(2)]);
var inst_34477__$1 = cljs.core.nth.call(null,inst_34476__$1,(0),null);
var inst_34478 = cljs.core.nth.call(null,inst_34476__$1,(1),null);
var inst_34479 = (inst_34477__$1 == null);
var state_34497__$1 = (function (){var statearr_34499 = state_34497;
(statearr_34499[(9)] = inst_34478);

(statearr_34499[(7)] = inst_34476__$1);

(statearr_34499[(8)] = inst_34477__$1);

return statearr_34499;
})();
if(cljs.core.truth_(inst_34479)){
var statearr_34500_34520 = state_34497__$1;
(statearr_34500_34520[(1)] = (8));

} else {
var statearr_34501_34521 = state_34497__$1;
(statearr_34501_34521[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (1))){
var inst_34466 = cljs.core.vec.call(null,chs);
var inst_34467 = inst_34466;
var state_34497__$1 = (function (){var statearr_34502 = state_34497;
(statearr_34502[(10)] = inst_34467);

return statearr_34502;
})();
var statearr_34503_34522 = state_34497__$1;
(statearr_34503_34522[(2)] = null);

(statearr_34503_34522[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (4))){
var inst_34467 = (state_34497[(10)]);
var state_34497__$1 = state_34497;
return cljs.core.async.ioc_alts_BANG_.call(null,state_34497__$1,(7),inst_34467);
} else {
if((state_val_34498 === (6))){
var inst_34493 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
var statearr_34504_34523 = state_34497__$1;
(statearr_34504_34523[(2)] = inst_34493);

(statearr_34504_34523[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (3))){
var inst_34495 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34497__$1,inst_34495);
} else {
if((state_val_34498 === (2))){
var inst_34467 = (state_34497[(10)]);
var inst_34469 = cljs.core.count.call(null,inst_34467);
var inst_34470 = (inst_34469 > (0));
var state_34497__$1 = state_34497;
if(cljs.core.truth_(inst_34470)){
var statearr_34506_34524 = state_34497__$1;
(statearr_34506_34524[(1)] = (4));

} else {
var statearr_34507_34525 = state_34497__$1;
(statearr_34507_34525[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (11))){
var inst_34467 = (state_34497[(10)]);
var inst_34486 = (state_34497[(2)]);
var tmp34505 = inst_34467;
var inst_34467__$1 = tmp34505;
var state_34497__$1 = (function (){var statearr_34508 = state_34497;
(statearr_34508[(10)] = inst_34467__$1);

(statearr_34508[(11)] = inst_34486);

return statearr_34508;
})();
var statearr_34509_34526 = state_34497__$1;
(statearr_34509_34526[(2)] = null);

(statearr_34509_34526[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (9))){
var inst_34477 = (state_34497[(8)]);
var state_34497__$1 = state_34497;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34497__$1,(11),out,inst_34477);
} else {
if((state_val_34498 === (5))){
var inst_34491 = cljs.core.async.close_BANG_.call(null,out);
var state_34497__$1 = state_34497;
var statearr_34510_34527 = state_34497__$1;
(statearr_34510_34527[(2)] = inst_34491);

(statearr_34510_34527[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (10))){
var inst_34489 = (state_34497[(2)]);
var state_34497__$1 = state_34497;
var statearr_34511_34528 = state_34497__$1;
(statearr_34511_34528[(2)] = inst_34489);

(statearr_34511_34528[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34498 === (8))){
var inst_34467 = (state_34497[(10)]);
var inst_34478 = (state_34497[(9)]);
var inst_34476 = (state_34497[(7)]);
var inst_34477 = (state_34497[(8)]);
var inst_34481 = (function (){var cs = inst_34467;
var vec__34472 = inst_34476;
var v = inst_34477;
var c = inst_34478;
return ((function (cs,vec__34472,v,c,inst_34467,inst_34478,inst_34476,inst_34477,state_val_34498,c__33106__auto___34519,out){
return (function (p1__34463_SHARP_){
return cljs.core.not_EQ_.call(null,c,p1__34463_SHARP_);
});
;})(cs,vec__34472,v,c,inst_34467,inst_34478,inst_34476,inst_34477,state_val_34498,c__33106__auto___34519,out))
})();
var inst_34482 = cljs.core.filterv.call(null,inst_34481,inst_34467);
var inst_34467__$1 = inst_34482;
var state_34497__$1 = (function (){var statearr_34512 = state_34497;
(statearr_34512[(10)] = inst_34467__$1);

return statearr_34512;
})();
var statearr_34513_34529 = state_34497__$1;
(statearr_34513_34529[(2)] = null);

(statearr_34513_34529[(1)] = (2));


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
});})(c__33106__auto___34519,out))
;
return ((function (switch__33016__auto__,c__33106__auto___34519,out){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_34514 = [null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34514[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_34514[(1)] = (1));

return statearr_34514;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_34497){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34497);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e34515){if((e34515 instanceof Object)){
var ex__33020__auto__ = e34515;
var statearr_34516_34530 = state_34497;
(statearr_34516_34530[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34497);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34515;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34531 = state_34497;
state_34497 = G__34531;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_34497){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_34497);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___34519,out))
})();
var state__33108__auto__ = (function (){var statearr_34517 = f__33107__auto__.call(null);
(statearr_34517[(6)] = c__33106__auto___34519);

return statearr_34517;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___34519,out))
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
var G__34533 = arguments.length;
switch (G__34533) {
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
var c__33106__auto___34578 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___34578,out){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___34578,out){
return (function (state_34557){
var state_val_34558 = (state_34557[(1)]);
if((state_val_34558 === (7))){
var inst_34539 = (state_34557[(7)]);
var inst_34539__$1 = (state_34557[(2)]);
var inst_34540 = (inst_34539__$1 == null);
var inst_34541 = cljs.core.not.call(null,inst_34540);
var state_34557__$1 = (function (){var statearr_34559 = state_34557;
(statearr_34559[(7)] = inst_34539__$1);

return statearr_34559;
})();
if(inst_34541){
var statearr_34560_34579 = state_34557__$1;
(statearr_34560_34579[(1)] = (8));

} else {
var statearr_34561_34580 = state_34557__$1;
(statearr_34561_34580[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (1))){
var inst_34534 = (0);
var state_34557__$1 = (function (){var statearr_34562 = state_34557;
(statearr_34562[(8)] = inst_34534);

return statearr_34562;
})();
var statearr_34563_34581 = state_34557__$1;
(statearr_34563_34581[(2)] = null);

(statearr_34563_34581[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (4))){
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34557__$1,(7),ch);
} else {
if((state_val_34558 === (6))){
var inst_34552 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34564_34582 = state_34557__$1;
(statearr_34564_34582[(2)] = inst_34552);

(statearr_34564_34582[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (3))){
var inst_34554 = (state_34557[(2)]);
var inst_34555 = cljs.core.async.close_BANG_.call(null,out);
var state_34557__$1 = (function (){var statearr_34565 = state_34557;
(statearr_34565[(9)] = inst_34554);

return statearr_34565;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34557__$1,inst_34555);
} else {
if((state_val_34558 === (2))){
var inst_34534 = (state_34557[(8)]);
var inst_34536 = (inst_34534 < n);
var state_34557__$1 = state_34557;
if(cljs.core.truth_(inst_34536)){
var statearr_34566_34583 = state_34557__$1;
(statearr_34566_34583[(1)] = (4));

} else {
var statearr_34567_34584 = state_34557__$1;
(statearr_34567_34584[(1)] = (5));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (11))){
var inst_34534 = (state_34557[(8)]);
var inst_34544 = (state_34557[(2)]);
var inst_34545 = (inst_34534 + (1));
var inst_34534__$1 = inst_34545;
var state_34557__$1 = (function (){var statearr_34568 = state_34557;
(statearr_34568[(8)] = inst_34534__$1);

(statearr_34568[(10)] = inst_34544);

return statearr_34568;
})();
var statearr_34569_34585 = state_34557__$1;
(statearr_34569_34585[(2)] = null);

(statearr_34569_34585[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (9))){
var state_34557__$1 = state_34557;
var statearr_34570_34586 = state_34557__$1;
(statearr_34570_34586[(2)] = null);

(statearr_34570_34586[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (5))){
var state_34557__$1 = state_34557;
var statearr_34571_34587 = state_34557__$1;
(statearr_34571_34587[(2)] = null);

(statearr_34571_34587[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (10))){
var inst_34549 = (state_34557[(2)]);
var state_34557__$1 = state_34557;
var statearr_34572_34588 = state_34557__$1;
(statearr_34572_34588[(2)] = inst_34549);

(statearr_34572_34588[(1)] = (6));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34558 === (8))){
var inst_34539 = (state_34557[(7)]);
var state_34557__$1 = state_34557;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34557__$1,(11),out,inst_34539);
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
});})(c__33106__auto___34578,out))
;
return ((function (switch__33016__auto__,c__33106__auto___34578,out){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_34573 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34573[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_34573[(1)] = (1));

return statearr_34573;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_34557){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34557);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e34574){if((e34574 instanceof Object)){
var ex__33020__auto__ = e34574;
var statearr_34575_34589 = state_34557;
(statearr_34575_34589[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34557);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34574;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34590 = state_34557;
state_34557 = G__34590;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_34557){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_34557);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___34578,out))
})();
var state__33108__auto__ = (function (){var statearr_34576 = f__33107__auto__.call(null);
(statearr_34576[(6)] = c__33106__auto___34578);

return statearr_34576;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___34578,out))
);


return out;
});

cljs.core.async.take.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_LT_ = (function cljs$core$async$map_LT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34592 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34592 = (function (f,ch,meta34593){
this.f = f;
this.ch = ch;
this.meta34593 = meta34593;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34592.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34594,meta34593__$1){
var self__ = this;
var _34594__$1 = this;
return (new cljs.core.async.t_cljs$core$async34592(self__.f,self__.ch,meta34593__$1));
});

cljs.core.async.t_cljs$core$async34592.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34594){
var self__ = this;
var _34594__$1 = this;
return self__.meta34593;
});

cljs.core.async.t_cljs$core$async34592.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34592.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34592.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34592.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34592.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){
if(typeof cljs.core.async.t_cljs$core$async34595 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Handler}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34595 = (function (f,ch,meta34593,_,fn1,meta34596){
this.f = f;
this.ch = ch;
this.meta34593 = meta34593;
this._ = _;
this.fn1 = fn1;
this.meta34596 = meta34596;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34595.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_34597,meta34596__$1){
var self__ = this;
var _34597__$1 = this;
return (new cljs.core.async.t_cljs$core$async34595(self__.f,self__.ch,self__.meta34593,self__._,self__.fn1,meta34596__$1));
});})(___$1))
;

cljs.core.async.t_cljs$core$async34595.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_34597){
var self__ = this;
var _34597__$1 = this;
return self__.meta34596;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34595.prototype.cljs$core$async$impl$protocols$Handler$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34595.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34595.prototype.cljs$core$async$impl$protocols$Handler$blockable_QMARK_$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
return true;
});})(___$1))
;

cljs.core.async.t_cljs$core$async34595.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$1){
var self__ = this;
var ___$2 = this;
var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);
return ((function (f1,___$2,___$1){
return (function (p1__34591_SHARP_){
return f1.call(null,(((p1__34591_SHARP_ == null))?null:self__.f.call(null,p1__34591_SHARP_)));
});
;})(f1,___$2,___$1))
});})(___$1))
;

cljs.core.async.t_cljs$core$async34595.getBasis = ((function (___$1){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34593","meta34593",2087788581,null),cljs.core.with_meta(new cljs.core.Symbol(null,"_","_",-1201019570,null),new cljs.core.PersistentArrayMap(null, 1, [new cljs.core.Keyword(null,"tag","tag",-1290361223),new cljs.core.Symbol("cljs.core.async","t_cljs$core$async34592","cljs.core.async/t_cljs$core$async34592",1227283994,null)], null)),new cljs.core.Symbol(null,"fn1","fn1",895834444,null),new cljs.core.Symbol(null,"meta34596","meta34596",-1677084891,null)], null);
});})(___$1))
;

cljs.core.async.t_cljs$core$async34595.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34595.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34595";

cljs.core.async.t_cljs$core$async34595.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34595");
});})(___$1))
;

cljs.core.async.__GT_t_cljs$core$async34595 = ((function (___$1){
return (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34595(f__$1,ch__$1,meta34593__$1,___$2,fn1__$1,meta34596){
return (new cljs.core.async.t_cljs$core$async34595(f__$1,ch__$1,meta34593__$1,___$2,fn1__$1,meta34596));
});})(___$1))
;

}

return (new cljs.core.async.t_cljs$core$async34595(self__.f,self__.ch,self__.meta34593,___$1,fn1,cljs.core.PersistentArrayMap.EMPTY));
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

cljs.core.async.t_cljs$core$async34592.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34592.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
});

cljs.core.async.t_cljs$core$async34592.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34593","meta34593",2087788581,null)], null);
});

cljs.core.async.t_cljs$core$async34592.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34592.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34592";

cljs.core.async.t_cljs$core$async34592.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34592");
});

cljs.core.async.__GT_t_cljs$core$async34592 = (function cljs$core$async$map_LT__$___GT_t_cljs$core$async34592(f__$1,ch__$1,meta34593){
return (new cljs.core.async.t_cljs$core$async34592(f__$1,ch__$1,meta34593));
});

}

return (new cljs.core.async.t_cljs$core$async34592(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.map_GT_ = (function cljs$core$async$map_GT_(f,ch){
if(typeof cljs.core.async.t_cljs$core$async34598 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34598 = (function (f,ch,meta34599){
this.f = f;
this.ch = ch;
this.meta34599 = meta34599;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34598.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34600,meta34599__$1){
var self__ = this;
var _34600__$1 = this;
return (new cljs.core.async.t_cljs$core$async34598(self__.f,self__.ch,meta34599__$1));
});

cljs.core.async.t_cljs$core$async34598.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34600){
var self__ = this;
var _34600__$1 = this;
return self__.meta34599;
});

cljs.core.async.t_cljs$core$async34598.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34598.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34598.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34598.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34598.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34598.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn1);
});

cljs.core.async.t_cljs$core$async34598.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"f","f",43394975,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34599","meta34599",-1269361660,null)], null);
});

cljs.core.async.t_cljs$core$async34598.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34598.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34598";

cljs.core.async.t_cljs$core$async34598.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34598");
});

cljs.core.async.__GT_t_cljs$core$async34598 = (function cljs$core$async$map_GT__$___GT_t_cljs$core$async34598(f__$1,ch__$1,meta34599){
return (new cljs.core.async.t_cljs$core$async34598(f__$1,ch__$1,meta34599));
});

}

return (new cljs.core.async.t_cljs$core$async34598(f,ch,cljs.core.PersistentArrayMap.EMPTY));
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.filter_GT_ = (function cljs$core$async$filter_GT_(p,ch){
if(typeof cljs.core.async.t_cljs$core$async34601 !== 'undefined'){
} else {

/**
* @constructor
 * @implements {cljs.core.async.impl.protocols.Channel}
 * @implements {cljs.core.async.impl.protocols.WritePort}
 * @implements {cljs.core.async.impl.protocols.ReadPort}
 * @implements {cljs.core.IMeta}
 * @implements {cljs.core.IWithMeta}
*/
cljs.core.async.t_cljs$core$async34601 = (function (p,ch,meta34602){
this.p = p;
this.ch = ch;
this.meta34602 = meta34602;
this.cljs$lang$protocol_mask$partition0$ = 393216;
this.cljs$lang$protocol_mask$partition1$ = 0;
});
cljs.core.async.t_cljs$core$async34601.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_34603,meta34602__$1){
var self__ = this;
var _34603__$1 = this;
return (new cljs.core.async.t_cljs$core$async34601(self__.p,self__.ch,meta34602__$1));
});

cljs.core.async.t_cljs$core$async34601.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_34603){
var self__ = this;
var _34603__$1 = this;
return self__.meta34602;
});

cljs.core.async.t_cljs$core$async34601.prototype.cljs$core$async$impl$protocols$Channel$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34601.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34601.prototype.cljs$core$async$impl$protocols$Channel$closed_QMARK_$arity$1 = (function (_){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch);
});

cljs.core.async.t_cljs$core$async34601.prototype.cljs$core$async$impl$protocols$ReadPort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34601.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){
var self__ = this;
var ___$1 = this;
return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});

cljs.core.async.t_cljs$core$async34601.prototype.cljs$core$async$impl$protocols$WritePort$ = cljs.core.PROTOCOL_SENTINEL;

cljs.core.async.t_cljs$core$async34601.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn1){
var self__ = this;
var ___$1 = this;
if(cljs.core.truth_(self__.p.call(null,val))){
return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn1);
} else {
return cljs.core.async.impl.channels.box.call(null,cljs.core.not.call(null,cljs.core.async.impl.protocols.closed_QMARK_.call(null,self__.ch)));
}
});

cljs.core.async.t_cljs$core$async34601.getBasis = (function (){
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Symbol(null,"p","p",1791580836,null),new cljs.core.Symbol(null,"ch","ch",1085813622,null),new cljs.core.Symbol(null,"meta34602","meta34602",959791314,null)], null);
});

cljs.core.async.t_cljs$core$async34601.cljs$lang$type = true;

cljs.core.async.t_cljs$core$async34601.cljs$lang$ctorStr = "cljs.core.async/t_cljs$core$async34601";

cljs.core.async.t_cljs$core$async34601.cljs$lang$ctorPrWriter = (function (this__30694__auto__,writer__30695__auto__,opt__30696__auto__){
return cljs.core._write.call(null,writer__30695__auto__,"cljs.core.async/t_cljs$core$async34601");
});

cljs.core.async.__GT_t_cljs$core$async34601 = (function cljs$core$async$filter_GT__$___GT_t_cljs$core$async34601(p__$1,ch__$1,meta34602){
return (new cljs.core.async.t_cljs$core$async34601(p__$1,ch__$1,meta34602));
});

}

return (new cljs.core.async.t_cljs$core$async34601(p,ch,cljs.core.PersistentArrayMap.EMPTY));
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
var G__34605 = arguments.length;
switch (G__34605) {
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
var c__33106__auto___34645 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___34645,out){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___34645,out){
return (function (state_34626){
var state_val_34627 = (state_34626[(1)]);
if((state_val_34627 === (7))){
var inst_34622 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34628_34646 = state_34626__$1;
(statearr_34628_34646[(2)] = inst_34622);

(statearr_34628_34646[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (1))){
var state_34626__$1 = state_34626;
var statearr_34629_34647 = state_34626__$1;
(statearr_34629_34647[(2)] = null);

(statearr_34629_34647[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (4))){
var inst_34608 = (state_34626[(7)]);
var inst_34608__$1 = (state_34626[(2)]);
var inst_34609 = (inst_34608__$1 == null);
var state_34626__$1 = (function (){var statearr_34630 = state_34626;
(statearr_34630[(7)] = inst_34608__$1);

return statearr_34630;
})();
if(cljs.core.truth_(inst_34609)){
var statearr_34631_34648 = state_34626__$1;
(statearr_34631_34648[(1)] = (5));

} else {
var statearr_34632_34649 = state_34626__$1;
(statearr_34632_34649[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (6))){
var inst_34608 = (state_34626[(7)]);
var inst_34613 = p.call(null,inst_34608);
var state_34626__$1 = state_34626;
if(cljs.core.truth_(inst_34613)){
var statearr_34633_34650 = state_34626__$1;
(statearr_34633_34650[(1)] = (8));

} else {
var statearr_34634_34651 = state_34626__$1;
(statearr_34634_34651[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (3))){
var inst_34624 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34626__$1,inst_34624);
} else {
if((state_val_34627 === (2))){
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34626__$1,(4),ch);
} else {
if((state_val_34627 === (11))){
var inst_34616 = (state_34626[(2)]);
var state_34626__$1 = state_34626;
var statearr_34635_34652 = state_34626__$1;
(statearr_34635_34652[(2)] = inst_34616);

(statearr_34635_34652[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (9))){
var state_34626__$1 = state_34626;
var statearr_34636_34653 = state_34626__$1;
(statearr_34636_34653[(2)] = null);

(statearr_34636_34653[(1)] = (10));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (5))){
var inst_34611 = cljs.core.async.close_BANG_.call(null,out);
var state_34626__$1 = state_34626;
var statearr_34637_34654 = state_34626__$1;
(statearr_34637_34654[(2)] = inst_34611);

(statearr_34637_34654[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (10))){
var inst_34619 = (state_34626[(2)]);
var state_34626__$1 = (function (){var statearr_34638 = state_34626;
(statearr_34638[(8)] = inst_34619);

return statearr_34638;
})();
var statearr_34639_34655 = state_34626__$1;
(statearr_34639_34655[(2)] = null);

(statearr_34639_34655[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34627 === (8))){
var inst_34608 = (state_34626[(7)]);
var state_34626__$1 = state_34626;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34626__$1,(11),out,inst_34608);
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
});})(c__33106__auto___34645,out))
;
return ((function (switch__33016__auto__,c__33106__auto___34645,out){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_34640 = [null,null,null,null,null,null,null,null,null];
(statearr_34640[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_34640[(1)] = (1));

return statearr_34640;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_34626){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34626);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e34641){if((e34641 instanceof Object)){
var ex__33020__auto__ = e34641;
var statearr_34642_34656 = state_34626;
(statearr_34642_34656[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34626);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34641;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34657 = state_34626;
state_34626 = G__34657;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_34626){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_34626);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___34645,out))
})();
var state__33108__auto__ = (function (){var statearr_34643 = f__33107__auto__.call(null);
(statearr_34643[(6)] = c__33106__auto___34645);

return statearr_34643;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___34645,out))
);


return out;
});

cljs.core.async.filter_LT_.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.remove_LT_ = (function cljs$core$async$remove_LT_(var_args){
var G__34659 = arguments.length;
switch (G__34659) {
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
var c__33106__auto__ = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto__){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto__){
return (function (state_34722){
var state_val_34723 = (state_34722[(1)]);
if((state_val_34723 === (7))){
var inst_34718 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34724_34762 = state_34722__$1;
(statearr_34724_34762[(2)] = inst_34718);

(statearr_34724_34762[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (20))){
var inst_34688 = (state_34722[(7)]);
var inst_34699 = (state_34722[(2)]);
var inst_34700 = cljs.core.next.call(null,inst_34688);
var inst_34674 = inst_34700;
var inst_34675 = null;
var inst_34676 = (0);
var inst_34677 = (0);
var state_34722__$1 = (function (){var statearr_34725 = state_34722;
(statearr_34725[(8)] = inst_34677);

(statearr_34725[(9)] = inst_34675);

(statearr_34725[(10)] = inst_34674);

(statearr_34725[(11)] = inst_34699);

(statearr_34725[(12)] = inst_34676);

return statearr_34725;
})();
var statearr_34726_34763 = state_34722__$1;
(statearr_34726_34763[(2)] = null);

(statearr_34726_34763[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (1))){
var state_34722__$1 = state_34722;
var statearr_34727_34764 = state_34722__$1;
(statearr_34727_34764[(2)] = null);

(statearr_34727_34764[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (4))){
var inst_34663 = (state_34722[(13)]);
var inst_34663__$1 = (state_34722[(2)]);
var inst_34664 = (inst_34663__$1 == null);
var state_34722__$1 = (function (){var statearr_34728 = state_34722;
(statearr_34728[(13)] = inst_34663__$1);

return statearr_34728;
})();
if(cljs.core.truth_(inst_34664)){
var statearr_34729_34765 = state_34722__$1;
(statearr_34729_34765[(1)] = (5));

} else {
var statearr_34730_34766 = state_34722__$1;
(statearr_34730_34766[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (15))){
var state_34722__$1 = state_34722;
var statearr_34734_34767 = state_34722__$1;
(statearr_34734_34767[(2)] = null);

(statearr_34734_34767[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (21))){
var state_34722__$1 = state_34722;
var statearr_34735_34768 = state_34722__$1;
(statearr_34735_34768[(2)] = null);

(statearr_34735_34768[(1)] = (23));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (13))){
var inst_34677 = (state_34722[(8)]);
var inst_34675 = (state_34722[(9)]);
var inst_34674 = (state_34722[(10)]);
var inst_34676 = (state_34722[(12)]);
var inst_34684 = (state_34722[(2)]);
var inst_34685 = (inst_34677 + (1));
var tmp34731 = inst_34675;
var tmp34732 = inst_34674;
var tmp34733 = inst_34676;
var inst_34674__$1 = tmp34732;
var inst_34675__$1 = tmp34731;
var inst_34676__$1 = tmp34733;
var inst_34677__$1 = inst_34685;
var state_34722__$1 = (function (){var statearr_34736 = state_34722;
(statearr_34736[(14)] = inst_34684);

(statearr_34736[(8)] = inst_34677__$1);

(statearr_34736[(9)] = inst_34675__$1);

(statearr_34736[(10)] = inst_34674__$1);

(statearr_34736[(12)] = inst_34676__$1);

return statearr_34736;
})();
var statearr_34737_34769 = state_34722__$1;
(statearr_34737_34769[(2)] = null);

(statearr_34737_34769[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (22))){
var state_34722__$1 = state_34722;
var statearr_34738_34770 = state_34722__$1;
(statearr_34738_34770[(2)] = null);

(statearr_34738_34770[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (6))){
var inst_34663 = (state_34722[(13)]);
var inst_34672 = f.call(null,inst_34663);
var inst_34673 = cljs.core.seq.call(null,inst_34672);
var inst_34674 = inst_34673;
var inst_34675 = null;
var inst_34676 = (0);
var inst_34677 = (0);
var state_34722__$1 = (function (){var statearr_34739 = state_34722;
(statearr_34739[(8)] = inst_34677);

(statearr_34739[(9)] = inst_34675);

(statearr_34739[(10)] = inst_34674);

(statearr_34739[(12)] = inst_34676);

return statearr_34739;
})();
var statearr_34740_34771 = state_34722__$1;
(statearr_34740_34771[(2)] = null);

(statearr_34740_34771[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (17))){
var inst_34688 = (state_34722[(7)]);
var inst_34692 = cljs.core.chunk_first.call(null,inst_34688);
var inst_34693 = cljs.core.chunk_rest.call(null,inst_34688);
var inst_34694 = cljs.core.count.call(null,inst_34692);
var inst_34674 = inst_34693;
var inst_34675 = inst_34692;
var inst_34676 = inst_34694;
var inst_34677 = (0);
var state_34722__$1 = (function (){var statearr_34741 = state_34722;
(statearr_34741[(8)] = inst_34677);

(statearr_34741[(9)] = inst_34675);

(statearr_34741[(10)] = inst_34674);

(statearr_34741[(12)] = inst_34676);

return statearr_34741;
})();
var statearr_34742_34772 = state_34722__$1;
(statearr_34742_34772[(2)] = null);

(statearr_34742_34772[(1)] = (8));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (3))){
var inst_34720 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34722__$1,inst_34720);
} else {
if((state_val_34723 === (12))){
var inst_34708 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34743_34773 = state_34722__$1;
(statearr_34743_34773[(2)] = inst_34708);

(statearr_34743_34773[(1)] = (9));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (2))){
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34722__$1,(4),in$);
} else {
if((state_val_34723 === (23))){
var inst_34716 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34744_34774 = state_34722__$1;
(statearr_34744_34774[(2)] = inst_34716);

(statearr_34744_34774[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (19))){
var inst_34703 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34745_34775 = state_34722__$1;
(statearr_34745_34775[(2)] = inst_34703);

(statearr_34745_34775[(1)] = (16));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (11))){
var inst_34674 = (state_34722[(10)]);
var inst_34688 = (state_34722[(7)]);
var inst_34688__$1 = cljs.core.seq.call(null,inst_34674);
var state_34722__$1 = (function (){var statearr_34746 = state_34722;
(statearr_34746[(7)] = inst_34688__$1);

return statearr_34746;
})();
if(inst_34688__$1){
var statearr_34747_34776 = state_34722__$1;
(statearr_34747_34776[(1)] = (14));

} else {
var statearr_34748_34777 = state_34722__$1;
(statearr_34748_34777[(1)] = (15));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (9))){
var inst_34710 = (state_34722[(2)]);
var inst_34711 = cljs.core.async.impl.protocols.closed_QMARK_.call(null,out);
var state_34722__$1 = (function (){var statearr_34749 = state_34722;
(statearr_34749[(15)] = inst_34710);

return statearr_34749;
})();
if(cljs.core.truth_(inst_34711)){
var statearr_34750_34778 = state_34722__$1;
(statearr_34750_34778[(1)] = (21));

} else {
var statearr_34751_34779 = state_34722__$1;
(statearr_34751_34779[(1)] = (22));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (5))){
var inst_34666 = cljs.core.async.close_BANG_.call(null,out);
var state_34722__$1 = state_34722;
var statearr_34752_34780 = state_34722__$1;
(statearr_34752_34780[(2)] = inst_34666);

(statearr_34752_34780[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (14))){
var inst_34688 = (state_34722[(7)]);
var inst_34690 = cljs.core.chunked_seq_QMARK_.call(null,inst_34688);
var state_34722__$1 = state_34722;
if(inst_34690){
var statearr_34753_34781 = state_34722__$1;
(statearr_34753_34781[(1)] = (17));

} else {
var statearr_34754_34782 = state_34722__$1;
(statearr_34754_34782[(1)] = (18));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (16))){
var inst_34706 = (state_34722[(2)]);
var state_34722__$1 = state_34722;
var statearr_34755_34783 = state_34722__$1;
(statearr_34755_34783[(2)] = inst_34706);

(statearr_34755_34783[(1)] = (12));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34723 === (10))){
var inst_34677 = (state_34722[(8)]);
var inst_34675 = (state_34722[(9)]);
var inst_34682 = cljs.core._nth.call(null,inst_34675,inst_34677);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34722__$1,(13),out,inst_34682);
} else {
if((state_val_34723 === (18))){
var inst_34688 = (state_34722[(7)]);
var inst_34697 = cljs.core.first.call(null,inst_34688);
var state_34722__$1 = state_34722;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34722__$1,(20),out,inst_34697);
} else {
if((state_val_34723 === (8))){
var inst_34677 = (state_34722[(8)]);
var inst_34676 = (state_34722[(12)]);
var inst_34679 = (inst_34677 < inst_34676);
var inst_34680 = inst_34679;
var state_34722__$1 = state_34722;
if(cljs.core.truth_(inst_34680)){
var statearr_34756_34784 = state_34722__$1;
(statearr_34756_34784[(1)] = (10));

} else {
var statearr_34757_34785 = state_34722__$1;
(statearr_34757_34785[(1)] = (11));

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
});})(c__33106__auto__))
;
return ((function (switch__33016__auto__,c__33106__auto__){
return (function() {
var cljs$core$async$mapcat_STAR__$_state_machine__33017__auto__ = null;
var cljs$core$async$mapcat_STAR__$_state_machine__33017__auto____0 = (function (){
var statearr_34758 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34758[(0)] = cljs$core$async$mapcat_STAR__$_state_machine__33017__auto__);

(statearr_34758[(1)] = (1));

return statearr_34758;
});
var cljs$core$async$mapcat_STAR__$_state_machine__33017__auto____1 = (function (state_34722){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34722);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e34759){if((e34759 instanceof Object)){
var ex__33020__auto__ = e34759;
var statearr_34760_34786 = state_34722;
(statearr_34760_34786[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34722);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34759;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34787 = state_34722;
state_34722 = G__34787;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$mapcat_STAR__$_state_machine__33017__auto__ = function(state_34722){
switch(arguments.length){
case 0:
return cljs$core$async$mapcat_STAR__$_state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$mapcat_STAR__$_state_machine__33017__auto____1.call(this,state_34722);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$mapcat_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$mapcat_STAR__$_state_machine__33017__auto____0;
cljs$core$async$mapcat_STAR__$_state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$mapcat_STAR__$_state_machine__33017__auto____1;
return cljs$core$async$mapcat_STAR__$_state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto__))
})();
var state__33108__auto__ = (function (){var statearr_34761 = f__33107__auto__.call(null);
(statearr_34761[(6)] = c__33106__auto__);

return statearr_34761;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto__))
);

return c__33106__auto__;
});
/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.mapcat_LT_ = (function cljs$core$async$mapcat_LT_(var_args){
var G__34789 = arguments.length;
switch (G__34789) {
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
var G__34792 = arguments.length;
switch (G__34792) {
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
var G__34795 = arguments.length;
switch (G__34795) {
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
var c__33106__auto___34842 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___34842,out){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___34842,out){
return (function (state_34819){
var state_val_34820 = (state_34819[(1)]);
if((state_val_34820 === (7))){
var inst_34814 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34821_34843 = state_34819__$1;
(statearr_34821_34843[(2)] = inst_34814);

(statearr_34821_34843[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (1))){
var inst_34796 = null;
var state_34819__$1 = (function (){var statearr_34822 = state_34819;
(statearr_34822[(7)] = inst_34796);

return statearr_34822;
})();
var statearr_34823_34844 = state_34819__$1;
(statearr_34823_34844[(2)] = null);

(statearr_34823_34844[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (4))){
var inst_34799 = (state_34819[(8)]);
var inst_34799__$1 = (state_34819[(2)]);
var inst_34800 = (inst_34799__$1 == null);
var inst_34801 = cljs.core.not.call(null,inst_34800);
var state_34819__$1 = (function (){var statearr_34824 = state_34819;
(statearr_34824[(8)] = inst_34799__$1);

return statearr_34824;
})();
if(inst_34801){
var statearr_34825_34845 = state_34819__$1;
(statearr_34825_34845[(1)] = (5));

} else {
var statearr_34826_34846 = state_34819__$1;
(statearr_34826_34846[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (6))){
var state_34819__$1 = state_34819;
var statearr_34827_34847 = state_34819__$1;
(statearr_34827_34847[(2)] = null);

(statearr_34827_34847[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (3))){
var inst_34816 = (state_34819[(2)]);
var inst_34817 = cljs.core.async.close_BANG_.call(null,out);
var state_34819__$1 = (function (){var statearr_34828 = state_34819;
(statearr_34828[(9)] = inst_34816);

return statearr_34828;
})();
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34819__$1,inst_34817);
} else {
if((state_val_34820 === (2))){
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34819__$1,(4),ch);
} else {
if((state_val_34820 === (11))){
var inst_34799 = (state_34819[(8)]);
var inst_34808 = (state_34819[(2)]);
var inst_34796 = inst_34799;
var state_34819__$1 = (function (){var statearr_34829 = state_34819;
(statearr_34829[(7)] = inst_34796);

(statearr_34829[(10)] = inst_34808);

return statearr_34829;
})();
var statearr_34830_34848 = state_34819__$1;
(statearr_34830_34848[(2)] = null);

(statearr_34830_34848[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (9))){
var inst_34799 = (state_34819[(8)]);
var state_34819__$1 = state_34819;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34819__$1,(11),out,inst_34799);
} else {
if((state_val_34820 === (5))){
var inst_34796 = (state_34819[(7)]);
var inst_34799 = (state_34819[(8)]);
var inst_34803 = cljs.core._EQ_.call(null,inst_34799,inst_34796);
var state_34819__$1 = state_34819;
if(inst_34803){
var statearr_34832_34849 = state_34819__$1;
(statearr_34832_34849[(1)] = (8));

} else {
var statearr_34833_34850 = state_34819__$1;
(statearr_34833_34850[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (10))){
var inst_34811 = (state_34819[(2)]);
var state_34819__$1 = state_34819;
var statearr_34834_34851 = state_34819__$1;
(statearr_34834_34851[(2)] = inst_34811);

(statearr_34834_34851[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34820 === (8))){
var inst_34796 = (state_34819[(7)]);
var tmp34831 = inst_34796;
var inst_34796__$1 = tmp34831;
var state_34819__$1 = (function (){var statearr_34835 = state_34819;
(statearr_34835[(7)] = inst_34796__$1);

return statearr_34835;
})();
var statearr_34836_34852 = state_34819__$1;
(statearr_34836_34852[(2)] = null);

(statearr_34836_34852[(1)] = (2));


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
});})(c__33106__auto___34842,out))
;
return ((function (switch__33016__auto__,c__33106__auto___34842,out){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_34837 = [null,null,null,null,null,null,null,null,null,null,null];
(statearr_34837[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_34837[(1)] = (1));

return statearr_34837;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_34819){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34819);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e34838){if((e34838 instanceof Object)){
var ex__33020__auto__ = e34838;
var statearr_34839_34853 = state_34819;
(statearr_34839_34853[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34819);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34838;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34854 = state_34819;
state_34819 = G__34854;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_34819){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_34819);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___34842,out))
})();
var state__33108__auto__ = (function (){var statearr_34840 = f__33107__auto__.call(null);
(statearr_34840[(6)] = c__33106__auto___34842);

return statearr_34840;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___34842,out))
);


return out;
});

cljs.core.async.unique.cljs$lang$maxFixedArity = 2;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition = (function cljs$core$async$partition(var_args){
var G__34856 = arguments.length;
switch (G__34856) {
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
var c__33106__auto___34922 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___34922,out){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___34922,out){
return (function (state_34894){
var state_val_34895 = (state_34894[(1)]);
if((state_val_34895 === (7))){
var inst_34890 = (state_34894[(2)]);
var state_34894__$1 = state_34894;
var statearr_34896_34923 = state_34894__$1;
(statearr_34896_34923[(2)] = inst_34890);

(statearr_34896_34923[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (1))){
var inst_34857 = (new Array(n));
var inst_34858 = inst_34857;
var inst_34859 = (0);
var state_34894__$1 = (function (){var statearr_34897 = state_34894;
(statearr_34897[(7)] = inst_34858);

(statearr_34897[(8)] = inst_34859);

return statearr_34897;
})();
var statearr_34898_34924 = state_34894__$1;
(statearr_34898_34924[(2)] = null);

(statearr_34898_34924[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (4))){
var inst_34862 = (state_34894[(9)]);
var inst_34862__$1 = (state_34894[(2)]);
var inst_34863 = (inst_34862__$1 == null);
var inst_34864 = cljs.core.not.call(null,inst_34863);
var state_34894__$1 = (function (){var statearr_34899 = state_34894;
(statearr_34899[(9)] = inst_34862__$1);

return statearr_34899;
})();
if(inst_34864){
var statearr_34900_34925 = state_34894__$1;
(statearr_34900_34925[(1)] = (5));

} else {
var statearr_34901_34926 = state_34894__$1;
(statearr_34901_34926[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (15))){
var inst_34884 = (state_34894[(2)]);
var state_34894__$1 = state_34894;
var statearr_34902_34927 = state_34894__$1;
(statearr_34902_34927[(2)] = inst_34884);

(statearr_34902_34927[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (13))){
var state_34894__$1 = state_34894;
var statearr_34903_34928 = state_34894__$1;
(statearr_34903_34928[(2)] = null);

(statearr_34903_34928[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (6))){
var inst_34859 = (state_34894[(8)]);
var inst_34880 = (inst_34859 > (0));
var state_34894__$1 = state_34894;
if(cljs.core.truth_(inst_34880)){
var statearr_34904_34929 = state_34894__$1;
(statearr_34904_34929[(1)] = (12));

} else {
var statearr_34905_34930 = state_34894__$1;
(statearr_34905_34930[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (3))){
var inst_34892 = (state_34894[(2)]);
var state_34894__$1 = state_34894;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34894__$1,inst_34892);
} else {
if((state_val_34895 === (12))){
var inst_34858 = (state_34894[(7)]);
var inst_34882 = cljs.core.vec.call(null,inst_34858);
var state_34894__$1 = state_34894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34894__$1,(15),out,inst_34882);
} else {
if((state_val_34895 === (2))){
var state_34894__$1 = state_34894;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34894__$1,(4),ch);
} else {
if((state_val_34895 === (11))){
var inst_34874 = (state_34894[(2)]);
var inst_34875 = (new Array(n));
var inst_34858 = inst_34875;
var inst_34859 = (0);
var state_34894__$1 = (function (){var statearr_34906 = state_34894;
(statearr_34906[(7)] = inst_34858);

(statearr_34906[(8)] = inst_34859);

(statearr_34906[(10)] = inst_34874);

return statearr_34906;
})();
var statearr_34907_34931 = state_34894__$1;
(statearr_34907_34931[(2)] = null);

(statearr_34907_34931[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (9))){
var inst_34858 = (state_34894[(7)]);
var inst_34872 = cljs.core.vec.call(null,inst_34858);
var state_34894__$1 = state_34894;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34894__$1,(11),out,inst_34872);
} else {
if((state_val_34895 === (5))){
var inst_34862 = (state_34894[(9)]);
var inst_34858 = (state_34894[(7)]);
var inst_34859 = (state_34894[(8)]);
var inst_34867 = (state_34894[(11)]);
var inst_34866 = (inst_34858[inst_34859] = inst_34862);
var inst_34867__$1 = (inst_34859 + (1));
var inst_34868 = (inst_34867__$1 < n);
var state_34894__$1 = (function (){var statearr_34908 = state_34894;
(statearr_34908[(12)] = inst_34866);

(statearr_34908[(11)] = inst_34867__$1);

return statearr_34908;
})();
if(cljs.core.truth_(inst_34868)){
var statearr_34909_34932 = state_34894__$1;
(statearr_34909_34932[(1)] = (8));

} else {
var statearr_34910_34933 = state_34894__$1;
(statearr_34910_34933[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (14))){
var inst_34887 = (state_34894[(2)]);
var inst_34888 = cljs.core.async.close_BANG_.call(null,out);
var state_34894__$1 = (function (){var statearr_34912 = state_34894;
(statearr_34912[(13)] = inst_34887);

return statearr_34912;
})();
var statearr_34913_34934 = state_34894__$1;
(statearr_34913_34934[(2)] = inst_34888);

(statearr_34913_34934[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (10))){
var inst_34878 = (state_34894[(2)]);
var state_34894__$1 = state_34894;
var statearr_34914_34935 = state_34894__$1;
(statearr_34914_34935[(2)] = inst_34878);

(statearr_34914_34935[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34895 === (8))){
var inst_34858 = (state_34894[(7)]);
var inst_34867 = (state_34894[(11)]);
var tmp34911 = inst_34858;
var inst_34858__$1 = tmp34911;
var inst_34859 = inst_34867;
var state_34894__$1 = (function (){var statearr_34915 = state_34894;
(statearr_34915[(7)] = inst_34858__$1);

(statearr_34915[(8)] = inst_34859);

return statearr_34915;
})();
var statearr_34916_34936 = state_34894__$1;
(statearr_34916_34936[(2)] = null);

(statearr_34916_34936[(1)] = (2));


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
});})(c__33106__auto___34922,out))
;
return ((function (switch__33016__auto__,c__33106__auto___34922,out){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_34917 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_34917[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_34917[(1)] = (1));

return statearr_34917;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_34894){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34894);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e34918){if((e34918 instanceof Object)){
var ex__33020__auto__ = e34918;
var statearr_34919_34937 = state_34894;
(statearr_34919_34937[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34894);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e34918;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__34938 = state_34894;
state_34894 = G__34938;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_34894){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_34894);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___34922,out))
})();
var state__33108__auto__ = (function (){var statearr_34920 = f__33107__auto__.call(null);
(statearr_34920[(6)] = c__33106__auto___34922);

return statearr_34920;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___34922,out))
);


return out;
});

cljs.core.async.partition.cljs$lang$maxFixedArity = 3;

/**
 * Deprecated - this function will be removed. Use transducer instead
 */
cljs.core.async.partition_by = (function cljs$core$async$partition_by(var_args){
var G__34940 = arguments.length;
switch (G__34940) {
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
var c__33106__auto___35010 = cljs.core.async.chan.call(null,(1));
cljs.core.async.impl.dispatch.run.call(null,((function (c__33106__auto___35010,out){
return (function (){
var f__33107__auto__ = (function (){var switch__33016__auto__ = ((function (c__33106__auto___35010,out){
return (function (state_34982){
var state_val_34983 = (state_34982[(1)]);
if((state_val_34983 === (7))){
var inst_34978 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34984_35011 = state_34982__$1;
(statearr_34984_35011[(2)] = inst_34978);

(statearr_34984_35011[(1)] = (3));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (1))){
var inst_34941 = [];
var inst_34942 = inst_34941;
var inst_34943 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);
var state_34982__$1 = (function (){var statearr_34985 = state_34982;
(statearr_34985[(7)] = inst_34942);

(statearr_34985[(8)] = inst_34943);

return statearr_34985;
})();
var statearr_34986_35012 = state_34982__$1;
(statearr_34986_35012[(2)] = null);

(statearr_34986_35012[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (4))){
var inst_34946 = (state_34982[(9)]);
var inst_34946__$1 = (state_34982[(2)]);
var inst_34947 = (inst_34946__$1 == null);
var inst_34948 = cljs.core.not.call(null,inst_34947);
var state_34982__$1 = (function (){var statearr_34987 = state_34982;
(statearr_34987[(9)] = inst_34946__$1);

return statearr_34987;
})();
if(inst_34948){
var statearr_34988_35013 = state_34982__$1;
(statearr_34988_35013[(1)] = (5));

} else {
var statearr_34989_35014 = state_34982__$1;
(statearr_34989_35014[(1)] = (6));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (15))){
var inst_34972 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_34990_35015 = state_34982__$1;
(statearr_34990_35015[(2)] = inst_34972);

(statearr_34990_35015[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (13))){
var state_34982__$1 = state_34982;
var statearr_34991_35016 = state_34982__$1;
(statearr_34991_35016[(2)] = null);

(statearr_34991_35016[(1)] = (14));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (6))){
var inst_34942 = (state_34982[(7)]);
var inst_34967 = inst_34942.length;
var inst_34968 = (inst_34967 > (0));
var state_34982__$1 = state_34982;
if(cljs.core.truth_(inst_34968)){
var statearr_34992_35017 = state_34982__$1;
(statearr_34992_35017[(1)] = (12));

} else {
var statearr_34993_35018 = state_34982__$1;
(statearr_34993_35018[(1)] = (13));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (3))){
var inst_34980 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_34982__$1,inst_34980);
} else {
if((state_val_34983 === (12))){
var inst_34942 = (state_34982[(7)]);
var inst_34970 = cljs.core.vec.call(null,inst_34942);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34982__$1,(15),out,inst_34970);
} else {
if((state_val_34983 === (2))){
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_34982__$1,(4),ch);
} else {
if((state_val_34983 === (11))){
var inst_34946 = (state_34982[(9)]);
var inst_34950 = (state_34982[(10)]);
var inst_34960 = (state_34982[(2)]);
var inst_34961 = [];
var inst_34962 = inst_34961.push(inst_34946);
var inst_34942 = inst_34961;
var inst_34943 = inst_34950;
var state_34982__$1 = (function (){var statearr_34994 = state_34982;
(statearr_34994[(11)] = inst_34962);

(statearr_34994[(12)] = inst_34960);

(statearr_34994[(7)] = inst_34942);

(statearr_34994[(8)] = inst_34943);

return statearr_34994;
})();
var statearr_34995_35019 = state_34982__$1;
(statearr_34995_35019[(2)] = null);

(statearr_34995_35019[(1)] = (2));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (9))){
var inst_34942 = (state_34982[(7)]);
var inst_34958 = cljs.core.vec.call(null,inst_34942);
var state_34982__$1 = state_34982;
return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_34982__$1,(11),out,inst_34958);
} else {
if((state_val_34983 === (5))){
var inst_34946 = (state_34982[(9)]);
var inst_34950 = (state_34982[(10)]);
var inst_34943 = (state_34982[(8)]);
var inst_34950__$1 = f.call(null,inst_34946);
var inst_34951 = cljs.core._EQ_.call(null,inst_34950__$1,inst_34943);
var inst_34952 = cljs.core.keyword_identical_QMARK_.call(null,inst_34943,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));
var inst_34953 = (inst_34951) || (inst_34952);
var state_34982__$1 = (function (){var statearr_34996 = state_34982;
(statearr_34996[(10)] = inst_34950__$1);

return statearr_34996;
})();
if(cljs.core.truth_(inst_34953)){
var statearr_34997_35020 = state_34982__$1;
(statearr_34997_35020[(1)] = (8));

} else {
var statearr_34998_35021 = state_34982__$1;
(statearr_34998_35021[(1)] = (9));

}

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (14))){
var inst_34975 = (state_34982[(2)]);
var inst_34976 = cljs.core.async.close_BANG_.call(null,out);
var state_34982__$1 = (function (){var statearr_35000 = state_34982;
(statearr_35000[(13)] = inst_34975);

return statearr_35000;
})();
var statearr_35001_35022 = state_34982__$1;
(statearr_35001_35022[(2)] = inst_34976);

(statearr_35001_35022[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (10))){
var inst_34965 = (state_34982[(2)]);
var state_34982__$1 = state_34982;
var statearr_35002_35023 = state_34982__$1;
(statearr_35002_35023[(2)] = inst_34965);

(statearr_35002_35023[(1)] = (7));


return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
if((state_val_34983 === (8))){
var inst_34946 = (state_34982[(9)]);
var inst_34950 = (state_34982[(10)]);
var inst_34942 = (state_34982[(7)]);
var inst_34955 = inst_34942.push(inst_34946);
var tmp34999 = inst_34942;
var inst_34942__$1 = tmp34999;
var inst_34943 = inst_34950;
var state_34982__$1 = (function (){var statearr_35003 = state_34982;
(statearr_35003[(7)] = inst_34942__$1);

(statearr_35003[(14)] = inst_34955);

(statearr_35003[(8)] = inst_34943);

return statearr_35003;
})();
var statearr_35004_35024 = state_34982__$1;
(statearr_35004_35024[(2)] = null);

(statearr_35004_35024[(1)] = (2));


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
});})(c__33106__auto___35010,out))
;
return ((function (switch__33016__auto__,c__33106__auto___35010,out){
return (function() {
var cljs$core$async$state_machine__33017__auto__ = null;
var cljs$core$async$state_machine__33017__auto____0 = (function (){
var statearr_35005 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];
(statearr_35005[(0)] = cljs$core$async$state_machine__33017__auto__);

(statearr_35005[(1)] = (1));

return statearr_35005;
});
var cljs$core$async$state_machine__33017__auto____1 = (function (state_34982){
while(true){
var ret_value__33018__auto__ = (function (){try{while(true){
var result__33019__auto__ = switch__33016__auto__.call(null,state_34982);
if(cljs.core.keyword_identical_QMARK_.call(null,result__33019__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
continue;
} else {
return result__33019__auto__;
}
break;
}
}catch (e35006){if((e35006 instanceof Object)){
var ex__33020__auto__ = e35006;
var statearr_35007_35025 = state_34982;
(statearr_35007_35025[(5)] = ex__33020__auto__);


cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_34982);

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else {
throw e35006;

}
}})();
if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__33018__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268))){
var G__35026 = state_34982;
state_34982 = G__35026;
continue;
} else {
return ret_value__33018__auto__;
}
break;
}
});
cljs$core$async$state_machine__33017__auto__ = function(state_34982){
switch(arguments.length){
case 0:
return cljs$core$async$state_machine__33017__auto____0.call(this);
case 1:
return cljs$core$async$state_machine__33017__auto____1.call(this,state_34982);
}
throw(new Error('Invalid arity: ' + (arguments.length - 1)));
};
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$0 = cljs$core$async$state_machine__33017__auto____0;
cljs$core$async$state_machine__33017__auto__.cljs$core$IFn$_invoke$arity$1 = cljs$core$async$state_machine__33017__auto____1;
return cljs$core$async$state_machine__33017__auto__;
})()
;})(switch__33016__auto__,c__33106__auto___35010,out))
})();
var state__33108__auto__ = (function (){var statearr_35008 = f__33107__auto__.call(null);
(statearr_35008[(6)] = c__33106__auto___35010);

return statearr_35008;
})();
return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__33108__auto__);
});})(c__33106__auto___35010,out))
);


return out;
});

cljs.core.async.partition_by.cljs$lang$maxFixedArity = 3;


//# sourceMappingURL=async.js.map?rel=1515306576313
