import { Given, When, Then } from "@badeball/cypress-cucumber-preprocessor"
import TelevisionPage from "../../support/pageObjects/TelevisionPage"
import Utility from "../../support/Utility"

const televisionPage = new TelevisionPage()

When('I select two different products', () => {
    televisionPage.getProductBrand().then((product) => {
        Utility.setValue('firstProduct', product.first().text())
        Utility.setValue('secondProduct', product.eq(1).text())
    })

    televisionPage.getProductModel().then((model) => {
        Utility.setValue('firstModel', model.first().text())
        Utility.setValue('secondModel', model.eq(1).text())
    })
    televisionPage.getAddToCompareButton().first().click()
    televisionPage.getAddToCompareButton().eq(1).click()

})

Then('I verify both product added to compare list', () => {
    televisionPage.getCompareProductPopUp().first().should('have.text', Utility.getValue('firstProduct'))
    televisionPage.getCompareProductPopUp().eq(1).should('have.text', Utility.getValue('secondProduct'))
    televisionPage.getCompareProductModelPopUp().first().should('have.text', Utility.getValue('firstModel'))
    televisionPage.getCompareProductModelPopUp().eq(1).should('have.text', Utility.getValue('secondModel'))
})