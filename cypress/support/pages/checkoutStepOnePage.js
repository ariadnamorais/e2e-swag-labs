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
    }

    errorMenssage(menssage) {
        cy.get('[data-test="error"]')
        .should('have.text', menssage)
    }

}

export default new CheckoutStepOnePage()