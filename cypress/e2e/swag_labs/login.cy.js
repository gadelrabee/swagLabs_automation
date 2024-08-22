describe ('Login test', ()=>{
    
    beforeEach(()=>{
        
        cy.visit('https://www.saucedemo.com/');
        cy.url().should('eq', 'https://www.saucedemo.com/');
        cy.contains('Swag Labs');
            
        // placeholders should be visible and clickable
        cy.get('input[name="user-name"]').should('have.attr', 'placeholder', 'Username').and('be.enabled');
        cy.get('input[name="password"]').should('have.attr', 'placeholder', 'Password').and('be.enabled');
        cy.get('input[name="login-button"]').should('have.value', 'Login').and('be.enabled');
        
    });
        
    

       
     
    //login with incorrect username
    it('login with incorrect username',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').clear()
        .type("Tester");

        cy.get('#password').clear()
        .type("secret_sauce");

        cy.get('#login-button').click();
        cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');
    });


    // login with correct username and incorrect password
    it('valid username and invalid paswword',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').clear()
        .type("standard_user");

        cy.get('#password').clear()
        .type("TESTEETR");

        cy.get('#login-button').click();
        cy.get('h3').should('have.text','Epic sadface: Username and password do not match any user in this service');
    });


    // login with empty username and valid password
    it("login with empty username and valid password", ()=>{
        cy.get("#user-name").clear();

        cy.get('#password').clear()
        .type('secret_sauce');

        cy.get('#login-button').click();
        cy.get('h3').should('have.text', 'Epic sadface: Username is required');
        cy.get('button[data-test="error-button"]').should('be.visible')
        .and('be.enabled')
        .click();
        cy.get('form').should('not.contain','Epic sadface: Username is required');

    });



    // login with valid user name and empty password
    it('login with valid username and empty password',()=>{

        cy.get('#user-name').clear()
        .type('standard_user');

        cy.get('#password').clear();

        cy.get('#login-button').click();

        cy.get('h3').should('have.text', 'Epic sadface: Password is required');
        cy.get('button[data-test="error-button"]').should('be.visible')
        .and('be.enabled')
        .click();
        cy.get('form').should('not.contain','Epic sadface: Password is required');
        

    });
    
    

     // login with empty username and password
     it('login with empty username and password',()=>{

        cy.get('#user-name').clear();

        cy.get('#password').clear();

        cy.get('#login-button').click();

        cy.get('h3').should('have.text', 'Epic sadface: Username is required');
        cy.get('button[data-test="error-button"]').should('be.visible')
        .and('be.enabled')
        .click();
        cy.get('form').should('not.contain','Epic sadface: Username is required');
        

    });
    


    // Login with locked_out_user
    it('Login with locked_out_user',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').clear()
        .type("locked_out_user");

        cy.get('#password').clear()
        .type("secret_sauce");

        cy.get('#login-button').click();

        cy.get('h3').should('have.text', 'Epic sadface: Sorry, this user has been locked out.');
        cy.get('button[data-test="error-button"]').should('be.visible')
        .and('be.enabled')
        .click();
        cy.get('form').should('not.contain','Epic sadface: Sorry, this user has been locked out.'); 


    });


    // Login with problem_user
    it('Login with problem_user',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').clear()
        .type("problem_user");

        cy.get('#password').clear()
        .type("secret_sauce");

        cy.get('#login-button').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('span[data-test="title"]').should('have.text', 'Products');
        cy.get('img[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');

    });



    // Login with performance_glitch_user
    it('Login with performance_glitch_user',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').clear()
        .type("performance_glitch_user");

        cy.get('#password').clear()
        .type("secret_sauce");

        cy.get('#login-button').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('span[data-test="title"]').should('have.text', 'Products');
        cy.get('img[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');


    });


    // Login with error_user
        
    it('Login with error_user',()=>{
        // cy.visit('https://www.saucedemo.com/');
        
        cy.get('#user-name').clear()
        .type("error_user");

        cy.get('#password').clear()
        .type("secret_sauce");

        cy.get('#login-button').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('span[data-test="title"]').should('have.text', 'Products');
        cy.get('img[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');


    });
    
    
    // Login with visual_user
    it('Login with visual_user',()=>{
        // cy.visit('https://www.saucedemo.com/');

        cy.get('#user-name').clear()
        .type("visual_user");

        cy.get('#password').clear()
        .type("secret_sauce");

        cy.get('#login-button').click();

        cy.url().should('include', '/inventory.html');
        cy.get('.app_logo').should('have.text', 'Swag Labs');
        cy.get('span[data-test="title"]').should('have.text', 'Products');
        cy.get('img[data-test="inventory-item-sauce-labs-backpack-img"]').should('be.visible');

    });
    
    
    // Valid login with standard user
    it('Valid login with standard user with valid password',()=>{
        // cy.visit('https://www.saucedemo.com/');
        // cy.url().should('eq', 'https://www.saucedemo.com/');

        cy.get('#user-name').clear()
        .type("standard_user");

        cy.get('#password').clear()
        .type("secret_sauce");

        cy.get('#login-button').click();

        cy.url().should('include','/inventory.html');
        cy.get('#react-burger-menu-btn').should('be.visible').and('be.enabled');
        cy.contains('Swag Labs');
        cy.get('#shopping_cart_container').should('be.visible');
        cy.get('.title').should('have.text', 'Products');
        cy.get('select[data-test="product-sort-container"]').should('be.enabled').and('be.visible');


        //Items should be visible
        cy.get('div[data-test="inventory-item-name"]').eq(0).should('contain', 'Sauce Labs Backpack');
        cy.get('#item_4_title_link').should('be.visible');
        cy.get('div[data-test="inventory-item-desc"]').should('contain', 'carry.allTheThings() with the sleek, streamlined Sly Pack that melds uncompromising style with unequaled laptop and tablet protection.');
        cy.get('div[data-test="inventory-item-price"]').should('contain', '$29.99');
        cy.get('#add-to-cart-sauce-labs-backpack').should('be.visible');
        cy.get('div[data-test="inventory-item-name"]').eq(3).should('have.text','Sauce Labs Fleece Jacket');
        cy.get('#item_5_title_link').should('be.visible');
        cy.get('div[data-test="inventory-item-desc"]').should('contain',"It's not every day that you come across a midweight quarter-zip fleece jacket capable of handling everything from a relaxing day outdoors to a busy day at the office");
        cy.get('div[data-test="inventory-item-price"]').should('contain','$49.99');
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').should('be.visible');


        //scroll down
        cy.scrollTo('bottom');
        cy.get('.footer').should('be.visible');


        // Logout
        cy.get('#react-burger-menu-btn').should('be.visible')
        .and('be.enabled')
        .click();

        cy.get('#logout_sidebar_link').should('be.visible')
        .and('have.text','Logout')
        .and('have.attr', 'href', '#')
        .click();

        cy.url().should('include','saucedemo.com');
    });
    
});
