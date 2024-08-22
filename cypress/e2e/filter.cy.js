describe("filter products", () => {
    it("should list the products in the page according to the filter applied", () => {
      cy.visit("https://www.saucedemo.com/");
  
      cy.get("#user-name").clear()
      .type("standard_user");
  
      cy.get("#password").clear()
      .type("secret_sauce");
      
      cy.get("#login-button").click();
  
      // Swag Lab page assertion
  
      // burger menu button assertion
      cy.get("#react-burger-menu-btn").should('be.visible')
      .and('be.enabled')
      .click();
  
      cy.get('#inventory_sidebar_link').should("exist")
      .and("be.visible")
      .and("have.attr", "href", "#")
      .and('have.text', 'All Items');
  
      cy.get('#about_sidebar_link').should("exist")
      .and("be.visible")
      .and("have.attr", "href", "https://saucelabs.com/")
      .and('have.text', 'About');
  
  
      cy.get('#logout_sidebar_link').should("exist")
      .and("be.visible")
      .and("have.attr", "href", "#")
      .and('have.text', 'Logout');
  
      cy.get('#reset_sidebar_link').should("exist")
      .and("be.visible")
      .and("have.attr", "href", "#")
      .and('have.text', 'Reset App State');
  
  
      cy.get("#react-burger-cross-btn").should('be.enabled').click();
      cy.get("#item_4_img_link").should("be.visible");
  
      
  
      // product sort assesrtion
      cy.get('select[data-test="product-sort-container"]').should('be.visible').and('be.enabled');
      cy.get('.select_container').click();
      cy.get('option').eq(0).should('have.text', 'Name (A to Z)');
      cy.get('option').eq(1).should('have.text', 'Name (Z to A)');
      cy.get('option').eq(2).should('have.text', 'Price (low to high)');
      cy.get('option').eq(3).should('have.text', 'Price (high to low)');
  
  
      cy.get(".product_sort_container").select("za");
      cy.get('div[data-test="inventory-item-name"]').eq(0).should('have.text', 'Test.allTheThings() T-Shirt (Red)');
      cy.scrollTo("bottom");
      cy.get("#item_4_img_link").should("be.visible");
      cy.get(".app_logo").scrollIntoView();
      cy.get('div[data-test="inventory-item-name"]').eq(5).should('have.text', 'Sauce Labs Backpack');
  
  
      cy.get(".product_sort_container").select("lohi");
      cy.get('div[data-test="inventory-item-name"]').eq(0).should('have.text', 'Sauce Labs Onesie');
      cy.scrollTo("bottom");
      cy.get('div[data-test="inventory-item-name"]').eq(5).should('have.text', 'Sauce Labs Fleece Jacket');
      cy.get(".product_sort_container").scrollIntoView();
      cy.get(".app_logo").should("be.visible");
  
  
      cy.get(".product_sort_container").select("hilo");
      cy.get('div[data-test="inventory-item-name"]').eq(0).should('have.text', 'Sauce Labs Fleece Jacket');
      cy.scrollTo("bottom");
      cy.get('div[data-test="inventory-item-name"]').eq(5).should('have.text', 'Sauce Labs Onesie');
      cy.get(".product_sort_container").scrollIntoView();
      cy.get(".app_logo").should("be.visible");
  
  
      cy.get(".product_sort_container").select("az");
      cy.get('div[data-test="inventory-item-name"]').eq(0).should('have.text', 'Sauce Labs Backpack');
      cy.scrollTo("bottom");
      cy.get('div[data-test="inventory-item-name"]').eq(5).should('have.text', 'Test.allTheThings() T-Shirt (Red)');
      cy.get(".app_logo").scrollIntoView();
      cy.get(".app_logo").should("be.visible");
      
    });
  });
  