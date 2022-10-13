class CheckoutStepTwoPage {

    finish() {
        cy.get('[data-test="finish"]')
            .click()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/checkout-complete.html')
    }
}

export default new CheckoutStepTwoPage()