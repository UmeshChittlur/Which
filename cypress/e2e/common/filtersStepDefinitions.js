import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import BasePage from "../../support/pageObjects/BasePage"
import TelevisionPage from "../../support/pageObjects/TelevisionPage"
import Utility from "../../support/Utility"

const basePage = new BasePage()
const televisionPage = new TelevisionPage()


Given('I navigate to Television page', () => {
    cy.visit(Cypress.env('baseUrl') + "/reviews/televisions")
    basePage.getAcceptCookies().click()
    basePage.getWhichCloseBanner().click()
    basePage.getAcceptCookies().should('not.be.visible')
    cy.getCookie('OptanonAlertBoxClosed').should('exist')
    cy.url().should('include', "/reviews/televisions")
    televisionPage.getTelevesionReviewsText().should('have.text', 'Television reviews')
})

When('I click on resolution {string}', (Resolution) => {
    televisionPage.getResolution(Resolution).then(($resolution) => {
        const firstText = $resolution.find("span[class='sbui-7n5ir5']").text()
        const actualresults = firstText.substring(0, firstText.length - 1)
        Utility.setValue('actualResultCount', actualresults[1])
    })
    televisionPage.getResolution(Resolution).contains(Resolution).click()
})

When('I verify filters applied for {string} on filter section', (filter) => {
    televisionPage.getProductListHeader().should('contain.text', Utility.getValue('actualResultCount') + ' television reviews')
    televisionPage.getAppliedFiltersText().should('have.text', 'Applied filters').should('be.visible')
    televisionPage.getAppliedFilters().contains(filter)
})


Then('I verify resolution {string} results are displayed for Television', (Resolution) => {
    cy.wait(2000)
    cy.get('[data-testid="reviews-products"] [class="Products_productItem__4osTI"]').each(($el, index, $list) => {
        const actualText = $el.find('[class ="ProductCardTags__list--1mrk_ ProductCard__tags--2eWqG"] li').text()
        expect(actualText.includes(Resolution)).to.be.true
    })
    cy.get('[data-testid="reviews-products"] [class="Products_productItem__4osTI"]').each(($el, index, $list) => {
        const actualText = $el.find('[class ="ProductCardTags__list--1mrk_ ProductCard__tags--2eWqG"] li').text()
        expect(actualText.includes('HD-Ready', '4K Ultra-HD')).to.be.false
    })
})