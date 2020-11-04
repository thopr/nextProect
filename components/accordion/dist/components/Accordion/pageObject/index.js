"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var PageAccordionSection = require('../../AccordionSection/pageObject');
/**
 * Accordion page object class.
 * @class
 * @tutorial accordion
 */


var PageAccordion =
/*#__PURE__*/
function () {
  /**
   * Create a new Accordion page object.
   * @constructor
   * @param {string} rootElement - The selector of the Accordion root element.
   */
  function PageAccordion(rootElement) {
    _classCallCheck(this, PageAccordion);

    this.rootElement = rootElement;
  }
  /**
   * Returns a new AccordionSection page object of the element in item position.
   * @method
   * @param {number} itemPosition - The base 0 index of the accordion section.
   */


  _createClass(PageAccordion, [{
    key: "getItem",
    value: function getItem(itemPosition) {
      var items = $(this.rootElement).$$('[data-id="accordion-section-li"]');

      if (items[itemPosition]) {
        return new PageAccordionSection("".concat(this.rootElement, " [data-id=\"accordion-section-li\"]:nth-child(").concat(itemPosition + 1, ")"));
      }

      return null;
    }
  }]);

  return PageAccordion;
}();

module.exports = PageAccordion;

//# sourceMappingURL=index.js.map