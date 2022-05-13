/// <reference types="cypress" />

import Alert from '../../src/alert';

describe('Alert Class Tests', () => {

  beforeEach(() => {
    cy.intercept('GET', 'cypress/alert.html').as('alert-page')
      .visit('cypress/alert.html')
  });

  // it('Init without any parameters - throws error', () => {
  //   cy.log('This test will pass, as we initialize without any parameter and assert an error.').then(() => {
  //     const args = [];
  //     try {
  //       new Alert(...args);
  //     } catch (error) {
  //       expect(error).to.be.instanceOf(Error);
  //       expect(error).to.have.property('message', `Alert ERROR: The "${args[0]}" is not a valid HTMLElement or relevant selector`);
  //     }
  //   })
  // });

  it('Init with target `.alert` SELECTOR string', () => {
    cy.log('**This test will fail because**:')
      .log('-- a string is not **instanceof HTMLElement** in *src/getElement*')
      .log('-- but also not **typeof "string"** in *src/getElement*')
      .wait('@alert-page')
      .window().then((win) => {
        const instance = new Alert('.alert');
        expect(instance.element).to.be.instanceOf(win.HTMLElement);
      });
  });

  it('Init with target `HTMLElement`', () => {
    cy.log('**This test will fail because**:')
      .log('-- **target instanceof HTMLElement** doesn\'t work in *src/getElement*')
      .log('-- but also not **typeof "string"** in *src/getElement*')
      .wait('@alert-page')
      .window().then((win) => {
        cy.get('.alert').then(($element) => {
          const element = $element.get(0);
          const instance = new Alert(element);
          expect(instance.element).to.be.instanceOf(win.HTMLElement);
        });
      });
  });
});