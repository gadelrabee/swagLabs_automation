// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import { loginSelectors } from "./selectors/loginSelectors";
import { text } from "./text_message";
import { loginPage } from "../pages/loginpage";
const loginObj = new loginPage();


// custom command to open the page
Cypress.Commands.add('open_page', ()=>{
    loginObj.openSwagLabs();

    cy.contains(text.swagLabs);
            
     // placeholders should be visible and clickable
    cy.get(loginSelectors.userName).should('have.attr', 'placeholder', text.userName).and('be.enabled');
    cy.get(loginSelectors.passWord).should('have.attr', 'placeholder', text.password).and('be.enabled');
    cy.get(loginSelectors.loginButton).should('have.value', text.logIn).and('be.enabled');

});


// custom command for login
Cypress.Commands.add('login', (username, password)=>{

    loginObj.enterUserName(username);
    loginObj.enterPassword(password);
    loginObj.clickLoginButton();
        
});


