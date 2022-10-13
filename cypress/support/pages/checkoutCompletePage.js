class CheckoutCompletePage {

    backToHome() {
        cy.get('[data-test="back-to-products"]')
            .click()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/inventory.html')
    }
}

export default new CheckoutCompletePage()