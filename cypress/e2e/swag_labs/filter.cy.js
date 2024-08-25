import { loginSelectors } from "../../support/selectors/loginSelectors";
import {filterSelectors} from "../../support/selectors/filterSelectors";

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
      .and('have.text', 'All Items');
  
      cy.get(filterSelectors.aboutSideBar).should("exist")
      .and("be.visible")
      .and("have.attr", "href", "https://saucelabs.com/")
      .and('have.text', 'About');
  
  
      cy.get(filterSelectors.logoutSiderBar).should("exist")
      .and("be.visible")
      .and("have.attr", "href", "#")
      .and('have.text', 'Logout');
  
      cy.get(filterSelectors.resetSideBar).should("exist")
      .and("be.visible")
      .and("have.attr", "href", "#")
      .and('have.text', 'Reset App State');
  
  
      cy.get(filterSelectors.burgerCrossBtn).should('be.enabled').click();
      cy.get(loginSelectors.backPackImg).should("be.visible");
  
      
  
      // product sort assesrtion
      cy.get(loginSelectors.productSort).should('be.visible').and('be.enabled');
      cy.get(filterSelectors.selectContainer).click();
      cy.get(filterSelectors.option).eq(0).should('have.text', 'Name (A to Z)');
      cy.get(filterSelectors.option).eq(1).should('have.text', 'Name (Z to A)');
      cy.get(filterSelectors.option).eq(2).should('have.text', 'Price (low to high)');
      cy.get(filterSelectors.option).eq(3).should('have.text', 'Price (high to low)');
  
  
      cy.get(loginSelectors.productSort).select("za");
      cy.get(loginSelectors.itemName).eq(0).should('have.text', 'Test.allTheThings() T-Shirt (Red)');
      cy.scrollTo(loginSelectors.bottom);
      cy.get(loginSelectors.backPackImg).should("be.visible");
      cy.get(loginSelectors.appLogo).scrollIntoView();
      cy.get(loginSelectors.itemName).eq(5).should('have.text', 'Sauce Labs Backpack');
  
  
      cy.get(loginSelectors.productSort).select("lohi");
      cy.get(loginSelectors.itemName).eq(0).should('have.text', 'Sauce Labs Onesie');
      cy.scrollTo(loginSelectors.bottom);
      cy.get(loginSelectors.itemName).eq(5).should('have.text', 'Sauce Labs Fleece Jacket');
      cy.get(loginSelectors.productSort).scrollIntoView();
      cy.get(loginSelectors.appLogo).should("be.visible");
  
  
      cy.get(loginSelectors.productSort).select("hilo");
      cy.get(loginSelectors.itemName).eq(0).should('have.text', 'Sauce Labs Fleece Jacket');
      cy.scrollTo(loginSelectors.bottom);
      cy.get(loginSelectors.itemName).eq(5).should('have.text', 'Sauce Labs Onesie');
      cy.get(loginSelectors.productSort).scrollIntoView();
      cy.get(loginSelectors.appLogo).should("be.visible");
  
  
      cy.get(loginSelectors.productSort).select("az");
      cy.get(loginSelectors.itemName).eq(0).should('have.text', 'Sauce Labs Backpack');
      cy.scrollTo(loginSelectors.bottom);
      cy.get(loginSelectors.itemName).eq(5).should('have.text', 'Test.allTheThings() T-Shirt (Red)');
      cy.get(loginSelectors.appLogo).scrollIntoView()
      .and("be.visible");
      
    });
  });
  