import { CommonPageData } from "../common-page/common-page.data";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { LoginData } from "../login/login.data";
import { SignupMethods } from "../signup/signup.methods";
import { Logger } from "../util/logger";
const user = CommonPageMethods.generateRandomString();
const password = CommonPageMethods.generateRandomString(7);
const existingUser = LoginData.validCredenctials.username

// Suite de pruebas para el módulo de registro de usuarios
describe(CommonPageData.testSuites.registro, () => {

    // Caso de prueba: Registro de usuario con datos válidos
    it("Registro de usuario válido", () => {
        // Paso 1: Navegar a la página principal de la aplicación
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        // Paso 2: Acceder al formulario de registro (Sign up)
        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Sign up" en la barra de navegación');
        CommonPageMethods.clickOnSignUpOption();

        // Paso 3: Ingresar un nombre de usuario y contraseña válidos
        Logger.stepNumber(3);
        Logger.step('Completar todos los campos obligatorios con información válida');
        SignupMethods.insertUsername(user);     // Se asume que 'user' es una variable previamente definida con un username único
        SignupMethods.insertPassword(password); // Se asume que 'password' también está definido y es válido

        // Paso 4: Confirmar el registro
        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Sign up" para registrar al usuario');
        SignupMethods.clickOnSignupButton();

        // Verificación: Confirmar que el mensaje de éxito sea mostrado
        Logger.verificaiton('Verificar que se muestre el mensaje "Sign up successful"'); 
        SignupMethods.VerifySignupSuccesfulMessageIsDisplayed(); 
    });

    // Caso de prueba: Registro de usuario con datos inválidos (usuario ya existente)
    it("Registro de usuario inválido", () => {
        // Paso 1: Navegar a la página principal
        Logger.stepNumber(1);
        Logger.step('Navegar a la página de inicio');
        CommonPageMethods.navigateToDemoBlaze();

        // Paso 2: Acceder al formulario de registro
        Logger.stepNumber(2);
        Logger.step('Hacer clic en "Sign up" en la barra de navegación');
        CommonPageMethods.clickOnSignUpOption();

        // Paso 3: Ingresar un nombre de usuario que ya existe
        Logger.stepNumber(3);  
        Logger.step('Completar todos los campos obligatorios con información inválida');
        SignupMethods.insertUsername(existingUser);  // Se asume que 'existingUser' ya fue registrado previamente
        SignupMethods.insertPassword(password);      // Contraseña puede ser válida, pero el usuario ya está en uso

        // Paso 4: Intentar registrar el usuario.
        Logger.stepNumber(4);
        Logger.step('Hacer clic en "Sign up" para registrar al usuario');
        SignupMethods.clickOnSignupButton();

        // Verificación: Confirmar que se muestra un mensaje de error indicando que el usuario ya existe
        Logger.verificaiton('Verificar que se muestre un mensaje de error indicando los campos');
        SignupMethods.VerifyThatThisUserAlreadyExistMessageIsDisplayed();  
    });
});