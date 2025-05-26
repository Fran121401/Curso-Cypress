import { CartMethods } from "../cart/cart.methods";
import { CommonPageData } from "../common-page/common-page.data";
import { CommonPageMethods } from "../common-page/common-page.methods";
import { HomeMethods } from "../home/home.methods";
import { LoginData } from "../login/login.data";
import { LoginMethods } from "../login/login.methods";
import { PlaceOrderData } from "../Place-Order/place-order.data";
import { PlaceOrderMathods } from "../Place-Order/place-order.methods";
import { ProductDetailsMethods } from "../product-details/product-details.methods";
import { ThankYouForYourPurchaseMethods } from "../thank-you-for-your-purchase/thank-you-for-your-purchase.methods";
import { Logger } from "../util/logger";

const user = LoginData.validCredenctials.username;
const password = LoginData.validCredenctials.password;
const product = 'ASUS Full HD'

// Suite de pruebas para funcionalidades del catálogo y proceso de compra
describe(CommonPageData.testSuites.catalogoYCompra, () => {

    // Caso de prueba: Navegación por categorías y agregar producto al carrito
    it('Navegación por categorías', () => {
        
        // Paso 1: Iniciar sesión como usuario registrado.
        Logger.stepNumber(1);
        Logger.step('Iniciar sesión como un usuario registrado');
        Logger.subStep('Navigate to Demoblaze application');
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link');
        CommonPageMethods.clickOnLogInOption();
        LoginMethods.login(user, password);  // Se espera que 'user' esté definido con username y password válidos
        LoginMethods.clickOnLoginButton();

        // Paso 2: Ir a la página de inicio
        Logger.stepNumber(2);
        Logger.step('Navegar a la página de inicio');
        CommonPageMethods.clickOnHomeOption();

        // Paso 3: Seleccionar una categoría y verificar los productos mostrados
        Logger.stepNumber(3);
        Logger.step('Seleccionar una categoría de productos en el menú de navegación');
        HomeMethods.clickOnMonitorsOption();
        Logger.verificaiton('Verificar que se muestre la lista de productos correspondiente a la categoría seleccionada');
        HomeMethods.verifyProductDisplayed('Apple monitor 24');
        HomeMethods.verifyProductDisplayed('ASUS Full HD');

        // Paso 4: Hacer clic en un producto específico
        Logger.stepNumber(4);
        Logger.step('Hacer clic en un producto específico');
        HomeMethods.clickOnProductLink(product); 

        // Paso 5: Verificar detalles del producto
        Logger.stepNumber(5);
        Logger.verificaiton('Verificar que se muestre la página de detalles del producto');
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        // Paso 6: Agregar el producto al carrito
        Logger.stepNumber(6);
        Logger.step('Hacer clic en el botón "Add to cart"');
        ProductDetailsMethods.clickOnAddToCartButton();

        // Paso 7: Verificar mensaje de confirmación y que el producto esté en el carrito
        Logger.stepNumber(7);
        Logger.step('Verificar que se muestre un mensaje de confirmación y el producto se agrega al carrito');
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);
    });

    // Caso de prueba: Flujo completo de compra de un producto
    it('Realizar una compra', () => {

        // Paso 1: Iniciar sesión como usuario registrado
        Logger.stepNumber(1);
        Logger.step('Iniciar sesión como un usuario registrado');
        Logger.subStep('Navigate to Demoblaze application');
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link');
        CommonPageMethods.clickOnLogInOption();
        LoginMethods.login(user, password);
        LoginMethods.clickOnLoginButton();

        // Paso 2: Ir a la página de inicio
        Logger.stepNumber(2);
        Logger.step('Navegar a la página de inicio');
        CommonPageMethods.clickOnHomeOption();

        // Paso 3: Seleccionar una categoría y verificar productos
        Logger.stepNumber(3);
        Logger.step('Seleccionar una categoría de productos en el menú de navegación');
        HomeMethods.clickOnMonitorsOption();
        Logger.verificaiton('Verificar que se muestre la lista de productos correspondiente a la categoría seleccionada');
        HomeMethods.verifyProductDisplayed('Apple monitor 24');
        HomeMethods.verifyProductDisplayed('ASUS Full HD');

        // Paso 4: Seleccionar un producto
        Logger.stepNumber(4);
        Logger.step('Hacer clic en un producto específico');
        HomeMethods.clickOnProductLink(product);

        // Paso 5: Verificar la página de detalles del producto
        Logger.stepNumber(5);
        Logger.verificaiton('Verificar que se muestre la página de detalles del producto');
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        // Paso 6: Agregar producto al carrito
        Logger.stepNumber(6);
        Logger.step('Hacer clic en el botón "Add to cart"');
        ProductDetailsMethods.clickOnAddToCartButton();

        // Paso 7: Verificar producto en el carrito
        Logger.stepNumber(7);
        Logger.step('Verificar que se muestre un mensaje de confirmación y el producto se agrega al carrito');
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product);

        // Paso 8: Ir al carrito de compras
        Logger.stepNumber(8);
        Logger.step('Hacer clic en la opción "Cart" de la barra de navegación.');
        CommonPageMethods.clickOnCartOption();

        // Paso 9: Verificar que se muestre la página del carrito
        Logger.stepNumber(9);
        Logger.step('Verificar que se muestre la página de carrito de compras');
        CartMethods.verifyCartPageisShown();

        // Paso 10: Hacer clic en "Place Order"
        Logger.stepNumber(10);
        Logger.step('Hacer clic en el botón "Place Order"');
        CartMethods.clicOnPlaceOrderButton(); 

        // Paso 11: Completar los datos del pedido
        Logger.stepNumber(11);
        Logger.step('Completar los campos obligatorios en la página de información de envío');
        PlaceOrderMathods.insertOrderInformation(PlaceOrderData.testDate); 

        // Paso 12: Finalizar la compra
        Logger.stepNumber(12);
        Logger.step('Hacer clic en el botón "Purchase"');
        PlaceOrderMathods.clickOnPurchaseButton();

        // Paso 13: Confirmación final y redirección
        Logger.stepNumber(13);
        Logger.step('Verificar que se muestre un mensaje de confirmación y redirige al usuario a la página de inicio');
        ThankYouForYourPurchaseMethods.verifyGreenCheckMarkIsDisplayed();
        ThankYouForYourPurchaseMethods.clickOkButton();
        HomeMethods.verifyHomePageisShown();

        // Postcondición: Cerrar sesión
        Logger.postCondition('Log out');
        CommonPageMethods.logout();
    });
});