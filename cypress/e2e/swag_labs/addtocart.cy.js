const { addtocartSelectors } = require("../../support/selectors/addToCart");
const { loginSelectors } = require("../../support/selectors/loginSelectors");

describe("add product to cart", ()=>{
    it('add products to the cart, remove and checkout', ()=>{

        // login to the page
        cy.visit('https://www.saucedemo.com/');

        cy.get(loginSelectors.userName).clear()
        .type("standard_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include', '/inventory.html');


        // add first product to the cart
        cy.get(loginSelectors.backPackImg).should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=4');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(addtocartSelectors.secondaryHeader).should('have.text', 'Back to products')
        .and('be.visible')
        .and('not.be.disabled');
        cy.get(addtocartSelectors.backPackImg).should('be.visible');
        cy.get(loginSelectors.itemName).should('have.text','Sauce Labs Backpack');
        cy.get(loginSelectors.itemDescription).should('have.text', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get(loginSelectors.itemPrice).should('have.text', '$29.99');

        cy.get(addtocartSelectors.addToCart).should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled')
        .click();

        cy.get(addtocartSelectors.removeButton).should('be.visible')
        .and('have.text', 'Remove')
        .and('be.enabled');

        cy.get(addtocartSelectors.cartBadge).should('have.text', '1');

        cy.go('back');


        // add second product to the cart
        cy.get(addtocartSelectors.boltTshirtLink).should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=1');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(addtocartSelectors.secondaryHeader).should('have.text', 'Back to products');
        cy.get(addtocartSelectors.boltTshirtImg).should('be.visible');
        cy.get(loginSelectors.itemName).should('have.text','Sauce Labs Bolt T-Shirt');
        cy.get(loginSelectors.itemDescription).should('have.text', 'Get your testing superhero on with the Sauce Labs bolt T-shirt. From American Apparel, 100% ringspun combed cotton, heather gray with red bolt.');
        cy.get(loginSelectors.itemPrice).should('have.text', '$15.99');

        cy.get(addtocartSelectors.addToCart).should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled')
        .click();

        cy.get(addtocartSelectors.removeButton).should('be.visible')
        .and('have.text', 'Remove')
        .and('be.enabled');

        cy.get(addtocartSelectors.cartBadge).should('have.text', '2');

        cy.go('back');


        //scroll page to bottom
        cy.scrollTo(loginSelectors.bottom);
        cy.get(loginSelectors.footer).should('be.visible');


        // add third product to the cart
        cy.get(addtocartSelectors.onesieLink).should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=2');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(addtocartSelectors.secondaryHeader).should('have.text', 'Back to products');
        cy.get(addtocartSelectors.onesieImg).should('be.visible');
        cy.get(loginSelectors.itemName).should('have.text','Sauce Labs Onesie');
        cy.get(loginSelectors.itemDescription).should('have.text', "Rib snap infant onesie for the junior automation engineer in development. Reinforced 3-snap bottom closure, two-needle hemmed sleeved and bottom won't unravel.");
        cy.get(loginSelectors.itemPrice).should('have.text', '$7.99');

        cy.get(addtocartSelectors.addToCart).should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled')
        .click();

        cy.get(addtocartSelectors.removeButton).should('be.visible')
        .and('have.text', 'Remove')
        .and('be.enabled');

        cy.get(addtocartSelectors.cartBadge).should('have.text', '3');

        cy.go('back');

        // add fourth product to the cart
        cy.get(addtocartSelectors.fleeceJacketLink).should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=5');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(addtocartSelectors.secondaryHeader).should('have.text', 'Back to products');
        cy.get(addtocartSelectors.fleeceJacketImg).should('be.visible');
        cy.get(loginSelectors.itemName).should('have.text','Sauce Labs Fleece Jacket');
        cy.get(loginSelectors.itemDescription).should('have.text', "It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office.");
        cy.get(loginSelectors.itemPrice).should('have.text', '$49.99');

        cy.get(addtocartSelectors.addToCart).should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled')
        .click();

        cy.get(addtocartSelectors.removeButton).should('be.visible')
        .and('have.text', 'Remove')
        .and('be.enabled');

        cy.get(addtocartSelectors.cartBadge).should('have.text', '4');

        cy.go('back');


        //remove two product form the cart
        cy.get(loginSelectors.shoppingCartContainer).click();
        cy.url().should('include', '/cart.html');
        cy.get(loginSelectors.appLogo).should('contain', 'Swag Labs');
        cy.get(loginSelectors.title).should('contain', 'Your Cart');
        cy.get(addtocartSelectors.cartQuantityLabel).should('contain', 'QTY');
        cy.get(addtocartSelectors.cartDescLabel).should('contain', 'Description');

        cy.get(addtocartSelectors.cartList).should('contain', 'Sauce Labs Backpack');
        cy.get(addtocartSelectors.cartList).should('contain', 'Sauce Labs Bolt T-Shirt');
        cy.get(addtocartSelectors.cartList).should('contain', 'Sauce Labs Onesie');
        cy.get(addtocartSelectors.cartList).should('contain', 'Sauce Labs Fleece Jacket');

        cy.get(addtocartSelectors.itemPriceBar).should('contain', '$29.99');
        cy.get(addtocartSelectors.itemPriceBar).should('contain', '$15.99');
        cy.get(addtocartSelectors.itemPriceBar).should('contain', '$7.99');
        cy.get(addtocartSelectors.itemPriceBar).should('contain', '$49.99');



        cy.get(addtocartSelectors.button).should('be.visible')
        .and('contain', 'Remove')
        .and('be.enabled');


        //scroll page to bottom
        cy.scrollTo(loginSelectors.bottom);
        cy.get(loginSelectors.footer).should('be.visible');


        cy.get(addtocartSelectors.button).should('be.visible')
        .and('contain', 'Continue Shopping')
        .and('be.enabled');

        cy.get(addtocartSelectors.button).should('be.visible')
        .and('contain', 'Checkout')
        .and('be.enabled');


        cy.get(loginSelectors.appLogo).scrollIntoView();

        //remove product one from the cart
        cy.get(addtocartSelectors.removeBoltTshirt).click();
        cy.get(addtocartSelectors.cartBadge).should('have.text', '3');
        cy.get(addtocartSelectors.cartList).should('not.contain', 'Sauce Labs Bolt T-Shirt');
        cy.get(addtocartSelectors.itemPriceBar).should('not.contain', '$15.99');


        //remove product two from the cart
        cy.get(addtocartSelectors.removeOnesie).click();
        cy.get(addtocartSelectors.cartBadge).should('have.text', '2');
        cy.get(addtocartSelectors.cartList).should('not.contain', 'Sauce Labs Onesie');
        cy.get(addtocartSelectors.itemPriceBar).should('not.contain', '$7.99');

        cy.get(addtocartSelectors.continueShopping).click();
        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.title).should('have.text', 'Products');
        cy.get(loginSelectors.productSort).should('be.visible');

        
        cy.get(loginSelectors.shoppingCartContainer).click();
        cy.get(addtocartSelectors.checkOut).click(); 


        //checkout step one
        cy.url().should('include', '/checkout-step-one.html');

        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs')
        .and('be.visible');

        cy.get(loginSelectors.title).should('have.text', 'Checkout: Your Information')
        .and('be.visible');

        cy.get(addtocartSelectors.firstName).should('have.attr', 'placeholder', 'First Name')
        .and('be.visible')
        .and('be.enabled');

        cy.get(addtocartSelectors.lastName).should('have.attr', 'placeholder', 'Last Name')
        .and('be.visible')
        .and('be.enabled');


        cy.get(addtocartSelectors.postalCode).should('have.attr', 'placeholder', 'Zip/Postal Code')
        .and('be.visible')
        .and('be.enabled');

        
        cy.get(addtocartSelectors.cancelButton).should('have.text', 'Cancel')
        .and('be.visible')
        .and('not.be.disabled');


        cy.get(addtocartSelectors.continueButton).should('have.value', 'Continue')
        .and('be.visible')
        .and('not.be.disabled');



        // cancel button functionality 
        cy.get(addtocartSelectors.cancelButton).click();
        cy.url().should('include', '/cart.html');
        cy.get(loginSelectors.title).should('have.text', 'Your Cart');
        cy.get(addtocartSelectors.cartQuantityLabel).should('have.text', 'QTY');
        cy.get(addtocartSelectors.cartDescLabel).should('have.text', 'Description');

        cy.get(addtocartSelectors.checkOut).click();




        // checkout with empty first name field
        cy.get(addtocartSelectors.firstName).clear();

        cy.get(addtocartSelectors.lastName).clear()
        .type('Gadel');

        cy.get(addtocartSelectors.postalCode).clear()
        .type('01234');

        cy.get(addtocartSelectors.continueButton).click();

        cy.get(loginSelectors.errorMessage).should('be.visible')
        .and('have.text', 'Error: First Name is required');

        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();


        cy.get(loginSelectors.form).should('not.contain', 'Error: First Name is required');
        cy.get(addtocartSelectors.errorMessageContainer).should('not.contain', 'Error: First Name is required');


        // checkout with empty last name field
        cy.get(addtocartSelectors.firstName).clear()
        .type('Rabeendra');

        cy.get(addtocartSelectors.lastName).clear();

        cy.get(addtocartSelectors.postalCode).clear()
        .type('01234');

        cy.get(addtocartSelectors.continueButton).click();

        cy.get(loginSelectors.errorMessage).should('be.visible')
        .and('have.text', 'Error: Last Name is required');

        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();


        cy.get(loginSelectors.form).should('not.contain', 'Error: Last Name is required');
        cy.get(addtocartSelectors.errorMessageContainer).should('not.contain', 'Error: Last Name is required');



        // checkout with empty ZIP/Postal Code field
        cy.get(addtocartSelectors.firstName).clear()
        .type('Rabeendra');

        cy.get(addtocartSelectors.lastName).clear()
        .type('Gadel');

        cy.get(addtocartSelectors.postalCode).clear();

        cy.get(addtocartSelectors.continueButton).click();

        cy.get(loginSelectors.errorMessage).should('be.visible')
        .and('have.text', 'Error: Postal Code is required');

        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();


        cy.get(loginSelectors.form).should('not.contain', 'Error: Postal Code is required');
        cy.get(addtocartSelectors.errorMessageContainer).should('not.contain', 'Error: Postal Code is required');
        


        // checkout with all fields empty
        cy.get(addtocartSelectors.firstName).clear();

        cy.get(addtocartSelectors.lastName).clear()    ;

        cy.get(addtocartSelectors.postalCode).clear();

        cy.get(addtocartSelectors.continueButton).click();

        cy.get(loginSelectors.errorMessage).should('be.visible')
        .and('have.text', 'Error: First Name is required');

        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();


        cy.get(loginSelectors.form).should('not.contain', 'Error: First Name is required');
        cy.get(addtocartSelectors.errorMessageContainer).should('not.contain', 'Error: First Name is required');


        // checkout with valid firstname, lastname and postal code
        cy.get(addtocartSelectors.firstName).clear()
        .type('Rabeendra');

        cy.get(addtocartSelectors.lastName).clear()
        .type('Gadel');

        cy.get(addtocartSelectors.postalCode).clear()
        .type('012345');

        cy.get(addtocartSelectors.continueButton).click();

        cy.url().should('include', '/checkout-step-two.html');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(loginSelectors.title).should('have.text', 'Checkout: Overview');

        cy.get(addtocartSelectors.cartList).should('contain', 'Sauce Labs Backpack');
        cy.get(loginSelectors.itemPrice).should('contain', '$29.99');

        cy.get(addtocartSelectors.cartList).should('contain', 'Sauce Labs Fleece Jacket');
        cy.get(loginSelectors.itemPrice).should('contain', '$49.99');

        cy.get(addtocartSelectors.paymentLabel).should('have.text', 'Payment Information:');
        cy.get(addtocartSelectors.PaymentValue).should('have.text', 'SauceCard #31337');
        cy.get(addtocartSelectors.shippingLabel).should('have.text', 'Shipping Information:');
        cy.get(addtocartSelectors.shippingValue).should('have.text', 'Free Pony Express Delivery!');
        cy.get(addtocartSelectors.totalInfoLabel).should('have.text', 'Price Total');
        cy.get(addtocartSelectors.subTotalLabel).should('have.text', 'Item total: $79.98');
        cy.get(addtocartSelectors.taxLabel).should('have.text', 'Tax: $6.40');
        cy.get(addtocartSelectors.totalLabel).should('have.text', 'Total: $86.38');

        cy.get(addtocartSelectors.cancelButton).should('be.visible')
        .and('have.text', 'Cancel')
        .and('be.enabled');

        cy.get(addtocartSelectors.finishButton).should('be.visible')
        .and('have.text', 'Finish')
        .and('be.enabled');


        // cancel button functionality
        cy.get(addtocartSelectors.cancelButton).click();
        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.title).should('be.visible')
        .and('have.text', 'Products');

        cy.get(loginSelectors.shoppingCartContainer).click();
        cy.get(addtocartSelectors.checkOut).click();

        cy.get(addtocartSelectors.firstName).clear()
        .type('Rabeendra');

        cy.get(addtocartSelectors.lastName).clear()
        .type('Gadel');

        cy.get(addtocartSelectors.postalCode).clear()
        .type('012345');

        cy.get(addtocartSelectors.continueButton).click();

        cy.get(addtocartSelectors.finishButton).click();

        cy.url().should('include', '/checkout-complete.html');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(loginSelectors.title).should('have.text', 'Checkout: Complete!')
        .and('be.visible');
        
        cy.get(addtocartSelectors.ponyExpress).should('be.visible');
        cy.get(addtocartSelectors.completeHeader).should('have.text', 'Thank you for your order!');
        cy.get(addtocartSelectors.completeText).should('have.text', 'Your order has been dispatched, and will arrive just as fast as the pony can get there!');

        cy.get(addtocartSelectors.backHomeButton).should('be.visible')
        .and('have.text', 'Back Home')
        .and('be.enabled')
        .click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.title).should('be.visible')
        .and('have.text', 'Products');
        cy.get(loginSelectors.backPackImg).should('be.visible');


        

    
       






    })
})