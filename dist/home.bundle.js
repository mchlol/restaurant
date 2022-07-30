/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	// The require scope
/******/ 	var __webpack_require__ = {};
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
function homeContent() {
  const contentWrap = document.createElement('div');
  contentWrap.classList.add('content-wrap');

  const headerWrap = document.createElement('div');
  headerWrap.classList.add('flex-col','container','home-left');
  headerWrap.innerHTML = `
  <h1>Cordiale</h1>

                    <p><code><em>cordiale (Italian)</em>: warm, welcoming, genial</code></p>
                    <hr>
                    <h2><span class="material-symbols-rounded">
                            local_pizza
                        </span>
                        <span class="material-symbols-rounded">
                            local_cafe
                        </span>
                        <span class="material-symbols-rounded">
                            dinner_dining
                        </span>
                    </h2>
                    <p>Welcome to Cordiale, a cosy, intimate <em>cucina</em> serving delicious,
                        heart-warming Italian
                        food.
                    </p>
                    <svg class="animate-circle text-circle" viewBox="0 0 100 100" width="100" height="100">
                        <defs>
                            <path id="circle" d="
                              M 50, 50
                              m -37, 0
                              a 37,37 0 1,1 74,0
                              a 37,37 0 1,1 -74,0" />
                        </defs>
                        <text font-size="17">
                            <textPath xlink:href="#circle">
                                just like nonna used to make
                            </textPath>
                        </text>
                    </svg>
  `
  contentWrap.appendChild(headerWrap);

  const homeRight = document.createElement('div');
  homeRight.classList.add('home-right');
  const hr = document.createElement('hr');
  const homeImageWrap = document.createElement('div');
  // image here

  homeRight.appendChild(hr);
  homeRight.appendChild(homeImageWrap);

  contentWrap.appendChild(homeRight);

  return contentWrap;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContent);
/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7VUFBQTtVQUNBOzs7OztXQ0RBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7Ozs7Ozs7Ozs7QUNOQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7O0FBRUE7QUFDQTs7O0FBR0EsaUVBQWUsV0FBVyxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL2Jvb3RzdHJhcCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9kZWZpbmUgcHJvcGVydHkgZ2V0dGVycyIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvbWFrZSBuYW1lc3BhY2Ugb2JqZWN0Iiwid2VicGFjazovL3Jlc3RhdXJhbnQvLi9zcmMvaG9tZS5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBUaGUgcmVxdWlyZSBzY29wZVxudmFyIF9fd2VicGFja19yZXF1aXJlX18gPSB7fTtcblxuIiwiLy8gZGVmaW5lIGdldHRlciBmdW5jdGlvbnMgZm9yIGhhcm1vbnkgZXhwb3J0c1xuX193ZWJwYWNrX3JlcXVpcmVfXy5kID0gKGV4cG9ydHMsIGRlZmluaXRpb24pID0+IHtcblx0Zm9yKHZhciBrZXkgaW4gZGVmaW5pdGlvbikge1xuXHRcdGlmKF9fd2VicGFja19yZXF1aXJlX18ubyhkZWZpbml0aW9uLCBrZXkpICYmICFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywga2V5KSkge1xuXHRcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KGV4cG9ydHMsIGtleSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGRlZmluaXRpb25ba2V5XSB9KTtcblx0XHR9XG5cdH1cbn07IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsImZ1bmN0aW9uIGhvbWVDb250ZW50KCkge1xuICBjb25zdCBjb250ZW50V3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBjb250ZW50V3JhcC5jbGFzc0xpc3QuYWRkKCdjb250ZW50LXdyYXAnKTtcblxuICBjb25zdCBoZWFkZXJXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhlYWRlcldyYXAuY2xhc3NMaXN0LmFkZCgnZmxleC1jb2wnLCdjb250YWluZXInLCdob21lLWxlZnQnKTtcbiAgaGVhZGVyV3JhcC5pbm5lckhUTUwgPSBgXG4gIDxoMT5Db3JkaWFsZTwvaDE+XG5cbiAgICAgICAgICAgICAgICAgICAgPHA+PGNvZGU+PGVtPmNvcmRpYWxlIChJdGFsaWFuKTwvZW0+OiB3YXJtLCB3ZWxjb21pbmcsIGdlbmlhbDwvY29kZT48L3A+XG4gICAgICAgICAgICAgICAgICAgIDxocj5cbiAgICAgICAgICAgICAgICAgICAgPGgyPjxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxfcGl6emFcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgbG9jYWxfY2FmZVxuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtYXRlcmlhbC1zeW1ib2xzLXJvdW5kZWRcIj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaW5uZXJfZGluaW5nXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgIDwvaDI+XG4gICAgICAgICAgICAgICAgICAgIDxwPldlbGNvbWUgdG8gQ29yZGlhbGUsIGEgY29zeSwgaW50aW1hdGUgPGVtPmN1Y2luYTwvZW0+IHNlcnZpbmcgZGVsaWNpb3VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgaGVhcnQtd2FybWluZyBJdGFsaWFuXG4gICAgICAgICAgICAgICAgICAgICAgICBmb29kLlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICAgIDxzdmcgY2xhc3M9XCJhbmltYXRlLWNpcmNsZSB0ZXh0LWNpcmNsZVwiIHZpZXdCb3g9XCIwIDAgMTAwIDEwMFwiIHdpZHRoPVwiMTAwXCIgaGVpZ2h0PVwiMTAwXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICA8ZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8cGF0aCBpZD1cImNpcmNsZVwiIGQ9XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIE0gNTAsIDUwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBtIC0zNywgMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSAzNywzNyAwIDEsMSA3NCwwXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBhIDM3LDM3IDAgMSwxIC03NCwwXCIgLz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvZGVmcz5cbiAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0IGZvbnQtc2l6ZT1cIjE3XCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHRleHRQYXRoIHhsaW5rOmhyZWY9XCIjY2lyY2xlXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGp1c3QgbGlrZSBub25uYSB1c2VkIHRvIG1ha2VcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3RleHRQYXRoPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0PlxuICAgICAgICAgICAgICAgICAgICA8L3N2Zz5cbiAgYFxuICBjb250ZW50V3JhcC5hcHBlbmRDaGlsZChoZWFkZXJXcmFwKTtcblxuICBjb25zdCBob21lUmlnaHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZVJpZ2h0LmNsYXNzTGlzdC5hZGQoJ2hvbWUtcmlnaHQnKTtcbiAgY29uc3QgaHIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdocicpO1xuICBjb25zdCBob21lSW1hZ2VXcmFwID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIC8vIGltYWdlIGhlcmVcblxuICBob21lUmlnaHQuYXBwZW5kQ2hpbGQoaHIpO1xuICBob21lUmlnaHQuYXBwZW5kQ2hpbGQoaG9tZUltYWdlV3JhcCk7XG5cbiAgY29udGVudFdyYXAuYXBwZW5kQ2hpbGQoaG9tZVJpZ2h0KTtcblxuICByZXR1cm4gY29udGVudFdyYXA7XG59XG5cblxuZXhwb3J0IGRlZmF1bHQgaG9tZUNvbnRlbnQ7Il0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9