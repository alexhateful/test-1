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

/***/ "./node_modules/google-maps/lib/Google.js":
/*!************************************************!*\
  !*** ./node_modules/google-maps/lib/Google.js ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var __WEBPACK_AMD_DEFINE_FACTORY__, __WEBPACK_AMD_DEFINE_RESULT__;(function(root, factory) {

	if (root === null) {
		throw new Error('Google-maps package can be used only in browser');
	}

	if (true) {
		!(__WEBPACK_AMD_DEFINE_FACTORY__ = (factory),
				__WEBPACK_AMD_DEFINE_RESULT__ = (typeof __WEBPACK_AMD_DEFINE_FACTORY__ === 'function' ?
				(__WEBPACK_AMD_DEFINE_FACTORY__.call(exports, __webpack_require__, exports, module)) :
				__WEBPACK_AMD_DEFINE_FACTORY__),
				__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else {}

})(typeof window !== 'undefined' ? window : null, function() {


	'use strict';


	var googleVersion = '3.31';

	var script = null;

	var google = null;

	var loading = false;

	var callbacks = [];

	var onLoadEvents = [];

	var originalCreateLoaderMethod = null;


	var GoogleMapsLoader = {};


	GoogleMapsLoader.URL = 'https://maps.googleapis.com/maps/api/js';

	GoogleMapsLoader.KEY = null;

	GoogleMapsLoader.LIBRARIES = [];

	GoogleMapsLoader.CLIENT = null;

	GoogleMapsLoader.CHANNEL = null;

	GoogleMapsLoader.LANGUAGE = null;

	GoogleMapsLoader.REGION = null;

	GoogleMapsLoader.VERSION = googleVersion;

	GoogleMapsLoader.WINDOW_CALLBACK_NAME = '__google_maps_api_provider_initializator__';


	GoogleMapsLoader._googleMockApiObject = {};


	GoogleMapsLoader.load = function(fn) {
		if (google === null) {
			if (loading === true) {
				if (fn) {
					callbacks.push(fn);
				}
			} else {
				loading = true;

				window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] = function() {
					ready(fn);
				};

				GoogleMapsLoader.createLoader();
			}
		} else if (fn) {
			fn(google);
		}
	};


	GoogleMapsLoader.createLoader = function() {
		script = document.createElement('script');
		script.type = 'text/javascript';
		script.src = GoogleMapsLoader.createUrl();

		document.body.appendChild(script);
	};


	GoogleMapsLoader.isLoaded = function() {
		return google !== null;
	};


	GoogleMapsLoader.createUrl = function() {
		var url = GoogleMapsLoader.URL;

		url += '?callback=' + GoogleMapsLoader.WINDOW_CALLBACK_NAME;

		if (GoogleMapsLoader.KEY) {
			url += '&key=' + GoogleMapsLoader.KEY;
		}

		if (GoogleMapsLoader.LIBRARIES.length > 0) {
			url += '&libraries=' + GoogleMapsLoader.LIBRARIES.join(',');
		}

		if (GoogleMapsLoader.CLIENT) {
			url += '&client=' + GoogleMapsLoader.CLIENT;
		}

		if (GoogleMapsLoader.CHANNEL) {
			url += '&channel=' + GoogleMapsLoader.CHANNEL;
		}

		if (GoogleMapsLoader.LANGUAGE) {
			url += '&language=' + GoogleMapsLoader.LANGUAGE;
		}

		if (GoogleMapsLoader.REGION) {
			url += '&region=' + GoogleMapsLoader.REGION;
		}

		if (GoogleMapsLoader.VERSION) {
			url += '&v=' + GoogleMapsLoader.VERSION;
		}

		return url;
	};


	GoogleMapsLoader.release = function(fn) {
		var release = function() {
			GoogleMapsLoader.KEY = null;
			GoogleMapsLoader.LIBRARIES = [];
			GoogleMapsLoader.CLIENT = null;
			GoogleMapsLoader.CHANNEL = null;
			GoogleMapsLoader.LANGUAGE = null;
			GoogleMapsLoader.REGION = null;
			GoogleMapsLoader.VERSION = googleVersion;

			google = null;
			loading = false;
			callbacks = [];
			onLoadEvents = [];

			if (typeof window.google !== 'undefined') {
				delete window.google;
			}

			if (typeof window[GoogleMapsLoader.WINDOW_CALLBACK_NAME] !== 'undefined') {
				delete window[GoogleMapsLoader.WINDOW_CALLBACK_NAME];
			}

			if (originalCreateLoaderMethod !== null) {
				GoogleMapsLoader.createLoader = originalCreateLoaderMethod;
				originalCreateLoaderMethod = null;
			}

			if (script !== null) {
				script.parentElement.removeChild(script);
				script = null;
			}

			if (fn) {
				fn();
			}
		};

		if (loading) {
			GoogleMapsLoader.load(function() {
				release();
			});
		} else {
			release();
		}
	};


	GoogleMapsLoader.onLoad = function(fn) {
		onLoadEvents.push(fn);
	};


	GoogleMapsLoader.makeMock = function() {
		originalCreateLoaderMethod = GoogleMapsLoader.createLoader;

		GoogleMapsLoader.createLoader = function() {
			window.google = GoogleMapsLoader._googleMockApiObject;
			window[GoogleMapsLoader.WINDOW_CALLBACK_NAME]();
		};
	};


	var ready = function(fn) {
		var i;

		loading = false;

		if (google === null) {
			google = window.google;
		}

		for (i = 0; i < onLoadEvents.length; i++) {
			onLoadEvents[i](google);
		}

		if (fn) {
			fn(google);
		}

		for (i = 0; i < callbacks.length; i++) {
			callbacks[i](google);
		}

		callbacks = [];
	};


	return GoogleMapsLoader;

});


/***/ }),

