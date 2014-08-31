// Compiled by ClojureScript 0.0-2311
goog.provide('cljs_test.core');
goog.require('cljs.core');
goog.require('cljs.core.async');
goog.require('cljs.core.async');
goog.require('goog.events');
goog.require('goog.events');
goog.require('goog.dom');
goog.require('goog.dom');
cljs.core.enable_console_print_BANG_.call(null);
cljs_test.core.listen = (function listen(el,type){var out = cljs.core.async.chan.call(null);goog.events.listen(el,type,((function (out){
return (function (ev){return cljs.core.async.put_BANG_.call(null,out,ev);
});})(out))
);
return out;
});
cljs_test.core.consumer = (function consumer(in$){var out = cljs.core.async.chan.call(null);var c__7341__auto___14180 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___14180,out){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___14180,out){
return (function (state_14166){var state_val_14167 = (state_14166[(1)]);if((state_val_14167 === (5)))
{var inst_14161 = (state_14166[(2)]);var inst_14156 = inst_14161;var state_14166__$1 = (function (){var statearr_14168 = state_14166;(statearr_14168[(7)] = inst_14156);
return statearr_14168;
})();var statearr_14169_14181 = state_14166__$1;(statearr_14169_14181[(2)] = null);
(statearr_14169_14181[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14167 === (4)))
{var inst_14164 = (state_14166[(2)]);var state_14166__$1 = state_14166;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14166__$1,inst_14164);
} else
{if((state_val_14167 === (3)))
{var inst_14156 = (state_14166[(7)]);var inst_14158 = inst_14156.type;var inst_14159 = cljs.core.async.put_BANG_.call(null,out,inst_14158);var state_14166__$1 = (function (){var statearr_14170 = state_14166;(statearr_14170[(8)] = inst_14159);
return statearr_14170;
})();return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14166__$1,(5),in$);
} else
{if((state_val_14167 === (2)))
{var inst_14155 = (state_14166[(2)]);var inst_14156 = inst_14155;var state_14166__$1 = (function (){var statearr_14171 = state_14166;(statearr_14171[(7)] = inst_14156);
return statearr_14171;
})();var statearr_14172_14182 = state_14166__$1;(statearr_14172_14182[(2)] = null);
(statearr_14172_14182[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14167 === (1)))
{var state_14166__$1 = state_14166;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14166__$1,(2),in$);
} else
{return null;
}
}
}
}
}
});})(c__7341__auto___14180,out))
;return ((function (switch__7326__auto__,c__7341__auto___14180,out){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_14176 = [null,null,null,null,null,null,null,null,null];(statearr_14176[(0)] = state_machine__7327__auto__);
(statearr_14176[(1)] = (1));
return statearr_14176;
});
var state_machine__7327__auto____1 = (function (state_14166){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_14166);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e14177){if((e14177 instanceof Object))
{var ex__7330__auto__ = e14177;var statearr_14178_14183 = state_14166;(statearr_14178_14183[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14166);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14177;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14184 = state_14166;
state_14166 = G__14184;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_14166){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_14166);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___14180,out))
})();var state__7343__auto__ = (function (){var statearr_14179 = f__7342__auto__.call(null);(statearr_14179[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___14180);
return statearr_14179;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___14180,out))
);
return out;
});
var clicks_14213 = cljs_test.core.listen.call(null,goog.dom.getElement("test"),"click");var derp_14214 = cljs_test.core.consumer.call(null,clicks_14213);var c__7341__auto___14215 = cljs.core.async.chan.call(null,(1));cljs.core.async.impl.dispatch.run.call(null,((function (c__7341__auto___14215,clicks_14213,derp_14214){
return (function (){var f__7342__auto__ = (function (){var switch__7326__auto__ = ((function (c__7341__auto___14215,clicks_14213,derp_14214){
return (function (state_14197){var state_val_14198 = (state_14197[(1)]);if((state_val_14198 === (7)))
{var inst_14188 = (state_14197[(2)]);var inst_14189 = console.log(inst_14188);var state_14197__$1 = (function (){var statearr_14199 = state_14197;(statearr_14199[(7)] = inst_14189);
return statearr_14199;
})();var statearr_14200_14216 = state_14197__$1;(statearr_14200_14216[(2)] = null);
(statearr_14200_14216[(1)] = (2));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (6)))
{var inst_14193 = (state_14197[(2)]);var state_14197__$1 = state_14197;var statearr_14201_14217 = state_14197__$1;(statearr_14201_14217[(2)] = inst_14193);
(statearr_14201_14217[(1)] = (3));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (5)))
{var state_14197__$1 = state_14197;var statearr_14202_14218 = state_14197__$1;(statearr_14202_14218[(2)] = null);
(statearr_14202_14218[(1)] = (6));
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (4)))
{var state_14197__$1 = state_14197;return cljs.core.async.impl.ioc_helpers.take_BANG_.call(null,state_14197__$1,(7),derp_14214);
} else
{if((state_val_14198 === (3)))
{var inst_14195 = (state_14197[(2)]);var state_14197__$1 = state_14197;return cljs.core.async.impl.ioc_helpers.return_chan.call(null,state_14197__$1,inst_14195);
} else
{if((state_val_14198 === (2)))
{var state_14197__$1 = state_14197;var statearr_14203_14219 = state_14197__$1;(statearr_14203_14219[(1)] = (4));

return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{if((state_val_14198 === (1)))
{var state_14197__$1 = state_14197;var statearr_14205_14220 = state_14197__$1;(statearr_14205_14220[(2)] = null);
(statearr_14205_14220[(1)] = (2));
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
});})(c__7341__auto___14215,clicks_14213,derp_14214))
;return ((function (switch__7326__auto__,c__7341__auto___14215,clicks_14213,derp_14214){
return (function() {
var state_machine__7327__auto__ = null;
var state_machine__7327__auto____0 = (function (){var statearr_14209 = [null,null,null,null,null,null,null,null];(statearr_14209[(0)] = state_machine__7327__auto__);
(statearr_14209[(1)] = (1));
return statearr_14209;
});
var state_machine__7327__auto____1 = (function (state_14197){while(true){
var ret_value__7328__auto__ = (function (){try{while(true){
var result__7329__auto__ = switch__7326__auto__.call(null,state_14197);if(cljs.core.keyword_identical_QMARK_.call(null,result__7329__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
continue;
}
} else
{return result__7329__auto__;
}
break;
}
}catch (e14210){if((e14210 instanceof Object))
{var ex__7330__auto__ = e14210;var statearr_14211_14221 = state_14197;(statearr_14211_14221[(5)] = ex__7330__auto__);
cljs.core.async.impl.ioc_helpers.process_exception.call(null,state_14197);
return new cljs.core.Keyword(null,"recur","recur",-437573268);
} else
{throw e14210;

}
}})();if(cljs.core.keyword_identical_QMARK_.call(null,ret_value__7328__auto__,new cljs.core.Keyword(null,"recur","recur",-437573268)))
{{
var G__14222 = state_14197;
state_14197 = G__14222;
continue;
}
} else
{return ret_value__7328__auto__;
}
break;
}
});
state_machine__7327__auto__ = function(state_14197){
switch(arguments.length){
case 0:
return state_machine__7327__auto____0.call(this);
case 1:
return state_machine__7327__auto____1.call(this,state_14197);
}
throw(new Error('Invalid arity: ' + arguments.length));
};
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$0 = state_machine__7327__auto____0;
state_machine__7327__auto__.cljs$core$IFn$_invoke$arity$1 = state_machine__7327__auto____1;
return state_machine__7327__auto__;
})()
;})(switch__7326__auto__,c__7341__auto___14215,clicks_14213,derp_14214))
})();var state__7343__auto__ = (function (){var statearr_14212 = f__7342__auto__.call(null);(statearr_14212[cljs.core.async.impl.ioc_helpers.USER_START_IDX] = c__7341__auto___14215);
return statearr_14212;
})();return cljs.core.async.impl.ioc_helpers.run_state_machine_wrapped.call(null,state__7343__auto__);
});})(c__7341__auto___14215,clicks_14213,derp_14214))
);

//# sourceMappingURL=core.js.map