import {loginPage, securePage} from "../pages";

describe('Login test', () => { 
  let LoginData
  before(() => {
    cy.visit('/login');
    cy.fixture('dataSet').then((data) => {
      LoginData = data
    })
  })

  it('Testing logging into herokuapp', () => {

    //Checking if we are on the Login Page
    cy.url().should('include', '/login');

    //Checking for invalid username
    loginPage.inputUsername(LoginData.invalidUsername);
    loginPage.inputPassword(LoginData.validPassword);
    loginPage.loginBtn();
    loginPage.elements.allertWindow().contains(/your username is invalid/i);

    //Checking for invalid password
    loginPage.inputUsername(LoginData.validUsername);
    loginPage.inputPassword(LoginData.invalidPassword);
    loginPage.loginBtn();
    loginPage.elements.allertWindow().contains(/your password is invalid/i);

    //Checking for valid credentials
    loginPage.inputUsername(LoginData.validUsername);
    loginPage.inputPassword(LoginData.validPassword);
    loginPage.loginBtn();
    
    //Checking if we are on the Secure Page(Successful Login)
    cy.url().should('include', '/secure');
    
    //Logging out
    securePage.logoutBtn();

    cy.url().should('include', '/login');
  });

 })