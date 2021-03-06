// Compiled by ClojureScript 1.9.495 {:static-fns true, :optimize-constants true}
goog.provide('reagent.debug');
goog.require('cljs.core');
goog.require('cljs.core.constants');
reagent.debug.has_console = typeof console !== 'undefined';
reagent.debug.tracking = false;
if(typeof reagent.debug.warnings !== 'undefined'){
} else {
reagent.debug.warnings = (cljs.core.atom.cljs$core$IFn$_invoke$arity$1 ? cljs.core.atom.cljs$core$IFn$_invoke$arity$1(null) : cljs.core.atom.call(null,null));
}
if(typeof reagent.debug.track_console !== 'undefined'){
} else {
reagent.debug.track_console = (function (){var o = ({});
o.warn = ((function (o){
return (function() { 
var G__14001__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$warn], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14001 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14002__i = 0, G__14002__a = new Array(arguments.length -  0);
while (G__14002__i < G__14002__a.length) {G__14002__a[G__14002__i] = arguments[G__14002__i + 0]; ++G__14002__i;}
  args = new cljs.core.IndexedSeq(G__14002__a,0);
} 
return G__14001__delegate.call(this,args);};
G__14001.cljs$lang$maxFixedArity = 0;
G__14001.cljs$lang$applyTo = (function (arglist__14003){
var args = cljs.core.seq(arglist__14003);
return G__14001__delegate(args);
});
G__14001.cljs$core$IFn$_invoke$arity$variadic = G__14001__delegate;
return G__14001;
})()
;})(o))
;

o.error = ((function (o){
return (function() { 
var G__14004__delegate = function (args){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$variadic(reagent.debug.warnings,cljs.core.update_in,new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$error], null),cljs.core.conj,cljs.core.array_seq([cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.str,args)], 0));
};
var G__14004 = function (var_args){
var args = null;
if (arguments.length > 0) {
var G__14005__i = 0, G__14005__a = new Array(arguments.length -  0);
while (G__14005__i < G__14005__a.length) {G__14005__a[G__14005__i] = arguments[G__14005__i + 0]; ++G__14005__i;}
  args = new cljs.core.IndexedSeq(G__14005__a,0);
} 
return G__14004__delegate.call(this,args);};
G__14004.cljs$lang$maxFixedArity = 0;
G__14004.cljs$lang$applyTo = (function (arglist__14006){
var args = cljs.core.seq(arglist__14006);
return G__14004__delegate(args);
});
G__14004.cljs$core$IFn$_invoke$arity$variadic = G__14004__delegate;
return G__14004;
})()
;})(o))
;

return o;
})();
}
reagent.debug.track_warnings = (function reagent$debug$track_warnings(f){
reagent.debug.tracking = true;

(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

(f.cljs$core$IFn$_invoke$arity$0 ? f.cljs$core$IFn$_invoke$arity$0() : f.call(null));

var warns = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(reagent.debug.warnings) : cljs.core.deref.call(null,reagent.debug.warnings));
(cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2 ? cljs.core.reset_BANG_.cljs$core$IFn$_invoke$arity$2(reagent.debug.warnings,null) : cljs.core.reset_BANG_.call(null,reagent.debug.warnings,null));

reagent.debug.tracking = false;

return warns;
});
