
import { loginSelectors } from "../../support/selectors/loginSelectors";
import {text} from  "../../support/text_message";

describe ('Login test', ()=>{

    
    
    beforeEach(()=>{
        
        cy.visit('https://www.saucedemo.com/');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.contains(text.swagLabs);
            
        // placeholders should be visible and clickable
        cy.get(loginSelectors.userName).should('have.attr', 'placeholder', text.userName).and('be.enabled');
        cy.get(loginSelectors.passWord).should('have.attr', 'placeholder', text.password).and('be.enabled');
        cy.get(loginSelectors.loginButton).should('have.value', text.logIn).and('be.enabled');
        
        
    });
        


    
       
     
    //login with incorrect username

    it('login with incorrect username',()=>{
        

        cy.get(loginSelectors.userName).clear()
        .type("Tester");

        cy.get(loginSelectors.passWord).clear()
        .type("secret_sauce");

        cy.get(loginSelectors.loginButton).click();
        cy.get(loginSelectors.errorMessage).should('have.text','Epic sadface: Username and password do not match any user in this service');

    

    });


    // login with correct username and incorrect password

    it('valid username and invalid paswword',()=>{
        

        cy.get(loginSelectors.userName).clear()
        .type('standard_user');

        cy.get(loginSelectors.passWord).clear()
        .type("TESTEETR");

        cy.get(loginSelectors.loginButton).click();
        cy.get(loginSelectors.errorMessage).should('have.text','Epic sadface: Username and password do not match any user in this service');

    

    });


    // login with empty username and valid password

    it("login with empty username and valid password", ()=>{

        cy.get(loginSelectors.userName).clear();

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();
        cy.get(loginSelectors.errorMessage).should('have.text', text.noUserName);
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain',text.noUserName);


    });



    // login with valid user name and empty password

    it('login with valid username and empty password',()=>{

        cy.get(loginSelectors.userName).clear()
        .type('standard_user');

        cy.get(loginSelectors.passWord).clear();

        cy.get(loginSelectors.loginButton).click();

        cy.get(loginSelectors.errorMessage).should('have.text', text.noPassword);
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain',text.noPassword);

        
        

    });
    
    

     // login with empty username and password
     it('login with empty username and password',()=>{

        cy.get(loginSelectors.userName).clear();

        cy.get(loginSelectors.passWord).clear();

        cy.get(loginSelectors.loginButton).click();

        cy.get(loginSelectors.errorMessage).should('have.text', text.noUserName);
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain',text.noUserName);
        



    });
    


    // Login with locked_out_user
    it('Login with locked_out_user',()=>{
        

        cy.get(loginSelectors.userName).clear()
        .type("locked_out_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.get(loginSelectors.errorMessage).should('have.text', text.lockedOut);
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain',text.lockedOut); 



    });


    // Login with problem_user
    it('Login with problem_user',()=>{
        

        cy.get(loginSelectors.userName).clear()
        .type("problem_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.backPackImg).should('be.visible');

       

    });



    // Login with performance_glitch_user
    it('Login with performance_glitch_user',()=>{
        

        cy.get(loginSelectors.userName).clear()
        .type("performance_glitch_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.backPackImg).should('be.visible');

        

    });


    // Login with error_user
        
    it('Login with error_user',()=>{
        
        cy.get(loginSelectors.userName).clear()
        .type("error_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.backPackImg).should('be.visible');

    


    });
    
    
    // Login with visual_user

    it('Login with visual_user',()=>{
        
        cy.get(loginSelectors.userName).clear()
        .type("visual_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.backPackImg).should('be.visible');

    });
    
    
    // page assertion after login

    it('page assertion after login',()=>{
        
        cy.get(loginSelectors.userName).clear()
        .type('standard_user');

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include','/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.burgerMenu).should('be.visible').and('be.enabled');
        cy.get(loginSelectors.shoppingCartContainer).should('be.visible');
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.productSort).should('be.visible').and('be.enabled');


        //Items should be visible
        cy.get(loginSelectors.itemName).eq(0).should('have.text', text.sauceLabsBackpack);
        cy.get(loginSelectors.backPackImg).should('be.visible');
        cy.get(loginSelectors.itemDescription).should('contain', text.backPackDesc);
        cy.get(loginSelectors.itemPrice).should('contain', text.thirty);
        cy.get(loginSelectors.backpackAddToCart).should('be.visible')
        .and('have.text', text.addToCart)
        .and('be.enabled');


        //scroll down
        cy.scrollTo(loginSelectors.bottom);
        cy.get(loginSelectors.footer).should('be.visible');

        cy.get(loginSelectors.redTshirt).should('be.visible');
        cy.get(loginSelectors.itemName).eq(5).should('have.text', text.redTshirt);
        cy.get(loginSelectors.itemDescription).should('contain', text.redTshirtDesc);
        cy.get(loginSelectors.itemPrice).should('contain',text.fifty);
        cy.get(loginSelectors.tshirtAddToCart).should('be.visible')
        .and('have.text', text.addToCart)
        .and('be.enabled');


        cy.get(loginSelectors.appLogo).scrollIntoView();

        


        // Logout
        cy.get(loginSelectors.burgerMenu).should('be.visible')
        .and('be.enabled').click();

        cy.get(loginSelectors.logOut).should('have.text', text.logout)
        .and('have.attr', 'href', '#')
        .click();

        cy.url().should('include','saucedemo.com');
    });
    
});
