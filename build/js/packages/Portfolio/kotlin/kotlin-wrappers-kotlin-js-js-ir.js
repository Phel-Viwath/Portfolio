(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-js-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-js-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-js-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-js-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-js-js-ir'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.c8;
  var initMetadataForInterface = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.d;
  var THROW_CCE = kotlin_kotlin.$_$.u9;
  var Annotation = kotlin_kotlin.$_$.l9;
  var initMetadataForClass = kotlin_kotlin.$_$.g7;
  //endregion
  //region block: pre-declaration
  function component1() {
    // Inline function 'kotlin.js.asDynamic' call
    return this[0];
  }
  initMetadataForInterface(JsTuple1, 'JsTuple1');
  function component2() {
    // Inline function 'kotlin.js.asDynamic' call
    return this[1];
  }
  initMetadataForInterface(JsTuple2, 'JsTuple2', VOID, VOID, [JsTuple1]);
  initMetadataForClass(JsoDsl, 'JsoDsl', VOID, VOID, [Annotation]);
  //endregion
  function JsTuple2() {
  }
  function JsTuple1() {
  }
  function JsoDsl() {
  }
  protoOf(JsoDsl).equals = function (other) {
    if (!(other instanceof JsoDsl))
      return false;
    other instanceof JsoDsl || THROW_CCE();
    return true;
  };
  protoOf(JsoDsl).hashCode = function () {
    return 0;
  };
  protoOf(JsoDsl).toString = function () {
    return '@js.core.JsoDsl(' + ')';
  };
  function set(_this__u8e3s4, key, value) {
    // Inline function 'kotlin.js.asDynamic' call
    _this__u8e3s4[key] = value;
  }
  function jso(block) {
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    return this_0;
  }
  function jso_0() {
    return {};
  }
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-js-js-ir.js.map
