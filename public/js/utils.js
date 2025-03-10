"use strict";

// add events on elements
const addEventOnElems = function (elements, eventType, callback) {
  elements.forEach(element => element.addEventListener(eventType, callback));
}

export { addEventOnElems };