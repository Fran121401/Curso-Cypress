import { CommonPageMethods } from "../common-page/common-page.methods";
import { Logger } from "../util/logger";
import { LoginElements } from "./login.elements";

//Métodos del loginPage
export class LoginMethods{
    static insertUserename(username){
        LoginElements.textboxes.username.invoke('val',username) //Método para escribir el nombre de usuario
    }
    static insertPassword(password){
        LoginElements.textboxes.password.invoke('val', password) //Método para escribir la contraseña
    }

    static clickOnLoginButton(){
        LoginElements.buttons.login.click() //Método para hacer click
    }

    static login(username, password){
        Logger.subStep('Insert username')
        this.insertUserename(username)
        Logger.subStep('Insert password')
        this.insertPassword(password)
        Logger.subStep('Click on Login button')
        this.clickOnLoginButton()
    }

    static verifyWrongPasswordMessage(){
        CommonPageMethods.verifyAlert('Wrong password.')
    }
}