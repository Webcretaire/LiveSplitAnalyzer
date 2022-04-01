/// <reference types="cypress" />

const openCard = () => {
  cy.get('button').first().click();
};

const cleanText = text => text.replaceAll(/\s*\n\s*/g, ' ').trim();

describe('Main page', () => {
  beforeEach(() => {
    cy.visit('http://localhost:3000/LiveSplitAnalyzer');
    cy.get('input.custom-file-input').attachFile('hkmeme_myla.lss');
  });

  it('Basic info is extracted properly', () => {
    cy.get('#RunOverviewCard').within(() => {
      cy.get('h4.card-title').first().should('have.text', 'Hollow Knight Category Extensions - Myla%');
      const texts = [];
      cy.get('p')
        // Remove newlines and spaces that are just from HTML formatting
        .each(el => texts.push(cleanText(el.text())))
        .wrap(texts)
        .should('deep.equal', ['145 attempts', 'Finished runs: 34', 'Number of PBs: 5', 'Reset rate: 76.6%', 'Myla% Glitch: Current Patch NMG']);
    });
  });

  it('Attempts stats work properly', () => {
    cy.get('#AttemptsStatsCard').within(() => {
      cy.get('h4.card-title').first().should('have.text', 'Attempts stats');
      openCard();
      // Check that default lower and higher bound are computed properly
      cy.get('p')
        .filter((index, el) => el.innerText.includes('finished runs in the range'))
        .first()
        .invoke('text')
        .then(text => {
          cy.wrap(cleanText(text))
            .should('equal', '34 finished runs in the range [ 18m38.83s ; 28m13.43s ]');
        });
    });
  });

  it('Attempt overview works properly', () => {
    cy.get('#AttemptOverviewCard').within(() => {
      // PB should be selected by default
      cy.get('h4.card-title').first().should('have.text', 'Personal Best');
      openCard();
      // Check that PB time and timesave are computed properly
      cy.get('h3').first().should('contain.text', 'PB Overview (18m38.83s total)');
      cy.get('h3').eq(1).should('contain.text', 'Possible timesave (45.81s total)');
    });

    // Select another attempt that's not PB
    cy.get('#OptionsCard').within(() => {
      openCard();
      cy.get('input[type="number"]').clear().type('100');
    });

    cy.get('#AttemptOverviewCard').within(() => {
      // Title should have changed
      cy.get('h4.card-title').first().should('have.text', 'Attempt n°100');
      // Check that time and timesave updated properly
      cy.get('h3').first().should('contain.text', 'Attempt Overview (18m49.24s total)');
      cy.get('h3').eq(1).should('contain.text', 'Possible timesave (56.23s total)');
    });
  });

  it('Split names are extracted properly', () => {
    const splits = [];
    cy.get('.SingleSplitCard h3')
      .each(el => splits.push(cleanText(el.text())))
      .wrap(splits)
      .should('deep.equal', [
        'King\'s Pass (subsplit)',
        'Vengeful Spirit',
        'Greenpath',
        'Mothwing Cloak',
        'Mantis Claw',
        'Gruz Mother (subsplit)',
        'Blue Lake',
        'Gorgeous Husk (subsplit)',
        'Lemm Shop',
        'BUY LANTERN YOU IDIOT (subsplit)',
        'Crystal Heart',
        'Myla'
      ]);
  });
});
