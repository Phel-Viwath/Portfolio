(function (factory) {
  if (typeof define === 'function' && define.amd)
    define(['exports', './kotlin-kotlin-stdlib.js'], factory);
  else if (typeof exports === 'object')
    factory(module.exports, require('./kotlin-kotlin-stdlib.js'));
  else {
    if (typeof globalThis['kotlin-kotlin-stdlib'] === 'undefined') {
      throw new Error("Error loading module 'HelloWorld'. Its dependency 'kotlin-kotlin-stdlib' was not found. Please, check whether 'kotlin-kotlin-stdlib' is loaded prior to 'HelloWorld'.");
    }
    globalThis.HelloWorld = factory(typeof HelloWorld === 'undefined' ? {} : HelloWorld, globalThis['kotlin-kotlin-stdlib']);
  }
}(function (_, kotlin_kotlin) {
  'use strict';
  //region block: imports
  var THROW_CCE = kotlin_kotlin.$_$.g1;
  var Unit_getInstance = kotlin_kotlin.$_$.k;
  //endregion
  //region block: pre-declaration
  //endregion
  function main() {
    var tmp = window;
    tmp.onload = main$lambda;
  }
  function main$lambda(_unused_var__etf5q3) {
    var tmp = document.getElementById('root');
    var root = tmp instanceof HTMLElement ? tmp : THROW_CCE();
    var tmp_0 = document.createElement('div');
    var helloWorldDiv = tmp_0 instanceof HTMLElement ? tmp_0 : THROW_CCE();
    helloWorldDiv.textContent = 'Hello World!';
    // Inline function 'kotlin.with' call
    var $this$with = helloWorldDiv.style;
    $this$with.position = 'absolute';
    $this$with.top = '50%';
    $this$with.left = '50%';
    $this$with.transform = 'translate(-50%, -50%)';
    $this$with.fontSize = '32px';
    $this$with.fontWeight = 'bold';
    $this$with.color = 'rgb(0, 102, 204)';
    $this$with.cursor = 'pointer';
    $this$with.transition = 'color 0.3s ease';
    helloWorldDiv.addEventListener('mouseenter', main$lambda$lambda(helloWorldDiv));
    helloWorldDiv.addEventListener('mouseleave', main$lambda$lambda_0(helloWorldDiv));
    return root.appendChild(helloWorldDiv);
  }
  function main$lambda$lambda($helloWorldDiv) {
    return function (it) {
      $helloWorldDiv.style.color = 'rgb(255, 0, 102)';
      return Unit_getInstance();
    };
  }
  function main$lambda$lambda_0($helloWorldDiv) {
    return function (it) {
      $helloWorldDiv.style.color = 'rgb(0, 102, 204)';
      return Unit_getInstance();
    };
  }
  function mainWrapper() {
    main();
  }
  mainWrapper();
  return _;
}));

//# sourceMappingURL=HelloWorld.js.map
