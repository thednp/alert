 const elementNodes = [
  window.HTMLElement,
  window.top.HTMLElement,
  HTMLElement,
];
  
/**
 * Check if element is already an HTMLElement and return it,
 * or return anything that might match a string selector.
 *
 * @param {HTMLElement | string} selector 
 * @returns {HTMLElement?}
 */
export default function getElement(selector) { 
  // parameter is already an HTMLElement
  // this is what doesn't work !!
  if (elementNodes.some((x) => selector instanceof x)) {
    return selector;
  }

  // this works as expected if a string is given, however because the above check fails
  // this is where the error occurs, querySelector is using a real HTMLElement as selector
  if (typeof selector === 'string') {
    return document.querySelector(selector);
  }

  

  // give up
  return null;
}
