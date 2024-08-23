describe("add product to cart", ()=>{
    it('add products to the cart, remove and checkout', ()=>{

        // login to the page
        cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').clear()
        .type("standard_user");

        cy.get('#password').clear()
        .type('secret_sauce');

        cy.get('#login-button').click();

        cy.url().should('include', '/inventory.html');


        // add first product to the cart
        cy.get('#item_4_title_link').should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=4');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('div[data-test="secondary-header"]').should('have.text', 'Back to products');
        cy.get('img[data-test="item-sauce-labs-backpack-img"]').should('be.visible');
        cy.get('div[data-test="inventory-item-name"]').should('have.text','Sauce Labs Backpack');
        cy.get('div[data-test="inventory-item-desc"]').should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get('.inventory_details_price').should('have.text', '$29.99');

        cy.get('#add-to-cart').should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled')
        .click();

        cy.get('#remove').should('be.visible')
        .and('have.text', 'Remove')
        .and('be.enabled');

        cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '1');

        cy.go('back');


        // add second product to the cart
        cy.get('#item_1_title_link').should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=1');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('div[data-test="secondary-header"]').should('have.text', 'Back to products');
        cy.get('img[data-test="item-sauce-labs-bolt-t-shirt-img"]').should('be.visible');
        cy.get('div[data-test="inventory-item-name"]').should('have.text','Sauce Labs Bolt T-Shirt');
        cy.get('div[data-test="inventory-item-desc"]').should('have.text', 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
        cy.get('.inventory_details_price').should('have.text', '$15.99');

        cy.get('#add-to-cart').should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled')
        .click();

        cy.get('#remove').should('be.visible')
        .and('have.text', 'Remove')
        .and('be.enabled');

        cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '2');

        cy.go('back');


        //scroll page to bottom
        cy.scrollTo('bottom');
        cy.get('footer').should('be.visible');


        // add third product to the cart
        cy.get('#item_2_title_link').should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=2');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('div[data-test="secondary-header"]').should('have.text', 'Back to products');
        cy.get('img[data-test="item-sauce-labs-onesie-img"]').should('be.visible');
        cy.get('div[data-test="inventory-item-name"]').should('have.text','Sauce Labs Onesie');
        cy.get('div[data-test="inventory-item-desc"]').should('have.text', "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        cy.get('.inventory_details_price').should('have.text', '$7.99');

        cy.get('#add-to-cart').should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled')
        .click();

        cy.get('#remove').should('be.visible')
        .and('have.text', 'Remove')
        .and('be.enabled');

        cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '3');

        cy.go('back');

        // add fourth product to the cart
        cy.get('#item_5_title_link').should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=5');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('div[data-test="secondary-header"]').should('have.text', 'Back to products');
        cy.get('img[data-test="item-sauce-labs-fleece-jacket-img"]').should('be.visible');
        cy.get('div[data-test="inventory-item-name"]').should('have.text','Sauce Labs Fleece Jacket');
        cy.get('div[data-test="inventory-item-desc"]').should('have.text', "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
        cy.get('.inventory_details_price').should('have.text', '$49.99');

        cy.get('#add-to-cart').should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled')
        .click();

        cy.get('#remove').should('be.visible')
        .and('have.text', 'Remove')
        .and('be.enabled');

        cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '4');

        cy.go('back');


        //remove two product form the cart
        cy.get('a[data-test="shopping-cart-link"]').click();
        cy.url().should('include', '/cart.html');
        cy.get('.app_logo').should('contain', 'Swag Labs');
        cy.get('span[data-test="title"]').should('contain', 'Your Cart');
        cy.get('div[data-test="cart-quantity-label"]').should('contain', 'QTY');
        cy.get('div[data-test="cart-desc-label"]').should('contain', 'Description');

        cy.get('div[data-test="cart-list"]').should('contain', 'Sauce Labs Backpack');
        cy.get('div[data-test="cart-list"]').should('contain', 'Sauce Labs Bolt T-Shirt');
        cy.get('div[data-test="cart-list"]').should('contain', 'Sauce Labs Onesie');
        cy.get('div[data-test="cart-list"]').should('contain', 'Sauce Labs Fleece Jacket');

        cy.get('.item_pricebar').should('contain', '$29.99');
        cy.get('.item_pricebar').should('contain', '$15.99');
        cy.get('.item_pricebar').should('contain', '$7.99');
        cy.get('.item_pricebar').should('contain', '$49.99');



        cy.get('button').should('be.visible')
        .and('contain', 'Remove')
        .and('be.enabled');


        //scroll page to bottom
        cy.scrollTo('bottom');
        cy.get('footer').should('be.visible');


        cy.get('button').should('be.visible')
        .and('contain', 'Continue Shopping')
        .and('be.enabled');

        cy.get('button').should('be.visible')
        .and('contain', 'Checkout')
        .and('be.enabled');


        cy.get('.app_logo').scrollIntoView();

        //remove product one from the cart
        cy.get('#remove-sauce-labs-bolt-t-shirt').click();
        cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '3');
        cy.get('div[data-test="cart-list"]').should('not.contain', 'Sauce Labs Bolt T-Shirt');
        cy.get('.item_pricebar').should('not.contain', '$15.99');


        //remove product two from the cart
        cy.get('#remove-sauce-labs-onesie').click();
        cy.get('span[data-test="shopping-cart-badge"]').should('have.text', '2');
        cy.get('div[data-test="cart-list"]').should('not.contain', 'Sauce Labs Onesie');
        cy.get('.item_pricebar').should('not.contain', '$7.99');

        cy.get('#continue-shopping').click();
        cy.url().should('include', '/inventory.html');
        cy.get('span[data-test="title"]').should('have.text', 'Products');
        cy.get('.product_sort_container').should('be.visible');

        
        cy.get('#shopping_cart_container').click();
        cy.get('#checkout').click(); 


        //checkout step one
        cy.url().should('include', '/checkout-step-one.html');

        cy.get('.app_logo').should('have.text', 'Swag Labs')
        .and('be.visible');

        cy.get('span[data-test="title"]').should('have.text', 'Checkout: Your Information')
        .and('be.visible');

        cy.get('#first-name').should('have.attr', 'placeholder', 'First Name')
        .and('be.visible')
        .and('be.enabled');

        cy.get('#last-name').should('have.attr', 'placeholder', 'Last Name')
        .and('be.visible')
        .and('be.enabled');


        cy.get('#postal-code').should('have.attr', 'placeholder', 'Zip/Postal Code')
        .and('be.visible')
        .and('be.enabled');

        
        cy.get('#cancel').should('have.text', 'Cancel')
        .and('be.visible')
        .and('not.be.disabled');


        cy.get('#continue').should('have.value', 'Continue')
        .and('be.visible')
        .and('not.be.disabled');



        // cancel button functionality 
        cy.get('#cancel').click();
        cy.url().should('include', '/cart.html');
        cy.get('span[data-test="title"]').should('have.text', 'Your Cart');
        cy.get('div[data-test="cart-quantity-label"]').should('have.text', 'QTY');
        cy.get('div[data-test="cart-desc-label"]').should('have.text', 'Description');

        cy.get('#checkout').click();




        // checkout with empty first name field
        cy.get('#first-name').clear();

        cy.get('#last-name').clear()
        .type('Gadel');

        cy.get('#postal-code').clear()
        .type('01234');

        cy.get('#continue').click();

        cy.get('h3').should('be.visible')
        .and('have.text', 'Error: First Name is required');

        cy.get('button[data-test="error-button"]').should('be.visible')
        .and('be.enabled')
        .click();


        cy.get('form').should('not.contain', 'Error: First Name is required');
        cy.get('.error-message-container').should('not.contain', 'Error: First Name is required');


        // checkout with empty last name field
        cy.get('#first-name').clear()
        .type('Rabeendra');

        cy.get('#last-name').clear();

        cy.get('#postal-code').clear()
        .type('01234');

        cy.get('#continue').click();

        cy.get('h3').should('be.visible')
        .and('have.text', 'Error: Last Name is required');

        cy.get('button[data-test="error-button"]').should('be.visible')
        .and('be.enabled')
        .click();


        cy.get('form').should('not.contain', 'Error: Last Name is required');
        cy.get('.error-message-container').should('not.contain', 'Error: Last Name is required');



        // checkout with empty ZIP/Postal Code field
        cy.get('#first-name').clear()
        .type('Rabeendra');

        cy.get('#last-name').clear()
        .type('Gadel');

        cy.get('#postal-code').clear();

        cy.get('#continue').click();

        cy.get('h3').should('be.visible')
        .and('have.text', 'Error: Postal Code is required');

        cy.get('button[data-test="error-button"]').should('be.visible')
        .and('be.enabled')
        .click();


        cy.get('form').should('not.contain', 'Error: Postal Code is required');
        cy.get('.error-message-container').should('not.contain', 'Error: Postal Code is required');
        


        // checkout with all fields empty
        cy.get('#first-name').clear();

        cy.get('#last-name').clear()    ;

        cy.get('#postal-code').clear();

        cy.get('#continue').click();

        cy.get('h3').should('be.visible')
        .and('have.text', 'Error: First Name is required');

        cy.get('button[data-test="error-button"]').should('be.visible')
        .and('be.enabled')
        .click();


        cy.get('form').should('not.contain', 'Error: First Name is required');
        cy.get('.error-message-container').should('not.contain', 'Error: First Name is required');


        // checkout with valid firstname, lastname and postal code
        cy.get('#first-name').clear()
        .type('Rabeendra');

        cy.get('#last-name').clear()
        .type('Gadel');

        cy.get('#postal-code').clear()
        .type('012345');

        cy.get('#continue').click();

        cy.url().should('include', '/checkout-step-two.html');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('span[data-test="title"]').should('have.text', 'Checkout: Overview');

        cy.get('div[data-test="cart-list"]').should('contain', 'Sauce Labs Backpack');
        cy.get('div[data-test="inventory-item-price"]').should('contain', '$29.99');

        cy.get('div[data-test="cart-list"]').should('contain', 'Sauce Labs Fleece Jacket');
        cy.get('div[data-test="inventory-item-price"]').should('contain', '$49.99');

        cy.get('div[data-test="payment-info-label"]').should('have.text', 'Payment Information:');
        cy.get('div[data-test="payment-info-value"]').should('have.text', 'SauceCard #31337');
        cy.get('div[data-test="shipping-info-label"]').should('have.text', 'Shipping Information:');
        cy.get('div[data-test="shipping-info-value"]').should('have.text', 'Free Pony Express Delivery!');
        cy.get('div[data-test="total-info-label"]').should('have.text', 'Price Total');
        cy.get('div[data-test="subtotal-label"]').should('have.text', 'Item total: $79.98');
        cy.get('div[data-test="tax-label"]').should('have.text', 'Tax: $6.40');
        cy.get('div[data-test="total-label"]').should('have.text', 'Total: $86.38');

        cy.get('#cancel').should('be.visible')
        .and('have.text', 'Cancel')
        .and('be.enabled');

        cy.get('#finish').should('be.visible')
        .and('have.text', 'Finish')
        .and('be.enabled');


        // cancel button functionality
        cy.get('#cancel').click();
        cy.url().should('include', '/inventory.html');
        cy.get('span[data-test="title"]').should('be.visible')
        .and('have.text', 'Products');

        cy.get('#shopping_cart_container').click();
        cy.get('#checkout').click();

        cy.get('#first-name').clear()
        .type('Rabeendra');

        cy.get('#last-name').clear()
        .type('Gadel');

        cy.get('#postal-code').clear()
        .type('012345');

        cy.get('#continue').click();

        cy.get('#finish').click();

        cy.url().should('include', '/checkout-complete.html');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('span[data-test="title"]').should('have.text', 'Checkout: Complete!')
        .and('be.visible');
        
        cy.get('.pony_express').should('be.visible');
        cy.get('[data-test="complete-header"]').should('have.text', 'Thank you for your order!');
        cy.get('[data-test="complete-text"]').should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');

        cy.get('#back-to-products').should('be.visible')
        .and('have.text', 'Back Home')
        .and('be.enabled')
        .click();

        cy.url().should('include', '/inventory.html');
        cy.get('span[data-test="title"]').should('be.visible')
        .and('have.text', 'Products');
        cy.get('#item_4_img_link').should('be.visible');


        

    
       






    })
})