(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-browser-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-browser-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-browser-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-browser-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-browser-js-ir'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var protoOf = kotlin_kotlin.$_$.p;
  var initMetadataForObject = kotlin_kotlin.$_$.n;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(HTML, 'HTML');
  //endregion
  function HTML() {
  }
  var HTML_instance;
  function HTML_getInstance() {
    return HTML_instance;
  }
  //region block: init
  HTML_instance = new HTML();
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = HTML_instance;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-browser-js-ir.js.map
