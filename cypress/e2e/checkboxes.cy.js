import checkboxesPage from "../../pages/checkboxesPage";
import loginPage from "../../pages/loginPage";
import securePage from "../../pages/securePage";

describe('Checkboxes test', () => {
    beforeEach(() => {
    cy.visit('/login');
    });

    it('Testing the checkboxes', () => {
        
        //Logging the user
        loginPage.inputUsername('tomsmith');
        loginPage.inputPassword('SuperSecretPassword!');
        loginPage.loginBtn();
        securePage.elements.allertWindow().contains(/you logged into a secure area/i);

        //Navigating to Checkboxes page
        cy.visit('/checkboxes');
        //Checking if we are on the Checkboxes page
        checkboxesPage.elements.header().contains(/checkboxes/i);

        //Checking if checkbox2 is checked
        checkboxesPage.elements.checkbox2().should('be.checked');
        
        checkboxesPage.checkCheckbox.checkCheckbox1();
        checkboxesPage.elements.checkbox1().should('be.checked')
    });
});