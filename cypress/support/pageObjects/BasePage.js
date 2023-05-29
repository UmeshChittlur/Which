class BasePage {

    getAcceptCookies() {
        return cy.get("button[id='onetrust-accept-btn-handler']")
    }

    getWhichCloseBanner() {
        return cy.get("button[class='whi-banner-close']")
    }

}

export default BasePage