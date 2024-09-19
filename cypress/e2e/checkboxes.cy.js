import {loginPage, checkboxesPage} from "../../pages";


describe('Checkboxes test', () => {
    beforeEach(() => {
    cy.visit('/login');
    });

    it('Testing the checkboxes', () => {
        
        //Logging the user
        loginPage.inputUsername('tomsmith');
        loginPage.inputPassword('SuperSecretPassword!');
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