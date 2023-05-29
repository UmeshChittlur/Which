Cypress.Commands.add('sortByDropdown', (label) => {
    cy.get("div[data-testid='drop-down-container']").click()
    cy.contains(label).click()
    switch (label) {
        case "Most-recently reviewed":
            cy.get("div[class='CustomDropdown__selectedOption--OyI-E']").should('have.text', 'Most-recently reviewed')
            cy.url().should('include', "/reviews/televisions?sortBy=TESTING_DATE_DESC")
            break;
        case "Price (low to high)":
            cy.get("div[class='CustomDropdown__selectedOption--OyI-E']").should('have.text', 'Price (low to high)')
            cy.url().should('include', "/reviews/televisions?sortBy=PRICE_ASC")
            break;
        case "Price (high to low)":
            cy.get("div[class='CustomDropdown__selectedOption--OyI-E']").should('have.text', 'Price (high to low)')
            cy.url().should('include', "/reviews/televisions?sortBy=PRICE_DESC")
            break;
        case "Running cost (low to high)":
            cy.get("div[class='CustomDropdown__selectedOption--OyI-E']").should('have.text', 'Running cost (low to high)')
            cy.url().should('include', "/reviews/televisions?sortBy=ANNUAL_RUNNING_COST_ASC")
            break;
        case "Most-recently launched":
            cy.get("div[class='CustomDropdown__selectedOption--OyI-E']").should('have.text', 'Most-recently launched')
            cy.url().should('include', "/reviews/televisions?sortBy=LAUNCH_DATE_DESC")
            break;
    }
})

Cypress.Commands.add('waitForPostApi', (api, apiAlias) => {
    cy.intercept({
        method: 'POST',
        url: api
    }).as(apiAlias)
    cy.wait([`@${apiAlias}`])
})