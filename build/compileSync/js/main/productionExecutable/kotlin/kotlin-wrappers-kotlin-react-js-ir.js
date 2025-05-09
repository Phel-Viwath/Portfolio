(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-js-ir'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-react-js-ir'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-react-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-react-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-react-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-react-js-ir'], react, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$react, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var createElement = $module$react.createElement;
  var isValidElement = $module$react.isValidElement;
  var Fragment = $module$react.Fragment;
  var Unit_instance = kotlin_kotlin.$_$.e;
  var protoOf = kotlin_kotlin.$_$.p;
  var initMetadataForInterface = kotlin_kotlin.$_$.n;
  var initMetadataForClass = kotlin_kotlin.$_$.m;
  var VOID = kotlin_kotlin.$_$.a;
  var single = kotlin_kotlin.$_$.k;
  //endregion
  //region block: pre-declaration
  function child(element) {
    // Inline function 'react.children' call
    // Inline function 'kotlin.js.asDynamic' call
    if (!(this[access$_get_CHILDREN_$tChildrenBuilderKt_sggqtl()] == null)) {
      // Inline function 'react.children' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'kotlin.js.asDynamic' call
      this[access$_get_CHILDREN_$tChildrenBuilderKt_sggqtl()].push(element);
    } else {
      // Inline function 'kotlin.arrayOf' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'react.children' call
      var value = [element];
      // Inline function 'kotlin.js.asDynamic' call
      this[get_CHILDREN()] = value;
    }
  }
  function unaryPlus(_this__u8e3s4) {
    this.h5(_this__u8e3s4);
  }
  function unaryPlus_0(_this__u8e3s4) {
    // Inline function 'react.ReactNode' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this.i5(_this__u8e3s4);
  }
  function invoke(_this__u8e3s4, block) {
    this.i5(create_0(_this__u8e3s4, block));
  }
  initMetadataForInterface(ChildrenBuilder, 'ChildrenBuilder');
  initMetadataForClass(ChildrenBuilderImpl, 'ChildrenBuilderImpl', ChildrenBuilderImpl, VOID, [ChildrenBuilder]);
  //endregion
  function get_CHILDREN() {
    _init_properties_ChildrenBuilder_kt__gexuom();
    return CHILDREN;
  }
  var CHILDREN;
  function ChildrenBuilder() {
  }
  function createChildrenBuilder() {
    _init_properties_ChildrenBuilder_kt__gexuom();
    return new ChildrenBuilderImpl();
  }
  function ChildrenBuilderImpl() {
  }
  function access$_get_CHILDREN_$tChildrenBuilderKt_sggqtl() {
    return get_CHILDREN();
  }
  var properties_initialized_ChildrenBuilder_kt_gby2z0;
  function _init_properties_ChildrenBuilder_kt__gexuom() {
    if (!properties_initialized_ChildrenBuilder_kt_gby2z0) {
      properties_initialized_ChildrenBuilder_kt_gby2z0 = true;
      CHILDREN = Symbol('@@children');
    }
  }
  function FC(block) {
    var component = FC$lambda(block);
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return component;
  }
  function FC$lambda$lambda($block, $props) {
    return function ($this$createElementOrNull) {
      $block($this$createElementOrNull, $props);
      return Unit_instance;
    };
  }
  function FC$lambda($block) {
    return function (props) {
      return createElementOrNull(FC$lambda$lambda($block, props));
    };
  }
  function create(_this__u8e3s4) {
    return createElement(_this__u8e3s4);
  }
  function create_0(_this__u8e3s4, block) {
    var builder = createChildrenBuilder();
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.apply' call
    block(builder);
    var props = builder;
    // Inline function 'react.children' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = builder[access$_get_CHILDREN_$tChildrenBuilderKt_sggqtl()];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      // Inline function 'kotlin.emptyArray' call
      tmp = [];
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var children = tmp;
    return createElement.apply(null, [_this__u8e3s4, props].concat([].slice.call(children.slice())));
  }
  function createElementOrNull(block) {
    // Inline function 'kotlin.apply' call
    var this_0 = createChildrenBuilder();
    block(this_0);
    // Inline function 'react.children' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp0_elvis_lhs = this_0[access$_get_CHILDREN_$tChildrenBuilderKt_sggqtl()];
    var tmp;
    if (tmp0_elvis_lhs == null) {
      return null;
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var children = tmp;
    // Inline function 'kotlin.collections.isEmpty' call
    if (children.length === 0)
      return null;
    if (children.length === 1) {
      var tmp1_elvis_lhs = single(children);
      var tmp_0;
      if (tmp1_elvis_lhs == null) {
        return null;
      } else {
        tmp_0 = tmp1_elvis_lhs;
      }
      var child = tmp_0;
      if (isValidElement(child)) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        return child;
      }
    }
    return createElement.apply(null, [Fragment, VOID].concat([].slice.call(children.slice())));
  }
  //region block: post-declaration
  protoOf(ChildrenBuilderImpl).i5 = unaryPlus;
  protoOf(ChildrenBuilderImpl).j5 = unaryPlus_0;
  protoOf(ChildrenBuilderImpl).h5 = child;
  protoOf(ChildrenBuilderImpl).k5 = invoke;
  //endregion
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = FC;
  _.$_$.b = create;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-react-js-ir.js.map
