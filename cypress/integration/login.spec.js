/// <reference types="cypress" />
import LoginPage from '../support/pages/loginPage'

describe('Login', function () {

    beforeEach(function () {
        cy.visit('')
    })

    it('Login Successfully', function () {

        LoginPage.login('standard_user', 'secret_sauce')
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/inventory.html')

    })

    it('Login Unsuccessful', function () {
        LoginPage.login('user_incorrect', 'secret_incorrect')
        cy.get('.error-button')
            .should('be.visible')
            .should('not.eql', Cypress.config().baseUrl + '/inventory.html')
    })

})