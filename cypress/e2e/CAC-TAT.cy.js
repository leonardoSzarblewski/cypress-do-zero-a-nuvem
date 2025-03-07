describe('Central de Atendimento ao Cliente TAT', () => {
  beforeEach(() => {
    cy.visit('./src/index.html')

  })

  it('verifica o titulo da aplicação', () => {

    cy.title().should('be.equal','Central de Atendimento ao Cliente TAT')
  })


  it('preenche os campos obrigatórios e envia o formulário', () => {

    cy.get('#firstName').type('leonardo')
    cy.get('#lastName').type('laurindo')
    cy.get('#email').type('leo@gmail.com')
    cy.get('#open-text-area').type('testando teste 123....@@@')
    cy.get('.button').click().should('be.visible','.sucess')
  })
})