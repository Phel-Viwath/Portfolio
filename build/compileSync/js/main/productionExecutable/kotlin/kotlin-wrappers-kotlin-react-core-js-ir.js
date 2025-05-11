(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-core-js-ir'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-react-core-js-ir'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-core-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-react-core-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-react-core-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-react-core-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-react-core-js-ir'], react, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$react, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var useEffect = $module$react.useEffect;
  var Unit_instance = kotlin_kotlin.$_$.e;
  //endregion
  //region block: pre-declaration
  //endregion
  function createEffectCallback(effect) {
    return createEffectCallback$lambda(effect);
  }
  function buildCleanup(cleanups) {
    // Inline function 'kotlin.collections.isEmpty' call
    if (cleanups.length === 0)
      return undefined;
    return buildCleanup$lambda(cleanups);
  }
  function createEffectCallback$lambda($effect) {
    return function () {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var cleanups = [];
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $effect(cleanups);
      return buildCleanup(cleanups);
    };
  }
  function buildCleanup$lambda($cleanups) {
    return function () {
      var indexedObject = $cleanups;
      var inductionVariable = 0;
      var last = indexedObject.length;
      while (inductionVariable < last) {
        var cleanup = indexedObject[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        cleanup();
      }
      return Unit_instance;
    };
  }
  function useEffect_0(effect) {
    var callback = createEffectCallback(effect);
    useEffect(callback);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = useEffect_0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-core-js-ir.js.map
