"use strict";

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { if (!(Symbol.iterator in Object(arr) || Object.prototype.toString.call(arr) === "[object Arguments]")) { return; } var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

/**
 * pcs.js v1.0.0
 * A simple wrapper to set color themes based on prefers-color-scheme
 * 
 * Author: Bjorn Lu
 * License: MIT
 */
(function () {
  var pcs = function pcs(lightTheme, darkTheme) {
    var target = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : document.documentElement.style;
    var darkQuery = window.matchMedia('(prefers-color-scheme: dark)');

    var setTheme = function setTheme(isDark) {
      Object.entries(isDark ? darkTheme : lightTheme).forEach(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            k = _ref2[0],
            v = _ref2[1];

        target.setProperty(k, v);
      });
    };

    var setState = function setState(state) {
      if (state === 'auto') {
        setTheme(darkQuery.matches);

        darkQuery.onchange = function () {
          setTheme(darkQuery.matches);
        };
      } else {
        setTheme(state === 'dark');
        darkQuery.onchange = null;
      }
    };

    return {
      setState: setState
    };
  };

  if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
    module.exports = pcs;
  } else {
    window.pcs = pcs;
  }
})();