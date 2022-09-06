'use strict'

/**
 * Creates an HTML element with the provided attributes.
 * @param {string} htmlElement The name of the HTML element to create
 * @param {object} [attributes={}] The attributes to apply to the newly created HTML element
 * @returns {HTMLElement|null} Returns the expected HTML element or `null` if the parameter *htmlElement* is not a **string**
 */
function zeus(htmlElement, attributes = {}) {
  if (typeof htmlElement !== 'string') {
    return null
  }

  if (typeof attributes !== 'object') {
    attributes = {}
  }

  return Object.assign(document.createElement(htmlElement), attributes)
}
