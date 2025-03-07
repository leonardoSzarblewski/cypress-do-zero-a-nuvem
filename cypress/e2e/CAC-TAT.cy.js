describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')

  })
  it('verifica o titulo da aplicação', () => {

    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })


  it('preenche os campos obrigatórios e envia o formulário', () => {
    const longText = Cypress._.repeat('leo', 20)

    cy.get('#firstName').type('leonardo')
    cy.get('#lastName').type('laurindo')
    cy.get('#email').type('leo@gmail.com')
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.get('.success').should('be.visible')
  })

  it('exibe mensagem de erro ao submeter o formulário com um email com formatação inválida',() => {
    cy.get('#email').type('test')
    cy.get('.button').click()    

    cy.get('.error').should('be.visible')
  })

  it('Campo telefone continua vazio quando escrevo valores não-numéricos',() => {
    cy.get('#phone')
      .type('teste')
      .should('have.value', '')
  })

  it.only('exibe mensagem de erro quando o telefone se torna obrigatório mas não é preenchido antes do envio do formulário', () => {
    const longText = Cypress._.repeat('leo', 20)

    cy.get('#firstName').type('leonardo')
    cy.get('#lastName').type('laurindo')
    cy.get('#email').type('leo@gmail.com')
    cy.get('#phone-checkbox').click()
    cy.get('#open-text-area').type(longText, { delay: 0 })
    cy.get('button[type="submit"]').click()

    cy.get('.error').should('be.visible')
  })
})