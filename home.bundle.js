/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/images/outside.jpg":
/*!********************************!*\
  !*** ./src/images/outside.jpg ***!
  \********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "a7b956f7758050a4fba2.jpg";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
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
/******/ 	/* webpack/runtime/global */
/******/ 	(() => {
/******/ 		__webpack_require__.g = (function() {
/******/ 			if (typeof globalThis === 'object') return globalThis;
/******/ 			try {
/******/ 				return this || new Function('return this')();
/******/ 			} catch (e) {
/******/ 				if (typeof window === 'object') return window;
/******/ 			}
/******/ 		})();
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
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		var scriptUrl;
/******/ 		if (__webpack_require__.g.importScripts) scriptUrl = __webpack_require__.g.location + "";
/******/ 		var document = __webpack_require__.g.document;
/******/ 		if (!scriptUrl && document) {
/******/ 			if (document.currentScript)
/******/ 				scriptUrl = document.currentScript.src
/******/ 			if (!scriptUrl) {
/******/ 				var scripts = document.getElementsByTagName("script");
/******/ 				if(scripts.length) scriptUrl = scripts[scripts.length - 1].src
/******/ 			}
/******/ 		}
/******/ 		// When supporting browsers where an automatic publicPath is not supported you must specify an output.publicPath manually via configuration
/******/ 		// or pass an empty string ("") and set the __webpack_public_path__ variable from your code to use your own logic.
/******/ 		if (!scriptUrl) throw new Error("Automatic publicPath is not supported in this browser");
/******/ 		scriptUrl = scriptUrl.replace(/#.*$/, "").replace(/\?.*$/, "").replace(/\/[^\/]+$/, "/");
/******/ 		__webpack_require__.p = scriptUrl;
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*********************!*\
  !*** ./src/home.js ***!
  \*********************/
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _images_outside_jpg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./images/outside.jpg */ "./src/images/outside.jpg");


function homeContent() {
    // this is now in the index.js
  const homeWrap = document.createElement('div');
  homeWrap.classList.add('home-wrap');

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
  homeWrap.appendChild(headerWrap);

  const homeRight = document.createElement('div');
  homeRight.classList.add('home-right');
  const hr = document.createElement('hr');
  const homeImageWrap = document.createElement('div');
  // image here

  homeRight.appendChild(hr);
  homeRight.appendChild(homeImageWrap);
  const heroImage = new Image();
  heroImage.src = _images_outside_jpg__WEBPACK_IMPORTED_MODULE_0__;
  heroImage.classList.add('hero-img');

  homeImageWrap.appendChild(heroImage);
  homeRight.appendChild(homeImageWrap);
  homeWrap.appendChild(homeRight);

  return homeWrap;
}


/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (homeContent);
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiaG9tZS5idW5kbGUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7OztVQUFBO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7Ozs7O1dDdEJBO1dBQ0E7V0FDQTtXQUNBO1dBQ0EseUNBQXlDLHdDQUF3QztXQUNqRjtXQUNBO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSxHQUFHO1dBQ0g7V0FDQTtXQUNBLENBQUM7Ozs7O1dDUEQ7Ozs7O1dDQUE7V0FDQTtXQUNBO1dBQ0EsdURBQXVELGlCQUFpQjtXQUN4RTtXQUNBLGdEQUFnRCxhQUFhO1dBQzdEOzs7OztXQ05BO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUNmMkM7O0FBRTNDO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxrQkFBa0IsZ0RBQU87QUFDekI7O0FBRUE7QUFDQTtBQUNBOztBQUVBO0FBQ0E7OztBQUdBLGlFQUFlLFdBQVcsRSIsInNvdXJjZXMiOlsid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvZ2xvYmFsIiwid2VicGFjazovL3Jlc3RhdXJhbnQvd2VicGFjay9ydW50aW1lL2hhc093blByb3BlcnR5IHNob3J0aGFuZCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50L3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vcmVzdGF1cmFudC93ZWJwYWNrL3J1bnRpbWUvcHVibGljUGF0aCIsIndlYnBhY2s6Ly9yZXN0YXVyYW50Ly4vc3JjL2hvbWUuanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHQvLyBubyBtb2R1bGUuaWQgbmVlZGVkXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbiIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18uZyA9IChmdW5jdGlvbigpIHtcblx0aWYgKHR5cGVvZiBnbG9iYWxUaGlzID09PSAnb2JqZWN0JykgcmV0dXJuIGdsb2JhbFRoaXM7XG5cdHRyeSB7XG5cdFx0cmV0dXJuIHRoaXMgfHwgbmV3IEZ1bmN0aW9uKCdyZXR1cm4gdGhpcycpKCk7XG5cdH0gY2F0Y2ggKGUpIHtcblx0XHRpZiAodHlwZW9mIHdpbmRvdyA9PT0gJ29iamVjdCcpIHJldHVybiB3aW5kb3c7XG5cdH1cbn0pKCk7IiwiX193ZWJwYWNrX3JlcXVpcmVfXy5vID0gKG9iaiwgcHJvcCkgPT4gKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmosIHByb3ApKSIsIi8vIGRlZmluZSBfX2VzTW9kdWxlIG9uIGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uciA9IChleHBvcnRzKSA9PiB7XG5cdGlmKHR5cGVvZiBTeW1ib2wgIT09ICd1bmRlZmluZWQnICYmIFN5bWJvbC50b1N0cmluZ1RhZykge1xuXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBTeW1ib2wudG9TdHJpbmdUYWcsIHsgdmFsdWU6ICdNb2R1bGUnIH0pO1xuXHR9XG5cdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG59OyIsInZhciBzY3JpcHRVcmw7XG5pZiAoX193ZWJwYWNrX3JlcXVpcmVfXy5nLmltcG9ydFNjcmlwdHMpIHNjcmlwdFVybCA9IF9fd2VicGFja19yZXF1aXJlX18uZy5sb2NhdGlvbiArIFwiXCI7XG52YXIgZG9jdW1lbnQgPSBfX3dlYnBhY2tfcmVxdWlyZV9fLmcuZG9jdW1lbnQ7XG5pZiAoIXNjcmlwdFVybCAmJiBkb2N1bWVudCkge1xuXHRpZiAoZG9jdW1lbnQuY3VycmVudFNjcmlwdClcblx0XHRzY3JpcHRVcmwgPSBkb2N1bWVudC5jdXJyZW50U2NyaXB0LnNyY1xuXHRpZiAoIXNjcmlwdFVybCkge1xuXHRcdHZhciBzY3JpcHRzID0gZG9jdW1lbnQuZ2V0RWxlbWVudHNCeVRhZ05hbWUoXCJzY3JpcHRcIik7XG5cdFx0aWYoc2NyaXB0cy5sZW5ndGgpIHNjcmlwdFVybCA9IHNjcmlwdHNbc2NyaXB0cy5sZW5ndGggLSAxXS5zcmNcblx0fVxufVxuLy8gV2hlbiBzdXBwb3J0aW5nIGJyb3dzZXJzIHdoZXJlIGFuIGF1dG9tYXRpYyBwdWJsaWNQYXRoIGlzIG5vdCBzdXBwb3J0ZWQgeW91IG11c3Qgc3BlY2lmeSBhbiBvdXRwdXQucHVibGljUGF0aCBtYW51YWxseSB2aWEgY29uZmlndXJhdGlvblxuLy8gb3IgcGFzcyBhbiBlbXB0eSBzdHJpbmcgKFwiXCIpIGFuZCBzZXQgdGhlIF9fd2VicGFja19wdWJsaWNfcGF0aF9fIHZhcmlhYmxlIGZyb20geW91ciBjb2RlIHRvIHVzZSB5b3VyIG93biBsb2dpYy5cbmlmICghc2NyaXB0VXJsKSB0aHJvdyBuZXcgRXJyb3IoXCJBdXRvbWF0aWMgcHVibGljUGF0aCBpcyBub3Qgc3VwcG9ydGVkIGluIHRoaXMgYnJvd3NlclwiKTtcbnNjcmlwdFVybCA9IHNjcmlwdFVybC5yZXBsYWNlKC8jLiokLywgXCJcIikucmVwbGFjZSgvXFw/LiokLywgXCJcIikucmVwbGFjZSgvXFwvW15cXC9dKyQvLCBcIi9cIik7XG5fX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBzY3JpcHRVcmw7IiwiaW1wb3J0IE91dHNpZGUgZnJvbSAnLi9pbWFnZXMvb3V0c2lkZS5qcGcnO1xuXG5mdW5jdGlvbiBob21lQ29udGVudCgpIHtcbiAgICAvLyB0aGlzIGlzIG5vdyBpbiB0aGUgaW5kZXguanNcbiAgY29uc3QgaG9tZVdyYXAgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcbiAgaG9tZVdyYXAuY2xhc3NMaXN0LmFkZCgnaG9tZS13cmFwJyk7XG5cbiAgY29uc3QgaGVhZGVyV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICBoZWFkZXJXcmFwLmNsYXNzTGlzdC5hZGQoJ2ZsZXgtY29sJywnY29udGFpbmVyJywnaG9tZS1sZWZ0Jyk7XG4gIGhlYWRlcldyYXAuaW5uZXJIVE1MID0gYFxuICA8aDE+Q29yZGlhbGU8L2gxPlxuXG4gICAgICAgICAgICAgICAgICAgIDxwPjxjb2RlPjxlbT5jb3JkaWFsZSAoSXRhbGlhbik8L2VtPjogd2FybSwgd2VsY29taW5nLCBnZW5pYWw8L2NvZGU+PC9wPlxuICAgICAgICAgICAgICAgICAgICA8aHI+XG4gICAgICAgICAgICAgICAgICAgIDxoMj48c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsX3BpenphXG4gICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLXN5bWJvbHMtcm91bmRlZFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvY2FsX2NhZmVcbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibWF0ZXJpYWwtc3ltYm9scy1yb3VuZGVkXCI+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlubmVyX2RpbmluZ1xuICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2gyPlxuICAgICAgICAgICAgICAgICAgICA8cD5XZWxjb21lIHRvIENvcmRpYWxlLCBhIGNvc3ksIGludGltYXRlIDxlbT5jdWNpbmE8L2VtPiBzZXJ2aW5nIGRlbGljaW91cyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhlYXJ0LXdhcm1pbmcgSXRhbGlhblxuICAgICAgICAgICAgICAgICAgICAgICAgZm9vZC5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICA8c3ZnIGNsYXNzPVwiYW5pbWF0ZS1jaXJjbGUgdGV4dC1jaXJjbGVcIiB2aWV3Qm94PVwiMCAwIDEwMCAxMDBcIiB3aWR0aD1cIjEwMFwiIGhlaWdodD1cIjEwMFwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgPGRlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPHBhdGggaWQ9XCJjaXJjbGVcIiBkPVwiXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBNIDUwLCA1MFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbSAtMzcsIDBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGEgMzcsMzcgMCAxLDEgNzQsMFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYSAzNywzNyAwIDEsMSAtNzQsMFwiIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICA8L2RlZnM+XG4gICAgICAgICAgICAgICAgICAgICAgICA8dGV4dCBmb250LXNpemU9XCIxN1wiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIDx0ZXh0UGF0aCB4bGluazpocmVmPVwiI2NpcmNsZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBqdXN0IGxpa2Ugbm9ubmEgdXNlZCB0byBtYWtlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgPC90ZXh0UGF0aD5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvdGV4dD5cbiAgICAgICAgICAgICAgICAgICAgPC9zdmc+XG4gIGBcbiAgaG9tZVdyYXAuYXBwZW5kQ2hpbGQoaGVhZGVyV3JhcCk7XG5cbiAgY29uc3QgaG9tZVJpZ2h0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gIGhvbWVSaWdodC5jbGFzc0xpc3QuYWRkKCdob21lLXJpZ2h0Jyk7XG4gIGNvbnN0IGhyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnaHInKTtcbiAgY29uc3QgaG9tZUltYWdlV3JhcCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAvLyBpbWFnZSBoZXJlXG5cbiAgaG9tZVJpZ2h0LmFwcGVuZENoaWxkKGhyKTtcbiAgaG9tZVJpZ2h0LmFwcGVuZENoaWxkKGhvbWVJbWFnZVdyYXApO1xuICBjb25zdCBoZXJvSW1hZ2UgPSBuZXcgSW1hZ2UoKTtcbiAgaGVyb0ltYWdlLnNyYyA9IE91dHNpZGU7XG4gIGhlcm9JbWFnZS5jbGFzc0xpc3QuYWRkKCdoZXJvLWltZycpO1xuXG4gIGhvbWVJbWFnZVdyYXAuYXBwZW5kQ2hpbGQoaGVyb0ltYWdlKTtcbiAgaG9tZVJpZ2h0LmFwcGVuZENoaWxkKGhvbWVJbWFnZVdyYXApO1xuICBob21lV3JhcC5hcHBlbmRDaGlsZChob21lUmlnaHQpO1xuXG4gIHJldHVybiBob21lV3JhcDtcbn1cblxuXG5leHBvcnQgZGVmYXVsdCBob21lQ29udGVudDsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=