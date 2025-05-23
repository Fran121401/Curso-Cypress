export class ThankYouForYourPurchaseElements {
  static get buttons() {
    return {
      get okButton() {
        return cy.contains("button", "OK");
      },
    };
  }

  //Iconos de la página
  static get icons() {
    return {
      get greenCheckMark() {
        return cy.get(".sa-success"); //Icono de check verde
      },
    };
  }
}