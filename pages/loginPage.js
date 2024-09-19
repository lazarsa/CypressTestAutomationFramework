class LoginPage {

    elements = {
        username: () => cy.get('#username'),
        password: () => cy.get('#password'),
        loginBtn: () => cy.get('.radius'),
        allertWindow: () => cy.get('#flash')

    }


    inputUsername(username) {
        this.elements.username().clear();
        this.elements.username().type(username);
    }

    inputPassword(password) {
        this.elements.password().clear();
        this.elements.password().type(password)
    }

    loginBtn() {
        this.elements.loginBtn().click();
    }
}

export default LoginPage;