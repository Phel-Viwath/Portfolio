(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-csstype-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-csstype-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-csstype-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-csstype-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-csstype-js-ir'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var toString = kotlin_kotlin.$_$.f8;
  var Unit_getInstance = kotlin_kotlin.$_$.v3;
  var protoOf = kotlin_kotlin.$_$.c8;
  var initMetadataForInterface = kotlin_kotlin.$_$.i7;
  var VOID = kotlin_kotlin.$_$.d;
  var initMetadataForClass = kotlin_kotlin.$_$.g7;
  //endregion
  //region block: pre-declaration
  function fontFace(block) {
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2 = '@font-face';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp2] = this_0;
  }
  function invoke(_this__u8e3s4, block) {
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[_this__u8e3s4] = this_0;
  }
  function invoke_0(_this__u8e3s4, block) {
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '.' + toString(_this__u8e3s4);
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function invoke_1(_this__u8e3s4, block) {
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[_this__u8e3s4] = this_0;
  }
  function and(className, block) {
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '&.' + toString(className);
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  initMetadataForInterface(RuleBuilder, 'RuleBuilder');
  function cue(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::cue(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function cue_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::cue(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function cueRegion(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::cue-region(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function cueRegion_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::cue-region(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function part(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::part(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function part_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::part(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function slotted(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::slotted(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function slotted_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::slotted(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function dir(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':dir(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function dir_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':dir(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function has(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':has(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function has_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':has(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function host(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':host(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function host_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':host(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function hostContext(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':host-context(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function hostContext_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':host-context(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function is(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':is(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function is_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':is(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function lang(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':lang(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function lang_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':lang(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function not(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':not(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function not_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':not(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthChild(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-child(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthChild_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-child(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthLastChild(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-last-child(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthLastChild_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-last-child(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthLastOfType(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-last-of-type(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthLastOfType_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-last-of-type(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthOfType(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-of-type(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthOfType_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-of-type(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function where(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':where(' + toString(selector) + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function where_0(selector, block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':where(' + selector + ')';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  initMetadataForInterface(AdvancedPseudosRuleBuilder, 'AdvancedPseudosRuleBuilder', VOID, VOID, [RuleBuilder]);
  function after(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this['::after'] = this_0;
  }
  function backdrop(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::backdrop';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function before(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::before';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function cue_1(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this['::cue'] = this_0;
  }
  function cueRegion_1(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::cue-region';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function firstLetter(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::first-letter';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function firstLine(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::first-line';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function grammarError(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::grammar-error';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function marker(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::marker';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function placeholder(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::placeholder';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function selection(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::selection';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function spellingError(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::spelling-error';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function targetText(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = '::target-text';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function active(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':active'] = this_0;
  }
  function anyLink(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':any-link';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function blank(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':blank'] = this_0;
  }
  function checked(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':checked';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function current(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':current';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function default_0(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':default';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function defined(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':defined';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function disabled(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':disabled';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function empty(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':empty'] = this_0;
  }
  function enabled(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':enabled';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function first(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':first'] = this_0;
  }
  function firstChild(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':first-child';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function firstOfType(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':first-of-type';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function focus(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':focus'] = this_0;
  }
  function focusVisible(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':focus-visible';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function focusWithin(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':focus-within';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function fullscreen(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':fullscreen';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function future(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':future'] = this_0;
  }
  function hover(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':hover'] = this_0;
  }
  function inRange(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':in-range';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function indeterminate(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':indeterminate';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function invalid(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':invalid';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function lastChild(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':last-child';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function lastOfType(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':last-of-type';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function left(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':left'] = this_0;
  }
  function link(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':link'] = this_0;
  }
  function localLink(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':local-link';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthCol(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-col';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function nthLastCol(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':nth-last-col';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function onlyChild(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':only-child';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function onlyOfType(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':only-of-type';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function optional(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':optional';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function outOfRange(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':out-of-range';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function past(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':past'] = this_0;
  }
  function paused(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':paused'] = this_0;
  }
  function pictureInPicture(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':picture-in-picture';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function placeholderShown(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':placeholder-shown';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function playing(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':playing';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function readOnly(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':read-only';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function readWrite(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':read-write';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function required(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':required';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function right(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':right'] = this_0;
  }
  function root(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':root'] = this_0;
  }
  function scope(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':scope'] = this_0;
  }
  function target(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':target'] = this_0;
  }
  function targetWithin(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':target-within';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function userInvalid(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':user-invalid';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function userValid(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':user-valid';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  function valid(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[':valid'] = this_0;
  }
  function visited(block) {
    // Inline function 'csstype.RuleBuilder.invoke' call
    // Inline function 'csstype.Selector' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.RuleBuilder.invoke' call
    var tmp1 = ':visited';
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    block(this_0);
    // Inline function 'js.core.set' call
    // Inline function 'kotlin.js.asDynamic' call
    this[tmp1] = this_0;
  }
  initMetadataForInterface(SimplePseudosRuleBuilder, 'SimplePseudosRuleBuilder', VOID, VOID, [RuleBuilder]);
  initMetadataForInterface(PseudosRuleBuilder, 'PseudosRuleBuilder', VOID, VOID, [AdvancedPseudosRuleBuilder, SimplePseudosRuleBuilder]);
  initMetadataForClass(PropertiesBuilder, 'PropertiesBuilder', VOID, VOID, [RuleBuilder, PseudosRuleBuilder]);
  //endregion
  function AdvancedPseudosRuleBuilder() {
  }
  function Border(width, style, color) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(width) + ' ' + toString(style) + ' ' + toString(color);
  }
  function BoxShadow(offsetX, offsetY, blurRadius, color) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(offsetX) + ' ' + toString(offsetY) + ' ' + toString(blurRadius) + ' ' + toString(color);
  }
  function BoxShadow_0(offsetX, offsetY, color) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(offsetX) + ' ' + toString(offsetY) + ' ' + toString(color);
  }
  function Color(value) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return value;
  }
  function rgba(red, green, blue, alpha) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return 'rgba(' + red + ',' + green + ',' + blue + ',' + alpha + ')';
  }
  function get_px(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(_this__u8e3s4) + 'px';
  }
  function get_em(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(_this__u8e3s4) + 'em';
  }
  function Margin(vertical, horizontal) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(vertical) + ' ' + toString(horizontal);
  }
  function Margin_0(top, right, bottom, left) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(top) + ' ' + toString(right) + ' ' + toString(bottom) + ' ' + toString(left);
  }
  function Padding(vertical, horizontal) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(vertical) + ' ' + toString(horizontal);
  }
  function get_pct(_this__u8e3s4) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return toString(_this__u8e3s4) + '%';
  }
  function PseudosRuleBuilder() {
  }
  function RuleBuilder() {
  }
  function Selector(syntax) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return syntax;
  }
  function SimplePseudosRuleBuilder() {
  }
  function PropertiesBuilder() {
  }
  protoOf(PropertiesBuilder).unaryPlus_i83tz4_k$ = function (_this__u8e3s4) {
    Object.assign(this, _this__u8e3s4);
  };
  //region block: post-declaration
  protoOf(PropertiesBuilder).left_m5upwm_k$ = left;
  protoOf(PropertiesBuilder).right_qpm8md_k$ = right;
  protoOf(PropertiesBuilder).fontFace_pjh3h6_k$ = fontFace;
  protoOf(PropertiesBuilder).invoke_mvwjbb_k$ = invoke;
  protoOf(PropertiesBuilder).invoke_zalf3r_k$ = invoke_0;
  protoOf(PropertiesBuilder).invoke_qawmer_k$ = invoke_1;
  protoOf(PropertiesBuilder).and_fzjomw_k$ = and;
  protoOf(PropertiesBuilder).cue_76xwxm_k$ = cue;
  protoOf(PropertiesBuilder).cue_94tou2_k$ = cue_0;
  protoOf(PropertiesBuilder).cue_qzlq5q_k$ = cue_1;
  protoOf(PropertiesBuilder).cueRegion_7l5ew6_k$ = cueRegion;
  protoOf(PropertiesBuilder).cueRegion_pitvwu_k$ = cueRegion_0;
  protoOf(PropertiesBuilder).cueRegion_jacc6e_k$ = cueRegion_1;
  protoOf(PropertiesBuilder).part_tjzcue_k$ = part;
  protoOf(PropertiesBuilder).part_v7nj2e_k$ = part_0;
  protoOf(PropertiesBuilder).slotted_y8q5k_k$ = slotted;
  protoOf(PropertiesBuilder).slotted_3bv0is_k$ = slotted_0;
  protoOf(PropertiesBuilder).dir_32zfxc_k$ = dir;
  protoOf(PropertiesBuilder).dir_c2xz2s_k$ = dir_0;
  protoOf(PropertiesBuilder).has_wkcvgt_k$ = has;
  protoOf(PropertiesBuilder).has_xtol5t_k$ = has_0;
  protoOf(PropertiesBuilder).host_l3hvyz_k$ = host;
  protoOf(PropertiesBuilder).host_f1xx2n_k$ = host_0;
  protoOf(PropertiesBuilder).hostContext_gk3cxm_k$ = hostContext;
  protoOf(PropertiesBuilder).hostContext_bnyez6_k$ = hostContext_0;
  protoOf(PropertiesBuilder).is_833foj_k$ = is;
  protoOf(PropertiesBuilder).is_1kmfn5_k$ = is_0;
  protoOf(PropertiesBuilder).lang_30oqht_k$ = lang;
  protoOf(PropertiesBuilder).lang_i852tn_k$ = lang_0;
  protoOf(PropertiesBuilder).not_lkgkva_k$ = not;
  protoOf(PropertiesBuilder).not_9bj97q_k$ = not_0;
  protoOf(PropertiesBuilder).nthChild_5bfs0d_k$ = nthChild;
  protoOf(PropertiesBuilder).nthChild_k5gj33_k$ = nthChild_0;
  protoOf(PropertiesBuilder).nthLastChild_g04s7r_k$ = nthLastChild;
  protoOf(PropertiesBuilder).nthLastChild_bz24mj_k$ = nthLastChild_0;
  protoOf(PropertiesBuilder).nthLastOfType_vppx8k_k$ = nthLastOfType;
  protoOf(PropertiesBuilder).nthLastOfType_1f1u0g_k$ = nthLastOfType_0;
  protoOf(PropertiesBuilder).nthOfType_7totq2_k$ = nthOfType;
  protoOf(PropertiesBuilder).nthOfType_1ftdy_k$ = nthOfType_0;
  protoOf(PropertiesBuilder).where_q56jly_k$ = where;
  protoOf(PropertiesBuilder).where_95de1e_k$ = where_0;
  protoOf(PropertiesBuilder).after_73y3kr_k$ = after;
  protoOf(PropertiesBuilder).backdrop_hl6wd1_k$ = backdrop;
  protoOf(PropertiesBuilder).before_nns34y_k$ = before;
  protoOf(PropertiesBuilder).firstLetter_qhb47f_k$ = firstLetter;
  protoOf(PropertiesBuilder).firstLine_mbl0fx_k$ = firstLine;
  protoOf(PropertiesBuilder).grammarError_slt6kg_k$ = grammarError;
  protoOf(PropertiesBuilder).marker_l96gqv_k$ = marker;
  protoOf(PropertiesBuilder).placeholder_s7ti0e_k$ = placeholder;
  protoOf(PropertiesBuilder).selection_pcdv7v_k$ = selection;
  protoOf(PropertiesBuilder).spellingError_asmq25_k$ = spellingError;
  protoOf(PropertiesBuilder).targetText_x8oyl_k$ = targetText;
  protoOf(PropertiesBuilder).active_sbcd8b_k$ = active;
  protoOf(PropertiesBuilder).anyLink_ozslq3_k$ = anyLink;
  protoOf(PropertiesBuilder).blank_k06yhf_k$ = blank;
  protoOf(PropertiesBuilder).checked_dox0zq_k$ = checked;
  protoOf(PropertiesBuilder).current_gcea1k_k$ = current;
  protoOf(PropertiesBuilder).default_6fzz8g_k$ = default_0;
  protoOf(PropertiesBuilder).defined_5irvo8_k$ = defined;
  protoOf(PropertiesBuilder).disabled_x4hvid_k$ = disabled;
  protoOf(PropertiesBuilder).empty_n0vfzg_k$ = empty;
  protoOf(PropertiesBuilder).enabled_1ker6o_k$ = enabled;
  protoOf(PropertiesBuilder).first_5swn4h_k$ = first;
  protoOf(PropertiesBuilder).firstChild_y4esy3_k$ = firstChild;
  protoOf(PropertiesBuilder).firstOfType_p62eu8_k$ = firstOfType;
  protoOf(PropertiesBuilder).focus_oozh7t_k$ = focus;
  protoOf(PropertiesBuilder).focusVisible_neytc7_k$ = focusVisible;
  protoOf(PropertiesBuilder).focusWithin_4vd6ym_k$ = focusWithin;
  protoOf(PropertiesBuilder).fullscreen_m25o7u_k$ = fullscreen;
  protoOf(PropertiesBuilder).future_ocsg7y_k$ = future;
  protoOf(PropertiesBuilder).hover_7klvy3_k$ = hover;
  protoOf(PropertiesBuilder).inRange_dhk0gn_k$ = inRange;
  protoOf(PropertiesBuilder).indeterminate_7dmb6u_k$ = indeterminate;
  protoOf(PropertiesBuilder).invalid_2oe5jq_k$ = invalid;
  protoOf(PropertiesBuilder).lastChild_wm5wyt_k$ = lastChild;
  protoOf(PropertiesBuilder).lastOfType_ulw8q_k$ = lastOfType;
  protoOf(PropertiesBuilder).link_r3rtdl_k$ = link;
  protoOf(PropertiesBuilder).localLink_8u9318_k$ = localLink;
  protoOf(PropertiesBuilder).nthCol_i0w2pp_k$ = nthCol;
  protoOf(PropertiesBuilder).nthLastCol_5wm8hz_k$ = nthLastCol;
  protoOf(PropertiesBuilder).onlyChild_7esvzl_k$ = onlyChild;
  protoOf(PropertiesBuilder).onlyOfType_y5nw9w_k$ = onlyOfType;
  protoOf(PropertiesBuilder).optional_pdp4yp_k$ = optional;
  protoOf(PropertiesBuilder).outOfRange_8pqnqv_k$ = outOfRange;
  protoOf(PropertiesBuilder).past_s6f72p_k$ = past;
  protoOf(PropertiesBuilder).paused_yc2pm5_k$ = paused;
  protoOf(PropertiesBuilder).pictureInPicture_pm63vq_k$ = pictureInPicture;
  protoOf(PropertiesBuilder).placeholderShown_kvz9gj_k$ = placeholderShown;
  protoOf(PropertiesBuilder).playing_r18bhp_k$ = playing;
  protoOf(PropertiesBuilder).readOnly_u87rq7_k$ = readOnly;
  protoOf(PropertiesBuilder).readWrite_dzxgw8_k$ = readWrite;
  protoOf(PropertiesBuilder).required_3f9s5e_k$ = required;
  protoOf(PropertiesBuilder).root_k1djs1_k$ = root;
  protoOf(PropertiesBuilder).scope_kcmrkj_k$ = scope;
  protoOf(PropertiesBuilder).target_5cm45s_k$ = target;
  protoOf(PropertiesBuilder).targetWithin_ihb3tn_k$ = targetWithin;
  protoOf(PropertiesBuilder).userInvalid_wxpnqj_k$ = userInvalid;
  protoOf(PropertiesBuilder).userValid_emriz4_k$ = userValid;
  protoOf(PropertiesBuilder).valid_t5tqd7_k$ = valid;
  protoOf(PropertiesBuilder).visited_9665l_k$ = visited;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-csstype-js-ir.js.map
