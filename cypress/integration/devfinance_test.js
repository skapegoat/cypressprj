/// <reference types="cypress" />
describe ('Teste DEVfinance', () => {
    it ('visit dev finance', () => {
        cy.visit('https://maratona-discover-devfinance.netlify.app/#')
        
        // Click nova transação > adicionar descrição > checar > Inserir valor positivo
        cy.get('#transactions > .button').click()
        cy.get('#description').type('Venda PS3').should('have.value', 'Venda PS3')
        cy.get('#amount').type('800.00')
        cy.get('#date').type('2022-01-09')
        cy.get('button').click()
        cy.get('#transactions > .button').click()
        cy.get('#description').type('Venda Jogos').should('have.value', 'Venda Jogos')
        cy.get('#amount').type('300.00')
        cy.get('#date').type('2022-01-10')
        cy.get('button').click()
        cy.get('#transactions > .button').click()
        cy.get('#description').type('Empréstimo Mãezinha').should('have.value', 'Empréstimo Mãezinha')
        cy.get('#amount').type('900.00')
        cy.get('#date').type('2022-01-11')
        cy.get('button').click()

        // Inserir valor negativo > editar
        cy.get('#transactions > .button').click()
        cy.get('#description').type('Compra PS4')
        cy.get('#amount').type('-2100.00')
        cy.get('#date').type('2022-01-11')
        cy.get('button').click()
        cy.get('[data-index="3"] > :nth-child(4) > .data-table-edit').click()
        cy.get('#amount').clear().type('-1900.00')
        cy.get('button').click()

        // "Empréstimo Mãezinha" deu ruim
        cy.get('[onclick="Transaction.remove(2)"]').click()
})
})