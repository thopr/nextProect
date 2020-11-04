"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.getChildAccordionSectionNodes = getChildAccordionSectionNodes;
exports.insertChildOrderly = insertChildOrderly;

function _toArray(arr) { return _arrayWithHoles(arr) || _iterableToArray(arr) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function getChildAccordionSectionNodes(ref) {
  if (ref) {
    return ref.querySelectorAll('li.rainbow-accordion-section_container');
  }

  return [];
}

function getRefIndex(nodes, ref) {
  return nodes.indexOf(ref);
}

function sortChildren(childrenRefs, nodes) {
  var _childrenRefs = _toArray(childrenRefs),
      newChildrenRefs = _childrenRefs.slice(0);

  newChildrenRefs.sort(function (refA, refB) {
    return getRefIndex(nodes, refA.ref) - getRefIndex(nodes, refB.ref);
  });
  return newChildrenRefs;
}

function insertChildOrderly(childrenRefs, childRef, nodes) {
  var newChildrenRefs = childrenRefs.concat([childRef]);
  return sortChildren(newChildrenRefs, nodes);
}

//# sourceMappingURL=utils.js.map