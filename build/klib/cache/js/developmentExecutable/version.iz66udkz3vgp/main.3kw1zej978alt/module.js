(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', 'react-dom/client', '@emotion/css', 'react', 'react-router', 'react-router-dom', './kotlin-wrappers-kotlin-styled-js-ir.js', './kotlin-kotlin-stdlib.js', './kotlin-wrappers-kotlin-react-js-ir.js', './kotlin-wrappers-kotlin-react-dom-js-ir.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('react-dom/client'), require('@emotion/css'), require('react'), require('react-router'), require('react-router-dom'), require('./kotlin-wrappers-kotlin-styled-js-ir.js'), require('./kotlin-kotlin-stdlib.js'), require('./kotlin-wrappers-kotlin-react-js-ir.js'), require('./kotlin-wrappers-kotlin-react-dom-js-ir.js'));
  else {
    if (typeof globalThis['react-dom/client'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'react-dom/client' was not found. Please, check whether 'react-dom/client' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['@emotion/css'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency '@emotion/css' was not found. Please, check whether '@emotion/css' is loaded prior to 'Portfolio'.");
    }
    if (typeof react === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'react' was not found. Please, check whether 'react' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['react-router'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'react-router' was not found. Please, check whether 'react-router' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['react-router-dom'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'react-router-dom' was not found. Please, check whether 'react-router-dom' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-styled-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'kotlin-wrappers-kotlin-styled-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-styled-js-ir' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-react-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-js-ir' is loaded prior to 'Portfolio'.");
    }
    if (typeof globalThis['kotlin-wrappers-kotlin-react-dom-js-ir'] === 'undefined') {
      throw new Error("Error loading module 'Portfolio'. Its dependency 'kotlin-wrappers-kotlin-react-dom-js-ir' was not found. Please, check whether 'kotlin-wrappers-kotlin-react-dom-js-ir' is loaded prior to 'Portfolio'.");
    }
    globalThis.Portfolio = factory(typeof Portfolio === 'undefined' ? {} : Portfolio, globalThis['react-dom/client'], globalThis['@emotion/css'], react, globalThis['react-router'], globalThis['react-router-dom'], globalThis['kotlin-wrappers-kotlin-styled-js-ir'], globalThis['kotlin-kotlin-stdlib'], globalThis['kotlin-wrappers-kotlin-react-js-ir'], globalThis['kotlin-wrappers-kotlin-react-dom-js-ir']);
  }
}(function (_, $module$react_dom_client_y5z5eu, $module$_emotion_css_2enn37, $module$react, $module$react_router_h6p15h, $module$react_router_dom_s6xi74, kotlin_org_jetbrains_kotlin_wrappers_kotlin_styled, kotlin_kotlin, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react, kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom) {
  'use strict';
  //region block: imports
  var createRoot = $module$react_dom_client_y5z5eu.createRoot;
  var css = $module$_emotion_css_2enn37.css;
  var useState = $module$react.useState;
  var imul = Math.imul;
  var useNavigate = $module$react_router_h6p15h.useNavigate;
  var HashRouter = $module$react_router_dom_s6xi74.HashRouter;
  var Routes = $module$react_router_h6p15h.Routes;
  var Route = $module$react_router_h6p15h.Route;
  var injectGlobal = kotlin_org_jetbrains_kotlin_wrappers_kotlin_styled.$_$.a;
  var Unit_getInstance = kotlin_kotlin.$_$.v3;
  var FC = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.a;
  var toString = kotlin_kotlin.$_$.g8;
  var IllegalStateException_init_$Create$ = kotlin_kotlin.$_$.h1;
  var create = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react.$_$.b;
  var VOID = kotlin_kotlin.$_$.d;
  var ReactHTML_getInstance = kotlin_org_jetbrains_kotlin_wrappers_kotlin_react_dom.$_$.a;
  var KMutableProperty0 = kotlin_kotlin.$_$.q8;
  var THROW_ISE = kotlin_kotlin.$_$.y9;
  var getLocalDelegateReference = kotlin_kotlin.$_$.d7;
  var noWhenBranchMatchedException = kotlin_kotlin.$_$.oa;
  var protoOf = kotlin_kotlin.$_$.d8;
  var getStringHashCode = kotlin_kotlin.$_$.g7;
  var THROW_CCE = kotlin_kotlin.$_$.w9;
  var initMetadataForClass = kotlin_kotlin.$_$.i7;
  var getBooleanHashCode = kotlin_kotlin.$_$.c7;
  var initMetadataForObject = kotlin_kotlin.$_$.m7;
  var initMetadataForInterface = kotlin_kotlin.$_$.k7;
  //endregion
  //region block: pre-declaration
  initMetadataForInterface(LoginEvent, 'LoginEvent');
  initMetadataForClass(EmailChanged, 'EmailChanged', VOID, VOID, [LoginEvent]);
  initMetadataForClass(PasswordChanged, 'PasswordChanged', VOID, VOID, [LoginEvent]);
  initMetadataForClass(RememberMeChanged, 'RememberMeChanged', VOID, VOID, [LoginEvent]);
  initMetadataForObject(Submit, 'Submit', VOID, VOID, [LoginEvent]);
  initMetadataForClass(LoginState, 'LoginState', LoginState);
  initMetadataForObject(Colors, 'Colors');
  initMetadataForObject(Dimensions, 'Dimensions');
  initMetadataForObject(Typography, 'Typography');
  //endregion
  function get_App() {
    _init_properties_App_kt__fk8usv();
    return App;
  }
  var App;
  function globalStyles() {
    _init_properties_App_kt__fk8usv();
    injectGlobal("* {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n}\n\nbody {\n    font-family: 'Roboto', 'Segoe UI', 'Helvetica Neue', sans-serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n}\n\nhtml, body {\n    height: 100%;\n    width: 100%;\n}\n\n#root {\n    height: 100%;\n    width: 100%;\n}");
  }
  function App$lambda($this$FC, it) {
    _init_properties_App_kt__fk8usv();
    var tmp = get_AppRouter();
    $this$FC.invoke_mz6d4x_k$(tmp, App$lambda$lambda);
    return Unit_getInstance();
  }
  function App$lambda$lambda($this$AppRouter) {
    _init_properties_App_kt__fk8usv();
    return Unit_getInstance();
  }
  var properties_initialized_App_kt_kalemn;
  function _init_properties_App_kt__fk8usv() {
    if (!properties_initialized_App_kt_kalemn) {
      properties_initialized_App_kt_kalemn = true;
      App = FC(App$lambda);
    }
  }
  function main() {
    globalStyles();
    var tmp0_elvis_lhs = document.getElementById('root');
    var tmp;
    if (tmp0_elvis_lhs == null) {
      var message = "Couldn't find container with id 'root'";
      throw IllegalStateException_init_$Create$(toString(message));
    } else {
      tmp = tmp0_elvis_lhs;
    }
    var container = tmp;
    createRoot(container).render(create(get_App()));
  }
  function mainWrapper() {
    main();
  }
  function customButton(_this__u8e3s4, text, color, type, onClick) {
    type = type === VOID ? (/*union*/{submit: 'submit', reset: 'reset', button: 'button'}/*union*/).button : type;
    // Inline function 'react.dom.html.ReactHTML.button' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'button';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, customButton$lambda(type, text, onClick, color));
  }
  function customButton$lambda($type, $text, $onClick, $color) {
    return function ($this$button) {
      $this$button.type = $type;
      $this$button.unaryPlus_76unot_k$($text);
      $this$button.onClick = $onClick;
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.marginTop = toString(16) + 'px';
      this_0.backgroundColor = $color;
      this_0.border = (/*union*/{none: 'none'}/*union*/).none;
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp3 = toString(12) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(24) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp3) + ' ' + toString(horizontal);
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(4) + 'px';
      this_0.cursor = (/*union*/{alias: 'alias', allScroll: 'all-scroll', cell: 'cell', colResize: 'col-resize', contextMenu: 'context-menu', copy: 'copy', crosshair: 'crosshair', default: 'default', eResize: 'e-resize', ewResize: 'ew-resize', grab: 'grab', grabbing: 'grabbing', help: 'help', move: 'move', nResize: 'n-resize', neResize: 'ne-resize', neswResize: 'nesw-resize', noDrop: 'no-drop', notAllowed: 'not-allowed', nsResize: 'ns-resize', nwResize: 'nw-resize', nwseResize: 'nwse-resize', pointer: 'pointer', progress: 'progress', rowResize: 'row-resize', sResize: 's-resize', seResize: 'se-resize', swResize: 'sw-resize', text: 'text', verticalText: 'vertical-text', wResize: 'w-resize', wait: 'wait', zoomIn: 'zoom-in', zoomOut: 'zoom-out'}/*union*/).pointer;
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
      this_1.backgroundColor = Colors_getInstance().get_primaryHover_e8jdy5_k$();
      // Inline function 'js.core.set' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0[':hover'] = this_1;
      $this$button.className = css(this_0);
      return Unit_getInstance();
    };
  }
  function formContainer(_this__u8e3s4, content) {
    // Inline function 'react.dom.html.ReactHTML.form' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'form';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, formContainer$lambda(content));
  }
  function formContainer$lambda($content) {
    return function ($this$form) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      this_0.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
      this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      this_0.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).center;
      // Inline function 'csstype.pct' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.width = toString(100) + '%';
      // Inline function 'csstype.vh' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.height = toString(100) + 'vh';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.background = 'linear-gradient(135deg, #6a11cb, #2575fc)';
      $this$form.className = css(this_0);
      $content($this$form);
      return Unit_getInstance();
    };
  }
  function inputField(_this__u8e3s4, type, placeholder, value, onValueChange) {
    // Inline function 'react.dom.html.ReactHTML.input' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'input';
    _this__u8e3s4.invoke_mz6d4x_k$(tmp, inputField$lambda(type, placeholder, value, onValueChange));
  }
  function inputField$lambda$lambda($onValueChange) {
    return function (event) {
      $onValueChange(event.target.value);
      return Unit_getInstance();
    };
  }
  function inputField$lambda($type, $placeholder, $value, $onValueChange) {
    return function ($this$input) {
      $this$input.type = $type;
      $this$input.placeholder = $placeholder;
      $this$input.value = $value;
      $this$input.onChange = inputField$lambda$lambda($onValueChange);
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
      this_0.marginBottom = toString(12) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp4 = toString(10) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(12) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp4) + ' ' + toString(horizontal);
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(4) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp9 = toString(1) + 'px';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Border' call
      var style = (/*union*/{dashed: 'dashed', dotted: 'dotted', double: 'double', groove: 'groove', hidden: 'hidden', inset: 'inset', outset: 'outset', ridge: 'ridge', solid: 'solid'}/*union*/).solid;
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.border = toString(tmp9) + ' ' + toString(style) + ' ' + toString('#ccc');
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.fontSize = toString(16) + 'px';
      this_0.boxSizing = (/*union*/{borderBox: 'border-box', contentBox: 'content-box'}/*union*/).borderBox;
      $this$input.className = css(this_0);
      return Unit_getInstance();
    };
  }
  function login(_this__u8e3s4, onLogin) {
    var state$delegate = useState(new LoginState());
    formContainer(_this__u8e3s4, login$lambda_1(state$delegate, onLogin));
  }
  function login$lambda($state$delegate) {
    // Inline function 'react.StateInstance.getValue' call
    getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    return $state$delegate[0];
  }
  function login$lambda_0($state$delegate, _set____db54di) {
    // Inline function 'react.StateInstance.setValue' call
    getLocalDelegateReference('state', KMutableProperty0, true, function () {
      return THROW_ISE();
    });
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'react.StateSetter.invoke' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    $state$delegate[1](_set____db54di);
    return Unit_getInstance();
  }
  function login$onEvent($onLogin, state$delegate, event) {
    var tmp;
    if (event instanceof EmailChanged) {
      tmp = login$lambda(state$delegate).copy$default_nuoud7_k$(event.get_email_iqwbqr_k$());
    } else {
      if (event instanceof PasswordChanged) {
        tmp = login$lambda(state$delegate).copy$default_nuoud7_k$(VOID, event.get_password_bodifw_k$());
      } else {
        if (event instanceof RememberMeChanged) {
          tmp = login$lambda(state$delegate).copy$default_nuoud7_k$(VOID, VOID, event.get_checked_djib3y_k$());
        } else {
          if (event instanceof Submit) {
            $onLogin(login$lambda(state$delegate).get_email_iqwbqr_k$(), login$lambda(state$delegate).get_password_bodifw_k$());
            tmp = login$lambda(state$delegate);
          } else {
            noWhenBranchMatchedException();
          }
        }
      }
    }
    login$lambda_0(state$delegate, tmp);
  }
  function login$lambda$lambda$lambda($this$div) {
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.alignSelf = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(48) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(24) + 'px';
    $this$div.className = css(this_0);
    $this$div.unaryPlus_76unot_k$('\uD83D\uDC64');
    return Unit_getInstance();
  }
  function login$lambda$lambda$lambda_0($onLogin, $state$delegate) {
    return function (it) {
      login$onEvent($onLogin, $state$delegate, new EmailChanged(it));
      return Unit_getInstance();
    };
  }
  function login$lambda$lambda$lambda_1($onLogin, $state$delegate) {
    return function (it) {
      login$onEvent($onLogin, $state$delegate, new PasswordChanged(it));
      return Unit_getInstance();
    };
  }
  function login$lambda$lambda$lambda$lambda$lambda$lambda($onLogin, $state$delegate) {
    return function (event) {
      login$onEvent($onLogin, $state$delegate, new RememberMeChanged(event.target.checked));
      return Unit_getInstance();
    };
  }
  function login$lambda$lambda$lambda$lambda$lambda($state$delegate, $onLogin) {
    return function ($this$input) {
      $this$input.type = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).checkbox;
      $this$input.checked = login$lambda($state$delegate).get_rememberMe_b0okmq_k$();
      $this$input.onChange = login$lambda$lambda$lambda$lambda$lambda$lambda($onLogin, $state$delegate);
      return Unit_getInstance();
    };
  }
  function login$lambda$lambda$lambda$lambda($state$delegate, $onLogin) {
    return function ($this$label) {
      // Inline function 'react.dom.html.ReactHTML.input' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'input';
      $this$label.invoke_mz6d4x_k$(tmp, login$lambda$lambda$lambda$lambda$lambda($state$delegate, $onLogin));
      $this$label.unaryPlus_76unot_k$(' Remember Me');
      return Unit_getInstance();
    };
  }
  function login$lambda$lambda$lambda_2($state$delegate, $onLogin) {
    return function ($this$div) {
      // Inline function 'react.dom.html.ReactHTML.label' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'label';
      $this$div.invoke_mz6d4x_k$(tmp, login$lambda$lambda$lambda$lambda($state$delegate, $onLogin));
      return Unit_getInstance();
    };
  }
  function login$lambda$lambda$lambda_3($onLogin, $state$delegate) {
    return function (it) {
      login$onEvent($onLogin, $state$delegate, Submit_getInstance());
      return Unit_getInstance();
    };
  }
  function login$lambda$lambda($state$delegate, $onLogin) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.backgroundColor = Colors_getInstance().get_white_j0plog_k$();
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp2 = toString(24) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(24) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp2) + ' ' + toString(horizontal);
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(8) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.width = toString(300) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp13 = toString(0) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp14 = toString(4) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp15 = toString(12) + 'px';
      // Inline function 'csstype.rgba' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.BoxShadow' call
      var color = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.1 + ')';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.boxShadow = toString(tmp13) + ' ' + toString(tmp14) + ' ' + toString(tmp15) + ' ' + toString(color);
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'div';
      $this$div.invoke_mz6d4x_k$(tmp, login$lambda$lambda$lambda);
      var tmp_0 = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).email;
      var tmp_1 = login$lambda($state$delegate).get_email_iqwbqr_k$();
      inputField($this$div, tmp_0, 'Email', tmp_1, login$lambda$lambda$lambda_0($onLogin, $state$delegate));
      var tmp_2 = (/*union*/{button: 'button', checkbox: 'checkbox', color: 'color', date: 'date', datetimeLocal: 'datetime-local', email: 'email', file: 'file', hidden: 'hidden', image: 'image', month: 'month', number: 'number', password: 'password', radio: 'radio', range: 'range', reset: 'reset', search: 'search', submit: 'submit', tel: 'tel', text: 'text', time: 'time', url: 'url', week: 'week'}/*union*/).password;
      var tmp_3 = login$lambda($state$delegate).get_password_bodifw_k$();
      inputField($this$div, tmp_2, 'Password', tmp_3, login$lambda$lambda$lambda_1($onLogin, $state$delegate));
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_4 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_4, login$lambda$lambda$lambda_2($state$delegate, $onLogin));
      var tmp_5 = Colors_getInstance().get_primary_3xuktj_k$();
      var tmp_6 = (/*union*/{submit: 'submit', reset: 'reset', button: 'button'}/*union*/).submit;
      customButton($this$div, 'Login', tmp_5, tmp_6, login$lambda$lambda$lambda_3($onLogin, $state$delegate));
      return Unit_getInstance();
    };
  }
  function login$lambda_1($state$delegate, $onLogin) {
    return function ($this$formContainer) {
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'div';
      $this$formContainer.invoke_mz6d4x_k$(tmp, login$lambda$lambda($state$delegate, $onLogin));
      return Unit_getInstance();
    };
  }
  function EmailChanged(email) {
    this.email_1 = email;
  }
  protoOf(EmailChanged).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(EmailChanged).component1_7eebsc_k$ = function () {
    return this.email_1;
  };
  protoOf(EmailChanged).copy_a35qlh_k$ = function (email) {
    return new EmailChanged(email);
  };
  protoOf(EmailChanged).copy$default_g7tv4t_k$ = function (email, $super) {
    email = email === VOID ? this.email_1 : email;
    return $super === VOID ? this.copy_a35qlh_k$(email) : $super.copy_a35qlh_k$.call(this, email);
  };
  protoOf(EmailChanged).toString = function () {
    return 'EmailChanged(email=' + this.email_1 + ')';
  };
  protoOf(EmailChanged).hashCode = function () {
    return getStringHashCode(this.email_1);
  };
  protoOf(EmailChanged).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof EmailChanged))
      return false;
    var tmp0_other_with_cast = other instanceof EmailChanged ? other : THROW_CCE();
    if (!(this.email_1 === tmp0_other_with_cast.email_1))
      return false;
    return true;
  };
  function PasswordChanged(password) {
    this.password_1 = password;
  }
  protoOf(PasswordChanged).get_password_bodifw_k$ = function () {
    return this.password_1;
  };
  protoOf(PasswordChanged).component1_7eebsc_k$ = function () {
    return this.password_1;
  };
  protoOf(PasswordChanged).copy_a35qlh_k$ = function (password) {
    return new PasswordChanged(password);
  };
  protoOf(PasswordChanged).copy$default_uncsew_k$ = function (password, $super) {
    password = password === VOID ? this.password_1 : password;
    return $super === VOID ? this.copy_a35qlh_k$(password) : $super.copy_a35qlh_k$.call(this, password);
  };
  protoOf(PasswordChanged).toString = function () {
    return 'PasswordChanged(password=' + this.password_1 + ')';
  };
  protoOf(PasswordChanged).hashCode = function () {
    return getStringHashCode(this.password_1);
  };
  protoOf(PasswordChanged).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof PasswordChanged))
      return false;
    var tmp0_other_with_cast = other instanceof PasswordChanged ? other : THROW_CCE();
    if (!(this.password_1 === tmp0_other_with_cast.password_1))
      return false;
    return true;
  };
  function RememberMeChanged(checked) {
    this.checked_1 = checked;
  }
  protoOf(RememberMeChanged).get_checked_djib3y_k$ = function () {
    return this.checked_1;
  };
  protoOf(RememberMeChanged).component1_7eebsc_k$ = function () {
    return this.checked_1;
  };
  protoOf(RememberMeChanged).copy_o18wmo_k$ = function (checked) {
    return new RememberMeChanged(checked);
  };
  protoOf(RememberMeChanged).copy$default_uxs0kp_k$ = function (checked, $super) {
    checked = checked === VOID ? this.checked_1 : checked;
    return $super === VOID ? this.copy_o18wmo_k$(checked) : $super.copy_o18wmo_k$.call(this, checked);
  };
  protoOf(RememberMeChanged).toString = function () {
    return 'RememberMeChanged(checked=' + this.checked_1 + ')';
  };
  protoOf(RememberMeChanged).hashCode = function () {
    return getBooleanHashCode(this.checked_1);
  };
  protoOf(RememberMeChanged).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof RememberMeChanged))
      return false;
    var tmp0_other_with_cast = other instanceof RememberMeChanged ? other : THROW_CCE();
    if (!(this.checked_1 === tmp0_other_with_cast.checked_1))
      return false;
    return true;
  };
  function Submit() {
    Submit_instance = this;
  }
  var Submit_instance;
  function Submit_getInstance() {
    if (Submit_instance == null)
      new Submit();
    return Submit_instance;
  }
  function LoginEvent() {
  }
  function LoginState(email, password, rememberMe) {
    email = email === VOID ? '' : email;
    password = password === VOID ? '' : password;
    rememberMe = rememberMe === VOID ? false : rememberMe;
    this.email_1 = email;
    this.password_1 = password;
    this.rememberMe_1 = rememberMe;
  }
  protoOf(LoginState).get_email_iqwbqr_k$ = function () {
    return this.email_1;
  };
  protoOf(LoginState).get_password_bodifw_k$ = function () {
    return this.password_1;
  };
  protoOf(LoginState).get_rememberMe_b0okmq_k$ = function () {
    return this.rememberMe_1;
  };
  protoOf(LoginState).component1_7eebsc_k$ = function () {
    return this.email_1;
  };
  protoOf(LoginState).component2_7eebsb_k$ = function () {
    return this.password_1;
  };
  protoOf(LoginState).component3_7eebsa_k$ = function () {
    return this.rememberMe_1;
  };
  protoOf(LoginState).copy_bp1kc0_k$ = function (email, password, rememberMe) {
    return new LoginState(email, password, rememberMe);
  };
  protoOf(LoginState).copy$default_nuoud7_k$ = function (email, password, rememberMe, $super) {
    email = email === VOID ? this.email_1 : email;
    password = password === VOID ? this.password_1 : password;
    rememberMe = rememberMe === VOID ? this.rememberMe_1 : rememberMe;
    return $super === VOID ? this.copy_bp1kc0_k$(email, password, rememberMe) : $super.copy_bp1kc0_k$.call(this, email, password, rememberMe);
  };
  protoOf(LoginState).toString = function () {
    return 'LoginState(email=' + this.email_1 + ', password=' + this.password_1 + ', rememberMe=' + this.rememberMe_1 + ')';
  };
  protoOf(LoginState).hashCode = function () {
    var result = getStringHashCode(this.email_1);
    result = imul(result, 31) + getStringHashCode(this.password_1) | 0;
    result = imul(result, 31) + getBooleanHashCode(this.rememberMe_1) | 0;
    return result;
  };
  protoOf(LoginState).equals = function (other) {
    if (this === other)
      return true;
    if (!(other instanceof LoginState))
      return false;
    var tmp0_other_with_cast = other instanceof LoginState ? other : THROW_CCE();
    if (!(this.email_1 === tmp0_other_with_cast.email_1))
      return false;
    if (!(this.password_1 === tmp0_other_with_cast.password_1))
      return false;
    if (!(this.rememberMe_1 === tmp0_other_with_cast.rememberMe_1))
      return false;
    return true;
  };
  function get_DashboardPage() {
    _init_properties_DashboardPage_kt__3t01wv();
    return DashboardPage;
  }
  var DashboardPage;
  function DashboardPage$lambda($this$FC, it) {
    _init_properties_DashboardPage_kt__3t01wv();
    var navigate = useNavigate();
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'div';
    $this$FC.invoke_mz6d4x_k$(tmp, DashboardPage$lambda$lambda(navigate));
    return Unit_getInstance();
  }
  function DashboardPage$lambda$lambda$lambda($this$h1) {
    _init_properties_DashboardPage_kt__3t01wv();
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.color = Colors_getInstance().get_primary_3xuktj_k$();
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(20) + 'px';
    $this$h1.className = css(this_0);
    $this$h1.unaryPlus_76unot_k$('Dashboard');
    return Unit_getInstance();
  }
  function DashboardPage$lambda$lambda$lambda$lambda$lambda($navigate) {
    return function (it) {
      // Inline function 'react.router.NavigateFunction.invoke' call
      // Inline function 'kotlin.js.asDynamic' call
      $navigate('/profile');
      return Unit_getInstance();
    };
  }
  function DashboardPage$lambda$lambda$lambda$lambda($navigate) {
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
      var tmp2 = toString(10) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(20) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp2) + ' ' + toString(horizontal);
      this_0.backgroundColor = Colors_getInstance().get_primary_3xuktj_k$();
      this_0.color = Colors_getInstance().get_white_j0plog_k$();
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(4) + 'px';
      this_0.cursor = (/*union*/{alias: 'alias', allScroll: 'all-scroll', cell: 'cell', colResize: 'col-resize', contextMenu: 'context-menu', copy: 'copy', crosshair: 'crosshair', default: 'default', eResize: 'e-resize', ewResize: 'ew-resize', grab: 'grab', grabbing: 'grabbing', help: 'help', move: 'move', nResize: 'n-resize', neResize: 'ne-resize', neswResize: 'nesw-resize', noDrop: 'no-drop', notAllowed: 'not-allowed', nsResize: 'ns-resize', nwResize: 'nw-resize', nwseResize: 'nwse-resize', pointer: 'pointer', progress: 'progress', rowResize: 'row-resize', sResize: 's-resize', seResize: 'se-resize', swResize: 'sw-resize', text: 'text', verticalText: 'vertical-text', wResize: 'w-resize', wait: 'wait', zoomIn: 'zoom-in', zoomOut: 'zoom-out'}/*union*/).pointer;
      this_0.textAlign = (/*union*/{center: 'center', end: 'end', justify: 'justify', left: 'left', matchParent: 'match-parent', right: 'right', start: 'start'}/*union*/).center;
      $this$div.className = css(this_0);
      $this$div.onClick = DashboardPage$lambda$lambda$lambda$lambda$lambda($navigate);
      $this$div.unaryPlus_76unot_k$('View Profile');
      return Unit_getInstance();
    };
  }
  function DashboardPage$lambda$lambda$lambda$lambda$lambda_0($navigate) {
    return function (it) {
      // Inline function 'react.router.NavigateFunction.invoke' call
      // Inline function 'kotlin.js.asDynamic' call
      $navigate('/');
      return Unit_getInstance();
    };
  }
  function DashboardPage$lambda$lambda$lambda$lambda_0($navigate) {
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
      var tmp2 = toString(10) + 'px';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      // Inline function 'csstype.Padding' call
      var horizontal = toString(20) + 'px';
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(tmp2) + ' ' + toString(horizontal);
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.backgroundColor = '#6c757d';
      this_0.color = Colors_getInstance().get_white_j0plog_k$();
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.borderRadius = toString(4) + 'px';
      this_0.cursor = (/*union*/{alias: 'alias', allScroll: 'all-scroll', cell: 'cell', colResize: 'col-resize', contextMenu: 'context-menu', copy: 'copy', crosshair: 'crosshair', default: 'default', eResize: 'e-resize', ewResize: 'ew-resize', grab: 'grab', grabbing: 'grabbing', help: 'help', move: 'move', nResize: 'n-resize', neResize: 'ne-resize', neswResize: 'nesw-resize', noDrop: 'no-drop', notAllowed: 'not-allowed', nsResize: 'ns-resize', nwResize: 'nw-resize', nwseResize: 'nwse-resize', pointer: 'pointer', progress: 'progress', rowResize: 'row-resize', sResize: 's-resize', seResize: 'se-resize', swResize: 'sw-resize', text: 'text', verticalText: 'vertical-text', wResize: 'w-resize', wait: 'wait', zoomIn: 'zoom-in', zoomOut: 'zoom-out'}/*union*/).pointer;
      this_0.textAlign = (/*union*/{center: 'center', end: 'end', justify: 'justify', left: 'left', matchParent: 'match-parent', right: 'right', start: 'start'}/*union*/).center;
      $this$div.className = css(this_0);
      $this$div.onClick = DashboardPage$lambda$lambda$lambda$lambda$lambda_0($navigate);
      $this$div.unaryPlus_76unot_k$('Logout');
      return Unit_getInstance();
    };
  }
  function DashboardPage$lambda$lambda$lambda_0($navigate) {
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
      this_0.gap = toString(10) + 'px';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'div';
      $this$div.invoke_mz6d4x_k$(tmp, DashboardPage$lambda$lambda$lambda$lambda($navigate));
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_0, DashboardPage$lambda$lambda$lambda$lambda_0($navigate));
      return Unit_getInstance();
    };
  }
  function DashboardPage$lambda$lambda($navigate) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      this_0.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
      this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      this_0.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).center;
      // Inline function 'csstype.vh' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.height = toString(100) + 'vh';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(20) + 'px';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.backgroundColor = '#f5f5f5';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.h1' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'h1';
      $this$div.invoke_mz6d4x_k$(tmp, DashboardPage$lambda$lambda$lambda);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_0, DashboardPage$lambda$lambda$lambda_0($navigate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_DashboardPage_kt_6igv59;
  function _init_properties_DashboardPage_kt__3t01wv() {
    if (!properties_initialized_DashboardPage_kt_6igv59) {
      properties_initialized_DashboardPage_kt_6igv59 = true;
      DashboardPage = FC(DashboardPage$lambda);
    }
  }
  function get_LoginPage() {
    _init_properties_LoginPage_kt__xdpl7q();
    return LoginPage;
  }
  var LoginPage;
  function LoginPage$lambda($this$FC, it) {
    _init_properties_LoginPage_kt__xdpl7q();
    var navigate = useNavigate();
    var handleLogin = LoginPage$lambda$lambda(navigate);
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'div';
    $this$FC.invoke_mz6d4x_k$(tmp, LoginPage$lambda$lambda_0(handleLogin));
    return Unit_getInstance();
  }
  function LoginPage$lambda$lambda($navigate) {
    return function (email, password) {
      console.log('Login attempt with: ' + email + ', ' + password);
      // Inline function 'react.router.NavigateFunction.invoke' call
      // Inline function 'kotlin.js.asDynamic' call
      $navigate('/dashboard');
      return Unit_getInstance();
    };
  }
  function LoginPage$lambda$lambda$lambda($this$div) {
    _init_properties_LoginPage_kt__xdpl7q();
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
    this_0.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
    this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(20) + 'px';
    $this$div.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.h2' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'h2';
    $this$div.invoke_mz6d4x_k$(tmp, LoginPage$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function LoginPage$lambda$lambda$lambda$lambda($this$h2) {
    _init_properties_LoginPage_kt__xdpl7q();
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.color = Colors_getInstance().get_primary_3xuktj_k$();
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(10) + 'px';
    $this$h2.className = css(this_0);
    $this$h2.unaryPlus_76unot_k$('Welcome Back');
    return Unit_getInstance();
  }
  function LoginPage$lambda$lambda_0($handleLogin) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      this_0.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
      this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      this_0.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).center;
      // Inline function 'csstype.pct' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.width = toString(100) + '%';
      // Inline function 'csstype.vh' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.height = toString(100) + 'vh';
      this_0.backgroundColor = Colors_getInstance().get_backgroundGradientStart_dp7o2j_k$();
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.background = 'linear-gradient(135deg, ' + toString(Colors_getInstance().get_backgroundGradientStart_dp7o2j_k$()) + ', ' + toString(Colors_getInstance().get_backgroundGradientEnd_hlsnys_k$()) + ')';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'div';
      $this$div.invoke_mz6d4x_k$(tmp, LoginPage$lambda$lambda$lambda);
      login($this$div, $handleLogin);
      return Unit_getInstance();
    };
  }
  var properties_initialized_LoginPage_kt_f8beew;
  function _init_properties_LoginPage_kt__xdpl7q() {
    if (!properties_initialized_LoginPage_kt_f8beew) {
      properties_initialized_LoginPage_kt_f8beew = true;
      LoginPage = FC(LoginPage$lambda);
    }
  }
  function get_ProfilePage() {
    _init_properties_ProfilePage_kt__r1luzq();
    return ProfilePage;
  }
  var ProfilePage;
  function ProfilePage$lambda($this$FC, it) {
    _init_properties_ProfilePage_kt__r1luzq();
    var navigate = useNavigate();
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'div';
    $this$FC.invoke_mz6d4x_k$(tmp, ProfilePage$lambda$lambda(navigate));
    return Unit_getInstance();
  }
  function ProfilePage$lambda$lambda$lambda($this$h1) {
    _init_properties_ProfilePage_kt__r1luzq();
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.color = Colors_getInstance().get_primary_3xuktj_k$();
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(20) + 'px';
    $this$h1.className = css(this_0);
    $this$h1.unaryPlus_76unot_k$('User Profile');
    return Unit_getInstance();
  }
  function ProfilePage$lambda$lambda$lambda_0($this$div) {
    _init_properties_ProfilePage_kt__r1luzq();
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
    this_0.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
    this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.padding = toString(20) + 'px';
    this_0.backgroundColor = Colors_getInstance().get_white_j0plog_k$();
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(8) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp9 = toString(0) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp10 = toString(4) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp11 = toString(12) + 'px';
    // Inline function 'csstype.rgba' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    // Inline function 'csstype.BoxShadow' call
    var color = 'rgba(' + 0 + ',' + 0 + ',' + 0 + ',' + 0.1 + ')';
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.boxShadow = toString(tmp9) + ' ' + toString(tmp10) + ' ' + toString(tmp11) + ' ' + toString(color);
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(20) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(320) + 'px';
    $this$div.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'div';
    $this$div.invoke_mz6d4x_k$(tmp, ProfilePage$lambda$lambda$lambda$lambda);
    // Inline function 'react.dom.html.ReactHTML.h3' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_0 = 'h3';
    $this$div.invoke_mz6d4x_k$(tmp_0, ProfilePage$lambda$lambda$lambda$lambda_0);
    // Inline function 'react.dom.html.ReactHTML.p' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp_1 = 'p';
    $this$div.invoke_mz6d4x_k$(tmp_1, ProfilePage$lambda$lambda$lambda$lambda_1);
    return Unit_getInstance();
  }
  function ProfilePage$lambda$lambda$lambda$lambda($this$div) {
    _init_properties_ProfilePage_kt__r1luzq();
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(100) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.height = toString(100) + 'px';
    // Inline function 'csstype.pct' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.borderRadius = toString(50) + '%';
    this_0.backgroundColor = Colors_getInstance().get_avatarBackground_ijtj5c_k$();
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(16) + 'px';
    this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
    this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
    this_0.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).center;
    $this$div.className = css(this_0);
    // Inline function 'react.dom.html.ReactHTML.div' call
    ReactHTML_getInstance();
    // Inline function 'react.IntrinsicType' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    var tmp = 'div';
    $this$div.invoke_mz6d4x_k$(tmp, ProfilePage$lambda$lambda$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function ProfilePage$lambda$lambda$lambda$lambda$lambda($this$div) {
    _init_properties_ProfilePage_kt__r1luzq();
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.width = toString(60) + 'px';
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.height = toString(60) + 'px';
    this_0.backgroundColor = Colors_getInstance().get_avatarSilhouette_eebcpm_k$();
    // Inline function 'csstype.url' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.maskImage = 'url(' + "data:image/svg+xml;utf8,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24'><path d='M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z'/><\/svg>" + ')';
    this_0.maskSize = (/*union*/{contain: 'contain', cover: 'cover'}/*union*/).cover;
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.maskPosition = 'center';
    $this$div.className = css(this_0);
    return Unit_getInstance();
  }
  function ProfilePage$lambda$lambda$lambda$lambda_0($this$h3) {
    _init_properties_ProfilePage_kt__r1luzq();
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(8) + 'px';
    this_0.color = Colors_getInstance().get_textColor_92p84z_k$();
    $this$h3.className = css(this_0);
    $this$h3.unaryPlus_76unot_k$('John Doe');
    return Unit_getInstance();
  }
  function ProfilePage$lambda$lambda$lambda$lambda_1($this$p) {
    _init_properties_ProfilePage_kt__r1luzq();
    // Inline function 'emotion.react.css' call
    // Inline function 'emotion.css.ClassName' call
    // Inline function 'js.core.jso' call
    // Inline function 'js.core.jso' call
    // Inline function 'kotlin.apply' call
    var this_0 = {};
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.marginBottom = toString(8) + 'px';
    this_0.color = Colors_getInstance().get_textColor_92p84z_k$();
    // Inline function 'csstype.px' call
    // Inline function 'kotlin.js.unsafeCast' call
    // Inline function 'kotlin.js.asDynamic' call
    this_0.fontSize = toString(14) + 'px';
    $this$p.className = css(this_0);
    $this$p.unaryPlus_76unot_k$('john.doe@example.com');
    return Unit_getInstance();
  }
  function ProfilePage$lambda$lambda$lambda$lambda_2($navigate) {
    return function (it) {
      // Inline function 'react.router.NavigateFunction.invoke' call
      // Inline function 'kotlin.js.asDynamic' call
      $navigate('/dashboard');
      return Unit_getInstance();
    };
  }
  function ProfilePage$lambda$lambda$lambda$lambda_3($navigate) {
    return function (it) {
      // Inline function 'react.router.NavigateFunction.invoke' call
      // Inline function 'kotlin.js.asDynamic' call
      $navigate('/');
      return Unit_getInstance();
    };
  }
  function ProfilePage$lambda$lambda$lambda_1($navigate) {
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
      this_0.gap = toString(10) + 'px';
      $this$div.className = css(this_0);
      var tmp = Colors_getInstance().get_primary_3xuktj_k$();
      customButton($this$div, 'Back to Dashboard', tmp, VOID, ProfilePage$lambda$lambda$lambda$lambda_2($navigate));
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = '#6c757d';
      customButton($this$div, 'Logout', tmp_0, VOID, ProfilePage$lambda$lambda$lambda$lambda_3($navigate));
      return Unit_getInstance();
    };
  }
  function ProfilePage$lambda$lambda($navigate) {
    return function ($this$div) {
      // Inline function 'emotion.react.css' call
      // Inline function 'emotion.css.ClassName' call
      // Inline function 'js.core.jso' call
      // Inline function 'js.core.jso' call
      // Inline function 'kotlin.apply' call
      var this_0 = {};
      this_0.display = (/*union*/{block: 'block', inline: 'inline', runIn: 'run-in', flex: 'flex', flow: 'flow', flowRoot: 'flow-root', grid: 'grid', ruby: 'ruby', table: 'table', rubyBase: 'ruby-base', rubyBaseContainer: 'ruby-base-container', rubyText: 'ruby-text', rubyTextContainer: 'ruby-text-container', tableCaption: 'table-caption', tableCell: 'table-cell', tableColumn: 'table-column', tableColumnGroup: 'table-column-group', tableFooterGroup: 'table-footer-group', tableHeaderGroup: 'table-header-group', tableRow: 'table-row', tableRowGroup: 'table-row-group', inlineBlock: 'inline-block', inlineFlex: 'inline-flex', inlineGrid: 'inline-grid', inlineListItem: 'inline-list-item', inlineTable: 'inline-table', contents: 'contents', listItem: 'list-item'}/*union*/).flex;
      this_0.flexDirection = (/*union*/{column: 'column', columnReverse: 'column-reverse', row: 'row', rowReverse: 'row-reverse'}/*union*/).column;
      this_0.alignItems = (/*union*/{center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', selfEnd: 'self-end', selfStart: 'self-start', start: 'start', baseline: 'baseline', normal: 'normal', stretch: 'stretch'}/*union*/).center;
      this_0.justifyContent = (/*union*/{spaceAround: 'space-around', spaceBetween: 'space-between', spaceEvenly: 'space-evenly', stretch: 'stretch', center: 'center', end: 'end', flexEnd: 'flex-end', flexStart: 'flex-start', start: 'start', left: 'left', normal: 'normal', right: 'right'}/*union*/).center;
      // Inline function 'csstype.vh' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.height = toString(100) + 'vh';
      // Inline function 'csstype.px' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.padding = toString(20) + 'px';
      // Inline function 'csstype.Color' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      this_0.backgroundColor = '#f5f5f5';
      $this$div.className = css(this_0);
      // Inline function 'react.dom.html.ReactHTML.h1' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp = 'h1';
      $this$div.invoke_mz6d4x_k$(tmp, ProfilePage$lambda$lambda$lambda);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_0 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_0, ProfilePage$lambda$lambda$lambda_0);
      // Inline function 'react.dom.html.ReactHTML.div' call
      ReactHTML_getInstance();
      // Inline function 'react.IntrinsicType' call
      // Inline function 'kotlin.js.unsafeCast' call
      // Inline function 'kotlin.js.asDynamic' call
      var tmp_1 = 'div';
      $this$div.invoke_mz6d4x_k$(tmp_1, ProfilePage$lambda$lambda$lambda_1($navigate));
      return Unit_getInstance();
    };
  }
  var properties_initialized_ProfilePage_kt_d9b708;
  function _init_properties_ProfilePage_kt__r1luzq() {
    if (!properties_initialized_ProfilePage_kt_d9b708) {
      properties_initialized_ProfilePage_kt_d9b708 = true;
      ProfilePage = FC(ProfilePage$lambda);
    }
  }
  function get_AppRouter() {
    _init_properties_AppRouters_kt__xc6s7d();
    return AppRouter;
  }
  var AppRouter;
  function AppRouter$lambda($this$FC, it) {
    _init_properties_AppRouters_kt__xc6s7d();
    var tmp = HashRouter;
    $this$FC.invoke_mz6d4x_k$(tmp, AppRouter$lambda$lambda);
    return Unit_getInstance();
  }
  function AppRouter$lambda$lambda($this$HashRouter) {
    _init_properties_AppRouters_kt__xc6s7d();
    var tmp = Routes;
    $this$HashRouter.invoke_mz6d4x_k$(tmp, AppRouter$lambda$lambda$lambda);
    return Unit_getInstance();
  }
  function AppRouter$lambda$lambda$lambda($this$Routes) {
    _init_properties_AppRouters_kt__xc6s7d();
    var tmp = Route;
    $this$Routes.invoke_mz6d4x_k$(tmp, AppRouter$lambda$lambda$lambda$lambda);
    var tmp_0 = Route;
    $this$Routes.invoke_mz6d4x_k$(tmp_0, AppRouter$lambda$lambda$lambda$lambda_0);
    var tmp_1 = Route;
    $this$Routes.invoke_mz6d4x_k$(tmp_1, AppRouter$lambda$lambda$lambda$lambda_1);
    return Unit_getInstance();
  }
  function AppRouter$lambda$lambda$lambda$lambda($this$Route) {
    _init_properties_AppRouters_kt__xc6s7d();
    $this$Route.path = '/';
    $this$Route.element = create(get_LoginPage());
    return Unit_getInstance();
  }
  function AppRouter$lambda$lambda$lambda$lambda_0($this$Route) {
    _init_properties_AppRouters_kt__xc6s7d();
    $this$Route.path = '/dashboard';
    $this$Route.element = create(get_DashboardPage());
    return Unit_getInstance();
  }
  function AppRouter$lambda$lambda$lambda$lambda_1($this$Route) {
    _init_properties_AppRouters_kt__xc6s7d();
    $this$Route.path = '/profile';
    $this$Route.element = create(get_ProfilePage());
    return Unit_getInstance();
  }
  var properties_initialized_AppRouters_kt_fymt85;
  function _init_properties_AppRouters_kt__xc6s7d() {
    if (!properties_initialized_AppRouters_kt_fymt85) {
      properties_initialized_AppRouters_kt_fymt85 = true;
      AppRouter = FC(AppRouter$lambda);
    }
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
  mainWrapper();
  return _;
}));
