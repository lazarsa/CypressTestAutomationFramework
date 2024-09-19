class SecurePage {
    elements = {
        logoutBtn: () => cy.get('.button')
    }

    logoutBtn() {
        this.elements.logoutBtn().click();
    }
}

export default SecurePage;
