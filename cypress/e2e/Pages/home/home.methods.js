import { HomeElements } from "./home.elements";

export class HomeMethods{
    
    static clickOnPhonesOption(){
        HomeElements.categoriesMenu.phones.click();
    }

    static clickOnLaptopssOption(){
        HomeElements.categoriesMenu.laptops.click();
    }

    static clickOnMonitorsOption(){
        HomeElements.categoriesMenu.monitors.click();
    }

    static clickOnProductLink(productName){
        HomeElements.product(productName).click();
    }

    static verifyProductDisplayed(productName){
        HomeElements.product(productName).should('be.visible')
    }

    static verifyHomePageisShown(){
       cy.url().should('include', 'index.html')
    }
}