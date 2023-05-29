import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import TelevisionPage from "../../support/pageObjects/TelevisionPage"

const televisionPage = new TelevisionPage()

When('I click on Screen size {string}', (ScreenSize) => {
    televisionPage.getScreenSize(ScreenSize).contains(ScreenSize).click()
})

When('I click on Brands {string}', (Brands) => {
    televisionPage.getBrands().contains(Brands).click({ force: true })
})

When('I click on Screen type {string}', (ScreenType) => {
    televisionPage.getScreenType(ScreenType).contains(ScreenType).click()
})

Then('I verify all filters are applied in Applied filter section', () => {
    televisionPage.getAppliedFiltersText().should('have.text', 'Applied filters').should('be.visible')
    televisionPage.getAppliedFilters().contains("55-60")
    televisionPage.getAppliedFilters().contains("OLED")
    televisionPage.getAppliedFilters().contains("4K Ultra-HD")
})

When('I clear all filters', () => {
    televisionPage.getClearFilters().click()
})

Then('I verify Applied filter section disappears', () => {
    televisionPage.getAppliedFiltersText().should('not.exist')
})

