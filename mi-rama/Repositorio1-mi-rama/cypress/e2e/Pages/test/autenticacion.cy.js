import { CommonPageData } from "../common-page/common-page.data";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginData } from "../login/login.data";
import { LoginMethods } from "../login/login.methods";
import { Logger } from "../util/logger";

describe(CommonPageData.testSuites.autenticacion, () =>{
    it('Inicio de sesión válido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMethods.clickOnLogInOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña válidos')
        LoginMethods.insertUserename(LoginData.validCredenctials.username)
        LoginMethods.insertPassword(LoginData.validCredenctials.password)

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión')
        LoginMethods.clickOnLoginButton();
        Logger.verificaiton('Verificar que se redirige al usuario de la página de inicio')
        CommonPageMethods.verifySignedUser(LoginData.validCredenctials.username)
    });

    it('Inicio de sesión inválido', () => {
        Logger.stepNumber(1)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.navigateToDemoBlaze();

        Logger.stepNumber(2)
        Logger.step('Hacer clic en "Log in" en la barra de navegación')
        CommonPageMethods.clickOnLogInOption();

        Logger.stepNumber(3)
        Logger.step('Ingresar un nombre de usuario y contraseña inválidos')
        LoginMethods.insertUserename(LoginData.validCredenctials.username)
        LoginMethods.insertPassword('contrasenainvalida')

        Logger.stepNumber(4)
        Logger.step('Hacer clic en "Log in" para iniciar sesión')
        LoginMethods.clickOnLoginButton();
        Logger.verificaiton('Verificar que se muestre un mensaje de error indicando que el inicio de sesión falló')
        LoginMethods.verifyWrongPasswordMessage();
    });
});