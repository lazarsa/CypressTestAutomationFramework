class securePage {
    elements = {
        allertWindow: () => cy.get('#flash'),
        logoutBtn: () => cy.get('.button')
    }

    logoutBtn() {
        this.elements.logoutBtn().click();
    }
}

export default new securePage();
