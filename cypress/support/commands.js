Cypress.Commands.add('fillMandatoryFieldsAndSubmit', () => {
    const longText = Cypress._.repeat('leo', 20)

    cy.get('#firstName').type('leonardo')
    cy.get('#lastName').type('laurindo')
    cy.get('#email').type('leo@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()
})