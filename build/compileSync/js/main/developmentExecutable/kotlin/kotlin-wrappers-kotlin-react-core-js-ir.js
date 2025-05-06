(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-react-core-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-react-core-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-react-core-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-react-core-js-ir'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var get_js = kotlin_kotlin.$_$.x7;
  var protoOf = kotlin_kotlin.$_$.d8;
  var Unit_getInstance = kotlin_kotlin.$_$.v3;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(StateInstance, 'StateInstance');
  initMetadataForClass(StateSetter, 'StateSetter');
  //endregion
  function get_react(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return get_js(_this__u8e3s4);
  }
  function IntrinsicType(tagName) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return tagName;
  }
  function ReactNode(source) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return source;
  }
  function StateInstance() {
  }
  protoOf(StateInstance).component1_7eebsc_k$ = function () {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return this[0];
  };
  protoOf(StateInstance).component2_7eebsb_k$ = function () {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return this[1];
  };
  protoOf(StateInstance).getValue_n1n307_k$ = function (thisRef, property) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return this[0];
  };
  protoOf(StateInstance).setValue_68hi1u_k$ = function (thisRef, property, value) {
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'react.StateSetter.invoke' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this[1](value);
  };
  function StateSetter() {
  }
  protoOf(StateSetter).invoke_wq9ee1_k$ = function (value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this(value);
  };
  protoOf(StateSetter).invoke_mx5z9x_k$ = function (transform) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this(transform);
  };
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = get_react;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-core-js-ir.js.map
