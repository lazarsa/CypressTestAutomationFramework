import {loginPage, checkboxesPage} from "../../pages";

describe('Checkboxes test', () => {
    let LoginData
    before(() => {
        cy.visit('/login');
        cy.fixture('dataSet').then((data) => {
          LoginData = data
        })
      })

    it('Testing the checkboxes', () => {
        
        //Logging the user
        loginPage.inputUsername(LoginData.validUsername);
        loginPage.inputPassword(LoginData.validPassword);
        loginPage.loginBtn();
        cy.url().should('include', '/secure');

        //Navigating to Checkboxes page
        cy.visit('/checkboxes');
        //Checking if we are on the Checkboxes page
        cy.url().should('include', '/checkboxes');

        //Checking if checkbox2 is checked
        checkboxesPage.elements.checkbox2().should('be.checked');
        
        checkboxesPage.checkCheckbox.checkCheckbox1();
        checkboxesPage.elements.checkbox1().should('be.checked')
    });
});