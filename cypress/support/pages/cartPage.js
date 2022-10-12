class CartPage {
    checkout() {
        cy.get('[data-test="checkout"]')
            .click()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/checkout-step-one.html')
    }

}

export default new CartPage()