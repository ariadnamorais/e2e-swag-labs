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

    it.only('Successfully Purchase', function () {
        HomePage.addToCartBackpack()
        HomePage.cartBadge()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/cart.html')
        CartPage.checkout()
        CheckoutStepOnePage.inputCheckout('Jhonny', 'Morais', '60711510')
        CheckoutStepOnePage.continue()
        CheckoutStepTwoPage.finish()
        CheckoutCompletePage.backToHome()
    })

})