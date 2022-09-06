'use strict'

/**
 *
 * @param {string} htmlElement
 * @param {object} [attributes={}]
 * @returns {HTMLElement|null}
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
