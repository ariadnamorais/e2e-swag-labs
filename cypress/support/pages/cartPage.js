class CartPage {
    checkout() {
        cy.get('[data-test="checkout"]')
            .click()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/checkout-step-one.html')
    }

    removeJacket() {
        cy.get('[data-test="remove-sauce-labs-fleece-jacket"]')
            .click()
        cy.get('#cart_contents_container')
            .should('not.have.text', 'Sauce Labs Fleece Jacket')
    }

    continueShopping() {
        cy.get('[data-test="continue-shopping"]')
            .click()
        cy.url()
            .should('eq', Cypress.config().baseUrl + '/inventory.html')
    }

}

export default new CartPage()