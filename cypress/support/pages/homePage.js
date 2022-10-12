class HomePage {
    addToCartJacket() {
        cy.get('#add-to-cart-sauce-labs-fleece-jacket')
            .click()
    }

    addToCartBackpack() {
        cy.get('#add-to-cart-sauce-labs-backpack')
            .click()
    }

    cart() {
        cy.get('shopping_cart_link')
            .click()
    }

    cartBadge() {
        cy.get('.shopping_cart_badge')
            .should('be.visible')
            .click()
    }


}

export default new HomePage()