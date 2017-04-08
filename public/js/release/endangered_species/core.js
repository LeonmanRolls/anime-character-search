// Compiled by ClojureScript 1.9.495 {:static-fns true, :optimize-constants true}
goog.provide('endangered_species.core');
goog.require('cljs.core');
goog.require('cljs.core.constants');
goog.require('reagent.core');
goog.require('ajax.core');
if(typeof endangered_species.core.global_state !== 'undefined'){
} else {
endangered_species.core.global_state = reagent.core.atom.cljs$core$IFn$_invoke$arity$1(new cljs.core.PersistentArrayMap(null, 7, [cljs.core.cst$kw$access_DASH_token,"",cljs.core.cst$kw$access_DASH_token_DASH_timer,(3600),cljs.core.cst$kw$client_DASH_id,"leeondamiky-uzchw",cljs.core.cst$kw$client_DASH_secret,"Xb8WheKByt61bGDwipwx",cljs.core.cst$kw$base_DASH_url,"https://anilist.co/api/",cljs.core.cst$kw$search_DASH_result,cljs.core.PersistentVector.EMPTY,cljs.core.cst$kw$value,""], null));
}
endangered_species.core.get_access_token = (function endangered_species$core$get_access_token(){
return ajax.core.POST.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_url.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1("auth/access_token")].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$format,cljs.core.cst$kw$url,cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 3, [cljs.core.cst$kw$grant_type,"client_credentials",cljs.core.cst$kw$client_id,cljs.core.cst$kw$client_DASH_id.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state))),cljs.core.cst$kw$client_secret,cljs.core.cst$kw$client_DASH_secret.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state)))], null),cljs.core.cst$kw$handler,(function (p1__10876_SHARP_){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(endangered_species.core.global_state,cljs.core.update,cljs.core.cst$kw$access_DASH_token,(function (_){
return cljs.core.cst$kw$access_token.cljs$core$IFn$_invoke$arity$1(p1__10876_SHARP_);
}));
}),cljs.core.cst$kw$error_handler,(function (p1__10877_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Error: ",p1__10877_SHARP_], 0));
})], null)], 0));
});
endangered_species.core.search_rslt_handler = (function endangered_species$core$search_rslt_handler(resp){
if(!(clojure.string.blank_QMARK_(cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state)))))){
if(cljs.core.contains_QMARK_(resp,cljs.core.cst$kw$error)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(endangered_species.core.global_state,cljs.core.update,cljs.core.cst$kw$search_DASH_result,(function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$image_url_lge,"http://placekitten.com/300/400",cljs.core.cst$kw$name_first,"No results",cljs.core.cst$kw$name_last,"",cljs.core.cst$kw$name_japanese,"No results",cljs.core.cst$kw$id,"id",cljs.core.cst$kw$info,"No results, please try another search."], null)], null);
}));
} else {
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(endangered_species.core.global_state,cljs.core.update,cljs.core.cst$kw$search_DASH_result,(function (_){
return resp;
}));
}
} else {
return null;
}
});
endangered_species.core.search = (function endangered_species$core$search(query){
if(clojure.string.blank_QMARK_(query)){
return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(endangered_species.core.global_state,cljs.core.update,cljs.core.cst$kw$search_DASH_result,(function (_){
return cljs.core.PersistentVector.EMPTY;
}));
} else {
return ajax.core.GET.cljs$core$IFn$_invoke$arity$variadic([cljs.core.str.cljs$core$IFn$_invoke$arity$1(cljs.core.cst$kw$base_DASH_url.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state)))),cljs.core.str.cljs$core$IFn$_invoke$arity$1([cljs.core.str.cljs$core$IFn$_invoke$arity$1("character/search/"),cljs.core.str.cljs$core$IFn$_invoke$arity$1(query)].join(''))].join(''),cljs.core.array_seq([new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$response_DASH_format,cljs.core.cst$kw$json,cljs.core.cst$kw$params,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$access_token,cljs.core.cst$kw$access_DASH_token.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state)))], null),cljs.core.cst$kw$keywords_QMARK_,true,cljs.core.cst$kw$handler,endangered_species.core.search_rslt_handler,cljs.core.cst$kw$error_handler,(function (p1__10878_SHARP_){
return cljs.core.println.cljs$core$IFn$_invoke$arity$variadic(cljs.core.array_seq(["Error: ",p1__10878_SHARP_], 0));
})], null)], 0));
}
});
endangered_species.core.character_item = (function endangered_species$core$character_item(p__10879){
var map__10882 = p__10879;
var map__10882__$1 = ((((!((map__10882 == null)))?((((map__10882.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10882.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10882):map__10882);
var character = map__10882__$1;
var image_url_lge = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10882__$1,cljs.core.cst$kw$image_url_lge);
var name_first = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10882__$1,cljs.core.cst$kw$name_first);
var name_last = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10882__$1,cljs.core.cst$kw$name_last);
var name_japanese = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10882__$1,cljs.core.cst$kw$name_japanese);
var info = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10882__$1,cljs.core.cst$kw$info);
return new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"twelve columns"], null),new cljs.core.PersistentVector(null, 4, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"row"], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"four columns"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$src,image_url_lge,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$width,"80%"], null)], null)], null)], null),new cljs.core.PersistentVector(null, 5, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"eight columns"], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h3,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Full Name: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_first),cljs.core.str.cljs$core$IFn$_invoke$arity$1(" "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_last)].join('')], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$h5,[cljs.core.str.cljs$core$IFn$_invoke$arity$1("Japanese Name: "),cljs.core.str.cljs$core$IFn$_invoke$arity$1(name_japanese)].join('')], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$maxHeight,"200px",cljs.core.cst$kw$overflowX,"scroll"], null)], null),info], null)], null)], null)], null);
});
endangered_species.core.home_page = (function endangered_species$core$home_page(){
var map__10892 = (cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state));
var map__10892__$1 = ((((!((map__10892 == null)))?((((map__10892.cljs$lang$protocol_mask$partition0$ & (64))) || ((cljs.core.PROTOCOL_SENTINEL === map__10892.cljs$core$ISeq$)))?true:false):false))?cljs.core.apply.cljs$core$IFn$_invoke$arity$2(cljs.core.hash_map,map__10892):map__10892);
var access_token = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10892__$1,cljs.core.cst$kw$access_DASH_token);
var access_token_timer = cljs.core.get.cljs$core$IFn$_invoke$arity$2(map__10892__$1,cljs.core.cst$kw$access_DASH_token_DASH_timer);
return ((function (map__10892,map__10892__$1,access_token,access_token_timer){
return (function (){
return new cljs.core.PersistentVector(null, 6, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$class,"container",cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$textAlign,"center"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$img,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$width,"100%",cljs.core.cst$kw$marginTop,"40px"], null),cljs.core.cst$kw$src,"http://i.imgur.com/QwuYL82.png"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$p,"Powered by ",new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$a,new cljs.core.PersistentArrayMap(null, 2, [cljs.core.cst$kw$href,"https://anilist.co/",cljs.core.cst$kw$target,"_blank"], null),"anilist"], null)], null),new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$input,new cljs.core.PersistentArrayMap(null, 5, [cljs.core.cst$kw$type,"text",cljs.core.cst$kw$value,cljs.core.cst$kw$value.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state))),cljs.core.cst$kw$on_DASH_change,((function (map__10892,map__10892__$1,access_token,access_token_timer){
return (function (x){
var cur_val = x.target.value;
if(cljs.core.empty_QMARK_(cljs.core.cst$kw$search_DASH_result.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state))))){
cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(endangered_species.core.global_state,cljs.core.update,cljs.core.cst$kw$search_DASH_result,((function (cur_val,map__10892,map__10892__$1,access_token,access_token_timer){
return (function (_){
return new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [new cljs.core.PersistentArrayMap(null, 6, [cljs.core.cst$kw$image_url_lge,"http://placekitten.com/300/400",cljs.core.cst$kw$name_first,"Loading..",cljs.core.cst$kw$name_last,"",cljs.core.cst$kw$name_japanese,"Loading...",cljs.core.cst$kw$id,"id",cljs.core.cst$kw$info,"Loading..."], null)], null);
});})(cur_val,map__10892,map__10892__$1,access_token,access_token_timer))
);
} else {
}

endangered_species.core.search(cur_val);

return cljs.core.swap_BANG_.cljs$core$IFn$_invoke$arity$4(endangered_species.core.global_state,cljs.core.update,cljs.core.cst$kw$value,((function (cur_val,map__10892,map__10892__$1,access_token,access_token_timer){
return (function (_){
return cur_val;
});})(cur_val,map__10892,map__10892__$1,access_token,access_token_timer))
);
});})(map__10892,map__10892__$1,access_token,access_token_timer))
,cljs.core.cst$kw$style,new cljs.core.PersistentArrayMap(null, 4, [cljs.core.cst$kw$width,"70%",cljs.core.cst$kw$height,"40px",cljs.core.cst$kw$fontSize,"2em",cljs.core.cst$kw$border,"1px solid black"], null),cljs.core.cst$kw$className,"u-half-width"], null)], null),new cljs.core.PersistentVector(null, 3, 5, cljs.core.PersistentVector.EMPTY_NODE, [cljs.core.cst$kw$div,new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$className,"row"], null),(function (){var iter__7746__auto__ = ((function (map__10892,map__10892__$1,access_token,access_token_timer){
return (function endangered_species$core$home_page_$_iter__10894(s__10895){
return (new cljs.core.LazySeq(null,((function (map__10892,map__10892__$1,access_token,access_token_timer){
return (function (){
var s__10895__$1 = s__10895;
while(true){
var temp__4657__auto__ = cljs.core.seq(s__10895__$1);
if(temp__4657__auto__){
var s__10895__$2 = temp__4657__auto__;
if(cljs.core.chunked_seq_QMARK_(s__10895__$2)){
var c__7744__auto__ = cljs.core.chunk_first(s__10895__$2);
var size__7745__auto__ = cljs.core.count(c__7744__auto__);
var b__10897 = cljs.core.chunk_buffer(size__7745__auto__);
if((function (){var i__10896 = (0);
while(true){
if((i__10896 < size__7745__auto__)){
var character = cljs.core._nth.cljs$core$IFn$_invoke$arity$2(c__7744__auto__,i__10896);
cljs.core.chunk_append(b__10897,cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endangered_species.core.character_item,character], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(character)], null)));

var G__10900 = (i__10896 + (1));
i__10896 = G__10900;
continue;
} else {
return true;
}
break;
}
})()){
return cljs.core.chunk_cons(cljs.core.chunk(b__10897),endangered_species$core$home_page_$_iter__10894(cljs.core.chunk_rest(s__10895__$2)));
} else {
return cljs.core.chunk_cons(cljs.core.chunk(b__10897),null);
}
} else {
var character = cljs.core.first(s__10895__$2);
return cljs.core.cons(cljs.core.with_meta(new cljs.core.PersistentVector(null, 2, 5, cljs.core.PersistentVector.EMPTY_NODE, [endangered_species.core.character_item,character], null),new cljs.core.PersistentArrayMap(null, 1, [cljs.core.cst$kw$key,cljs.core.cst$kw$id.cljs$core$IFn$_invoke$arity$1(character)], null)),endangered_species$core$home_page_$_iter__10894(cljs.core.rest(s__10895__$2)));
}
} else {
return null;
}
break;
}
});})(map__10892,map__10892__$1,access_token,access_token_timer))
,null,null));
});})(map__10892,map__10892__$1,access_token,access_token_timer))
;
return iter__7746__auto__(cljs.core.cst$kw$search_DASH_result.cljs$core$IFn$_invoke$arity$1((cljs.core.deref.cljs$core$IFn$_invoke$arity$1 ? cljs.core.deref.cljs$core$IFn$_invoke$arity$1(endangered_species.core.global_state) : cljs.core.deref.call(null,endangered_species.core.global_state))));
})()], null)], null);
});
;})(map__10892,map__10892__$1,access_token,access_token_timer))
});
endangered_species.core.mount_root = (function endangered_species$core$mount_root(){
endangered_species.core.get_access_token();

return reagent.core.render.cljs$core$IFn$_invoke$arity$2(new cljs.core.PersistentVector(null, 1, 5, cljs.core.PersistentVector.EMPTY_NODE, [endangered_species.core.home_page], null),document.getElementById("app"));
});
endangered_species.core.init_BANG_ = (function endangered_species$core$init_BANG_(){
return endangered_species.core.mount_root();
});
