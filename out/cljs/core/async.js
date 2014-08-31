// Compiled by ClojureScript 0.0-2311
goog.provide('cljs.core.async');
goog.require('cljs.core');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.channels');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.protocols');
goog.require('cljs.core.async.impl.timers');
goog.require('cljs.core.async.impl.dispatch');
goog.require('cljs.core.async.impl.ioc_helpers');
goog.require('cljs.core.async.impl.buffers');
goog.require('cljs.core.async.impl.timers');
cljs.core.async.fn_handler = (function fn_handler(f){if(typeof cljs.core.async.t9692 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9692 = (function (f,fn_handler,meta9693){
this.f = f;
this.fn_handler = fn_handler;
this.meta9693 = meta9693;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9692.cljs$lang$type = true;
cljs.core.async.t9692.cljs$lang$ctorStr = "cljs.core.async/t9692";
cljs.core.async.t9692.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9692");
});
cljs.core.async.t9692.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9692.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return true;
});
cljs.core.async.t9692.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return self__.f;
});
cljs.core.async.t9692.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9694){var self__ = this;
var _9694__$1 = this;return self__.meta9693;
});
cljs.core.async.t9692.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9694,meta9693__$1){var self__ = this;
var _9694__$1 = this;return (new cljs.core.async.t9692(self__.f,self__.fn_handler,meta9693__$1));
});
cljs.core.async.__GT_t9692 = (function __GT_t9692(f__$1,fn_handler__$1,meta9693){return (new cljs.core.async.t9692(f__$1,fn_handler__$1,meta9693));
});
}
return (new cljs.core.async.t9692(f,fn_handler,null));
});
/**
* Returns a fixed buffer of size n. When full, puts will block/park.
*/
cljs.core.async.buffer = (function buffer(n){return cljs.core.async.impl.buffers.fixed_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete but
* val will be dropped (no transfer).
*/
cljs.core.async.dropping_buffer = (function dropping_buffer(n){return cljs.core.async.impl.buffers.dropping_buffer.call(null,n);
});
/**
* Returns a buffer of size n. When full, puts will complete, and be
* buffered, but oldest elements in buffer will be dropped (not
* transferred).
*/
cljs.core.async.sliding_buffer = (function sliding_buffer(n){return cljs.core.async.impl.buffers.sliding_buffer.call(null,n);
});
/**
* Returns true if a channel created with buff will never block. That is to say,
* puts into this buffer will never cause the buffer to be full.
*/
cljs.core.async.unblocking_buffer_QMARK_ = (function unblocking_buffer_QMARK_(buff){var G__9696 = buff;if(G__9696)
{var bit__4201__auto__ = null;if(cljs.core.truth_((function (){var or__3551__auto__ = bit__4201__auto__;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return G__9696.cljs$core$async$impl$protocols$UnblockingBuffer$;
}
})()))
{return true;
} else
{if((!G__9696.cljs$lang$protocol_mask$partition$))
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9696);
} else
{return false;
}
}
} else
{return cljs.core.native_satisfies_QMARK_.call(null,cljs.core.async.impl.protocols.UnblockingBuffer,G__9696);
}
});
/**
* Creates a channel with an optional buffer. If buf-or-n is a number,
* will create and use a fixed buffer of that size.
*/
cljs.core.async.chan = (function() {
var chan = null;
var chan__0 = (function (){return chan.call(null,null);
});
var chan__1 = (function (buf_or_n){var buf_or_n__$1 = ((cljs.core._EQ_.call(null,buf_or_n,(0)))?null:buf_or_n);return cljs.core.async.impl.channels.chan.call(null,((typeof buf_or_n__$1 === 'number')?cljs.core.async.buffer.call(null,buf_or_n__$1):buf_or_n__$1));
});
chan = function(buf_or_n){
switch(arguments.length){
case 0:
return chan__0.call(this);
case 1:
return chan__1.call(this,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
chan.cljs$core$IFn$_invoke$arity$0 = chan__0;
chan.cljs$core$IFn$_invoke$arity$1 = chan__1;
return chan;
})()
;
/**
* Returns a channel that will close after msecs
*/
cljs.core.async.timeout = (function timeout(msecs){return cljs.core.async.impl.timers.timeout.call(null,msecs);
});
/**
* takes a val from port. Must be called inside a (go ...) block. Will
* return nil if closed. Will park if nothing is available.
*/
cljs.core.async._LT__BANG_ = (function _LT__BANG_(port){throw (new Error(("Assert failed: <! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously takes a val from port, passing to fn1. Will pass nil
* if closed. If on-caller? (default true) is true, and value is
* immediately available, will call fn1 on calling thread.
* Returns nil.
*/
cljs.core.async.take_BANG_ = (function() {
var take_BANG_ = null;
var take_BANG___2 = (function (port,fn1){return take_BANG_.call(null,port,fn1,true);
});
var take_BANG___3 = (function (port,fn1,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.fn_handler.call(null,fn1));if(cljs.core.truth_(ret))
{var val_9697 = cljs.core.deref.call(null,ret);if(cljs.core.truth_(on_caller_QMARK_))
{fn1.call(null,val_9697);
} else
{cljs.core.async.impl.dispatch.run.call(null,((function (val_9697,ret){
return (function (){return fn1.call(null,val_9697);
});})(val_9697,ret))
);
}
} else
{}
return null;
});
take_BANG_ = function(port,fn1,on_caller_QMARK_){
switch(arguments.length){
case 2:
return take_BANG___2.call(this,port,fn1);
case 3:
return take_BANG___3.call(this,port,fn1,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take_BANG_.cljs$core$IFn$_invoke$arity$2 = take_BANG___2;
take_BANG_.cljs$core$IFn$_invoke$arity$3 = take_BANG___3;
return take_BANG_;
})()
;
cljs.core.async.nop = (function nop(){return null;
});
/**
* puts a val into port. nil values are not allowed. Must be called
* inside a (go ...) block. Will park if no buffer space is available.
*/
cljs.core.async._GT__BANG_ = (function _GT__BANG_(port,val){throw (new Error(("Assert failed: >! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

});
/**
* Asynchronously puts a val into port, calling fn0 (if supplied) when
* complete. nil values are not allowed. Will throw if closed. If
* on-caller? (default true) is true, and the put is immediately
* accepted, will call fn0 on calling thread.  Returns nil.
*/
cljs.core.async.put_BANG_ = (function() {
var put_BANG_ = null;
var put_BANG___2 = (function (port,val){return put_BANG_.call(null,port,val,cljs.core.async.nop);
});
var put_BANG___3 = (function (port,val,fn0){return put_BANG_.call(null,port,val,fn0,true);
});
var put_BANG___4 = (function (port,val,fn0,on_caller_QMARK_){var ret = cljs.core.async.impl.protocols.put_BANG_.call(null,port,val,cljs.core.async.fn_handler.call(null,fn0));if(cljs.core.truth_((function (){var and__3539__auto__ = ret;if(cljs.core.truth_(and__3539__auto__))
{return cljs.core.not_EQ_.call(null,fn0,cljs.core.async.nop);
} else
{return and__3539__auto__;
}
})()))
{if(cljs.core.truth_(on_caller_QMARK_))
{fn0.call(null);
} else
{cljs.core.async.impl.dispatch.run.call(null,fn0);
}
} else
{}
return null;
});
put_BANG_ = function(port,val,fn0,on_caller_QMARK_){
switch(arguments.length){
case 2:
return put_BANG___2.call(this,port,val);
case 3:
return put_BANG___3.call(this,port,val,fn0);
case 4:
return put_BANG___4.call(this,port,val,fn0,on_caller_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
put_BANG_.cljs$core$IFn$_invoke$arity$2 = put_BANG___2;
put_BANG_.cljs$core$IFn$_invoke$arity$3 = put_BANG___3;
put_BANG_.cljs$core$IFn$_invoke$arity$4 = put_BANG___4;
return put_BANG_;
})()
;
cljs.core.async.close_BANG_ = (function close_BANG_(port){return cljs.core.async.impl.protocols.close_BANG_.call(null,port);
});
cljs.core.async.random_array = (function random_array(n){var a = (new Array(n));var n__4407__auto___9698 = n;var x_9699 = (0);while(true){
if((x_9699 < n__4407__auto___9698))
{(a[x_9699] = (0));
{
var G__9700 = (x_9699 + (1));
x_9699 = G__9700;
continue;
}
} else
{}
break;
}
var i = (1);while(true){
if(cljs.core._EQ_.call(null,i,n))
{return a;
} else
{var j = cljs.core.rand_int.call(null,i);(a[i] = (a[j]));
(a[j] = i);
{
var G__9701 = (i + (1));
i = G__9701;
continue;
}
}
break;
}
});
cljs.core.async.alt_flag = (function alt_flag(){var flag = cljs.core.atom.call(null,true);if(typeof cljs.core.async.t9705 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9705 = (function (flag,alt_flag,meta9706){
this.flag = flag;
this.alt_flag = alt_flag;
this.meta9706 = meta9706;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9705.cljs$lang$type = true;
cljs.core.async.t9705.cljs$lang$ctorStr = "cljs.core.async/t9705";
cljs.core.async.t9705.cljs$lang$ctorPrWriter = ((function (flag){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9705");
});})(flag))
;
cljs.core.async.t9705.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9705.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.deref.call(null,self__.flag);
});})(flag))
;
cljs.core.async.t9705.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (flag){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.flag,null);
return true;
});})(flag))
;
cljs.core.async.t9705.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (flag){
return (function (_9707){var self__ = this;
var _9707__$1 = this;return self__.meta9706;
});})(flag))
;
cljs.core.async.t9705.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (flag){
return (function (_9707,meta9706__$1){var self__ = this;
var _9707__$1 = this;return (new cljs.core.async.t9705(self__.flag,self__.alt_flag,meta9706__$1));
});})(flag))
;
cljs.core.async.__GT_t9705 = ((function (flag){
return (function __GT_t9705(flag__$1,alt_flag__$1,meta9706){return (new cljs.core.async.t9705(flag__$1,alt_flag__$1,meta9706));
});})(flag))
;
}
return (new cljs.core.async.t9705(flag,alt_flag,null));
});
cljs.core.async.alt_handler = (function alt_handler(flag,cb){if(typeof cljs.core.async.t9711 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9711 = (function (cb,flag,alt_handler,meta9712){
this.cb = cb;
this.flag = flag;
this.alt_handler = alt_handler;
this.meta9712 = meta9712;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9711.cljs$lang$type = true;
cljs.core.async.t9711.cljs$lang$ctorStr = "cljs.core.async/t9711";
cljs.core.async.t9711.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9711");
});
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.flag);
});
cljs.core.async.t9711.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = (function (_){var self__ = this;
var ___$1 = this;cljs.core.async.impl.protocols.commit.call(null,self__.flag);
return self__.cb;
});
cljs.core.async.t9711.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9713){var self__ = this;
var _9713__$1 = this;return self__.meta9712;
});
cljs.core.async.t9711.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9713,meta9712__$1){var self__ = this;
var _9713__$1 = this;return (new cljs.core.async.t9711(self__.cb,self__.flag,self__.alt_handler,meta9712__$1));
});
cljs.core.async.__GT_t9711 = (function __GT_t9711(cb__$1,flag__$1,alt_handler__$1,meta9712){return (new cljs.core.async.t9711(cb__$1,flag__$1,alt_handler__$1,meta9712));
});
}
return (new cljs.core.async.t9711(cb,flag,alt_handler,null));
});
/**
* returns derefable [val port] if immediate, nil if enqueued
*/
cljs.core.async.do_alts = (function do_alts(fret,ports,opts){var flag = cljs.core.async.alt_flag.call(null);var n = cljs.core.count.call(null,ports);var idxs = cljs.core.async.random_array.call(null,n);var priority = new cljs.core.Keyword(null,"priority","priority",1431093715).cljs$core$IFn$_invoke$arity$1(opts);var ret = (function (){var i = (0);while(true){
if((i < n))
{var idx = (cljs.core.truth_(priority)?i:(idxs[i]));var port = cljs.core.nth.call(null,ports,idx);var wport = ((cljs.core.vector_QMARK_.call(null,port))?port.call(null,(0)):null);var vbox = (cljs.core.truth_(wport)?(function (){var val = port.call(null,(1));return cljs.core.async.impl.protocols.put_BANG_.call(null,wport,val,cljs.core.async.alt_handler.call(null,flag,((function (i,val,idx,port,wport,flag,n,idxs,priority){
return (function (){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [null,wport], null));
});})(i,val,idx,port,wport,flag,n,idxs,priority))
));
})():cljs.core.async.impl.protocols.take_BANG_.call(null,port,cljs.core.async.alt_handler.call(null,flag,((function (i,idx,port,wport,flag,n,idxs,priority){
return (function (p1__9714_SHARP_){return fret.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [p1__9714_SHARP_,port], null));
});})(i,idx,port,wport,flag,n,idxs,priority))
)));if(cljs.core.truth_(vbox))
{return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.deref.call(null,vbox),(function (){var or__3551__auto__ = wport;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return port;
}
})()], null));
} else
{{
var G__9715 = (i + (1));
i = G__9715;
continue;
}
}
} else
{return null;
}
break;
}
})();var or__3551__auto__ = ret;if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{if(cljs.core.contains_QMARK_.call(null,opts,new cljs.core.Keyword(null,"default","default",-1987822328)))
{var temp__4126__auto__ = (function (){var and__3539__auto__ = cljs.core.async.impl.protocols.active_QMARK_.call(null,flag);if(cljs.core.truth_(and__3539__auto__))
{return cljs.core.async.impl.protocols.commit.call(null,flag);
} else
{return and__3539__auto__;
}
})();if(cljs.core.truth_(temp__4126__auto__))
{var got = temp__4126__auto__;return cljs.core.async.impl.channels.box.call(null,new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.Keyword(null,"default","default",-1987822328).cljs$core$IFn$_invoke$arity$1(opts),new cljs.core.Keyword(null,"default","default",-1987822328)], null));
} else
{return null;
}
} else
{return null;
}
}
});
/**
* Completes at most one of several channel operations. Must be called
* inside a (go ...) block. ports is a vector of channel endpoints, which
* can be either a channel to take from or a vector of
* [channel-to-put-to val-to-put], in any combination. Takes will be
* made as if by <!, and puts will be made as if by >!. Unless
* the :priority option is true, if more than one port operation is
* ready a non-deterministic choice will be made. If no operation is
* ready and a :default value is supplied, [default-val :default] will
* be returned, otherwise alts! will park until the first operation to
* become ready completes. Returns [val port] of the completed
* operation, where val is the value taken for takes, and nil for puts.
* 
* opts are passed as :key val ... Supported options:
* 
* :default val - the value to use if none of the operations are immediately ready
* :priority true - (default nil) when true, the operations will be tried in order.
* 
* Note: there is no guarantee that the port exps or val exprs will be
* used, nor in what order should they be, so they should not be
* depended upon for side effects.
* @param {...*} var_args
*/
cljs.core.async.alts_BANG_ = (function() { 
var alts_BANG___delegate = function (ports,p__9716){var map__9718 = p__9716;var map__9718__$1 = ((cljs.core.seq_QMARK_.call(null,map__9718))?cljs.core.apply.call(null,cljs.core.hash_map,map__9718):map__9718);var opts = map__9718__$1;throw (new Error(("Assert failed: alts! used not in (go ...) block\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,null)))));

};
var alts_BANG_ = function (ports,var_args){
var p__9716 = null;if (arguments.length > 1) {
  p__9716 = cljs.core.array_seq(Array.prototype.slice.call(arguments, 1),0);} 
return alts_BANG___delegate.call(this,ports,p__9716);};
alts_BANG_.cljs$lang$maxFixedArity = 1;
alts_BANG_.cljs$lang$applyTo = (function (arglist__9719){
var ports = cljs.core.first(arglist__9719);
var p__9716 = cljs.core.rest(arglist__9719);
return alts_BANG___delegate(ports,p__9716);
});
alts_BANG_.cljs$core$IFn$_invoke$arity$variadic = alts_BANG___delegate;
return alts_BANG_;
})()
;
/**
* Takes a function and a source channel, and returns a channel which
* contains the values produced by applying f to each value taken from
* the source channel
*/
cljs.core.async.map_LT_ = (function map_LT_(f,ch){if(typeof cljs.core.async.t9727 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9727 = (function (ch,f,map_LT_,meta9728){
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9728 = meta9728;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9727.cljs$lang$type = true;
cljs.core.async.t9727.cljs$lang$ctorStr = "cljs.core.async/t9727";
cljs.core.async.t9727.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9727");
});
cljs.core.async.t9727.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9727.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
});
cljs.core.async.t9727.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9727.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;var ret = cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,(function (){if(typeof cljs.core.async.t9730 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9730 = (function (fn1,_,meta9728,ch,f,map_LT_,meta9731){
this.fn1 = fn1;
this._ = _;
this.meta9728 = meta9728;
this.ch = ch;
this.f = f;
this.map_LT_ = map_LT_;
this.meta9731 = meta9731;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9730.cljs$lang$type = true;
cljs.core.async.t9730.cljs$lang$ctorStr = "cljs.core.async/t9730";
cljs.core.async.t9730.cljs$lang$ctorPrWriter = ((function (___$1){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9730");
});})(___$1))
;
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$Handler$ = true;
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$Handler$active_QMARK_$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.active_QMARK_.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$Handler$lock_id$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;return cljs.core.async.impl.protocols.lock_id.call(null,self__.fn1);
});})(___$1))
;
cljs.core.async.t9730.prototype.cljs$core$async$impl$protocols$Handler$commit$arity$1 = ((function (___$1){
return (function (___$3){var self__ = this;
var ___$4 = this;var f1 = cljs.core.async.impl.protocols.commit.call(null,self__.fn1);return ((function (f1,___$4,___$1){
return (function (p1__9720_SHARP_){return f1.call(null,(((p1__9720_SHARP_ == null))?null:self__.f.call(null,p1__9720_SHARP_)));
});
;})(f1,___$4,___$1))
});})(___$1))
;
cljs.core.async.t9730.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (___$1){
return (function (_9732){var self__ = this;
var _9732__$1 = this;return self__.meta9731;
});})(___$1))
;
cljs.core.async.t9730.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (___$1){
return (function (_9732,meta9731__$1){var self__ = this;
var _9732__$1 = this;return (new cljs.core.async.t9730(self__.fn1,self__._,self__.meta9728,self__.ch,self__.f,self__.map_LT_,meta9731__$1));
});})(___$1))
;
cljs.core.async.__GT_t9730 = ((function (___$1){
return (function __GT_t9730(fn1__$1,___$2,meta9728__$1,ch__$2,f__$2,map_LT___$2,meta9731){return (new cljs.core.async.t9730(fn1__$1,___$2,meta9728__$1,ch__$2,f__$2,map_LT___$2,meta9731));
});})(___$1))
;
}
return (new cljs.core.async.t9730(fn1,___$1,self__.meta9728,self__.ch,self__.f,self__.map_LT_,null));
})());if(cljs.core.truth_((function (){var and__3539__auto__ = ret;if(cljs.core.truth_(and__3539__auto__))
{return !((cljs.core.deref.call(null,ret) == null));
} else
{return and__3539__auto__;
}
})()))
{return cljs.core.async.impl.channels.box.call(null,self__.f.call(null,cljs.core.deref.call(null,ret)));
} else
{return ret;
}
});
cljs.core.async.t9727.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9727.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9727.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9729){var self__ = this;
var _9729__$1 = this;return self__.meta9728;
});
cljs.core.async.t9727.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9729,meta9728__$1){var self__ = this;
var _9729__$1 = this;return (new cljs.core.async.t9727(self__.ch,self__.f,self__.map_LT_,meta9728__$1));
});
cljs.core.async.__GT_t9727 = (function __GT_t9727(ch__$1,f__$1,map_LT___$1,meta9728){return (new cljs.core.async.t9727(ch__$1,f__$1,map_LT___$1,meta9728));
});
}
return (new cljs.core.async.t9727(ch,f,map_LT_,null));
});
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value before supplying it to the target channel.
*/
cljs.core.async.map_GT_ = (function map_GT_(f,ch){if(typeof cljs.core.async.t9736 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9736 = (function (ch,f,map_GT_,meta9737){
this.ch = ch;
this.f = f;
this.map_GT_ = map_GT_;
this.meta9737 = meta9737;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9736.cljs$lang$type = true;
cljs.core.async.t9736.cljs$lang$ctorStr = "cljs.core.async/t9736";
cljs.core.async.t9736.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9736");
});
cljs.core.async.t9736.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9736.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,self__.f.call(null,val),fn0);
});
cljs.core.async.t9736.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9736.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9736.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9736.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9736.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9738){var self__ = this;
var _9738__$1 = this;return self__.meta9737;
});
cljs.core.async.t9736.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9738,meta9737__$1){var self__ = this;
var _9738__$1 = this;return (new cljs.core.async.t9736(self__.ch,self__.f,self__.map_GT_,meta9737__$1));
});
cljs.core.async.__GT_t9736 = (function __GT_t9736(ch__$1,f__$1,map_GT___$1,meta9737){return (new cljs.core.async.t9736(ch__$1,f__$1,map_GT___$1,meta9737));
});
}
return (new cljs.core.async.t9736(ch,f,map_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns true to the
* target channel.
*/
cljs.core.async.filter_GT_ = (function filter_GT_(p,ch){if(typeof cljs.core.async.t9742 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t9742 = (function (ch,p,filter_GT_,meta9743){
this.ch = ch;
this.p = p;
this.filter_GT_ = filter_GT_;
this.meta9743 = meta9743;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t9742.cljs$lang$type = true;
cljs.core.async.t9742.cljs$lang$ctorStr = "cljs.core.async/t9742";
cljs.core.async.t9742.cljs$lang$ctorPrWriter = (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t9742");
});
cljs.core.async.t9742.prototype.cljs$core$async$impl$protocols$WritePort$ = true;
cljs.core.async.t9742.prototype.cljs$core$async$impl$protocols$WritePort$put_BANG_$arity$3 = (function (_,val,fn0){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.p.call(null,val)))
{return cljs.core.async.impl.protocols.put_BANG_.call(null,self__.ch,val,fn0);
} else
{return cljs.core.async.impl.channels.box.call(null,null);
}
});
cljs.core.async.t9742.prototype.cljs$core$async$impl$protocols$ReadPort$ = true;
cljs.core.async.t9742.prototype.cljs$core$async$impl$protocols$ReadPort$take_BANG_$arity$2 = (function (_,fn1){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.take_BANG_.call(null,self__.ch,fn1);
});
cljs.core.async.t9742.prototype.cljs$core$async$impl$protocols$Channel$ = true;
cljs.core.async.t9742.prototype.cljs$core$async$impl$protocols$Channel$close_BANG_$arity$1 = (function (_){var self__ = this;
var ___$1 = this;return cljs.core.async.impl.protocols.close_BANG_.call(null,self__.ch);
});
cljs.core.async.t9742.prototype.cljs$core$IMeta$_meta$arity$1 = (function (_9744){var self__ = this;
var _9744__$1 = this;return self__.meta9743;
});
cljs.core.async.t9742.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = (function (_9744,meta9743__$1){var self__ = this;
var _9744__$1 = this;return (new cljs.core.async.t9742(self__.ch,self__.p,self__.filter_GT_,meta9743__$1));
});
cljs.core.async.__GT_t9742 = (function __GT_t9742(ch__$1,p__$1,filter_GT___$1,meta9743){return (new cljs.core.async.t9742(ch__$1,p__$1,filter_GT___$1,meta9743));
});
}
return (new cljs.core.async.t9742(ch,p,filter_GT_,null));
});
/**
* Takes a predicate and a target channel, and returns a channel which
* supplies only the values for which the predicate returns false to the
* target channel.
*/
cljs.core.async.remove_GT_ = (function remove_GT_(p,ch){return cljs.core.async.filter_GT_.call(null,cljs.core.complement.call(null,p),ch);
});
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns true. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.filter_LT_ = (function() {
var filter_LT_ = null;
var filter_LT___2 = (function (p,ch){return filter_LT_.call(null,p,ch,null);
});
var filter_LT___3 = (function (p,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7341__auto___9827 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___9827,out){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___9827,out){
return (function (state_9806){var state_val_9807 = (state_9806[(1)]);if((state_val_9807 === (7)))
{var inst_9802 = (state_9806[(2)]);var state_9806__$1 = state_9806;var statearr_9808_9828 = state_9806__$1;(statearr_9808_9828[(2)] = inst_9802);
(statearr_9808_9828[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9807 === (1)))
{var state_9806__$1 = state_9806;var statearr_9809_9829 = state_9806__$1;(statearr_9809_9829[(2)] = null);
(statearr_9809_9829[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9807 === (4)))
{var inst_9788 = (state_9806[(7)]);var inst_9788__$1 = (state_9806[(2)]);var inst_9789 = (inst_9788__$1 == null);var state_9806__$1 = (function (){var statearr_9810 = state_9806;(statearr_9810[(7)] = inst_9788__$1);
return statearr_9810;
})();if(cljs.core.truth_(inst_9789))
{var statearr_9811_9830 = state_9806__$1;(statearr_9811_9830[(1)] = (5));
} else
{var statearr_9812_9831 = state_9806__$1;(statearr_9812_9831[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9807 === (6)))
{var inst_9788 = (state_9806[(7)]);var inst_9793 = p.call(null,inst_9788);var state_9806__$1 = state_9806;if(cljs.core.truth_(inst_9793))
{var statearr_9813_9832 = state_9806__$1;(statearr_9813_9832[(1)] = (8));
} else
{var statearr_9814_9833 = state_9806__$1;(statearr_9814_9833[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9807 === (3)))
{var inst_9804 = (state_9806[(2)]);var state_9806__$1 = state_9806;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9806__$1,inst_9804);
} else
{if((state_val_9807 === (2)))
{var state_9806__$1 = state_9806;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9806__$1,(4),ch);
} else
{if((state_val_9807 === (11)))
{var inst_9796 = (state_9806[(2)]);var state_9806__$1 = state_9806;var statearr_9815_9834 = state_9806__$1;(statearr_9815_9834[(2)] = inst_9796);
(statearr_9815_9834[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9807 === (9)))
{var state_9806__$1 = state_9806;var statearr_9816_9835 = state_9806__$1;(statearr_9816_9835[(2)] = null);
(statearr_9816_9835[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9807 === (5)))
{var inst_9791 = cljs.core.async.close_BANG_.call(null,out);var state_9806__$1 = state_9806;var statearr_9817_9836 = state_9806__$1;(statearr_9817_9836[(2)] = inst_9791);
(statearr_9817_9836[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9807 === (10)))
{var inst_9799 = (state_9806[(2)]);var state_9806__$1 = (function (){var statearr_9818 = state_9806;(statearr_9818[(8)] = inst_9799);
return statearr_9818;
})();var statearr_9819_9837 = state_9806__$1;(statearr_9819_9837[(2)] = null);
(statearr_9819_9837[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9807 === (8)))
{var inst_9788 = (state_9806[(7)]);var state_9806__$1 = state_9806;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9806__$1,(11),out,inst_9788);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___9827,out))
;return ((function (switch__7326__auto__,c__7341__auto___9827,out){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_9823 = [null,null,null,null,null,null,null,null,null];(statearr_9823[(0)] = state_machine__7327__auto__);
(statearr_9823[(1)] = (1));
return statearr_9823;
});
var state_machine__7327__auto____1 = (function (state_9806){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_9806);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e9824){if((e9824 instanceof Object))
{var ex__7330__auto__ = e9824;var statearr_9825_9838 = state_9806;(statearr_9825_9838[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9806);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e9824;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__9839 = state_9806;
state_9806 = G__9839;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_9806){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_9806);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___9827,out))
})();var state__7343__auto__ = (function (){var statearr_9826 = f__7342__auto__.call(null);(statearr_9826[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___9827);
return statearr_9826;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___9827,out))
);
return out;
});
filter_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return filter_LT___2.call(this,p,ch);
case 3:
return filter_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
filter_LT_.cljs$core$IFn$_invoke$arity$2 = filter_LT___2;
filter_LT_.cljs$core$IFn$_invoke$arity$3 = filter_LT___3;
return filter_LT_;
})()
;
/**
* Takes a predicate and a source channel, and returns a channel which
* contains only the values taken from the source channel for which the
* predicate returns false. The returned channel will be unbuffered by
* default, or a buf-or-n can be supplied. The channel will close
* when the source channel closes.
*/
cljs.core.async.remove_LT_ = (function() {
var remove_LT_ = null;
var remove_LT___2 = (function (p,ch){return remove_LT_.call(null,p,ch,null);
});
var remove_LT___3 = (function (p,ch,buf_or_n){return cljs.core.async.filter_LT_.call(null,cljs.core.complement.call(null,p),ch,buf_or_n);
});
remove_LT_ = function(p,ch,buf_or_n){
switch(arguments.length){
case 2:
return remove_LT___2.call(this,p,ch);
case 3:
return remove_LT___3.call(this,p,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
remove_LT_.cljs$core$IFn$_invoke$arity$2 = remove_LT___2;
remove_LT_.cljs$core$IFn$_invoke$arity$3 = remove_LT___3;
return remove_LT_;
})()
;
cljs.core.async.mapcat_STAR_ = (function mapcat_STAR_(f,in$,out){var c__7341__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto__){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto__){
return (function (state_9991){var state_val_9992 = (state_9991[(1)]);if((state_val_9992 === (7)))
{var inst_9987 = (state_9991[(2)]);var state_9991__$1 = state_9991;var statearr_9993_10030 = state_9991__$1;(statearr_9993_10030[(2)] = inst_9987);
(statearr_9993_10030[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (20)))
{var inst_9962 = (state_9991[(7)]);var inst_9973 = (state_9991[(2)]);var inst_9974 = cljs.core.next.call(null,inst_9962);var inst_9948 = inst_9974;var inst_9949 = null;var inst_9950 = (0);var inst_9951 = (0);var state_9991__$1 = (function (){var statearr_9994 = state_9991;(statearr_9994[(8)] = inst_9950);
(statearr_9994[(9)] = inst_9951);
(statearr_9994[(10)] = inst_9949);
(statearr_9994[(11)] = inst_9948);
(statearr_9994[(12)] = inst_9973);
return statearr_9994;
})();var statearr_9995_10031 = state_9991__$1;(statearr_9995_10031[(2)] = null);
(statearr_9995_10031[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (1)))
{var state_9991__$1 = state_9991;var statearr_9996_10032 = state_9991__$1;(statearr_9996_10032[(2)] = null);
(statearr_9996_10032[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (4)))
{var inst_9937 = (state_9991[(13)]);var inst_9937__$1 = (state_9991[(2)]);var inst_9938 = (inst_9937__$1 == null);var state_9991__$1 = (function (){var statearr_10000 = state_9991;(statearr_10000[(13)] = inst_9937__$1);
return statearr_10000;
})();if(cljs.core.truth_(inst_9938))
{var statearr_10001_10033 = state_9991__$1;(statearr_10001_10033[(1)] = (5));
} else
{var statearr_10002_10034 = state_9991__$1;(statearr_10002_10034[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (15)))
{var state_9991__$1 = state_9991;var statearr_10003_10035 = state_9991__$1;(statearr_10003_10035[(2)] = null);
(statearr_10003_10035[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (13)))
{var inst_9950 = (state_9991[(8)]);var inst_9951 = (state_9991[(9)]);var inst_9949 = (state_9991[(10)]);var inst_9948 = (state_9991[(11)]);var inst_9958 = (state_9991[(2)]);var inst_9959 = (inst_9951 + (1));var tmp9997 = inst_9950;var tmp9998 = inst_9949;var tmp9999 = inst_9948;var inst_9948__$1 = tmp9999;var inst_9949__$1 = tmp9998;var inst_9950__$1 = tmp9997;var inst_9951__$1 = inst_9959;var state_9991__$1 = (function (){var statearr_10004 = state_9991;(statearr_10004[(14)] = inst_9958);
(statearr_10004[(8)] = inst_9950__$1);
(statearr_10004[(9)] = inst_9951__$1);
(statearr_10004[(10)] = inst_9949__$1);
(statearr_10004[(11)] = inst_9948__$1);
return statearr_10004;
})();var statearr_10005_10036 = state_9991__$1;(statearr_10005_10036[(2)] = null);
(statearr_10005_10036[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (6)))
{var inst_9937 = (state_9991[(13)]);var inst_9942 = f.call(null,inst_9937);var inst_9947 = cljs.core.seq.call(null,inst_9942);var inst_9948 = inst_9947;var inst_9949 = null;var inst_9950 = (0);var inst_9951 = (0);var state_9991__$1 = (function (){var statearr_10006 = state_9991;(statearr_10006[(8)] = inst_9950);
(statearr_10006[(9)] = inst_9951);
(statearr_10006[(10)] = inst_9949);
(statearr_10006[(11)] = inst_9948);
return statearr_10006;
})();var statearr_10007_10037 = state_9991__$1;(statearr_10007_10037[(2)] = null);
(statearr_10007_10037[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (17)))
{var inst_9962 = (state_9991[(7)]);var inst_9966 = cljs.core.chunk_first.call(null,inst_9962);var inst_9967 = cljs.core.chunk_rest.call(null,inst_9962);var inst_9968 = cljs.core.count.call(null,inst_9966);var inst_9948 = inst_9967;var inst_9949 = inst_9966;var inst_9950 = inst_9968;var inst_9951 = (0);var state_9991__$1 = (function (){var statearr_10008 = state_9991;(statearr_10008[(8)] = inst_9950);
(statearr_10008[(9)] = inst_9951);
(statearr_10008[(10)] = inst_9949);
(statearr_10008[(11)] = inst_9948);
return statearr_10008;
})();var statearr_10009_10038 = state_9991__$1;(statearr_10009_10038[(2)] = null);
(statearr_10009_10038[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (3)))
{var inst_9989 = (state_9991[(2)]);var state_9991__$1 = state_9991;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_9991__$1,inst_9989);
} else
{if((state_val_9992 === (12)))
{var inst_9982 = (state_9991[(2)]);var state_9991__$1 = state_9991;var statearr_10010_10039 = state_9991__$1;(statearr_10010_10039[(2)] = inst_9982);
(statearr_10010_10039[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (2)))
{var state_9991__$1 = state_9991;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_9991__$1,(4),in$);
} else
{if((state_val_9992 === (19)))
{var inst_9977 = (state_9991[(2)]);var state_9991__$1 = state_9991;var statearr_10011_10040 = state_9991__$1;(statearr_10011_10040[(2)] = inst_9977);
(statearr_10011_10040[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (11)))
{var inst_9962 = (state_9991[(7)]);var inst_9948 = (state_9991[(11)]);var inst_9962__$1 = cljs.core.seq.call(null,inst_9948);var state_9991__$1 = (function (){var statearr_10012 = state_9991;(statearr_10012[(7)] = inst_9962__$1);
return statearr_10012;
})();if(inst_9962__$1)
{var statearr_10013_10041 = state_9991__$1;(statearr_10013_10041[(1)] = (14));
} else
{var statearr_10014_10042 = state_9991__$1;(statearr_10014_10042[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (9)))
{var inst_9984 = (state_9991[(2)]);var state_9991__$1 = (function (){var statearr_10015 = state_9991;(statearr_10015[(15)] = inst_9984);
return statearr_10015;
})();var statearr_10016_10043 = state_9991__$1;(statearr_10016_10043[(2)] = null);
(statearr_10016_10043[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (5)))
{var inst_9940 = cljs.core.async.close_BANG_.call(null,out);var state_9991__$1 = state_9991;var statearr_10017_10044 = state_9991__$1;(statearr_10017_10044[(2)] = inst_9940);
(statearr_10017_10044[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (14)))
{var inst_9962 = (state_9991[(7)]);var inst_9964 = cljs.core.chunked_seq_QMARK_.call(null,inst_9962);var state_9991__$1 = state_9991;if(inst_9964)
{var statearr_10018_10045 = state_9991__$1;(statearr_10018_10045[(1)] = (17));
} else
{var statearr_10019_10046 = state_9991__$1;(statearr_10019_10046[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (16)))
{var inst_9980 = (state_9991[(2)]);var state_9991__$1 = state_9991;var statearr_10020_10047 = state_9991__$1;(statearr_10020_10047[(2)] = inst_9980);
(statearr_10020_10047[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_9992 === (10)))
{var inst_9951 = (state_9991[(9)]);var inst_9949 = (state_9991[(10)]);var inst_9956 = cljs.core._nth.call(null,inst_9949,inst_9951);var state_9991__$1 = state_9991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9991__$1,(13),out,inst_9956);
} else
{if((state_val_9992 === (18)))
{var inst_9962 = (state_9991[(7)]);var inst_9971 = cljs.core.first.call(null,inst_9962);var state_9991__$1 = state_9991;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_9991__$1,(20),out,inst_9971);
} else
{if((state_val_9992 === (8)))
{var inst_9950 = (state_9991[(8)]);var inst_9951 = (state_9991[(9)]);var inst_9953 = (inst_9951 < inst_9950);var inst_9954 = inst_9953;var state_9991__$1 = state_9991;if(cljs.core.truth_(inst_9954))
{var statearr_10021_10048 = state_9991__$1;(statearr_10021_10048[(1)] = (10));
} else
{var statearr_10022_10049 = state_9991__$1;(statearr_10022_10049[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto__))
;return ((function (switch__7326__auto__,c__7341__auto__){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_10026 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10026[(0)] = state_machine__7327__auto__);
(statearr_10026[(1)] = (1));
return statearr_10026;
});
var state_machine__7327__auto____1 = (function (state_9991){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_9991);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e10027){if((e10027 instanceof Object))
{var ex__7330__auto__ = e10027;var statearr_10028_10050 = state_9991;(statearr_10028_10050[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_9991);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10027;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10051 = state_9991;
state_9991 = G__10051;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_9991){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_9991);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto__))
})();var state__7343__auto__ = (function (){var statearr_10029 = f__7342__auto__.call(null);(statearr_10029[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto__);
return statearr_10029;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto__))
);
return c__7341__auto__;
});
/**
* Takes a function and a source channel, and returns a channel which
* contains the values in each collection produced by applying f to
* each value taken from the source channel. f must return a
* collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The channel will close when the source channel
* closes.
*/
cljs.core.async.mapcat_LT_ = (function() {
var mapcat_LT_ = null;
var mapcat_LT___2 = (function (f,in$){return mapcat_LT_.call(null,f,in$,null);
});
var mapcat_LT___3 = (function (f,in$,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return out;
});
mapcat_LT_ = function(f,in$,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_LT___2.call(this,f,in$);
case 3:
return mapcat_LT___3.call(this,f,in$,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_LT_.cljs$core$IFn$_invoke$arity$2 = mapcat_LT___2;
mapcat_LT_.cljs$core$IFn$_invoke$arity$3 = mapcat_LT___3;
return mapcat_LT_;
})()
;
/**
* Takes a function and a target channel, and returns a channel which
* applies f to each value put, then supplies each element of the result
* to the target channel. f must return a collection.
* 
* The returned channel will be unbuffered by default, or a buf-or-n
* can be supplied. The target channel will be closed when the source
* channel closes.
*/
cljs.core.async.mapcat_GT_ = (function() {
var mapcat_GT_ = null;
var mapcat_GT___2 = (function (f,out){return mapcat_GT_.call(null,f,out,null);
});
var mapcat_GT___3 = (function (f,out,buf_or_n){var in$ = cljs.core.async.chan.call(null,buf_or_n);cljs.core.async.mapcat_STAR_.call(null,f,in$,out);
return in$;
});
mapcat_GT_ = function(f,out,buf_or_n){
switch(arguments.length){
case 2:
return mapcat_GT___2.call(this,f,out);
case 3:
return mapcat_GT___3.call(this,f,out,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
mapcat_GT_.cljs$core$IFn$_invoke$arity$2 = mapcat_GT___2;
mapcat_GT_.cljs$core$IFn$_invoke$arity$3 = mapcat_GT___3;
return mapcat_GT_;
})()
;
/**
* Takes elements from the from channel and supplies them to the to
* channel. By default, the to channel will be closed when the
* from channel closes, but can be determined by the close?
* parameter.
*/
cljs.core.async.pipe = (function() {
var pipe = null;
var pipe__2 = (function (from,to){return pipe.call(null,from,to,true);
});
var pipe__3 = (function (from,to,close_QMARK_){var c__7341__auto___10132 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___10132){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___10132){
return (function (state_10111){var state_val_10112 = (state_10111[(1)]);if((state_val_10112 === (7)))
{var inst_10107 = (state_10111[(2)]);var state_10111__$1 = state_10111;var statearr_10113_10133 = state_10111__$1;(statearr_10113_10133[(2)] = inst_10107);
(statearr_10113_10133[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10112 === (1)))
{var state_10111__$1 = state_10111;var statearr_10114_10134 = state_10111__$1;(statearr_10114_10134[(2)] = null);
(statearr_10114_10134[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10112 === (4)))
{var inst_10094 = (state_10111[(7)]);var inst_10094__$1 = (state_10111[(2)]);var inst_10095 = (inst_10094__$1 == null);var state_10111__$1 = (function (){var statearr_10115 = state_10111;(statearr_10115[(7)] = inst_10094__$1);
return statearr_10115;
})();if(cljs.core.truth_(inst_10095))
{var statearr_10116_10135 = state_10111__$1;(statearr_10116_10135[(1)] = (5));
} else
{var statearr_10117_10136 = state_10111__$1;(statearr_10117_10136[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10112 === (6)))
{var inst_10094 = (state_10111[(7)]);var state_10111__$1 = state_10111;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10111__$1,(11),to,inst_10094);
} else
{if((state_val_10112 === (3)))
{var inst_10109 = (state_10111[(2)]);var state_10111__$1 = state_10111;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10111__$1,inst_10109);
} else
{if((state_val_10112 === (2)))
{var state_10111__$1 = state_10111;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10111__$1,(4),from);
} else
{if((state_val_10112 === (11)))
{var inst_10104 = (state_10111[(2)]);var state_10111__$1 = (function (){var statearr_10118 = state_10111;(statearr_10118[(8)] = inst_10104);
return statearr_10118;
})();var statearr_10119_10137 = state_10111__$1;(statearr_10119_10137[(2)] = null);
(statearr_10119_10137[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10112 === (9)))
{var state_10111__$1 = state_10111;var statearr_10120_10138 = state_10111__$1;(statearr_10120_10138[(2)] = null);
(statearr_10120_10138[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10112 === (5)))
{var state_10111__$1 = state_10111;if(cljs.core.truth_(close_QMARK_))
{var statearr_10121_10139 = state_10111__$1;(statearr_10121_10139[(1)] = (8));
} else
{var statearr_10122_10140 = state_10111__$1;(statearr_10122_10140[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10112 === (10)))
{var inst_10101 = (state_10111[(2)]);var state_10111__$1 = state_10111;var statearr_10123_10141 = state_10111__$1;(statearr_10123_10141[(2)] = inst_10101);
(statearr_10123_10141[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10112 === (8)))
{var inst_10098 = cljs.core.async.close_BANG_.call(null,to);var state_10111__$1 = state_10111;var statearr_10124_10142 = state_10111__$1;(statearr_10124_10142[(2)] = inst_10098);
(statearr_10124_10142[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___10132))
;return ((function (switch__7326__auto__,c__7341__auto___10132){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_10128 = [null,null,null,null,null,null,null,null,null];(statearr_10128[(0)] = state_machine__7327__auto__);
(statearr_10128[(1)] = (1));
return statearr_10128;
});
var state_machine__7327__auto____1 = (function (state_10111){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_10111);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e10129){if((e10129 instanceof Object))
{var ex__7330__auto__ = e10129;var statearr_10130_10143 = state_10111;(statearr_10130_10143[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10111);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10129;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10144 = state_10111;
state_10111 = G__10144;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_10111){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_10111);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___10132))
})();var state__7343__auto__ = (function (){var statearr_10131 = f__7342__auto__.call(null);(statearr_10131[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___10132);
return statearr_10131;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___10132))
);
return to;
});
pipe = function(from,to,close_QMARK_){
switch(arguments.length){
case 2:
return pipe__2.call(this,from,to);
case 3:
return pipe__3.call(this,from,to,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pipe.cljs$core$IFn$_invoke$arity$2 = pipe__2;
pipe.cljs$core$IFn$_invoke$arity$3 = pipe__3;
return pipe;
})()
;
/**
* Takes a predicate and a source channel and returns a vector of two
* channels, the first of which will contain the values for which the
* predicate returned true, the second those for which it returned
* false.
* 
* The out channels will be unbuffered by default, or two buf-or-ns can
* be supplied. The channels will close after the source channel has
* closed.
*/
cljs.core.async.split = (function() {
var split = null;
var split__2 = (function (p,ch){return split.call(null,p,ch,null,null);
});
var split__4 = (function (p,ch,t_buf_or_n,f_buf_or_n){var tc = cljs.core.async.chan.call(null,t_buf_or_n);var fc = cljs.core.async.chan.call(null,f_buf_or_n);var c__7341__auto___10231 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___10231,tc,fc){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___10231,tc,fc){
return (function (state_10209){var state_val_10210 = (state_10209[(1)]);if((state_val_10210 === (7)))
{var inst_10205 = (state_10209[(2)]);var state_10209__$1 = state_10209;var statearr_10211_10232 = state_10209__$1;(statearr_10211_10232[(2)] = inst_10205);
(statearr_10211_10232[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10210 === (1)))
{var state_10209__$1 = state_10209;var statearr_10212_10233 = state_10209__$1;(statearr_10212_10233[(2)] = null);
(statearr_10212_10233[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10210 === (4)))
{var inst_10190 = (state_10209[(7)]);var inst_10190__$1 = (state_10209[(2)]);var inst_10191 = (inst_10190__$1 == null);var state_10209__$1 = (function (){var statearr_10213 = state_10209;(statearr_10213[(7)] = inst_10190__$1);
return statearr_10213;
})();if(cljs.core.truth_(inst_10191))
{var statearr_10214_10234 = state_10209__$1;(statearr_10214_10234[(1)] = (5));
} else
{var statearr_10215_10235 = state_10209__$1;(statearr_10215_10235[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10210 === (6)))
{var inst_10190 = (state_10209[(7)]);var inst_10196 = p.call(null,inst_10190);var state_10209__$1 = state_10209;if(cljs.core.truth_(inst_10196))
{var statearr_10216_10236 = state_10209__$1;(statearr_10216_10236[(1)] = (9));
} else
{var statearr_10217_10237 = state_10209__$1;(statearr_10217_10237[(1)] = (10));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10210 === (3)))
{var inst_10207 = (state_10209[(2)]);var state_10209__$1 = state_10209;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10209__$1,inst_10207);
} else
{if((state_val_10210 === (2)))
{var state_10209__$1 = state_10209;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10209__$1,(4),ch);
} else
{if((state_val_10210 === (11)))
{var inst_10190 = (state_10209[(7)]);var inst_10200 = (state_10209[(2)]);var state_10209__$1 = state_10209;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10209__$1,(8),inst_10200,inst_10190);
} else
{if((state_val_10210 === (9)))
{var state_10209__$1 = state_10209;var statearr_10218_10238 = state_10209__$1;(statearr_10218_10238[(2)] = tc);
(statearr_10218_10238[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10210 === (5)))
{var inst_10193 = cljs.core.async.close_BANG_.call(null,tc);var inst_10194 = cljs.core.async.close_BANG_.call(null,fc);var state_10209__$1 = (function (){var statearr_10219 = state_10209;(statearr_10219[(8)] = inst_10193);
return statearr_10219;
})();var statearr_10220_10239 = state_10209__$1;(statearr_10220_10239[(2)] = inst_10194);
(statearr_10220_10239[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10210 === (10)))
{var state_10209__$1 = state_10209;var statearr_10221_10240 = state_10209__$1;(statearr_10221_10240[(2)] = fc);
(statearr_10221_10240[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10210 === (8)))
{var inst_10202 = (state_10209[(2)]);var state_10209__$1 = (function (){var statearr_10222 = state_10209;(statearr_10222[(9)] = inst_10202);
return statearr_10222;
})();var statearr_10223_10241 = state_10209__$1;(statearr_10223_10241[(2)] = null);
(statearr_10223_10241[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___10231,tc,fc))
;return ((function (switch__7326__auto__,c__7341__auto___10231,tc,fc){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_10227 = [null,null,null,null,null,null,null,null,null,null];(statearr_10227[(0)] = state_machine__7327__auto__);
(statearr_10227[(1)] = (1));
return statearr_10227;
});
var state_machine__7327__auto____1 = (function (state_10209){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_10209);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e10228){if((e10228 instanceof Object))
{var ex__7330__auto__ = e10228;var statearr_10229_10242 = state_10209;(statearr_10229_10242[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10209);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10228;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10243 = state_10209;
state_10209 = G__10243;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_10209){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_10209);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___10231,tc,fc))
})();var state__7343__auto__ = (function (){var statearr_10230 = f__7342__auto__.call(null);(statearr_10230[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___10231);
return statearr_10230;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___10231,tc,fc))
);
return new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [tc,fc], null);
});
split = function(p,ch,t_buf_or_n,f_buf_or_n){
switch(arguments.length){
case 2:
return split__2.call(this,p,ch);
case 4:
return split__4.call(this,p,ch,t_buf_or_n,f_buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
split.cljs$core$IFn$_invoke$arity$2 = split__2;
split.cljs$core$IFn$_invoke$arity$4 = split__4;
return split;
})()
;
/**
* f should be a function of 2 arguments. Returns a channel containing
* the single result of applying f to init and the first item from the
* channel, then applying f to that result and the 2nd item, etc. If
* the channel closes without yielding items, returns init and f is not
* called. ch must close before reduce produces a result.
*/
cljs.core.async.reduce = (function reduce(f,init,ch){var c__7341__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto__){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto__){
return (function (state_10290){var state_val_10291 = (state_10290[(1)]);if((state_val_10291 === (7)))
{var inst_10286 = (state_10290[(2)]);var state_10290__$1 = state_10290;var statearr_10292_10308 = state_10290__$1;(statearr_10292_10308[(2)] = inst_10286);
(statearr_10292_10308[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10291 === (6)))
{var inst_10276 = (state_10290[(7)]);var inst_10279 = (state_10290[(8)]);var inst_10283 = f.call(null,inst_10276,inst_10279);var inst_10276__$1 = inst_10283;var state_10290__$1 = (function (){var statearr_10293 = state_10290;(statearr_10293[(7)] = inst_10276__$1);
return statearr_10293;
})();var statearr_10294_10309 = state_10290__$1;(statearr_10294_10309[(2)] = null);
(statearr_10294_10309[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10291 === (5)))
{var inst_10276 = (state_10290[(7)]);var state_10290__$1 = state_10290;var statearr_10295_10310 = state_10290__$1;(statearr_10295_10310[(2)] = inst_10276);
(statearr_10295_10310[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10291 === (4)))
{var inst_10279 = (state_10290[(8)]);var inst_10279__$1 = (state_10290[(2)]);var inst_10280 = (inst_10279__$1 == null);var state_10290__$1 = (function (){var statearr_10296 = state_10290;(statearr_10296[(8)] = inst_10279__$1);
return statearr_10296;
})();if(cljs.core.truth_(inst_10280))
{var statearr_10297_10311 = state_10290__$1;(statearr_10297_10311[(1)] = (5));
} else
{var statearr_10298_10312 = state_10290__$1;(statearr_10298_10312[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10291 === (3)))
{var inst_10288 = (state_10290[(2)]);var state_10290__$1 = state_10290;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10290__$1,inst_10288);
} else
{if((state_val_10291 === (2)))
{var state_10290__$1 = state_10290;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10290__$1,(4),ch);
} else
{if((state_val_10291 === (1)))
{var inst_10276 = init;var state_10290__$1 = (function (){var statearr_10299 = state_10290;(statearr_10299[(7)] = inst_10276);
return statearr_10299;
})();var statearr_10300_10313 = state_10290__$1;(statearr_10300_10313[(2)] = null);
(statearr_10300_10313[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
});})(c__7341__auto__))
;return ((function (switch__7326__auto__,c__7341__auto__){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_10304 = [null,null,null,null,null,null,null,null,null];(statearr_10304[(0)] = state_machine__7327__auto__);
(statearr_10304[(1)] = (1));
return statearr_10304;
});
var state_machine__7327__auto____1 = (function (state_10290){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_10290);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e10305){if((e10305 instanceof Object))
{var ex__7330__auto__ = e10305;var statearr_10306_10314 = state_10290;(statearr_10306_10314[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10290);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10305;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10315 = state_10290;
state_10290 = G__10315;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_10290){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_10290);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto__))
})();var state__7343__auto__ = (function (){var statearr_10307 = f__7342__auto__.call(null);(statearr_10307[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto__);
return statearr_10307;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto__))
);
return c__7341__auto__;
});
/**
* Puts the contents of coll into the supplied channel.
* 
* By default the channel will be closed after the items are copied,
* but can be determined by the close? parameter.
* 
* Returns a channel which will close after the items are copied.
*/
cljs.core.async.onto_chan = (function() {
var onto_chan = null;
var onto_chan__2 = (function (ch,coll){return onto_chan.call(null,ch,coll,true);
});
var onto_chan__3 = (function (ch,coll,close_QMARK_){var c__7341__auto__ = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto__){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto__){
return (function (state_10377){var state_val_10378 = (state_10377[(1)]);if((state_val_10378 === (7)))
{var inst_10358 = (state_10377[(7)]);var inst_10363 = (state_10377[(2)]);var inst_10364 = cljs.core.next.call(null,inst_10358);var inst_10358__$1 = inst_10364;var state_10377__$1 = (function (){var statearr_10379 = state_10377;(statearr_10379[(8)] = inst_10363);
(statearr_10379[(7)] = inst_10358__$1);
return statearr_10379;
})();var statearr_10380_10398 = state_10377__$1;(statearr_10380_10398[(2)] = null);
(statearr_10380_10398[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10378 === (1)))
{var inst_10357 = cljs.core.seq.call(null,coll);var inst_10358 = inst_10357;var state_10377__$1 = (function (){var statearr_10381 = state_10377;(statearr_10381[(7)] = inst_10358);
return statearr_10381;
})();var statearr_10382_10399 = state_10377__$1;(statearr_10382_10399[(2)] = null);
(statearr_10382_10399[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10378 === (4)))
{var inst_10358 = (state_10377[(7)]);var inst_10361 = cljs.core.first.call(null,inst_10358);var state_10377__$1 = state_10377;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_10377__$1,(7),ch,inst_10361);
} else
{if((state_val_10378 === (6)))
{var inst_10373 = (state_10377[(2)]);var state_10377__$1 = state_10377;var statearr_10383_10400 = state_10377__$1;(statearr_10383_10400[(2)] = inst_10373);
(statearr_10383_10400[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10378 === (3)))
{var inst_10375 = (state_10377[(2)]);var state_10377__$1 = state_10377;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10377__$1,inst_10375);
} else
{if((state_val_10378 === (2)))
{var inst_10358 = (state_10377[(7)]);var state_10377__$1 = state_10377;if(cljs.core.truth_(inst_10358))
{var statearr_10384_10401 = state_10377__$1;(statearr_10384_10401[(1)] = (4));
} else
{var statearr_10385_10402 = state_10377__$1;(statearr_10385_10402[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10378 === (9)))
{var state_10377__$1 = state_10377;var statearr_10386_10403 = state_10377__$1;(statearr_10386_10403[(2)] = null);
(statearr_10386_10403[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10378 === (5)))
{var state_10377__$1 = state_10377;if(cljs.core.truth_(close_QMARK_))
{var statearr_10387_10404 = state_10377__$1;(statearr_10387_10404[(1)] = (8));
} else
{var statearr_10388_10405 = state_10377__$1;(statearr_10388_10405[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10378 === (10)))
{var inst_10371 = (state_10377[(2)]);var state_10377__$1 = state_10377;var statearr_10389_10406 = state_10377__$1;(statearr_10389_10406[(2)] = inst_10371);
(statearr_10389_10406[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10378 === (8)))
{var inst_10368 = cljs.core.async.close_BANG_.call(null,ch);var state_10377__$1 = state_10377;var statearr_10390_10407 = state_10377__$1;(statearr_10390_10407[(2)] = inst_10368);
(statearr_10390_10407[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto__))
;return ((function (switch__7326__auto__,c__7341__auto__){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_10394 = [null,null,null,null,null,null,null,null,null];(statearr_10394[(0)] = state_machine__7327__auto__);
(statearr_10394[(1)] = (1));
return statearr_10394;
});
var state_machine__7327__auto____1 = (function (state_10377){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_10377);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e10395){if((e10395 instanceof Object))
{var ex__7330__auto__ = e10395;var statearr_10396_10408 = state_10377;(statearr_10396_10408[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10377);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10395;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10409 = state_10377;
state_10377 = G__10409;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_10377){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_10377);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto__))
})();var state__7343__auto__ = (function (){var statearr_10397 = f__7342__auto__.call(null);(statearr_10397[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto__);
return statearr_10397;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto__))
);
return c__7341__auto__;
});
onto_chan = function(ch,coll,close_QMARK_){
switch(arguments.length){
case 2:
return onto_chan__2.call(this,ch,coll);
case 3:
return onto_chan__3.call(this,ch,coll,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
onto_chan.cljs$core$IFn$_invoke$arity$2 = onto_chan__2;
onto_chan.cljs$core$IFn$_invoke$arity$3 = onto_chan__3;
return onto_chan;
})()
;
/**
* Creates and returns a channel which contains the contents of coll,
* closing when exhausted.
*/
cljs.core.async.to_chan = (function to_chan(coll){var ch = cljs.core.async.chan.call(null,cljs.core.bounded_count.call(null,(100),coll));cljs.core.async.onto_chan.call(null,ch,coll);
return ch;
});
cljs.core.async.Mux = (function (){var obj10411 = {};return obj10411;
})();
cljs.core.async.muxch_STAR_ = (function muxch_STAR_(_){if((function (){var and__3539__auto__ = _;if(and__3539__auto__)
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return _.cljs$core$async$Mux$muxch_STAR_$arity$1(_);
} else
{var x__4178__auto__ = (((_ == null))?null:_);return (function (){var or__3551__auto__ = (cljs.core.async.muxch_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.muxch_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mux.muxch*",_);
}
}
})().call(null,_);
}
});
cljs.core.async.Mult = (function (){var obj10413 = {};return obj10413;
})();
cljs.core.async.tap_STAR_ = (function tap_STAR_(m,ch,close_QMARK_){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$tap_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$tap_STAR_$arity$3(m,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.tap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.tap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.tap*",m);
}
}
})().call(null,m,ch,close_QMARK_);
}
});
cljs.core.async.untap_STAR_ = (function untap_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.untap_all_STAR_ = (function untap_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mult$untap_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.untap_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.untap_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mult.untap-all*",m);
}
}
})().call(null,m);
}
});
/**
* Creates and returns a mult(iple) of the supplied channel. Channels
* containing copies of the channel can be created with 'tap', and
* detached with 'untap'.
* 
* Each item is distributed to all taps in parallel and synchronously,
* i.e. each tap must accept before the next item is distributed. Use
* buffering/windowing to prevent slow taps from holding up the mult.
* 
* If a tap put throws an exception, it will be removed from the mult.
*/
cljs.core.async.mult = (function mult(ch){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var m = (function (){if(typeof cljs.core.async.t10628 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t10628 = (function (cs,ch,mult,meta10629){
this.cs = cs;
this.ch = ch;
this.mult = mult;
this.meta10629 = meta10629;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t10628.cljs$lang$type = true;
cljs.core.async.t10628.cljs$lang$ctorStr = "cljs.core.async/t10628";
cljs.core.async.t10628.cljs$lang$ctorPrWriter = ((function (cs){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t10628");
});})(cs))
;
cljs.core.async.t10628.prototype.cljs$core$async$Mult$ = true;
cljs.core.async.t10628.prototype.cljs$core$async$Mult$tap_STAR_$arity$3 = ((function (cs){
return (function (_,ch__$2,close_QMARK_){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch__$2,close_QMARK_);
return null;
});})(cs))
;
cljs.core.async.t10628.prototype.cljs$core$async$Mult$untap_STAR_$arity$2 = ((function (cs){
return (function (_,ch__$2){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch__$2);
return null;
});})(cs))
;
cljs.core.async.t10628.prototype.cljs$core$async$Mult$untap_all_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return null;
});})(cs))
;
cljs.core.async.t10628.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t10628.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(cs))
;
cljs.core.async.t10628.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs){
return (function (_10630){var self__ = this;
var _10630__$1 = this;return self__.meta10629;
});})(cs))
;
cljs.core.async.t10628.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs){
return (function (_10630,meta10629__$1){var self__ = this;
var _10630__$1 = this;return (new cljs.core.async.t10628(self__.cs,self__.ch,self__.mult,meta10629__$1));
});})(cs))
;
cljs.core.async.__GT_t10628 = ((function (cs){
return (function __GT_t10628(cs__$1,ch__$1,mult__$1,meta10629){return (new cljs.core.async.t10628(cs__$1,ch__$1,mult__$1,meta10629));
});})(cs))
;
}
return (new cljs.core.async.t10628(cs,ch,mult,null));
})();var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = ((function (cs,m,dchan,dctr){
return (function (){if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,true);
} else
{return null;
}
});})(cs,m,dchan,dctr))
;var c__7341__auto___10842 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___10842,cs,m,dchan,dctr,done){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___10842,cs,m,dchan,dctr,done){
return (function (state_10760){var state_val_10761 = (state_10760[(1)]);if((state_val_10761 === (7)))
{var inst_10756 = (state_10760[(2)]);var state_10760__$1 = state_10760;var statearr_10762_10843 = state_10760__$1;(statearr_10762_10843[(2)] = inst_10756);
(statearr_10762_10843[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (20)))
{var inst_10662 = (state_10760[(7)]);var inst_10672 = cljs.core.first.call(null,inst_10662);var inst_10673 = cljs.core.nth.call(null,inst_10672,(0),null);var inst_10674 = cljs.core.nth.call(null,inst_10672,(1),null);var state_10760__$1 = (function (){var statearr_10763 = state_10760;(statearr_10763[(8)] = inst_10673);
return statearr_10763;
})();if(cljs.core.truth_(inst_10674))
{var statearr_10764_10844 = state_10760__$1;(statearr_10764_10844[(1)] = (22));
} else
{var statearr_10765_10845 = state_10760__$1;(statearr_10765_10845[(1)] = (23));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (27)))
{var inst_10704 = (state_10760[(9)]);var inst_10702 = (state_10760[(10)]);var inst_10709 = cljs.core._nth.call(null,inst_10702,inst_10704);var state_10760__$1 = (function (){var statearr_10766 = state_10760;(statearr_10766[(11)] = inst_10709);
return statearr_10766;
})();var statearr_10767_10846 = state_10760__$1;(statearr_10767_10846[(2)] = null);
(statearr_10767_10846[(1)] = (32));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (1)))
{var state_10760__$1 = state_10760;var statearr_10768_10847 = state_10760__$1;(statearr_10768_10847[(2)] = null);
(statearr_10768_10847[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (24)))
{var inst_10662 = (state_10760[(7)]);var inst_10679 = (state_10760[(2)]);var inst_10680 = cljs.core.next.call(null,inst_10662);var inst_10642 = inst_10680;var inst_10643 = null;var inst_10644 = (0);var inst_10645 = (0);var state_10760__$1 = (function (){var statearr_10769 = state_10760;(statearr_10769[(12)] = inst_10679);
(statearr_10769[(13)] = inst_10643);
(statearr_10769[(14)] = inst_10645);
(statearr_10769[(15)] = inst_10644);
(statearr_10769[(16)] = inst_10642);
return statearr_10769;
})();var statearr_10770_10848 = state_10760__$1;(statearr_10770_10848[(2)] = null);
(statearr_10770_10848[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (39)))
{var inst_10722 = (state_10760[(17)]);var inst_10740 = (state_10760[(2)]);var inst_10741 = cljs.core.next.call(null,inst_10722);var inst_10701 = inst_10741;var inst_10702 = null;var inst_10703 = (0);var inst_10704 = (0);var state_10760__$1 = (function (){var statearr_10774 = state_10760;(statearr_10774[(18)] = inst_10701);
(statearr_10774[(19)] = inst_10740);
(statearr_10774[(20)] = inst_10703);
(statearr_10774[(9)] = inst_10704);
(statearr_10774[(10)] = inst_10702);
return statearr_10774;
})();var statearr_10775_10849 = state_10760__$1;(statearr_10775_10849[(2)] = null);
(statearr_10775_10849[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (4)))
{var inst_10633 = (state_10760[(21)]);var inst_10633__$1 = (state_10760[(2)]);var inst_10634 = (inst_10633__$1 == null);var state_10760__$1 = (function (){var statearr_10776 = state_10760;(statearr_10776[(21)] = inst_10633__$1);
return statearr_10776;
})();if(cljs.core.truth_(inst_10634))
{var statearr_10777_10850 = state_10760__$1;(statearr_10777_10850[(1)] = (5));
} else
{var statearr_10778_10851 = state_10760__$1;(statearr_10778_10851[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (15)))
{var inst_10643 = (state_10760[(13)]);var inst_10645 = (state_10760[(14)]);var inst_10644 = (state_10760[(15)]);var inst_10642 = (state_10760[(16)]);var inst_10658 = (state_10760[(2)]);var inst_10659 = (inst_10645 + (1));var tmp10771 = inst_10643;var tmp10772 = inst_10644;var tmp10773 = inst_10642;var inst_10642__$1 = tmp10773;var inst_10643__$1 = tmp10771;var inst_10644__$1 = tmp10772;var inst_10645__$1 = inst_10659;var state_10760__$1 = (function (){var statearr_10779 = state_10760;(statearr_10779[(13)] = inst_10643__$1);
(statearr_10779[(14)] = inst_10645__$1);
(statearr_10779[(15)] = inst_10644__$1);
(statearr_10779[(16)] = inst_10642__$1);
(statearr_10779[(22)] = inst_10658);
return statearr_10779;
})();var statearr_10780_10852 = state_10760__$1;(statearr_10780_10852[(2)] = null);
(statearr_10780_10852[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (21)))
{var inst_10683 = (state_10760[(2)]);var state_10760__$1 = state_10760;var statearr_10781_10853 = state_10760__$1;(statearr_10781_10853[(2)] = inst_10683);
(statearr_10781_10853[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (31)))
{var inst_10709 = (state_10760[(11)]);var inst_10710 = (state_10760[(2)]);var inst_10711 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10712 = cljs.core.async.untap_STAR_.call(null,m,inst_10709);var state_10760__$1 = (function (){var statearr_10782 = state_10760;(statearr_10782[(23)] = inst_10710);
(statearr_10782[(24)] = inst_10711);
return statearr_10782;
})();var statearr_10783_10854 = state_10760__$1;(statearr_10783_10854[(2)] = inst_10712);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10760__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (32)))
{var inst_10709 = (state_10760[(11)]);var inst_10633 = (state_10760[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10760,(31),Object,null,(30));var inst_10716 = cljs.core.async.put_BANG_.call(null,inst_10709,inst_10633,done);var state_10760__$1 = state_10760;var statearr_10784_10855 = state_10760__$1;(statearr_10784_10855[(2)] = inst_10716);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10760__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (40)))
{var inst_10731 = (state_10760[(25)]);var inst_10732 = (state_10760[(2)]);var inst_10733 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var inst_10734 = cljs.core.async.untap_STAR_.call(null,m,inst_10731);var state_10760__$1 = (function (){var statearr_10785 = state_10760;(statearr_10785[(26)] = inst_10733);
(statearr_10785[(27)] = inst_10732);
return statearr_10785;
})();var statearr_10786_10856 = state_10760__$1;(statearr_10786_10856[(2)] = inst_10734);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10760__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (33)))
{var inst_10722 = (state_10760[(17)]);var inst_10724 = cljs.core.chunked_seq_QMARK_.call(null,inst_10722);var state_10760__$1 = state_10760;if(inst_10724)
{var statearr_10787_10857 = state_10760__$1;(statearr_10787_10857[(1)] = (36));
} else
{var statearr_10788_10858 = state_10760__$1;(statearr_10788_10858[(1)] = (37));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (13)))
{var inst_10652 = (state_10760[(28)]);var inst_10655 = cljs.core.async.close_BANG_.call(null,inst_10652);var state_10760__$1 = state_10760;var statearr_10789_10859 = state_10760__$1;(statearr_10789_10859[(2)] = inst_10655);
(statearr_10789_10859[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (22)))
{var inst_10673 = (state_10760[(8)]);var inst_10676 = cljs.core.async.close_BANG_.call(null,inst_10673);var state_10760__$1 = state_10760;var statearr_10790_10860 = state_10760__$1;(statearr_10790_10860[(2)] = inst_10676);
(statearr_10790_10860[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (36)))
{var inst_10722 = (state_10760[(17)]);var inst_10726 = cljs.core.chunk_first.call(null,inst_10722);var inst_10727 = cljs.core.chunk_rest.call(null,inst_10722);var inst_10728 = cljs.core.count.call(null,inst_10726);var inst_10701 = inst_10727;var inst_10702 = inst_10726;var inst_10703 = inst_10728;var inst_10704 = (0);var state_10760__$1 = (function (){var statearr_10791 = state_10760;(statearr_10791[(18)] = inst_10701);
(statearr_10791[(20)] = inst_10703);
(statearr_10791[(9)] = inst_10704);
(statearr_10791[(10)] = inst_10702);
return statearr_10791;
})();var statearr_10792_10861 = state_10760__$1;(statearr_10792_10861[(2)] = null);
(statearr_10792_10861[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (41)))
{var inst_10731 = (state_10760[(25)]);var inst_10633 = (state_10760[(21)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_10760,(40),Object,null,(39));var inst_10738 = cljs.core.async.put_BANG_.call(null,inst_10731,inst_10633,done);var state_10760__$1 = state_10760;var statearr_10793_10862 = state_10760__$1;(statearr_10793_10862[(2)] = inst_10738);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10760__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (29)))
{var inst_10749 = (state_10760[(2)]);var state_10760__$1 = state_10760;var statearr_10794_10863 = state_10760__$1;(statearr_10794_10863[(2)] = inst_10749);
(statearr_10794_10863[(1)] = (26));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (6)))
{var inst_10692 = cljs.core.deref.call(null,cs);var inst_10693 = cljs.core.keys.call(null,inst_10692);var inst_10694 = cljs.core.count.call(null,inst_10693);var inst_10695 = cljs.core.reset_BANG_.call(null,dctr,inst_10694);var inst_10700 = cljs.core.seq.call(null,inst_10693);var inst_10701 = inst_10700;var inst_10702 = null;var inst_10703 = (0);var inst_10704 = (0);var state_10760__$1 = (function (){var statearr_10795 = state_10760;(statearr_10795[(18)] = inst_10701);
(statearr_10795[(20)] = inst_10703);
(statearr_10795[(9)] = inst_10704);
(statearr_10795[(29)] = inst_10695);
(statearr_10795[(10)] = inst_10702);
return statearr_10795;
})();var statearr_10796_10864 = state_10760__$1;(statearr_10796_10864[(2)] = null);
(statearr_10796_10864[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (28)))
{var inst_10701 = (state_10760[(18)]);var inst_10722 = (state_10760[(17)]);var inst_10722__$1 = cljs.core.seq.call(null,inst_10701);var state_10760__$1 = (function (){var statearr_10797 = state_10760;(statearr_10797[(17)] = inst_10722__$1);
return statearr_10797;
})();if(inst_10722__$1)
{var statearr_10798_10865 = state_10760__$1;(statearr_10798_10865[(1)] = (33));
} else
{var statearr_10799_10866 = state_10760__$1;(statearr_10799_10866[(1)] = (34));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (25)))
{var inst_10703 = (state_10760[(20)]);var inst_10704 = (state_10760[(9)]);var inst_10706 = (inst_10704 < inst_10703);var inst_10707 = inst_10706;var state_10760__$1 = state_10760;if(cljs.core.truth_(inst_10707))
{var statearr_10800_10867 = state_10760__$1;(statearr_10800_10867[(1)] = (27));
} else
{var statearr_10801_10868 = state_10760__$1;(statearr_10801_10868[(1)] = (28));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (34)))
{var state_10760__$1 = state_10760;var statearr_10802_10869 = state_10760__$1;(statearr_10802_10869[(2)] = null);
(statearr_10802_10869[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (17)))
{var state_10760__$1 = state_10760;var statearr_10803_10870 = state_10760__$1;(statearr_10803_10870[(2)] = null);
(statearr_10803_10870[(1)] = (18));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (3)))
{var inst_10758 = (state_10760[(2)]);var state_10760__$1 = state_10760;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_10760__$1,inst_10758);
} else
{if((state_val_10761 === (12)))
{var inst_10688 = (state_10760[(2)]);var state_10760__$1 = state_10760;var statearr_10804_10871 = state_10760__$1;(statearr_10804_10871[(2)] = inst_10688);
(statearr_10804_10871[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (2)))
{var state_10760__$1 = state_10760;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10760__$1,(4),ch);
} else
{if((state_val_10761 === (23)))
{var state_10760__$1 = state_10760;var statearr_10805_10872 = state_10760__$1;(statearr_10805_10872[(2)] = null);
(statearr_10805_10872[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (35)))
{var inst_10747 = (state_10760[(2)]);var state_10760__$1 = state_10760;var statearr_10806_10873 = state_10760__$1;(statearr_10806_10873[(2)] = inst_10747);
(statearr_10806_10873[(1)] = (29));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (19)))
{var inst_10662 = (state_10760[(7)]);var inst_10666 = cljs.core.chunk_first.call(null,inst_10662);var inst_10667 = cljs.core.chunk_rest.call(null,inst_10662);var inst_10668 = cljs.core.count.call(null,inst_10666);var inst_10642 = inst_10667;var inst_10643 = inst_10666;var inst_10644 = inst_10668;var inst_10645 = (0);var state_10760__$1 = (function (){var statearr_10807 = state_10760;(statearr_10807[(13)] = inst_10643);
(statearr_10807[(14)] = inst_10645);
(statearr_10807[(15)] = inst_10644);
(statearr_10807[(16)] = inst_10642);
return statearr_10807;
})();var statearr_10808_10874 = state_10760__$1;(statearr_10808_10874[(2)] = null);
(statearr_10808_10874[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (11)))
{var inst_10662 = (state_10760[(7)]);var inst_10642 = (state_10760[(16)]);var inst_10662__$1 = cljs.core.seq.call(null,inst_10642);var state_10760__$1 = (function (){var statearr_10809 = state_10760;(statearr_10809[(7)] = inst_10662__$1);
return statearr_10809;
})();if(inst_10662__$1)
{var statearr_10810_10875 = state_10760__$1;(statearr_10810_10875[(1)] = (16));
} else
{var statearr_10811_10876 = state_10760__$1;(statearr_10811_10876[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (9)))
{var inst_10690 = (state_10760[(2)]);var state_10760__$1 = state_10760;var statearr_10812_10877 = state_10760__$1;(statearr_10812_10877[(2)] = inst_10690);
(statearr_10812_10877[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (5)))
{var inst_10640 = cljs.core.deref.call(null,cs);var inst_10641 = cljs.core.seq.call(null,inst_10640);var inst_10642 = inst_10641;var inst_10643 = null;var inst_10644 = (0);var inst_10645 = (0);var state_10760__$1 = (function (){var statearr_10813 = state_10760;(statearr_10813[(13)] = inst_10643);
(statearr_10813[(14)] = inst_10645);
(statearr_10813[(15)] = inst_10644);
(statearr_10813[(16)] = inst_10642);
return statearr_10813;
})();var statearr_10814_10878 = state_10760__$1;(statearr_10814_10878[(2)] = null);
(statearr_10814_10878[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (14)))
{var state_10760__$1 = state_10760;var statearr_10815_10879 = state_10760__$1;(statearr_10815_10879[(2)] = null);
(statearr_10815_10879[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (26)))
{var inst_10751 = (state_10760[(2)]);var state_10760__$1 = (function (){var statearr_10816 = state_10760;(statearr_10816[(30)] = inst_10751);
return statearr_10816;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_10760__$1,(42),dchan);
} else
{if((state_val_10761 === (16)))
{var inst_10662 = (state_10760[(7)]);var inst_10664 = cljs.core.chunked_seq_QMARK_.call(null,inst_10662);var state_10760__$1 = state_10760;if(inst_10664)
{var statearr_10820_10880 = state_10760__$1;(statearr_10820_10880[(1)] = (19));
} else
{var statearr_10821_10881 = state_10760__$1;(statearr_10821_10881[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (38)))
{var inst_10744 = (state_10760[(2)]);var state_10760__$1 = state_10760;var statearr_10822_10882 = state_10760__$1;(statearr_10822_10882[(2)] = inst_10744);
(statearr_10822_10882[(1)] = (35));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (30)))
{var inst_10701 = (state_10760[(18)]);var inst_10703 = (state_10760[(20)]);var inst_10704 = (state_10760[(9)]);var inst_10702 = (state_10760[(10)]);var inst_10718 = (state_10760[(2)]);var inst_10719 = (inst_10704 + (1));var tmp10817 = inst_10701;var tmp10818 = inst_10703;var tmp10819 = inst_10702;var inst_10701__$1 = tmp10817;var inst_10702__$1 = tmp10819;var inst_10703__$1 = tmp10818;var inst_10704__$1 = inst_10719;var state_10760__$1 = (function (){var statearr_10823 = state_10760;(statearr_10823[(18)] = inst_10701__$1);
(statearr_10823[(31)] = inst_10718);
(statearr_10823[(20)] = inst_10703__$1);
(statearr_10823[(9)] = inst_10704__$1);
(statearr_10823[(10)] = inst_10702__$1);
return statearr_10823;
})();var statearr_10824_10883 = state_10760__$1;(statearr_10824_10883[(2)] = null);
(statearr_10824_10883[(1)] = (25));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (10)))
{var inst_10643 = (state_10760[(13)]);var inst_10645 = (state_10760[(14)]);var inst_10651 = cljs.core._nth.call(null,inst_10643,inst_10645);var inst_10652 = cljs.core.nth.call(null,inst_10651,(0),null);var inst_10653 = cljs.core.nth.call(null,inst_10651,(1),null);var state_10760__$1 = (function (){var statearr_10825 = state_10760;(statearr_10825[(28)] = inst_10652);
return statearr_10825;
})();if(cljs.core.truth_(inst_10653))
{var statearr_10826_10884 = state_10760__$1;(statearr_10826_10884[(1)] = (13));
} else
{var statearr_10827_10885 = state_10760__$1;(statearr_10827_10885[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (18)))
{var inst_10686 = (state_10760[(2)]);var state_10760__$1 = state_10760;var statearr_10828_10886 = state_10760__$1;(statearr_10828_10886[(2)] = inst_10686);
(statearr_10828_10886[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (42)))
{var inst_10753 = (state_10760[(2)]);var state_10760__$1 = (function (){var statearr_10829 = state_10760;(statearr_10829[(32)] = inst_10753);
return statearr_10829;
})();var statearr_10830_10887 = state_10760__$1;(statearr_10830_10887[(2)] = null);
(statearr_10830_10887[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (37)))
{var inst_10722 = (state_10760[(17)]);var inst_10731 = cljs.core.first.call(null,inst_10722);var state_10760__$1 = (function (){var statearr_10831 = state_10760;(statearr_10831[(25)] = inst_10731);
return statearr_10831;
})();var statearr_10832_10888 = state_10760__$1;(statearr_10832_10888[(2)] = null);
(statearr_10832_10888[(1)] = (41));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_10761 === (8)))
{var inst_10645 = (state_10760[(14)]);var inst_10644 = (state_10760[(15)]);var inst_10647 = (inst_10645 < inst_10644);var inst_10648 = inst_10647;var state_10760__$1 = state_10760;if(cljs.core.truth_(inst_10648))
{var statearr_10833_10889 = state_10760__$1;(statearr_10833_10889[(1)] = (10));
} else
{var statearr_10834_10890 = state_10760__$1;(statearr_10834_10890[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___10842,cs,m,dchan,dctr,done))
;return ((function (switch__7326__auto__,c__7341__auto___10842,cs,m,dchan,dctr,done){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_10838 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_10838[(0)] = state_machine__7327__auto__);
(statearr_10838[(1)] = (1));
return statearr_10838;
});
var state_machine__7327__auto____1 = (function (state_10760){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_10760);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e10839){if((e10839 instanceof Object))
{var ex__7330__auto__ = e10839;var statearr_10840_10891 = state_10760;(statearr_10840_10891[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_10760);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e10839;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__10892 = state_10760;
state_10760 = G__10892;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_10760){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_10760);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___10842,cs,m,dchan,dctr,done))
})();var state__7343__auto__ = (function (){var statearr_10841 = f__7342__auto__.call(null);(statearr_10841[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___10842);
return statearr_10841;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___10842,cs,m,dchan,dctr,done))
);
return m;
});
/**
* Copies the mult source onto the supplied channel.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.tap = (function() {
var tap = null;
var tap__2 = (function (mult,ch){return tap.call(null,mult,ch,true);
});
var tap__3 = (function (mult,ch,close_QMARK_){cljs.core.async.tap_STAR_.call(null,mult,ch,close_QMARK_);
return ch;
});
tap = function(mult,ch,close_QMARK_){
switch(arguments.length){
case 2:
return tap__2.call(this,mult,ch);
case 3:
return tap__3.call(this,mult,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
tap.cljs$core$IFn$_invoke$arity$2 = tap__2;
tap.cljs$core$IFn$_invoke$arity$3 = tap__3;
return tap;
})()
;
/**
* Disconnects a target channel from a mult
*/
cljs.core.async.untap = (function untap(mult,ch){return cljs.core.async.untap_STAR_.call(null,mult,ch);
});
/**
* Disconnects all target channels from a mult
*/
cljs.core.async.untap_all = (function untap_all(mult){return cljs.core.async.untap_all_STAR_.call(null,mult);
});
cljs.core.async.Mix = (function (){var obj10894 = {};return obj10894;
})();
cljs.core.async.admix_STAR_ = (function admix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$admix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$admix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.admix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.admix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.admix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_STAR_ = (function unmix_STAR_(m,ch){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_STAR_$arity$2(m,ch);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix*",m);
}
}
})().call(null,m,ch);
}
});
cljs.core.async.unmix_all_STAR_ = (function unmix_all_STAR_(m){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$unmix_all_STAR_$arity$1(m);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.unmix_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unmix_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.unmix-all*",m);
}
}
})().call(null,m);
}
});
cljs.core.async.toggle_STAR_ = (function toggle_STAR_(m,state_map){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$toggle_STAR_$arity$2(m,state_map);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.toggle_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.toggle_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.toggle*",m);
}
}
})().call(null,m,state_map);
}
});
cljs.core.async.solo_mode_STAR_ = (function solo_mode_STAR_(m,mode){if((function (){var and__3539__auto__ = m;if(and__3539__auto__)
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return m.cljs$core$async$Mix$solo_mode_STAR_$arity$2(m,mode);
} else
{var x__4178__auto__ = (((m == null))?null:m);return (function (){var or__3551__auto__ = (cljs.core.async.solo_mode_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.solo_mode_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Mix.solo-mode*",m);
}
}
})().call(null,m,mode);
}
});
/**
* Creates and returns a mix of one or more input channels which will
* be put on the supplied out channel. Input sources can be added to
* the mix with 'admix', and removed with 'unmix'. A mix supports
* soloing, muting and pausing multiple inputs atomically using
* 'toggle', and can solo using either muting or pausing as determined
* by 'solo-mode'.
* 
* Each channel can have zero or more boolean modes set via 'toggle':
* 
* :solo - when true, only this (ond other soloed) channel(s) will appear
* in the mix output channel. :mute and :pause states of soloed
* channels are ignored. If solo-mode is :mute, non-soloed
* channels are muted, if :pause, non-soloed channels are
* paused.
* 
* :mute - muted channels will have their contents consumed but not included in the mix
* :pause - paused channels will not have their contents consumed (and thus also not included in the mix)
*/
cljs.core.async.mix = (function mix(out){var cs = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var solo_modes = new cljs.core.PersistentHashSet(null, new cljs.core.PersistentArrayMap(null, 2, [new cljs.core.Keyword(null,"pause","pause",-2095325672),null,new cljs.core.Keyword(null,"mute","mute",1151223646),null], null), null);var attrs = cljs.core.conj.call(null,solo_modes,new cljs.core.Keyword(null,"solo","solo",-316350075));var solo_mode = cljs.core.atom.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646));var change = cljs.core.async.chan.call(null);var changed = ((function (cs,solo_modes,attrs,solo_mode,change){
return (function (){return cljs.core.async.put_BANG_.call(null,change,true);
});})(cs,solo_modes,attrs,solo_mode,change))
;var pick = ((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (attr,chs){return cljs.core.reduce_kv.call(null,((function (cs,solo_modes,attrs,solo_mode,change,changed){
return (function (ret,c,v){if(cljs.core.truth_(attr.call(null,v)))
{return cljs.core.conj.call(null,ret,c);
} else
{return ret;
}
});})(cs,solo_modes,attrs,solo_mode,change,changed))
,cljs.core.PersistentHashSet.EMPTY,chs);
});})(cs,solo_modes,attrs,solo_mode,change,changed))
;var calc_state = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick){
return (function (){var chs = cljs.core.deref.call(null,cs);var mode = cljs.core.deref.call(null,solo_mode);var solos = pick.call(null,new cljs.core.Keyword(null,"solo","solo",-316350075),chs);var pauses = pick.call(null,new cljs.core.Keyword(null,"pause","pause",-2095325672),chs);return new cljs.core.PersistentArrayMap(null, 3, [new cljs.core.Keyword(null,"solos","solos",1441458643),solos,new cljs.core.Keyword(null,"mutes","mutes",1068806309),pick.call(null,new cljs.core.Keyword(null,"mute","mute",1151223646),chs),new cljs.core.Keyword(null,"reads","reads",-1215067361),cljs.core.conj.call(null,(((cljs.core._EQ_.call(null,mode,new cljs.core.Keyword(null,"pause","pause",-2095325672))) && (!(cljs.core.empty_QMARK_.call(null,solos))))?cljs.core.vec.call(null,solos):cljs.core.vec.call(null,cljs.core.remove.call(null,pauses,cljs.core.keys.call(null,chs)))),change)], null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick))
;var m = (function (){if(typeof cljs.core.async.t11004 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11004 = (function (change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,meta11005){
this.change = change;
this.mix = mix;
this.solo_mode = solo_mode;
this.pick = pick;
this.cs = cs;
this.calc_state = calc_state;
this.out = out;
this.changed = changed;
this.solo_modes = solo_modes;
this.attrs = attrs;
this.meta11005 = meta11005;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11004.cljs$lang$type = true;
cljs.core.async.t11004.cljs$lang$ctorStr = "cljs.core.async/t11004";
cljs.core.async.t11004.cljs$lang$ctorPrWriter = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11004");
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11004.prototype.cljs$core$async$Mix$ = true;
cljs.core.async.t11004.prototype.cljs$core$async$Mix$admix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.assoc,ch,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11004.prototype.cljs$core$async$Mix$unmix_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,ch){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.dissoc,ch);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11004.prototype.cljs$core$async$Mix$unmix_all_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;cljs.core.reset_BANG_.call(null,self__.cs,cljs.core.PersistentArrayMap.EMPTY);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11004.prototype.cljs$core$async$Mix$toggle_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,state_map){var self__ = this;
var ___$1 = this;cljs.core.swap_BANG_.call(null,self__.cs,cljs.core.partial.call(null,cljs.core.merge_with,cljs.core.merge),state_map);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11004.prototype.cljs$core$async$Mix$solo_mode_STAR_$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_,mode){var self__ = this;
var ___$1 = this;if(cljs.core.truth_(self__.solo_modes.call(null,mode)))
{} else
{throw (new Error(("Assert failed: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(("mode must be one of: "+cljs.core.str.cljs$core$IFn$_invoke$arity$1(self__.solo_modes)))+"\n"+cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.pr_str.call(null,cljs.core.list(new cljs.core.Symbol(null,"solo-modes","solo-modes",882180540,null),new cljs.core.Symbol(null,"mode","mode",-2000032078,null)))))));
}
cljs.core.reset_BANG_.call(null,self__.solo_mode,mode);
return self__.changed.call(null);
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11004.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11004.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_){var self__ = this;
var ___$1 = this;return self__.out;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11004.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11006){var self__ = this;
var _11006__$1 = this;return self__.meta11005;
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.t11004.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function (_11006,meta11005__$1){var self__ = this;
var _11006__$1 = this;return (new cljs.core.async.t11004(self__.change,self__.mix,self__.solo_mode,self__.pick,self__.cs,self__.calc_state,self__.out,self__.changed,self__.solo_modes,self__.attrs,meta11005__$1));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
cljs.core.async.__GT_t11004 = ((function (cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state){
return (function __GT_t11004(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11005){return (new cljs.core.async.t11004(change__$1,mix__$1,solo_mode__$1,pick__$1,cs__$1,calc_state__$1,out__$1,changed__$1,solo_modes__$1,attrs__$1,meta11005));
});})(cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state))
;
}
return (new cljs.core.async.t11004(change,mix,solo_mode,pick,cs,calc_state,out,changed,solo_modes,attrs,null));
})();var c__7341__auto___11113 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___11113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___11113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function (state_11071){var state_val_11072 = (state_11071[(1)]);if((state_val_11072 === (7)))
{var inst_11020 = (state_11071[(7)]);var inst_11025 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11020);var state_11071__$1 = state_11071;var statearr_11073_11114 = state_11071__$1;(statearr_11073_11114[(2)] = inst_11025);
(statearr_11073_11114[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (20)))
{var inst_11035 = (state_11071[(8)]);var state_11071__$1 = state_11071;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11071__$1,(23),out,inst_11035);
} else
{if((state_val_11072 === (1)))
{var inst_11010 = (state_11071[(9)]);var inst_11010__$1 = calc_state.call(null);var inst_11011 = cljs.core.seq_QMARK_.call(null,inst_11010__$1);var state_11071__$1 = (function (){var statearr_11074 = state_11071;(statearr_11074[(9)] = inst_11010__$1);
return statearr_11074;
})();if(inst_11011)
{var statearr_11075_11115 = state_11071__$1;(statearr_11075_11115[(1)] = (2));
} else
{var statearr_11076_11116 = state_11071__$1;(statearr_11076_11116[(1)] = (3));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (4)))
{var inst_11010 = (state_11071[(9)]);var inst_11016 = (state_11071[(2)]);var inst_11017 = cljs.core.get.call(null,inst_11016,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11018 = cljs.core.get.call(null,inst_11016,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11019 = cljs.core.get.call(null,inst_11016,new cljs.core.Keyword(null,"solos","solos",1441458643));var inst_11020 = inst_11010;var state_11071__$1 = (function (){var statearr_11077 = state_11071;(statearr_11077[(10)] = inst_11019);
(statearr_11077[(11)] = inst_11018);
(statearr_11077[(7)] = inst_11020);
(statearr_11077[(12)] = inst_11017);
return statearr_11077;
})();var statearr_11078_11117 = state_11071__$1;(statearr_11078_11117[(2)] = null);
(statearr_11078_11117[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (15)))
{var state_11071__$1 = state_11071;var statearr_11079_11118 = state_11071__$1;(statearr_11079_11118[(2)] = null);
(statearr_11079_11118[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (21)))
{var state_11071__$1 = state_11071;var statearr_11080_11119 = state_11071__$1;(statearr_11080_11119[(2)] = null);
(statearr_11080_11119[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (13)))
{var inst_11067 = (state_11071[(2)]);var state_11071__$1 = state_11071;var statearr_11081_11120 = state_11071__$1;(statearr_11081_11120[(2)] = inst_11067);
(statearr_11081_11120[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (22)))
{var inst_11028 = (state_11071[(13)]);var inst_11064 = (state_11071[(2)]);var inst_11020 = inst_11028;var state_11071__$1 = (function (){var statearr_11082 = state_11071;(statearr_11082[(7)] = inst_11020);
(statearr_11082[(14)] = inst_11064);
return statearr_11082;
})();var statearr_11083_11121 = state_11071__$1;(statearr_11083_11121[(2)] = null);
(statearr_11083_11121[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (6)))
{var inst_11069 = (state_11071[(2)]);var state_11071__$1 = state_11071;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11071__$1,inst_11069);
} else
{if((state_val_11072 === (17)))
{var inst_11050 = (state_11071[(15)]);var state_11071__$1 = state_11071;var statearr_11084_11122 = state_11071__$1;(statearr_11084_11122[(2)] = inst_11050);
(statearr_11084_11122[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (3)))
{var inst_11010 = (state_11071[(9)]);var state_11071__$1 = state_11071;var statearr_11085_11123 = state_11071__$1;(statearr_11085_11123[(2)] = inst_11010);
(statearr_11085_11123[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (12)))
{var inst_11031 = (state_11071[(16)]);var inst_11036 = (state_11071[(17)]);var inst_11050 = (state_11071[(15)]);var inst_11050__$1 = inst_11031.call(null,inst_11036);var state_11071__$1 = (function (){var statearr_11086 = state_11071;(statearr_11086[(15)] = inst_11050__$1);
return statearr_11086;
})();if(cljs.core.truth_(inst_11050__$1))
{var statearr_11087_11124 = state_11071__$1;(statearr_11087_11124[(1)] = (17));
} else
{var statearr_11088_11125 = state_11071__$1;(statearr_11088_11125[(1)] = (18));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (2)))
{var inst_11010 = (state_11071[(9)]);var inst_11013 = cljs.core.apply.call(null,cljs.core.hash_map,inst_11010);var state_11071__$1 = state_11071;var statearr_11089_11126 = state_11071__$1;(statearr_11089_11126[(2)] = inst_11013);
(statearr_11089_11126[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (23)))
{var inst_11061 = (state_11071[(2)]);var state_11071__$1 = state_11071;var statearr_11090_11127 = state_11071__$1;(statearr_11090_11127[(2)] = inst_11061);
(statearr_11090_11127[(1)] = (22));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (19)))
{var inst_11058 = (state_11071[(2)]);var state_11071__$1 = state_11071;if(cljs.core.truth_(inst_11058))
{var statearr_11091_11128 = state_11071__$1;(statearr_11091_11128[(1)] = (20));
} else
{var statearr_11092_11129 = state_11071__$1;(statearr_11092_11129[(1)] = (21));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (11)))
{var inst_11035 = (state_11071[(8)]);var inst_11041 = (inst_11035 == null);var state_11071__$1 = state_11071;if(cljs.core.truth_(inst_11041))
{var statearr_11093_11130 = state_11071__$1;(statearr_11093_11130[(1)] = (14));
} else
{var statearr_11094_11131 = state_11071__$1;(statearr_11094_11131[(1)] = (15));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (9)))
{var inst_11028 = (state_11071[(13)]);var inst_11028__$1 = (state_11071[(2)]);var inst_11029 = cljs.core.get.call(null,inst_11028__$1,new cljs.core.Keyword(null,"reads","reads",-1215067361));var inst_11030 = cljs.core.get.call(null,inst_11028__$1,new cljs.core.Keyword(null,"mutes","mutes",1068806309));var inst_11031 = cljs.core.get.call(null,inst_11028__$1,new cljs.core.Keyword(null,"solos","solos",1441458643));var state_11071__$1 = (function (){var statearr_11095 = state_11071;(statearr_11095[(16)] = inst_11031);
(statearr_11095[(18)] = inst_11030);
(statearr_11095[(13)] = inst_11028__$1);
return statearr_11095;
})();return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11071__$1,(10),inst_11029);
} else
{if((state_val_11072 === (5)))
{var inst_11020 = (state_11071[(7)]);var inst_11023 = cljs.core.seq_QMARK_.call(null,inst_11020);var state_11071__$1 = state_11071;if(inst_11023)
{var statearr_11096_11132 = state_11071__$1;(statearr_11096_11132[(1)] = (7));
} else
{var statearr_11097_11133 = state_11071__$1;(statearr_11097_11133[(1)] = (8));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (14)))
{var inst_11036 = (state_11071[(17)]);var inst_11043 = cljs.core.swap_BANG_.call(null,cs,cljs.core.dissoc,inst_11036);var state_11071__$1 = state_11071;var statearr_11098_11134 = state_11071__$1;(statearr_11098_11134[(2)] = inst_11043);
(statearr_11098_11134[(1)] = (16));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (16)))
{var inst_11046 = (state_11071[(2)]);var inst_11047 = calc_state.call(null);var inst_11020 = inst_11047;var state_11071__$1 = (function (){var statearr_11099 = state_11071;(statearr_11099[(7)] = inst_11020);
(statearr_11099[(19)] = inst_11046);
return statearr_11099;
})();var statearr_11100_11135 = state_11071__$1;(statearr_11100_11135[(2)] = null);
(statearr_11100_11135[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (10)))
{var inst_11035 = (state_11071[(8)]);var inst_11036 = (state_11071[(17)]);var inst_11034 = (state_11071[(2)]);var inst_11035__$1 = cljs.core.nth.call(null,inst_11034,(0),null);var inst_11036__$1 = cljs.core.nth.call(null,inst_11034,(1),null);var inst_11037 = (inst_11035__$1 == null);var inst_11038 = cljs.core._EQ_.call(null,inst_11036__$1,change);var inst_11039 = (inst_11037) || (inst_11038);var state_11071__$1 = (function (){var statearr_11101 = state_11071;(statearr_11101[(8)] = inst_11035__$1);
(statearr_11101[(17)] = inst_11036__$1);
return statearr_11101;
})();if(cljs.core.truth_(inst_11039))
{var statearr_11102_11136 = state_11071__$1;(statearr_11102_11136[(1)] = (11));
} else
{var statearr_11103_11137 = state_11071__$1;(statearr_11103_11137[(1)] = (12));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (18)))
{var inst_11031 = (state_11071[(16)]);var inst_11030 = (state_11071[(18)]);var inst_11036 = (state_11071[(17)]);var inst_11053 = cljs.core.empty_QMARK_.call(null,inst_11031);var inst_11054 = inst_11030.call(null,inst_11036);var inst_11055 = cljs.core.not.call(null,inst_11054);var inst_11056 = (inst_11053) && (inst_11055);var state_11071__$1 = state_11071;var statearr_11104_11138 = state_11071__$1;(statearr_11104_11138[(2)] = inst_11056);
(statearr_11104_11138[(1)] = (19));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11072 === (8)))
{var inst_11020 = (state_11071[(7)]);var state_11071__$1 = state_11071;var statearr_11105_11139 = state_11071__$1;(statearr_11105_11139[(2)] = inst_11020);
(statearr_11105_11139[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___11113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
;return ((function (switch__7326__auto__,c__7341__auto___11113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_11109 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11109[(0)] = state_machine__7327__auto__);
(statearr_11109[(1)] = (1));
return statearr_11109;
});
var state_machine__7327__auto____1 = (function (state_11071){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_11071);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e11110){if((e11110 instanceof Object))
{var ex__7330__auto__ = e11110;var statearr_11111_11140 = state_11071;(statearr_11111_11140[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11071);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11110;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11141 = state_11071;
state_11071 = G__11141;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_11071){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_11071);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___11113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
})();var state__7343__auto__ = (function (){var statearr_11112 = f__7342__auto__.call(null);(statearr_11112[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___11113);
return statearr_11112;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___11113,cs,solo_modes,attrs,solo_mode,change,changed,pick,calc_state,m))
);
return m;
});
/**
* Adds ch as an input to the mix
*/
cljs.core.async.admix = (function admix(mix,ch){return cljs.core.async.admix_STAR_.call(null,mix,ch);
});
/**
* Removes ch as an input to the mix
*/
cljs.core.async.unmix = (function unmix(mix,ch){return cljs.core.async.unmix_STAR_.call(null,mix,ch);
});
/**
* removes all inputs from the mix
*/
cljs.core.async.unmix_all = (function unmix_all(mix){return cljs.core.async.unmix_all_STAR_.call(null,mix);
});
/**
* Atomically sets the state(s) of one or more channels in a mix. The
* state map is a map of channels -> channel-state-map. A
* channel-state-map is a map of attrs -> boolean, where attr is one or
* more of :mute, :pause or :solo. Any states supplied are merged with
* the current state.
* 
* Note that channels can be added to a mix via toggle, which can be
* used to add channels in a particular (e.g. paused) state.
*/
cljs.core.async.toggle = (function toggle(mix,state_map){return cljs.core.async.toggle_STAR_.call(null,mix,state_map);
});
/**
* Sets the solo mode of the mix. mode must be one of :mute or :pause
*/
cljs.core.async.solo_mode = (function solo_mode(mix,mode){return cljs.core.async.solo_mode_STAR_.call(null,mix,mode);
});
cljs.core.async.Pub = (function (){var obj11143 = {};return obj11143;
})();
cljs.core.async.sub_STAR_ = (function sub_STAR_(p,v,ch,close_QMARK_){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$sub_STAR_$arity$4;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$sub_STAR_$arity$4(p,v,ch,close_QMARK_);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.sub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.sub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.sub*",p);
}
}
})().call(null,p,v,ch,close_QMARK_);
}
});
cljs.core.async.unsub_STAR_ = (function unsub_STAR_(p,v,ch){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_STAR_$arity$3(p,v,ch);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub*",p);
}
}
})().call(null,p,v,ch);
}
});
cljs.core.async.unsub_all_STAR_ = (function() {
var unsub_all_STAR_ = null;
var unsub_all_STAR___1 = (function (p){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$1(p);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p);
}
});
var unsub_all_STAR___2 = (function (p,v){if((function (){var and__3539__auto__ = p;if(and__3539__auto__)
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2;
} else
{return and__3539__auto__;
}
})())
{return p.cljs$core$async$Pub$unsub_all_STAR_$arity$2(p,v);
} else
{var x__4178__auto__ = (((p == null))?null:p);return (function (){var or__3551__auto__ = (cljs.core.async.unsub_all_STAR_[goog.typeOf(x__4178__auto__)]);if(or__3551__auto__)
{return or__3551__auto__;
} else
{var or__3551__auto____$1 = (cljs.core.async.unsub_all_STAR_["_"]);if(or__3551__auto____$1)
{return or__3551__auto____$1;
} else
{throw cljs.core.missing_protocol.call(null,"Pub.unsub-all*",p);
}
}
})().call(null,p,v);
}
});
unsub_all_STAR_ = function(p,v){
switch(arguments.length){
case 1:
return unsub_all_STAR___1.call(this,p);
case 2:
return unsub_all_STAR___2.call(this,p,v);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$1 = unsub_all_STAR___1;
unsub_all_STAR_.cljs$core$IFn$_invoke$arity$2 = unsub_all_STAR___2;
return unsub_all_STAR_;
})()
;
/**
* Creates and returns a pub(lication) of the supplied channel,
* partitioned into topics by the topic-fn. topic-fn will be applied to
* each value on the channel and the result will determine the 'topic'
* on which that value will be put. Channels can be subscribed to
* receive copies of topics using 'sub', and unsubscribed using
* 'unsub'. Each topic will be handled by an internal mult on a
* dedicated channel. By default these internal channels are
* unbuffered, but a buf-fn can be supplied which, given a topic,
* creates a buffer with desired properties.
* 
* Each item is distributed to all subs in parallel and synchronously,
* i.e. each sub must accept before the next item is distributed. Use
* buffering/windowing to prevent slow subs from holding up the pub.
* 
* Note that if buf-fns are used then each topic is handled
* asynchronously, i.e. if a channel is subscribed to more than one
* topic it should not expect them to be interleaved identically with
* the source.
*/
cljs.core.async.pub = (function() {
var pub = null;
var pub__2 = (function (ch,topic_fn){return pub.call(null,ch,topic_fn,cljs.core.constantly.call(null,null));
});
var pub__3 = (function (ch,topic_fn,buf_fn){var mults = cljs.core.atom.call(null,cljs.core.PersistentArrayMap.EMPTY);var ensure_mult = ((function (mults){
return (function (topic){var or__3551__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,mults),topic);if(cljs.core.truth_(or__3551__auto__))
{return or__3551__auto__;
} else
{return cljs.core.get.call(null,cljs.core.swap_BANG_.call(null,mults,((function (or__3551__auto__,mults){
return (function (p1__11144_SHARP_){if(cljs.core.truth_(p1__11144_SHARP_.call(null,topic)))
{return p1__11144_SHARP_;
} else
{return cljs.core.assoc.call(null,p1__11144_SHARP_,topic,cljs.core.async.mult.call(null,cljs.core.async.chan.call(null,buf_fn.call(null,topic))));
}
});})(or__3551__auto__,mults))
),topic);
}
});})(mults))
;var p = (function (){if(typeof cljs.core.async.t11269 !== 'undefined')
{} else
{
/**
* @constructor
*/
cljs.core.async.t11269 = (function (ensure_mult,mults,buf_fn,topic_fn,ch,pub,meta11270){
this.ensure_mult = ensure_mult;
this.mults = mults;
this.buf_fn = buf_fn;
this.topic_fn = topic_fn;
this.ch = ch;
this.pub = pub;
this.meta11270 = meta11270;
this.cljs$lang$protocol_mask$partition1$ = 0;
this.cljs$lang$protocol_mask$partition0$ = 393216;
})
cljs.core.async.t11269.cljs$lang$type = true;
cljs.core.async.t11269.cljs$lang$ctorStr = "cljs.core.async/t11269";
cljs.core.async.t11269.cljs$lang$ctorPrWriter = ((function (mults,ensure_mult){
return (function (this__4118__auto__,writer__4119__auto__,opt__4120__auto__){return cljs.core._write.call(null,writer__4119__auto__,"cljs.core.async/t11269");
});})(mults,ensure_mult))
;
cljs.core.async.t11269.prototype.cljs$core$async$Pub$ = true;
cljs.core.async.t11269.prototype.cljs$core$async$Pub$sub_STAR_$arity$4 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2,close_QMARK_){var self__ = this;
var p__$1 = this;var m = self__.ensure_mult.call(null,topic);return cljs.core.async.tap.call(null,m,ch__$2,close_QMARK_);
});})(mults,ensure_mult))
;
cljs.core.async.t11269.prototype.cljs$core$async$Pub$unsub_STAR_$arity$3 = ((function (mults,ensure_mult){
return (function (p,topic,ch__$2){var self__ = this;
var p__$1 = this;var temp__4126__auto__ = cljs.core.get.call(null,cljs.core.deref.call(null,self__.mults),topic);if(cljs.core.truth_(temp__4126__auto__))
{var m = temp__4126__auto__;return cljs.core.async.untap.call(null,m,ch__$2);
} else
{return null;
}
});})(mults,ensure_mult))
;
cljs.core.async.t11269.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return cljs.core.reset_BANG_.call(null,self__.mults,cljs.core.PersistentArrayMap.EMPTY);
});})(mults,ensure_mult))
;
cljs.core.async.t11269.prototype.cljs$core$async$Pub$unsub_all_STAR_$arity$2 = ((function (mults,ensure_mult){
return (function (_,topic){var self__ = this;
var ___$1 = this;return cljs.core.swap_BANG_.call(null,self__.mults,cljs.core.dissoc,topic);
});})(mults,ensure_mult))
;
cljs.core.async.t11269.prototype.cljs$core$async$Mux$ = true;
cljs.core.async.t11269.prototype.cljs$core$async$Mux$muxch_STAR_$arity$1 = ((function (mults,ensure_mult){
return (function (_){var self__ = this;
var ___$1 = this;return self__.ch;
});})(mults,ensure_mult))
;
cljs.core.async.t11269.prototype.cljs$core$IMeta$_meta$arity$1 = ((function (mults,ensure_mult){
return (function (_11271){var self__ = this;
var _11271__$1 = this;return self__.meta11270;
});})(mults,ensure_mult))
;
cljs.core.async.t11269.prototype.cljs$core$IWithMeta$_with_meta$arity$2 = ((function (mults,ensure_mult){
return (function (_11271,meta11270__$1){var self__ = this;
var _11271__$1 = this;return (new cljs.core.async.t11269(self__.ensure_mult,self__.mults,self__.buf_fn,self__.topic_fn,self__.ch,self__.pub,meta11270__$1));
});})(mults,ensure_mult))
;
cljs.core.async.__GT_t11269 = ((function (mults,ensure_mult){
return (function __GT_t11269(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11270){return (new cljs.core.async.t11269(ensure_mult__$1,mults__$1,buf_fn__$1,topic_fn__$1,ch__$1,pub__$1,meta11270));
});})(mults,ensure_mult))
;
}
return (new cljs.core.async.t11269(ensure_mult,mults,buf_fn,topic_fn,ch,pub,null));
})();var c__7341__auto___11393 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___11393,mults,ensure_mult,p){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___11393,mults,ensure_mult,p){
return (function (state_11345){var state_val_11346 = (state_11345[(1)]);if((state_val_11346 === (7)))
{var inst_11341 = (state_11345[(2)]);var state_11345__$1 = state_11345;var statearr_11347_11394 = state_11345__$1;(statearr_11347_11394[(2)] = inst_11341);
(statearr_11347_11394[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (20)))
{var state_11345__$1 = state_11345;var statearr_11348_11395 = state_11345__$1;(statearr_11348_11395[(2)] = null);
(statearr_11348_11395[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (1)))
{var state_11345__$1 = state_11345;var statearr_11349_11396 = state_11345__$1;(statearr_11349_11396[(2)] = null);
(statearr_11349_11396[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (24)))
{var inst_11274 = (state_11345[(7)]);var inst_11324 = (state_11345[(8)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11345,(23),Object,null,(22));var inst_11331 = cljs.core.async.muxch_STAR_.call(null,inst_11324);var state_11345__$1 = state_11345;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11345__$1,(25),inst_11331,inst_11274);
} else
{if((state_val_11346 === (4)))
{var inst_11274 = (state_11345[(7)]);var inst_11274__$1 = (state_11345[(2)]);var inst_11275 = (inst_11274__$1 == null);var state_11345__$1 = (function (){var statearr_11350 = state_11345;(statearr_11350[(7)] = inst_11274__$1);
return statearr_11350;
})();if(cljs.core.truth_(inst_11275))
{var statearr_11351_11397 = state_11345__$1;(statearr_11351_11397[(1)] = (5));
} else
{var statearr_11352_11398 = state_11345__$1;(statearr_11352_11398[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (15)))
{var inst_11316 = (state_11345[(2)]);var state_11345__$1 = state_11345;var statearr_11353_11399 = state_11345__$1;(statearr_11353_11399[(2)] = inst_11316);
(statearr_11353_11399[(1)] = (12));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (21)))
{var inst_11338 = (state_11345[(2)]);var state_11345__$1 = (function (){var statearr_11354 = state_11345;(statearr_11354[(9)] = inst_11338);
return statearr_11354;
})();var statearr_11355_11400 = state_11345__$1;(statearr_11355_11400[(2)] = null);
(statearr_11355_11400[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (13)))
{var inst_11298 = (state_11345[(10)]);var inst_11300 = cljs.core.chunked_seq_QMARK_.call(null,inst_11298);var state_11345__$1 = state_11345;if(inst_11300)
{var statearr_11356_11401 = state_11345__$1;(statearr_11356_11401[(1)] = (16));
} else
{var statearr_11357_11402 = state_11345__$1;(statearr_11357_11402[(1)] = (17));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (22)))
{var inst_11335 = (state_11345[(2)]);var state_11345__$1 = state_11345;var statearr_11358_11403 = state_11345__$1;(statearr_11358_11403[(2)] = inst_11335);
(statearr_11358_11403[(1)] = (21));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (6)))
{var inst_11322 = (state_11345[(11)]);var inst_11274 = (state_11345[(7)]);var inst_11324 = (state_11345[(8)]);var inst_11322__$1 = topic_fn.call(null,inst_11274);var inst_11323 = cljs.core.deref.call(null,mults);var inst_11324__$1 = cljs.core.get.call(null,inst_11323,inst_11322__$1);var state_11345__$1 = (function (){var statearr_11359 = state_11345;(statearr_11359[(11)] = inst_11322__$1);
(statearr_11359[(8)] = inst_11324__$1);
return statearr_11359;
})();if(cljs.core.truth_(inst_11324__$1))
{var statearr_11360_11404 = state_11345__$1;(statearr_11360_11404[(1)] = (19));
} else
{var statearr_11361_11405 = state_11345__$1;(statearr_11361_11405[(1)] = (20));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (25)))
{var inst_11333 = (state_11345[(2)]);var state_11345__$1 = state_11345;var statearr_11362_11406 = state_11345__$1;(statearr_11362_11406[(2)] = inst_11333);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11345__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (17)))
{var inst_11298 = (state_11345[(10)]);var inst_11307 = cljs.core.first.call(null,inst_11298);var inst_11308 = cljs.core.async.muxch_STAR_.call(null,inst_11307);var inst_11309 = cljs.core.async.close_BANG_.call(null,inst_11308);var inst_11310 = cljs.core.next.call(null,inst_11298);var inst_11284 = inst_11310;var inst_11285 = null;var inst_11286 = (0);var inst_11287 = (0);var state_11345__$1 = (function (){var statearr_11363 = state_11345;(statearr_11363[(12)] = inst_11287);
(statearr_11363[(13)] = inst_11309);
(statearr_11363[(14)] = inst_11285);
(statearr_11363[(15)] = inst_11284);
(statearr_11363[(16)] = inst_11286);
return statearr_11363;
})();var statearr_11364_11407 = state_11345__$1;(statearr_11364_11407[(2)] = null);
(statearr_11364_11407[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (3)))
{var inst_11343 = (state_11345[(2)]);var state_11345__$1 = state_11345;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11345__$1,inst_11343);
} else
{if((state_val_11346 === (12)))
{var inst_11318 = (state_11345[(2)]);var state_11345__$1 = state_11345;var statearr_11365_11408 = state_11345__$1;(statearr_11365_11408[(2)] = inst_11318);
(statearr_11365_11408[(1)] = (9));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (2)))
{var state_11345__$1 = state_11345;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11345__$1,(4),ch);
} else
{if((state_val_11346 === (23)))
{var inst_11322 = (state_11345[(11)]);var inst_11326 = (state_11345[(2)]);var inst_11327 = cljs.core.swap_BANG_.call(null,mults,cljs.core.dissoc,inst_11322);var state_11345__$1 = (function (){var statearr_11366 = state_11345;(statearr_11366[(17)] = inst_11326);
return statearr_11366;
})();var statearr_11367_11409 = state_11345__$1;(statearr_11367_11409[(2)] = inst_11327);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11345__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (19)))
{var state_11345__$1 = state_11345;var statearr_11368_11410 = state_11345__$1;(statearr_11368_11410[(2)] = null);
(statearr_11368_11410[(1)] = (24));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (11)))
{var inst_11298 = (state_11345[(10)]);var inst_11284 = (state_11345[(15)]);var inst_11298__$1 = cljs.core.seq.call(null,inst_11284);var state_11345__$1 = (function (){var statearr_11369 = state_11345;(statearr_11369[(10)] = inst_11298__$1);
return statearr_11369;
})();if(inst_11298__$1)
{var statearr_11370_11411 = state_11345__$1;(statearr_11370_11411[(1)] = (13));
} else
{var statearr_11371_11412 = state_11345__$1;(statearr_11371_11412[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (9)))
{var inst_11320 = (state_11345[(2)]);var state_11345__$1 = state_11345;var statearr_11372_11413 = state_11345__$1;(statearr_11372_11413[(2)] = inst_11320);
(statearr_11372_11413[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (5)))
{var inst_11281 = cljs.core.deref.call(null,mults);var inst_11282 = cljs.core.vals.call(null,inst_11281);var inst_11283 = cljs.core.seq.call(null,inst_11282);var inst_11284 = inst_11283;var inst_11285 = null;var inst_11286 = (0);var inst_11287 = (0);var state_11345__$1 = (function (){var statearr_11373 = state_11345;(statearr_11373[(12)] = inst_11287);
(statearr_11373[(14)] = inst_11285);
(statearr_11373[(15)] = inst_11284);
(statearr_11373[(16)] = inst_11286);
return statearr_11373;
})();var statearr_11374_11414 = state_11345__$1;(statearr_11374_11414[(2)] = null);
(statearr_11374_11414[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (14)))
{var state_11345__$1 = state_11345;var statearr_11378_11415 = state_11345__$1;(statearr_11378_11415[(2)] = null);
(statearr_11378_11415[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (16)))
{var inst_11298 = (state_11345[(10)]);var inst_11302 = cljs.core.chunk_first.call(null,inst_11298);var inst_11303 = cljs.core.chunk_rest.call(null,inst_11298);var inst_11304 = cljs.core.count.call(null,inst_11302);var inst_11284 = inst_11303;var inst_11285 = inst_11302;var inst_11286 = inst_11304;var inst_11287 = (0);var state_11345__$1 = (function (){var statearr_11379 = state_11345;(statearr_11379[(12)] = inst_11287);
(statearr_11379[(14)] = inst_11285);
(statearr_11379[(15)] = inst_11284);
(statearr_11379[(16)] = inst_11286);
return statearr_11379;
})();var statearr_11380_11416 = state_11345__$1;(statearr_11380_11416[(2)] = null);
(statearr_11380_11416[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (10)))
{var inst_11287 = (state_11345[(12)]);var inst_11285 = (state_11345[(14)]);var inst_11284 = (state_11345[(15)]);var inst_11286 = (state_11345[(16)]);var inst_11292 = cljs.core._nth.call(null,inst_11285,inst_11287);var inst_11293 = cljs.core.async.muxch_STAR_.call(null,inst_11292);var inst_11294 = cljs.core.async.close_BANG_.call(null,inst_11293);var inst_11295 = (inst_11287 + (1));var tmp11375 = inst_11285;var tmp11376 = inst_11284;var tmp11377 = inst_11286;var inst_11284__$1 = tmp11376;var inst_11285__$1 = tmp11375;var inst_11286__$1 = tmp11377;var inst_11287__$1 = inst_11295;var state_11345__$1 = (function (){var statearr_11381 = state_11345;(statearr_11381[(12)] = inst_11287__$1);
(statearr_11381[(14)] = inst_11285__$1);
(statearr_11381[(18)] = inst_11294);
(statearr_11381[(15)] = inst_11284__$1);
(statearr_11381[(16)] = inst_11286__$1);
return statearr_11381;
})();var statearr_11382_11417 = state_11345__$1;(statearr_11382_11417[(2)] = null);
(statearr_11382_11417[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (18)))
{var inst_11313 = (state_11345[(2)]);var state_11345__$1 = state_11345;var statearr_11383_11418 = state_11345__$1;(statearr_11383_11418[(2)] = inst_11313);
(statearr_11383_11418[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11346 === (8)))
{var inst_11287 = (state_11345[(12)]);var inst_11286 = (state_11345[(16)]);var inst_11289 = (inst_11287 < inst_11286);var inst_11290 = inst_11289;var state_11345__$1 = state_11345;if(cljs.core.truth_(inst_11290))
{var statearr_11384_11419 = state_11345__$1;(statearr_11384_11419[(1)] = (10));
} else
{var statearr_11385_11420 = state_11345__$1;(statearr_11385_11420[(1)] = (11));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___11393,mults,ensure_mult,p))
;return ((function (switch__7326__auto__,c__7341__auto___11393,mults,ensure_mult,p){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_11389 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11389[(0)] = state_machine__7327__auto__);
(statearr_11389[(1)] = (1));
return statearr_11389;
});
var state_machine__7327__auto____1 = (function (state_11345){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_11345);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e11390){if((e11390 instanceof Object))
{var ex__7330__auto__ = e11390;var statearr_11391_11421 = state_11345;(statearr_11391_11421[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11345);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11390;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11422 = state_11345;
state_11345 = G__11422;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_11345){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_11345);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___11393,mults,ensure_mult,p))
})();var state__7343__auto__ = (function (){var statearr_11392 = f__7342__auto__.call(null);(statearr_11392[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___11393);
return statearr_11392;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___11393,mults,ensure_mult,p))
);
return p;
});
pub = function(ch,topic_fn,buf_fn){
switch(arguments.length){
case 2:
return pub__2.call(this,ch,topic_fn);
case 3:
return pub__3.call(this,ch,topic_fn,buf_fn);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
pub.cljs$core$IFn$_invoke$arity$2 = pub__2;
pub.cljs$core$IFn$_invoke$arity$3 = pub__3;
return pub;
})()
;
/**
* Subscribes a channel to a topic of a pub.
* 
* By default the channel will be closed when the source closes,
* but can be determined by the close? parameter.
*/
cljs.core.async.sub = (function() {
var sub = null;
var sub__3 = (function (p,topic,ch){return sub.call(null,p,topic,ch,true);
});
var sub__4 = (function (p,topic,ch,close_QMARK_){return cljs.core.async.sub_STAR_.call(null,p,topic,ch,close_QMARK_);
});
sub = function(p,topic,ch,close_QMARK_){
switch(arguments.length){
case 3:
return sub__3.call(this,p,topic,ch);
case 4:
return sub__4.call(this,p,topic,ch,close_QMARK_);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
sub.cljs$core$IFn$_invoke$arity$3 = sub__3;
sub.cljs$core$IFn$_invoke$arity$4 = sub__4;
return sub;
})()
;
/**
* Unsubscribes a channel from a topic of a pub
*/
cljs.core.async.unsub = (function unsub(p,topic,ch){return cljs.core.async.unsub_STAR_.call(null,p,topic,ch);
});
/**
* Unsubscribes all channels from a pub, or a topic of a pub
*/
cljs.core.async.unsub_all = (function() {
var unsub_all = null;
var unsub_all__1 = (function (p){return cljs.core.async.unsub_all_STAR_.call(null,p);
});
var unsub_all__2 = (function (p,topic){return cljs.core.async.unsub_all_STAR_.call(null,p,topic);
});
unsub_all = function(p,topic){
switch(arguments.length){
case 1:
return unsub_all__1.call(this,p);
case 2:
return unsub_all__2.call(this,p,topic);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unsub_all.cljs$core$IFn$_invoke$arity$1 = unsub_all__1;
unsub_all.cljs$core$IFn$_invoke$arity$2 = unsub_all__2;
return unsub_all;
})()
;
/**
* Takes a function and a collection of source channels, and returns a
* channel which contains the values produced by applying f to the set
* of first items taken from each source channel, followed by applying
* f to the set of second items from each channel, until any one of the
* channels is closed, at which point the output channel will be
* closed. The returned channel will be unbuffered by default, or a
* buf-or-n can be supplied
*/
cljs.core.async.map = (function() {
var map = null;
var map__2 = (function (f,chs){return map.call(null,f,chs,null);
});
var map__3 = (function (f,chs,buf_or_n){var chs__$1 = cljs.core.vec.call(null,chs);var out = cljs.core.async.chan.call(null,buf_or_n);var cnt = cljs.core.count.call(null,chs__$1);var rets = cljs.core.object_array.call(null,cnt);var dchan = cljs.core.async.chan.call(null,(1));var dctr = cljs.core.atom.call(null,null);var done = cljs.core.mapv.call(null,((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (i){return ((function (chs__$1,out,cnt,rets,dchan,dctr){
return (function (ret){(rets[i] = ret);
if((cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec) === (0)))
{return cljs.core.async.put_BANG_.call(null,dchan,rets.slice((0)));
} else
{return null;
}
});
;})(chs__$1,out,cnt,rets,dchan,dctr))
});})(chs__$1,out,cnt,rets,dchan,dctr))
,cljs.core.range.call(null,cnt));var c__7341__auto___11559 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___11559,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___11559,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function (state_11529){var state_val_11530 = (state_11529[(1)]);if((state_val_11530 === (7)))
{var state_11529__$1 = state_11529;var statearr_11531_11560 = state_11529__$1;(statearr_11531_11560[(2)] = null);
(statearr_11531_11560[(1)] = (8));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (1)))
{var state_11529__$1 = state_11529;var statearr_11532_11561 = state_11529__$1;(statearr_11532_11561[(2)] = null);
(statearr_11532_11561[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (4)))
{var inst_11493 = (state_11529[(7)]);var inst_11495 = (inst_11493 < cnt);var state_11529__$1 = state_11529;if(cljs.core.truth_(inst_11495))
{var statearr_11533_11562 = state_11529__$1;(statearr_11533_11562[(1)] = (6));
} else
{var statearr_11534_11563 = state_11529__$1;(statearr_11534_11563[(1)] = (7));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (15)))
{var inst_11525 = (state_11529[(2)]);var state_11529__$1 = state_11529;var statearr_11535_11564 = state_11529__$1;(statearr_11535_11564[(2)] = inst_11525);
(statearr_11535_11564[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (13)))
{var inst_11518 = cljs.core.async.close_BANG_.call(null,out);var state_11529__$1 = state_11529;var statearr_11536_11565 = state_11529__$1;(statearr_11536_11565[(2)] = inst_11518);
(statearr_11536_11565[(1)] = (15));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (6)))
{var state_11529__$1 = state_11529;var statearr_11537_11566 = state_11529__$1;(statearr_11537_11566[(2)] = null);
(statearr_11537_11566[(1)] = (11));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (3)))
{var inst_11527 = (state_11529[(2)]);var state_11529__$1 = state_11529;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11529__$1,inst_11527);
} else
{if((state_val_11530 === (12)))
{var inst_11515 = (state_11529[(8)]);var inst_11515__$1 = (state_11529[(2)]);var inst_11516 = cljs.core.some.call(null,cljs.core.nil_QMARK_,inst_11515__$1);var state_11529__$1 = (function (){var statearr_11538 = state_11529;(statearr_11538[(8)] = inst_11515__$1);
return statearr_11538;
})();if(cljs.core.truth_(inst_11516))
{var statearr_11539_11567 = state_11529__$1;(statearr_11539_11567[(1)] = (13));
} else
{var statearr_11540_11568 = state_11529__$1;(statearr_11540_11568[(1)] = (14));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (2)))
{var inst_11492 = cljs.core.reset_BANG_.call(null,dctr,cnt);var inst_11493 = (0);var state_11529__$1 = (function (){var statearr_11541 = state_11529;(statearr_11541[(9)] = inst_11492);
(statearr_11541[(7)] = inst_11493);
return statearr_11541;
})();var statearr_11542_11569 = state_11529__$1;(statearr_11542_11569[(2)] = null);
(statearr_11542_11569[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (11)))
{var inst_11493 = (state_11529[(7)]);var _ = cljs.core.async.impl.ioc_helpers.add_exception_frame.call(null,state_11529,(10),Object,null,(9));var inst_11502 = chs__$1.call(null,inst_11493);var inst_11503 = done.call(null,inst_11493);var inst_11504 = cljs.core.async.take_BANG_.call(null,inst_11502,inst_11503);var state_11529__$1 = state_11529;var statearr_11543_11570 = state_11529__$1;(statearr_11543_11570[(2)] = inst_11504);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11529__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (9)))
{var inst_11493 = (state_11529[(7)]);var inst_11506 = (state_11529[(2)]);var inst_11507 = (inst_11493 + (1));var inst_11493__$1 = inst_11507;var state_11529__$1 = (function (){var statearr_11544 = state_11529;(statearr_11544[(7)] = inst_11493__$1);
(statearr_11544[(10)] = inst_11506);
return statearr_11544;
})();var statearr_11545_11571 = state_11529__$1;(statearr_11545_11571[(2)] = null);
(statearr_11545_11571[(1)] = (4));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (5)))
{var inst_11513 = (state_11529[(2)]);var state_11529__$1 = (function (){var statearr_11546 = state_11529;(statearr_11546[(11)] = inst_11513);
return statearr_11546;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11529__$1,(12),dchan);
} else
{if((state_val_11530 === (14)))
{var inst_11515 = (state_11529[(8)]);var inst_11520 = cljs.core.apply.call(null,f,inst_11515);var state_11529__$1 = state_11529;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11529__$1,(16),out,inst_11520);
} else
{if((state_val_11530 === (16)))
{var inst_11522 = (state_11529[(2)]);var state_11529__$1 = (function (){var statearr_11547 = state_11529;(statearr_11547[(12)] = inst_11522);
return statearr_11547;
})();var statearr_11548_11572 = state_11529__$1;(statearr_11548_11572[(2)] = null);
(statearr_11548_11572[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (10)))
{var inst_11497 = (state_11529[(2)]);var inst_11498 = cljs.core.swap_BANG_.call(null,dctr,cljs.core.dec);var state_11529__$1 = (function (){var statearr_11549 = state_11529;(statearr_11549[(13)] = inst_11497);
return statearr_11549;
})();var statearr_11550_11573 = state_11529__$1;(statearr_11550_11573[(2)] = inst_11498);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11529__$1);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11530 === (8)))
{var inst_11511 = (state_11529[(2)]);var state_11529__$1 = state_11529;var statearr_11551_11574 = state_11529__$1;(statearr_11551_11574[(2)] = inst_11511);
(statearr_11551_11574[(1)] = (5));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___11559,chs__$1,out,cnt,rets,dchan,dctr,done))
;return ((function (switch__7326__auto__,c__7341__auto___11559,chs__$1,out,cnt,rets,dchan,dctr,done){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_11555 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11555[(0)] = state_machine__7327__auto__);
(statearr_11555[(1)] = (1));
return statearr_11555;
});
var state_machine__7327__auto____1 = (function (state_11529){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_11529);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e11556){if((e11556 instanceof Object))
{var ex__7330__auto__ = e11556;var statearr_11557_11575 = state_11529;(statearr_11557_11575[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11529);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11556;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11576 = state_11529;
state_11529 = G__11576;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_11529){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_11529);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___11559,chs__$1,out,cnt,rets,dchan,dctr,done))
})();var state__7343__auto__ = (function (){var statearr_11558 = f__7342__auto__.call(null);(statearr_11558[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___11559);
return statearr_11558;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___11559,chs__$1,out,cnt,rets,dchan,dctr,done))
);
return out;
});
map = function(f,chs,buf_or_n){
switch(arguments.length){
case 2:
return map__2.call(this,f,chs);
case 3:
return map__3.call(this,f,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
map.cljs$core$IFn$_invoke$arity$2 = map__2;
map.cljs$core$IFn$_invoke$arity$3 = map__3;
return map;
})()
;
/**
* Takes a collection of source channels and returns a channel which
* contains all values taken from them. The returned channel will be
* unbuffered by default, or a buf-or-n can be supplied. The channel
* will close after all the source channels have closed.
*/
cljs.core.async.merge = (function() {
var merge = null;
var merge__1 = (function (chs){return merge.call(null,chs,null);
});
var merge__2 = (function (chs,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7341__auto___11684 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___11684,out){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___11684,out){
return (function (state_11660){var state_val_11661 = (state_11660[(1)]);if((state_val_11661 === (7)))
{var inst_11640 = (state_11660[(7)]);var inst_11639 = (state_11660[(8)]);var inst_11639__$1 = (state_11660[(2)]);var inst_11640__$1 = cljs.core.nth.call(null,inst_11639__$1,(0),null);var inst_11641 = cljs.core.nth.call(null,inst_11639__$1,(1),null);var inst_11642 = (inst_11640__$1 == null);var state_11660__$1 = (function (){var statearr_11662 = state_11660;(statearr_11662[(9)] = inst_11641);
(statearr_11662[(7)] = inst_11640__$1);
(statearr_11662[(8)] = inst_11639__$1);
return statearr_11662;
})();if(cljs.core.truth_(inst_11642))
{var statearr_11663_11685 = state_11660__$1;(statearr_11663_11685[(1)] = (8));
} else
{var statearr_11664_11686 = state_11660__$1;(statearr_11664_11686[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11661 === (1)))
{var inst_11631 = cljs.core.vec.call(null,chs);var inst_11632 = inst_11631;var state_11660__$1 = (function (){var statearr_11665 = state_11660;(statearr_11665[(10)] = inst_11632);
return statearr_11665;
})();var statearr_11666_11687 = state_11660__$1;(statearr_11666_11687[(2)] = null);
(statearr_11666_11687[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11661 === (4)))
{var inst_11632 = (state_11660[(10)]);var state_11660__$1 = state_11660;return cljs.core.async.impl.ioc_helpers.ioc_alts_BANG_.call(null,state_11660__$1,(7),inst_11632);
} else
{if((state_val_11661 === (6)))
{var inst_11656 = (state_11660[(2)]);var state_11660__$1 = state_11660;var statearr_11667_11688 = state_11660__$1;(statearr_11667_11688[(2)] = inst_11656);
(statearr_11667_11688[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11661 === (3)))
{var inst_11658 = (state_11660[(2)]);var state_11660__$1 = state_11660;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11660__$1,inst_11658);
} else
{if((state_val_11661 === (2)))
{var inst_11632 = (state_11660[(10)]);var inst_11634 = cljs.core.count.call(null,inst_11632);var inst_11635 = (inst_11634 > (0));var state_11660__$1 = state_11660;if(cljs.core.truth_(inst_11635))
{var statearr_11669_11689 = state_11660__$1;(statearr_11669_11689[(1)] = (4));
} else
{var statearr_11670_11690 = state_11660__$1;(statearr_11670_11690[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11661 === (11)))
{var inst_11632 = (state_11660[(10)]);var inst_11649 = (state_11660[(2)]);var tmp11668 = inst_11632;var inst_11632__$1 = tmp11668;var state_11660__$1 = (function (){var statearr_11671 = state_11660;(statearr_11671[(10)] = inst_11632__$1);
(statearr_11671[(11)] = inst_11649);
return statearr_11671;
})();var statearr_11672_11691 = state_11660__$1;(statearr_11672_11691[(2)] = null);
(statearr_11672_11691[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11661 === (9)))
{var inst_11640 = (state_11660[(7)]);var state_11660__$1 = state_11660;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11660__$1,(11),out,inst_11640);
} else
{if((state_val_11661 === (5)))
{var inst_11654 = cljs.core.async.close_BANG_.call(null,out);var state_11660__$1 = state_11660;var statearr_11673_11692 = state_11660__$1;(statearr_11673_11692[(2)] = inst_11654);
(statearr_11673_11692[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11661 === (10)))
{var inst_11652 = (state_11660[(2)]);var state_11660__$1 = state_11660;var statearr_11674_11693 = state_11660__$1;(statearr_11674_11693[(2)] = inst_11652);
(statearr_11674_11693[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11661 === (8)))
{var inst_11641 = (state_11660[(9)]);var inst_11632 = (state_11660[(10)]);var inst_11640 = (state_11660[(7)]);var inst_11639 = (state_11660[(8)]);var inst_11644 = (function (){var c = inst_11641;var v = inst_11640;var vec__11637 = inst_11639;var cs = inst_11632;return ((function (c,v,vec__11637,cs,inst_11641,inst_11632,inst_11640,inst_11639,state_val_11661,c__7341__auto___11684,out){
return (function (p1__11577_SHARP_){return cljs.core.not_EQ_.call(null,c,p1__11577_SHARP_);
});
;})(c,v,vec__11637,cs,inst_11641,inst_11632,inst_11640,inst_11639,state_val_11661,c__7341__auto___11684,out))
})();var inst_11645 = cljs.core.filterv.call(null,inst_11644,inst_11632);var inst_11632__$1 = inst_11645;var state_11660__$1 = (function (){var statearr_11675 = state_11660;(statearr_11675[(10)] = inst_11632__$1);
return statearr_11675;
})();var statearr_11676_11694 = state_11660__$1;(statearr_11676_11694[(2)] = null);
(statearr_11676_11694[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___11684,out))
;return ((function (switch__7326__auto__,c__7341__auto___11684,out){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_11680 = [null,null,null,null,null,null,null,null,null,null,null,null];(statearr_11680[(0)] = state_machine__7327__auto__);
(statearr_11680[(1)] = (1));
return statearr_11680;
});
var state_machine__7327__auto____1 = (function (state_11660){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_11660);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e11681){if((e11681 instanceof Object))
{var ex__7330__auto__ = e11681;var statearr_11682_11695 = state_11660;(statearr_11682_11695[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11660);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11681;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11696 = state_11660;
state_11660 = G__11696;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_11660){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_11660);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___11684,out))
})();var state__7343__auto__ = (function (){var statearr_11683 = f__7342__auto__.call(null);(statearr_11683[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___11684);
return statearr_11683;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___11684,out))
);
return out;
});
merge = function(chs,buf_or_n){
switch(arguments.length){
case 1:
return merge__1.call(this,chs);
case 2:
return merge__2.call(this,chs,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
merge.cljs$core$IFn$_invoke$arity$1 = merge__1;
merge.cljs$core$IFn$_invoke$arity$2 = merge__2;
return merge;
})()
;
/**
* Returns a channel containing the single (collection) result of the
* items taken from the channel conjoined to the supplied
* collection. ch must close before into produces a result.
*/
cljs.core.async.into = (function into(coll,ch){return cljs.core.async.reduce.call(null,cljs.core.conj,coll,ch);
});
/**
* Returns a channel that will return, at most, n items from ch. After n items
* have been returned, or ch has been closed, the return chanel will close.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.take = (function() {
var take = null;
var take__2 = (function (n,ch){return take.call(null,n,ch,null);
});
var take__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7341__auto___11789 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___11789,out){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___11789,out){
return (function (state_11766){var state_val_11767 = (state_11766[(1)]);if((state_val_11767 === (7)))
{var inst_11748 = (state_11766[(7)]);var inst_11748__$1 = (state_11766[(2)]);var inst_11749 = (inst_11748__$1 == null);var inst_11750 = cljs.core.not.call(null,inst_11749);var state_11766__$1 = (function (){var statearr_11768 = state_11766;(statearr_11768[(7)] = inst_11748__$1);
return statearr_11768;
})();if(inst_11750)
{var statearr_11769_11790 = state_11766__$1;(statearr_11769_11790[(1)] = (8));
} else
{var statearr_11770_11791 = state_11766__$1;(statearr_11770_11791[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11767 === (1)))
{var inst_11743 = (0);var state_11766__$1 = (function (){var statearr_11771 = state_11766;(statearr_11771[(8)] = inst_11743);
return statearr_11771;
})();var statearr_11772_11792 = state_11766__$1;(statearr_11772_11792[(2)] = null);
(statearr_11772_11792[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11767 === (4)))
{var state_11766__$1 = state_11766;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11766__$1,(7),ch);
} else
{if((state_val_11767 === (6)))
{var inst_11761 = (state_11766[(2)]);var state_11766__$1 = state_11766;var statearr_11773_11793 = state_11766__$1;(statearr_11773_11793[(2)] = inst_11761);
(statearr_11773_11793[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11767 === (3)))
{var inst_11763 = (state_11766[(2)]);var inst_11764 = cljs.core.async.close_BANG_.call(null,out);var state_11766__$1 = (function (){var statearr_11774 = state_11766;(statearr_11774[(9)] = inst_11763);
return statearr_11774;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11766__$1,inst_11764);
} else
{if((state_val_11767 === (2)))
{var inst_11743 = (state_11766[(8)]);var inst_11745 = (inst_11743 < n);var state_11766__$1 = state_11766;if(cljs.core.truth_(inst_11745))
{var statearr_11775_11794 = state_11766__$1;(statearr_11775_11794[(1)] = (4));
} else
{var statearr_11776_11795 = state_11766__$1;(statearr_11776_11795[(1)] = (5));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11767 === (11)))
{var inst_11743 = (state_11766[(8)]);var inst_11753 = (state_11766[(2)]);var inst_11754 = (inst_11743 + (1));var inst_11743__$1 = inst_11754;var state_11766__$1 = (function (){var statearr_11777 = state_11766;(statearr_11777[(10)] = inst_11753);
(statearr_11777[(8)] = inst_11743__$1);
return statearr_11777;
})();var statearr_11778_11796 = state_11766__$1;(statearr_11778_11796[(2)] = null);
(statearr_11778_11796[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11767 === (9)))
{var state_11766__$1 = state_11766;var statearr_11779_11797 = state_11766__$1;(statearr_11779_11797[(2)] = null);
(statearr_11779_11797[(1)] = (10));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11767 === (5)))
{var state_11766__$1 = state_11766;var statearr_11780_11798 = state_11766__$1;(statearr_11780_11798[(2)] = null);
(statearr_11780_11798[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11767 === (10)))
{var inst_11758 = (state_11766[(2)]);var state_11766__$1 = state_11766;var statearr_11781_11799 = state_11766__$1;(statearr_11781_11799[(2)] = inst_11758);
(statearr_11781_11799[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11767 === (8)))
{var inst_11748 = (state_11766[(7)]);var state_11766__$1 = state_11766;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11766__$1,(11),out,inst_11748);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___11789,out))
;return ((function (switch__7326__auto__,c__7341__auto___11789,out){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_11785 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11785[(0)] = state_machine__7327__auto__);
(statearr_11785[(1)] = (1));
return statearr_11785;
});
var state_machine__7327__auto____1 = (function (state_11766){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_11766);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e11786){if((e11786 instanceof Object))
{var ex__7330__auto__ = e11786;var statearr_11787_11800 = state_11766;(statearr_11787_11800[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11766);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11786;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11801 = state_11766;
state_11766 = G__11801;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_11766){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_11766);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___11789,out))
})();var state__7343__auto__ = (function (){var statearr_11788 = f__7342__auto__.call(null);(statearr_11788[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___11789);
return statearr_11788;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___11789,out))
);
return out;
});
take = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return take__2.call(this,n,ch);
case 3:
return take__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
take.cljs$core$IFn$_invoke$arity$2 = take__2;
take.cljs$core$IFn$_invoke$arity$3 = take__3;
return take;
})()
;
/**
* Returns a channel that will contain values from ch. Consecutive duplicate
* values will be dropped.
* 
* The output channel is unbuffered by default, unless buf-or-n is given.
*/
cljs.core.async.unique = (function() {
var unique = null;
var unique__1 = (function (ch){return unique.call(null,ch,null);
});
var unique__2 = (function (ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7341__auto___11898 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___11898,out){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___11898,out){
return (function (state_11873){var state_val_11874 = (state_11873[(1)]);if((state_val_11874 === (7)))
{var inst_11868 = (state_11873[(2)]);var state_11873__$1 = state_11873;var statearr_11875_11899 = state_11873__$1;(statearr_11875_11899[(2)] = inst_11868);
(statearr_11875_11899[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11874 === (1)))
{var inst_11850 = null;var state_11873__$1 = (function (){var statearr_11876 = state_11873;(statearr_11876[(7)] = inst_11850);
return statearr_11876;
})();var statearr_11877_11900 = state_11873__$1;(statearr_11877_11900[(2)] = null);
(statearr_11877_11900[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11874 === (4)))
{var inst_11853 = (state_11873[(8)]);var inst_11853__$1 = (state_11873[(2)]);var inst_11854 = (inst_11853__$1 == null);var inst_11855 = cljs.core.not.call(null,inst_11854);var state_11873__$1 = (function (){var statearr_11878 = state_11873;(statearr_11878[(8)] = inst_11853__$1);
return statearr_11878;
})();if(inst_11855)
{var statearr_11879_11901 = state_11873__$1;(statearr_11879_11901[(1)] = (5));
} else
{var statearr_11880_11902 = state_11873__$1;(statearr_11880_11902[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11874 === (6)))
{var state_11873__$1 = state_11873;var statearr_11881_11903 = state_11873__$1;(statearr_11881_11903[(2)] = null);
(statearr_11881_11903[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11874 === (3)))
{var inst_11870 = (state_11873[(2)]);var inst_11871 = cljs.core.async.close_BANG_.call(null,out);var state_11873__$1 = (function (){var statearr_11882 = state_11873;(statearr_11882[(9)] = inst_11870);
return statearr_11882;
})();return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_11873__$1,inst_11871);
} else
{if((state_val_11874 === (2)))
{var state_11873__$1 = state_11873;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_11873__$1,(4),ch);
} else
{if((state_val_11874 === (11)))
{var inst_11853 = (state_11873[(8)]);var inst_11862 = (state_11873[(2)]);var inst_11850 = inst_11853;var state_11873__$1 = (function (){var statearr_11883 = state_11873;(statearr_11883[(7)] = inst_11850);
(statearr_11883[(10)] = inst_11862);
return statearr_11883;
})();var statearr_11884_11904 = state_11873__$1;(statearr_11884_11904[(2)] = null);
(statearr_11884_11904[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11874 === (9)))
{var inst_11853 = (state_11873[(8)]);var state_11873__$1 = state_11873;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_11873__$1,(11),out,inst_11853);
} else
{if((state_val_11874 === (5)))
{var inst_11850 = (state_11873[(7)]);var inst_11853 = (state_11873[(8)]);var inst_11857 = cljs.core._EQ_.call(null,inst_11853,inst_11850);var state_11873__$1 = state_11873;if(inst_11857)
{var statearr_11886_11905 = state_11873__$1;(statearr_11886_11905[(1)] = (8));
} else
{var statearr_11887_11906 = state_11873__$1;(statearr_11887_11906[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11874 === (10)))
{var inst_11865 = (state_11873[(2)]);var state_11873__$1 = state_11873;var statearr_11888_11907 = state_11873__$1;(statearr_11888_11907[(2)] = inst_11865);
(statearr_11888_11907[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_11874 === (8)))
{var inst_11850 = (state_11873[(7)]);var tmp11885 = inst_11850;var inst_11850__$1 = tmp11885;var state_11873__$1 = (function (){var statearr_11889 = state_11873;(statearr_11889[(7)] = inst_11850__$1);
return statearr_11889;
})();var statearr_11890_11908 = state_11873__$1;(statearr_11890_11908[(2)] = null);
(statearr_11890_11908[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___11898,out))
;return ((function (switch__7326__auto__,c__7341__auto___11898,out){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_11894 = [null,null,null,null,null,null,null,null,null,null,null];(statearr_11894[(0)] = state_machine__7327__auto__);
(statearr_11894[(1)] = (1));
return statearr_11894;
});
var state_machine__7327__auto____1 = (function (state_11873){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_11873);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e11895){if((e11895 instanceof Object))
{var ex__7330__auto__ = e11895;var statearr_11896_11909 = state_11873;(statearr_11896_11909[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_11873);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e11895;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__11910 = state_11873;
state_11873 = G__11910;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_11873){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_11873);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___11898,out))
})();var state__7343__auto__ = (function (){var statearr_11897 = f__7342__auto__.call(null);(statearr_11897[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___11898);
return statearr_11897;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___11898,out))
);
return out;
});
unique = function(ch,buf_or_n){
switch(arguments.length){
case 1:
return unique__1.call(this,ch);
case 2:
return unique__2.call(this,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
unique.cljs$core$IFn$_invoke$arity$1 = unique__1;
unique.cljs$core$IFn$_invoke$arity$2 = unique__2;
return unique;
})()
;
/**
* Returns a channel that will contain vectors of n items taken from ch. The
* final vector in the return channel may be smaller than n if ch closed before
* the vector could be completely filled.
* 
* The output channel is unbuffered by default, unless buf-or-n is given
*/
cljs.core.async.partition = (function() {
var partition = null;
var partition__2 = (function (n,ch){return partition.call(null,n,ch,null);
});
var partition__3 = (function (n,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7341__auto___12045 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___12045,out){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___12045,out){
return (function (state_12015){var state_val_12016 = (state_12015[(1)]);if((state_val_12016 === (7)))
{var inst_12011 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12017_12046 = state_12015__$1;(statearr_12017_12046[(2)] = inst_12011);
(statearr_12017_12046[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (1)))
{var inst_11978 = (new Array(n));var inst_11979 = inst_11978;var inst_11980 = (0);var state_12015__$1 = (function (){var statearr_12018 = state_12015;(statearr_12018[(7)] = inst_11979);
(statearr_12018[(8)] = inst_11980);
return statearr_12018;
})();var statearr_12019_12047 = state_12015__$1;(statearr_12019_12047[(2)] = null);
(statearr_12019_12047[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (4)))
{var inst_11983 = (state_12015[(9)]);var inst_11983__$1 = (state_12015[(2)]);var inst_11984 = (inst_11983__$1 == null);var inst_11985 = cljs.core.not.call(null,inst_11984);var state_12015__$1 = (function (){var statearr_12020 = state_12015;(statearr_12020[(9)] = inst_11983__$1);
return statearr_12020;
})();if(inst_11985)
{var statearr_12021_12048 = state_12015__$1;(statearr_12021_12048[(1)] = (5));
} else
{var statearr_12022_12049 = state_12015__$1;(statearr_12022_12049[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (15)))
{var inst_12005 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12023_12050 = state_12015__$1;(statearr_12023_12050[(2)] = inst_12005);
(statearr_12023_12050[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (13)))
{var state_12015__$1 = state_12015;var statearr_12024_12051 = state_12015__$1;(statearr_12024_12051[(2)] = null);
(statearr_12024_12051[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (6)))
{var inst_11980 = (state_12015[(8)]);var inst_12001 = (inst_11980 > (0));var state_12015__$1 = state_12015;if(cljs.core.truth_(inst_12001))
{var statearr_12025_12052 = state_12015__$1;(statearr_12025_12052[(1)] = (12));
} else
{var statearr_12026_12053 = state_12015__$1;(statearr_12026_12053[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (3)))
{var inst_12013 = (state_12015[(2)]);var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12015__$1,inst_12013);
} else
{if((state_val_12016 === (12)))
{var inst_11979 = (state_12015[(7)]);var inst_12003 = cljs.core.vec.call(null,inst_11979);var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12015__$1,(15),out,inst_12003);
} else
{if((state_val_12016 === (2)))
{var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12015__$1,(4),ch);
} else
{if((state_val_12016 === (11)))
{var inst_11995 = (state_12015[(2)]);var inst_11996 = (new Array(n));var inst_11979 = inst_11996;var inst_11980 = (0);var state_12015__$1 = (function (){var statearr_12027 = state_12015;(statearr_12027[(7)] = inst_11979);
(statearr_12027[(8)] = inst_11980);
(statearr_12027[(10)] = inst_11995);
return statearr_12027;
})();var statearr_12028_12054 = state_12015__$1;(statearr_12028_12054[(2)] = null);
(statearr_12028_12054[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (9)))
{var inst_11979 = (state_12015[(7)]);var inst_11993 = cljs.core.vec.call(null,inst_11979);var state_12015__$1 = state_12015;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12015__$1,(11),out,inst_11993);
} else
{if((state_val_12016 === (5)))
{var inst_11979 = (state_12015[(7)]);var inst_11980 = (state_12015[(8)]);var inst_11988 = (state_12015[(11)]);var inst_11983 = (state_12015[(9)]);var inst_11987 = (inst_11979[inst_11980] = inst_11983);var inst_11988__$1 = (inst_11980 + (1));var inst_11989 = (inst_11988__$1 < n);var state_12015__$1 = (function (){var statearr_12029 = state_12015;(statearr_12029[(12)] = inst_11987);
(statearr_12029[(11)] = inst_11988__$1);
return statearr_12029;
})();if(cljs.core.truth_(inst_11989))
{var statearr_12030_12055 = state_12015__$1;(statearr_12030_12055[(1)] = (8));
} else
{var statearr_12031_12056 = state_12015__$1;(statearr_12031_12056[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (14)))
{var inst_12008 = (state_12015[(2)]);var inst_12009 = cljs.core.async.close_BANG_.call(null,out);var state_12015__$1 = (function (){var statearr_12033 = state_12015;(statearr_12033[(13)] = inst_12008);
return statearr_12033;
})();var statearr_12034_12057 = state_12015__$1;(statearr_12034_12057[(2)] = inst_12009);
(statearr_12034_12057[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (10)))
{var inst_11999 = (state_12015[(2)]);var state_12015__$1 = state_12015;var statearr_12035_12058 = state_12015__$1;(statearr_12035_12058[(2)] = inst_11999);
(statearr_12035_12058[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12016 === (8)))
{var inst_11979 = (state_12015[(7)]);var inst_11988 = (state_12015[(11)]);var tmp12032 = inst_11979;var inst_11979__$1 = tmp12032;var inst_11980 = inst_11988;var state_12015__$1 = (function (){var statearr_12036 = state_12015;(statearr_12036[(7)] = inst_11979__$1);
(statearr_12036[(8)] = inst_11980);
return statearr_12036;
})();var statearr_12037_12059 = state_12015__$1;(statearr_12037_12059[(2)] = null);
(statearr_12037_12059[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___12045,out))
;return ((function (switch__7326__auto__,c__7341__auto___12045,out){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_12041 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12041[(0)] = state_machine__7327__auto__);
(statearr_12041[(1)] = (1));
return statearr_12041;
});
var state_machine__7327__auto____1 = (function (state_12015){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_12015);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e12042){if((e12042 instanceof Object))
{var ex__7330__auto__ = e12042;var statearr_12043_12060 = state_12015;(statearr_12043_12060[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12015);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12042;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12061 = state_12015;
state_12015 = G__12061;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_12015){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_12015);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___12045,out))
})();var state__7343__auto__ = (function (){var statearr_12044 = f__7342__auto__.call(null);(statearr_12044[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___12045);
return statearr_12044;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___12045,out))
);
return out;
});
partition = function(n,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition__2.call(this,n,ch);
case 3:
return partition__3.call(this,n,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition.cljs$core$IFn$_invoke$arity$2 = partition__2;
partition.cljs$core$IFn$_invoke$arity$3 = partition__3;
return partition;
})()
;
/**
* Returns a channel that will contain vectors of items taken from ch. New
* vectors will be created whenever (f itm) returns a value that differs from
* the previous item's (f itm).
* 
* The output channel is unbuffered, unless buf-or-n is given
*/
cljs.core.async.partition_by = (function() {
var partition_by = null;
var partition_by__2 = (function (f,ch){return partition_by.call(null,f,ch,null);
});
var partition_by__3 = (function (f,ch,buf_or_n){var out = cljs.core.async.chan.call(null,buf_or_n);var c__7341__auto___12204 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___12204,out){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___12204,out){
return (function (state_12174){var state_val_12175 = (state_12174[(1)]);if((state_val_12175 === (7)))
{var inst_12170 = (state_12174[(2)]);var state_12174__$1 = state_12174;var statearr_12176_12205 = state_12174__$1;(statearr_12176_12205[(2)] = inst_12170);
(statearr_12176_12205[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (1)))
{var inst_12133 = [];var inst_12134 = inst_12133;var inst_12135 = new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123);var state_12174__$1 = (function (){var statearr_12177 = state_12174;(statearr_12177[(7)] = inst_12135);
(statearr_12177[(8)] = inst_12134);
return statearr_12177;
})();var statearr_12178_12206 = state_12174__$1;(statearr_12178_12206[(2)] = null);
(statearr_12178_12206[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (4)))
{var inst_12138 = (state_12174[(9)]);var inst_12138__$1 = (state_12174[(2)]);var inst_12139 = (inst_12138__$1 == null);var inst_12140 = cljs.core.not.call(null,inst_12139);var state_12174__$1 = (function (){var statearr_12179 = state_12174;(statearr_12179[(9)] = inst_12138__$1);
return statearr_12179;
})();if(inst_12140)
{var statearr_12180_12207 = state_12174__$1;(statearr_12180_12207[(1)] = (5));
} else
{var statearr_12181_12208 = state_12174__$1;(statearr_12181_12208[(1)] = (6));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (15)))
{var inst_12164 = (state_12174[(2)]);var state_12174__$1 = state_12174;var statearr_12182_12209 = state_12174__$1;(statearr_12182_12209[(2)] = inst_12164);
(statearr_12182_12209[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (13)))
{var state_12174__$1 = state_12174;var statearr_12183_12210 = state_12174__$1;(statearr_12183_12210[(2)] = null);
(statearr_12183_12210[(1)] = (14));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (6)))
{var inst_12134 = (state_12174[(8)]);var inst_12159 = inst_12134.length;var inst_12160 = (inst_12159 > (0));var state_12174__$1 = state_12174;if(cljs.core.truth_(inst_12160))
{var statearr_12184_12211 = state_12174__$1;(statearr_12184_12211[(1)] = (12));
} else
{var statearr_12185_12212 = state_12174__$1;(statearr_12185_12212[(1)] = (13));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (3)))
{var inst_12172 = (state_12174[(2)]);var state_12174__$1 = state_12174;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_12174__$1,inst_12172);
} else
{if((state_val_12175 === (12)))
{var inst_12134 = (state_12174[(8)]);var inst_12162 = cljs.core.vec.call(null,inst_12134);var state_12174__$1 = state_12174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12174__$1,(15),out,inst_12162);
} else
{if((state_val_12175 === (2)))
{var state_12174__$1 = state_12174;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_12174__$1,(4),ch);
} else
{if((state_val_12175 === (11)))
{var inst_12138 = (state_12174[(9)]);var inst_12142 = (state_12174[(10)]);var inst_12152 = (state_12174[(2)]);var inst_12153 = [];var inst_12154 = inst_12153.push(inst_12138);var inst_12134 = inst_12153;var inst_12135 = inst_12142;var state_12174__$1 = (function (){var statearr_12186 = state_12174;(statearr_12186[(11)] = inst_12154);
(statearr_12186[(7)] = inst_12135);
(statearr_12186[(12)] = inst_12152);
(statearr_12186[(8)] = inst_12134);
return statearr_12186;
})();var statearr_12187_12213 = state_12174__$1;(statearr_12187_12213[(2)] = null);
(statearr_12187_12213[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (9)))
{var inst_12134 = (state_12174[(8)]);var inst_12150 = cljs.core.vec.call(null,inst_12134);var state_12174__$1 = state_12174;return cljs.core.async.impl.ioc_helpers.put_BANG_.call(null,state_12174__$1,(11),out,inst_12150);
} else
{if((state_val_12175 === (5)))
{var inst_12138 = (state_12174[(9)]);var inst_12135 = (state_12174[(7)]);var inst_12142 = (state_12174[(10)]);var inst_12142__$1 = f.call(null,inst_12138);var inst_12143 = cljs.core._EQ_.call(null,inst_12142__$1,inst_12135);var inst_12144 = cljs.core.keyword_identical_QMARK_.call(null,inst_12135,new cljs.core.Keyword("cljs.core.async","nothing","cljs.core.async/nothing",-69252123));var inst_12145 = (inst_12143) || (inst_12144);var state_12174__$1 = (function (){var statearr_12188 = state_12174;(statearr_12188[(10)] = inst_12142__$1);
return statearr_12188;
})();if(cljs.core.truth_(inst_12145))
{var statearr_12189_12214 = state_12174__$1;(statearr_12189_12214[(1)] = (8));
} else
{var statearr_12190_12215 = state_12174__$1;(statearr_12190_12215[(1)] = (9));
}
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (14)))
{var inst_12167 = (state_12174[(2)]);var inst_12168 = cljs.core.async.close_BANG_.call(null,out);var state_12174__$1 = (function (){var statearr_12192 = state_12174;(statearr_12192[(13)] = inst_12167);
return statearr_12192;
})();var statearr_12193_12216 = state_12174__$1;(statearr_12193_12216[(2)] = inst_12168);
(statearr_12193_12216[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (10)))
{var inst_12157 = (state_12174[(2)]);var state_12174__$1 = state_12174;var statearr_12194_12217 = state_12174__$1;(statearr_12194_12217[(2)] = inst_12157);
(statearr_12194_12217[(1)] = (7));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_12175 === (8)))
{var inst_12138 = (state_12174[(9)]);var inst_12142 = (state_12174[(10)]);var inst_12134 = (state_12174[(8)]);var inst_12147 = inst_12134.push(inst_12138);var tmp12191 = inst_12134;var inst_12134__$1 = tmp12191;var inst_12135 = inst_12142;var state_12174__$1 = (function (){var statearr_12195 = state_12174;(statearr_12195[(14)] = inst_12147);
(statearr_12195[(7)] = inst_12135);
(statearr_12195[(8)] = inst_12134__$1);
return statearr_12195;
})();var statearr_12196_12218 = state_12174__$1;(statearr_12196_12218[(2)] = null);
(statearr_12196_12218[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{return null;
}
}
}
}
}
}
}
}
}
}
}
}
}
}
}
});})(c__7341__auto___12204,out))
;return ((function (switch__7326__auto__,c__7341__auto___12204,out){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_12200 = [null,null,null,null,null,null,null,null,null,null,null,null,null,null,null];(statearr_12200[(0)] = state_machine__7327__auto__);
(statearr_12200[(1)] = (1));
return statearr_12200;
});
var state_machine__7327__auto____1 = (function (state_12174){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_12174);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e12201){if((e12201 instanceof Object))
{var ex__7330__auto__ = e12201;var statearr_12202_12219 = state_12174;(statearr_12202_12219[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_12174);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e12201;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__12220 = state_12174;
state_12174 = G__12220;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_12174){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_12174);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___12204,out))
})();var state__7343__auto__ = (function (){var statearr_12203 = f__7342__auto__.call(null);(statearr_12203[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___12204);
return statearr_12203;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___12204,out))
);
return out;
});
partition_by = function(f,ch,buf_or_n){
switch(arguments.length){
case 2:
return partition_by__2.call(this,f,ch);
case 3:
return partition_by__3.call(this,f,ch,buf_or_n);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
partition_by.cljs$core$IFn$_invoke$arity$2 = partition_by__2;
partition_by.cljs$core$IFn$_invoke$arity$3 = partition_by__3;
return partition_by;
})()
;

//# sourceMappingURL=async.js.map