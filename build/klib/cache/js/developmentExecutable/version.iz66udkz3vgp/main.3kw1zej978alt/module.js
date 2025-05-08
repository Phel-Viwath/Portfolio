(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react', '@emotion/css', 'react-dom/client', './kotlin-wrappers-kotlin-styled-js-ir.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlin-wrappers-kotlin-react-core-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react'), require('@emotion/css'), require('react-dom/client'), require('./kotlin-wrappers-kotlin-styled-js-ir.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlin-wrappers-kotlin-react-core-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'), require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-styled-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'kotlin-wrappers-kotlin-styled-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-js-ir' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-react-core-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-core-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-core-js-ir' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Portfolio'.");
    }
    globalThis.Portfolio = factory(typeof Portfolio === 'undefined' ? {} : Portfolio, react, globalThis['@emotion/css'], globalThis['react-dom/client'], globalThis['kotlin-wrappers-kotlin-styled-js-ir'], globalThis['kotlin-wrappers-kotlin-react-js-ir'], globalThis['kotlin-wrappers-kotlin-react-core-js-ir'], globalThis['kotlin-wrappers-kotlin-react-dom-js-ir'], globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, $module$react, $module$_emotion_css_2enn37, $module$react_dom_client_y5z5eu, kotlin_org_jetbrains_kotlin_wrappers_kotlin_styled, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var useState = $module$react.useState;
  var css = $module$_emotion_css_2enn37.css;
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var injectGlobal = kotlin_org_jetbrains_kotlin_wrappers_kotlin_styled.$_$.a;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var useEffect = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_core.$_$.b;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var Unit_getInstance = kotlin_kotlin.$_$.v3;
  var listOf = kotlin_kotlin.$_$.l5;
  var toString = kotlin_kotlin.$_$.f8;
  var to = kotlin_kotlin.$_$.na;
  var mapOf = kotlin_kotlin.$_$.n5;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var ReactSVG_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.b;
  var THROW_CCE = kotlin_kotlin.$_$.u9;
  var protoOf = kotlin_kotlin.$_$.c8;
  var initMetadataForObject = kotlin_kotlin.$_$.k7;
  var VOID = kotlin_kotlin.$_$.d;
  var ArrayList_init_$Create$ = kotlin_kotlin.$_$.h;
  var json = kotlin_kotlin.$_$.w7;
  //endregion
  //region block: pre-declaration
  initMetadataForObject(Colors, 'Colors');
  initMetadataForObject(Dimensions, 'Dimensions');
  initMetadataForObject(Typography, 'Typography');
  //endregion
  function get_mySkill() {
    _init_properties_App_kt__fk8usv();
    return mySkill;
  }
  var mySkill;
  function get_contactPlatform() {
    _init_properties_App_kt__fk8usv();
    return contactPlatform;
  }
  var contactPlatform;
  function globalStyles() {
    _init_properties_App_kt__fk8usv();
    injectGlobal("* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    background-color: #f8fafc;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n    scroll-behavior: smooth;\n}\n\n#root {\n    height: 100%;\n    width: 100%;\n}");
  }
  function app() {
    _init_properties_App_kt__fk8usv();
    return FC(app$lambda);
  }
  function app$lambda($this$FC, it) {
    _init_properties_App_kt__fk8usv();
    var _destruct__k2r9zo = useState('home');
    // Inline function 'react.StateInstance.component1' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var activeSection = _destruct__k2r9zo[0];
    // Inline function 'react.StateInstance.component2' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    var setActiveSection = _destruct__k2r9zo[1];
    var profileName = 'Phel Viwath';
    useEffect(app$lambda$lambda(setActiveSection));
    globalStyles();
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'div';
    $this$FC.invoke_mz6d4x_k$(tmp, app$lambda$lambda_0(activeSection, profileName));
    return Unit_getInstance();
  }
  function app$lambda$lambda$lambda($setActiveSection) {
    return function (it) {
      var sections = listOf(['home', 'about', 'skills', 'works', 'contact']);
      // Inline function 'kotlin.collections.find' call
      var tmp$ret$1;
      $l$block_0: {
        // Inline function 'kotlin.collections.firstOrNull' call
        var _iterator__ex2g4s = sections.iterator_jk1svi_k$();
        while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
          var element = _iterator__ex2g4s.next_20eer_k$();
          var tmp$ret$0;
          $l$block: {
            var tmp0_elvis_lhs = document.getElementById(element);
            var tmp;
            if (tmp0_elvis_lhs == null) {
              tmp$ret$0 = false;
              break $l$block;
            } else {
              tmp = tmp0_elvis_lhs;
            }
            var element_0 = tmp;
            var rect = element_0.getBoundingClientRect();
            tmp$ret$0 = (rect.top <= 120 && rect.bottom >= 120);
          }
          if (tmp$ret$0) {
            tmp$ret$1 = element;
            break $l$block_0;
          }
        }
        tmp$ret$1 = null;
      }
      var tmp0_elvis_lhs_0 = tmp$ret$1;
      var currentSection = tmp0_elvis_lhs_0 == null ? 'home' : tmp0_elvis_lhs_0;
      // Inline function 'react.StateSetter.invoke' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $setActiveSection(currentSection);
      return Unit_getInstance();
    };
  }
  function app$lambda$lambda$lambda_0($handleScroll) {
    return function () {
      window.removeEventListener('scroll', $handleScroll);
      return Unit_getInstance();
    };
  }
  function app$lambda$lambda($setActiveSection) {
    return function ($this$useEffect) {
      var handleScroll = app$lambda$lambda$lambda($setActiveSection);
      window.addEventListener('scroll', handleScroll);
      // Inline function 'react.EffectBuilder.cleanup' call
      var block = app$lambda$lambda$lambda_0(handleScroll);
      // Inline function 'kotlin.js.asDynamic' call
      $this$useEffect.push(block);
      return Unit_getInstance();
    };
  }
  function app$lambda$lambda$lambda_1($profileName) {
    return function ($this$main) {
      heroSection($this$main, $profileName);
      aboutSection($this$main);
      skillSection($this$main, get_mySkill());
      workSection($this$main);
      contactSection($this$main, 'phelviwath@gmail.com', '+855 889 043 903', 'Chantrea, Svay Rieng, Cambodia', get_contactPlatform());
      return Unit_getInstance();
    };
  }
  function app$lambda$lambda_0($activeSection, $profileName) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.maxWidth = toString(1200) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp2 = toString(0) + 'px';
      // Inline function 'csstype.Margin' call
      var horizontal = (/*union*/{auto: 'auto'}/*union*/).auto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.margin = toString(tmp2) + ' ' + toString(horizontal);
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp6 = toString(0) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal_0 = toString(20) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp6) + ' ' + toString(horizontal_0);
      $this$div.className = css(this_0);
      header($this$div, $activeSection, $profileName);
      // Inline function 'react.dom.html.ReactHTML.main' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'main';
      $this$div.invoke_mz6d4x_k$(tmp, app$lambda$lambda$lambda_1($profileName));
      footer($this$div, $profileName);
      return Unit_getInstance();
    };
  }
  var properties_initialized_App_kt_kalemn;
  function _init_properties_App_kt__fk8usv() {
    if (!properties_initialized_App_kt_kalemn) {
      properties_initialized_App_kt_kalemn = true;
      mySkill = mapOf([to('UI/UX Design', 90.0), to('HTML & CSS', 95.0), to('JavaScript', 85.0), to('React', 80.0), to('Figma', 85.0), to('Adobe XD', 80.0)]);
      contactPlatform = mapOf([to('https://github.com/Phel-Viwath', 'M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12'), to('https://www.linkedin.com/in/phel-viwath-a0707b281/', 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z')]);
    }
  }
  function main() {
    var tmp0_elvis_lhs = document.getElementById('root');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Couldn't find root container!";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var container = tmp;
    var root = createRoot_0(container);
    root.render(create(app()));
    initScrollAnimations();
  }
  function mainWrapper() {
    main();
  }
  function aboutSection(_this__u8e3s4) {
    // Inline function 'react.dom.html.ReactHTML.section' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'section';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, aboutSection$lambda);
  }
  function aboutSection$lambda($this$section) {
    $this$section.id = 'about';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2 = toString(100) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.Padding' call
    var horizontal = toString(0) + 'px';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = toString(tmp2) + ' ' + toString(horizontal);
    $this$section.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.h2' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'h2';
    $this$section.invoke_mz6d4x_k$(tmp, aboutSection$lambda$lambda);
    // Inline function 'react.dom.html.ReactHTML.p' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = 'p';
    $this$section.invoke_mz6d4x_k$(tmp_0, aboutSection$lambda$lambda_0);
    // Inline function 'react.dom.html.ReactHTML.p' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = 'p';
    $this$section.invoke_mz6d4x_k$(tmp_1, aboutSection$lambda$lambda_1);
    return Unit_getInstance();
  }
  function aboutSection$lambda$lambda($this$h2) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(36) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(30) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#1e293b';
    $this$h2.className = css(this_0);
    $this$h2.unaryPlus_76unot_k$('About Me');
    return Unit_getInstance();
  }
  function aboutSection$lambda$lambda_0($this$p) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(18) + 'px';
    // Inline function 'csstype.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.lineHeight = toString(1.6) + 'em';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#64748b';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.maxWidth = toString(800) + 'px';
    $this$p.className = css(this_0);
    $this$p.unaryPlus_76unot_k$("I'm a passionate Web Designer with expertise in creating visually appealing and user-friendly websites. With a strong foundation in design principles and a keen eye for aesthetics, I strive to deliver engaging digital experiences that meet client objectives while exceeding user expectations.");
    return Unit_getInstance();
  }
  function aboutSection$lambda$lambda_1($this$p) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(18) + 'px';
    // Inline function 'csstype.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.lineHeight = toString(1.6) + 'em';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#64748b';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.maxWidth = toString(800) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginTop = toString(20) + 'px';
    $this$p.className = css(this_0);
    $this$p.unaryPlus_76unot_k$("My approach combines creativity with technical skills to produce responsive designs that work seamlessly across all devices. I'm constantly learning and adapting to the latest design trends and technologies to ensure my work remains current and innovative.");
    return Unit_getInstance();
  }
  function contactSection(_this__u8e3s4, email, phone, address, contactPlatform) {
    // Inline function 'react.dom.html.ReactHTML.section' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'section';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, contactSection$lambda(contactPlatform, email, phone, address));
  }
  function contactSection$lambda$lambda($this$h2) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(36) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(30) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#1e293b';
    $this$h2.className = css(this_0);
    $this$h2.unaryPlus_76unot_k$('Contact Me');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda($this$h3) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(20) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#1e293b';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(20) + 'px';
    $this$h3.className = css(this_0);
    $this$h3.unaryPlus_76unot_k$('Get in Touch');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda_0($this$p) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#64748b';
    // Inline function 'csstype.em' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.lineHeight = toString(1.6) + 'em';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(20) + 'px';
    $this$p.className = css(this_0);
    $this$p.unaryPlus_76unot_k$("I'm currently available for freelance work. Feel free to reach out if you have a project in mind or just want to say hello.");
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda($this$strong) {
    $this$strong.unaryPlus_76unot_k$('Email: ');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda_1($email) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.marginBottom = toString(15) + 'px';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.strong' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'strong';
      $this$div.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda$lambda$lambda);
      $this$div.unaryPlus_76unot_k$($email);
      return Unit_getInstance();
    };
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda_0($this$strong) {
    $this$strong.unaryPlus_76unot_k$('Phone: ');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda_2($phone) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.marginBottom = toString(15) + 'px';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.strong' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'strong';
      $this$div.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda$lambda$lambda_0);
      $this$div.unaryPlus_76unot_k$($phone);
      return Unit_getInstance();
    };
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda_1($this$strong) {
    $this$strong.unaryPlus_76unot_k$('Location: ');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda_3($address) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.marginBottom = toString(15) + 'px';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.strong' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'strong';
      $this$div.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda$lambda$lambda_1);
      $this$div.unaryPlus_76unot_k$($address);
      return Unit_getInstance();
    };
  }
  function contactSection$lambda$lambda$lambda($contactPlatform, $email, $phone, $address) {
    return function ($this$div) {
      // Inline function 'react.dom.html.ReactHTML.h3' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'h3';
      $this$div.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda$lambda);
      // Inline function 'react.dom.html.ReactHTML.p' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'p';
      $this$div.invoke_mz6d4x_k$(tmp_0, contactSection$lambda$lambda$lambda$lambda_0);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_1, contactSection$lambda$lambda$lambda$lambda_1($email));
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_2, contactSection$lambda$lambda$lambda$lambda_2($phone));
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_3, contactSection$lambda$lambda$lambda$lambda_3($address));
      socialMediaIcons($this$div, $contactPlatform);
      return Unit_getInstance();
    };
  }
  function contactSection$lambda$lambda$lambda_0($this$div) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.backgroundColor = 'white';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = toString(30) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(12) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp10 = toString(0) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp11 = toString(4) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp12 = toString(6) + 'px';
    // Inline function 'csstype.rgba' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.BoxShadow' call
    var color = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.05 + ')';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.boxShadow = toString(tmp10) + ' ' + toString(tmp11) + ' ' + toString(tmp12) + ' ' + toString(color);
    $this$div.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.form' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'form';
    $this$div.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda$lambda_4);
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda_4($this$form) {
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'div';
    $this$form.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda$lambda$lambda_2);
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = 'div';
    $this$form.invoke_mz6d4x_k$(tmp_0, contactSection$lambda$lambda$lambda$lambda$lambda_3);
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = 'div';
    $this$form.invoke_mz6d4x_k$(tmp_1, contactSection$lambda$lambda$lambda$lambda$lambda_4);
    // Inline function 'react.dom.html.ReactHTML.button' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_2 = 'button';
    $this$form.invoke_mz6d4x_k$(tmp_2, contactSection$lambda$lambda$lambda$lambda$lambda_5);
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda_2($this$div) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(20) + 'px';
    $this$div.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.label' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'label';
    $this$div.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda$lambda$lambda$lambda);
    // Inline function 'react.dom.html.ReactHTML.input' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = 'input';
    $this$div.invoke_mz6d4x_k$(tmp_0, contactSection$lambda$lambda$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda$lambda($this$label) {
    $this$label.htmlFor = 'name';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).block;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(5) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#64748b';
    $this$label.className = css(this_0);
    $this$label.unaryPlus_76unot_k$('Name');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda$lambda_0($this$input) {
    $this$input.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).text;
    $this$input.id = 'name';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(100) + '%';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = toString(10) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(6) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp5 = toString(1) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.Border' call
    var style = (/*union*/{dashed: 'dashed', dotted: 'dotted', double: 'double', groove: 'groove', hidden: 'hidden', inset: 'inset', outset: 'outset', ridge: 'ridge', solid: 'solid'}/*union*/).solid;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.border = toString(tmp5) + ' ' + toString(style) + ' ' + toString('#e2e8f0');
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(16) + 'px';
    $this$input.className = css(this_0);
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda_3($this$div) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(20) + 'px';
    $this$div.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.label' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'label';
    $this$div.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda$lambda$lambda$lambda_1);
    // Inline function 'react.dom.html.ReactHTML.input' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = 'input';
    $this$div.invoke_mz6d4x_k$(tmp_0, contactSection$lambda$lambda$lambda$lambda$lambda$lambda_2);
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda$lambda_1($this$label) {
    $this$label.htmlFor = 'email';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).block;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(5) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#64748b';
    $this$label.className = css(this_0);
    $this$label.unaryPlus_76unot_k$('Email');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda$lambda_2($this$input) {
    $this$input.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).email;
    $this$input.id = 'email';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(100) + '%';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = toString(10) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(6) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp5 = toString(1) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.Border' call
    var style = (/*union*/{dashed: 'dashed', dotted: 'dotted', double: 'double', groove: 'groove', hidden: 'hidden', inset: 'inset', outset: 'outset', ridge: 'ridge', solid: 'solid'}/*union*/).solid;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.border = toString(tmp5) + ' ' + toString(style) + ' ' + toString('#e2e8f0');
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(16) + 'px';
    $this$input.className = css(this_0);
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda_4($this$div) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(20) + 'px';
    $this$div.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.label' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'label';
    $this$div.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda$lambda$lambda$lambda_3);
    // Inline function 'react.dom.html.ReactHTML.textarea' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = 'textarea';
    $this$div.invoke_mz6d4x_k$(tmp_0, contactSection$lambda$lambda$lambda$lambda$lambda$lambda_4);
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda$lambda_3($this$label) {
    $this$label.htmlFor = 'message';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).block;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(5) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#64748b';
    $this$label.className = css(this_0);
    $this$label.unaryPlus_76unot_k$('Message');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda$lambda_4($this$textarea) {
    $this$textarea.id = 'message';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(100) + '%';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = toString(10) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(6) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp5 = toString(1) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.Border' call
    var style = (/*union*/{dashed: 'dashed', dotted: 'dotted', double: 'double', groove: 'groove', hidden: 'hidden', inset: 'inset', outset: 'outset', ridge: 'ridge', solid: 'solid'}/*union*/).solid;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.border = toString(tmp5) + ' ' + toString(style) + ' ' + toString('#e2e8f0');
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(16) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.minHeight = toString(150) + 'px';
    this_0.resize = (/*union*/{block: 'block', both: 'both', horizontal: 'horizontal', inline: 'inline', vertical: 'vertical'}/*union*/).vertical;
    $this$textarea.className = css(this_0);
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda_5($this$button) {
    $this$button.type = (/*union*/{submit: 'submit', reset: 'reset', button: 'button'}/*union*/).submit;
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(100) + '%';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.backgroundColor = '#4169e1';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = 'white';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp5 = toString(12) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.Padding' call
    var horizontal = toString(30) + 'px';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = toString(tmp5) + ' ' + toString(horizontal);
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(8) + 'px';
    this_0.border = (/*union*/{none: 'none'}/*union*/).none;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontWeight = '600';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(16) + 'px';
    this_0.cursor = (/*union*/{alias: 'alias', allScroll: 'all-scroll', cell: 'cell', colResize: 'col-resize', contextMenu: 'context-menu', copy: 'copy', crosshair: 'crosshair', default: 'default', eResize: 'e-resize', ewResize: 'ew-resize', grab: 'grab', grabbing: 'grabbing', help: 'help', move: 'move', nResize: 'n-resize', neResize: 'ne-resize', neswResize: 'nesw-resize', noDrop: 'no-drop', notAllowed: 'not-allowed', nsResize: 'ns-resize', nwResize: 'nw-resize', nwseResize: 'nwse-resize', pointer: 'pointer', progress: 'progress', rowResize: 'row-resize', sResize: 's-resize', seResize: 'se-resize', swResize: 'sw-resize', text: 'text', verticalText: 'vertical-text', wResize: 'w-resize', wait: 'wait', zoomIn: 'zoom-in', zoomOut: 'zoom-out'}/*union*/).pointer;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.transition = 'background-color 0.3s ease';
    $this$button.className = css(this_0);
    $this$button.onClick = contactSection$lambda$lambda$lambda$lambda$lambda$lambda_5;
    $this$button.unaryPlus_76unot_k$('Send Message');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda$lambda$lambda$lambda$lambda_5(event) {
    event.preventDefault();
    window.alert('Message sent! (This is a demo)');
    return Unit_getInstance();
  }
  function contactSection$lambda$lambda_0($contactPlatform, $email, $phone, $address) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).grid;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.gridTemplateColumns = 'repeat(auto-fit, minmax(300px, 1fr))';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.gap = toString(30) + 'px';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'div';
      $this$div.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda$lambda($contactPlatform, $email, $phone, $address));
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_0, contactSection$lambda$lambda$lambda_0);
      return Unit_getInstance();
    };
  }
  function contactSection$lambda($contactPlatform, $email, $phone, $address) {
    return function ($this$section) {
      $this$section.id = 'contact';
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp2 = toString(100) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(0) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp2) + ' ' + toString(horizontal);
      $this$section.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.h2' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'h2';
      $this$section.invoke_mz6d4x_k$(tmp, contactSection$lambda$lambda);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'div';
      $this$section.invoke_mz6d4x_k$(tmp_0, contactSection$lambda$lambda_0($contactPlatform, $email, $phone, $address));
      return Unit_getInstance();
    };
  }
  function footer(_this__u8e3s4, name) {
    // Inline function 'react.dom.html.ReactHTML.footer' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'footer';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, footer$lambda(name));
  }
  function footer$lambda$lambda($name) {
    return function ($this$p) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.color = '#64748b';
      $this$p.className = css(this_0);
      $this$p.unaryPlus_76unot_k$('\xA9 ' + (new Date()).getFullYear() + ' ' + $name + '. All Rights Reserved.');
      return Unit_getInstance();
    };
  }
  function footer$lambda($name) {
    return function ($this$footer) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.backgroundColor = 'white';
      this_0.textAlign = (/*union*/{center: 'center', end: 'end', justify: 'justify', left: 'left', matchParent: 'match-parent', right: 'right', start: 'start'}/*union*/).center;
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp3 = toString(30) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(0) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp3) + ' ' + toString(horizontal);
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.marginTop = toString(50) + 'px';
      $this$footer.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.p' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'p';
      $this$footer.invoke_mz6d4x_k$(tmp, footer$lambda$lambda($name));
      return Unit_getInstance();
    };
  }
  function header(_this__u8e3s4, activeSection, profileName) {
    // Inline function 'react.dom.html.ReactHTML.header' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'header';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, header$lambda(profileName, activeSection));
  }
  function header$lambda$lambda($profileName) {
    return function ($this$h3) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.margin = toString(0) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.fontWeight = '600';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.fontSize = toString(20) + 'px';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.color = '#333';
      $this$h3.className = css(this_0);
      $this$h3.unaryPlus_76unot_k$($profileName);
      return Unit_getInstance();
    };
  }
  function header$lambda$lambda$lambda$lambda($sectionId) {
    return function (event) {
      event.preventDefault();
      var targetElement = document.getElementById($sectionId);
      var tmp;
      if (targetElement == null) {
        tmp = null;
      } else {
        // Inline function 'kotlin.js.asDynamic' call
        tmp = targetElement;
      }
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.behavior = 'smooth';
      this_0.block = 'center';
      tmp.scrollIntoView(this_0);
      return Unit_getInstance();
    };
  }
  function header$lambda$lambda$lambda$lambda_0($this$div) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.position = (/*union*/{absolute: 'absolute', fixed: 'fixed', relative: 'relative', static: 'static', sticky: 'sticky'}/*union*/).absolute;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.bottom = toString(-2) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.left = toString(0) + 'px';
    // Inline function 'csstype.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(100) + '%';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.height = toString(2) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.backgroundColor = '#4169e1';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(1) + 'px';
    $this$div.className = css(this_0);
    return Unit_getInstance();
  }
  function header$lambda$lambda$lambda($sectionId, $activeSection, $section) {
    return function ($this$a) {
      $this$a.href = '#' + $sectionId;
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.textDecoration = (/*union*/{none: 'none'}/*union*/).none;
      var tmp;
      if ($activeSection === $sectionId) {
        // Inline function 'csstype.Color' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = '#4169e1';
      } else {
        // Inline function 'csstype.Color' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp = '#333';
      }
      this_0.color = tmp;
      var tmp_0;
      if ($activeSection === $sectionId) {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = '600';
      } else {
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        tmp_0 = '400';
      }
      this_0.fontWeight = tmp_0;
      this_0.position = (/*union*/{absolute: 'absolute', fixed: 'fixed', relative: 'relative', static: 'static', sticky: 'sticky'}/*union*/).relative;
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp6 = toString(5) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(0) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp6) + ' ' + toString(horizontal);
      $this$a.className = css(this_0);
      $this$a.onClick = header$lambda$lambda$lambda$lambda($sectionId);
      var tmp_1;
      if ($activeSection === $sectionId) {
        // Inline function 'react.dom.html.ReactHTML.div' call
        ReactHTML_getInstance();
        // Inline function 'react.IntrinsicType' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp_2 = 'div';
        $this$a.invoke_mz6d4x_k$(tmp_2, header$lambda$lambda$lambda$lambda_0);
        tmp_1 = Unit_getInstance();
      }
      $this$a.unaryPlus_76unot_k$($section);
      return Unit_getInstance();
    };
  }
  function header$lambda$lambda_0($activeSection) {
    return function ($this$nav) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.gap = toString(30) + 'px';
      $this$nav.className = css(this_0);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = listOf(['Home', 'About', 'Skills', 'Works', 'Contact']).iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.text.lowercase' call
        // Inline function 'kotlin.js.asDynamic' call
        var sectionId = element.toLowerCase();
        // Inline function 'react.dom.html.ReactHTML.a' call
        ReactHTML_getInstance();
        // Inline function 'react.IntrinsicType' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = 'a';
        $this$nav.invoke_mz6d4x_k$(tmp, header$lambda$lambda$lambda(sectionId, $activeSection, element));
      }
      return Unit_getInstance();
    };
  }
  function header$lambda($profileName, $activeSection) {
    return function ($this$header) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      this_0.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).spaceBetween;
      this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp2 = toString(20) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(10) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp2) + ' ' + toString(horizontal);
      this_0.backgroundColor = Colors_getInstance().get_transparent_enj387_k$();
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(20) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp6 = toString(20) + 'px';
      // Inline function 'csstype.Margin' call
      var horizontal_0 = (/*union*/{auto: 'auto'}/*union*/).auto;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.margin = toString(tmp6) + ' ' + toString(horizontal_0);
      // Inline function 'csstype.pct' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.width = toString(80) + '%';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp15 = toString(4) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp16 = toString(6) + 'px';
      // Inline function 'csstype.rgba' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.BoxShadow' call
      var color = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.05 + ')';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.boxShadow = toString(tmp15) + ' ' + toString(tmp16) + ' ' + toString(color);
      this_0.position = (/*union*/{absolute: 'absolute', fixed: 'fixed', relative: 'relative', static: 'static', sticky: 'sticky'}/*union*/).sticky;
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.top = toString(20) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.zIndex = '1000';
      $this$header.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.h3' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'h3';
      $this$header.invoke_mz6d4x_k$(tmp, header$lambda$lambda($profileName));
      // Inline function 'react.dom.html.ReactHTML.nav' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'nav';
      $this$header.invoke_mz6d4x_k$(tmp_0, header$lambda$lambda_0($activeSection));
      return Unit_getInstance();
    };
  }
  function heroSection(_this__u8e3s4, name) {
    // Inline function 'react.dom.html.ReactHTML.section' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'section';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, heroSection$lambda(name));
  }
  function heroSection$lambda$lambda$lambda($this$h1) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(48) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.margin = toString(0) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#1e293b';
    $this$h1.className = css(this_0);
    $this$h1.unaryPlus_76unot_k$('Hi,');
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda$lambda($name) {
    return function ($this$span) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.color = '#4169e1';
      $this$span.className = css(this_0);
      $this$span.unaryPlus_76unot_k$($name);
      return Unit_getInstance();
    };
  }
  function heroSection$lambda$lambda$lambda_0($name) {
    return function ($this$h1) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.fontSize = toString(48) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp3 = toString(10) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Margin' call
      var horizontal = toString(0) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.margin = toString(tmp3) + ' ' + toString(horizontal);
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.color = '#1e293b';
      $this$h1.className = css(this_0);
      $this$h1.unaryPlus_76unot_k$("I'm ");
      // Inline function 'react.dom.html.ReactHTML.span' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'span';
      $this$h1.invoke_mz6d4x_k$(tmp, heroSection$lambda$lambda$lambda$lambda($name));
      return Unit_getInstance();
    };
  }
  function heroSection$lambda$lambda$lambda_1($this$h2) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(36) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp5 = toString(10) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp6 = toString(0) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp7 = toString(20) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.Margin' call
    var left = toString(0) + 'px';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.margin = toString(tmp5) + ' ' + toString(tmp6) + ' ' + toString(tmp7) + ' ' + toString(left);
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#1e293b';
    $this$h2.className = css(this_0);
    $this$h2.unaryPlus_76unot_k$('Web Designer');
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda_2($this$a) {
    $this$a.href = '#contact';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).inlineBlock;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2 = toString(12) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.Padding' call
    var horizontal = toString(30) + 'px';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = toString(tmp2) + ' ' + toString(horizontal);
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.backgroundColor = '#4169e1';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = 'white';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(8) + 'px';
    this_0.textDecoration = (/*union*/{none: 'none'}/*union*/).none;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontWeight = '600';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(16) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginTop = toString(20) + 'px';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.transition = 'all 0.3s ease';
    $this$a.className = css(this_0);
    $this$a.onClick = heroSection$lambda$lambda$lambda$lambda_0;
    $this$a.unaryPlus_76unot_k$('Contact');
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda$lambda_0(event) {
    event.preventDefault();
    var contactSection = document.getElementById('contact');
    var tmp;
    if (contactSection == null) {
      tmp = null;
    } else {
      // Inline function 'kotlin.js.asDynamic' call
      tmp = contactSection;
    }
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.behavior = 'smooth';
    this_0.block = 'center';
    tmp.scrollIntoView(this_0);
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda_3($this$div) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.gap = toString(20) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginTop = toString(40) + 'px';
    $this$div.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.a' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'a';
    $this$div.invoke_mz6d4x_k$(tmp, heroSection$lambda$lambda$lambda$lambda_1);
    // Inline function 'react.dom.html.ReactHTML.a' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = 'a';
    $this$div.invoke_mz6d4x_k$(tmp_0, heroSection$lambda$lambda$lambda$lambda_2);
    // Inline function 'react.dom.html.ReactHTML.a' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = 'a';
    $this$div.invoke_mz6d4x_k$(tmp_1, heroSection$lambda$lambda$lambda$lambda_3);
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda$lambda_1($this$a) {
    $this$a.href = '#';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#333';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(24) + 'px';
    $this$a.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.i' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'i';
    $this$a.invoke_mz6d4x_k$(tmp, heroSection$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda$lambda$lambda($this$i) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$i.className = 'fab fa-linkedin';
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda$lambda_2($this$a) {
    $this$a.href = '#';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#333';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(24) + 'px';
    $this$a.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.i' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'i';
    $this$a.invoke_mz6d4x_k$(tmp, heroSection$lambda$lambda$lambda$lambda$lambda_0);
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda$lambda$lambda_0($this$i) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$i.className = 'fab fa-behance';
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda$lambda_3($this$a) {
    $this$a.href = '#';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#333';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(24) + 'px';
    $this$a.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.i' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'i';
    $this$a.invoke_mz6d4x_k$(tmp, heroSection$lambda$lambda$lambda$lambda$lambda_1);
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda$lambda$lambda_1($this$i) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $this$i.className = 'fab fa-github';
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda($name) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.maxWidth = toString(500) + 'px';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.h1' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'h1';
      $this$div.invoke_mz6d4x_k$(tmp, heroSection$lambda$lambda$lambda);
      // Inline function 'react.dom.html.ReactHTML.h1' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'h1';
      $this$div.invoke_mz6d4x_k$(tmp_0, heroSection$lambda$lambda$lambda_0($name));
      // Inline function 'react.dom.html.ReactHTML.h2' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = 'h2';
      $this$div.invoke_mz6d4x_k$(tmp_1, heroSection$lambda$lambda$lambda_1);
      // Inline function 'react.dom.html.ReactHTML.a' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_2 = 'a';
      $this$div.invoke_mz6d4x_k$(tmp_2, heroSection$lambda$lambda$lambda_2);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_3 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_3, heroSection$lambda$lambda$lambda_3);
      return Unit_getInstance();
    };
  }
  function heroSection$lambda$lambda_0($this$div) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(400) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.height = toString(400) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.backgroundColor = '#4169e1';
    // Inline function 'csstype.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(50) + '%';
    this_0.overflow = (/*union*/{clip: 'clip', hidden: 'hidden', scroll: 'scroll', visible: 'visible'}/*union*/).hidden;
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
    this_0.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).center;
    this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).flexEnd;
    $this$div.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.img' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'img';
    $this$div.invoke_mz6d4x_k$(tmp, heroSection$lambda$lambda$lambda_4);
    return Unit_getInstance();
  }
  function heroSection$lambda$lambda$lambda_4($this$img) {
    $this$img.src = 'https://via.placeholder.com/350x400';
    $this$img.alt = 'Profile photo';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(350) + 'px';
    this_0.height = (/*union*/{auto: 'auto'}/*union*/).auto;
    $this$img.className = css(this_0);
    return Unit_getInstance();
  }
  function heroSection$lambda($name) {
    return function ($this$section) {
      $this$section.id = 'home';
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      this_0.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).spaceBetween;
      this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.minHeight = 'calc(100vh - 120px)';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp3 = toString(60) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(0) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp3) + ' ' + toString(horizontal);
      $this$section.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'div';
      $this$section.invoke_mz6d4x_k$(tmp, heroSection$lambda$lambda($name));
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'div';
      $this$section.invoke_mz6d4x_k$(tmp_0, heroSection$lambda$lambda_0);
      return Unit_getInstance();
    };
  }
  function skillSection(_this__u8e3s4, skills) {
    // Inline function 'react.dom.html.ReactHTML.section' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'section';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, skillSection$lambda(skills));
  }
  function skillSection$lambda$lambda($this$h2) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(36) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(30) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#1e293b';
    $this$h2.className = css(this_0);
    $this$h2.unaryPlus_76unot_k$('My Skills');
    return Unit_getInstance();
  }
  function skillSection$lambda$lambda$lambda$lambda($skill) {
    return function ($this$h3) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp4 = toString(0) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp5 = toString(0) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp6 = toString(15) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Margin' call
      var left = toString(0) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.margin = toString(tmp4) + ' ' + toString(tmp5) + ' ' + toString(tmp6) + ' ' + toString(left);
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.fontSize = toString(18) + 'px';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.color = '#1e293b';
      $this$h3.className = css(this_0);
      $this$h3.unaryPlus_76unot_k$($skill);
      return Unit_getInstance();
    };
  }
  function skillSection$lambda$lambda$lambda$lambda$lambda($percentage) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.pct' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.height = toString(100) + '%';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.width = '' + $percentage + '%';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.backgroundColor = '#4169e1';
      $this$div.className = css(this_0);
      return Unit_getInstance();
    };
  }
  function skillSection$lambda$lambda$lambda$lambda_0($percentage) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.height = toString(8) + 'px';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.backgroundColor = '#e2e8f0';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(4) + 'px';
      this_0.overflow = (/*union*/{clip: 'clip', hidden: 'hidden', scroll: 'scroll', visible: 'visible'}/*union*/).hidden;
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'div';
      $this$div.invoke_mz6d4x_k$(tmp, skillSection$lambda$lambda$lambda$lambda$lambda($percentage));
      return Unit_getInstance();
    };
  }
  function skillSection$lambda$lambda$lambda$lambda_1($percentage) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.textAlign = (/*union*/{center: 'center', end: 'end', justify: 'justify', left: 'left', matchParent: 'match-parent', right: 'right', start: 'start'}/*union*/).right;
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.marginTop = toString(5) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.fontSize = toString(14) + 'px';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.color = '#64748b';
      $this$div.className = css(this_0);
      $this$div.unaryPlus_76unot_k$('' + $percentage + '%');
      return Unit_getInstance();
    };
  }
  function skillSection$lambda$lambda$lambda($skill, $percentage) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.backgroundColor = 'white';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(20) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(10) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp10 = toString(0) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp11 = toString(4) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp12 = toString(6) + 'px';
      // Inline function 'csstype.rgba' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.BoxShadow' call
      var color = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.05 + ')';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.boxShadow = toString(tmp10) + ' ' + toString(tmp11) + ' ' + toString(tmp12) + ' ' + toString(color);
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.h3' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'h3';
      $this$div.invoke_mz6d4x_k$(tmp, skillSection$lambda$lambda$lambda$lambda($skill));
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_0, skillSection$lambda$lambda$lambda$lambda_0($percentage));
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_1, skillSection$lambda$lambda$lambda$lambda_1($percentage));
      return Unit_getInstance();
    };
  }
  function skillSection$lambda$lambda_0($skills) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).grid;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.gridTemplateColumns = 'repeat(auto-fit, minmax(250px, 1fr))';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.gap = toString(20) + 'px';
      $this$div.className = css(this_0);
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $skills.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'kotlin.collections.component1' call
        var skill = element.get_key_18j28a_k$();
        // Inline function 'kotlin.collections.component2' call
        var percentage = element.get_value_j01efc_k$();
        // Inline function 'react.dom.html.ReactHTML.div' call
        ReactHTML_getInstance();
        // Inline function 'react.IntrinsicType' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = 'div';
        $this$div.invoke_mz6d4x_k$(tmp, skillSection$lambda$lambda$lambda(skill, percentage));
      }
      return Unit_getInstance();
    };
  }
  function skillSection$lambda($skills) {
    return function ($this$section) {
      $this$section.id = 'skills';
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp2 = toString(100) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(0) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp2) + ' ' + toString(horizontal);
      $this$section.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.h2' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'h2';
      $this$section.invoke_mz6d4x_k$(tmp, skillSection$lambda$lambda);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'div';
      $this$section.invoke_mz6d4x_k$(tmp_0, skillSection$lambda$lambda_0($skills));
      return Unit_getInstance();
    };
  }
  function socialMediaIcons(_this__u8e3s4, appMap) {
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'div';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, socialMediaIcons$lambda(appMap));
  }
  function socialMediaIcons$lambda$lambda$lambda$lambda$lambda($it) {
    return function ($this$path) {
      $this$path.d = $it.get_value_j01efc_k$();
      $this$path.fill = 'white';
      return Unit_getInstance();
    };
  }
  function socialMediaIcons$lambda$lambda$lambda$lambda($it) {
    return function ($this$svg) {
      $this$svg.width = 24.0;
      $this$svg.height = 24.0;
      $this$svg.viewBox = '0 0 24 24';
      $this$svg.fill = 'none';
      // Inline function 'react.dom.svg.ReactSVG.path' call
      ReactSVG_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'path';
      $this$svg.invoke_mz6d4x_k$(tmp, socialMediaIcons$lambda$lambda$lambda$lambda$lambda($it));
      return Unit_getInstance();
    };
  }
  function socialMediaIcons$lambda$lambda$lambda($it) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.width = toString(44) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.height = toString(44) + 'px';
      // Inline function 'csstype.pct' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(50) + '%';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.backgroundColor = '#14293b';
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      this_0.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).center;
      this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.transition = 'transform 0.3s ease';
      // Inline function 'csstype.SimplePseudosRuleBuilder.hover' call
      // Inline function 'csstype.RuleBuilder.invoke' call
      // Inline function 'csstype.Selector' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.RuleBuilder.invoke' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_1 = {};
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_1.transform = 'scale(1.1)';
      // Inline function 'js.core.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0[':hover'] = this_1;
      $this$div.className = css(this_0);
      // Inline function 'react.dom.svg.ReactSVG.svg' call
      ReactSVG_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'svg';
      $this$div.invoke_mz6d4x_k$(tmp, socialMediaIcons$lambda$lambda$lambda$lambda($it));
      return Unit_getInstance();
    };
  }
  function socialMediaIcons$lambda$lambda($it) {
    return function ($this$a) {
      $this$a.href = $it.get_key_18j28a_k$();
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      $this$a.target = '_blank';
      $this$a.rel = 'noopener noreferrer';
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'div';
      $this$a.invoke_mz6d4x_k$(tmp, socialMediaIcons$lambda$lambda$lambda($it));
      return Unit_getInstance();
    };
  }
  function socialMediaIcons$lambda($appMap) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.gap = toString(15) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.marginTop = toString(20) + 'px';
      $this$div.className = css(this_0);
      // Inline function 'kotlin.collections.forEach' call
      // Inline function 'kotlin.collections.iterator' call
      var _iterator__ex2g4s = $appMap.get_entries_p20ztl_k$().iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        // Inline function 'react.dom.html.ReactHTML.a' call
        ReactHTML_getInstance();
        // Inline function 'react.IntrinsicType' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = 'a';
        $this$div.invoke_mz6d4x_k$(tmp, socialMediaIcons$lambda$lambda(element));
      }
      return Unit_getInstance();
    };
  }
  function workSection(_this__u8e3s4) {
    // Inline function 'react.dom.html.ReactHTML.section' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'section';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, workSection$lambda);
  }
  function workSection$lambda($this$section) {
    $this$section.id = 'works';
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp2 = toString(100) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.Padding' call
    var horizontal = toString(0) + 'px';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = toString(tmp2) + ' ' + toString(horizontal);
    $this$section.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.h2' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'h2';
    $this$section.invoke_mz6d4x_k$(tmp, workSection$lambda$lambda);
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = 'div';
    $this$section.invoke_mz6d4x_k$(tmp_0, workSection$lambda$lambda_0);
    return Unit_getInstance();
  }
  function workSection$lambda$lambda($this$h2) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(36) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(30) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#1e293b';
    $this$h2.className = css(this_0);
    $this$h2.unaryPlus_76unot_k$('My Works');
    return Unit_getInstance();
  }
  function workSection$lambda$lambda_0($this$div) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).grid;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.gridTemplateColumns = 'repeat(auto-fill, minmax(350px, 1fr))';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.gap = toString(30) + 'px';
    $this$div.className = css(this_0);
    var inductionVariable = 1;
    if (inductionVariable <= 6)
      do {
        var i = inductionVariable;
        inductionVariable = inductionVariable + 1 | 0;
        // Inline function 'react.dom.html.ReactHTML.div' call
        ReactHTML_getInstance();
        // Inline function 'react.IntrinsicType' call
        // Inline function 'kotlin.js.unsafeCast' call
        // Inline function 'kotlin.js.asDynamic' call
        var tmp = 'div';
        $this$div.invoke_mz6d4x_k$(tmp, workSection$lambda$lambda$lambda(i));
      }
       while (inductionVariable <= 6);
    return Unit_getInstance();
  }
  function workSection$lambda$lambda$lambda$lambda(event) {
    var tmp = event.currentTarget;
    (tmp instanceof HTMLElement ? tmp : THROW_CCE()).style.transform = 'translateY(-10px)';
    return Unit_getInstance();
  }
  function workSection$lambda$lambda$lambda$lambda_0(event) {
    var tmp = event.currentTarget;
    (tmp instanceof HTMLElement ? tmp : THROW_CCE()).style.transform = 'translateY(0)';
    return Unit_getInstance();
  }
  function workSection$lambda$lambda$lambda$lambda_1($i) {
    return function ($this$img) {
      $this$img.src = 'https://via.placeholder.com/350x200';
      $this$img.alt = 'Work sample ' + $i;
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.pct' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.width = toString(100) + '%';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.height = toString(200) + 'px';
      this_0.objectFit = (/*union*/{contain: 'contain', cover: 'cover', fill: 'fill', scaleDown: 'scale-down'}/*union*/).cover;
      $this$img.className = css(this_0);
      return Unit_getInstance();
    };
  }
  function workSection$lambda$lambda$lambda$lambda$lambda($i) {
    return function ($this$h3) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp4 = toString(0) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp5 = toString(0) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp6 = toString(10) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Margin' call
      var left = toString(0) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.margin = toString(tmp4) + ' ' + toString(tmp5) + ' ' + toString(tmp6) + ' ' + toString(left);
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.fontSize = toString(18) + 'px';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.color = '#1e293b';
      $this$h3.className = css(this_0);
      $this$h3.unaryPlus_76unot_k$('Project ' + $i);
      return Unit_getInstance();
    };
  }
  function workSection$lambda$lambda$lambda$lambda$lambda_0($this$p) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.margin = toString(0) + 'px';
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.color = '#64748b';
    $this$p.className = css(this_0);
    $this$p.unaryPlus_76unot_k$('Web Design & Development');
    return Unit_getInstance();
  }
  function workSection$lambda$lambda$lambda$lambda_2($i) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(20) + 'px';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.h3' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'h3';
      $this$div.invoke_mz6d4x_k$(tmp, workSection$lambda$lambda$lambda$lambda$lambda($i));
      // Inline function 'react.dom.html.ReactHTML.p' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'p';
      $this$div.invoke_mz6d4x_k$(tmp_0, workSection$lambda$lambda$lambda$lambda$lambda_0);
      return Unit_getInstance();
    };
  }
  function workSection$lambda$lambda$lambda($i) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(12) + 'px';
      this_0.overflow = (/*union*/{clip: 'clip', hidden: 'hidden', scroll: 'scroll', visible: 'visible'}/*union*/).hidden;
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp8 = toString(0) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp9 = toString(4) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp10 = toString(6) + 'px';
      // Inline function 'csstype.rgba' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.BoxShadow' call
      var color = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.05 + ')';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.boxShadow = toString(tmp8) + ' ' + toString(tmp9) + ' ' + toString(tmp10) + ' ' + toString(color);
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.backgroundColor = 'white';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.transition = 'transform 0.3s ease';
      this_0.cursor = (/*union*/{alias: 'alias', allScroll: 'all-scroll', cell: 'cell', colResize: 'col-resize', contextMenu: 'context-menu', copy: 'copy', crosshair: 'crosshair', default: 'default', eResize: 'e-resize', ewResize: 'ew-resize', grab: 'grab', grabbing: 'grabbing', help: 'help', move: 'move', nResize: 'n-resize', neResize: 'ne-resize', neswResize: 'nesw-resize', noDrop: 'no-drop', notAllowed: 'not-allowed', nsResize: 'ns-resize', nwResize: 'nw-resize', nwseResize: 'nwse-resize', pointer: 'pointer', progress: 'progress', rowResize: 'row-resize', sResize: 's-resize', seResize: 'se-resize', swResize: 'sw-resize', text: 'text', verticalText: 'vertical-text', wResize: 'w-resize', wait: 'wait', zoomIn: 'zoom-in', zoomOut: 'zoom-out'}/*union*/).pointer;
      $this$div.className = css(this_0);
      $this$div.onMouseOver = workSection$lambda$lambda$lambda$lambda;
      $this$div.onMouseOut = workSection$lambda$lambda$lambda$lambda_0;
      // Inline function 'react.dom.html.ReactHTML.img' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'img';
      $this$div.invoke_mz6d4x_k$(tmp, workSection$lambda$lambda$lambda$lambda_1($i));
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_0, workSection$lambda$lambda$lambda$lambda_2($i));
      return Unit_getInstance();
    };
  }
  function Colors() {
    Colors_instance = this;
    var tmp = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.backgroundGradientStart_1 = '#4ac8e0';
    var tmp_0 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.backgroundGradientEnd_1 = '#c4ebf1';
    var tmp_1 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_1.primary_1 = '#1a3c5f';
    var tmp_2 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_2.primaryHover_1 = '#0f2a46';
    var tmp_3 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_3.textColor_1 = '#525252';
    var tmp_4 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_4.white_1 = '#ffffff';
    var tmp_5 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_5.inputBorder_1 = '#e0e0e0';
    var tmp_6 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_6.inputBorderHover_1 = '#c0c0c0';
    var tmp_7 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_7.linkColor_1 = '#1a3c5f';
    var tmp_8 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_8.transparent_1 = 'transparent';
    var tmp_9 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_9.iconColor_1 = '#525252';
    var tmp_10 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_10.avatarBackground_1 = '#ffffffe6';
    var tmp_11 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_11.avatarSilhouette_1 = '#1a3c5f';
    var tmp_12 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_12.blue_1 = '#0000FF';
    var tmp_13 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_13.red_1 = '#FF0000';
    var tmp_14 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_14.yellow_1 = '#FFFF00';
    var tmp_15 = this;
    // Inline function 'csstype.Color' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_15.green_1 = '#00FF00';
  }
  protoOf(Colors).get_backgroundGradientStart_dp7o2j_k$ = function () {
    return this.backgroundGradientStart_1;
  };
  protoOf(Colors).get_backgroundGradientEnd_hlsnys_k$ = function () {
    return this.backgroundGradientEnd_1;
  };
  protoOf(Colors).get_primary_3xuktj_k$ = function () {
    return this.primary_1;
  };
  protoOf(Colors).get_primaryHover_e8jdy5_k$ = function () {
    return this.primaryHover_1;
  };
  protoOf(Colors).get_textColor_92p84z_k$ = function () {
    return this.textColor_1;
  };
  protoOf(Colors).get_white_j0plog_k$ = function () {
    return this.white_1;
  };
  protoOf(Colors).get_inputBorder_piey5_k$ = function () {
    return this.inputBorder_1;
  };
  protoOf(Colors).get_inputBorderHover_o2opan_k$ = function () {
    return this.inputBorderHover_1;
  };
  protoOf(Colors).get_linkColor_is0ra8_k$ = function () {
    return this.linkColor_1;
  };
  protoOf(Colors).get_transparent_enj387_k$ = function () {
    return this.transparent_1;
  };
  protoOf(Colors).get_iconColor_ewsbwf_k$ = function () {
    return this.iconColor_1;
  };
  protoOf(Colors).get_avatarBackground_ijtj5c_k$ = function () {
    return this.avatarBackground_1;
  };
  protoOf(Colors).get_avatarSilhouette_eebcpm_k$ = function () {
    return this.avatarSilhouette_1;
  };
  protoOf(Colors).get_blue_wojj4z_k$ = function () {
    return this.blue_1;
  };
  protoOf(Colors).get_red_18ix20_k$ = function () {
    return this.red_1;
  };
  protoOf(Colors).get_yellow_m9mum5_k$ = function () {
    return this.yellow_1;
  };
  protoOf(Colors).get_green_is36qi_k$ = function () {
    return this.green_1;
  };
  var Colors_instance;
  function Colors_getInstance() {
    if (Colors_instance == null)
      new Colors();
    return Colors_instance;
  }
  function Dimensions() {
    Dimensions_instance = this;
    var tmp = this;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.loginBoxWidth_1 = toString(320) + 'px';
  }
  protoOf(Dimensions).get_loginBoxWidth_kk5j4r_k$ = function () {
    return this.loginBoxWidth_1;
  };
  var Dimensions_instance;
  function Dimensions_getInstance() {
    if (Dimensions_instance == null)
      new Dimensions();
    return Dimensions_instance;
  }
  function Typography() {
    Typography_instance = this;
    this.BASE_FONT_FAMILY_1 = "'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif";
    var tmp = this;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp.inputFontSize_1 = toString(14) + 'px';
    var tmp_0 = this;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_0.smallFontSize_1 = toString(12) + 'px';
    var tmp_1 = this;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    tmp_1.buttonFontSize_1 = toString(14) + 'px';
  }
  protoOf(Typography).get_BASE_FONT_FAMILY_aycvxr_k$ = function () {
    return this.BASE_FONT_FAMILY_1;
  };
  protoOf(Typography).get_inputFontSize_db4yb5_k$ = function () {
    return this.inputFontSize_1;
  };
  protoOf(Typography).get_smallFontSize_xhxatu_k$ = function () {
    return this.smallFontSize_1;
  };
  protoOf(Typography).get_buttonFontSize_qmju7p_k$ = function () {
    return this.buttonFontSize_1;
  };
  var Typography_instance;
  function Typography_getInstance() {
    if (Typography_instance == null)
      new Typography();
    return Typography_instance;
  }
  function get_scrollAnimationStyles() {
    return scrollAnimationStyles;
  }
  var scrollAnimationStyles;
  function initScrollAnimations(animationClass, threshold, rootMargin) {
    animationClass = animationClass === VOID ? 'animate' : animationClass;
    threshold = threshold === VOID ? 0.1 : threshold;
    rootMargin = rootMargin === VOID ? '0px' : rootMargin;
    var tmp = window;
    tmp.onload = initScrollAnimations$lambda(threshold, rootMargin, animationClass);
  }
  function initScrollAnimations$lambda$lambda($animationClass) {
    return function (entries, observer) {
      // Inline function 'kotlin.collections.forEach' call
      var inductionVariable = 0;
      var last = entries.length;
      while (inductionVariable < last) {
        var element = entries[inductionVariable];
        inductionVariable = inductionVariable + 1 | 0;
        if (element.isIntersecting) {
          element.target.classList.add($animationClass);
          observer.unobserve(element.target);
        }
      }
      return Unit_getInstance();
    };
  }
  function initScrollAnimations$lambda($threshold, $rootMargin, $animationClass) {
    return function (it) {
      var sectionIds = listOf(['home', 'about', 'skills', 'works', 'contact']);
      // Inline function 'kotlin.collections.mapNotNull' call
      // Inline function 'kotlin.collections.mapNotNullTo' call
      var destination = ArrayList_init_$Create$();
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s = sectionIds.iterator_jk1svi_k$();
      while (_iterator__ex2g4s.hasNext_bitz1p_k$()) {
        var element = _iterator__ex2g4s.next_20eer_k$();
        var tmp0_safe_receiver = document.getElementById(element);
        if (tmp0_safe_receiver == null)
          null;
        else {
          // Inline function 'kotlin.let' call
          destination.add_utx5q5_k$(tmp0_safe_receiver);
        }
      }
      var sections = destination;
      var options = json([to('threshold', $threshold), to('rootMargin', $rootMargin)]);
      var observer = new IntersectionObserver(initScrollAnimations$lambda$lambda($animationClass), options);
      // Inline function 'kotlin.collections.forEach' call
      var _iterator__ex2g4s_0 = sections.iterator_jk1svi_k$();
      while (_iterator__ex2g4s_0.hasNext_bitz1p_k$()) {
        var element_0 = _iterator__ex2g4s_0.next_20eer_k$();
        observer.observe(element_0);
      }
      return Unit_getInstance();
    };
  }
  function createRoot_0(container) {
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    return createRoot(container);
  }
  //region block: init
  scrollAnimationStyles = '\n    .animate {\n        animation: fadeInUp 0.6s ease forwards;\n        opacity: 0;\n    }\n\n    @keyframes fadeInUp {\n        from {\n            opacity: 0;\n            transform: translateY(30px);\n        }\n        to {\n            opacity: 1;\n            transform: translateY(0);\n        }\n    }\n\n    @keyframes fadeInLeft {\n        from {\n            opacity: 0;\n            transform: translateX(-30px);\n        }\n        to {\n            opacity: 1;\n            transform: translateX(0);\n        }\n    }\n\n    @keyframes fadeInRight {\n        from {\n            opacity: 0;\n            transform: translateX(30px);\n        }\n        to {\n            opacity: 1;\n            transform: translateX(0);\n        }\n    }\n\n    @keyframes zoomIn {\n        from {\n            opacity: 0;\n            transform: scale(0.95);\n        }\n        to {\n            opacity: 1;\n            transform: scale(1);\n        }\n    }\n\n    /* Animation variants */\n    #home.animate {\n        animation-name: fadeInUp;\n        animation-duration: 0.8s;\n    }\n\n    #about.animate {\n        animation-name: fadeInLeft;\n        animation-duration: 0.7s;\n    }\n\n    #skills.animate {\n        animation-name: fadeInRight;\n        animation-duration: 0.7s;\n    }\n\n    #works.animate {\n        animation-name: zoomIn;\n        animation-duration: 0.8s;\n    }\n\n    #contact.animate {\n        animation-name: fadeInUp;\n        animation-duration: 0.7s;\n    }\n\n    /* Animation delays */\n    .animate-delay-100 {\n        animation-delay: 100ms;\n    }\n\n    .animate-delay-200 {\n        animation-delay: 200ms;\n    }\n\n    .animate-delay-300 {\n        animation-delay: 300ms;\n    }\n\n    .animate-delay-400 {\n        animation-delay: 400ms;\n    }\n\n    .animate-delay-500 {\n        animation-delay: 500ms;\n    }\n';
  //endregion
  mainWrapper();
  return _;
}));
