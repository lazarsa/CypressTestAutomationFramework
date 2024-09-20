class CheckboxesPage {

    elements = {
        header: () => cy.get('h3'),
        checkbox1: () => cy.get('#checkboxes > :nth-child(1)'),
        checkbox2: () => cy.get('#checkboxes > :nth-child(3)')
    }

    checkCheckbox = {
        checkCheckbox1: () => this.elements.checkbox1().check(),
        checkCheckbox2: () => this.elements.checkbox2().check()
    }

    uncheckCheckbox = {
        uncheckCheckbox1: () => this.elements.checkbox1().uncheck(),
        uncheckCheckbox2: () => this.elements.checkbox2().uncheck()
    }
}

export default CheckboxesPage;