class CheckoutStepOnePage {
    inputCheckout(name, lastName, zipCode) {
        cy.get('[data-test="firstName"]')
            .type(name)
        cy.get('[data-test="lastName"]')
            .type(lastName)
        cy.get('[data-test="postalCode"]')
            .type(zipCode)
    }

    continue() {
        cy.get('[data-test="continue"]')
            .click()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/checkout-step-two.html')
    }

}

export default new CheckoutStepOnePage()