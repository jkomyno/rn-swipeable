'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactNative = require('react-native');

var _reactNativeSwipeOut = require('react-native-swipe-out');

var _reactNativeSwipeOut2 = _interopRequireDefault(_reactNativeSwipeOut);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _defaults(obj, defaults) { var keys = Object.getOwnPropertyNames(defaults); for (var i = 0; i < keys.length; i++) { var key = keys[i]; var value = Object.getOwnPropertyDescriptor(defaults, key); if (value && value.configurable && obj[key] === undefined) { Object.defineProperty(obj, key, value); } } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : _defaults(subClass, superClass); }

var Swipeable = function (_Component) {
  _inherits(Swipeable, _Component);

  function Swipeable(props) {
    _classCallCheck(this, Swipeable);

    var _this = _possibleConstructorReturn(this, _Component.call(this, props));

    _this.state = {
      show: false,
      paddingTop: 0
    };
    return _this;
  }

  Swipeable.prototype.renderCustomButton = function renderCustomButton(button) {
    var renderChildren = button.renderChildren,
        style = button.style;

    var bgColor = style.backgroundColor || 'transparent';
    var childComponent = _react2["default"].createElement(
      _reactNative.View,
      {
        style: [{
          flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: bgColor
        }, style]
      },
      renderChildren()
    );

    return {
      text: button.text || 'Click',
      onPress: button.onPress,
      type: 'default',
      component: childComponent,
      backgroundColor: 'transparent',
      color: '#999',
      disabled: false
    };
  };

  Swipeable.prototype.render = function render() {
    var _this2 = this;

    var _props = this.props,
        disabled = _props.disabled,
        autoClose = _props.autoClose,
        style = _props.style,
        left = _props.left,
        right = _props.right,
        onOpen = _props.onOpen,
        onClose = _props.onClose,
        children = _props.children;


    var customLeft = left.map(function (btn) {
      return _this2.renderCustomButton(btn);
    });
    var customRight = right.map(function (btn) {
      return _this2.renderCustomButton(btn);
    });

    return (left.length || right.length) && !disabled ? _react2["default"].createElement(
      _reactNativeSwipeOut2["default"],
      {
        autoClose: autoClose,
        left: customLeft,
        right: customRight,
        style: style,
        onOpen: onOpen,
        onClose: onClose
      },
      children
    ) : _react2["default"].createElement(
      _reactNative.View,
      { style: style },
      children
    );
  };

  return Swipeable;
}(_react.Component);

Swipeable.propTypes = {
  prefixCls: _react.PropTypes.string,
  autoClose: _react.PropTypes.bool,
  disabled: _react.PropTypes.bool,
  left: _react.PropTypes.arrayOf(_react.PropTypes.object),
  right: _react.PropTypes.arrayOf(_react.PropTypes.object),
  onOpen: _react.PropTypes.func,
  onClose: _react.PropTypes.func,
  children: _react.PropTypes.any,
  style: _react.PropTypes.object
};
Swipeable.defaultProps = {
  autoClose: false,
  disabled: false,
  left: [],
  right: [],
  onOpen: function onOpen() {},
  onClose: function onClose() {}
};
exports["default"] = Swipeable;
module.exports = exports['default'];