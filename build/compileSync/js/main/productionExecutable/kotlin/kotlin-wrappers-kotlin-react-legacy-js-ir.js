(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-legacy-js-ir'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-react-legacy-js-ir'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-legacy-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-react-legacy-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-react-legacy-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-react-legacy-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-react-legacy-js-ir'], react, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$react, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var createElement = $module$react.createElement;
  var Fragment = $module$react.Fragment;
  var isValidElement = $module$react.isValidElement;
  var Unit_instance = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.n;
  var copyToArray = kotlin_kotlin.$_$.f;
  var VOID = kotlin_kotlin.$_$.a;
  var initMetadataForInterface = kotlin_kotlin.$_$.l;
  var initMetadataForClass = kotlin_kotlin.$_$.k;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.b;
  var first = kotlin_kotlin.$_$.g;
  //endregion
  //region block: pre-declaration
  function child(element) {
    this.e2().g1(element);
  }
  function child_0(type, props, handler) {
    if (handler == null) {
      this.f2(createElement(type, props));
      return Unit_instance;
    }
    // Inline function 'kotlin.apply' call
    var this_0 = RElementBuilder(props);
    handler(this_0);
    // Inline function 'kotlin.collections.toTypedArray' call
    var this_1 = this_0.e2();
    var children = copyToArray(this_1);
    this.f2(createElement.apply(null, [type, props].concat([].slice.call(children.slice()))));
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
      this.g2(type, props, handler);
      tmp_0 = Unit_instance;
    } else {
      child_0(type, props, handler);
      tmp_0 = Unit_instance;
    }
    return tmp_0;
  }
  initMetadataForInterface(RBuilder, 'RBuilder');
  initMetadataForClass(RBuilderImpl, 'RBuilderImpl', RBuilderImpl, VOID, [RBuilder]);
  initMetadataForClass(RElementBuilderImpl, 'RElementBuilderImpl', VOID, RBuilderImpl, [RBuilder, RBuilderImpl]);
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
      return Unit_instance;
    };
  }
  function fc$lambda($func) {
    return function (props) {
      return createElement_0(fc$lambda$lambda($func, props));
    };
  }
  function RBuilder() {
  }
  function RElementBuilder(attrs) {
    return new RElementBuilderImpl(attrs);
  }
  function RElementBuilderImpl(attrs) {
    RBuilderImpl.call(this);
    this.j2_1 = attrs;
  }
  function RBuilderImpl() {
    var tmp = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp.k2_1 = ArrayList_init_$Create$();
  }
  protoOf(RBuilderImpl).e2 = function () {
    return this.k2_1;
  };
  function createBuilder() {
    return new RBuilderImpl();
  }
  function createElement_0(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = createBuilder();
    block(this_0);
    var nodes = this_0.e2();
    var tmp;
    if (nodes.g() === 0) {
      tmp = null;
    } else if (nodes.g() === 1 && isValidElement(first(nodes))) {
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
  protoOf(RBuilderImpl).f2 = child;
  protoOf(RBuilderImpl).g2 = child_0;
  protoOf(RBuilderImpl).h2 = child$default;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = fc;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-legacy-js-ir.js.map
