describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')

  })
  it('verifica o titulo da aplicação', () => {

    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })


  it.only('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('leo', 20)

    cy.get('#firstName').type('leonardo')
    cy.get('#lastName').type('laurindo')
    cy.get('#email').type('leo@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',() => {
    
    
  })
})