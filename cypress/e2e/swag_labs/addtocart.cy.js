import { addtocartSelectors } from"../../support/selectors/addToCart";
import { loginSelectors } from "../../support/selectors/loginSelectors";
import {text} from "../../support/text_message";

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
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(addtocartSelectors.secondaryHeader).should('have.text', text.backToProducts)
        .and('be.visible')
        .and('not.be.disabled');
        cy.get(addtocartSelectors.backPackImg).should('be.visible');
        cy.get(loginSelectors.itemName).should('have.text',text.sauceLabsBackpack);
        cy.get(loginSelectors.itemDescription).should('have.text', text.backPackDesc);
        cy.get(loginSelectors.itemPrice).should('have.text', text.thirty);

        cy.get(addtocartSelectors.addToCart).should('be.visible')
        .and('have.text', text.addToCart)
        .and('be.enabled')
        .click();

        cy.get(addtocartSelectors.removeButton).should('be.visible')
        .and('have.text', text.remove)
        .and('be.enabled');

        cy.get(addtocartSelectors.cartBadge).should('have.text', text.one);

        cy.go('back');


        // add second product to the cart
        cy.get(addtocartSelectors.boltTshirtLink).should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=1');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(addtocartSelectors.secondaryHeader).should('have.text', text.backToProducts);
        cy.get(addtocartSelectors.boltTshirtImg).should('be.visible');
        cy.get(loginSelectors.itemName).should('have.text',text.boltTshirt);
        cy.get(loginSelectors.itemDescription).should('have.text', text.boltTshirtDesc);
        cy.get(loginSelectors.itemPrice).should('have.text', text.sixteen);

        cy.get(addtocartSelectors.addToCart).should('be.visible')
        .and('have.text', text.addToCart)
        .and('be.enabled')
        .click();

        cy.get(addtocartSelectors.removeButton).should('be.visible')
        .and('have.text', text.remove)
        .and('be.enabled');

        cy.get(addtocartSelectors.cartBadge).should('have.text', text.two);

        cy.go('back');


        //scroll page to bottom
        cy.scrollTo(loginSelectors.bottom);
        cy.get(loginSelectors.footer).should('be.visible');


        // add third product to the cart
        cy.get(addtocartSelectors.onesieLink).should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=2');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(addtocartSelectors.secondaryHeader).should('have.text', text.backToProducts);
        cy.get(addtocartSelectors.onesieImg).should('be.visible');
        cy.get(loginSelectors.itemName).should('have.text',text.sauceLabsOnesie);
        cy.get(loginSelectors.itemDescription).should('have.text', text.onesieDesc);
        cy.get(loginSelectors.itemPrice).should('have.text', text.eight);

        cy.get(addtocartSelectors.addToCart).should('be.visible')
        .and('have.text', text.addToCart)
        .and('be.enabled')
        .click();

        cy.get(addtocartSelectors.removeButton).should('be.visible')
        .and('have.text', text.remove)
        .and('be.enabled');

        cy.get(addtocartSelectors.cartBadge).should('have.text', text.three);

        cy.go('back');

        // add fourth product to the cart
        cy.get(addtocartSelectors.fleeceJacketLink).should('be.visible')
        .click()

        cy.url().should('include', '/inventory-item.html?id=5');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(addtocartSelectors.secondaryHeader).should('have.text', text.backToProducts);
        cy.get(addtocartSelectors.fleeceJacketImg).should('be.visible');
        cy.get(loginSelectors.itemName).should('have.text', text.fleeceJacket);
        cy.get(loginSelectors.itemDescription).should('have.text', text.fleeceJacketDesc);
        cy.get(loginSelectors.itemPrice).should('have.text', text.fifty);

        cy.get(addtocartSelectors.addToCart).should('be.visible')
        .and('have.text', text.addToCart)
        .and('be.enabled')
        .click();

        cy.get(addtocartSelectors.removeButton).should('be.visible')
        .and('have.text', text.remove)
        .and('be.enabled');

        cy.get(addtocartSelectors.cartBadge).should('have.text', text.four);

        cy.go('back');


        //remove two product form the cart
        cy.get(loginSelectors.shoppingCartContainer).click();
        cy.url().should('include', '/cart.html');
        cy.get(loginSelectors.appLogo).should('contain', text.swagLabs);
        cy.get(loginSelectors.title).should('contain', text.yourCart);
        cy.get(addtocartSelectors.cartQuantityLabel).should('contain', text.qty);
        cy.get(addtocartSelectors.cartDescLabel).should('contain', text.description);

        cy.get(addtocartSelectors.cartList).should('contain', text.sauceLabsBackpack);
        cy.get(addtocartSelectors.cartList).should('contain', text.boltTshirt);
        cy.get(addtocartSelectors.cartList).should('contain', text.sauceLabsOnesie);
        cy.get(addtocartSelectors.cartList).should('contain', text.fleeceJacket);

        cy.get(addtocartSelectors.itemPriceBar).should('contain', text.thirty);
        cy.get(addtocartSelectors.itemPriceBar).should('contain', text.sixteen);
        cy.get(addtocartSelectors.itemPriceBar).should('contain', text.eight);
        cy.get(addtocartSelectors.itemPriceBar).should('contain', text.fifty);



        cy.get(addtocartSelectors.button).should('be.visible')
        .and('contain', text.remove)
        .and('be.enabled');


        //scroll page to bottom
        cy.scrollTo(loginSelectors.bottom);
        cy.get(loginSelectors.footer).should('be.visible');


        cy.get(addtocartSelectors.button).should('be.visible')
        .and('contain', text.continueShopping)
        .and('be.enabled');

        cy.get(addtocartSelectors.button).should('be.visible')
        .and('contain', text.checkout)
        .and('be.enabled');


        cy.get(loginSelectors.appLogo).scrollIntoView();

        //remove product one from the cart
        cy.get(addtocartSelectors.removeBoltTshirt).click();
        cy.get(addtocartSelectors.cartBadge).should('have.text', text.three);
        cy.get(addtocartSelectors.cartList).should('not.contain', text.boltTshirt);
        cy.get(addtocartSelectors.itemPriceBar).should('not.contain', text.sixteen);


        //remove product two from the cart
        cy.get(addtocartSelectors.removeOnesie).click();
        cy.get(addtocartSelectors.cartBadge).should('have.text', text.two);
        cy.get(addtocartSelectors.cartList).should('not.contain', text.sauceLabsOnesie);
        cy.get(addtocartSelectors.itemPriceBar).should('not.contain', text.eight);

        cy.get(addtocartSelectors.continueShopping).click();
        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.productSort).should('be.visible');

        
        cy.get(loginSelectors.shoppingCartContainer).click();
        cy.get(addtocartSelectors.checkOut).click(); 


        //checkout step one
        cy.url().should('include', '/checkout-step-one.html');

        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs)
        .and('be.visible');

        cy.get(loginSelectors.title).should('have.text', text.yourInformation)
        .and('be.visible');

        cy.get(addtocartSelectors.firstName).should('have.attr', 'placeholder', text.firstName)
        .and('be.visible')
        .and('be.enabled');

        cy.get(addtocartSelectors.lastName).should('have.attr', 'placeholder', text.lastName)
        .and('be.visible')
        .and('be.enabled');


        cy.get(addtocartSelectors.postalCode).should('have.attr', 'placeholder', text.zipCode)
        .and('be.visible')
        .and('be.enabled');

        
        cy.get(addtocartSelectors.cancelButton).should('have.text', text.cancel)
        .and('be.visible')
        .and('not.be.disabled');


        cy.get(addtocartSelectors.continueButton).should('have.value', text.continue)
        .and('be.visible')
        .and('not.be.disabled');



        // cancel button functionality 
        cy.get(addtocartSelectors.cancelButton).click();
        cy.url().should('include', '/cart.html');
        cy.get(loginSelectors.title).should('have.text', text.yourCart);
        cy.get(addtocartSelectors.cartQuantityLabel).should('have.text', text.qty);
        cy.get(addtocartSelectors.cartDescLabel).should('have.text', text.description);

        cy.get(addtocartSelectors.checkOut).click();




        // checkout with empty first name field
        cy.get(addtocartSelectors.firstName).clear();

        cy.get(addtocartSelectors.lastName).clear()
        .type('Gadel');

        cy.get(addtocartSelectors.postalCode).clear()
        .type('01234');

        cy.get(addtocartSelectors.continueButton).click();

        cy.get(loginSelectors.errorMessage).should('be.visible')
        .and('have.text', text.noFirstName);

        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();


        cy.get(loginSelectors.form).should('not.contain', text.noFirstName);
        cy.get(addtocartSelectors.errorMessageContainer).should('not.contain', text.noFirstName);


        // checkout with empty last name field
        cy.get(addtocartSelectors.firstName).clear()
        .type('Rabeendra');

        cy.get(addtocartSelectors.lastName).clear();

        cy.get(addtocartSelectors.postalCode).clear()
        .type('01234');

        cy.get(addtocartSelectors.continueButton).click();

        cy.get(loginSelectors.errorMessage).should('be.visible')
        .and('have.text', text.noLastName);

        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();


        cy.get(loginSelectors.form).should('not.contain', text.noLastName);
        cy.get(addtocartSelectors.errorMessageContainer).should('not.contain', text.noLastName);



        // checkout with empty ZIP/Postal Code field
        cy.get(addtocartSelectors.firstName).clear()
        .type('Rabeendra');

        cy.get(addtocartSelectors.lastName).clear()
        .type('Gadel');

        cy.get(addtocartSelectors.postalCode).clear();

        cy.get(addtocartSelectors.continueButton).click();

        cy.get(loginSelectors.errorMessage).should('be.visible')
        .and('have.text', text.noPostalCode);

        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();


        cy.get(loginSelectors.form).should('not.contain', text.noPostalCode);
        cy.get(addtocartSelectors.errorMessageContainer).should('not.contain', text.noPostalCode);
        


        // checkout with all fields empty
        cy.get(addtocartSelectors.firstName).clear();

        cy.get(addtocartSelectors.lastName).clear()    ;

        cy.get(addtocartSelectors.postalCode).clear();

        cy.get(addtocartSelectors.continueButton).click();

        cy.get(loginSelectors.errorMessage).should('be.visible')
        .and('have.text', text.noFirstName);

        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();


        cy.get(loginSelectors.form).should('not.contain', text.noFirstName);
        cy.get(addtocartSelectors.errorMessageContainer).should('not.contain', text.noFirstName);


        // checkout with valid firstname, lastname and postal code
        cy.get(addtocartSelectors.firstName).clear()
        .type('Rabeendra');

        cy.get(addtocartSelectors.lastName).clear()
        .type('Gadel');

        cy.get(addtocartSelectors.postalCode).clear()
        .type('012345');

        cy.get(addtocartSelectors.continueButton).click();

        cy.url().should('include', '/checkout-step-two.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.checkoutOverview);

        cy.get(addtocartSelectors.cartList).should('contain', text.sauceLabsBackpack);
        cy.get(loginSelectors.itemPrice).should('contain', text.thirty);

        cy.get(addtocartSelectors.cartList).should('contain', text.fleeceJacket);
        cy.get(loginSelectors.itemPrice).should('contain', text.fifty);

        cy.get(addtocartSelectors.paymentLabel).should('have.text', text.paymentInformation);
        cy.get(addtocartSelectors.PaymentValue).should('have.text', text.sauceCard);
        cy.get(addtocartSelectors.shippingLabel).should('have.text', text.shippingInformation);
        cy.get(addtocartSelectors.shippingValue).should('have.text', text.expressDelivery);
        cy.get(addtocartSelectors.totalInfoLabel).should('have.text', text.priceTotal);
        cy.get(addtocartSelectors.subTotalLabel).should('have.text', text.itemTotal);
        cy.get(addtocartSelectors.taxLabel).should('have.text', text.tax);
        cy.get(addtocartSelectors.totalLabel).should('have.text', text.total);

        cy.get(addtocartSelectors.cancelButton).should('be.visible')
        .and('have.text', text.cancel)
        .and('be.enabled');

        cy.get(addtocartSelectors.finishButton).should('be.visible')
        .and('have.text', text.finish)
        .and('be.enabled');


        // cancel button functionality
        cy.get(addtocartSelectors.cancelButton).click();
        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.title).should('be.visible')
        .and('have.text', text.products);

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
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.checkoutComplete)
        .and('be.visible');
        
        cy.get(addtocartSelectors.ponyExpress).should('be.visible');
        cy.get(addtocartSelectors.completeHeader).should('have.text', text.thankYouMessage);
        cy.get(addtocartSelectors.completeText).should('have.text', text.dispatchMessage);

        cy.get(addtocartSelectors.backHomeButton).should('be.visible')
        .and('have.text', text.backHome)
        .and('be.enabled')
        .click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.title).should('be.visible')
        .and('have.text', text.products);
        cy.get(loginSelectors.backPackImg).should('be.visible');


        

    
       






    })
})