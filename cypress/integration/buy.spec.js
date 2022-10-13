/// <reference types="cypress" />
import LoginPage from '../support/pages/loginPage'
import HomePage from '../support/pages/homePage'
import CartPage from '../support/pages/cartPage'
import CheckoutStepOnePage from '../support/pages/checkoutStepOnePage'
import CheckoutStepTwoPage from '../support/pages/checkoutStepTwoPage'
import CheckoutCompletePage from '../support/pages/checkoutCompletePage'

describe('Buy', function () {

    beforeEach(function () {
        cy.visit('')
        LoginPage.login('standard_user', 'secret_sauce')
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/inventory.html')
    })

    it('Basic Flow | Successfully Purchase', function () {
        HomePage.addToCartBackpack()
        HomePage.cartBadge()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/cart.html')
        CartPage.checkout()
        CheckoutStepOnePage.inputCheckout('Jhonny', 'Morais', '60711510')
        CheckoutStepOnePage.continue()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/checkout-step-two.html')
        CheckoutStepTwoPage.finish()
        CheckoutCompletePage.backToHome()
    })

    it('Alternate Flow | Insert incorrect Postal Code', function () {
        HomePage.addToCartBackpack()
        HomePage.cartBadge()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/cart.html')
        CartPage.checkout()
        CheckoutStepOnePage.inputCheckout('Jhonny', 'Morais', '1{backspace}')
        CheckoutStepOnePage.continue()
        checkoutStepOnePage.errorMenssage('Error: Postal Code is required')
    })

    it('Alternate Flow | Insert incorrect Last Name', function () {
        HomePage.addToCartBackpack()
        HomePage.cartBadge()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/cart.html')
        CartPage.checkout()
        CheckoutStepOnePage.inputCheckout('Jhonny', '1{backspace}', '60711500')
        CheckoutStepOnePage.continue()
        checkoutStepOnePage.errorMenssage('Error: Last Name is required')
    })

    it('Alternate Flow | Insert incorrect First Name', function () {
        HomePage.addToCartBackpack()
        HomePage.cartBadge()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/cart.html')
        CartPage.checkout()
        CheckoutStepOnePage.inputCheckout('1{backspace}', 'Morais', '60711500')
        CheckoutStepOnePage.continue()
        checkoutStepOnePage.errorMenssage('Error: First Name is required')
    })


})