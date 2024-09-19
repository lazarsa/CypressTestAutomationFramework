import {loginPage, securePage} from "../../pages";

describe('Login test', () => { 
  beforeEach(() => {
    cy.visit('/login');
  })

  it('Testing logging into herokuapp', () => {

    //Checking if we are on the Login Page
    cy.url().should('include', '/login');

    //Checking for invalid username
    loginPage.inputUsername('tImsmith');
    loginPage.inputPassword('SuperSecretPassword!');
    loginPage.loginBtn();
    loginPage.elements.allertWindow().contains(/your username is invalid/i);

    //Checking for invalid password
    loginPage.inputUsername('tomsmith');
    loginPage.inputPassword('SuperSecret!');
    loginPage.loginBtn();
    loginPage.elements.allertWindow().contains(/your password is invalid/i);

    //Checking for valid credentials
    loginPage.inputUsername('tomsmith');
    loginPage.inputPassword('SuperSecretPassword!');
    loginPage.loginBtn();
    
    //Checking if we are on the Secure Page(Successful Login)
    cy.url().should('include', '/secure');
    
    //Logging out
    securePage.logoutBtn();
  });

 })