export class Logger {
    static stepNumber(number){
        const text = `Step # ${number}`
        cy.log(text)
        cy.allure().step(text)
    }

    static step(description){
        const text = `Step # ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

     static verificaiton(description){
        const text = `Step # ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subStep(description){
        const text = `Step # ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static subVerificaiton(description){
        const text = `Step # ${description}`
        cy.log(text)
        cy.allure().step(text)
    }

    static postCondition(description){
        const texto = `PostCondition: ${description}`;
        cy.log(texto)
        cy.allure().step(texto)
    }
}