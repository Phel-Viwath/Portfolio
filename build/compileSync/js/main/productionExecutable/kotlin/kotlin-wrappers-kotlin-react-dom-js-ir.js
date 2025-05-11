(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-dom-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-react-dom-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-react-dom-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-react-dom-js-ir'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.p;
  var initMetadataForObject = kotlin_kotlin.$_$.o;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(ReactHTML, 'ReactHTML');
  initMetadataForObject(ReactSVG, 'ReactSVG');
  //endregion
  function ReactHTML() {
  }
  var ReactHTML_instance;
  function ReactHTML_getInstance() {
    return ReactHTML_instance;
  }
  function ReactSVG() {
  }
  var ReactSVG_instance;
  function ReactSVG_getInstance() {
    return ReactSVG_instance;
  }
  //region block: init
  ReactHTML_instance = new ReactHTML();
  ReactSVG_instance = new ReactSVG();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = ReactHTML_instance;
  _.$_$.b = ReactSVG_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-dom-js-ir.js.map
