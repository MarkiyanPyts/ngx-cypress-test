/// <reference types="cypress" />

describe('First Test Suite', () => {
    it('first test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // by tag name
        cy.get('input')

        // by tag id
        cy.get('#inputEmail1')

        // by tag class
        cy.get('.input-full-width')

        // by tag attribute name
        cy.get('[fullwidth]')

        // by tag attribute name and value
        cy.get('[placeholder="Email"]')

        // by entire class value
        cy.get('[class="input-full-width size-medium shape-rectangle"]')

        // by 2 attributes
        cy.get('[placeholder="Email"][fullwidth]')

        // by tag, attribute id and class
        cy.get('input[placeholder="Email"]#inputEmail1.input-full-width')

        // by cypress test id
        cy.get('[data-cy="imputEmail1"]')
    })

    it('second test', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        // Theory
        // get() - find elements on the page by locator globally...even when chained after other cypress methods
        // find() - find child elements by locator, can only be chained after other cypress methods
        // contains() - find elements by HTML text and by text and locator

        cy.contains('Sign in')
        cy.contains('[status="warning"]', 'Sign in')
        cy.contains('nb-card', 'Horizontal form').find('button')
        cy.contains('nb-card', 'Horizontal form').contains('Sign in')
        cy.contains('nb-card', 'Horizontal form').get('button')

        // cypress chains and DOM
        cy.get('#inputEmail3').parents('form').find('button').should('contain', 'Sign in')
            .parents('form').find('nb-checkbox').click()  
    })

    //it.only() - only run this test
    it.only('save subject of the command', () => {
        cy.visit('/')
        cy.contains('Forms').click()
        cy.contains('Form Layouts').click()

        cy.contains('nb-card', 'Using the Grid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.contains('nb-card', 'Using the Grid').find('[for="inputPassword2"]').should('contain', 'Password')

        // CANT Do Things Like This
        // const usingTheGrid = cy.contains('nb-card', 'Using the Grid')
        // usingTheGrid.find('[for="inputEmail1"]').should('contain', 'Email')
        // usingTheGrid.find('[for="inputPassword2"]').should('contain', 'Password')

        // 1 Cypress Alias
        cy.contains('nb-card', 'Using the Grid').as('usingTheGrid')
        cy.get('@usingTheGrid').find('[for="inputEmail1"]').should('contain', 'Email')
        cy.get('@usingTheGrid').find('[for="inputPassword2"]').should('contain', 'Password')

        // 2 Cypress then() methods

    })


})
