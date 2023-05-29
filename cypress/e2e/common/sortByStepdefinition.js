import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import TelevisionPage from "../../support/pageObjects/TelevisionPage"
import Utility from "../../support/Utility"

const televisionPage = new TelevisionPage()

When('I click on Sort by dropdown {string}', (label) => {
    cy.sortByDropdown(label)
    cy.wait(2000)
})

Then('I verify results displayed are high to low', () => {
    cy.get("span[class='ProductCardPrice__price--FO1oM']").then(($price) => {
        const highPrice = $price.first().text()
        const lowPrice = $price.last().text()
        var firstPrice = highPrice.substring(1)
        var lowestPrice = lowPrice.substring(1)
        expect(parseInt(firstPrice.replaceAll(',', ''))).to.be.greaterThan(parseInt(lowestPrice.replaceAll(',', '')))
    })
})
