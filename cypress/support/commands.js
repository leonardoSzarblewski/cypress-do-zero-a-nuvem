Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ( data = {
    firstName: 'teste1',
    lastName: 'silva',
    email: 'test@gmail.com',
    text: 'ok testando 123'
}) => {

    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.contains('button', 'Enviar').click()
})

Cypress.Commands.add('fillAndCleanInputs', () => {
    cy.get('#firstName')
      .type('leonardo')
      .should('have.value', 'leonardo')
      .clear()
      .should('have.value', '')
    cy.get('#lastName')
      .type('laurindo')
      .should('have.value', 'laurindo')
      .clear()
      .should('have.value', '')
    cy.get('#email')
      .type('leo@gmail.com')
      .should('have.value', 'leo@gmail.com')
      .clear()
      .should('have.value', '')
    cy.get('#phone')
      .type('999999999')
      .should('have.value', '999999999')
      .clear()
      .should('have.value', '')
})

