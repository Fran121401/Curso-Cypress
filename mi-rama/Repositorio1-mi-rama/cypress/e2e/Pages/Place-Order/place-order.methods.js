import { PlaceOrderElements } from "./place-order.elements";

export class PlaceOrderMathods{
    static insertName(name){
            PlaceOrderElements.textboxes.name.invoke('val', name)
    }

    static insertCountry(country){
        PlaceOrderElements.textboxes.country.invoke('val', country)
    }

    static insertCity(city){
        PlaceOrderElements.textboxes.city.invoke('val', city)
    }

    static insertCard(creditCard){
        PlaceOrderElements.textboxes.creditCard.invoke('val', creditCard)
    }

    static insertMonth(month){
        PlaceOrderElements.textboxes.month.invoke('val', month)
    }

    static insertYear(year){
        PlaceOrderElements.textboxes.year.invoke('val', year)
    }

    static clickOnCloseButton(){
        PlaceOrderElements.buttons.close.click()
    }

    static clickOnPurchaseButton(){
        PlaceOrderElements.buttons.purchase.click()
    }

    static insertOrderInformation(data){
        this.insertName(data.name)
        this.insertCountry(data.country)
        this.insertCity(data.city)
        this.insertCard(data.creditCard)
        this.insertMonth(data.month)
        this.insertYear(data.year)
    }
}