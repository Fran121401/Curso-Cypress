import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginMethods } from "../login/login.methods";
import { Logger } from "../util/logger";
import { CartElements } from "./cart.elements";

export class CartMethods{
    static clickOnDeleteLink(productName){
        CartElements.links.delete(productName).click();
    }

    static verifyProductAdded(productName){
        CartElements.links.delete(productName).should('be.visible')
    }

    static verifyCartPageisShown(){
       cy.url().should('include', 'cart.html')
    }

    static clicOnPlaceOrderButton(){
        CartElements.buttons.placeHolder.click();
    }

    static deleteProducts(){
        cy.get('a[onclick*="deleteItem"]').each(link=>{
            cy.intercept('POST', 'https://api.demoblaze.com/deleteitem').as('deleteItem')
            link.click()
            cy.wait('@deleteItem')
        })
    }

    static emptyCart(username, password){
        Logger.subStep('Navigate to Demoblaze website')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.subStep('logout')
        CommonPageMethods.logout();

        Logger.subStep('Click on Home Option')
        CommonPageMethods.clickOnHomeOption();

        Logger.subStep('Click on Login Option')
        CommonPageMethods.clickOnLogInOption();

        Logger.subStep(`Login with credentials ${username} and ${password}`)
        LoginMethods.login(username, password)

        Logger.subStep('Click on Cart Option')
        CommonPageMethods.clickOnCartOption();

        Logger.subStep('Deleting Products from cart')
        this.deleteProducts();

  }

  static verifyProductAdded(productName){
    CartElements.links.delete(productName).should('be.visible')
  }
}