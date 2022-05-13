import getElement from "./getElement";

export default class Alert {
  constructor(target) {
    const element = getElement(target);

    // this error should be thrown when `element` is NULL
    // first test in the `cypress/integration/alert.spec.js` file
    // if (!element) {
    //   throw Error(`Alert ERROR: The "${target}" is not a valid HTMLElement or relevant selector`)
    // }

    this.element = element;
  }
}