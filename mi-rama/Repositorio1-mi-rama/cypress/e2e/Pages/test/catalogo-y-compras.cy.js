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

const user = LoginData.validCredenctials;
const product = 'ASUS Full HD'

describe(CommonPageData.testSuites.catalogoYCompra, () =>{
    it('Navegación por categorías', () =>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como un usuario registrado')
        Logger.subStep('Navigate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLogInOption();
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.clickOnMonitorsOption();
        Logger.verificaiton('Verificar que se muestrea la lista de productos correspondiente a la categoría seleccionada')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')

        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico')
        HomeMethods.clickOnProductLink(product)
        
        Logger.stepNumber(5)
        Logger.verificaiton('Verificar que se muestre la página de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.step(6)
        Logger.step('Hacer clic en el botón "Add to cart"')
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.step(7)
        Logger.step('Verificar que se muestre un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)
    })

    it('Realizar una compra', () =>{

        Logger.stepNumber(1)
        Logger.step('Iniciar sesión como un usuario registrado')
        Logger.subStep('Navigate to Demoblaze application')
        CommonPageMethods.navigateToDemoBlaze();
        Logger.subStep('Click on "Log in" link')
        CommonPageMethods.clickOnLogInOption();
        LoginMethods.login(user.username, user.password)

        Logger.stepNumber(2)
        Logger.step('Navegar a la página de inicio')
        CommonPageMethods.clickOnHomeOption();

        Logger.stepNumber(3)
        Logger.step('Seleccionar una categoría de productos en el menú de navegación')
        HomeMethods.clickOnMonitorsOption();
        Logger.verificaiton('Verificar que se muestrea la lista de productos correspondiente a la categoría seleccionada')
        HomeMethods.verifyProductDisplayed('Apple monitor 24')
        HomeMethods.verifyProductDisplayed('ASUS Full HD')

        Logger.stepNumber(4)
        Logger.step('Hacer clic en un producto específico')
        HomeMethods.clickOnProductLink(product)
        
        Logger.stepNumber(5)
        Logger.verificaiton('Verificar que se muestre la página de detalles del producto')
        ProductDetailsMethods.verifyProductDetailsPageDisplayed();

        Logger.step(6)
        Logger.step('Hacer clic en el botón "Add to cart"')
        ProductDetailsMethods.clickOnAddToCartButton();

        Logger.step(7)
        Logger.step('Verificar que se muestre un mensaje de confirmación y el producto se agrega al carrito')
        ProductDetailsMethods.verifyProductAddedMessage();
        CommonPageMethods.clickOnCartOption();
        CartMethods.verifyProductAdded(product)

        Logger.step(8)
        Logger.step('Hacer clic en la opción "Cart" de la barra de navegación.')
        CommonPageMethods.clickOnCartOption();

        Logger.step(9)
        Logger.step('Verificar que se muestre la página de carrito de compras')
        CartMethods.verifyCartPageisShown();

        Logger.step(10)
        Logger.step('Hacer clic en el botón "Place Order"')
        CartMethods.clicOnPlaceOrderButton();

        Logger.step(11)
        Logger.step('Completar los campos obligatorios en la página de información de envío')
        PlaceOrderMathods.insertOrderInformation(PlaceOrderData.testDate)

        Logger.step(12)
        Logger.step('Hacer clic en el botón "Purchase"')
        PlaceOrderMathods.clickOnPurchaseButton();

        Logger.step(13)
        Logger.step('Verificar que se muestre un mensaje de confirmación y redirige al usuario a la página de inicio')
        ThankYouForYourPurchaseMethods.verifyGreenCheckMarkIsDisplayed();
        ThankYouForYourPurchaseMethods.clickOkButton();
        HomeMethods.verifyHomePageisShown();

        Logger.postCondition('Log out')
        CommonPageMethods.logout();
    })
})