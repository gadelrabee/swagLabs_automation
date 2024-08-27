
import { loginSelectors } from "../../support/selectors/loginSelectors";
import {text} from  "../../support/text_message";
import login_credential from "../../fixtures/login_credentials.json";
import { loginPage } from "../../pages/loginpage";
const loginObj = new loginPage();

describe ('Login test', ()=>{

    
    
    beforeEach(()=>{
        
        loginObj.openSwagLabs()
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.contains(text.swagLabs);
            
        // placeholders should be visible and clickable
        cy.get(loginSelectors.userName).should('have.attr', 'placeholder', text.userName).and('be.enabled');
        cy.get(loginSelectors.passWord).should('have.attr', 'placeholder', text.password).and('be.enabled');
        cy.get(loginSelectors.loginButton).should('have.value', text.logIn).and('be.enabled');
        
        
    });
        


    
       
     
    //login with incorrect username

    it('login with incorrect username',()=>{
        
        loginObj.enterUserName("rabeendra");
        loginObj.enterPassword(login_credential.password);
        loginObj.clickLoginButton();

        cy.get(loginSelectors.errorMessage).should('have.text', text.noMatch);

    

    });


    // login with correct username and incorrect password

    it('valid username and invalid paswword',()=>{
        

        loginObj.enterUserName(login_credential.username);
        loginObj.enterPassword("TESTEETR");
        loginObj.clickLoginButton();

        cy.get(loginSelectors.errorMessage).should('have.text',text.noMatch);

    

    });


    // login with empty username and valid password

    it("login with empty username and valid password", ()=>{

        loginObj.enterUserName();
        loginObj.enterPassword(login_credential.password);
        loginObj.clickLoginButton();

        cy.get(loginSelectors.errorMessage).should('have.text', text.noUserName);
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain',text.noUserName);


    });



    // login with valid user name and empty password

    it('login with valid username and empty password',()=>{

        loginObj.enterUserName(login_credential.username);
        loginObj.enterPassword();
        loginObj.clickLoginButton();

        cy.get(loginSelectors.errorMessage).should('have.text', text.noPassword);
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain',text.noPassword);
        
        

    });
    
    

     // login with empty username and password
     it('login with empty username and password',()=>{

        loginObj.enterUserName();
        loginObj.enterPassword();
        loginObj.clickLoginButton();

        cy.get(loginSelectors.errorMessage).should('have.text', text.noUserName);
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain',text.noUserName);
        



    });
    


    // Login with locked_out_user
    it('Login with locked_out_user',()=>{
        

        loginObj.enterUserName('locked_out_user');
        loginObj.enterPassword(login_credential.password);
        loginObj.clickLoginButton();

        cy.get(loginSelectors.errorMessage).should('have.text', text.lockedOut);
        cy.get(loginSelectors.errorButton).should('be.visible')
        .and('be.enabled')
        .click();
        cy.get(loginSelectors.form).should('not.contain',text.lockedOut); 



    });


    // Login with problem_user
    it('Login with problem_user',()=>{
        

        loginObj.enterUserName('problem_user');
        loginObj.enterPassword(login_credential.password);
        loginObj.clickLoginButton();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.backPackImg).should('be.visible');

       

    });



    // Login with performance_glitch_user
    it('Login with performance_glitch_user',()=>{
        

        loginObj.enterUserName("performance_glitch_user");
        loginObj.enterPassword(login_credential.password);
        loginObj.clickLoginButton();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.backPackImg).should('be.visible');

        

    });


    // Login with error_user
        
    it('Login with error_user',()=>{
        
        loginObj.enterUserName("error_user");
        loginObj.enterPassword(login_credential.password);
        loginObj.clickLoginButton();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.backPackImg).should('be.visible');

    


    });
    
    
    // Login with visual_user

    it('Login with visual_user',()=>{
        
        loginObj.enterUserName("visual_user");
        loginObj.enterPassword(login_credential);
        loginObj.clickLoginButton();

        cy.url().should('include', '/inventory.html');
        cy.get(loginSelectors.appLogo).should('have.text', text.swagLabs);
        cy.get(loginSelectors.title).should('have.text', text.products);
        cy.get(loginSelectors.backPackImg).should('be.visible');

    });
    
    
    // page assertion after login

    it.only('page assertion after login',()=>{
        
        loginObj.enterUserName(login_credential.username);
        loginObj.enterPassword(login_credential.password);
        loginObj.clickLoginButton();

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
