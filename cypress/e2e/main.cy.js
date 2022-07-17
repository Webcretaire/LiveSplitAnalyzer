/// <reference types="cypress" />

const BASE_URL = 'http://localhost:3000/LiveSplitAnalyzer/';

const SPLITSIO_ID_ALL_SKILLS = '9axe';

const SPLITSIO_ID_POP = '8x1g';

const openCard = () => {
  cy.get('button').first().click();
};

const cleanText = text => text.replaceAll(/\s*\n\s*/g, ' ').trim();

describe('Main page', () => {
  beforeEach(() => {
    cy.visit(BASE_URL);
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
      // Check that default lower and higher bound are computed properly
      cy.get('p')
        .filter((index, el) => el.innerText.includes('finished runs in the range'))
        .first()
        .invoke('text')
        .then(text => {
          cy.wrap(cleanText(text))
            .should('equal', '34 finished runs in the range [ 0s ; 28m14.43s ]');
        });
    });
  });

  it('Attempt overview works properly', () => {
    // Open second tab
    cy.get('a.nav-link[aria-posinset="2"').click();

    // PB should be selected by default
    cy.get('#AttemptOverviewTimeCard').within(() => {
      cy.get('h4.card-title').first().should('have.text', 'Personal Best overview (18m38.83s total)');
    });
    cy.get('#AttemptOverviewTimesaveCard').within(() => {
      cy.get('h4.card-title').first().should('have.text', 'Possible timesave (45.81s total)');
    });

    // Select another attempt that's not PB
    cy.get('.tab-pane.active .card').first().within(() => {
      openCard();
      cy.get('input[type="number"]').clear().type('100');
    });

    cy.get('#AttemptOverviewTimeCard').within(() => {
      cy.get('h4.card-title').first().should('have.text', 'Attempt n°100 overview (18m49.24s total)');
    });

    cy.get('#AttemptOverviewTimesaveCard').within(() => {
      cy.get('h4.card-title').first().should('have.text', 'Possible timesave (56.23s total)');
    });
  });

  it('Split names are extracted properly', () => {
    // Open last tab (actually not mandatory because tabs are not loaded lazily)
    cy.get('a.nav-link[aria-posinset="4"').click();
    const splits = [];
    cy.get('.SingleSplitCard h3')
      .each(el => splits.push(cleanText(el.text())))
      .wrap(splits)
      .should('deep.equal', [
        'Vengeful Spirit',
        'King\'s Pass (subsplit)',
        'Vengeful Spirit (subsplit)',
        'Greenpath',
        'Mothwing Cloak',
        'Mantis Claw',
        'Blue Lake',
        'Gruz Mother (subsplit)',
        'Blue Lake (subsplit)',
        'Lemm Shop',
        'Gorgeous Husk (subsplit)',
        'Lemm Shop (subsplit)',
        'Crystal Heart',
        'BUY LANTERN YOU IDIOT (subsplit)',
        'Crystal Heart (subsplit)',
        'Myla'
      ]);
  });

  it('Switch can be made between game time and real time', () => {
    // Open second tab
    cy.get('a.nav-link[aria-posinset="2"').click();

    cy.get('.floating-button').first().click();

    cy.get('#AttemptOverviewTimeCard').within(() => { // Game time should be displayed
      cy.get('h4.card-title').first().should('have.text', 'Personal Best overview (18m38.83s total)');
    });

    cy.get('.modal-body .custom-control-label').first().click();

    cy.get('#AttemptOverviewTimeCard').within(() => { // Real time should be displayed
      cy.get('h4.card-title').first().should('have.text', 'Personal Best overview (21m31.58s total)');
    });
  });

  it('Loading splits from splits.io works', () => {
    // Load file using form
    cy.get('input[type=text]').type(SPLITSIO_ID_ALL_SKILLS);
    cy.get('.input-group-append button').click();
    cy.get('#RunOverviewCard h4.card-title', {timeout: 10000}).first().should('have.text', 'Hollow Knight - All Skills');
    cy.get('img.logo').should('have.attr', 'src')
      .then(src => expect(src.includes('schy')).to.be.false);

    // Load file from URL
    cy.visit(`${BASE_URL}?splitsio=${SPLITSIO_ID_POP}`);
    cy.get('#RunOverviewCard h4.card-title', {timeout: 10000}).first().should('have.text', 'Hollow Knight - Path of Pain');
    cy.get('img.logo').should('have.attr', 'src')
      .then(src => expect(src.includes('schy')).to.be.true);
  });
});
