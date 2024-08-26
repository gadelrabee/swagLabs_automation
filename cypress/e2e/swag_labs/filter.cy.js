import { loginSelectors } from "../../support/selectors/loginSelectors";
import {filterSelectors} from "../../support/selectors/filterSelectors";
import {text} from "../../support/text_message";

describe("filter products", () => {
    it("should list the products in the page according to the filter applied", () => {
      cy.visit("https://www.saucedemo.com/");
  
      cy.get(loginSelectors.userName).clear()
      .type("standard_user");
  
      cy.get(loginSelectors.passWord).clear()
      .type("secret_sauce");
      
      cy.get(loginSelectors.loginButton).click();
  
      // Swag Lab page assertion
  
      // burger menu button assertion
      cy.get(loginSelectors.burgerMenu).should('be.visible')
      .and('be.enabled')
      .click();
  
      cy.get(filterSelectors.inventorySiderBar).should("exist")
      .and("be.visible")
      .and("have.attr", "href", "#")
      .and('have.text', text.allItems);
  
      cy.get(filterSelectors.aboutSideBar).should("exist")
      .and("be.visible")
      .and("have.attr", "href", "https://saucelabs.com/")
      .and('have.text', text.about);
  
  
      cy.get(filterSelectors.logoutSiderBar).should("exist")
      .and("be.visible")
      .and("have.attr", "href", "#")
      .and('have.text', text.logout);
  
      cy.get(filterSelectors.resetSideBar).should("exist")
      .and("be.visible")
      .and("have.attr", "href", "#")
      .and('have.text', text.resetAppState);
  
  
      cy.get(filterSelectors.burgerCrossBtn).should('be.enabled').click();
      cy.get(loginSelectors.backPackImg).should("be.visible");
  
      
  
      // product sort assesrtion
      cy.get(loginSelectors.productSort).should('be.visible').and('be.enabled');
      cy.get(filterSelectors.selectContainer).click();
      cy.get(filterSelectors.option).eq(0).should('have.text', text.aToz);
      cy.get(filterSelectors.option).eq(1).should('have.text', text.zToa);
      cy.get(filterSelectors.option).eq(2).should('have.text', text.lowToHigh);
      cy.get(filterSelectors.option).eq(3).should('have.text', text.highToLow);
  
  
      cy.get(loginSelectors.productSort).select(filterSelectors.za);
      cy.get(loginSelectors.itemName).eq(0).should('have.text', text.redTshirt);
      cy.scrollTo(loginSelectors.bottom);
      cy.get(loginSelectors.backPackImg).should("be.visible");
      cy.get(loginSelectors.appLogo).scrollIntoView();
      cy.get(loginSelectors.itemName).eq(5).should('have.text', text.sauceLabsBackpack);
  
  
      cy.get(loginSelectors.productSort).select(filterSelectors.lohi);
      cy.get(loginSelectors.itemName).eq(0).should('have.text', text.sauceLabsOnesie);
      cy.scrollTo(loginSelectors.bottom);
      cy.get(loginSelectors.itemName).eq(5).should('have.text', text.fleeceJacket);
      cy.get(loginSelectors.productSort).scrollIntoView();
      cy.get(loginSelectors.appLogo).should("be.visible");
  
  
      cy.get(loginSelectors.productSort).select(filterSelectors.hilo);
      cy.get(loginSelectors.itemName).eq(0).should('have.text', text.fleeceJacket);
      cy.scrollTo(loginSelectors.bottom);
      cy.get(loginSelectors.itemName).eq(5).should('have.text', text.sauceLabsOnesie);
      cy.get(loginSelectors.productSort).scrollIntoView();
      cy.get(loginSelectors.appLogo).should("be.visible");
  
  
      cy.get(loginSelectors.productSort).select(filterSelectors.az);
      cy.get(loginSelectors.itemName).eq(0).should('have.text', text.sauceLabsBackpack);
      cy.scrollTo(loginSelectors.bottom);
      cy.get(loginSelectors.itemName).eq(5).should('have.text', text.redTshirt);
      cy.get(loginSelectors.appLogo).scrollIntoView()
      .and("be.visible");
      
    });
  });
  