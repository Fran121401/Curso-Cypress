export class CartElements{
    static get buttons(){
        return{
            get placeHolder(){
                return cy.get('button[data-toggle="modal"]')
            }
        }
    }
// //td[text()="Nexus 6"]/ancestor::tr//a
    static get links() {
        return{
             delete(productName){
                return cy.contains('td', productName).closest('tr').find('a');
             },
        };
    }
}