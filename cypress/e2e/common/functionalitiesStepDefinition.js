import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import TelevisionPage from "../../support/pageObjects/TelevisionPage"

const televisionPage = new TelevisionPage()

When('I select Minimum {string} and Maximum {string} price from Price filter section', (minPrice, maxPrice) => {
    televisionPage.getMinPriceDropdown().select(minPrice).should('contain', minPrice)
    televisionPage.getMaxPriceDropdown().select(maxPrice).should('contain', maxPrice)
    cy.waitForGetApi('view?xai=*', 'productLoad')
})

When('I verify in Applied filter section for Minimum {string} and Maximum {string} price', (minPrice, maxPrice) => {
    televisionPage.getAppliedFiltersText().should('have.text', 'Applied filters').should('be.visible')
    televisionPage.getAppliedFilters().first().should('have.text', "Price min: " + minPrice)
    televisionPage.getAppliedFilters().should('contain', "Price max: " + maxPrice)
})

Then('I verify all the results displayed between Minimum {string} and Maximum {string} price', (minPrice, maxPrice) => {
    cy.get('[data-testid="reviews-products"] [class="Products_productItem__4osTI"]').each(($el, index, $list) => {
        const actualText = $el.find("span[class='ProductCardPrice__price--FO1oM']").text()
        var lowPrice = actualText.substring(1)
        expect(parseInt(lowPrice)).not.to.be.lessThan(parseInt(minPrice))
        expect(parseInt(lowPrice)).not.to.be.greaterThan(parseInt(maxPrice))

    })

    cy.get('[data-testid="reviews-products"] [class="Products_productItem__4osTI"]').each(($el, index, $list) => {
        const actualText = $el.find("span[class='ProductCardPrice__price--FO1oM']").text()
        var highPrice = actualText.substring(1)
        expect(parseInt(highPrice)).not.to.be.greaterThan(parseInt(maxPrice))
        expect(parseInt(highPrice)).not.to.be.lessThan(parseInt(minPrice))
    })
})

When('I select {string} Brand from the Brand filter page', (Brands) => {
    televisionPage.getBrands(Brands).click({ force: true })
})

Then('I verify filters are applied for Minimum {string} and Maximum {string} price and Brand {string} selected', (minPrice, maxPrice, Brands) => {
    televisionPage.getAppliedFiltersText().should('have.text', 'Applied filters').should('be.visible')
    televisionPage.getAppliedFilters().first().should('have.text', "Price min: " + minPrice)
    televisionPage.getAppliedFilters().should('contain', "Price max: " + maxPrice)
    televisionPage.getAppliedFilters().eq(2).should('have.text', Brands)
})
