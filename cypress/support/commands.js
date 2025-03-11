Cypress.Commands.add('fillMandatoryFieldsAndSubmit', ( data = {
    firstName: 'teste1',
    lastName: 'silva',
    email: 'test@gmail.com',
    text: 'ok testando 123'
}) => {
    const longText = Cypress._.repeat('leo', 20)

    cy.get('#firstName').type(data.firstName)
    cy.get('#lastName').type(data.lastName)
    cy.get('#email').type(data.email)
    cy.get('#open-text-area').type(data.text)
    cy.get('button[type="submit"]').click()
})