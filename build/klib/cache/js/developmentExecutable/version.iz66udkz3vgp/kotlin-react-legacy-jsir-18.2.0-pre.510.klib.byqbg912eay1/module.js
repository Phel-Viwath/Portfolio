(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin-kotlin-stdlib.js', './kotlin-wrappers-kotlin-react-core-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin-kotlin-stdlib.js'), require('./kotlin-wrappers-kotlin-react-core-js-ir.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-legacy-js-ir'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-react-legacy-js-ir'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-legacy-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-react-legacy-js-ir'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-react-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-legacy-js-ir'. Its dependency 'kotlin-wrappers-kotlin-react-core-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-core-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-react-legacy-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-react-legacy-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-react-legacy-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-react-legacy-js-ir'], react, globalThis['kotlin-kotlin-stdlib'], globalThis['kotlin-wrappers-kotlin-react-core-js-ir']);
  }
}(function (_, $module$react, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core) {
  'use strict';
  //region block: imports
  var createElement = $module$react.createElement;
  var Children = $module$react.Children;
  var Fragment = $module$react.Fragment;
  var isValidElement = $module$react.isValidElement;
  var Unit_getInstance = kotlin_kotlin.$_$.v3;
  var toString = kotlin_kotlin.$_$.g8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var protoOf = kotlin_kotlin.$_$.d8;
  var copyToArray = kotlin_kotlin.$_$.b5;
  var VOID = kotlin_kotlin.$_$.d;
  var get_react = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.a;
  var addAll = kotlin_kotlin.$_$.n4;
  var initMetadataForInterface = kotlin_kotlin.$_$.k7;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var first = kotlin_kotlin.$_$.f5;
  //endregion
  //region block: pre-declaration
  function child(element) {
    this.get_childList_6xpv01_k$().add_utx5q5_k$(element);
  }
  function unaryPlus(_this__u8e3s4) {
    this.child_awokkk_k$(_this__u8e3s4);
  }
  function unaryPlus_0(_this__u8e3s4) {
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.child_awokkk_k$(_this__u8e3s4);
  }
  function child_0(type, props, handler) {
    if (handler == null) {
      this.child_awokkk_k$(createElement(type, props));
      return Unit_getInstance();
    }
    // Inline function 'kotlin.apply' call
    var this_0 = RElementBuilder_0(props);
    handler(this_0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this_0.get_childList_6xpv01_k$();
    var children = copyToArray(this_1);
    this.child_awokkk_k$(createElement.apply(null, [type, props].concat([].slice.call(children.slice()))));
  }
  function child$default(type, props, handler, $super) {
    var tmp;
    if (props === VOID) {
      // Inline function 'js.core.jso' call
      tmp = {};
    } else {
      tmp = props;
    }
    props = tmp;
    handler = handler === VOID ? null : handler;
    var tmp_0;
    if ($super === VOID) {
      this.child_a6f9ep_k$(type, props, handler);
      tmp_0 = Unit_getInstance();
    } else {
      child_0(type, props, handler);
      tmp_0 = Unit_getInstance();
    }
    return tmp_0;
  }
  function invoke(_this__u8e3s4) {
    this.child_awokkk_k$(createElement(_this__u8e3s4));
  }
  function invoke_0(_this__u8e3s4, handler) {
    this.child$default_srqz40_k$(_this__u8e3s4, VOID, handler);
  }
  function invoke_1(_this__u8e3s4, value, handler) {
    this.child$default_srqz40_k$(_this__u8e3s4, VOID, RBuilder$invoke$lambda(value, handler));
  }
  function invoke_2(_this__u8e3s4, handler) {
    this.child$default_srqz40_k$(_this__u8e3s4, VOID, RBuilder$invoke$lambda_0(handler));
  }
  function child_1(klazz, handler) {
    this.invoke_d4n576_k$(get_react(klazz), handler);
  }
  function children(_this__u8e3s4) {
    addAll(this.get_childList_6xpv01_k$(), Children.toArray(_this__u8e3s4.children));
  }
  initMetadataForInterface(RBuilder, 'RBuilder');
  function attrs(handler) {
    handler(this.get_attrs_iou0l5_k$());
  }
  function set_key(value) {
    this.get_attrs_iou0l5_k$().key = value;
  }
  function get_key() {
    throw IllegalStateException_init_$Create$(toString(''));
  }
  function set_ref(value) {
    // Inline function 'react.ref' call
    // Inline function 'kotlin.js.asDynamic' call
    this.get_attrs_iou0l5_k$().ref = value;
  }
  function get_ref() {
    throw IllegalStateException_init_$Create$(toString(''));
  }
  initMetadataForInterface(RElementBuilder, 'RElementBuilder', VOID, VOID, [RBuilder]);
  initMetadataForClass(RBuilderImpl, 'RBuilderImpl', RBuilderImpl, VOID, [RBuilder]);
  initMetadataForClass(RElementBuilderImpl, 'RElementBuilderImpl', VOID, RBuilderImpl, [RElementBuilder, RBuilderImpl]);
  //endregion
  function fc(func) {
    var component = fc$lambda(func);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return component;
  }
  function fc$lambda$lambda($func, $props) {
    return function ($this$createElement) {
      $func($this$createElement, $props);
      return Unit_getInstance();
    };
  }
  function fc$lambda($func) {
    return function (props) {
      return createElement_0(fc$lambda$lambda($func, props));
    };
  }
  function set_ref_0(_this__u8e3s4, value) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4.ref = value;
  }
  function get_ref_0(_this__u8e3s4) {
    throw IllegalStateException_init_$Create$(toString(''));
  }
  function RBuilder$invoke$lambda($value, $handler) {
    return function ($this$child) {
      $this$child.get_attrs_iou0l5_k$().value = $value;
      $handler($this$child);
      return Unit_getInstance();
    };
  }
  function RBuilder$invoke$lambda$lambda$lambda($handler, $value) {
    return function ($this$createElement) {
      $handler($this$createElement, $value);
      return Unit_getInstance();
    };
  }
  function RBuilder$invoke$lambda$lambda($handler) {
    return function (value) {
      return createElement_0(RBuilder$invoke$lambda$lambda$lambda($handler, value));
    };
  }
  function RBuilder$invoke$lambda_0($handler) {
    return function ($this$child) {
      var tmp = $this$child.get_attrs_iou0l5_k$();
      tmp.children = RBuilder$invoke$lambda$lambda($handler);
      return Unit_getInstance();
    };
  }
  function RBuilder() {
  }
  function RElementBuilder() {
  }
  function RElementBuilder_0(attrs) {
    return new RElementBuilderImpl(attrs);
  }
  function RElementBuilderImpl(attrs) {
    RBuilderImpl.call(this);
    this.attrs_1 = attrs;
  }
  protoOf(RElementBuilderImpl).get_attrs_iou0l5_k$ = function () {
    return this.attrs_1;
  };
  function RBuilderImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.childList_1 = ArrayList_init_$Create$();
  }
  protoOf(RBuilderImpl).get_childList_6xpv01_k$ = function () {
    return this.childList_1;
  };
  function createBuilder() {
    return new RBuilderImpl();
  }
  function createElement_0(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = createBuilder();
    block(this_0);
    var nodes = this_0.get_childList_6xpv01_k$();
    var tmp;
    if (nodes.get_size_woubt6_k$() === 0) {
      tmp = null;
    } else if (nodes.get_size_woubt6_k$() === 1 && isValidElement(first(nodes))) {
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = first(nodes);
    } else {
      var tmp_0 = Fragment;
      // Inline function 'kotlin.collections.toTypedArray' call
      var tmp$ret$3 = copyToArray(nodes);
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      tmp = createElement.apply(null, [tmp_0, VOID].concat([].slice.call(tmp$ret$3.slice())));
    }
    return tmp;
  }
  //region block: post-declaration
  protoOf(RBuilderImpl).child_awokkk_k$ = child;
  protoOf(RBuilderImpl).child_a6f9ep_k$ = child_0;
  protoOf(RBuilderImpl).child$default_srqz40_k$ = child$default;
  protoOf(RBuilderImpl).child_c37hz_k$ = child_1;
  protoOf(RBuilderImpl).unaryPlus_yopcnr_k$ = unaryPlus;
  protoOf(RBuilderImpl).unaryPlus_76unot_k$ = unaryPlus_0;
  protoOf(RBuilderImpl).invoke_f0iwik_k$ = invoke;
  protoOf(RBuilderImpl).invoke_d4n576_k$ = invoke_0;
  protoOf(RBuilderImpl).invoke_3ux254_k$ = invoke_1;
  protoOf(RBuilderImpl).invoke_8kf2rs_k$ = invoke_2;
  protoOf(RBuilderImpl).children_l1i4m9_k$ = children;
  protoOf(RElementBuilderImpl).attrs_dxb5jv_k$ = attrs;
  protoOf(RElementBuilderImpl).set_key_io6pwr_k$ = set_key;
  protoOf(RElementBuilderImpl).get_key_18j28a_k$ = get_key;
  protoOf(RElementBuilderImpl).set_ref_sq3nd_k$ = set_ref;
  protoOf(RElementBuilderImpl).get_ref_18ix1y_k$ = get_ref;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fc;
  //endregion
  return _;
}));
