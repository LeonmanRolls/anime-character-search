// Compiled by ClojureScript 1.9.495 {:static-fns true, :optimize-constants true}
goog.provide('ajax.xml_http_request');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('ajax.protocols');
ajax.xml_http_request.ready_state = (function ajax$xml_http_request$ready_state(e){
return new cljs.core.PersistentArrayMap(null, 5, [(0),cljs.core.cst$kw$not_DASH_initialized,(1),cljs.core.cst$kw$connection_DASH_established,(2),cljs.core.cst$kw$request_DASH_received,(3),cljs.core.cst$kw$processing_DASH_request,(4),cljs.core.cst$kw$response_DASH_ready], null).call(null,e.target.readyState);
});
XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxImpl$_js_ajax_request$arity$3 = (function (this$,p__13116,handler){
var map__13117 = p__13116;
var map__13117__$1 = ((((!((map__13117 == null)))?((((map__13117.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__13117.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__13117):map__13117);
var uri = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13117__$1,cljs.core.cst$kw$uri);
var method = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13117__$1,cljs.core.cst$kw$method);
var body = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13117__$1,cljs.core.cst$kw$body);
var headers = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13117__$1,cljs.core.cst$kw$headers);
var timeout = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13117__$1,cljs.core.cst$kw$timeout,(0));
var with_credentials = cljs.core.get.cljs$core$IFn$_invoke$arity$3(map__13117__$1,cljs.core.cst$kw$with_DASH_credentials,false);
var response_format = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__13117__$1,cljs.core.cst$kw$response_DASH_format);
var this$__$1 = this;
this$__$1.withCredentials = with_credentials;

this$__$1.onreadystatechange = ((function (this$__$1,map__13117,map__13117__$1,uri,method,body,headers,timeout,with_credentials,response_format){
return (function (p1__13115_SHARP_){
if(cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2(cljs.core.cst$kw$response_DASH_ready,ajax.xml_http_request.ready_state(p1__13115_SHARP_))){
return (handler.cljs$core$IFn$_invoke$arity$1 ? handler.cljs$core$IFn$_invoke$arity$1(this$__$1) : handler.call(null,this$__$1));
} else {
return null;
}
});})(this$__$1,map__13117,map__13117__$1,uri,method,body,headers,timeout,with_credentials,response_format))
;

this$__$1.open(method,uri,true);

this$__$1.timeout = timeout;

var temp__4657__auto___13129 = cljs.core.cst$kw$type.cljs$core$IFn$_invoke$arity$1(response_format);
if(cljs.core.truth_(temp__4657__auto___13129)){
var response_type_13130 = temp__4657__auto___13129;
this$__$1.responseType = cljs.core.name(response_type_13130);
} else {
}

var seq__13119_13131 = cljs.core.seq(headers);
var chunk__13120_13132 = null;
var count__13121_13133 = (0);
var i__13122_13134 = (0);
while(true){
if((i__13122_13134 < count__13121_13133)){
var vec__13123_13135 = chunk__13120_13132.cljs$core$IIndexed$_nth$arity$2(null,i__13122_13134);
var k_13136 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13123_13135,(0),null);
var v_13137 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13123_13135,(1),null);
this$__$1.setRequestHeader(k_13136,v_13137);

var G__13138 = seq__13119_13131;
var G__13139 = chunk__13120_13132;
var G__13140 = count__13121_13133;
var G__13141 = (i__13122_13134 + (1));
seq__13119_13131 = G__13138;
chunk__13120_13132 = G__13139;
count__13121_13133 = G__13140;
i__13122_13134 = G__13141;
continue;
} else {
var temp__4657__auto___13142 = cljs.core.seq(seq__13119_13131);
if(temp__4657__auto___13142){
var seq__13119_13143__$1 = temp__4657__auto___13142;
if(cljs.core.chunked_seq_QMARK_(seq__13119_13143__$1)){
var c__7777__auto___13144 = cljs.core.chunk_first(seq__13119_13143__$1);
var G__13145 = cljs.core.chunk_rest(seq__13119_13143__$1);
var G__13146 = c__7777__auto___13144;
var G__13147 = cljs.core.count(c__7777__auto___13144);
var G__13148 = (0);
seq__13119_13131 = G__13145;
chunk__13120_13132 = G__13146;
count__13121_13133 = G__13147;
i__13122_13134 = G__13148;
continue;
} else {
var vec__13126_13149 = cljs.core.first(seq__13119_13143__$1);
var k_13150 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13126_13149,(0),null);
var v_13151 = cljs.core.nth.cljs$core$IFn$_invoke$arity$3(vec__13126_13149,(1),null);
this$__$1.setRequestHeader(k_13150,v_13151);

var G__13152 = cljs.core.next(seq__13119_13143__$1);
var G__13153 = null;
var G__13154 = (0);
var G__13155 = (0);
seq__13119_13131 = G__13152;
chunk__13120_13132 = G__13153;
count__13121_13133 = G__13154;
i__13122_13134 = G__13155;
continue;
}
} else {
}
}
break;
}

this$__$1.send((function (){var or__6958__auto__ = body;
if(cljs.core.truth_(or__6958__auto__)){
return or__6958__auto__;
} else {
return "";
}
})());

return this$__$1;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxRequest$_abort$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.abort();
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$ = cljs.core.PROTOCOL_SENTINEL;

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_body$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.response;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.status;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_status_text$arity$1 = (function (this$){
var this$__$1 = this;
return this$__$1.statusText;
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_get_response_header$arity$2 = (function (this$,header){
var this$__$1 = this;
return this$__$1.getResponseHeader(header);
});

XMLHttpRequest.prototype.ajax$protocols$AjaxResponse$_was_aborted$arity$1 = (function (this$){
var this$__$1 = this;
return cljs.core._EQ_.cljs$core$IFn$_invoke$arity$2((0),this$__$1.readyState);
});
