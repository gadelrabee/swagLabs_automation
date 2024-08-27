import { addtocartSelectors } from"../../support/selectors/addToCart";
import { loginSelectors } from "../../support/selectors/loginSelectors";
import { text } from "../../support/text_message";
import login_credential from "../../fixtures/login_credentials.json";
import checkoutData from "../../fixtures/checkoutData.json";




//custom command to add the product to the cart
function addtocart(productLink, url, applogo, swagLabs, secHeader, backtoProduct, itemImg,itemname, productname, 
    itemdescription, description, itemprice, price, addtoCart, addTocart, removebutton, Remove, badge, number){
        cy.get(productLink).should('be.visible')
        .click()

        cy.url().should('include', url);
        cy.get(applogo).should('have.text', swagLabs);
        cy.get(secHeader).should('have.text', backtoProduct)
        .and('be.visible')
        .and('not.be.disabled');
        cy.get(itemImg).should('be.visible');
        cy.get(itemname).should('have.text',productname);
        cy.get(itemdescription).should('have.text', description);
        cy.get(itemprice).should('have.text', price);

        cy.get(addtoCart).should('be.visible')
        .and('have.text', addTocart)
        .and('be.enabled')
        .click();

        cy.get(removebutton).should('be.visible')
        .and('have.text', Remove)
        .and('be.enabled');

        cy.get(badge).should('have.text', number);

    };

describe("add product to cart", ()=>{
    it('add products to the cart, remove and checkout', ()=>{

        // login to the page
        cy.open_page();

        cy.login(login_credential.username, login_credential.password);

        cy.url().should('include', '/inventory.html');


        // add first product to the cart
        addtocart(addtocartSelectors.backPackLink, 
            text.inventoryId4, 
            loginSelectors.appLogo, 
            text.swagLabs, 
            addtocartSelectors.secondaryHeader, 
            text.backToProducts,
            addtocartSelectors.backPackImg,
            loginSelectors.itemName,
            text.sauceLabsBackpack,
            loginSelectors.itemDescription,
            text.backPackDesc,
            loginSelectors.itemPrice,
            text.thirty,
            addtocartSelectors.addToCart,
            text.addToCart,
            addtocartSelectors.removeButton,
            text.remove,
            addtocartSelectors.cartBadge,
            text.one
        );

        cy.go('back');


        // add second product to the cart
        addtocart(addtocartSelectors.boltTshirtLink,
            text.inventoryId1,
            loginSelectors.appLogo,
            text.swagLabs,
            addtocartSelectors.secondaryHeader,
            text.backToProducts,
            addtocartSelectors.boltTshirtImg,
            loginSelectors.itemName,
            text.boltTshirt,
            loginSelectors.itemDescription,
            text.boltTshirtDesc,
            loginSelectors.itemPrice,
            text.sixteen,
            addtocartSelectors.addToCart,
            text.addToCart,
            addtocartSelectors.removeButton,
            text.remove,
            addtocartSelectors.cartBadge,
            text.two
        ),

        cy.go('back');


        //scroll page to bottom
        cy.scrollTo(loginSelectors.bottom);
        cy.get(loginSelectors.footer).should('be.visible');


        // add third product to the cart

        addtocart(addtocartSelectors.onesieLink,
            text.inventoryId2,
            loginSelectors.appLogo,
            text.swagLabs,
            addtocartSelectors.secondaryHeader,
            text.backToProducts,
            addtocartSelectors.onesieImg,
            loginSelectors.itemName,
            text.sauceLabsOnesie,
            loginSelectors.itemDescription,
            text.onesieDesc,
            loginSelectors.itemPrice,
            text.eight,
            addtocartSelectors.addToCart,
            text.addToCart,
            addtocartSelectors.removeButton,
            text.remove,
            addtocartSelectors.cartBadge,
            text.three,

        );

    
        cy.go('back');

        // add fourth product to the cart
        addtocart(addtocartSelectors.fleeceJacketLink,
            text.inventoryId5,
            loginSelectors.appLogo,
            text.swagLabs,
            addtocartSelectors.secondaryHeader,
            text.backToProducts,
            addtocartSelectors.fleeceJacketImg,
            loginSelectors.itemName,
            text.fleeceJacket,
            loginSelectors.itemDescription,
            text.fleeceJacketDesc,
            loginSelectors.itemPrice,
            text.fifty,
            addtocartSelectors.addToCart,
            text.addToCart,
            addtocartSelectors.removeButton,
            text.remove,
            addtocartSelectors.cartBadge,
            text.four

        );
        

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
        .type(checkoutData.lastname);

        cy.get(addtocartSelectors.postalCode).clear()
        .type(checkoutData.postalcode);

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
        .type(checkoutData.firstname);

        cy.get(addtocartSelectors.lastName).clear();

        cy.get(addtocartSelectors.postalCode).clear()
        .type(checkoutData.postalcode);

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
        .type(checkoutData.firstname);

        cy.get(addtocartSelectors.lastName).clear()
        .type(checkoutData.lastname);

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
        .type(checkoutData.firstname);

        cy.get(addtocartSelectors.lastName).clear()
        .type(checkoutData.lastname);

        cy.get(addtocartSelectors.postalCode).clear()
        .type(checkoutData.postalcode);

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