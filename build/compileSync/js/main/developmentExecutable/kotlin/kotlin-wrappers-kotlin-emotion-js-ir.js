(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', '@emotion/css', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('@emotion/css'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-emotion-js-ir'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'kotlin-wrappers-kotlin-emotion-js-ir'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-emotion-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-emotion-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-emotion-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-emotion-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-emotion-js-ir'], globalThis['@emotion/css'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$_emotion_css_2enn37, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var css = $module$_emotion_css_2enn37.css;
  var toString = kotlin_kotlin.$_$.g8;
  //endregion
  //region block: pre-declaration
  //endregion
  function ClassName(block) {
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    return css(this_0);
  }
  function get_FROM_PERCENTAGE() {
    _init_properties_keyframes_ext_kt__bgn2y();
    return FROM_PERCENTAGE;
  }
  var FROM_PERCENTAGE;
  function get_TO_PERCENTAGE() {
    _init_properties_keyframes_ext_kt__bgn2y();
    return TO_PERCENTAGE;
  }
  var TO_PERCENTAGE;
  var properties_initialized_keyframes_ext_kt_pgb1s8;
  function _init_properties_keyframes_ext_kt__bgn2y() {
    if (!properties_initialized_keyframes_ext_kt_pgb1s8) {
      properties_initialized_keyframes_ext_kt_pgb1s8 = true;
      // Inline function 'csstype.pct' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      FROM_PERCENTAGE = toString(0) + '%';
      // Inline function 'csstype.pct' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      TO_PERCENTAGE = toString(100) + '%';
    }
  }
  function css_0(_this__u8e3s4, block) {
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    _this__u8e3s4.className = css(this_0);
  }
  function set_index(_set____db54di) {
    index = _set____db54di;
  }
  function get_index() {
    return index;
  }
  var index;
  //region block: init
  index = 0;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-emotion-js-ir.js.map
