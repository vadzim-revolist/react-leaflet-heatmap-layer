'use strict';

exports.__esModule = true;

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _propTypes = require('prop-types');

var _propTypes2 = _interopRequireDefault(_propTypes);

var _reactLeaflet = require('react-leaflet');

var ReactLeaflet = _interopRequireWildcard(_reactLeaflet);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = ReactLeaflet.withLeaflet || function (Component) {
  var LeafletComponent = function LeafletComponent(props, context) {
    return _react2.default.createElement(Component, _extends({}, props, { leaflet: context }));
  };

  LeafletComponent.contextTypes = {
    layerContainer: _propTypes2.default.any,
    map: _propTypes2.default.any
  };

  return LeafletComponent;
};