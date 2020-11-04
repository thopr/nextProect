"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _react = _interopRequireWildcard(require("react"));

var _propTypes = _interopRequireDefault(require("prop-types"));

var _context = require("./context");

var _constants = require("../../libs/constants");

var _utils = require("./utils");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

function _getRequireWildcardCache() { if (typeof WeakMap !== "function") return null; var cache = new WeakMap(); _getRequireWildcardCache = function _getRequireWildcardCache() { return cache; }; return cache; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }

function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

var RIGHT_SIDE = 1;
var LEFT_SIDE = -1;
/**
 * An Accordion is a collection of vertically stacked sections with multiple content areas.
 * Allows a user to toggle the display of a section of content.
 * @category Layout
 */

var Accordion =
/*#__PURE__*/
function (_Component) {
  _inherits(Accordion, _Component);

  function Accordion(props) {
    var _this$keyHandlerMap;

    var _this;

    _classCallCheck(this, Accordion);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Accordion).call(this, props));
    _this.containerRef = _react["default"].createRef();
    _this.handleToggleSection = _this.handleToggleSection.bind(_assertThisInitialized(_this));
    _this.handleFocusSection = _this.handleFocusSection.bind(_assertThisInitialized(_this));
    _this.registerAccordionSection = _this.registerAccordionSection.bind(_assertThisInitialized(_this));
    _this.unregisterAccordionSection = _this.unregisterAccordionSection.bind(_assertThisInitialized(_this));
    _this.handleKeyPressed = _this.handleKeyPressed.bind(_assertThisInitialized(_this));
    _this.keyHandlerMap = (_this$keyHandlerMap = {}, _defineProperty(_this$keyHandlerMap, _constants.RIGHT_KEY, function () {
      return _this.selectAccordionSection(RIGHT_SIDE);
    }), _defineProperty(_this$keyHandlerMap, _constants.LEFT_KEY, function () {
      return _this.selectAccordionSection(LEFT_SIDE);
    }), _defineProperty(_this$keyHandlerMap, _constants.DOWN_KEY, function () {
      return _this.selectAccordionSection(RIGHT_SIDE);
    }), _defineProperty(_this$keyHandlerMap, _constants.UP_KEY, function () {
      return _this.selectAccordionSection(LEFT_SIDE);
    }), _this$keyHandlerMap);
    _this.state = {
      activeNames: props.activeSectionNames,
      multiple: props.multiple,
      privateOnToggleSection: _this.handleToggleSection,
      privateOnFocusSection: _this.handleFocusSection,
      privateRegisterAccordionSection: _this.registerAccordionSection,
      privateUnregisterAccordionSection: _this.unregisterAccordionSection,
      privateOnKeyPressed: _this.handleKeyPressed,
      childrenRegistered: []
    };
    return _this;
  }

  _createClass(Accordion, [{
    key: "setAsSelectAccordionSection",
    value: function setAsSelectAccordionSection(accordionSectionIndex) {
      var childrenRegistered = this.state.childrenRegistered;
      childrenRegistered[accordionSectionIndex].focusButtonIcon();
    }
  }, {
    key: "handleToggleSection",
    value: function handleToggleSection(event, name) {
      var onToggleSection = this.props.onToggleSection;

      if (typeof onToggleSection === 'function') {
        return onToggleSection(event, name);
      }

      return this.setState({
        activeNames: name
      });
    }
  }, {
    key: "handleFocusSection",
    value: function handleFocusSection(currentSection) {
      return this.setState({
        currentSection: currentSection
      });
    }
  }, {
    key: "handleKeyPressed",
    value: function handleKeyPressed(event) {
      if (this.keyHandlerMap[event.keyCode]) {
        event.preventDefault();
        return this.keyHandlerMap[event.keyCode]();
      }

      return null;
    }
  }, {
    key: "selectAccordionSection",
    value: function selectAccordionSection(side) {
      var _this$state = this.state,
          childrenRegistered = _this$state.childrenRegistered,
          currentSection = _this$state.currentSection;
      var accordionSectionIndex = childrenRegistered.findIndex(function (section) {
        return section.name === currentSection;
      });

      if (accordionSectionIndex === childrenRegistered.length - 1 && side === RIGHT_SIDE) {
        this.setAsSelectAccordionSection(0);
      } else if (accordionSectionIndex === 0 && side === LEFT_SIDE) {
        this.setAsSelectAccordionSection(childrenRegistered.length - 1);
      } else {
        this.setAsSelectAccordionSection(accordionSectionIndex + side);
      }
    }
  }, {
    key: "registerAccordionSection",
    value: function registerAccordionSection(section) {
      var childrenRegistered = this.state.childrenRegistered;

      var _getChildAccordionSec = (0, _utils.getChildAccordionSectionNodes)(this.containerRef.current),
          _getChildAccordionSec2 = _toArray(_getChildAccordionSec),
          nodes = _getChildAccordionSec2.slice(0);

      var newChildrenRefs = (0, _utils.insertChildOrderly)(childrenRegistered, section, nodes);
      this.setState({
        childrenRegistered: newChildrenRefs
      });
    }
  }, {
    key: "unregisterAccordionSection",
    value: function unregisterAccordionSection(sectionName) {
      var childrenRegistered = this.state.childrenRegistered;
      var newAccordionSectionChildren = childrenRegistered.filter(function (section) {
        return section.name !== sectionName;
      });
      this.setState({
        childrenRegistered: newAccordionSectionChildren
      });
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          id = _this$props.id,
          children = _this$props.children,
          style = _this$props.style,
          className = _this$props.className;
      return _react["default"].createElement("ul", {
        ref: this.containerRef,
        id: id,
        className: className,
        style: style
      }, _react["default"].createElement(_context.Provider, {
        value: this.state
      }, children));
    }
  }], [{
    key: "getDerivedStateFromProps",
    value: function getDerivedStateFromProps(props, state) {
      var activeSectionNames = props.activeSectionNames,
          onToggleSection = props.onToggleSection;

      if (activeSectionNames && activeSectionNames !== state.activeNames && typeof onToggleSection === 'function') {
        return {
          activeNames: activeSectionNames
        };
      }

      return null;
    }
  }]);

  return Accordion;
}(_react.Component);

exports["default"] = Accordion;
Accordion.propTypes = {
  /** The id of the outer element. */
  id: _propTypes["default"].string,

  /** A CSS class for the outer element, in addition to the component's base classes. */
  className: _propTypes["default"].string,

  /** An object with custom style applied for the outer element. */
  style: _propTypes["default"].object,

  /**
   * This prop that should not be visible in the documentation.
   * @ignore
   */
  children: _propTypes["default"].node,

  /** If true, expands multiples AccordionSections.
   * This value defaults to false. */
  multiple: _propTypes["default"].bool,

  /** Action fired when an AccordionSection is selected.
   * The event params include the `name` of the selected AccordionSection. */
  onToggleSection: _propTypes["default"].func,

  /** It contain the name of the AccordionSection that is expanded.
   * It is an array of string when multiple is true,
   * or a string when when multiple is false.
   * It must match the name of the AccordionSection. */
  activeSectionNames: _propTypes["default"].oneOfType([_propTypes["default"].arrayOf(_propTypes["default"].string), _propTypes["default"].string])
};
Accordion.defaultProps = {
  className: undefined,
  style: undefined,
  children: null,
  id: undefined,
  multiple: false,
  onToggleSection: undefined,
  activeSectionNames: undefined
};

//# sourceMappingURL=index.js.map