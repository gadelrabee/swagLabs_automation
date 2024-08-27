import { loginSelectors } from "../support/selectors/loginSelectors";

export class loginPage{

    openSwagLabs() {
        cy.visit("https://www.saucedemo.com/");
    };

    enterUserName(UName) {
        cy.get(loginSelectors.userName).clear().type(UName);
    };

    enterPassword(Password) {
        cy.get(loginSelectors.passWord).clear().type(Password);
    };

    clickLoginButton(Login) {
        cy.get(loginSelectors.loginButton).click();
    }


}