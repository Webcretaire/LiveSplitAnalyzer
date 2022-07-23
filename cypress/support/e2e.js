import './commands';

Cypress.Screenshot.defaults({
  screenshotOnRunFailure: false
})

Cypress.on('uncaught:exception', (err, _) => {
  // I think this is a weird Plotly error that I don't understand, so don't fail the tests on that
  if (err.message.includes('Resize must be passed a displayed plot div'))
    return false;
})
