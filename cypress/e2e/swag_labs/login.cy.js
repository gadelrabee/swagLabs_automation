import  login_credential from  "../../fixtures/login_credentials/login_credential.json"
import { loginSelectors } from "../../support/selectors/loginSelectors";
import { log } from "async";

describe ('Login test', ()=>{

    
    
    beforeEach(()=>{
        
        cy.visit('https://www.saucedemo.com/');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.contains('Swag Labs');
            
        // placeholders should be visible and clickable
        cy.get(loginSelectors.userName).should('have.attr', 'placeholder', 'Username').and('be.enabled');
        cy.get(loginSelectors.passWord).should('have.attr', 'placeholder', 'Password').and('be.enabled');
        cy.get(loginSelectors.loginButton).should('have.value', 'Login').and('be.enabled');
        
        
    });
        


    
       
     
    //login with incorrect username
    it('login with incorrect username',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get(loginSelectors.userName).clear()
        .type("Tester");

        cy.get(loginSelectors.passWord).clear()
        .type("secret_sauce");

        cy.get(loginSelectors.loginButton).click();
        cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');

    

    });


    // login with correct username and incorrect password
    it('valid username and invalid paswword',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get(loginSelectors.userName).clear()
        .type('standard_user');

        cy.get(loginSelectors.passWord).clear()
        .type("TESTEETR");

        cy.get(loginSelectors.loginButton).click();
        cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');

    

    });


    // login with empty username and valid password
    it("login with empty username and valid password", ()=>{
        cy.get(loginSelectors.userName).clear();

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();
        cy.get('h3').should('have.text', 'Epic sadface: Username is required');
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain','Epic sadface: Username is required');


    });



    // login with valid user name and empty password
    it('login with valid username and empty password',()=>{

        cy.get(loginSelectors.userName).clear()
        .type('standard_user');

        cy.get(loginSelectors.passWord).clear();

        cy.get(loginSelectors.loginButton).click();

        cy.get('h3').should('have.text', 'Epic sadface: Password is required');
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain','Epic sadface: Password is required');

        
        

    });
    
    

     // login with empty username and password
     it('login with empty username and password',()=>{

        cy.get(loginSelectors.userName).clear();

        cy.get(loginSelectors.passWord).clear();

        cy.get(loginSelectors.loginButton).click();

        cy.get('h3').should('have.text', 'Epic sadface: Username is required');
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain','Epic sadface: Username is required');
        



    });
    


    // Login with locked_out_user
    it('Login with locked_out_user',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get(loginSelectors.userName).clear()
        .type("locked_out_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.get('h3').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain','Epic sadface: Sorry, this user has been locked out.'); 



    });


    // Login with problem_user
    it('Login with problem_user',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get(loginSelectors.userName).clear()
        .type("problem_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(loginSelectors.title).should('have.text', 'Products');
        cy.get(loginSelectors.backPackImg).should('be.visible');

       

    });



    // Login with performance_glitch_user
    it('Login with performance_glitch_user',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get(loginSelectors.userName).clear()
        .type("performance_glitch_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(loginSelectors.title).should('have.text', 'Products');
        cy.get(loginSelectors.backPackImg).should('be.visible');

        

    });


    // Login with error_user
        
    it('Login with error_user',()=>{
        // cy.visit('https://www.saucedemo.com/');
        
        cy.get(loginSelectors.userName).clear()
        .type("error_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(loginSelectors.title).should('have.text', 'Products');
        cy.get(loginSelectors.backPackImg).should('be.visible');

    


    });
    
    
    // Login with visual_user
    it('Login with visual_user',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get(loginSelectors.userName).clear()
        .type("visual_user");

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(loginSelectors.title).should('have.text', 'Products');
        cy.get(loginSelectors.backPackImg).should('be.visible');

    });
    
    
    // page assertion after login
    it.only('page assertion after login',()=>{
        // cy.visit('https://www.saucedemo.com/');
        // cy.url().should('eq', 'https://www.saucedemo.com/');

        cy.get(loginSelectors.userName).clear()
        .type('standard_user');

        cy.get(loginSelectors.passWord).clear()
        .type('secret_sauce');

        cy.get(loginSelectors.loginButton).click();

        cy.url().should('include','/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', 'Swag Labs');
        cy.get(loginSelectors.burgerMenu).should('be.visible').and('be.enabled');
        cy.get(loginSelectors.shoppingCartContainer).should('be.visible');
        cy.get(loginSelectors.title).should('have.text', 'Products');
        cy.get(loginSelectors.productSort).should('be.visible').and('be.enabled');


        //Items should be visible
        cy.get(loginSelectors.itemName).eq(0).should('have.text', 'Sauce Labs Backpack');
        cy.get(loginSelectors.backPackImg).should('be.visible');
        cy.get(loginSelectors.itemDescription).should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get(loginSelectors.itemPrice).should('contain', '$29.99');
        cy.get(loginSelectors.backpackAddToCart).should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled');


        //scroll down
        cy.scrollTo(loginSelectors.bottom);
        cy.get(loginSelectors.footer).should('be.visible');

        cy.get(loginSelectors.redTshirt).should('be.visible');
        cy.get(loginSelectors.itemName).eq(5).should('have.text','Test.allTheThings() T-Shirt (Red)');
        cy.get(loginSelectors.itemDescription).should('contain',"This classic Sauce Labs t-shirt is perfect to wear when cozying up to your keyboard to automate a few tests. Super-soft and comfy ringspun combed cotton.");
        cy.get(loginSelectors.itemPrice).should('contain','$49.99');
        cy.get(loginSelectors.tshirtAddToCart).should('be.visible')
        .and('have.text', 'Add to cart')
        .and('be.enabled');


        cy.get(loginSelectors.appLogo).scrollIntoView();

        


        // Logout
        cy.get(loginSelectors.burgerMenu).should('be.visible')
        .and('be.enabled').click();

        cy.get(loginSelectors.logOut).should('have.text','Logout')
        .and('have.attr', 'href', '#')
        .click();

        cy.url().should('include','saucedemo.com');
    });
    
});