/***/ "./src/blocks/common/page/page.js":
/*!****************************************!*\
  !*** ./src/blocks/common/page/page.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _js_utils_lazy_loader__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../../js/utils/lazy-loader */ "./src/js/utils/lazy-loader.js");
/* harmony import */ var _map__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../map */ "./src/blocks/map.js");
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

  _map__WEBPACK_IMPORTED_MODULE_1__["default"].initBlock(); // Process the initial window size and scroll position

  handleWindowResize();
  handleWindowScroll();
  return true;
} // ---------------------------- END PUBLIC METHODS ----------------------------


/* harmony default export */ __webpack_exports__["default"] = ({
  initBlock: initBlock
});

/***/ }),

/***/ "./src/blocks/map.js":
/*!***************************!*\
  !*** ./src/blocks/map.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * @file Implementation of the map block
 */
// -------------------------- BEGIN MODULE VARIABLES --------------------------
// TODO: add code here
// --------------------------- END MODULE VARIABLES ---------------------------
// -------------------------- BEGIN UTILITY FUNCTIONS -------------------------
// TODO: add code here
// --------------------------- END UTILITY FUNCTIONS --------------------------
// ----------------------------- BEGIN DOM METHODS ----------------------------
// TODO: add code here
// ------------------------------ END DOM METHODS -----------------------------
// --------------------------- BEGIN EVENT HANDLERS ---------------------------
// TODO: add code here
// ---------------------------- END EVENT HANDLERS ----------------------------
// --------------------------- BEGIN PUBLIC METHODS ---------------------------

/**
 * Initialize the map block.
 * @return true if the block is present on the page, false otherwise
 */
var map;
var lat = 46.9329791;
var lng = 31.8679139;

function initBlock() {
  // TODO: add code here
  var GoogleMapsLoader = __webpack_require__(/*! google-maps */ "./node_modules/google-maps/lib/Google.js"); // only for common js environments


  GoogleMapsLoader.KEY = 'AIzaSyBQDEK_bp8E3TJz1Sg1VMqF7jn8J3Z7Haw';
  GoogleMapsLoader.load(function (google) {
    map = new google.maps.Map(document.getElementById('map'), {
      center: {
        lat: lat,
        lng: lng
      },
      disableDefaultUI: true,
      zoom: 11,
      styles: [{
        "elementType": "geometry",
        "stylers": [{
          "color": "#212121"
        }]
      }, {
        "elementType": "labels.icon",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#212121"
        }]
      }, {
        "featureType": "administrative",
        "elementType": "geometry",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "administrative.country",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#9e9e9e"
        }]
      }, {
        "featureType": "administrative.land_parcel",
        "stylers": [{
          "visibility": "off"
        }]
      }, {
        "featureType": "administrative.locality",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#bdbdbd"
        }]
      }, {
        "featureType": "poi",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [{
          "color": "#181818"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "featureType": "poi.park",
        "elementType": "labels.text.stroke",
        "stylers": [{
          "color": "#1b1b1b"
        }]
      }, {
        "featureType": "road",
        "elementType": "geometry.fill",
        "stylers": [{
          "color": "#2c2c2c"
        }]
      }, {
        "featureType": "road",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#8a8a8a"
        }]
      }, {
        "featureType": "road.arterial",
        "elementType": "geometry",
        "stylers": [{
          "color": "#373737"
        }]
      }, {
        "featureType": "road.highway",
        "elementType": "geometry",
        "stylers": [{
          "color": "#3c3c3c"
        }]
      }, {
        "featureType": "road.highway.controlled_access",
        "elementType": "geometry",
        "stylers": [{
          "color": "#4e4e4e"
        }]
      }, {
        "featureType": "road.local",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#616161"
        }]
      }, {
        "featureType": "transit",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#757575"
        }]
      }, {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [{
          "color": "#000000"
        }]
      }, {
        "featureType": "water",
        "elementType": "labels.text.fill",
        "stylers": [{
          "color": "#3d3d3d"
        }]
      }]
    });
    var marker = new google.maps.Marker({
      position: {
        lat: lat,
        lng: lng
      },
      map: map,
      title: 'Hello',
      icon: './img/pin.png'
    });
  });
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

module.exports = __webpack_require__(/*! D:\front-end\git\test\src\js\main.js */"./src/js/main.js");


/***/ })

/******/ });
//# sourceMappingURL=main.js.map