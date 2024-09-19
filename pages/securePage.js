class securePage {
    elements = {
        allertWindow: () => cy.get('#flash'),
        logoutBtn: () => cy.get('.button')
    }

    logoutBtn() {
        this.elements.logoutBtn().click();
    }
}

module.exports = new securePage();
