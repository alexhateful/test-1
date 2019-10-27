/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 1);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/blocks/common/page/page.js":
/*!****************************************!*\
  !*** ./src/blocks/common/page/page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utils_lazy_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/utils/lazy-loader */ "./src/js/utils/lazy-loader.js");
/**
 * @file Implementation of the page block
 */
 // TODO: import other blocks
// -------------------------- BEGIN MODULE VARIABLES --------------------------

var RESIZE_INTERVAL = 200; // Resize event debouncing interval

var SCROLL_INTERVAL = 200; // Scroll event throttling interval

var resizeTimer = null;
var scrollTimer = null;
var wasScrolled = false; // --------------------------- END MODULE VARIABLES ---------------------------
// --------------------------- BEGIN EVENT HANDLERS ---------------------------

/**
 * Handle the window scroll event
 */

function handleWindowScroll() {
  _js_utils_lazy_loader__WEBPACK_IMPORTED_MODULE_0__["default"].scanImages(); // TODO: add code
}
/**
 * Handle the window resize event
 */


function handleWindowResize() {} // TODO: add code

/**
 * Debounce the window resize event
 */


function debounceWindowResize() {
  clearTimeout(resizeTimer);
  resizeTimer = setTimeout(handleWindowResize, RESIZE_INTERVAL);
}
/**
 * Throttle the window scroll event
 */


function throttleWindowScroll() {
  if (scrollTimer) {
    // Ensure that we catch and execute that last invocation.
    wasScrolled = true;
    return;
  }

  handleWindowScroll();
  scrollTimer = this.setTimeout(function () {
    scrollTimer = null;

    if (wasScrolled) {
      handleWindowScroll();
      wasScrolled = false;
    }
  }, SCROLL_INTERVAL);
} // ---------------------------- END EVENT HANDLERS ----------------------------
// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the page block.
 * @return true
 */


function initBlock() {
  $(window).on({
    resize: debounceWindowResize,
    scroll: throttleWindowScroll
  });
  _js_utils_lazy_loader__WEBPACK_IMPORTED_MODULE_0__["default"].init(); // TODO: initialize other blocks
  // Process the initial window size and scroll position

  handleWindowResize();
  handleWindowScroll();
  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/js/main.js":
/*!************************!*\
  !*** ./src/js/main.js ***!
  \************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_common_page_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../blocks/common/page/page */ "./src/blocks/common/page/page.js");
 // The page block is responsible for initialization of all other blocks

_blocks_common_page_page__WEBPACK_IMPORTED_MODULE_0__["default"].initBlock();

/***/ }),

/***/ "./src/js/utils/lazy-loader.js":
/*!*************************************!*\
  !*** ./src/js/utils/lazy-loader.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file Lazy loader for images
 */
// -------------------------- BEGIN MODULE VARIABLES --------------------------
var BUFFER_HEIGHT = 50;
var LAZY_SELECTOR = '.lazy';
var $images; // --------------------------- END MODULE VARIABLES ---------------------------
// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------

/**
 * Check if <tt>elem</tt> is in the browser's viewport.
 * 
 * @param {JQuery} $elem The element to check
 * @return {boolean} <tt>true</tt> if the element is in the viewport,
 *      <tt>false</tt> otherwise
 */

function isInViewport($elem) {
  var windowBottom = $(window).scrollTop() + $(window).height();
  return $elem.offset().top < windowBottom + BUFFER_HEIGHT;
} // --------------------------- END UTILITY FUNCTIONS --------------------------
// ----------------------------- BEGIN DOM METHODS ----------------------------

/**
 * Lazy-load the given <tt>img</tt> element.
 * 
 * @param {JQuery} $img The image element
 */


function loadImage($img) {
  if ($img.parent().is('picture')) {
    $img.siblings('source').forEach(function () {
      var $source = $(this);
      $source.attr('srcset', $source.attr('data-srcset')).removeAttr('data-srcset');
    });
  }

  $img.attr('src', $img.attr('data-src')).attr('srcset', $img.attr('data-srcset')).removeAttr('data-src data-srcset').removeClass('lazy');
} // ------------------------------ END DOM METHODS -----------------------------
// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the lazy image loader
 */


function init() {
  $images = $(LAZY_SELECTOR);
}
/**
 * Load all images that have been scrolled into the viewport for the first time
 */


function scanImages() {
  if ($images.length === 0) {
    return;
  }

  $images = $images.filter(function () {
    var $img = $(this);

    if (!isInViewport($img)) {
      return true;
    }

    loadImage($img);
    return false;
  });
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  init: init,
  scanImages: scanImages
});

/***/ }),

/***/ 1:
/*!******************************!*\
  !*** multi ./src/js/main.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! C:\study\test-1\src\js\main.js */"./src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map