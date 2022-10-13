/// <reference types="cypress" />
import LoginPage from '../support/pages/loginPage'
import HomePage from '../support/pages/homePage'
import CartPage from '../support/pages/cartPage'

describe('Cart', function () {

    beforeEach(function () {
        cy.visit('')
        LoginPage.login('standard_user', 'secret_sauce')
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/inventory.html')
    })

    it('Basic Flow | Add item to cart', function () {
        HomePage.addToCartBackpack()
        HomePage.addToCartJacket()
        HomePage.cartBadge()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/cart.html')
    })

    it('Alternate Flow | Remove item from cart', function () {
        HomePage.addToCartBackpack()
        HomePage.addToCartJacket()
        HomePage.cartBadge()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/cart.html')
        CartPage.removeJacket()
    })

    it('Alternate Flow | Returne to shopping', function () {
        HomePage.addToCartBackpack()
        HomePage.cartBadge()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/cart.html')
        CartPage.continueShopping()
    })

})