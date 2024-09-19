import loginPage from "../../pages/loginPage";
import securePage from "../../pages/securePage"

describe('Login test', () => { 
  beforeEach(() => {
    cy.visit('/login');
  })

  it('Testing logging into herokuapp', () => {

    //Checking if we are on the Login Page
    cy.contains(/login page/i);

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
    securePage.elements.allertWindow().contains(/you logged into a secure area/i);
    
    //Logging out
    securePage.logoutBtn();
  });

 })