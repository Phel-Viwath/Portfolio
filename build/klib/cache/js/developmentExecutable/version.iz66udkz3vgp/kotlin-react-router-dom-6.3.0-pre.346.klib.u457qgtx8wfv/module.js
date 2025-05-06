(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-router-dom-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-react-router-dom-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-react-router-dom-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-react-router-dom-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-react-router-dom-js-ir'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.d8;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  //endregion
  //region block: pre-declaration
  initMetadataForClass(NavigateFunction, 'NavigateFunction');
  //endregion
  function NavigateFunction() {
  }
  protoOf(NavigateFunction).invoke_nokysy_k$ = function (to) {
    // Inline function 'kotlin.js.asDynamic' call
    this(to);
  };
  protoOf(NavigateFunction).invoke_mqgt5r_k$ = function (to, options) {
    // Inline function 'kotlin.js.asDynamic' call
    this(to, options);
  };
  protoOf(NavigateFunction).invoke_8kta1c_k$ = function (delta) {
    // Inline function 'kotlin.js.asDynamic' call
    this(delta);
  };
  return _;
}));
