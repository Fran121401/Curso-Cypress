import { CommonPageData } from "../common-page/common-page.data";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginData } from "../login/login.data";
import { LoginMethods } from "../login/login.methods";
import { Logger } from "../util/logger";

// Suite de pruebas para el módulo de autenticación
describe(CommonPageData.testSuites.autenticacion, () => {

    // Caso de prueba: Inicio de sesión válido.
    it('Inicio de sesión válido', () => {
        // Paso 1: Navegar a la página de inicio
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        // Paso 2: Abrir el formulario de inicio de sesión
        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Log in" en la barra de navegación');
        CommonPageMethods.clickOnLogInOption();

        // Paso 3: Ingresar credenciales válidas
        Logger.stepNumber(3);
        Logger.step('Ingresar un nombre de usuario y contraseña válidos');
        LoginMethods.insertUserename(LoginData.validCredenctials.username);  
        LoginMethods.insertPassword(LoginData.validCredenctials.password);   

        // Paso 4: Enviar el formulario
        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Log in" para iniciar sesión');
        LoginMethods.clickOnLoginButton();

        // Verificación: Confirmar que el usuario ha iniciado sesión correctamente
        Logger.verificaiton('Verificar que se redirige al usuario de la página de inicio');
        CommonPageMethods.verifySignedUser(LoginData.validCredenctials.username);
    });

    // Caso de prueba: Inicio de sesión inválido
    it('Inicio de sesión inválido', () => {
        // Paso 1: Navegar a la página de inicio
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        // Paso 2: Abrir el formulario de inicio de sesión
        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Log in" en la barra de navegación');
        CommonPageMethods.clickOnLogInOption();

        // Paso 3: Ingresar credenciales inválidas
        Logger.stepNumber(3);
        Logger.step('Ingresar un nombre de usuario y contraseña inválidos');
        LoginMethods.insertUserename(LoginData.validCredenctials.username);  
        LoginMethods.insertPassword('contrasenainvalida');

        // Paso 4: Enviar el formulario
        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Log in" para iniciar sesión');
        LoginMethods.clickOnLoginButton();

        // Verificación: Confirmar que se muestra un mensaje de error
        Logger.verificaiton('Verificar que se muestre un mensaje de error indicando que el inicio de sesión falló'); 
        LoginMethods.verifyWrongPasswordMessage();
    });
});