(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', 'react', 'react-dom', 'styled-components', './kotlin-kotlin-stdlib.js', './kotlin-wrappers-kotlin-browser-js-ir.js', './kotlin-wrappers-kotlin-react-legacy-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('react'), require('react-dom'), require('styled-components'), require('./kotlin-kotlin-stdlib.js'), require('./kotlin-wrappers-kotlin-browser-js-ir.js'), require('./kotlin-wrappers-kotlin-react-legacy-js-ir.js'));
  else {
    if (typeof ReactModule === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-ir'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-ir'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-ir'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-ir'.");
    }
    if (typeof globalThis['react-dom'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-ir'. Its dependency 'react-dom' was not found. Please, check whether 'react-dom' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-ir'.");
    }
    if (typeof globalThis['styled-components'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-ir'. Its dependency 'styled-components' was not found. Please, check whether 'styled-components' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-ir'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-ir'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-ir'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-browser-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-ir'. Its dependency 'kotlin-wrappers-kotlin-browser-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-browser-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-ir'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-react-legacy-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'kotlin-wrappers-kotlin-styled-js-ir'. Its dependency 'kotlin-wrappers-kotlin-react-legacy-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-legacy-js-ir' is loaded prior to 'kotlin-wrappers-kotlin-styled-js-ir'.");
    }
    globalThis['kotlin-wrappers-kotlin-styled-js-ir'] = factory(typeof globalThis['kotlin-wrappers-kotlin-styled-js-ir'] === 'undefined' ? {} : globalThis['kotlin-wrappers-kotlin-styled-js-ir'], ReactModule, react, globalThis['react-dom'], globalThis['styled-components'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlin-wrappers-kotlin-browser-js-ir'], globalThis['kotlin-wrappers-kotlin-react-legacy-js-ir']);
  }
}(function (_, ReactModule, $module$react, $module$react_dom_nty7mo, $module$styled_components_hletz0, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_browser, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_legacy) {
  'use strict';
  //region block: imports
  var createElement = $module$react.createElement;
  var render = $module$react_dom_nty7mo.render;
  var createGlobalStyle = $module$styled_components_hletz0.createGlobalStyle;
  var Unit_getInstance = kotlin_kotlin.$_$.v3;
  var HTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_browser.$_$.a;
  var THROW_CCE = kotlin_kotlin.$_$.w9;
  var fc = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_legacy.$_$.a;
  var lazy = kotlin_kotlin.$_$.na;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var protoOf = kotlin_kotlin.$_$.d8;
  var initMetadataForObject = kotlin_kotlin.$_$.m7;
  var Error_init_$Create$ = kotlin_kotlin.$_$.a1;
  var KProperty1 = kotlin_kotlin.$_$.t8;
  var getPropertyCallableRef = kotlin_kotlin.$_$.f7;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(GlobalStyles, 'GlobalStyles');
  //endregion
  function injectGlobal(string) {
    var globalStyle = devOverrideUseRef(injectGlobal$lambda(string));
    var tmp = Promise.resolve(Unit_getInstance());
    tmp.then(injectGlobal$lambda_0(globalStyle));
  }
  function devOverrideUseRef(action) {
    var tmp;
    if (process.env.NODE_ENV !== 'production') {
      // Inline function 'kotlin.js.asDynamic' call
      var useRef = ReactModule.useRef;
      // Inline function 'kotlin.js.asDynamic' call
      ReactModule.useRef = devOverrideUseRef$lambda;
      var result = action();
      // Inline function 'kotlin.js.asDynamic' call
      ReactModule.useRef = useRef;
      tmp = result;
    } else {
      tmp = action();
    }
    return tmp;
  }
  function _get_component__t10gzw($this) {
    return $this.component_1;
  }
  function _get_root__dd8asp($this) {
    var tmp0 = $this.root$delegate_1;
    // Inline function 'kotlin.getValue' call
    root$factory();
    return tmp0.get_value_j01efc_k$();
  }
  function _get_styles__6s6eeh($this) {
    return $this.styles_1;
  }
  function GlobalStyles$component$lambda($this$fc, props) {
    // Inline function 'kotlin.collections.forEach' call
    var _iterator__ex2g4s = props.globalStyles.iterator_jk1svi_k$();
    while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
      var element = _iterator__ex2g4s.next_20eer_k$();
      $this$fc.child$default_srqz40_k$(element);
    }
    return Unit_getInstance();
  }
  function GlobalStyles$root$delegate$lambda() {
    var tmp = document.body;
    var tmp_0 = document;
    // Inline function 'web.html.HTML.div' call
    HTML_getInstance();
    // Inline function 'web.html.HtmlTagName' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = tmp.appendChild(tmp_0.createElement('div'));
    var element = tmp_1 instanceof Element ? tmp_1 : THROW_CCE();
    element.setAttribute('id', 'sc-global-styles');
    return element;
  }
  function GlobalStyles() {
    GlobalStyles_instance = this;
    var tmp = this;
    tmp.component_1 = fc(GlobalStyles$component$lambda);
    var tmp_0 = this;
    tmp_0.root$delegate_1 = lazy(GlobalStyles$root$delegate$lambda);
    var tmp_1 = this;
    // Inline function 'kotlin.collections.mutableListOf' call
    tmp_1.styles_1 = ArrayList_init_$Create$();
  }
  protoOf(GlobalStyles).add_g05kq9_k$ = function (globalStyle) {
    this.styles_1.add_utx5q5_k$(globalStyle);
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.globalStyles = GlobalStyles_getInstance().styles_1;
    var reactElement = createElement(this.component_1, this_0);
    render(reactElement, _get_root__dd8asp(this));
  };
  var GlobalStyles_instance;
  function GlobalStyles_getInstance() {
    if (GlobalStyles_instance == null)
      new GlobalStyles();
    return GlobalStyles_instance;
  }
  function injectGlobal$lambda($string) {
    return function () {
      return invoke(createGlobalStyle, $string, []);
    };
  }
  function injectGlobal$lambda_0($globalStyle) {
    return function (it) {
      GlobalStyles_getInstance().add_g05kq9_k$($globalStyle);
      return Unit_getInstance();
    };
  }
  function devOverrideUseRef$lambda() {
    throw Error_init_$Create$('invalid hook call');
  }
  function root$factory() {
    return getPropertyCallableRef('root', 1, KProperty1, function (receiver) {
      return _get_root__dd8asp(receiver);
    }, null);
  }
  function invoke(_this__u8e3s4, string, values) {
    // Inline function 'kotlin.arrayOf' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp$ret$2 = [string];
    return invoke_0(_this__u8e3s4, tmp$ret$2, values.slice());
  }
  function invoke_0(_this__u8e3s4, strings, values) {
    return function () {
      var $externalVarargReceiverTmp = _this__u8e3s4;
      return $externalVarargReceiverTmp.call.apply($externalVarargReceiverTmp, [null, strings].concat([].slice.call(values.slice())));
    }.call(this);
  }
  //region block: exports
  _.$_$ = _.$_$ || {};
  _.$_$.a = injectGlobal;
  //endregion
  return _;
}));

//# sourceMappingURL=kotlin-wrappers-kotlin-styled-js-ir.js.map
