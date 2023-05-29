import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import BasePage from "../../support/pageObjects/BasePage"
import TelevisionPage from "../../support/pageObjects/TelevisionPage"


const basePage = new BasePage()
const televisionPage = new TelevisionPage()

When('I clear all session storage for cookies', () => {
    cy.clearCookies()
    cy.getCookie('OptanonAlertBoxClosed').should('not.exist')
})

When('I refresh the page', () => {
    cy.reload()
})

Then('I verify cookies should appear on the page', () => {
    basePage.getAcceptCookies().should('be.visible')
})

Then('I verify information for Pros is not visible in dom', () => {
    televisionPage.getProsInformation().first().invoke('attr', 'alt').should('eq', 'Content has been blurred out, please log in to view.')
})

Then('I verify information for Cons is not visible in dom', () => {
    televisionPage.getProsInformation().eq(1).invoke('attr', 'alt').should('eq', 'Content has been blurred out, please log in to view.')
})
