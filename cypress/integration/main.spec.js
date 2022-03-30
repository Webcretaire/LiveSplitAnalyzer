/// <reference types="cypress" />

describe('Main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/LiveSplitAnalyzer')
  })

  it('displays properly', () => {
    cy.get('h1').first().should('have.text', 'LiveSplit Analyzer')
    cy.get('input.custom-file-input').should('have.length', 1)
  })
})
