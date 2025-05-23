import { CommonPageData } from "../common-page/common-page.data";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginData } from "../login/login.data";
import { SignupMethods } from "../signup/signup.methods";
import { Logger } from "../util/logger";
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = LoginData.validCredenctials.username

describe(CommonPageData.testSuites.registro, () =>{
    /*it ("Registro de usuario válido", () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickOnSignUpOption();

        Logger.step(3)
        Logger.step('Completar todos los campos obligatorios con información válida')
        SignupMethods.insertUsername(user)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar al usuario')
        SignupMethods.clickOnSignupButton();
        Logger.verificaiton('Verificar que se muestre el mensaje "Sign up successful"')
        SignupMethods.VerifySignupSuccesfulMessageIsDisplayed();

    });

    it ("Registro de usuario inválido", () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Sign up" en la barra de navegación')
        CommonPageMethods.clickOnSignUpOption();

        Logger.step(3)
        Logger.step('Completar todos los campos obligatorios con información inválida')
        SignupMethods.insertUsername(existingUser)
        SignupMethods.insertPassword(password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Sign up" para registrar al usuario')
        SignupMethods.clickOnSignupButton();
        Logger.verificaiton('Verificar que se muestre un mensaje de error indicando los campos')
        SignupMethods.VerifyThatThisUserAlreadyExistMessageIsDisplayed();
    });*/
})