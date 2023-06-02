class TelevisionPage {

    getTelevesionReviewsText() {
        return cy.get("h1[data-testid='typography-title-650']")
    }

    getProductFilterText() {
        return cy.get("section[data-testid='product-filters']").find("h3 span")
    }

    getProductListHeader() {
        return cy.get("section[data-testid='product-list-header'] p")
    }

    getScreenSize(ScreenSize) {
        return cy.get("label[aria-label*='" + ScreenSize + "']")
    }

    getBrands(Brands) {
        return cy.get("input[value='" + Brands + "'")
    }

    getScreenType(ScreenType) {
        return cy.get("label[aria-label*='" + ScreenType + "']")
    }

    getResolution(Resolution) {
        return cy.get("input[value='" + Resolution + "']")
    }

    getAppliedFiltersText() {
        return cy.get("h3[class*='AppliedFilters']")
    }

    getAppliedFilters() {
        return cy.get("section[data-testid='reviews-applied-filters']").find("span[class='TagClickable__text--3LKTT']")
    }

    getClearFilters() {
        return cy.get("button[data-testid='clear-filters']")
    }

    getAllResultsList() {
        return cy.get('[data-testid="reviews-products"] [class="Products_productItem__4osTI"]')
    }

    getProsInformation() {
        return cy.get("ul[class='Products_productsList__STpjV'] li:nth-child(1) div[class*='prosCons--2ZPv7'] div img")
    }

    getAddToCompareButton() {
        return cy.get("button[data-testid='sb-add-to-compare']")
    }

    getProductBrand() {
        return cy.get("h3 span[class*='sbui-9epp9g']")
    }

    getProductModel() {
        return cy.get("ul p[data-testid='typography-body']")
    }

    getCompareProductPopUp() {
        return cy.get("section[class*='sbui-1uttz6j'] p[data-testid='typography-body-intro']")
    }

    getCompareProductModelPopUp() {
        return cy.get("section[class*='sbui-1uttz6j'] p[data-testid*='compact']")
    }

    getMinPriceDropdown() {
        return cy.get("select[name='Price-Min']")
    }

    getMaxPriceDropdown() {
        return cy.get("select[name='Price-Max']")
    }



}

export default TelevisionPage